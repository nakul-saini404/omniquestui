import styles from "./SatPattern.module.css";

const RW_STATS = [
  { label: "Total Questions", value: "54" },
  { label: "Time Allowed",    value: "64 minutes" },
  { label: "Modules",         value: "2 (adaptive)" },
  { label: "Max Score",       value: "800" },
  { label: "Question Types",  value: "MCQ + SPR" },
];

const MATH_STATS = [
  { label: "Total Questions", value: "44" },
  { label: "Time Allowed",    value: "70 minutes" },
  { label: "Modules",         value: "2 (adaptive)" },
  { label: "Max Score",       value: "800" },
  { label: "Calculator",      value: "Allowed throughout" },
];

const RW_MODS = [
  {
    title: "Module 1",
    text: "Mixed difficulty (easy–hard). Your performance determines Module 2 difficulty level.",
  },
  {
    title: "Module 2",
    text: "Harder module = higher ceiling score. Aim for Module 2 Hard to reach 700+.",
  },
];

const MATH_MODS = [
  {
    title: "Algebra & Advanced",
    text: "Linear equations, quadratics, polynomials, functions, trigonometry (~35% of questions).",
  },
  {
    title: "Data & Problem Solving",
    text: "Statistics, ratios, percentages, unit conversion, data analysis (~30% of questions).",
  },
];

const OUTCOMES = [
  { num: "98",       lbl: "Total Questions" },
  { num: "2h 14m",   lbl: "Total Duration" },
  { num: "400–1600", lbl: "Score Range" },
  { num: "Adaptive", lbl: "Test Format" },
];

export default function SatPattern() {
  return (
    <section id="pattern" className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.sectionLabel}>SAT Exam Pattern 2026</div>
        <h2 className={styles.sectionTitle}>
          How Many Questions Are in the <em>SAT?</em>
        </h2>
        <p className={styles.sectionSub}>
          The Digital SAT has 98 questions across 4 adaptive modules. Here is
          the complete section-wise breakdown for 2026.
        </p>

        {/* ── PATTERN CARDS GRID ── */}
        <div className={styles.patternGrid}>

          {/* Reading & Writing */}
          <div className={styles.patternCard}>
            <div className={styles.patternHead}>
              <h3>📖 Reading &amp; Writing</h3>
              <p>54 Questions · 64 Minutes</p>
            </div>
            <div className={styles.patternBody}>
              {RW_STATS.map((s) => (
                <div key={s.label} className={styles.patternStat}>
                  <span>{s.label}</span>
                  <span>{s.value}</span>
                </div>
              ))}
              {RW_MODS.map((m, i) => (
                <div
                  key={m.title}
                  className={styles.modBox}
                  style={i > 0 ? { marginTop: "8px" } : undefined}
                >
                  <h4>{m.title}</h4>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mathematics */}
          <div className={styles.patternCard}>
            <div className={styles.patternHead}>
              <h3>🧮 Mathematics</h3>
              <p>44 Questions · 70 Minutes</p>
            </div>
            <div className={styles.patternBody}>
              {MATH_STATS.map((s) => (
                <div key={s.label} className={styles.patternStat}>
                  <span>{s.label}</span>
                  <span>{s.value}</span>
                </div>
              ))}
              {MATH_MODS.map((m, i) => (
                <div
                  key={m.title}
                  className={styles.modBox}
                  style={i > 0 ? { marginTop: "8px" } : undefined}
                >
                  <h4>{m.title}</h4>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── OUTCOMES BAR ── */}
        <div className={styles.outcomesBar}>
          {OUTCOMES.map((o) => (
            <div key={o.lbl} className={styles.outItem}>
              <div className={styles.outNum}>{o.num}</div>
              <div className={styles.outLbl}>{o.lbl}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}