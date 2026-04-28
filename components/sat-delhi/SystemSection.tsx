import styles from "./SystemSection.module.css";

const CARDS = [
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
    desc: "Understand exactly what separates you from your target score with precise data-driven gap analysis across Reading, Writing, and Math.",
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
];

export default function SystemSection() {
  return (
    <section className={styles.section} id="system">
      <div className="container">
        <div className="section-head">
          <div className="label">How We Prepare You</div>
          <h2>
            Our SAT Academic <em>Positioning System</em>
          </h2>
          <p>
            Preparation without strategy leads to effort. Strategy leads to
            outcomes. EduQuest&apos;s proven adaptive model has been refined over
            24+ years of SAT coaching in Delhi NCR.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <div key={c.num} className={styles.card} data-num={c.num}>
              <div className={styles.icon}>{c.icon}</div>
              <div className={styles.title}>{c.title}</div>
              <div className={styles.desc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
