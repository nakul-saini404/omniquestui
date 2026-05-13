"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";
import { validateContactForm } from "@/lib/formValidation";

// ── Types ──────────────────────────────────────────────────────────────────────
interface FormState {
  program: string;
  name:    string;
  mobile:  string;
  email:   string;
  city:    string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Constants ──────────────────────────────────────────────────────────────────
// Each stat: target number + suffix displayed after count-up
const STATS = [
  { target: 36,    suffix: "",   label: "Top ACT Score" },
  { target: 97,    suffix: "%",  label: "Success Ratio" },
  { target: 10,    suffix: "K+", label: "Students"      },
  { target: 20,    suffix: "+",  label: "Yrs Service"   },
];

// ── Count-up hook ──────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return count;
}

// ── Single animated stat item ──────────────────────────────────────────────────
function AnimatedStat({
  target, suffix, label, active, borderRight,
}: {
  target: number; suffix: string; label: string;
  active: boolean; borderRight: string;
}) {
  const count = useCountUp(target, 1400, active);
  return (
    <div className={styles.statItem} style={{ borderRight }}>
      <span className={styles.statNum}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

const PROGRAMS = [
  "ACT Online",
  "ACT Classroom",
  "ACT + SAT Combo",
  "Profile Building",
] as const;

// ── Email HTML builders ────────────────────────────────────────────────────────

/** Confirmation email sent to the student */
function buildUserEmailHtml(name: string, program: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
    <body style="margin:0;padding:0;background:#0a0c12;font-family:'DM Sans',Arial,sans-serif;color:#d6dcea;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0c12;padding:40px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background:#111520;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

            <tr>
              <td style="background:linear-gradient(90deg,#f5a623,#ffd17a,#f5a623);padding:32px 40px;text-align:center;">
                <div style="font-size:2rem;font-weight:900;color:#000;letter-spacing:-0.02em;">EduQuest</div>
                <div style="font-size:0.85rem;color:rgba(0,0,0,0.7);margin-top:4px;">India's #1 ACT Coaching — Score 36</div>
              </td>
            </tr>

            <tr>
              <td style="padding:40px;">
                <h2 style="font-size:1.5rem;font-weight:700;color:#ffffff;margin:0 0 16px;">
                  You're all set, ${name}! 🎯
                </h2>
                <p style="color:#8891a8;font-size:0.95rem;line-height:1.7;margin:0 0 24px;">
                  Thanks for reaching out to EduQuest. An expert ACT counsellor will call you
                  <strong style="color:#ffffff;">within 24 hours</strong> to discuss your
                  personalised study plan.
                </p>

                ${program ? `
                <div style="background:rgba(245,166,35,0.12);border:1px solid rgba(245,166,35,0.3);
                            border-radius:10px;padding:16px 20px;margin-bottom:24px;">
                  <div style="font-size:0.75rem;color:#f5a623;text-transform:uppercase;
                              letter-spacing:0.08em;font-weight:600;">Program Interest</div>
                  <div style="font-size:1rem;color:#ffffff;font-weight:600;margin-top:4px;">
                    ${program}
                  </div>
                </div>` : ""}

                <a href="https://eduquest.org.in/free-download/"
                   style="display:inline-block;background:#f5a623;
                          color:#000;font-weight:700;font-size:0.95rem;padding:14px 28px;
                          border-radius:10px;text-decoration:none;margin-bottom:32px;">
                  ⬇ Download Free ACT Prep Guide
                </a>

                <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;">
                  <p style="font-size:0.82rem;color:#8891a8;margin:0 0 8px;">Need immediate help?</p>
                  <a href="tel:+919958041888" style="color:#f5a623;font-weight:600;text-decoration:none;">
                    📞 +91-9958041888
                  </a>
                  &nbsp;&nbsp;
                  <a href="mailto:contact@eduquest.org.in" style="color:#f5a623;font-weight:600;text-decoration:none;">
                    ✉ contact@eduquest.org.in
                  </a>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background:rgba(10,12,18,0.8);padding:20px 40px;text-align:center;">
                <p style="font-size:0.75rem;color:#8891a8;margin:0;">
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
    ["Name",    form.name],
    ["Mobile",  form.mobile],
    ["Email",   form.email],
    ["City",    form.city    || "—"],
    ["Program", form.program || "—"],
    ["Source",  "act-hero-form"],
    ["Time",    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8"/></head>
    <body style="margin:0;padding:24px;font-family:Arial,sans-serif;background:#f1f5f9;color:#0f172a;">
      <table width="560" cellpadding="0" cellspacing="0"
        style="background:#fff;border-radius:10px;border:1px solid #e2e8f0;overflow:hidden;max-width:560px;">
        <tr>
          <td style="background:linear-gradient(90deg,#f5a623,#ffd17a);padding:20px 28px;">
            <strong style="color:#000;font-size:1rem;">🔔 New ACT Lead — EduQuest</strong>
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
export default function HeroSection() {
  const [visible,      setVisible]      = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMsg,     setErrorMsg]     = useState("");
  const [form, setForm] = useState<FormState>({
    program: PROGRAMS[0],
    name:    "",
    mobile:  "",
    email:   "",
    city:    "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors(prev => { const next = { ...prev }; delete next[e.target.name]; return next; });
  }

  async function handleSubmit() {
    const errors = validateContactForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setSubmitStatus("loading");
    setErrorMsg("");

    try {
      // ── 1. Save lead to Supabase via /api/submit-lead ──────────────────────
      const saveRes = await fetch("/api/submit-lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadData: {
            fullName:        form.name,
            email:           form.email,
            phone:           form.mobile,
            city:            form.city    || null,
            programInterest: form.program || null,
            consent:         true,
            educationLevel:  null,
            age:             null,
            currentClass:    null,
            targetCountry:   null,
            targetDegree:    null,
          },
          answers: null,
          report:  null,
        }),
      });

      if (!saveRes.ok) {
        const errJson = await saveRes.json().catch(() => ({}));
        throw new Error(
          (errJson as { error?: string }).error ?? `Save failed (${saveRes.status})`
        );
      }

      // ── 2. Fire both emails in parallel via /api/send-email ────────────────
      const ADMIN_TO =
        process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "contact@eduquest.org.in";

      await Promise.allSettled([
        // Student confirmation
        fetch("/api/send-email", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to:      form.email,
            subject: `Your Free ACT Demo is Confirmed, ${form.name}! 🎯`,
            html:    buildUserEmailHtml(form.name, form.program),
          }),
        }).then((r) => {
          if (!r.ok) console.warn("[HeroSection] user email failed:", r.status);
        }),

        // Admin notification
        fetch("/api/send-email", {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to:      ADMIN_TO,
            subject: `New ACT Lead: ${form.name} — ${form.program || "No program selected"}`,
            html:    buildAdminEmailHtml(form),
          }),
        }).then((r) => {
          if (!r.ok) console.warn("[HeroSection] admin email failed:", r.status);
        }),
      ]);

      setSubmitStatus("success");
    } catch (err) {
      console.error("[HeroSection] submit error:", err);
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us directly."
      );
      setSubmitStatus("error");
    }
  }

  const isFormValid = Object.keys(fieldErrors).length === 0;

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Ambient glow blobs */}
      <div className={styles.blobGold} aria-hidden="true" />
      <div className={styles.blobBlue} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: Content ── */}
        <div className={`${styles.content} ${visible ? styles.fadeIn : ""}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            🎯 India&apos;s #1 ACT Coaching — Score 36
          </div>

          <h1 className={styles.heading}>
            ACT Coaching<br />
            Built for{" "}
            <em className={styles.headingAccent}>Top Scores</em>
          </h1>

          <p className={styles.sub}>
            Expert coaching backed by AI diagnostics, adaptive modules, and
            90+ hours of unmatched learning. Online &amp; offline. Designed to
            get you to 36.
          </p>

          <div className={styles.actions}>
            <a
              href="https://eduquest.org.in/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              📞 Book Free Demo
            </a>
            <a href="https://test.eduquest.org.in/act-score-calculator/" className={styles.btnOutline}>
              Calculate Your Act Score
            </a>
          </div>

          {/* Stats bar — numbers count up when hero fades in */}
          <div className={styles.statsBar}>
            {STATS.map((s, i) => (
              <AnimatedStat
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                label={s.label}
                active={visible}
                borderRight={
                  i < STATS.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none"
                }
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Callback Form Card ── */}
        <div
          className={`${styles.card} ${visible ? styles.fadeInDelay : ""}`}
        >
          {/* Gold top strip */}
          <div className={styles.cardTopStrip} aria-hidden="true" />

          {submitStatus === "success" ? (
            <div className={styles.successBox}>
              <div className={styles.successRing}>
                <div className={styles.successIcon}>✅</div>
              </div>
              <h3 className={styles.cardTitle}>You&apos;re all set!</h3>
              <p className={styles.cardDesc}>
                An EduQuest counsellor will reach you within 24 hours. Check
                your inbox for your free ACT prep guide.
              </p>
              <div className={styles.successMeta}>
                <span>📧 Confirmation sent</span>
                <span>📞 Call back within 24 h</span>
              </div>
              <button
                className={styles.btnSubmit}
                onClick={() => {
                  setSubmitStatus("idle");
                  setForm({ program: PROGRAMS[0], name: "", mobile: "", email: "", city: "" });
                }}
              >
                Submit Another →
              </button>
            </div>
          ) : (
            <>
              <h3 className={styles.cardTitle}>Get a Free Callback</h3>
              <p className={styles.cardDesc}>
                Score faster. Higher. Better. Our experts call you within 24 hrs.
              </p>

              <div className={styles.formGroup}>
                <label htmlFor="program" className={styles.formLabel}>
                  I&apos;m interested in
                </label>
                <select
                  id="program"
                  name="program"
                  className={styles.formControl}
                  value={form.program}
                  onChange={handleChange}
                >
                  {PROGRAMS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                <input
                  id="name" name="name" type="text"
                  className={`${styles.formControl} ${fieldErrors.name ? styles.inputError : ''}`}
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
                {fieldErrors.name && <p className={styles.fieldError}>{fieldErrors.name}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobile" className={styles.formLabel}>Mobile</label>
                <input
                  id="mobile" name="mobile" type="tel"
                  className={`${styles.formControl} ${fieldErrors.mobile ? styles.inputError : ''}`}
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />
                {fieldErrors.mobile && <p className={styles.fieldError}>{fieldErrors.mobile}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  id="email" name="email" type="email"
                  className={`${styles.formControl} ${fieldErrors.email ? styles.inputError : ''}`}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
                {fieldErrors.email && <p className={styles.fieldError}>{fieldErrors.email}</p>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="city" className={styles.formLabel}>City</label>
                <input
                  id="city" name="city" type="text"
                  className={`${styles.formControl} ${fieldErrors.city ? styles.inputError : ''}`}
                  placeholder="Delhi / Gurgaon / Online"
                  value={form.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                />
                {fieldErrors.city && <p className={styles.fieldError}>{fieldErrors.city}</p>}
              </div>

              {submitStatus === "error" && (
                <p className={styles.errorMsg} role="alert">{errorMsg}</p>
              )}

              <button
                className={`${styles.btnSubmit} ${
                  submitStatus === "loading" ? styles.btnLoading : ""
                }`}
                onClick={handleSubmit}
                disabled={!isFormValid || submitStatus === "loading"}
                aria-disabled={!isFormValid || submitStatus === "loading"}
              >
                {submitStatus === "loading" ? "Sending…" : "Request Callback →"}
              </button>

              <p className={styles.formNote}>
                🔒 Your information is 100% secure. No spam ever.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}