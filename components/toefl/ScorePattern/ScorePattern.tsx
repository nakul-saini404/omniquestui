"use client";

import { useEffect, useRef } from "react";
import styles from "./ScorePattern.module.css";

/* ── Data ───────────────────────────────── */

interface ScoreCard {
  icon: string;
  name: string;
  time: string;
  questions: string;
  maxScore: number;
  delay: string;
}

interface TableRow {
  section: string;
  time: string;
  questions: string;
  whatYouDo: string;
  score: string;
  isTotal?: boolean;
}

interface PkgRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface Package {
  icon: string;
  name: string;
  sub: string;
  accent?: boolean;
  rows: PkgRow[];
}

const scoreCards: ScoreCard[] = [
  {
    icon: "📖",
    name: "Reading",
    time: "35 Minutes",
    questions: "20 Questions · 2 Passages",
    maxScore: 30,
    delay: "0.04s",
  },
  {
    icon: "🎧",
    name: "Listening",
    time: "36 Minutes",
    questions: "28 Questions · 3–4 Lectures",
    maxScore: 30,
    delay: "0.10s",
  },
  {
    icon: "🗣️",
    name: "Speaking",
    time: "16 Minutes",
    questions: "4 Tasks · AI + Human Scored",
    maxScore: 30,
    delay: "0.16s",
  },
  {
    icon: "✍️",
    name: "Writing",
    time: "29 Minutes",
    questions: "2 Tasks · Integrated + Academic",
    maxScore: 30,
    delay: "0.22s",
  },
];

const tableRows: TableRow[] = [
  {
    section: "Reading",
    time: "35 min",
    questions: "20 questions",
    whatYouDo:
      "Read academic passages and respond to comprehension, inference, and vocabulary questions",
    score: "0 – 30",
  },
  {
    section: "Listening",
    time: "36 min",
    questions: "28 questions",
    whatYouDo:
      "Answer questions about brief academic lectures or classroom discussions",
    score: "0 – 30",
  },
  {
    section: "Speaking",
    time: "16 min",
    questions: "4 tasks",
    whatYouDo:
      "Speak about a familiar topic; discuss material you read and listened to in integrated tasks",
    score: "0 – 30",
  },
  {
    section: "Writing",
    time: "29 min",
    questions: "2 tasks",
    whatYouDo:
      "Read a passage, listen to a recording, then type an integrated response; write an academic essay",
    score: "0 – 30",
  },
  {
    section: "Total",
    time: "~2 hrs",
    questions: "54 items",
    whatYouDo: "Complete all four sections in one sitting without breaks",
    score: "0 – 120",
    isTotal: true,
  },
];

const packages: Package[] = [
  {
    icon: "🎓",
    name: "Free Demo Pack",
    sub: "Try before you commit",
    rows: [
      { label: "Live Lecture", value: "60 Min / Day" },
      { label: "Curriculum", value: "12 Weeks" },
      { label: "Validity", value: "3 Days" },
      { label: "Mock Tests", value: "1 Full Mock" },
      { label: "Cost", value: "FREE", highlight: true },
    ],
  },
  {
    icon: "🏆",
    name: "Live Class Pack",
    sub: "Full TOEFL preparation programme",
    accent: true,
    rows: [
      { label: "Live Lecture", value: "60 Min / Day" },
      { label: "Curriculum", value: "12 Weeks" },
      { label: "Validity", value: "180 Days" },
      { label: "Batch Timing", value: "Evening 7:30–8:30 PM" },
      { label: "Days", value: "Monday – Friday" },
    ],
  },
];

/* ── Component ───────────────────────────── */

export default function ScorePattern() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);
  const pkgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [headerRef, tableRef, pkgRef].forEach(
      (ref) => ref.current && io.observe(ref.current)
    );
    cardRefs.current.forEach((el) => el && io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.pattern} id="pattern">
      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.reveal} ${styles.headerWrap}`}
          ref={headerRef}
        >
          <div className={styles.secLabel}>Score Pattern</div>
          <h2 className={styles.heading}>
            TOEFL iBT <em>Exam Structure</em> &amp; Score Pattern
          </h2>
          <p className={styles.patternSub}>
            Four sections, four skills, one 2-hour test. Here's exactly what
            you face and how each section is scored.
          </p>
        </div>

        {/* ── Score Cards ── */}
        <div className={styles.scoreCards}>
          {scoreCards.map((card, i) => (
            <div
              key={card.name}
              className={`${styles.scoreCard} ${styles.reveal}`}
              style={{ transitionDelay: card.delay }}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <span className={styles.scoreCardIcon}>{card.icon}</span>
              <div className={styles.scoreCardName}>{card.name}</div>
              <div className={styles.scoreCardTime}>{card.time}</div>
              <div className={styles.scoreCardQ}>{card.questions}</div>
              <span className={styles.scoreCardMax}>{card.maxScore}</span>
              <div className={styles.scoreCardMaxLbl}>Max Score</div>
              <div className={styles.scoreCardBar} aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* ── Detailed Table ── */}
        <div
          className={`${styles.tblWrap} ${styles.reveal}`}
          ref={tableRef}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Section</th>
                <th>Time Limit</th>
                <th>Questions / Tasks</th>
                <th>What You Do</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.section} className={row.isTotal ? styles.totalRow : ""}>
                  <td className={styles.tdBold}>
                    {row.isTotal ? <strong>{row.section}</strong> : row.section}
                  </td>
                  <td>{row.isTotal ? <strong>{row.time}</strong> : row.time}</td>
                  <td>{row.isTotal ? <strong>{row.questions}</strong> : row.questions}</td>
                  <td>{row.whatYouDo}</td>
                  <td>
                    <span className={`${styles.tdBadge} ${row.isTotal ? styles.tdBadgeTotal : ""}`}>
                      {row.score}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Package Cards ── */}
        <div
          className={`${styles.pkgSection} ${styles.reveal}`}
          ref={pkgRef}
        >
          <h3 className={styles.pkgHeading}>EduQuest TOEFL Course Packages</h3>
          <div className={styles.pkgGrid}>
            {packages.map((pkg) => (
              <div key={pkg.name} className={styles.pkgCard}>
                <div
                  className={`${styles.pkgCardHead} ${pkg.accent ? styles.pkgCardHeadAccent : ""}`}
                >
                  <div className={styles.pkgCardHeadIcon}>{pkg.icon}</div>
                  <div>
                    <div className={styles.pkgCardHeadName}>{pkg.name}</div>
                    <div className={styles.pkgCardHeadSub}>{pkg.sub}</div>
                  </div>
                </div>
                <div className={styles.pkgCardBody}>
                  {pkg.rows.map((row) => (
                    <div key={row.label} className={styles.pkgRow}>
                      <span className={styles.pkgRowLabel}>{row.label}</span>
                      <span
                        className={`${styles.pkgRowVal} ${row.highlight ? styles.pkgRowValGreen : ""}`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}