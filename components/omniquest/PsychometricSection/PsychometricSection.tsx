"use client";
// components/PsychometricSection/PsychometricSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import styles from "./PsychometricSection.module.css";

const FIELDS = [
  { label: "FULL NAME *",       placeholder: "Your full name",        type: "text" },
  { label: "MOBILE NUMBER *",   placeholder: "+91 XXXXX XXXXX",       type: "tel" },
  { label: "EMAIL ADDRESS *",   placeholder: "your@email.com",        type: "email" },
  { label: "CITY *",            placeholder: "Your city",             type: "text" },
];

const PROFILE_OPTIONS = [
  "School Student (Grade 9–12)",
  "Undergraduate Student",
  "Working Professional",
  "Recent Graduate",
  "Parent planning for child",
];

const GOAL_OPTIONS = [
  "Study Abroad (UG)",
  "MBA / PG Abroad",
  "Career Switch to Tech",
  "Score higher on SAT/GMAT",
  "Not sure yet",
];

export default function PsychometricSection() {
  return (
    <section className={styles.section}>
      <div className={styles.ambient} />

      <div className={styles.grid}>
        {/* ── Left ── */}
        <div className="reveal">
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Free Psychometric Evaluation</span>
          </div>

          <h2 className={styles.h2}>Intelligence First.</h2>
          <h2 className={styles.h2Gold}>Applications Later.</h2>

          <p className={styles.body}>
            We begin every advisory engagement with a deep understanding of
            you — your cognitive style,{" "}
            <em className={styles.bodyEm}>personality</em>, and career
            alignment — before recommending a single strategy.
          </p>
        </div>

        {/* ── Right — form card ── */}
        <div className="reveal">
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Start Your Psychometric Profile</h3>
            <p className={styles.cardSubtitle}>
              Complete your profile to receive a personalised cognitive and
              career alignment report — sent directly to your inbox.
            </p>

            {/* 2-column field grid */}
            <div className={styles.formGrid}>
              {FIELDS.map((f) => (
                <div key={f.label}>
                  <label className={styles.fieldLabel}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className={styles.input}
                  />
                </div>
              ))}
            </div>

            {/* I am a */}
            <div className={styles.selectWrap}>
              <label className={styles.fieldLabel}>I AM A *</label>
              <select className={styles.select}>
                <option value="">Select your profile...</option>
                {PROFILE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            {/* Primary goal */}
            <div className={`${styles.selectWrap} ${styles.selectLast}`}>
              <label className={styles.fieldLabel}>PRIMARY GOAL *</label>
              <select className={styles.select}>
                <option value="">What&apos;s your main goal?</option>
                {GOAL_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <Link href="/personality-test" className={styles.ctaBtn}>
              🧠 Begin Psychometric Evaluation →
            </Link>

            <p className={styles.privacy}>
              🔒 Your data is safe. We&apos;ll email your full report and never spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}