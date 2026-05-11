import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { transport } from "@/lib/email";
import { COUNTRY_FLAGS } from "@/lib/edupath-data";
import type { SubmitLeadPayload } from "@/types/edupath";

export async function POST(req: NextRequest) {
  try {
    const { studentData, aiInsight, predictedFinal, satEst, uniCount }: SubmitLeadPayload =
      await req.json();

    const { name, email, phone, grade, score, stream, field, countries } = studentData;
    const firstName = name.split(" ")[0];

    // ── 1. Save to Supabase ───────────────────────────────────────────────────
    const { error: dbError } = await supabaseAdmin
      .from("edupath_leads")
      .upsert(
        {
          full_name:            name,
          email:                email,
          phone:                phone,
          grade:                grade,
          current_score:        score,
          stream:               stream,
          field_of_study:       field,
          target_countries:     countries,
          predicted_final:      Math.round(predictedFinal),
          sat_estimate:         countries.includes("USA") ? satEst : null,
          universities_matched: uniCount,
          ai_insight:           aiInsight,
          source:               "edupath_dashboard",
          submitted_at:         new Date().toISOString(),
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
      ["Name",                 name],
      ["Email",                email],
      ["Phone",                phone],
      ["Grade",                `${grade}th Grade`],
      ["Stream",               stream],
      ["Field of Study",       field],
      ["Current Score",        `${score}%`],
      ["Predicted 12th",       `${Math.round(predictedFinal)}%`],
      ["SAT Estimate",         countries.includes("USA") ? `${satEst}/1600` : "N/A"],
      ["Universities Matched", `${uniCount} universities`],
      ["Target Countries",     countries.join(", ")],
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
        from:    `"EduPath Leads" <${process.env.SMTP_USER}>`,
        to:      process.env.ADMIN_EMAIL ?? process.env.SMTP_USER!,
        subject: `🎯 New EduPath Student: ${name} — Grade ${grade} · ${countries.join(", ")}`,
        html: `
          <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:28px;background:#0a0e1a;color:#e2e8f0;border-radius:16px;">
            <div style="margin-bottom:20px;">
              <h2 style="color:#3b82f6;margin:0 0 10px;">🎯 New EduPath Student Dashboard</h2>
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
    } catch (err) {
      console.error("Admin email error (non-fatal):", err);
    }

    // ── 3. Student confirmation email ─────────────────────────────────────────
    try {
      await transport.sendMail({
        from:    `"EduPath" <${process.env.SMTP_USER}>`,
        to:      email,
        subject: `🎓 Your EduPath Dashboard is Ready, ${firstName}!`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;background:#0a0e1a;color:#e2e8f0;border-radius:16px;">

            <!-- Header -->
            <div style="text-align:center;margin-bottom:28px;">
              <div style="font-size:32px;font-weight:800;margin-bottom:6px;">
                Edu<span style="color:#3b82f6;">Path</span>
              </div>
              <h1 style="font-size:22px;font-weight:700;margin:0 0 6px;">Hey ${firstName}! 👋</h1>
              <p style="color:rgba(241,245,255,.5);font-size:14px;margin:0;">
                Your AI university roadmap has been generated.
              </p>
            </div>

            <!-- Profile Summary -->
            <div style="background:linear-gradient(135deg,rgba(59,130,246,.12),rgba(139,92,246,.08));border:1px solid rgba(59,130,246,.25);border-radius:14px;padding:20px;margin-bottom:20px;">
              <div style="font-size:11px;color:#3b82f6;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px;">Your Profile Summary</div>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;width:140px;">Grade</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;">${grade}th Grade</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Stream</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;">${stream}</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Field</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;">${field}</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Current Score</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;color:#3b82f6;">${score}%</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Predicted 12th</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;color:#f59e0b;">${Math.round(predictedFinal)}%</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Target Countries</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;">${countries.map(c => `${COUNTRY_FLAGS[c]} ${c}`).join(" · ")}</td>
                </tr>
                <tr>
                  <td style="padding:7px 0;color:rgba(241,245,255,.5);font-size:13px;">Unis Matched</td>
                  <td style="padding:7px 0;font-weight:600;font-size:13px;color:#10b981;">${uniCount} universities</td>
                </tr>
              </table>
            </div>

            <!-- AI Insight -->
            ${aiInsight ? `
            <div style="background:rgba(59,130,246,.08);border:1px solid rgba(59,130,246,.2);border-radius:12px;padding:16px;margin-bottom:20px;">
              <div style="font-size:11px;color:#3b82f6;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">✦ Your AI Insight</div>
              <p style="font-size:13px;color:#c7d9f5;line-height:1.6;margin:0;">${aiInsight}</p>
            </div>` : ""}

            <!-- What's Next -->
            <div style="background:rgba(16,185,129,.07);border:1px solid rgba(16,185,129,.2);border-radius:12px;padding:16px;margin-bottom:24px;">
              <div style="font-size:11px;color:#10b981;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px;">📋 What's Next</div>
              <ul style="margin:0;padding-left:18px;color:rgba(241,245,255,.7);font-size:13px;line-height:2;">
                <li>Log back in anytime to view your full dashboard</li>
                <li>Our counsellors will reach out within 1–2 business days</li>
                <li>Start working on the action items in your dashboard</li>
                ${countries.includes("USA") ? "<li>Begin SAT prep — target 1400+ for strong US apps</li>" : ""}
              </ul>
            </div>

            <p style="color:rgba(241,245,255,.5);font-size:13px;line-height:1.7;margin-bottom:24px;">
              Questions? Reply to this email or reach us directly — we're here to help you every step of the way.
            </p>

            <hr style="border-color:rgba(255,255,255,.08);margin:20px 0;"/>
            <p style="color:rgba(241,245,255,.25);font-size:12px;text-align:center;margin:0;">
              EduPath · AI University Planner ·
              <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://eduquest.org.in"}" style="color:#3b82f6;">eduquest.org.in</a>
            </p>
          </div>
        `,
      });
      console.log("✅ EduPath student confirmation email sent to:", email);
    } catch (err) {
      console.error("Student email error (non-fatal):", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("EduPath lead submission error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}