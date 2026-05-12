// app/api/save-contact-lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { transport } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email, mobile, city, interest, pageName } = await req.json() as {
      name:     string;
      email:    string;
      mobile:   string;
      city?:    string;
      interest?: string;
      pageName?: string;
    };

    // ── Validate ──────────────────────────────────────────────────────────────
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, mobile" },
        { status: 400 }
      );
    }

    // ── 1. Save to personality_leads (unified leads table) ────────────────────
    const { error: leadErr } = await supabaseAdmin
      .from("personality_leads")
      .upsert(
        {
          name:             name,
          full_name:        name,
          email:            email,
          phone:            mobile,
          city:             city    || null,
          program_interest: interest || null,
          source:           pageName || "contact_form",
          consent:          true,
        },
        { onConflict: "email" }
      );

    if (leadErr) {
      console.error("Contact lead save error:", leadErr);
      // Non-fatal — still send emails
    } else {
      console.log("✅ Contact lead saved:", email);
    }

    // ── 2. Admin notification email ───────────────────────────────────────────
    try {
      await transport.sendMail({
        from:    `"OmniQuest Leads" <${process.env.SMTP_USER}>`,
        to:      process.env.ADMIN_EMAIL!,
        subject: `📋 New Lead from ${pageName || "Contact Form"}: ${name} — ${interest ?? "General Enquiry"}`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
              <div style="font-size:2rem;">📋</div>
              <div>
                <h2 style="color:#c9a84c;margin:0;font-size:1.2rem;">New Contact Form Submission</h2>
                <p style="color:rgba(241,245,255,.4);margin:0;font-size:13px;">From the EduQuest website contact section</p>
              </div>
            </div>
            <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;width:160px;border-bottom:1px solid rgba(255,255,255,.06);">Name</td>
                <td style="padding:10px 0;font-weight:700;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">Email</td>
                <td style="padding:10px 0;font-weight:700;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">
                  <a href="mailto:${email}" style="color:#5b8aff;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">Mobile</td>
                <td style="padding:10px 0;font-weight:700;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">
                  <a href="tel:${mobile.replace(/\s/g,"")}" style="color:#34d399;text-decoration:none;">${mobile}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">City</td>
                <td style="padding:10px 0;font-weight:700;font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);">${city ?? "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(241,245,255,.5);font-size:13px;">Interested In</td>
                <td style="padding:10px 0;font-size:13px;">
                  <span style="background:rgba(201,168,76,.15);border:1px solid rgba(201,168,76,.3);color:#c9a84c;padding:3px 12px;border-radius:50px;font-size:12px;font-weight:700;">
                    ${interest ?? "General Enquiry"}
                  </span>
                </td>
              </tr>
            </table>

            <div style="margin-top:24px;padding:16px;background:rgba(201,168,76,.07);border:1px solid rgba(201,168,76,.2);border-radius:12px;">
              <p style="font-size:12px;color:rgba(241,245,255,.5);margin:0;line-height:1.6;">
                📌 Source: <strong style="color:rgba(241,245,255,.7);">${pageName || "Contact Form"}</strong><br/>
                Submitted at: <strong style="color:rgba(241,245,255,.7);">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</strong>
              </p>
            </div>
          </div>
        `,
      });
      console.log("✅ Contact admin email sent");
    } catch (emailErr) {
      console.error("Contact admin email error (non-fatal):", emailErr);
    }

    // ── 3. User confirmation email ────────────────────────────────────────────
    try {
      const firstName = name.split(" ")[0];
      await transport.sendMail({
        from:    `"OmniQuest" <${process.env.SMTP_USER}>`,
        to:      email,
        subject: `✅ We've received your ${pageName ? pageName + " " : ""}request, ${firstName}!`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
            <div style="text-align:center;margin-bottom:28px;">
              <div style="font-size:3rem;margin-bottom:12px;">🎓</div>
              <h1 style="font-size:24px;font-weight:800;color:white;margin-bottom:8px;">Hey ${firstName}! 👋</h1>
              <p style="color:rgba(241,245,255,.5);font-size:15px;margin:0;">Thanks for reaching out to OmniQuest.</p>
            </div>

            <div style="background:linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.05));border:1px solid rgba(201,168,76,.25);border-radius:14px;padding:20px;margin-bottom:20px;">
              <div style="font-size:11px;color:#c9a84c;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:8px;">Your Request Summary</div>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:6px 0;color:rgba(241,245,255,.5);font-size:13px;width:140px;">Program</td>
                  <td style="padding:6px 0;font-weight:600;font-size:13px;color:#c9a84c;">${interest ?? "General Enquiry"}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:rgba(241,245,255,.5);font-size:13px;">Mobile</td>
                  <td style="padding:6px 0;font-weight:600;font-size:13px;">${mobile}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:rgba(241,245,255,.5);font-size:13px;">City</td>
                  <td style="padding:6px 0;font-weight:600;font-size:13px;">${city ?? "—"}</td>
                </tr>
              </table>
            </div>

            <p style="color:rgba(241,245,255,.65);font-size:14px;line-height:1.8;margin-bottom:24px;">
              Our expert counsellors will call you back within <strong style="color:white;">1–2 business days</strong>. 
              In the meantime, explore your options with our free AI Personality Test:
            </p>

            <div style="text-align:center;margin-bottom:20px;">
              <a href="/personality-test"
                style="display:inline-block;padding:14px 32px;border-radius:50px;background:linear-gradient(135deg,#c9a84c,#a07830);color:white;font-weight:700;text-decoration:none;font-size:15px;box-shadow:0 8px 24px rgba(201,168,76,.3);">
                🧠 Take Free Personality Test
              </a>
            </div>

            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px;">
              <a href="tel:+919958041888"
                style="padding:10px 18px;border-radius:50px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.8);font-size:13px;font-weight:600;text-decoration:none;">
                📞 +91-9958041888
              </a>
              <a href="mailto:contact@eduquest.org.in"
                style="padding:10px 18px;border-radius:50px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.8);font-size:13px;font-weight:600;text-decoration:none;">
                ✉ contact@eduquest.org.in
              </a>
            </div>

            <hr style="border-color:rgba(255,255,255,.08);margin:20px 0"/>
            <p style="color:rgba(241,245,255,.25);font-size:12px;text-align:center;margin:0;">
              OmniQuest · DLF Phase IV, Gurugram ·
              <a href="https://eduquest.org.in" style="color:#c9a84c;">eduquest.org.in</a>
            </p>
          </div>
        `,
      });
      console.log("✅ Contact confirmation email sent to:", email);
    } catch (emailErr) {
      console.error("Contact user email error (non-fatal):", emailErr);
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("save-contact-lead error:", err);
    return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
  }
}