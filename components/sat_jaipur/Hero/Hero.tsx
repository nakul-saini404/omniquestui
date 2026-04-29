import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  city?: string;
  cityTagline?: string;
}

const STATS = [
  { num: "1995", label: "Established" },
  { num: "2,299+", label: "Student Profiles" },
  { num: "1,839+", label: "University Admits" },
  { num: "1500+", label: "Target Score" },
];

const TRUST_PILLS = [
  "✓ Digital SAT 2026",
  "✓ Adaptive Model",
  "✓ 100+ Hours Min",
  "✓ Unlimited Doubt Clearing",
];

export default function Hero({ city = "Jaipur", cityTagline = "Score 1500+" }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Stagger in on mount
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} aria-label="Hero">
      {/* Background decorative elements */}
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Badge */}
        <div className={`${styles.badge} ${visible ? styles.in0 : ""}`}>
          <span className={styles.badgeDot} />
          {`${city}'s Most Trusted SAT Coaching · Since 1995`}
        </div>

        {/* Headline */}
        <h1 className={`${styles.headline} ${visible ? styles.in1 : ""}`}>
          SAT Coaching in {city} —{" "}
          <em className={styles.headlineEm}>{cityTagline}</em>{" "}
          <br className={styles.headlineBr} />
          with EduQuest
        </h1>

        {/* Sub-copy */}
        <p className={`${styles.sub} ${visible ? styles.in2 : ""}`}>
          India's premier SAT preparation institute. Diagnostic-driven, personalized,
          and strategically designed for global university admissions. Online Live,
          Classroom, and Hybrid SAT coaching for {city} students.
        </p>

        {/* Trust pills */}
        <div className={`${styles.pills} ${visible ? styles.in2 : ""}`}>
          {TRUST_PILLS.map((pill) => (
            <span key={pill} className={styles.pill}>
              {pill}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className={`${styles.ctas} ${visible ? styles.in3 : ""}`}>
          <a href="/contact-us/" className="btn-primary">
            Book Free Diagnostic Session →
          </a>
          <a href="#courses" className="btn-outline">
            View Courses
          </a>
        </div>

        {/* Stats bar */}
        <div className={`${styles.statsBar} ${visible ? styles.in4 : ""}`}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={styles.stat}
              style={{ animationDelay: `${0.55 + i * 0.08}s` }}
            >
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}