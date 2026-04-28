import styles from "./Results.module.css";

const testimonials = [
  {
    initial: "S",
    bg: "var(--navy)",
    color: "#fff",
    text: "I scored 1510 in my SAT. EduQuest was a huge part of my journey — constant support, identifying weak spots, and a consistent benchmarking approach.",
    name: "Seher Taneja",
    score: "SAT 1510 · New Delhi",
  },
  {
    initial: "H",
    bg: "var(--red)",
    color: "#fff",
    text: "First attempt, scored 1520. EduQuest's digital SAT coaching and direction — especially Rupali ma'am — made all the difference. Highly recommended.",
    name: "Hardik",
    score: "SAT 1520 · Gurgaon",
  },
  {
    initial: "A",
    bg: "var(--gold)",
    color: "var(--navy)",
    text: "Scored 1450 on my SAT from Nigeria. EduQuest understood expectations and ensured I was thorough in every detail. Their framework is exemplary.",
    name: "Aaisha Sawlani",
    score: "SAT 1450 · Nigeria",
  },
];

const before = [
  "Random study without a diagnostic",
  "No structured error analysis",
  "Score plateau at 1200–1300",
  "Weak adaptive strategy",
  "No clarity on target universities",
  "Exam taken without profile context",
];

const after = [
  "Diagnostic-driven, targeted preparation",
  "Structured mock review and error logging",
  "Consistent 1400–1560 score range",
  "Module 2 Hard routing mastered",
  "Clear university shortlist with score goals",
  "SAT integrated into full admissions strategy",
];

const links = [
  {
    href: "https://eduquest.org.in/sat-mistakes/",
    icon: "⚠️",
    title: "7 SAT Mistakes That Kill Your Score",
    desc: "The most common errors Indian students make — and how to eliminate them before your next attempt.",
    cta: "Read Guide →",
  },
  {
    href: "https://eduquest.org.in/sat-2026-seo-cluster-eduquest-growth-engine/",
    icon: "📈",
    title: "SAT 1500+ Strategy & Study Plan",
    desc: "A proven, section-by-section 90-day prep plan for students targeting 1500 and above.",
    cta: "Read Strategy →",
  },
  {
    href: "https://eduquest.org.in/undergraduate-admission-premium/",
    icon: "🏛",
    title: "Undergraduate Admissions (Premium)",
    desc: "Full-service Ivy League and Top 50 admissions consulting. Your SAT is the starting point — not the end.",
    cta: "Explore Service →",
  },
  {
    href: "https://eduquest.org.in/how-to-prepare-sat-exam-in-india-edu-quest/",
    icon: "📚",
    title: "How to Prepare for SAT in India (2026 Guide)",
    desc: "Complete guide for Indian students: timeline, resources, adaptive strategy, and score targets.",
    cta: "Read Guide →",
  },
];

export default function Results() {
  return (
    <>
      {/* Authority + Testimonials */}
      <section className={styles.authority} id="results">
        <div className="container">
          <div className="section-head reveal">
            <div className="label">Trusted Authority Block</div>
            <h2>
              Trusted by Students Scoring<br /><em>1400–1560+</em>
            </h2>
            <p>Real proof. Real students. Real outcomes — from India, Nigeria, UAE, and beyond.</p>
          </div>

          <div className={`${styles.authGrid} reveal`}>
            {[
              { badge: "Outcomes", num: "2,299+", label: "Student Profiles Designed" },
              { badge: "SAT / ACT", num: "1,839+", label: "Undergraduate Admits" },
              { badge: "Highest Score", num: "1540", label: "Highest SAT Score (India)" },
            ].map((a) => (
              <div key={a.badge} className={styles.authCard}>
                <div className={styles.authBadge}>{a.badge}</div>
                <div className={styles.authNum}>{a.num}</div>
                <div className={styles.authLabel}>{a.label}</div>
              </div>
            ))}
          </div>

          <div className={`${styles.testimonials} reveal`}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testiCard}>
                <div className={styles.testiStars}>★★★★★</div>
                <p className={styles.testiText}>"{t.text}"</p>
                <div className={styles.testiAuthor}>
                  <div
                    className={styles.testiAvatar}
                    style={{ background: t.bg, color: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiScore}>{t.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className={styles.beforeAfter}>
        <div className="container">
          <div className="section-head reveal">
            <div className="label">What Changes</div>
            <h2>
              What Changes When You<br /><em>Work With Us</em>
            </h2>
          </div>
          <div className={`${styles.baGrid} reveal`}>
            <div className={`${styles.baCol} ${styles.beforeCol}`}>
              <div className={styles.baColLabel}>Before EduQuest</div>
              {before.map((item) => (
                <div key={item} className={styles.baItem}>
                  <div className={styles.baDot} />
                  {item}
                </div>
              ))}
            </div>
            <div className={`${styles.baCol} ${styles.afterCol}`}>
              <div className={styles.baColLabel}>After EduQuest</div>
              {after.map((item) => (
                <div key={item} className={styles.baItem}>
                  <div className={`${styles.baDot} ${styles.baDotGreen}`} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className={styles.internalLinks}>
        <div className="container">
          <div className="section-head reveal">
            <div className="label">Related Resources</div>
            <h2>Build Your <em>Complete</em> Strategy</h2>
            <p>The SAT is one part of a larger admissions ecosystem. Explore the resources that compound your results.</p>
          </div>
          <div className={`${styles.ilGrid} reveal`}>
            {links.map((l) => (
              <a key={l.title} href={l.href} className={styles.ilCard}>
                <div className={styles.ilIcon}>{l.icon}</div>
                <div>
                  <h4>{l.title}</h4>
                  <p>{l.desc}</p>
                  <div className={styles.ilArrow}>{l.cta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
