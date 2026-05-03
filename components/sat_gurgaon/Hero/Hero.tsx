import styles from "./Hero.module.css";

const stats = [
  { num: "97%",  label: "Score Improvement Rate" },
  { num: "1580+", label: "Top Student Scores" },
  { num: "24+",  label: "Years in Gurgaon NCR" },
];

export default function Hero() {
  return (
    <div className={styles.hero}>

      {/* Badge */}
      <div className={styles.badge}>⭐ SAT Coaching · Gurgaon NCR</div>

      {/* Heading */}
      <h1 className={styles.h1}>
        SAT Coaching in Gurgaon — Built for{" "}
        <em>Top University</em> Admissions
      </h1>

      {/* Subheading */}
      <p className={styles.sub}>
        At EduQuest, SAT preparation is not just about improving scores. We
        strategically position your academic performance as part of a high-impact
        global university application. Online &amp; offline SAT coaching in
        Gurgaon since 1995.
      </p>

      {/* Note */}
      <p className={styles.note}>
        → Designed for students targeting top global universities
      </p>

      {/* Why block */}
      <p className={styles.why}>
        <strong>Why Gurgaon Students Choose EduQuest</strong>
        <br />
        With flexible online and offline Digital SAT coaching in Gurgaon, a
        Diagnostic Test Framework, 100+ minimum coaching hours, and unlimited
        doubt-clearing sessions — we prepare students for the score and the
        admission.
      </p>

      {/* CTAs */}
      <div className={styles.ctas}>
        <a
          href="/contact-us"
          className="btn-primary"
        >
          📊 Book Free SAT Diagnostic
        </a>
        <a href="#system" className="btn-outline">
          See How Our System Works →
        </a>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}