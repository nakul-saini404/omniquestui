import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { transport } from "@/lib/email";
import { COUNTRY_FLAGS } from "@/lib/edupath-data";
import type { SubmitLeadPayload } from "@/types/edupath";

export async function POST(req: NextRequest) {
  try {
    const { studentData, aiInsight, predictedFinal, satEst, uniCount }: SubmitLeadPayload =
      await req.json();

    const { name, grade, score, stream, field, countries } = studentData;

    // ── 1. Save to Supabase ───────────────────────────────────────────────────
    const { error: dbError } = await supabaseAdmin
      .from("edupath_leads")
      .upsert(
        {
          full_name:        name,
          grade:            grade,
          current_score:    score,
          stream:           stream,
          field_of_study:   field,
          target_countries: countries,
          predicted_final:  Math.round(predictedFinal),
          sat_estimate:     countries.includes("USA") ? satEst : null,
          universities_matched: uniCount,
          ai_insight:       aiInsight,
          source:           "edupath_dashboard",
          submitted_at:     new Date().toISOString(),
        },
        { onConflict: "full_name,grade" }
      );

    if (dbError) {
      console.error("Supabase save error (non-fatal):", dbError);
    } else {
      console.log("✅ EduPath lead saved:", name);
    }

    // ── 2. Admin email ────────────────────────────────────────────────────────
    const countryBadges = countries
      .map(
        (c) =>
          `<span style="background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.3);color:#93c5fd;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;margin-right:6px;">${COUNTRY_FLAGS[c]} ${c}</span>`
      )
      .join("");

    const rows: [string, string][] = [
      ["Name", name],
      ["Grade", `${grade}th Grade`],
      ["Stream", stream],
      ["Field of Study", field],
      ["Current Score", `${score}%`],
      ["Predicted 12th", `${Math.round(predictedFinal)}%`],
      ["SAT Estimate", countries.includes("USA") ? `${satEst}/1600` : "N/A"],
      ["Universities Matched", `${uniCount} universities`],
      ["Target Countries", countries.join(", ")],
    ];

    const tableRows = rows
      .map(
        ([k, v]) => `
        <tr>
          <td style="padding:9px 0;color:rgba(241,245,255,.5);font-size:13px;width:180px;border-bottom:1px solid rgba(255,255,255,.06);">${k}</td>
          <td style="padding:9px 0;font-weight:600;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">${v}</td>
        </tr>`
      )
      .join("");

    try {
      await transport.sendMail({
        from: `"EduPath Leads" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL ?? process.env.SMTP_USER!,
        subject: `🎯 New EduPath Student: ${name} — Grade ${grade} · ${countries.join(", ")}`,
        html: `
          <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:28px;background:#0a0e1a;color:#e2e8f0;border-radius:16px;">
            <div style="margin-bottom:20px;">
              <h2 style="color:#3b82f6;margin:0 0 6px;">🎯 New EduPath Student Dashboard</h2>
              <div>${countryBadges}</div>
            </div>
            <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px;"/>

            <table style="width:100%;border-collapse:collapse;">${tableRows}</table>

            ${aiInsight ? `
            <div style="margin-top:20px;padding:16px;background:linear-gradient(135deg,rgba(59,130,246,.1),rgba(139,92,246,.08));border:1px solid rgba(59,130,246,.25);border-radius:12px;">
              <div style="font-size:11px;color:#3b82f6;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">✦ AI Insight Generated</div>
              <p style="font-size:13px;color:#c7d9f5;line-height:1.6;margin:0;">${aiInsight}</p>
            </div>` : ""}

            <div style="margin-top:20px;padding:14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-size:12px;color:rgba(241,245,255,.4);">
              Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </div>
          </div>
        `,
      });
      console.log("✅ EduPath admin email sent");
    } catch (emailErr) {
      console.error("Admin email error (non-fatal):", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("EduPath lead submission error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}