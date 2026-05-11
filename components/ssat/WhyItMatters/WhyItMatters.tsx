"use client";

import styles from "./WhyItMatters.module.css";

/* ── Types ──────────────────────────────────── */
interface ImpCard {
  icon: string;
  title: string;
  text: string;
}

/* ── Static data ─────────────────────────────── */
const impCards: ImpCard[] = [
  {
    icon: "🏛️",
    title: "Gateway to Elite Private Schools",
    text: "The SSAT is the primary standardised benchmark used by top independent schools like Phillips Exeter, Andover, Choate Rosemary Hall, and Hotchkiss. A strong score is non-negotiable for admission consideration at these institutions.",
  },
  {
    icon: "📊",
    title: "Objective Academic Measure",
    text: "Beyond grades and teacher recommendations, the SSAT gives admissions committees a standardised, objective lens to compare applicants from different schools, curricula (CBSE, IB, IGCSE), and countries.",
  },
  {
    icon: "🎓",
    title: "Merit Scholarships",
    text: "Many independent schools offer merit-based financial aid and scholarships tied to SSAT performance. A 90th percentile or higher score can meaningfully increase scholarship eligibility.",
  },
  {
    icon: "🌍",
    title: "International Admissions",
    text: "Indian, Nigerian, UAE, and other international students use the SSAT to apply to boarding schools abroad. The SSAT is the universal language of private school admissions globally.",
  },
  {
    icon: "📝",
    title: "Part of a Holistic Profile",
    text: "A strong SSAT score — paired with excellent grades, extracurricular achievements, and compelling essays — forms the foundation of a competitive private school application.",
  },
  {
    icon: "🔢",
    title: "Percentile Matters More Than Raw Score",
    text: "Schools evaluate your SSAT percentile relative to other applicants in the same grade. A 75th percentile score may be sufficient at some schools while a 90th+ is required at others. Strategy is everything.",
  },
];

/* ── Component ───────────────────────────────── */
export default function WhyItMatters() {
  return (
    <section className={styles.importanceSection} id="importance">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Why It Matters</span>
          <h2 className={styles.sectionTitle}>
            Importance of the <em>SSAT</em>
          </h2>
          <p className={styles.sectionSub}>
            The SSAT is a critical component of the private school admissions
            process — but it is one piece of a larger, holistic evaluation.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.impGrid}>
          {impCards.map((card) => (
            <div key={card.title} className={styles.impCard}>
              <span className={styles.impIcon} aria-hidden="true">
                {card.icon}
              </span>
              <div className={styles.impTitle}>{card.title}</div>
              <p className={styles.impText}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}