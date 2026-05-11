import styles from "./SatStrategy.module.css";

const LEFT_STEPS = [
  {
    num: "01",
    title: "Digital SAT Diagnostic Test",
    text: "Take a full-length Bluebook diagnostic to identify your baseline score, weak skill clusters, and the gap to your target university's average SAT.",
  },
  {
    num: "02",
    title: "Targeted Prep (Drill Your Weak Areas)",
    text: "Drill your specific weak areas — not random chapters. EduQuest identifies your exact error patterns and assigns targeted practice sets per skill cluster.",
  },
  {
    num: "03",
    title: "Interactive Bluebook Optimisation",
    text: "Master the Bluebook interface: elimination tool, mark-for-review, scratch pad, and clock strategy. These alone can add 20–40 points.",
  },
];

const RIGHT_STEPS = [
  {
    num: "04",
    title: "Full-Length Adaptive Mock Tests",
    text: "Take 6+ full-length mocks under timed conditions. Review every wrong and lucky-correct answer. Track score progression weekly.",
  },
  {
    num: "05",
    title: "Practice Platform Mastery",
    text: "Use Khan Academy SAT prep (official), EduQuest's question bank, and College Board practice tests to build 3,000+ question exposure.",
  },
];

const HIGHLIGHTS = [
  {
    icon: "🔬",
    title: "SAT ACT AP Coaching with Strategy",
    text: "We don't just teach content. Our SAT program is built around the adaptive test mechanism — every session is designed to target Module 2 Hard routing.",
  },
  {
    icon: "📈",
    title: "Ivy League Admissions Strategy India",
    text: "Your SAT score is one part of a larger positioning system. EduQuest integrates test prep with profile building and essay strategy.",
  },
  {
    icon: "🏆",
    title: "Score Improvement Guarantee",
    text: "EduQuest students consistently improve 150–350 points through our diagnostic → drill → mock → review feedback loop.",
  },
];

export default function SatStrategy() {
  return (
    <section id="strategy" className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.sectionLabel}>SAT Strategy 2026</div>
        <h2 className={styles.sectionTitle}>
          How to Score <em>1500+</em> on the SAT — Step by Step
        </h2>
        <p className={styles.sectionSub}>
          A structured, data-informed preparation plan built on what actually
          works for the Digital SAT adaptive format.
        </p>

        {/* ── TWO-COL STEPS GRID ── */}
        <div className={styles.stepsGrid}>

          {/* LEFT — steps 01–03 */}
          <div className={styles.steps}>
            {LEFT_STEPS.map((s) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepBody}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — steps 04–05 + highlight card */}
          <div className={styles.steps}>
            {RIGHT_STEPS.map((s) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepBody}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}

            {/* Highlight info card */}
            <div className={styles.highlightCard}>
              {HIGHLIGHTS.map((h, i) => (
                <p
                  key={h.title}
                  className={styles.highlightRow}
                  style={i === HIGHLIGHTS.length - 1 ? { marginBottom: 0 } : undefined}
                >
                  {h.icon} <strong>{h.title}</strong>
                  <br />
                  <span>{h.text}</span>
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}