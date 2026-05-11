import { useEffect, useRef, useState } from "react";
import styles from "./SyllabusCoverage.module.css";

/* ─── Data ──────────────────────────────────────── */

const SYLLABUS_DATA = [
  {
    icon: "📖",
    subject: "Reading & Writing (EBRW)",
    color: "blue",
    topics: [
      {
        label: "Information and Ideas",
        detail: "Central ideas, details, command of evidence",
      },
      {
        label: "Craft and Structure",
        detail: "Words in context, text structure, cross-text connections",
      },
      {
        label: "Expression of Ideas",
        detail: "Rhetorical synthesis, transitions",
      },
      {
        label: "Standard English Conventions",
        detail: "Boundaries, form, structure, sense",
      },
    ],
    meta: "54 questions · 64 minutes",
  },
  {
    icon: "📐",
    subject: "Math",
    color: "gold",
    topics: [
      {
        label: "Algebra",
        detail: "Linear equations, systems, linear inequalities",
      },
      {
        label: "Advanced Math",
        detail: "Equivalent expressions, nonlinear equations, functions",
      },
      {
        label: "Problem-Solving & Data Analysis",
        detail: "Ratios, percentages, statistics, probability",
      },
      {
        label: "Geometry & Trigonometry",
        detail: "Area, volume, angles, right triangles, trigonometry",
      },
    ],
    meta: "44 questions · 70 minutes",
  },
];

const EXAM_FACTS = [
  { num: "2", label: "Sections" },
  { num: "98", label: "Total Questions" },
  { num: "2h 14m", label: "Total Duration" },
  { num: "400–1600", label: "Score Range" },
];

/* ─── Scroll-reveal hook ────────────────────────── */
function useReveal(threshold = 0.14) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Component ─────────────────────────────────── */
export default function SyllabusCoverage() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} ref={ref} aria-labelledby="syllabus-heading">
      <div className={`container ${styles.inner}`}>

        {/* Section header */}
        <div className={`${styles.sectionLabel} ${visible ? styles.in : ""}`}>
          Syllabus Coverage
        </div>

        <h2
          id="syllabus-heading"
          className={`${styles.heading} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Complete Digital SAT <em className={styles.em}>Syllabus</em> Coverage
        </h2>

        <p
          className={`${styles.subText} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.18s" }}
        >
          Our SAT coaching in Jaipur covers every section of the Digital SAT (dSAT)
          comprehensively — from foundational concepts to advanced adaptive test
          strategy.
        </p>

        {/* Exam-at-a-glance pill row */}
        <div
          className={`${styles.examBar} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.26s" }}
          aria-label="Digital SAT 2026 at a glance"
        >
          <span className={styles.examBarLabel}>Digital SAT 2026 ·</span>
          {EXAM_FACTS.map((f) => (
            <span key={f.label} className={styles.examFact}>
              <strong className={styles.examNum}>{f.num}</strong>
              <span className={styles.examFactLabel}>{f.label}</span>
            </span>
          ))}
          <span className={styles.examBarNote}>Calculator allowed throughout Math</span>
        </div>

        {/* Syllabus cards */}
        <div className={styles.grid}>
          {SYLLABUS_DATA.map((card, i) => (
            <div
              key={card.subject}
              className={`${styles.card} ${styles[`card--${card.color}`]} ${visible ? styles.in : ""}`}
              style={{ animationDelay: `${0.32 + i * 0.12}s` }}
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <div>
                  <h3 className={styles.cardTitle}>{card.subject}</h3>
                  <span className={styles.cardMeta}>{card.meta}</span>
                </div>
              </div>

              {/* Topic list */}
              <ul className={styles.topicList} role="list">
                {card.topics.map((t) => (
                  <li key={t.label} className={styles.topicItem}>
                    <span className={styles.topicBullet} aria-hidden="true">›</span>
                    <span className={styles.topicText}>
                      <strong className={styles.topicLabel}>{t.label}</strong>
                      <span className={styles.topicDetail}> — {t.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Adaptive badge */}
              <div className={styles.adaptiveBadge}>
                ⚡ Fully Adaptive · 2 Modules
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className={`${styles.footNote} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.56s" }}
        >
          EduQuest's coaching is fully aligned with the current{" "}
          <strong>Digital SAT 2026</strong> format and Bluebook interface.
        </p>

      </div>
    </section>
  );
}