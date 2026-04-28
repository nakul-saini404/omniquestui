import styles from "./PatternSection.module.css";

export default function PatternSection() {
  return (
    <section className={styles.patternSection} id="pattern">
      <div className="container">
        <div className="section-head reveal">
          <div className="label">SAT Exam Pattern 2026</div>
          <h2>
            How Many Questions<br />Are in the <em>SAT?</em>
          </h2>
          <p>
            The Digital SAT has 98 questions across 4 adaptive modules. Here is the
            complete section-wise breakdown for 2026.
          </p>
        </div>

        <div className={`${styles.patternGrid} reveal`}>
          {/* Reading & Writing */}
          <div className={styles.patternCard}>
            <div className={styles.patternCardHeader}>
              <h3>📖 Reading &amp; Writing</h3>
              <span className={styles.patternMeta}>54 Questions · 64 Minutes</span>
            </div>
            <div className={styles.patternRows}>
              {[
                ["Total Questions", "54"],
                ["Time Allowed", "64 minutes"],
                ["Modules", "2 (adaptive)"],
                ["Max Score", "800"],
                ["Question Types", "MCQ + SPR"],
              ].map(([label, val]) => (
                <div key={label} className={styles.pRow}>
                  <span className={styles.pRowLabel}>{label}</span>
                  <span className={styles.pRowVal}>{val}</span>
                </div>
              ))}
            </div>
            <div className={styles.moduleGrid}>
              <div className={`${styles.moduleBox} ${styles.mod1}`}>
                <h4>Module 1</h4>
                <p>Mixed difficulty (easy–hard). Your performance determines Module 2 difficulty level.</p>
              </div>
              <div className={`${styles.moduleBox} ${styles.mod2}`}>
                <h4>Module 2</h4>
                <p>Harder module = higher ceiling score. Aim for Module 2 Hard to reach 700+.</p>
              </div>
            </div>
          </div>

          {/* Math */}
          <div className={styles.patternCard}>
            <div className={styles.patternCardHeader}>
              <h3>🧮 Mathematics</h3>
              <span className={styles.patternMeta}>44 Questions · 70 Minutes</span>
            </div>
            <div className={styles.patternRows}>
              {[
                ["Total Questions", "44"],
                ["Time Allowed", "70 minutes"],
                ["Modules", "2 (adaptive)"],
                ["Max Score", "800"],
                ["Calculator", "Allowed throughout"],
              ].map(([label, val]) => (
                <div key={label} className={styles.pRow}>
                  <span className={styles.pRowLabel}>{label}</span>
                  <span className={styles.pRowVal}>{val}</span>
                </div>
              ))}
            </div>
            <div className={styles.moduleGrid}>
              <div className={`${styles.moduleBox} ${styles.mod1}`}>
                <h4>Algebra &amp; Advanced</h4>
                <p>Linear equations, quadratics, polynomials, functions, trigonometry (~35% of questions).</p>
              </div>
              <div className={`${styles.moduleBox} ${styles.mod2}`}>
                <h4>Data &amp; Problem Solving</h4>
                <p>Statistics, ratios, percentages, unit conversion, data analysis (~30% of questions).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Strip */}
        <div className={`${styles.summaryStrip} reveal`}>
          {[
            { num: "98", lbl: "Total Questions" },
            { num: "2h 14m", lbl: "Total Duration" },
            { num: "400–1600", lbl: "Score Range" },
            { num: "Adaptive", lbl: "Test Format" },
          ].map((s, i) => (
            <div key={s.lbl} className={`${styles.summaryItem} ${i < 3 ? styles.bordered : ""}`}>
              <div className={styles.summaryNum}>{s.num}</div>
              <div className={styles.summaryLbl}>{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
