"use client";
// components/WhyUsSection/WhyUsSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./WhyUsSection.module.css";
import { WHY } from "@/app/omniquest/data/constants";

export default function WhyUsSection() {
  return (
    <section id="why-us" aria-labelledby="why-h" className={styles.section}>
      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={`reveal ${styles.header}`}>
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Our Difference</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 id="why-h" className={styles.h2}>We Don&apos;t Coach.</h2>
          <h2 className={styles.h2Gold}>We Build Global Profiles.</h2>
          <p className={styles.headerBody}>
            OmniQuest is not a coaching centre. We are a global admissions
            strategy firm — competing with the best international education
            consultants, not the local coaching institute down the road.
          </p>
        </div>

        {/* ── Numbered grid ── */}
        <div className={styles.numberedGrid}>
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className={`reveal ${styles.cell}`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.cellNumber}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className={styles.cellTitle}>{w.title}</h3>
              <p className={styles.cellDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}