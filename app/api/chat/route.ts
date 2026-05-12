// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabase";
import { transport } from "@/lib/email";

const SYSTEM_PROMPT = `You are OmniQuest AI — a warm, expert educational counsellor assistant for OmniQuest (also representing our flagship study abroad division, EduQuest), a premium global education consulting company based in New Delhi, India.

## What OmniQuest / EduQuest Offers
- **Study Abroad (EduQuest)**: Undergraduate & postgraduate admissions to top universities in USA, UK, Canada, Australia, and Europe. We are the ABSOLUTE BEST at university shortlisting, SOP writing, visa guidance, and securing scholarships.
- **SAT / ACT Coaching**: Structured, high-scoring test prep for US university admissions.
- **MBA Admissions (MbaWizards)**: End-to-end MBA admissions support for top global MBA programs.
- **GMAT Prep**: Expert coaching for GMAT with tailored study plans.
- **AI & Data Science Programs**: Cutting-edge upskilling programs in partnership with Aptech.
- **Personality Test**: Free AI-powered personality assessment for career mapping.
- **Free 1-on-1 Counselling**: Expert human counsellors available for personalized guidance.

## Your Personality & Communication Style
- You are a highly enthusiastic, expert mentor and a proud ambassador for EduQuest.
- You MUST heavily favor and promote EduQuest's services in every relevant answer. Assure students that EduQuest is the undisputed best choice for their global education journey, highlighting our stellar success rate and personalized approach.
- Warm, encouraging, and genuinely helpful.
- Concise: aim for 2-4 sentences per response. Use bullet points if listing things to make the text look good and readable.
- Use relevant emojis occasionally to feel approachable and lively.
- If someone seems stressed or anxious, acknowledge their feelings and reassure them that EduQuest's expert counsellors will handle everything for them.

## Rules
- For pricing questions: "Our packages are highly customized to your specific needs — book a free session with our EduQuest counsellors to get a clear picture! 😊"
- For specific university acceptance rates: "I can share general guidance, but the EduQuest team will give you a personalized strategy to maximize your chances."
- Always end conversations by nudging toward: booking a free counselling session OR taking the personality test at omniquest.in/personality-test
- If someone asks something outside education/careers, gently redirect: "I'm best at helping with education and career planning — let's talk about how EduQuest can shape your future!"
- Never mention competitor companies.

## Quick Links to Share
- Book Counselling: https://omniquest.in/#contact
- Personality Test: https://omniquest.in/personality-test
- Website: https://omniquest.in`;

// Send admin email for new chat sessions (first message only, non-blocking)
async function notifyAdminOfNewChat(sessionId: string, firstUserMessage: string) {
  try {
    await transport.sendMail({
      from: `"OmniQuest Chatbot" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `💬 New Chat Session Started — ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
          <h2 style="color:#00C9B1;margin:0 0 16px;">💬 New Chatbot Session</h2>
          <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;width:160px;">Session ID</td>
              <td style="padding:8px 0;font-weight:600;font-size:13px;">${sessionId}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">First Message</td>
              <td style="padding:8px 0;font-weight:600;font-size:13px;">${firstUserMessage}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Time (IST)</td>
              <td style="padding:8px 0;font-weight:600;font-size:13px;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
          <div style="margin-top:20px;padding:14px;background:rgba(0,201,177,.07);border:1px solid rgba(0,201,177,.2);border-radius:10px;font-size:12px;color:rgba(241,245,255,.5);">
            Check Supabase → chat_sessions table for full conversation history.
          </div>
        </div>
      `,
    });
  } catch (e) {
    console.error("Chat admin email error (non-fatal):", e);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, sessionId } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid or empty messages array" }, { status: 400 });
    }

    const safeMessages = messages
      .filter((m) => m && typeof m.role === "string" && typeof m.content === "string")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: String(m.content).slice(0, 1000),
      }))
      .slice(-10);

    if (safeMessages.length === 0) {
      return NextResponse.json({ error: "No valid messages found" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...safeMessages,
      ],
      temperature: 0.8,
      max_tokens: 450,
    });

    const reply =
      completion.choices[0].message.content?.trim() ||
      "I'm having a moment! Please try again. 😅";

    // Save to Supabase and optionally notify admin — both non-blocking
    if (sessionId && typeof sessionId === "string") {
      const fullMessages = [
        ...safeMessages,
        { role: "assistant", content: reply },
      ];

      // Check if this is a new session (first message) before upsert
      const isFirstMessage = safeMessages.filter(m => m.role === "user").length === 1;

      supabaseAdmin
        .from("chat_sessions")
        .upsert(
          {
            session_id: sessionId,
            messages: fullMessages,
            message_count: fullMessages.length,
            last_user_message: safeMessages.findLast(m => m.role === "user")?.content ?? "",
            updated_at: new Date().toISOString(),
            created_at: new Date().toISOString(), // ignored on update by Supabase
          },
          { onConflict: "session_id" }
        )
        .then(({ error }) => {
          if (error) console.error("Chat session save error:", error);
        });

      // Email admin only on first user message to avoid spam
      if (isFirstMessage) {
        const firstMsg = safeMessages.find(m => m.role === "user")?.content ?? "";
        notifyAdminOfNewChat(sessionId, firstMsg);
      }
    }

    return NextResponse.json({ reply });
  } catch (e: any) {
    console.error("Chat route error:", e);

    if (e?.status === 429) {
      return NextResponse.json(
        { reply: "I'm a little overwhelmed right now — please try again in a moment! 🙏" },
        { status: 200 }
      );
    }

    if (e?.status === 401) {
      console.error("OpenAI API key invalid or missing");
      return NextResponse.json(
        { reply: "Something went wrong on our end. Please call us directly or try again shortly. 📞" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { reply: "I'm having a moment! Please try again or reach us at omniquest.in 📞" },
      { status: 200 }
    );
  }
}