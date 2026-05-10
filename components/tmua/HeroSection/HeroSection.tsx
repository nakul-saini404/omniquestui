"use client";

import styles from "./HeroSection.module.css";

const heroStats = [
  { label: "October Sitting", value: "12–16 Oct 2026", accent: "gold" },
  { label: "January Sitting", value: "4–8 Jan 2027", accent: "gold" },
  { label: "Score Range", value: "1.0 – 9.0", accent: "none" },
  { label: "Papers", value: "2 × 75 min", accent: "none" },
  { label: "Calculator", value: "Not Allowed", accent: "red" },
  { label: "Competitive Score", value: "6.5 — 7.0+", accent: "none" },
  { label: "Oct Booking Opens", value: "20 July 2026", accent: "none" },
  { label: "Oct Booking Closes", value: "28 Sep 2026", accent: "red" },
];

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>

        {/* Left Column */}
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.heroBadge}>Cambridge Assessment</span>
            <div className={styles.heroDivider} />
            <span className={styles.heroLabel}>UK University Admission Test</span>
          </div>

          <h1 className={styles.heroTitle}>
            TMUA <em className={styles.heroTitleEm}>Mathematics</em>
            <br />
            Admission Test
          </h1>

          <p className={styles.heroSubtitle}>
            Test of Mathematics for University Admission
          </p>

          <p className={styles.heroDesc}>
            Excel in Global University Admissions with expert TMUA Coaching from
            EduQuest. Get into Cambridge, Warwick, LSE, UCL, Imperial and more
            with a competitive TMUA score that makes you stand out.
          </p>

          <div className={styles.heroActions}>
            <a
              href="/contact-us"
              className={styles.btnPrimary}
            >
              📚 Book Free Consultation
            </a>
            <a href="https://test.eduquest.org.in/tmua-score-calculator/" className={styles.btnOutline}>
              Calculate Your TMUA Score
            </a>
          </div>
        </div>

        {/* Right Column — Stats Card */}
        <div className={styles.heroCard}>
          <div className={styles.heroCardTitle}>2026–2027 At a Glance</div>

          {heroStats.map(({ label, value, accent }) => (
            <div key={label} className={styles.heroStat}>
              <span className={styles.heroStatLabel}>{label}</span>
              <span
                className={`${styles.heroStatVal} ${
                  accent === "gold"
                    ? styles.gold
                    : accent === "red"
                    ? styles.red
                    : ""
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}