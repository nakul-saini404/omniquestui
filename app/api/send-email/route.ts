// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { transport } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html } = await req.json();

    if (!to || !subject || !html) {
      return NextResponse.json({ error: "Missing to, subject, or html" }, { status: 400 });
    }

    await transport.sendMail({
      from: `"OmniQuest" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-email route error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}