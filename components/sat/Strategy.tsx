import styles from "./Strategy.module.css";

const steps = [
  {
    num: "01",
    title: "Digital SAT Diagnostic Test",
    desc: "Take a full-length Bluebook diagnostic to identify your baseline score, weak skill clusters, and the gap to your target university's average SAT.",
  },
  {
    num: "02",
    title: "Free Diagnostic Tests (Targeted Prep)",
    desc: "Drill your specific weak areas — not random chapters. EduQuest identifies your exact error patterns and assigns targeted practice sets per skill cluster.",
  },
  {
    num: "03",
    title: "Interactive Bluebook Optimisation",
    desc: "Master the Bluebook interface: elimination tool, mark-for-review, scratch pad, and clock strategy. These alone can add 20–40 points.",
  },
  {
    num: "04",
    title: "Full-Length Adaptive Mock Tests",
    desc: "Take 6+ full-length mocks under timed conditions. Review every wrong and lucky-correct answer. Track score progression weekly.",
  },
  {
    num: "05",
    title: "Practice Platform Mastery",
    desc: "Use Khan Academy SAT prep (official), EduQuest's question bank, and College Board practice tests to build 3,000+ question exposure.",
  },
];

const cards = [
  {
    icon: "🔬",
    cls: "blue",
    title: "SAT ACT AP Coaching with Strategy",
    desc: "We don't just teach content. Our SAT program is built around the adaptive test mechanism — every session is designed to target Module 2 Hard routing.",
  },
  {
    icon: "📈",
    cls: "gold",
    title: "Ivy League Admissions Strategy India",
    desc: "Your SAT score is one part of a larger positioning system. EduQuest integrates test prep with profile building and essay strategy for holistic admissions success.",
  },
  {
    icon: "🏆",
    cls: "red",
    title: "Score Improvement Guarantee",
    desc: "EduQuest students consistently improve 150–350 points. Our structured feedback loop — diagnostic → drill → mock → review — eliminates score plateaus.",
  },
];

const pricing = [
  { mode: "Online Live Group", price: "₹35,000+" },
  { mode: "Hybrid Courses", price: "₹50,000+" },
  { mode: "One-on-One Sessions", price: "₹40,000+" },
  { mode: "Hybrid One-on-One", price: "₹60,000+" },
];

export default function Strategy() {
  return (
    <section className={styles.strategy} id="strategy">
      <div className="container">
        <div className="section-head reveal">
          <div className="label">SAT Strategy 2026</div>
          <h2>
            How to Score <em>1500+</em><br />on the SAT — Step by Step
          </h2>
          <p>
            A structured, data-informed preparation plan built on what actually works
            for the Digital SAT adaptive format.
          </p>
        </div>

        <div className={styles.strategyGrid}>
          {/* Steps */}
          <div className="reveal">
            <div className={styles.strategySteps}>
              {steps.map((s) => (
                <div key={s.num} className={styles.stratItem}>
                  <div className={styles.stratNum}>{s.num}</div>
                  <div>
                    <div className={styles.stratTitle}>{s.title}</div>
                    <div className={styles.stratDesc}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className={`${styles.strategyRightCards} reveal`}>
            {cards.map((c) => (
              <div key={c.title} className={styles.stratCard}>
                <div className={`${styles.stratCardIcon} ${styles[c.cls]}`}>{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}

            {/* Pricing */}
            <div className={styles.pricingBox}>
              <div className={styles.pricingLabel}>Online &amp; Offline Modes</div>
              <div className={styles.pricingList}>
                {pricing.map((p, i) => (
                  <div key={p.mode} className={`${styles.pricingRow} ${i < pricing.length - 1 ? styles.bordered : ""}`}>
                    <span className={styles.pricingMode}>{p.mode}</span>
                    <span className={styles.pricingPrice}>{p.price}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://eduquest.org.in/contact-us/"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", marginTop: "16px", display: "block" }}
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
