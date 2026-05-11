import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host:   process.env.SMTP_HOST  || "smtp.gmail.com",
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ─── Admin lead notification ────────────────────────────────────────────── */
interface LeadEmailData {
  fullName:              string;
  email:                 string;
  phone?:                string;
  city?:                 string;
  educationLevel?:       string;
  programInterest?:      string;
  age?:                  string | number;
  personalityType?:      string;
  overallScore?:         number;
  // Extended
  currentClass?:         string;
  targetCountry?:        string;
  targetDegree?:         string;
  topUniversities?:      string[];
  streamRecommendation?: string;
}

export async function sendLeadEmail(data: LeadEmailData) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER!;
  const isStream   = data.streamRecommendation != null;

  const rows: [string, string][] = [
    ["Name",              data.fullName],
    ["Email",             data.email],
    ["Phone",             data.phone             || "—"],
    ["City",              data.city              || "—"],
    ["Age",               String(data.age        || "—")],
    ["Current Class",     data.currentClass      || "—"],
    ["Education Level",   data.educationLevel    || "—"],
    ["Program Interest",  data.programInterest   || "—"],
  ];

  if (isStream) {
    rows.push(["Recommended Stream", data.streamRecommendation ?? "—"]);
  } else {
    rows.push(["Target Country", data.targetCountry ?? "—"]);
    rows.push(["Target Degree",  data.targetDegree  ?? "—"]);
    if (data.topUniversities?.length) {
      rows.push(["Top Universities", data.topUniversities.join(", ")]);
    }
  }

  if (data.personalityType) rows.push(["Personality Type", data.personalityType]);
  if (data.overallScore != null) rows.push(["Overall Score", `${data.overallScore}/100`]);

  const badge = isStream
    ? `<span style="background:#34d39922;border:1px solid #34d39955;color:#34d399;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;">STREAM RECOMMENDATION</span>`
    : `<span style="background:#5b8aff22;border:1px solid #5b8aff55;color:#5b8aff;padding:3px 10px;border-radius:50px;font-size:11px;font-weight:700;">UNIVERSITY RECOMMENDATION · ${data.targetCountry}</span>`;

  await transport.sendMail({
    from:    `"OmniQuest Leads" <${process.env.SMTP_USER}>`,
    to:      adminEmail,
    subject: `🎯 New Lead: ${data.fullName} — Class ${data.currentClass ?? "?"} ${data.targetCountry ? "· " + data.targetCountry : ""}`,
    html: `
      <div style="font-family:sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
          <h2 style="color:#00C9B1;margin:0;">🎯 New OmniQuest Lead</h2>
          ${badge}
        </div>
        <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>
        <table style="width:100%;border-collapse:collapse;">
          ${rows.map(([k,v]) => `
            <tr>
              <td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;width:180px;">${k}</td>
              <td style="padding:8px 0;font-weight:600;font-size:13px;">${v}</td>
            </tr>`).join("")}
        </table>
        <div style="margin-top:24px;padding:16px;background:rgba(0,201,177,.07);border:1px solid rgba(0,201,177,.2);border-radius:10px;font-size:12px;color:rgba(241,245,255,.5);">
          Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>
    `,
  });
}

/* ─── User confirmation email ────────────────────────────────────────────── */
interface UserConfirmEmailData {
  name:             string;
  email:            string;
  goal?:            string;
  personalityType?: string;
  pathway?:         string;
  overallScore?:    number;
  // Extended
  currentClass?:    string;
  targetCountry?:   string;
  targetDegree?:    string;
  streamPrimary?:   string;
}

