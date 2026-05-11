"use client";

import styles from "./ACTSections.module.css";

const sections = [
  {
    icon: "✍️",
    name: "English",
    detail: "75 questions · 45 minutes",
    sub: "Grammar, punctuation & rhetorical skills",
    fill: 90,
  },
  {
    icon: "📐",
    name: "Mathematics",
    detail: "60 questions · 60 minutes",
    sub: "Algebra, geometry & trigonometry",
    fill: 85,
  },
  {
    icon: "📖",
    name: "Reading",
    detail: "40 questions · 35 minutes",
    sub: "Passage-based comprehension",
    fill: 80,
  },
];

export default function ACTSections() {
  return (
    <section id="subjects" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>ACT Sections</span>
        <h2 className={styles.title}>
          Complete <em className={styles.em}>Section-Wise</em> Coverage
        </h2>
        <p className={styles.sub}>
          The ACT comprises four sections plus an optional essay. We master
          every single one with dedicated modules, practice, and real ACT
          papers.
        </p>

        <div className={styles.grid}>
          {sections.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.detail}>{s.detail}</div>
              <div className={styles.sub2}>{s.sub}</div>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{ width: `${s.fill}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.essayNote}>
          <span className={styles.essayIcon}>📝</span>
          <div>
            <div className={styles.essayTitle}>Optional Essay (40 minutes)</div>
            <div className={styles.essayDesc}>
              EduQuest provides dedicated essay coaching. Total exam duration:
              ~2 hrs 55 min without essay. Composite score: 1–36 (average of
              four section scores).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}