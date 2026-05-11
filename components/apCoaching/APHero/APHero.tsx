"use client";

import { useEffect, useState } from "react";
import styles from "./APHero.module.css";

// ── Types ──────────────────────────────────────────────────────────────────────
interface HeroStat {
  num: string;
  lbl: string;
}

interface FormState {
  interest: string;
  name:     string;
  mobile:   string;
  email:    string;
  city:     string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Constants ──────────────────────────────────────────────────────────────────
const STATS: HeroStat[] = [
  { num: "98%",   lbl: "Success Ratio"    },
  { num: "3K+",   lbl: "Happy Students"   },
  { num: "$12M+", lbl: "In Scholarships"  },
  { num: "29+",   lbl: "Years of Service" },
];

const AP_COURSES = [
  "AP Calculus AB / BC",
  "AP Physics C / 1 / 2",
  "AP Chemistry",
  "AP Biology",
  "AP Computer Science A",
  "AP Statistics",
  "AP Economics (Micro/Macro)",
  "AP English Language",
  "AP English Literature",
  "AP Psychology",
  "AP World History",
  "Pre-AP Courses (Grades 6–8)",
  "Multiple AP Subjects",
] as const;

// ── Email HTML builders ────────────────────────────────────────────────────────

/** Confirmation email sent to the student */
function buildUserEmailHtml(name: string, interest: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:#050d1a;font-family:'DM Sans',Arial,sans-serif;color:#f8fafc;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#050d1a;padding:40px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#0f2040;border:1px solid rgba(59,125,216,0.2);border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

            <tr>
              <td style="background:linear-gradient(135deg,#f59e0b,#f97316);padding:32px 40px;text-align:center;">
                <div style="font-size:2rem;font-weight:900;color:#fff;letter-spacing:-0.02em;">EduQuest</div>
                <div style="font-size:0.85rem;color:rgba(255,255,255,0.85);margin-top:4px;">India's #1 AP Coaching Since 1995</div>
              </td>
            </tr>

            <tr>
              <td style="padding:40px;">
                <h2 style="font-size:1.5rem;font-weight:700;color:#f8fafc;margin:0 0 16px;">
                  You're all set, ${name}! 🎯
                </h2>
                <p style="color:#94a3b8;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">
                  Thanks for reaching out to EduQuest. An expert AP counsellor will call you
                  <strong style="color:#f8fafc;">within 24 hours</strong> to discuss your
                  personalised study plan.
                </p>

                ${interest ? `
                <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.25);
                            border-radius:10px;padding:16px 20px;margin-bottom:24px;">
                  <div style="font-size:0.75rem;color:#fbbf24;text-transform:uppercase;
                              letter-spacing:0.08em;font-weight:600;">Course Interest</div>
                  <div style="font-size:1rem;color:#f8fafc;font-weight:600;margin-top:4px;">
                    ${interest}
                  </div>
                </div>` : ""}

                <a href="https://eduquest.org.in/free-download/"
                   style="display:inline-block;background:linear-gradient(135deg,#f59e0b,#f97316);
                          color:#fff;font-weight:700;font-size:0.95rem;padding:14px 28px;
                          border-radius:10px;text-decoration:none;margin-bottom:32px;">
                  ⬇ Download Free AP 2026 Guide
                </a>

                <div style="border-top:1px solid rgba(59,125,216,0.2);padding-top:24px;">
                  <p style="font-size:0.82rem;color:#64748b;margin:0 0 8px;">Need immediate help?</p>
                  <a href="tel:+919958041888" style="color:#5b9be8;font-weight:600;text-decoration:none;">
                    📞 +91-9958041888
                  </a>
                  &nbsp;&nbsp;
                  <a href="mailto:contact@eduquest.org.in" style="color:#5b9be8;font-weight:600;text-decoration:none;">
                    ✉ contact@eduquest.org.in
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:rgba(5,13,26,0.6);padding:20px 40px;text-align:center;">
                <p style="font-size:0.75rem;color:#475569;margin:0;">
                  1210 Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009<br/>
                  © 2026 EduQuest Learning Centre. All rights reserved.
                </p>
              </td>
            </tr>

          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `.trim();
}

/** Internal lead-notification email sent to the EduQuest team */
function buildAdminEmailHtml(form: FormState): string {
  const rows: [string, string][] = [
    ["Name",     form.name],
    ["Mobile",   form.mobile],
    ["Email",    form.email],
    ["City",     form.city     || "—"],
    ["Interest", form.interest || "—"],
    ["Source",   "ap-hero-form"],
    ["Time",     new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/></head>
    <body style="margin:0;padding:24px;font-family:Arial,sans-serif;background:#f1f5f9;color:#0f172a;">
      <table width="560" cellpadding="0" cellspacing="0"
        style="background:#fff;border-radius:10px;border:1px solid #e2e8f0;overflow:hidden;max-width:560px;">
        <tr>
          <td style="background:linear-gradient(135deg,#f59e0b,#f97316);padding:20px 28px;">
            <strong style="color:#fff;font-size:1rem;">🔔 New AP Lead — EduQuest</strong>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${rows.map(([label, value]) => `
                <tr>
                  <td style="padding:8px 0;font-size:0.82rem;color:#64748b;font-weight:600;
                             width:110px;vertical-align:top;">${label}</td>
                  <td style="padding:8px 0;font-size:0.92rem;color:#0f172a;font-weight:500;">
                    ${value}
                  </td>
                </tr>
              `).join("")}
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `.trim();
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function APHero() {
  const [visible,      setVisible]      = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMsg,     setErrorMsg]     = useState("");
  const [form, setForm] = useState<FormState>({
    interest: "",
    name:     "",
    mobile:   "",
    email:    "",
    city:     "",
  });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    if (!form.name || !form.mobile || !form.email) return;

    setSubmitStatus("loading");
    setErrorMsg("");

    try {
      // ── 1. Save to Supabase via your existing /api/submit-lead route ──────
      // Mapped to LeadFormData shape that route already expects.
      // Fields not collected in this form are passed as null so the upsert
      // doesn't fail on missing keys.
      const saveRes = await fetch("/api/submit-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadData: {
            fullName:        form.name,
            email:           form.email,
            phone:           form.mobile,
            city:            form.city     || null,
            programInterest: form.interest || null,
            consent:         true,
            // Not collected on this form — null prevents PGRST204 errors
            educationLevel:  null,
            age:             null,
            currentClass:    null,
            targetCountry:   null,
            targetDegree:    null,
          },
          answers: null,  // no quiz on this page
          report:  null,  // no personality report on this page
        }),
      });

      if (!saveRes.ok) {
        const errJson = await saveRes.json().catch(() => ({}));
        throw new Error((errJson as { error?: string }).error ?? `Save failed (${saveRes.status})`);
      }

      // ── 2. Fire both emails in parallel via your existing /api/send-email ──
      // { to, subject, html } is exactly what that route expects.
      // Email failures are non-fatal — lead is already persisted in Supabase.
      const ADMIN_TO = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "contact@eduquest.org.in";

      await Promise.allSettled([
        // Student confirmation
        fetch("/api/send-email", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to:      form.email,
            subject: `Your Free AP Demo is Confirmed, ${form.name}! 🎯`,
            html:    buildUserEmailHtml(form.name, form.interest),
          }),
        }).then(r => { if (!r.ok) console.warn("[APHero] user email failed:", r.status); }),

        // Admin / team notification
        fetch("/api/send-email", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to:      ADMIN_TO,
            subject: `New AP Lead: ${form.name} — ${form.interest || "No course selected"}`,
            html:    buildAdminEmailHtml(form),
          }),
        }).then(r => { if (!r.ok) console.warn("[APHero] admin email failed:", r.status); }),
      ]);

      setSubmitStatus("success");

    } catch (err) {
      console.error("[APHero] submit error:", err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
      setSubmitStatus("error");
    }
  }

  function scrollToEnroll() {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const isFormValid = !!(form.name && form.mobile && form.email);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section className={styles.hero} aria-label="AP Coaching 2026 Hero">

      {/* Decorative background */}
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.grid}  />
      </div>

      <div className={styles.heroContainer}>

        {/* ══════════ LEFT — Content ══════════ */}
        <div className={`${styles.heroContent} ${visible ? styles.fadeIn : ""}`}>

          <div className={styles.heroEyebrow}>
            <span className={`${styles.badge} ${styles.badgeAmber}`}>
              ✦ India&apos;s #1 AP Coaching
            </span>
            <span className={styles.badge}>Since 1995</span>
          </div>

          <h1 className={styles.heroTitle}>
            Score <span className={styles.titleAccent}>5/5</span> in AP Exams.<br />
            Unlock Global<br />
            University Success.
          </h1>

          <p className={styles.heroDesc}>
            Expert 1-on-1 live AP coaching for{" "}
            <strong>Calculus, Physics, Chemistry, Biology, CS, Economics</strong>{" "}
            and 30+ subjects. Trusted by 3,000+ students across India, USA, UAE,
            UK, and Singapore.
          </p>

          <div className={styles.heroCtas}>
            {/* <button
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
              onClick={scrollToEnroll}
              aria-label="Book free demo class"
            >
              ▶ Book Free Demo Class
            </button>
            <a
              href="#subjects"
              className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}
            >
              Explore AP Subjects
            </a> */}
          </div>

          <div className={styles.heroStats} aria-label="Key statistics">
            {STATS.map((s, i) => (
              <div
                key={s.lbl}
                className={styles.heroStat}
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLbl}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ RIGHT — Lead Form Card ══════════ */}
        <div
          id="enroll"
          className={`${styles.formCard} ${visible ? styles.fadeInDelay : ""}`}
        >
          {submitStatus !== "success" ? (
            <>
              <h3 className={styles.cardTitle}>
                Sign Up to Score{" "}
                <span className={styles.highlight}>Higher. Faster.</span>
              </h3>
              <p className={styles.cardSub}>
                Get a free demo class &amp; personalised AP study plan.
              </p>

              <div className={styles.formBody}>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="ap-interest">
                    I&apos;m Interested In
                  </label>
                  <select
                    id="ap-interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="" disabled>Select AP Course…</option>
                    {AP_COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="ap-name">Full Name</label>
                  <input
                    id="ap-name"   name="name"   type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    autoComplete="name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="ap-mobile">Mobile Number</label>
                  <input
                    id="ap-mobile"  name="mobile"  type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.mobile}
                    onChange={handleChange}
                    className={styles.formInput}
                    autoComplete="tel"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="ap-email">Email Address</label>
                  <input
                    id="ap-email"   name="email"   type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    autoComplete="email"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="ap-city">City / Country</label>
                  <input
                    id="ap-city"    name="city"    type="text"
                    placeholder="Delhi / Dubai / New York…"
                    value={form.city}
                    onChange={handleChange}
                    className={styles.formInput}
                    autoComplete="address-level2"
                  />
                </div>

                {submitStatus === "error" && (
                  <p className={styles.errorMsg} role="alert">{errorMsg}</p>
                )}

                <button
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSubmit} ${
                    submitStatus === "loading" ? styles.btnLoading : ""
                  }`}
                  onClick={handleSubmit}
                  disabled={!isFormValid || submitStatus === "loading"}
                  aria-disabled={!isFormValid || submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? "Sending…" : "Request Free Callback →"}
                </button>
              </div>

              <p className={styles.formTrust}>
                🔒 Your details are private &amp; secure. No spam.
              </p>
            </>
          ) : (
            <div className={styles.successState}>
              <div className={styles.successRing}>
                <div className={styles.successIcon}>✅</div>
              </div>
              <h3 className={styles.successTitle}>You&apos;re all set!</h3>
              <p className={styles.successText}>
                An EduQuest counsellor will reach you within 24 hours. Check your
                inbox for your free AP 2026 prep guide.
              </p>
              <div className={styles.successMeta}>
                <span>📧 Confirmation sent</span>
                <span>📞 Call back within 24 h</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}