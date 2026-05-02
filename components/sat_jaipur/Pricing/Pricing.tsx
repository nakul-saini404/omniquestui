import styles from "./Pricing.module.css";

const MODES = ["Online", "Offline", "Hybrid"];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className={styles.split}>
          {/* ── Left: Text ── */}
          <div className={styles.left}>
            <div className="label">Course</div>
            <h2 className={styles.heading}>
              SAT Coaching <em>Programmes</em> in Jaipur
            </h2>
            <p className={styles.sub}>
              Flexible formats for every student — online, offline, and hybrid.
              All courses include unlimited doubt-clearing, study materials, and
              AI-based test generation.
            </p>
           
            <a href="https://eduquest.org.in/contact-us/" className="btn-primary">
              Enquire Now →
            </a>
            <p className={styles.note}>
              For integrated multi-year programmes (Grades 8–12),{" "}
              <a href="https://eduquest.org.in/contact-us/">contact us</a> for
              customised fee structures.
            </p>
          </div>

          {/* ── Right: Blinking words ── */}
          <div className={styles.right}>
            <div className={styles.wordBox}>
              {MODES.map((word, i) => (
                <span
                  key={word}
                  className={styles.word}
                  style={{ animationDelay: `${i * 1.5}s` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}