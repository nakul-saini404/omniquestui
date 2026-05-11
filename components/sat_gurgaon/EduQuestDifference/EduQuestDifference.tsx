import styles from "./EduQuestDifference.module.css";

const features = [
  {
    icon: "🎯",
    title: "Academic Positioning",
    desc: "We integrate SAT performance into a broader strategy that strengthens your academic narrative for top university applications across Gurgaon, Delhi and globally.",
  },
  {
    icon: "📈",
    title: "Profile Strength",
    desc: "Your SAT score becomes a component of a comprehensive profile designed to stand out in competitive admissions environments — not just a number.",
  },
  {
    icon: "🗺️",
    title: "University Targeting Strategy",
    desc: "We align your score goals with your specific target universities to ensure your SAT preparation in Gurgaon is purposeful and directed.",
  },
];

export default function EduQuestDifference() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>The EduQuest Difference</div>
      <h2 className={styles.heading}>
        SAT Is Not Just a Test. It&apos;s a <em>Positioning Tool.</em>
      </h2>
      <p className={styles.sectionSub}>
        Most students prepare for the SAT in isolation. Top applicants use it as
        a strategic component of their overall admissions profile. EduQuest's
        digital SAT coaching in Gurgaon is built around this distinction.
      </p>
      <div className={styles.quoteBox}>
        &ldquo;A high score matters. Strategic positioning matters more.&rdquo;
      </div>
      <div className={styles.featuresGrid}>
        {features.map((f) => (
          <div key={f.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}