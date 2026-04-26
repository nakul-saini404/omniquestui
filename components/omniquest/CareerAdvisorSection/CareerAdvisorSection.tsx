"use client";
// components/CareerAdvisorSection/CareerAdvisorSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import styles from "./CareerAdvisorSection.module.css";

export default function CareerAdvisorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.ambient} />

      <div className={styles.grid}>
        {/* ── Left text ── */}
        <div className="reveal">
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>AI‑Powered Career Advisory</span>
          </div>

          <h2 className={styles.h2}>Clarity, Delivered.</h2>
          <h2 className={styles.h2Gold}>Every Career Decision, Optimised.</h2>

          <p className={styles.body}>
            Our AI‑driven Career Advisor analyses your profile, market trends,
            and academic strengths to give you a{" "}
            <em className={styles.bodyEm}>personalised roadmap</em> — no
            guesswork, no generic advice.
          </p>
        </div>

        {/* ── Right CTA card ── */}
        <div className="reveal">
          <div className={styles.card}>
            <div className={styles.cardIcon}>🤖</div>

            <h3 className={styles.cardTitle}>Talk to Your AI Career Advisor</h3>
            <p className={styles.cardSubtitle}>
              Get instant, intelligent guidance tailored to your goals. Start a
              free session now.
            </p>

            <Link
              href="https://eduquest-career-ai-v2.onrender.com/"
              className={styles.ctaBtn}
            >
              🚀 Launch Career Advisor →
            </Link>

            <p className={styles.cardFootnote}>
              ⚡ Powered by AI • Real‑time market insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}