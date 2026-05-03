import styles from "./Roadmap.module.css";

const FOUNDATION_ITEMS = [
  "PSAT 8/9 and PSAT 10 preparation",
  "Math and grammar fundamentals lock-in",
  "Reading comprehension strategy",
  "AP course selection and planning",
  "Extracurricular architecture begins",
  "4-year/5-year integrated programme option",
];

const EXECUTION_ITEMS = [
  "SAT diagnostic + score gap analysis",
  "Targeted SAT / ACT coaching plan",
  "6+ full Bluebook adaptive mock tests",
  "Essay & narrative design system",
  "University shortlisting & positioning",
  "Application submission & interview prep",
];

export default function Roadmap() {
  return (
    <section id="roadmap" className={styles.section}>
      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={styles.sectionLabel}>Grade 8–12 Roadmap</div>
        <h2 className={styles.sectionTitle}>
          When Should You Start <em>SAT</em> Preparation?
        </h2>
        <p className={styles.sectionSub}>
          The earlier you start, the more room you have to improve, retake, and
          build a compelling university application alongside your SAT score.
        </p>

        {/* ── 2-COL ROADMAP GRID ── */}
        <div className={styles.roadmapGrid}>

          {/* ── CARD 1 — Foundation ── */}
          <div className={styles.roadmapCard}>
            <div className={styles.roadmapPhase}>GRADE 8–10 · Foundation</div>
            <div className={styles.roadmapHead}>
              <div className={styles.tag}>BUILD THE BASE</div>
              <h3>Foundation Phase</h3>
            </div>
            <div className={styles.roadmapBody}>
              {FOUNDATION_ITEMS.map((item) => (
                <div key={item} className={styles.roadmapItem}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.roadmapCta}>
              <a
                href="/contact-us"
                className={styles.btnOutline}
              >
                START EARLY →
              </a>
            </div>
          </div>

          {/* ── CARD 2 — Execution ── */}
          <div className={styles.roadmapCard}>
            <div className={styles.roadmapPhase}>GRADE 11–12 · Execution</div>
            <div className={`${styles.roadmapHead} ${styles.roadmapHeadDark}`}>
              <div className={styles.tag}>SCORE 1500+ &amp; APPLY</div>
              <h3>Execution Phase</h3>
            </div>
            <div className={styles.roadmapBody}>
              {EXECUTION_ITEMS.map((item) => (
                <div key={item} className={styles.roadmapItem}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.roadmapCta}>
              <a href="#enroll" className={styles.btnPrimary}>
                BEGIN NOW →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}