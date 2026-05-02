"use client";

import { useEffect, useRef } from "react";
import styles from "./UcatMajorChanges.module.css";

/* ── Data ────────────────────────────────────────────── */
const biggestChange = {
  tag: "Biggest Change",
  title: "Abstract Reasoning Removed",
  body: "The entire Abstract Reasoning subtest has been eliminated from UCAT 2026 — the most pattern-heavy section, widely considered the most inconsistent.",
  bullets: [
    "Lower cognitive load during the exam overall",
    "Students can focus more deeply on the 3 remaining cognitive sections",
    "Performance pressure increases on remaining sections",
    "Universities may adjust score expectations accordingly",
    "Scoring scale reduced from 3600 to 2700",
  ],
};

const insights = [
  {
    icon: "💡",
    label: "Key Insight",
    text: "With the UCAT 2026 scoring scale reduced to 2700, even small improvements can significantly impact your percentile ranking — making precision and consistency more important than ever. Focus on quality, speed, and targeted section mastery.",
    variant: "gold",
  },
  {
    icon: "🌏",
    label: "Choosing Your Version",
    text: "UK only → UCAT (UK). Targeting Australia or New Zealand → UCAT ANZ. For flexibility across all three countries → UCAT ANZ is the smartest choice with earlier deadlines and broader acceptance.",
    variant: "navy",
  },
];

const examCards = [
  {
    icon: "🗣️",
    time: "27 mins",
    title: "Verbal Reasoning",
    desc: "Critically evaluate written information and draw conclusions.",
    questions: "44 questions",
    score: "300–900",
    removed: false,
  },
  {
    icon: "⚖️",
    time: "31 mins",
    title: "Decision Making",
    desc: "Logical reasoning and inference from complex scenarios.",
    questions: "29 questions",
    score: "300–900",
    removed: false,
  },
  {
    icon: "📐",
    time: "25 mins",
    title: "Quantitative Reasoning",
    desc: "Numerical problem-solving under time pressure.",
    questions: "36 questions",
    score: "300–900",
    removed: false,
  },
  {
    icon: "🏥",
    time: "26 mins",
    title: "Situational Judgement",
    desc: "Ethical dilemmas and NHS values.",
    questions: "69 questions",
    score: "Band 1–4",
    removed: false,
  },
  {
    icon: "🔷",
    time: "Eliminated",
    title: "Abstract Reasoning",
    desc: "Completely removed from UCAT 2026 structure.",
    questions: "—",
    score: "—",
    removed: true,
  },
];

const tableRows = [
  { section: "Verbal Reasoning",      questions: "44",   time: "27 minutes", score: "300 – 900",  status: "active",   statusLabel: "Active"       },
  { section: "Decision Making",       questions: "29",   time: "31 minutes", score: "300 – 900",  status: "active",   statusLabel: "Active"       },
  { section: "Quantitative Reasoning",questions: "36",   time: "25 minutes", score: "300 – 900",  status: "active",   statusLabel: "Active"       },
  { section: "Situational Judgement", questions: "69",   time: "26 minutes", score: "Band 1 – 4", status: "band",     statusLabel: "Band Grade"   },
  { section: "Abstract Reasoning",    questions: "—",    time: "—",          score: "—",          status: "removed",  statusLabel: "Removed 2026" },
  { section: "Grand Total",           questions: "~178", time: "~2 hours",   score: "Max 2700",   status: "total",    statusLabel: ""             },
];

/* ── Scroll-reveal hook ──────────────────────────────── */
function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), i * 90);
            o.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);
  return refs;
}

/* ── Component ───────────────────────────────────────── */
export default function UcatMajorChanges() {
  const cardRefs  = useReveal();
  const tableRefs = useReveal();

  return (
    <section className={styles.section}>
      {/* ── Section Header ── */}
      <div className={styles.header}>
        <span className={styles.tag}>2026 Update</span>
        <h2 className={styles.title}>Major Changes in UCAT 2026</h2>
        <p className={styles.sub}>
          UCAT 2026 has undergone one of its most significant structural changes
          in recent years. Understanding these updates is critical to building a
          smarter prep strategy.
        </p>
      </div>

      {/* ── Biggest Change + Insights ── */}
      <div className={styles.introGrid}>
        {/* Left: big change card */}
        <div className={styles.bigCard}
          ref={(el) => { cardRefs.current[0] = el; }}>
          <span className={styles.alertTag}>{biggestChange.tag}</span>
          <h3 className={styles.bigCardTitle}>{biggestChange.title}</h3>
          <p className={styles.bigCardBody}>{biggestChange.body}</p>
          <ul className={styles.bulletList}>
            {biggestChange.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right: insight pills */}
        <div className={styles.insightCol}>
          {insights.map((ins, i) => (
            <div
              key={ins.label}
              className={`${styles.insightCard} ${styles[`insight_${ins.variant}`]}`}
              ref={(el) => { cardRefs.current[1 + i] = el; }}
            >
              <div className={styles.insightLabel}>
                <span>{ins.icon}</span> {ins.label}
              </div>
              <p className={styles.insightText}>{ins.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Exam Cards ── */}
      <div className={styles.examGrid}>
        {examCards.map((card, i) => (
          <div
            key={card.title}
            className={`${styles.examCard} ${card.removed ? styles.examCardRemoved : ""}`}
            ref={(el) => { cardRefs.current[3 + i] = el; }}
          >
            {card.removed && (
              <div className={styles.removedBadge}>REMOVED 2026</div>
            )}
            <span className={styles.examIcon}
              style={{ opacity: card.removed ? 0.25 : 1 }}>
              {card.icon}
            </span>
            <div className={`${styles.timePill} ${card.removed ? styles.timePillRemoved : ""}`}>
              {card.time}
            </div>
            <h3 className={styles.examTitle}>{card.title}</h3>
            <p className={styles.examDesc}>{card.desc}</p>
            <div className={styles.examMeta}>
              <span>{card.questions}</span>
              <span className={styles.dot}>·</span>
              <span>{card.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Score Table ── */}
      <div className={styles.tableWrap}>
        <div className={styles.tableHeader}>
          <span className={styles.tag}>Exam Structure</span>
          <h3 className={styles.tableTitle}>UCAT 2026 at a Glance</h3>
        </div>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Section</th>
                <th>Questions</th>
                <th>Time</th>
                <th>Score Range</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={row.section}
                  className={`
                    ${row.status === "removed" ? styles.rowRemoved : ""}
                    ${row.status === "total"   ? styles.rowTotal   : ""}
                  `}
                  ref={(el) => { tableRefs.current[i] = el; }}
                >
                  <td><strong>{row.section}</strong></td>
                  <td>{row.questions}</td>
                  <td>{row.time}</td>
                  <td>{row.score}</td>
                  <td>
                    {row.statusLabel && (
                      <span className={`${styles.badge} ${styles[`badge_${row.status}`]}`}>
                        {row.statusLabel}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}