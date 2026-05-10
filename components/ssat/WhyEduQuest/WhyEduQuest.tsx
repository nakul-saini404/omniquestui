"use client";

import styles from "./WhyEduQuest.module.css";

/* ── Types ──────────────────────────────────── */
interface StatBox {
  num: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  text: string;
}

/* ── Static data ─────────────────────────────── */
const stats: StatBox[] = [
  { num: "18+",    label: "Years of Experience" },
  { num: "2,299+", label: "Student Profiles Built" },
  { num: "1,839+", label: "University Admits" },
  { num: "99th",   label: "Highest Percentile" },
];

const features: Feature[] = [
  {
    icon: "🎯",
    title: "Diagnostic-First Preparation",
    text: "Every student begins with a full-length diagnostic SSAT to identify exact weak points, percentile gaps, and a customised preparation plan.",
  },
  {
    icon: "📚",
    title: "Section-Wise Mastery",
    text: "Dedicated coaching for Verbal vocabulary building, Reading comprehension strategy, and Quantitative concept mastery — not generic test prep.",
  },
  {
    icon: "📝",
    title: "Writing Sample Coaching",
    text: "Most coaching institutes ignore the writing sample. EduQuest provides dedicated essay strategy and feedback to ensure admissions officers are impressed.",
  },
  {
    icon: "🧪",
    title: "Mock Tests & Error Analysis",
    text: "Full-length timed mock tests with structured review sessions — covering every wrong answer, every lucky correct answer, and every pattern of error.",
  },
  {
    icon: "🌍",
    title: "School-Specific Strategy",
    text: "We help you identify target score thresholds for your specific shortlisted schools and align preparation with their admissions profile.",
  },
  {
    icon: "💻",
    title: "Online · Offline · Hybrid",
    text: "Flexible learning modes for students in India and internationally. Same faculty, same rigour — whether you are in Delhi, Dubai, or New York.",
  },
];

/* ── Component ───────────────────────────────── */
export default function WhyEduQuest() {
  return (
    <section className={styles.eduquestSection} id="why-eduquest">
      <div className={styles.container}>
        <div className={styles.whyGrid}>

          {/* ── LEFT: Label, title, subtitle, stats ── */}
          <div className={styles.whyLeft}>
            <span className={styles.sectionLabel}>Why EduQuest</span>

            <h2 className={styles.sectionTitle}>
              Why Students Choose <em>EduQuest</em> for SSAT
            </h2>

            <p className={styles.sectionSub}>
              We don&apos;t just teach content. EduQuest builds a complete SSAT
              preparation system — from diagnostic to test day — integrated with
              private school admissions strategy.
            </p>

            {/* Stats 2×2 grid */}
            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statBox}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statSub}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Feature list ── */}
          <div className={styles.whyFeatures}>
            {features.map((feat) => (
              <div key={feat.title} className={styles.whyFeat}>
                <div className={styles.featIcon} aria-hidden="true">
                  {feat.icon}
                </div>
                <div className={styles.featBody}>
                  <div className={styles.featTitle}>{feat.title}</div>
                  <p className={styles.featText}>{feat.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}