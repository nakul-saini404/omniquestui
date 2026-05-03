import styles from "./Hero.module.css";

const STATS = [
  { num: "1,839+", label: "University Admits" },
  { num: "2,299+", label: "Student Profiles" },
  { num: "150–300", label: "Avg Score Jump" },
  { num: "18+", label: "Years Experience" },
];

const SCORE_BARS = [
  { label: "Highest Score",         val: "1560", width: "97.5%", green: false },
  { label: "Avg EduQuest Score",    val: "1490", width: "93%",   green: false },
  { label: "Avg Score Improvement", val: "+220", width: "55%",   green: true  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>

        {/* ── LEFT ── */}
        <div>
          <div className={styles.breadcrumb}>
            <a href="https://eduquest.org.in">Home</a> ›{" "}
            <a href="https://eduquest.org.in/sat-coaching-classes-mumbai/">
              SAT Coaching Mumbai
            </a>
          </div>

          <div className={styles.heroBadge}>India's #1 SAT Coaching · 18+ Years</div>

          <h1 className={styles.h1}>
            Score <em>1500+</em> on the Digital SAT —{" "}
            Mumbai's Most Trusted Coaching
          </h1>

          <p className={styles.heroSub}>
            EduQuest prepares Grade 10–12 students in Mumbai for the Digital SAT
            2026 with adaptive strategy, section-wise mastery, and a proven score
            improvement framework. Online · Offline · Hybrid.
          </p>

          <div className={styles.heroHighlight}>
            <strong>What is the Digital SAT 2026?</strong>
            <br />
            A fully adaptive, computer-based test by College Board. 98 questions ·
            2 hrs 14 min · Scored 400–1600. Accepted by 4,000+ universities in
            USA, UK, Canada &amp; Australia.
          </div>

          <div className={styles.heroBtns}>
            <a href="/contact-us" className={styles.btnPrimary}>
              Book Free Strategy Session
            </a>
            <a href="#pattern" className={styles.btnSecondary}>
              View SAT Pattern 2026 →
            </a>
          </div>

          <div className={styles.heroStats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.hstat}>
                <div className={styles.hstatNum}>{s.num}</div>
                <div className={styles.hstatLbl}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Estimator Card ── */}
        <div>
          <div className={styles.estimatorCard}>
            <div className={styles.estTitle}>🎯 SAT Score Estimator</div>
            <div className={styles.estSub}>Based on 2,299+ EduQuest students</div>

            {SCORE_BARS.map((b) => (
              <div key={b.label}>
                <div className={styles.scoreRow}>
                  <span className={styles.scoreLabel}>{b.label}</span>
                  <span
                    className={styles.scoreVal}
                    style={b.green ? { color: "#16a34a" } : undefined}
                  >
                    {b.val}
                  </span>
                </div>
                <div className={styles.scoreBarTrack}>
                  <div
                    className={styles.scoreBarFill}
                    style={{
                      width: b.width,
                      ...(b.green && {
                        background: "linear-gradient(90deg,#16a34a,#4ade80)",
                      }),
                    }}
                  />
                </div>
              </div>
            ))}

            <div className={styles.estTotal}>
              <div>
                <span>Reading &amp; Writing</span>
                <br />
                <strong className={styles.estTotalSub}>800</strong>
              </div>
              <div>
                <span>Mathematics</span>
                <br />
                <strong className={styles.estTotalSub}>800</strong>
              </div>
              <div>
                <span>Total SAT</span>
                <br />
                <strong className={styles.estTotalMain}>1600</strong>
              </div>
            </div>

            <div className={styles.estBadges}>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>✓ Online Available</span>
              <span className={`${styles.badge} ${styles.badgeBlue}`}>✓ Mumbai Centre</span>
              <span className={`${styles.badge} ${styles.badgeGold}`}>✓ Hybrid Mode</span>
            </div>

            <a href="/contact-us" className={styles.cardCta}>
              Request a Callback
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}