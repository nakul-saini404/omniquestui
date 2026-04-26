"use client";
// components/CtaSection/CtaSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section id="contact" aria-labelledby="cta-h" className={styles.section}>
      <div className={styles.gridOverlay} />
      <div className={styles.orbGold} />
      <div className={styles.orbBlue} />

      <div className={styles.inner}>
        <div className="reveal">
          <div className={styles.badge}>
            ✦ Limited Advisory Slots · Fall 2026 Intake
          </div>

          <h2 id="cta-h" className={styles.h2}>
            Your Global Journey
            <br />
            Starts with a{" "}
            <em className={styles.h2Em}>Strategy</em>
          </h2>

          <p className={styles.body}>
            Join 10,000+ students whose globally competitive futures were
            designed by OmniQuest.
          </p>

          <div className={styles.btnRow}>
            <a
              href="https://eduquest.org.in/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              📅 Book Strategy Session
            </a>
            <Link href="/personality-test" className={styles.ctaSecondary}>
              🧠 Start Psychometric Test
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}