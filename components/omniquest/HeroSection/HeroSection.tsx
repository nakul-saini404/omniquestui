"use client";

import styles from "./Herosection.module.css";

// ── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { num: "92%",  label: "First-choice\nadmit rate"  },
  { num: "10K+", label: "Student profiles\nbuilt"   },
  { num: "40+",  label: "Destination\ncountries"    },
  { num: "4.9",  label: "Advisory\nrating"          },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero" className={styles.section}>

      {/* ── Background dot-grid + gold glow ── */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow}   aria-hidden="true" />

      {/* ── Centre content ── */}
      <div className={styles.inner}>

        {/* Eyebrow pill */}
        <div className={`animate-fade-up ${styles.eyebrow}`}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          A Unified Education Intelligence Ecosystem
        </div>

        {/* H1 */}
        <h1 className={`animate-fade-up delay-1 ${styles.h1}`}>
          One System.<br />
          <em>Different Stage.</em><br />
          Global Outcomes.
        </h1>

        {/* Sub */}
        <p className={`animate-fade-up delay-2 ${styles.sub}`}>
          One unified education intelligence ecosystem powering every stage of
          student growth — from academic foundation to global university
          admissions and career readiness.
        </p>

        {/* Sub-subtext */}
        <p className={`animate-fade-up delay-2 ${styles.subtext}`}>
          EduQuest, MBA Wizards, and Aptech operate as distinct, high-performance
          pathways built on a shared intelligence system designed to create
          globally competitive outcomes.
        </p>

        {/* CTAs */}
        <div className={`animate-fade-up delay-3 ${styles.ctaRow}`}>
          <a href="#architecture" className={styles.btnPrimary}>
            Enter the System
          </a>
          <a href="#pathways" className={styles.btnSecondary}>
            Explore Pathways →
          </a>
        </div>

        {/* Stats bar */}
        <div className={`animate-fade-up delay-4 ${styles.statsBar}`}>
          {STATS.map((s) => (
            <div key={s.num} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>
                {s.label.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}