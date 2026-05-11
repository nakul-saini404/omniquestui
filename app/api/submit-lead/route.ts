import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadEmail, sendUserConfirmEmail } from "@/lib/email";
import type { LeadFormData } from "@/lib/personality";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { leadData, answers, report }: {
      leadData: LeadFormData;
      answers?: Record<number, number>;
      report?: Record<string, unknown>;
    } = body;

    // ── Validate ──────────────────────────────────────────────────────────────
    if (!leadData?.fullName || !leadData?.email) {
      return NextResponse.json(
        { error: "Missing required fields: fullName and email" },
        { status: 400 }
      );
    }

    // ── 1. Upsert Lead ────────────────────────────────────────────────────────
    // IMPORTANT: updated_at is NOT included — avoids PGRST204 if column missing
    const upsertData = {
      name:             leadData.fullName,
      full_name:        leadData.fullName,
      email:            leadData.email,
      phone:            leadData.phone           || null,
      city:             leadData.city            || null,
      education_level:  leadData.educationLevel  || null,
      program_interest: leadData.programInterest || null,
      age:              leadData.age ? Number(leadData.age) : null,
      consent:          Boolean(leadData.consent),
      current_class:    leadData.currentClass    || null,
      target_country:   leadData.targetCountry   || null,
      target_degree:    leadData.targetDegree    || null,
      flow_type:        getFlowLabel(leadData.currentClass),
      personality_type: (report?.personalityType as string)  ?? null,
      overall_score:    (report?.overallScore    as number)  ?? null,
      top_career:       (report?.careerMatches   as Array<{title:string}> | undefined)?.[0]?.title ?? null,
      stream_recommendation: (report?.streamRecommendation as {primary?:string} | undefined)?.primary ?? null,
      quiz_answers:     answers || null,
      full_report:      report  || null,
      source:           "personality_test",
    };

    const { data: lead, error: leadError } = await supabaseAdmin
      .from("personality_leads")
      .upsert(upsertData, { onConflict: "email" })
      .select("id")
      .single();

    if (leadError) {
      console.error("Lead upsert error:", leadError);
      return NextResponse.json(
        { error: "Failed to save lead: " + leadError.message },
        { status: 500 }
      );
    }

    console.log("✅ Lead saved, ID:", lead.id);

    // ── 2. Insert personality_results row ─────────────────────────────────────
    if (report && lead) {
      const { error: resultError } = await supabaseAdmin
        .from("personality_results")
        .insert({
          lead_id:          lead.id,
          answers:          answers || null,
          report:           report,
          personality_type: (report.personalityType as string) || null,
          overall_score:    (report.overallScore    as number) || null,
          current_class:    leadData.currentClass   || null,
          target_country:   leadData.targetCountry  || null,
          target_degree:    leadData.targetDegree   || null,
          flow_type:        getFlowLabel(leadData.currentClass),
        });

      if (resultError) {
        // Non-fatal — lead is already saved, just log
        console.error("Result insert error (non-fatal):", resultError);
      } else {
        console.log("✅ Personality result saved for lead:", lead.id);
      }
    }

    // ── 3. Send emails (non-blocking — don't await, don't fail the response) ──
    Promise.allSettled([
      sendLeadEmail({
        fullName:        leadData.fullName,
        email:           leadData.email,
        phone:           leadData.phone,
        city:            leadData.city,
        educationLevel:  leadData.educationLevel,
        programInterest: leadData.programInterest,
        age:             leadData.age,
        personalityType: report?.personalityType as string | undefined,
        overallScore:    report?.overallScore    as number | undefined,
        currentClass:    leadData.currentClass,
        targetCountry:   leadData.targetCountry,
        targetDegree:    leadData.targetDegree,
        topUniversities: (report?.universities as Array<{name:string}> | undefined)
                           ?.slice(0,3).map(u => u.name),
        streamRecommendation: (report?.streamRecommendation as {primary?:string} | undefined)?.primary,
      }).then(() => console.log("✅ Admin lead email sent"))
        .catch(err => console.error("Admin email failed:", err)),

      sendUserConfirmEmail({
        name:            leadData.fullName,
        email:           leadData.email,
        goal:            leadData.programInterest || leadData.targetDegree || "your chosen program",
        personalityType: (report?.personalityType as string) || "Global Achiever",
        pathway:         (report?.programRecommendation as string) || "Personalised Program",
        overallScore:    report?.overallScore as number | undefined,
        currentClass:    leadData.currentClass,
        targetCountry:   leadData.targetCountry,
        targetDegree:    leadData.targetDegree,
        streamPrimary:   (report?.streamRecommendation as {primary?:string} | undefined)?.primary,
      }).then(() => console.log("✅ User confirm email sent to:", leadData.email))
        .catch(err => console.error("User email failed:", err)),
    ]);

    return NextResponse.json({ success: true, leadId: lead.id });

  } catch (err) {
    console.error("Submit lead error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}

function getFlowLabel(currentClass?: string): string {
  if (!currentClass) return "unknown";
  const n = parseInt(currentClass, 10);
  if (!isNaN(n) && n <= 10) return "stream_recommendation";
  return "university_recommendation";
}