import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section className={styles.timeline} id="timeline">
      <div className="container">
        <div className="section-head reveal">
          <div className="label">Grade 8–12 Roadmap</div>
          <h2>
            When Should You Start<br /><em>SAT</em> Preparation?
          </h2>
          <p>
            The earlier you start, the more room you have to improve, retake, and build a
            compelling university application alongside your SAT score.
          </p>
        </div>

        <div className={`${styles.timelineGrid} reveal`}>
          <div className={`${styles.tlCard} ${styles.foundation}`}>
            <div className={styles.tlCardPhase}>GRADE 8–10 · Foundation</div>
            <h3>Foundation Phase</h3>
            <div className={styles.tlCardGrade}>BUILD THE BASE</div>
            <div className={styles.tlItems}>
              {[
                "PSAT 8/9 and PSAT 10 preparation",
                "Math and grammar fundamentals lock-in",
                "Reading comprehension strategy",
                "AP course selection and planning",
                "Extracurricular architecture begins",
                "4-year/5-year integrated programme option",
              ].map((item) => (
                <div key={item} className={styles.tlItem}>
                  <div className={styles.tlBullet} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="/contact-us" className={styles.tlCta}>
              START EARLY →
            </a>
          </div>

          <div className={`${styles.tlCard} ${styles.execution}`}>
            <div className={styles.tlCardPhase}>GRADE 11–12 · Execution</div>
            <h3>Execution Phase</h3>
            <div className={styles.tlCardGrade}>SCORE 1500+ &amp; APPLY</div>
            <div className={styles.tlItems}>
              {[
                "SAT diagnostic + score gap analysis",
                "Targeted SAT / ACT coaching plan",
                "6+ full Bluebook adaptive mock tests",
                "Essay & narrative design system",
                "University shortlisting & positioning",
                "Application submission & interview prep",
              ].map((item) => (
                <div key={item} className={styles.tlItem}>
                  <div className={`${styles.tlBullet} ${styles.tlBulletWhite}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="/contact-us" className={styles.tlCta}>
              BEGIN NOW →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