export async function sendUserConfirmEmail(data: UserConfirmEmailData) {
  const firstName   = data.name.split(" ")[0];
  const isStream    = data.streamPrimary != null && data.targetCountry == null;
  const countryFlag: Record<string,string> = {
    USA:"🇺🇸", UK:"🇬🇧", Canada:"🇨🇦", Australia:"🇦🇺",
    Europe:"🇪🇺", Singapore:"🇸🇬", "South Korea":"🇰🇷",
  };

  await transport.sendMail({
    from:    `"OmniQuest" <${process.env.SMTP_USER}>`,
    to:      data.email,
    subject: `✨ Your Personality Report is Ready, ${firstName}!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:28px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
        <div style="text-align:center;margin-bottom:28px;">
          <h1 style="font-size:26px;font-weight:800;color:white;margin-bottom:6px;">Hey ${firstName}! 👋</h1>
          <p style="color:rgba(241,245,255,.5);font-size:15px;margin:0;">Your AI Personality Report is ready.</p>
        </div>

        ${data.personalityType ? `
        <div style="background:linear-gradient(135deg,rgba(91,138,255,.15),rgba(167,139,250,.12));border:1px solid rgba(91,138,255,.25);border-radius:14px;padding:20px;text-align:center;margin-bottom:20px;">
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px;">Your Personality Type</div>
          <div style="font-size:22px;font-weight:800;background:linear-gradient(135deg,#5b8aff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${data.personalityType}</div>
          ${data.overallScore != null ? `<div style="color:#34d399;font-size:28px;font-weight:800;margin-top:8px;">${data.overallScore}<span style="font-size:14px;color:rgba(241,245,255,.4)">/100</span></div>` : ""}
        </div>
        ` : ""}

        ${isStream && data.streamPrimary ? `
        <div style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);border-radius:12px;padding:16px;margin-bottom:16px;">
          <div style="font-size:12px;color:#34d399;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;">🏫 Recommended Stream for Class 11</div>
          <div style="font-weight:700;font-size:16px;">${data.streamPrimary}</div>
          <p style="font-size:13px;color:rgba(241,245,255,.5);margin-top:6px;margin-bottom:0;">Our counsellors will help you align your subjects and activities for the best outcome.</p>
        </div>
        ` : ""}

        ${!isStream && data.targetCountry ? `
        <div style="background:rgba(91,138,255,.08);border:1px solid rgba(91,138,255,.2);border-radius:12px;padding:16px;margin-bottom:16px;">
          <div style="font-size:12px;color:#5b8aff;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;">🌍 Your University Target</div>
          <div style="font-weight:700;font-size:16px;">${countryFlag[data.targetCountry] ?? "🌍"} ${data.targetCountry} — ${data.targetDegree ?? "Your Chosen Degree"}</div>
          <p style="font-size:13px;color:rgba(241,245,255,.5);margin-top:6px;margin-bottom:0;">We've identified the best universities, required exams, and scholarships for your profile.</p>
        </div>
        ` : ""}

        ${data.pathway ? `
        <div style="background:rgba(0,201,177,.08);border:1px solid rgba(0,201,177,.2);border-radius:12px;padding:16px;margin-bottom:20px;">
          <div style="font-size:12px;color:#00C9B1;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;">🎯 Recommended Program</div>
          <div style="font-weight:700;font-size:15px;">${data.pathway}</div>
        </div>
        ` : ""}

        <p style="color:rgba(241,245,255,.6);font-size:14px;line-height:1.75;margin-bottom:24px;">
          Our expert counsellors have been notified and will reach out to you shortly. 
          In the meantime, you can book a free strategy session directly:
        </p>

        <div style="text-align:center;">
          <a href="/contact-us" style="display:inline-block;padding:14px 32px;border-radius:50px;background:linear-gradient(135deg,#00C9B1,#2563EB);color:white;font-weight:700;text-decoration:none;font-size:15px;box-shadow:0 8px 24px rgba(0,201,177,.3);">
            📅 Book Free Counselling Session
          </a>
        </div>

        <hr style="border-color:rgba(255,255,255,.08);margin:28px 0"/>
        <p style="color:rgba(241,245,255,.25);font-size:12px;text-align:center;margin:0;">
          OmniQuest · New Delhi, India · <a href="https://eduquest.org.in" style="color:#5b8aff;">eduquest.org.in</a>
        </p>
      </div>
    `,
  });
}