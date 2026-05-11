"use client";

import styles from "./ScoreStructure.module.css";

/* ── Types ──────────────────────────────────── */
type PillVariant = "top" | "good";

interface ScoreRow {
  level: string;
  gradeRange: string;
  scoreRange: string;
  totalRange: string;
  percentile: string;
  pillVariant: PillVariant;
}

interface MarkingCard {
  icon: string;
  title: string;
  detail: string;
  detailVariant: "plus" | "minus" | "neutral";
  note: string;
  cardVariant: "correct" | "wrong" | "skip";
}

interface ScoreReportStep {
  num: number;
  title: string;
  text: string;
}

/* ── Static data ─────────────────────────────── */
const scoreRows: ScoreRow[] = [
  {
    level: "Elementary",
    gradeRange: "Grades 3–4",
    scoreRange: "300–600 per section",
    totalRange: "900–1800",
    percentile: "75th–85th",
    pillVariant: "good",
  },
  {
    level: "Middle Level",
    gradeRange: "Grades 5–7",
    scoreRange: "440–710 per section",
    totalRange: "1320–2130",
    percentile: "80th–90th",
    pillVariant: "good",
  },
  {
    level: "Upper Level",
    gradeRange: "Grades 8–11",
    scoreRange: "500–800 per section",
    totalRange: "1500–2400",
    percentile: "85th–99th",
    pillVariant: "top",
  },
];

const markingCards: MarkingCard[] = [
  {
    icon: "✅",
    title: "Correct Answer",
    detail: "+1 Point",
    detailVariant: "plus",
    note: "Every correct answer earns one full point. Attempt questions you are confident about first.",
    cardVariant: "correct",
  },
  {
    icon: "❌",
    title: "Wrong Answer",
    detail: "−¼ Point",
    detailVariant: "minus",
    note: "A quarter point is deducted for each incorrect answer. Guessing blindly is not advised — strategic elimination is key.",
    cardVariant: "wrong",
  },
  {
    icon: "⏭️",
    title: "Skipped / Unanswered",
    detail: "0 Points",
    detailVariant: "neutral",
    note: "No penalty for leaving a question blank. If you can eliminate 2 or more options, guessing is statistically worthwhile.",
    cardVariant: "skip",
  },
];

const scoreReportSteps: ScoreReportStep[] = [
  {
    num: 1,
    title: "Scaled Score per Section",
    text: "Separate scaled scores for Verbal, Reading, and Quantitative (Math), each mapped to the level-specific scale.",
  },
  {
    num: 2,
    title: "Total Score",
    text: "The sum of all three scored sections combined into one total score reported to schools.",
  },
  {
    num: 3,
    title: "Percentile Rank",
    text: "Your performance compared to all SSAT test-takers in your grade from the previous three years — this is what schools actually focus on.",
  },
  {
    num: 4,
    title: "Writing Sample Copy",
    text: "An unscored copy of your writing sample is sent directly to each school you designate. It is evaluated subjectively by admissions officers.",
  },
  {
    num: 5,
    title: "School-Specific Targets",
    text: 'Each school has different score expectations. A "good" score is contextual — 50–60% accuracy can yield a competitive percentile depending on other test-takers in that cohort.',
  },
];

/* ── Helpers ─────────────────────────────────── */
function pillClass(variant: PillVariant): string {
  return variant === "top"
    ? `${styles.percentilePill} ${styles.pillTop}`
    : `${styles.percentilePill} ${styles.pillGood}`;
}

function markingCardClass(variant: MarkingCard["cardVariant"]): string {
  const map: Record<MarkingCard["cardVariant"], string> = {
    correct: `${styles.markingCard} ${styles.markingCardCorrect}`,
    wrong: `${styles.markingCard} ${styles.markingCardWrong}`,
    skip: `${styles.markingCard} ${styles.markingCardSkip}`,
  };
  return map[variant];
}

function detailClass(variant: MarkingCard["detailVariant"]): string {
  const map: Record<MarkingCard["detailVariant"], string> = {
    plus: `${styles.markingDetail} ${styles.markingDetailPlus}`,
    minus: `${styles.markingDetail} ${styles.markingDetailMinus}`,
    neutral: `${styles.markingDetail} ${styles.markingDetailNeutral}`,
  };
  return map[variant];
}

/* ── Component ───────────────────────────────── */
export default function ScoreStructure() {
  return (
    <section className={styles.scoreSection} id="scoring">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Score Structure</span>
          <h2 className={styles.sectionTitle}>
            SSAT Score <em>Structure</em> &amp; Percentiles
          </h2>
          <p className={styles.sectionSub}>
            Understanding how the SSAT is scored helps you set a meaningful
            target for the schools you are applying to.
          </p>
        </div>

        {/* ── Score table ── */}
        <div className={styles.scoreTableWrap}>
          <table className={styles.scoreTable}>
            <thead>
              <tr>
                <th>Level</th>
                <th>Grade Range</th>
                <th>Score Range (Each Section)</th>
                <th>Total Score Range</th>
                <th>Target Percentile</th>
              </tr>
            </thead>
            <tbody>
              {scoreRows.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.gradeRange}</td>
                  <td>{row.scoreRange}</td>
                  <td>{row.totalRange}</td>
                  <td>
                    <span className={pillClass(row.pillVariant)}>
                      {row.percentile}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Marking scheme + Score report ── */}
        <div className={styles.markingGrid}>
          {/* Left: Marking scheme cards */}
          <div>
            <h3 className={styles.markingColTitle}>Marking Scheme</h3>
            <div className={styles.markingStack}>
              {markingCards.map((card) => (
                <div key={card.title} className={markingCardClass(card.cardVariant)}>
                  <span className={styles.markingIcon} aria-hidden="true">
                    {card.icon}
                  </span>
                  <div className={styles.markingTitle}>{card.title}</div>
                  <div className={detailClass(card.detailVariant)}>
                    {card.detail}
                  </div>
                  <p className={styles.markingNote}>{card.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Score report steps */}
          <div>
            <h3 className={styles.markingColTitle}>
              What Your Score Report Includes
            </h3>
            <div className={styles.adaptiveSteps}>
              {scoreReportSteps.map((step) => (
                <div key={step.num} className={styles.stepRow}>
                  <div className={styles.stepNum} aria-hidden="true">
                    {step.num}
                  </div>
                  <div>
                    <div className={styles.stepContentTitle}>{step.title}</div>
                    <div className={styles.stepContentText}>{step.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}