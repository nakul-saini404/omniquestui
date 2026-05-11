import React from "react";
import styles from "./USExclusivePathway.module.css";

const cards = [
  {
    icon: "📝",
    title: "What is the Digital SAT?",
    desc: "Taken digitally via the Bluebook app on laptop or tablet. Two adaptive sections — Reading & Writing and Math — scored on a 400–1600 scale. Shorter, smarter, and fully computer-adaptive since 2024.",
  },
  {
    icon: "🏆",
    title: "SAT Score Targets by Tier",
    desc: "Top-10 universities (MIT, Harvard, Yale) expect 1550–1600. Top-25 schools target 1490–1540. Strong state universities like UT Austin and Purdue typically admit in the 1400–1490 range.",
  },
  {
    icon: "💰",
    title: "Merit Scholarship Value",
    desc: "A 1500+ SAT score unlocks merit scholarships worth $20,000–$60,000+ at many US universities. Schools like UT Austin, Georgia Tech, and Purdue award significant aid based directly on SAT performance.",
  },
];

export default function USExclusivePathway() {
  return (
    <div className={styles.secWhite}>
      <div className={styles.inner}>

        <div className={`${styles.sectionLabel} ${styles.dk}`}>US-Exclusive Pathway</div>
        <h2 className={styles.sectionTitle}>
          SAT &amp; <em>Merit Scholarship</em> Strategy
        </h2>
        <div className={styles.divider}></div>
        <p className={styles.sectionSub}>
          US students have a unique advantage — the Digital SAT is the single
          most impactful lever for unlocking merit scholarships worth
          $20,000–$60,000+ and gaining admission to elite universities. EduQuest
          is one of the few coaching firms that builds a complete SAT-to-scholarship
          strategy for US families.
        </p>

        <div className={styles.cards3}>
          {cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}