"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
  { num: "1,839+", label: "University Admits" },
  { num: "2,299+", label: "Student Profiles" },
  { num: "99th",   label: "Percentile Achieved" },
  { num: "18+",    label: "Years Experience" },
];

const scoreRows = [
  { label: "Upper Level Max",        value: "800",        green: false },
  { label: "Middle Level Max",       value: "710",        green: false },
  { label: "Elementary Max",         value: "600",        green: false },
  { label: "Avg EduQuest Percentile",value: "96th+",      green: true  },
  { label: "Avg Score Jump",         value: "+60–120 pts",green: true  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* radial glow overlays via ::before in CSS */}

      <div className={styles.grid}>

        {/* ── LEFT COLUMN ────────────────────────────────── */}
        <div className={styles.left}>

          <div className={styles.badge}>
            India&apos;s #1 SSAT Coaching · 18+ Years
          </div>

          <h1 className={styles.heading}>
            Score{" "}
            <em className={styles.headingEm}>99th Percentile</em>{" "}
            on the SSAT — Unlock Elite Private Schools
          </h1>

          <p className={styles.sub}>
            EduQuest prepares students for SSAT Elementary, Middle &amp; Upper
            Levels with personalised strategy, section-wise mastery, and a
            proven score improvement framework. Online · Offline · Hybrid.
          </p>

          <div className={styles.ctas}>
            <Link href="#enroll" className={`${styles.btn} ${styles.btnGold}`}>
              Book Free Strategy Session
            </Link>
            <Link
              href="#structure"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              View SSAT Pattern →
            </Link>
          </div>

          {/* Stats bar */}
          <div className={styles.statsBar}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Score Card ───────────────────── */}
        <div className={styles.right}>
          <div className={styles.scoreCard}>

            <div className={styles.scoreCardTitle}>
              SSAT Score Tracker
            </div>

            {scoreRows.map((row) => (
              <div key={row.label} className={styles.scoreRow}>
                <span className={styles.scoreLabel}>{row.label}</span>
                <span
                  className={`${styles.scoreVal} ${
                    row.green ? styles.scoreValGreen : ""
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}

            <div className={styles.scoreCardCta}>
              <Link
                href="https://test.eduquest.org.in/ssat-score-calculator/"
                className={`${styles.btn} ${styles.btnGold} ${styles.btnFull}`}
              >
                Calculate Your SSAt Score
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}