"use client";

import styles from "./AboutExam.module.css";

/* ── Types ──────────────────────────────────── */
interface InfoCard {
  icon: string;
  title: string;
  text: string;
}

/* ── Static data ─────────────────────────────── */
const infoCards: InfoCard[] = [
  {
    icon: "📋",
    title: "Who Should Take the SSAT?",
    text: "Students in Grades 3–11 applying to independent private schools in the US, Canada, UK, and internationally.",
  },
  {
    icon: "🖊️",
    title: "Paper-Based Test",
    text: "A pencil-paper exam with MCQs and a writing sample. Home Testing and Prometric options are also available.",
  },
  {
    icon: "📅",
    title: "Test Frequency",
    text: "Administered approximately 8 times per year. Flex tests can be arranged any day with 4 weeks' advance notice.",
  },
  {
    icon: "🌐",
    title: "Accepted Globally",
    text: "Accepted by 1,000+ independent schools across the US, Canada, Switzerland, UK, and South-East Asia.",
  },
  {
    icon: "🔁",
    title: "Multiple Attempts",
    text: "Students can take the SSAT multiple times. Many schools consider the highest score or superscore across attempts.",
  },
  {
    icon: "💰",
    title: "Refund Policy",
    text: "No refunds on late or rush fees. Rescheduling costs approximately $35. Plan your registration carefully to avoid fees.",
  },
];

/* ── Component ───────────────────────────────── */
export default function AboutExam() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.whatGrid}>
          {/* ── Left: Prose ── */}
          <div className={styles.whatProse}>
            <span className={styles.sectionLabel}>About the Exam</span>

            <h2 className={styles.sectionTitle}>
              What is the <em>SSAT</em> Exam?
            </h2>

            <p>
              The Secondary School Admission Test (SSAT) is a highly reliable
              standardised exam used by hundreds of independent and private
              schools worldwide to assess student aptitude for admission. It is
              one of the most important standardised tests for students seeking
              admission to prestigious private schools in the United States,
              Canada, and beyond.
            </p>

            <p>
              The SSAT evaluates a student&apos;s verbal, quantitative, and
              reading skills. It is available at three levels — Elementary
              (Grades 3–4), Middle (Grades 5–7), and Upper (Grades 8–11) —
              each with a distinct structure and score range.
            </p>

            <h3>Mode of Examination</h3>

            <p>
              The SSAT is traditionally a pencil-paper test conducted at
              designated test centres. Students fill in circles indicating their
              selected answers. A writing sample is also included but remains
              unscored for grade purposes — it is shared directly with
              admissions officers who evaluate writing ability independently.
            </p>

            <p>
              SSAT administrators have expanded test options to include Home
              Testing via a secure online platform, and testing at Prometric
              test centres, giving students more flexibility in how and where
              they appear for the exam.
            </p>

            <div className={styles.highlightBox}>
              <p>
                <strong>Important:</strong> The SSAT is administered
                approximately <strong>eight times per year</strong> for
                standard test dates. Students may also apply for Flex Testing,
                which allows testing on non-standard dates. Flex tests must be
                arranged through a registered school or educational consultant
                at least <strong>four weeks in advance</strong>.
              </p>
            </div>
          </div>

          {/* ── Right: Info Cards ── */}
          <div className={styles.whatCards}>
            {infoCards.map((card) => (
              <div key={card.title} className={styles.infoCard}>
                <span className={styles.infoIcon} aria-hidden="true">
                  {card.icon}
                </span>
                <div className={styles.infoCardBody}>
                  <div className={styles.infoCardTitle}>{card.title}</div>
                  <div className={styles.infoCardText}>{card.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}