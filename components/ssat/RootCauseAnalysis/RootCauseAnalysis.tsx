"use client";

import styles from "./RootCauseAnalysis.module.css";

/* ── Types ──────────────────────────────────── */
interface FailCard {
  icon: string;
  title: string;
  text: string;
}

/* ── Static data ─────────────────────────────── */
const failCards: FailCard[] = [
  {
    icon: "🔍",
    title: "No Diagnostic Baseline",
    text: "Students begin studying without knowing their actual strengths and weaknesses. Random preparation based on textbooks — instead of real SSAT patterns — wastes months of effort and leads to plateaued scores.",
  },
  {
    icon: "⏱️",
    title: "Poor Time Management",
    text: "The SSAT's negative marking makes time pressure dangerous. Students who haven't practiced under timed conditions either rush recklessly or lose marks by spending too long on hard questions they should skip.",
  },
  {
    icon: "📚",
    title: "Vocabulary Gap",
    text: "The Verbal section demands an extensive academic vocabulary — far beyond everyday English. Students who read passively rather than building active vocabulary lists consistently underperform on synonyms and analogies.",
  },
  {
    icon: "📊",
    title: "No Strategy Layer",
    text: "Content knowledge alone is not enough. Question elimination strategy, sectional pacing, and smart guessing decisions (based on the ¼ negative marking rule) are skills most students never develop without coaching.",
  },
  {
    icon: "🌐",
    title: "Misunderstanding Percentiles",
    text: "Indian and international students often benchmark against raw scores rather than understanding that the SSAT is a norm-referenced test. A score of 600/800 may represent only the 65th percentile — very different from what students expect.",
  },
  {
    icon: "📝",
    title: "Neglecting the Writing Sample",
    text: "Students treat the writing sample as unimportant because it is unscored. Admissions officers at competitive schools use it to directly evaluate academic writing ability — a weak writing sample can undermine an otherwise strong application.",
  },
];

/* ── Component ───────────────────────────────── */
export default function RootCauseAnalysis() {
  return (
    <section className={styles.failSection} id="why-fail">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Root Cause Analysis</span>
          <h2 className={styles.sectionTitle}>
            Why Most Students <em>Underperform</em> on the SSAT
          </h2>
          <p className={styles.sectionSub}>
            It is not a question of intelligence. These are the patterns
            EduQuest sees repeatedly — and why targeted preparation matters.
          </p>
        </div>

        {/* ── Fail cards grid ── */}
        <div className={styles.failGrid}>
          {failCards.map((card) => (
            <div key={card.title} className={styles.failCard}>
              <span className={styles.failIcon} aria-hidden="true">
                {card.icon}
              </span>
              <div className={styles.failTitle}>{card.title}</div>
              <p className={styles.failText}>{card.text}</p>
            </div>
          ))}
        </div>

        {/* ── Pull-quote block ── */}
        <div className={styles.failQuote}>
          <p className={styles.failQuoteText}>
            A score of{" "}
            <strong>85th percentile without a strategy</strong> is just a
            number. The same score{" "}
            <strong>
              with the right school positioning and writing sample
            </strong>{" "}
            is a Philips Exeter application.
          </p>
        </div>
      </div>
    </section>
  );
}