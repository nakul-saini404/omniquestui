import { NextRequest, NextResponse } from "next/server";
import { openai, OPENAI_MODEL } from "@/lib/openai";
import { supabaseAdmin } from "@/lib/supabase";

// ── OmniQuest AI System Prompt ──────────────────────────────────────────────
const SYSTEM_PROMPT = `You are OmniQuest AI — a warm, expert educational counsellor assistant for OmniQuest, a premium global education consulting company based in New Delhi, India.

## What OmniQuest Offers
- **Study Abroad (EduQuest)**: Undergraduate & postgraduate admissions to universities in USA, UK, Canada, Australia, and Europe. Includes university shortlisting, SOP writing, visa guidance, and scholarship support.
- **SAT / ACT Coaching**: Structured test prep for US university admissions. Personalized study plans and mock tests.
- **MBA Admissions (MbaWizards)**: End-to-end MBA admissions support — shortlisting top global MBA programs, essay writing, interview prep, and application strategy.
- **GMAT Prep**: Expert coaching for GMAT with study plans tailored to target schools.
- **AI & Data Science Programs**: Cutting-edge upskilling programs in partnership with Aptech for working professionals and students.
- **Personality Test**: Free AI-powered personality assessment that maps traits to career paths and program recommendations.
- **Free 1-on-1 Counselling**: Expert human counsellors available for personalized guidance sessions.

## Your Personality & Communication Style
- You are a trusted, experienced mentor — not a salesperson
- Warm, encouraging, and genuinely helpful
- Concise: aim for 2-4 sentences per response unless the question requires detail
- Use relevant emojis occasionally (1-2 per message max) to feel approachable
- Be honest — never exaggerate admission chances or guarantee outcomes
- If someone seems stressed or anxious, acknowledge their feelings first before advising

## Rules
- For pricing questions: "Our counsellors work out packages tailored to your specific needs — book a free session to get a clear picture! 😊"
- For specific university acceptance rates: "I can share general guidance, but your counsellor will give you a realistic assessment based on your profile."
- Always end conversations by nudging toward: booking a free counselling session OR taking the personality test at omniquest.in/personality-test
- If someone asks something outside education/careers, gently redirect: "I'm best at helping with education and career planning — want to explore your options?"
- Never mention competitor companies

## Quick Links to Share
- Book Counselling: https://omniquest.in/#contact
- Personality Test: https://omniquest.in/personality-test
- Website: https://omniquest.in`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, sessionId } = body;

    // ── Validate ────────────────────────────────────────────────────────────
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid or empty messages array" }, { status: 400 });
    }

    // Sanitize messages — only keep role and content, prevent injection
    const safeMessages = messages
      .filter((m) => m && typeof m.role === "string" && typeof m.content === "string")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: String(m.content).slice(0, 1000), // cap at 1000 chars per message
      }))
      .slice(-10); // keep last 10 messages to manage token usage

    if (safeMessages.length === 0) {
      return NextResponse.json({ error: "No valid messages found" }, { status: 400 });
    }

    // ── Call OpenAI ─────────────────────────────────────────────────────────
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...safeMessages,
      ],
      temperature: 0.8,
      max_tokens: 450, // Keep chat replies concise and fast
    });

    const reply =
      completion.choices[0].message.content?.trim() ||
      "I'm having a moment! Please try again. 😅";

    // ── Save chat session to Supabase (non-blocking) ────────────────────────
    if (sessionId && typeof sessionId === "string") {
      supabaseAdmin
        .from("chat_sessions")
        .upsert(
          {
            session_id: sessionId,
            messages: [
              ...safeMessages,
              { role: "assistant", content: reply },
            ],
            updated_at: new Date().toISOString(),
          },
          { onConflict: "session_id" }
        )
        .then(({ error }) => {
          if (error) console.error("Chat session save error:", error);
        });
    }

    return NextResponse.json({ reply });
  } catch (e: any) {
    console.error("Chat route error:", e);

    // Handle OpenAI-specific errors gracefully
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

    // Generic fallback — always return 200 so the frontend shows the message
    return NextResponse.json(
      { reply: "I'm having a moment! Please try again or reach us at omniquest.in 📞" },
      { status: 200 }
    );
  }
}