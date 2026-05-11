import styles from "./ExamFormat2026.module.css";

/* ─── Data ─────────────────────────────────────────────────── */

const digitalExams: string[] = [
  "AP Computer Science Principles",
  "AP English Literature and Composition",
  "AP English Language and Composition",
  "AP U.S. History",
  "AP World History: Modern",
  "AP European History",
  "AP Seminar & AP Research",
];

const paperExams: string[] = [
  "AP Calculus AB & BC",
  "AP Physics 1, 2, C: Mechanics, C: E&M",
  "AP Chemistry",
  "AP Biology",
  "AP Statistics",
  "AP Psychology",
  "AP Economics (Micro & Macro)",
  "AP Government & Politics",
  "AP Art & Design (Portfolio)",
];

const timelineItems = [
  {
    num: 1,
    heading: "Multiple Choice Section (MCQ)",
    body: "45–55 questions depending on the subject. Tests factual knowledge, conceptual understanding, and application. Accounts for 50–67% of your total score.",
  },
  {
    num: 2,
    heading: "Free Response Questions (FRQ / DBQ / SAQ)",
    body: "3–8 extended response questions requiring written analysis, problem-solving, essay writing, or data interpretation. Tests higher-order thinking.",
  },
  {
    num: 3,
    heading: "Scoring — 1 to 5 Scale",
    body: 'Exams are scored 1–5 by College Board. A score of 3 is "qualified," 4 is "well qualified," and 5 is "extremely qualified" for college credit.',
  },
  {
    num: 4,
    heading: "Score Reporting & College Credit",
    body: "Scores are released in July. You can self-report AP scores in college applications and send official scores to universities after admission.",
  },
];

/* ─── Sub-components ────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{text}</span>
    </div>
  );
}

function FormatCard({
  icon,
  title,
  subtitle,
  items,
  badge,
}: {
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
  badge?: string;
}) {
  return (
    <div className={styles.formatCard}>
      <div className={styles.formatCardIcon}>{icon}</div>
      <h3 className={styles.formatCardTitle}>{title}</h3>
      <p className={styles.formatCardSubtitle}>{subtitle}</p>
      <ul className={styles.formatList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {badge && <div className={styles.digitalBadge}>{badge}</div>}
    </div>
  );
}

function TimelineItem({
  num,
  heading,
  body,
  isLast,
}: {
  num: number;
  heading: string;
  body: string;
  isLast: boolean;
}) {
  return (
    <div className={`${styles.timelineItem} ${isLast ? styles.timelineItemLast : ""}`}>
      <div className={styles.timelineNum}>{num}</div>
      <div className={styles.timelineBody}>
        <h4 className={styles.timelineHeading}>{heading}</h4>
        <p className={styles.timelineText}>{body}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export default function ExamFormat2026() {
  return (
    <section
      className={styles.examFormat}
      aria-labelledby="format-heading"
    >
      <div className={styles.container}>

        {/* ── Header ── */}
        <SectionLabel text="Exam Format 2026" />
        <h2 id="format-heading" className={styles.mainTitle}>
          AP Exam Format:<br />
          <span className={styles.highlight}>Digital & Paper-Based</span>
        </h2>
        <p className={styles.mainDesc}>
          Starting 2025, select AP exams moved to digital format. EduQuest prepares
          students for both formats with Bluebook-aligned practice.
        </p>

        {/* ── Format Cards Grid ── */}
        <div className={styles.formatGrid}>
          <FormatCard
            icon="💻"
            title="Digital AP Exams"
            subtitle="Administered online at schools/test centers via Bluebook app"
            items={digitalExams}
            badge="✓ Bluebook-native prep at EduQuest"
          />
          <FormatCard
            icon="📄"
            title="Paper-Based AP Exams"
            subtitle="Traditional paper-and-pencil format at designated test centers"
            items={paperExams}
          />
        </div>

        {/* ── AP Exam Structure ── */}
        <div className={styles.structureBlock}>
          <SectionLabel text="AP Exam Structure" />
          <h3 className={styles.structureTitle}>
            How AP Exams Are{" "}
            <span className={styles.highlight}>Structured</span>
          </h3>

          <div className={styles.timeline}>
            {timelineItems.map((item, idx) => (
              <TimelineItem
                key={item.num}
                num={item.num}
                heading={item.heading}
                body={item.body}
                isLast={idx === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}