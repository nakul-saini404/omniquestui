import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadEmail, sendUserConfirmEmail } from "@/lib/email";

// Named POST export is required by Next.js App Router
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { leadData, answers, report } = body;

    // ── Validate ────────────────────────────────────────────────────────────
    if (!leadData?.fullName || !leadData?.email) {
      return NextResponse.json(
        { error: "Missing required fields: fullName and email" },
        { status: 400 }
      );
    }

    // ── 1. Insert Lead ──────────────────────────────────────────────────────
    const { data: lead, error: leadError } = await supabaseAdmin
      .from("personality_leads")
      .insert({
        full_name:        leadData.fullName,
        email:            leadData.email,
        phone:            leadData.phone            || null,
        city:             leadData.city             || null,
        education_level:  leadData.educationLevel   || null,
        program_interest: leadData.programInterest  || null,
        age:              leadData.age ? Number(leadData.age) : null,
        consent:          Boolean(leadData.consent),
        source:           "personality_test",
        created_at:       new Date().toISOString(),
      })
      .select()
      .single();

    if (leadError) {
      console.error("Lead insert error:", leadError);
      return NextResponse.json(
        { error: "Failed to save lead: " + leadError.message },
        { status: 500 }
      );
    }

    // ── 2. Insert Personality Result ────────────────────────────────────────
    if (report && lead) {
      const { error: resultError } = await supabaseAdmin
        .from("personality_results")
        .insert({
          lead_id:          lead.id,
          answers:          answers          || null,
          report:           report,
          personality_type: report.personalityType || null,
          overall_score:    report.overallScore    || null,
          created_at:       new Date().toISOString(),
        });

      if (resultError) {
        console.error("Result insert error:", resultError);
        // Non-fatal — lead saved, continue
      }
    }

    // ── 3. Send Emails (non-blocking) ───────────────────────────────────────
    Promise.allSettled([
      sendLeadEmail({
        fullName:        leadData.fullName,
        email:           leadData.email,
        phone:           leadData.phone,
        city:            leadData.city,
        educationLevel:  leadData.educationLevel,
        programInterest: leadData.programInterest,
        age:             leadData.age,
        personalityType: report?.personalityType,
        overallScore:    report?.overallScore,
      }).catch((err) => console.error("Admin email failed:", err)),

      sendUserConfirmEmail({
        name:            leadData.fullName,
        email:           leadData.email,
        goal:            leadData.programInterest  || "your chosen program",
        personalityType: report?.personalityType   || "Global Achiever",
        pathway:         report?.programRecommendation || "Personalised Program",
        overallScore:    report?.overallScore,
      }).catch((err) => console.error("User email failed:", err)),
    ]);

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (err) {
    console.error("Submit lead error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}