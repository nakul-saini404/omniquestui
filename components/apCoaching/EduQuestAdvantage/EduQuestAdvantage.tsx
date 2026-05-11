import styles from "./EduQuestAdvantage.module.css";

/* ─── Data ──────────────────────────────────────────────────── */

interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

const WHY_CARDS: WhyCard[] = [
  {
    icon: "🎯",
    title: "Live 1-on-1 Online Classes",
    description:
      "Every session is personalized to your pace, weak areas, and target score. Not pre-recorded. Not group lectures. Real-time interaction with your dedicated AP expert.",
  },
  {
    icon: "👨‍🏫",
    title: "Subject-Specialist Faculty",
    description:
      "Our teachers are AP-certified specialists — not generalist tutors. Each faculty member coaches only their area of expertise, with a proven track record of 5/5 scorers.",
  },
  {
    icon: "📝",
    title: "Real College Board Papers",
    description:
      "We train with official released AP exam materials, College Board rubrics, and authentic FRQ samples. Students know exactly what to expect on exam day.",
  },
  {
    icon: "📐",
    title: "Personalized Learning Plan",
    description:
      "Every student begins with a diagnostic assessment. We build a custom syllabus and timeline based on your current level, target score, and exam date.",
  },
  {
    icon: "🌍",
    title: "Global Track Record",
    description:
      "EduQuest students have earned 5/5 scores and gained admission to Harvard, MIT, Stanford, Yale, NUS, Imperial, and 100+ top global universities.",
  },
  {
    icon: "🔗",
    title: "Integrated AP + Admissions Strategy",
    description:
      "AP coaching is integrated with SAT, profile building, and university admissions support. We align your AP portfolio with your specific dream universities.",
  },
  {
    icon: "📊",
    title: "Performance Tracking Dashboard",
    description:
      "Live mock test performance dashboard. Track score trends, skill gaps, and improvement across every AP module. Parents receive regular progress reports.",
  },
  {
    icon: "💬",
    title: "24/7 Doubt Support",
    description:
      "WhatsApp doubt resolution between sessions. No question goes unanswered. Our faculty respond within 24 hours to ensure uninterrupted preparation.",
  },
  {
    icon: "⏰",
    title: "Flexible Global Scheduling",
    description:
      "Sessions available across all time zones — IST, EST, CST, PST, GST. EduQuest coaches students in India, USA, UAE, UK, Singapore, and 40+ countries.",
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function EduQuestAdvantage() {
  return (
    <section
      className={styles.whySection}
      aria-labelledby="why-heading"
    >
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.whyHeader}>
          <div className={styles.sectionLabel}>
            <span>EduQuest Advantage</span>
          </div>

          <h2 id="why-heading" className={styles.mainTitle}>
            Why <span className={styles.highlight}>EduQuest</span> Is India's Best
            <br />AP Coaching Institute
          </h2>

          <p className={styles.mainDesc}>
            We don't just teach AP — we engineer your success with personalized
            strategy, expert faculty, and a proven methodology.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className={styles.whyGrid}>
          {WHY_CARDS.map((card) => (
            <div key={card.title} className={styles.whyCard}>
              <div className={styles.whyCardIcon}>{card.icon}</div>
              <h3 className={styles.whyCardTitle}>{card.title}</h3>
              <p className={styles.whyCardDesc}>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}