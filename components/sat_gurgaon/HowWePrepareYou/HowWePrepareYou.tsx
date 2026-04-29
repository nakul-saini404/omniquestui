import styles from "./HowWePrepareYou.module.css";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Diagnostic Evaluation",
    desc: "Identify your current level, strengths, and score potential with a structured baseline assessment — our exclusive Diagnostic Test Framework.",
  },
  {
    num: "02",
    icon: "📊",
    title: "Score Gap Analysis",
    desc: "Understand exactly what separates you from your target score with precise data-driven gap analysis across Reading, Writing, and Math sections.",
  },
  {
    num: "03",
    icon: "📐",
    title: "Section-wise Strategy Design",
    desc: "Targeted improvement across all Digital SAT sections — each planned with precision. Students can retake any module unlimited times.",
  },
  {
    num: "04",
    icon: "🧠",
    title: "Adaptive Preparation System",
    desc: "AI-based online test generation with personalized learning paths that adjust based on your evolving performance and score trajectory.",
  },
  {
    num: "05",
    icon: "📅",
    title: "100+ Hours Guaranteed",
    desc: "EduQuest guarantees a minimum of 100 hours of classes. Continuous performance tracking ensures every session moves you closer to your goal.",
  },
  {
    num: "06",
    icon: "🏛️",
    title: "Profile & Admissions Integration",
    desc: "SAT performance is woven into your university profile — connected with application essays, SOP writing, and shortlisting strategy.",
  },
];

export default function HowWePrepareYou() {
  return (
    <section id="system" className={styles.section}>
      <div className={styles.sectionLabel}>How We Prepare You</div>
      <h2 className={styles.heading}>
        Our SAT Academic <em>Positioning System</em>
      </h2>
      <p className={styles.sectionSub}>
        Preparation without strategy leads to effort. Strategy leads to
        outcomes. EduQuest&apos;s proven adaptive model has been refined over
        24+ years of SAT coaching in Gurgaon NCR.
      </p>
      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.num} className={styles.stepCard}>
            <div className={styles.stepNum}>{step.num}</div>
            <div className={styles.stepIcon}>{step.icon}</div>
            <div className={styles.stepTitle}>{step.title}</div>
            <div className={styles.stepDesc}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}