import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Send lead notification to admin ─────────────────────────────────────────
interface LeadEmailData {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  educationLevel?: string;
  programInterest?: string;
  age?: string | number;
  personalityType?: string;
  overallScore?: number;
}

export async function sendLeadEmail(data: LeadEmailData) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER!;

  await transport.sendMail({
    from: `"OmniQuest Leads" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `🎯 New Lead: ${data.fullName} — ${data.personalityType || "Personality Test"}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
        <h2 style="color:#00C9B1;margin-bottom:8px;">🎯 New OmniQuest Lead</h2>
        <hr style="border-color:rgba(255,255,255,.1);margin-bottom:20px"/>

        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Name</td><td style="padding:8px 0;font-weight:600;">${data.fullName}</td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#5b8aff;">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Phone</td><td style="padding:8px 0;">${data.phone || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">City</td><td style="padding:8px 0;">${data.city || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Age</td><td style="padding:8px 0;">${data.age || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Education</td><td style="padding:8px 0;">${data.educationLevel || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Program Interest</td><td style="padding:8px 0;">${data.programInterest || "—"}</td></tr>
          ${data.personalityType ? `<tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Personality Type</td><td style="padding:8px 0;color:#a78bfa;font-weight:700;">${data.personalityType}</td></tr>` : ""}
          ${data.overallScore !== undefined ? `<tr><td style="padding:8px 0;color:rgba(241,245,255,.5);font-size:13px;">Overall Score</td><td style="padding:8px 0;color:#34d399;font-weight:700;">${data.overallScore}/100</td></tr>` : ""}
        </table>

        <div style="margin-top:24px;padding:16px;background:rgba(0,201,177,.1);border:1px solid rgba(0,201,177,.2);border-radius:10px;font-size:13px;color:rgba(241,245,255,.6);">
          Submitted at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>
    `,
  });
}

// ─── Send confirmation email to the user ─────────────────────────────────────
interface UserConfirmEmailData {
  name: string;
  email: string;
  goal?: string;
  personalityType?: string;
  pathway?: string;
  overallScore?: number;
}

export async function sendUserConfirmEmail(data: UserConfirmEmailData) {
  await transport.sendMail({
    from: `"OmniQuest" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `✨ Your Personality Report is Ready, ${data.name.split(" ")[0]}!`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0B1C3D;color:#f1f5ff;border-radius:16px;">
        <div style="text-align:center;margin-bottom:28px;">
          <h1 style="font-size:28px;font-weight:800;color:white;margin-bottom:4px;">Hey ${data.name.split(" ")[0]}! 👋</h1>
          <p style="color:rgba(241,245,255,.5);font-size:15px;">Your Grok AI Personality Report is ready.</p>
        </div>

        ${data.personalityType ? `
        <div style="background:linear-gradient(135deg,rgba(91,138,255,.15),rgba(167,139,250,.12));border:1px solid rgba(91,138,255,.25);border-radius:14px;padding:20px;text-align:center;margin-bottom:20px;">
          <div style="font-size:12px;color:rgba(241,245,255,.4);letter-spacing:.1em;text-transform:uppercase;margin-bottom:6px;">Your Personality Type</div>
          <div style="font-size:22px;font-weight:800;background:linear-gradient(135deg,#5b8aff,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${data.personalityType}</div>
          ${data.overallScore !== undefined ? `<div style="color:#34d399;font-size:28px;font-weight:800;margin-top:8px;">${data.overallScore}<span style="font-size:14px;color:rgba(241,245,255,.4)">/100</span></div>` : ""}
        </div>
        ` : ""}

        ${data.pathway ? `
        <div style="background:rgba(0,201,177,.08);border:1px solid rgba(0,201,177,.2);border-radius:12px;padding:16px;margin-bottom:20px;">
          <div style="font-size:12px;color:#00C9B1;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;">🎯 Recommended Program</div>
          <div style="font-weight:700;font-size:15px;">${data.pathway}</div>
        </div>
        ` : ""}

        <p style="color:rgba(241,245,255,.6);font-size:14px;line-height:1.7;margin-bottom:24px;">
          Our counsellors have been notified and will reach out to you shortly. In the meantime, you can book a free session directly:
        </p>

        <div style="text-align:center;">
          <a href="https://omniquest.in/#contact" style="display:inline-block;padding:14px 32px;border-radius:50px;background:linear-gradient(135deg,#00C9B1,#2563EB);color:white;font-weight:700;text-decoration:none;font-size:15px;box-shadow:0 8px 24px rgba(0,201,177,.3);">
            📅 Book Free Counselling
          </a>
        </div>

        <hr style="border-color:rgba(255,255,255,.08);margin:28px 0"/>
        <p style="color:rgba(241,245,255,.25);font-size:12px;text-align:center;">
          OmniQuest · New Delhi, India · <a href="https://omniquest.in" style="color:#5b8aff;">omniquest.in</a>
        </p>
      </div>
    `,
  });
}