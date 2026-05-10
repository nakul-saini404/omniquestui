"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatIsAP.module.css";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Benefit {
  icon:     string;
  title:    string;
  desc:     string;
}

interface ScoreRow {
  score:   number;
  pct:     number;   // bar fill width %
  color:   string;   // CSS var name
  label:   string;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const BENEFITS: Benefit[] = [
  {
    icon:  "🎓",
    title: "Earn Real College Credits",
    desc:  "A score of 5 can waive first-year university courses, saving $5,000–$15,000 per subject.",
  },
  {
    icon:  "🌏",
    title: "Globally Recognized",
    desc:  "Accepted by Ivy League, Oxbridge, NUS, University of Melbourne and 4,000+ institutions.",
  },
  {
    icon:  "💼",
    title: "Supercharge Scholarships",
    desc:  "Strong AP scores significantly improve merit scholarship eligibility at US universities.",
  },
  {
    icon:  "📈",
    title: "Beat the Admissions Competition",
    desc:  "AP scores differentiate your application in an increasingly competitive global pool.",
  },
];

const SCORE_ROWS: ScoreRow[] = [
  { score: 5, pct: 100, color: "var(--green-400)",  label: "Extremely qualified — College credit at most top unis" },
  { score: 4, pct: 80,  color: "var(--amber-400)",  label: "Well qualified — Credit at many universities"          },
  { score: 3, pct: 60,  color: "var(--blue-300)",   label: "Qualified — Credit at select schools"                  },
  { score: 2, pct: 40,  color: "var(--orange-400)", label: "Possibly qualified — Limited credit value"             },
  { score: 1, pct: 20,  color: "var(--gray-500)",   label: "No recommendation — No credit awarded"                 },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function WhatIsAP() {
  const sectionRef              = useRef<HTMLElement>(null);
  const barsRef                 = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [barsAnimated,   setBarsAnimated]   = useState(false);

  // Fade-in the whole section on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Animate score bars only when the right column scrolls into view
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarsAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className={`${styles.whatAp} ${sectionVisible ? styles.visible : ""}`}
      aria-labelledby="what-ap-heading"
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ══════════ LEFT — Content ══════════ */}
          <div className={styles.content}>

            <div className={styles.sectionLabel}>
              <span>About AP Exams</span>
            </div>

            <h2 id="what-ap-heading" className={styles.heading}>
              What Are <span className={styles.highlight}>AP Exams?</span>
            </h2>

            <p className={styles.body}>
              <strong>Advanced Placement (AP) Exams</strong>, conducted by the College Board
              (USA), are college-level standardized exams taken by high school students. They
              are scored on a 1–5 scale, and a score of 4 or 5 can earn you actual college
              credits at top universities — saving tuition and time.
            </p>
            <p className={styles.body}>
              AP exams are recognized by{" "}
              <strong>4,000+ universities</strong> across the USA, UK, Canada, Australia,
              Singapore, and Europe. They are{" "}
              <strong>open to any high school student worldwide</strong> — not just US students.
            </p>

            <ul className={styles.benefits} aria-label="Benefits of AP Exams">
              {BENEFITS.map((b, i) => (
                <li
                  key={b.title}
                  className={styles.benefit}
                  style={{ transitionDelay: sectionVisible ? `${0.15 + i * 0.1}s` : "0s" }}
                >
                  <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                  <div>
                    <h4 className={styles.benefitTitle}>{b.title}</h4>
                    <p  className={styles.benefitDesc}>{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ══════════ RIGHT — Score Scale ══════════ */}
          <div className={styles.scoreCard} ref={barsRef}>
            <h3 className={styles.scoreCardTitle}>
              AP Score Scale — What Each Score Means
            </h3>

            <div className={styles.scoreBars}>
              {SCORE_ROWS.map((row, i) => (
                <div key={row.score} className={styles.scoreBar}>
                  {/* Score number */}
                  <div
                    className={styles.scoreNum}
                    style={{ color: row.color }}
                  >
                    {row.score}
                  </div>

                  {/* Bar track */}
                  <div className={styles.scoreTrack}>
                    <div
                      className={styles.scoreFill}
                      style={{
                        background:         row.color,
                        width:              barsAnimated ? `${row.pct}%` : "0%",
                        transitionDelay:    `${i * 0.12}s`,
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className={styles.scoreLabel}>{row.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.scoreNote}>
              ✦ EduQuest students average{" "}
              <strong>4.6 / 5</strong> across all AP subjects. 98% score 4 or 5.
            </div>

              <a href="https://test.eduquest.org.in/ap-score-calculator/" className={`${styles.btn} ${styles.btnPrimary} `}>
              Calculate Your AP Score
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}