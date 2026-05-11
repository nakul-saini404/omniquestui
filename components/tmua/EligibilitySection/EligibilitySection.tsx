"use client";

import { useEffect, useState } from "react";
import styles from "./EligibilitySection.module.css";

interface WhoCard {
  icon: string;
  title: string;
  body: string;
}

const WHO_CARDS: WhoCard[] = [
  {
    icon: "🧮",
    title: "Math & Science Applicants",
    body: "Students applying for Mathematics, Computer Science, Physics, Engineering, or Data Science courses at UK universities — where TMUA is often directly required.",
  },
  {
    icon: "📈",
    title: "Economics Aspirants",
    body: "Those targeting Economics, Econometrics, or Quantitative Finance at LSE, Cambridge, Warwick, and UCL benefit significantly from a strong TMUA score.",
  },
  {
    icon: "🏛️",
    title: "Top University Applicants",
    body: "Anyone targeting Cambridge, Durham, Warwick, Lancaster, Sheffield, LSE, UCL, or Imperial should seriously consider TMUA — required or not.",
  },
  {
    icon: "🌟",
    title: "Profile Differentiators",
    body: "Students who want to demonstrate advanced mathematical reasoning and academic rigor beyond school grades, distinguishing themselves from thousands of international applicants.",
  },
  {
    icon: "🎓",
    title: "IB & CBSE Students",
    body: "Indian students from IB, CBSE, or ISC backgrounds applying to the UK can use TMUA to bridge the curriculum gap and prove readiness for rigorous university-level mathematics.",
  },
  {
    icon: "💡",
    title: "Scholarship Seekers",
    body: "A high TMUA score strengthens scholarship applications and can unlock reduced conditional offers — sometimes saving significant tuition fees.",
  },
];

export default function EligibilitySection() {
  // Cards are fully visible on server (no opacity:0 in CSS).
  // After mount, we add the .animated class which triggers the CSS
  // fadeUp keyframe — safe because both server and client start identical.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="who" className={styles.who}>
      <div className={styles.container}>

        <span className={styles.tag}>Eligibility</span>
        <h2 className={styles.sectionTitle}>Who Should Take TMUA?</h2>
        <p className={styles.sectionSub}>
          TMUA is ideal for students targeting quantitative disciplines at leading
          UK institutions — but its benefits extend far beyond mandatory requirements.
        </p>

        <div className={styles.whoGrid}>
          {WHO_CARDS.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className={`${styles.whoCard} ${mounted ? styles.whoCardAnimated : ""}`}
              // CSS custom property drives the per-card stagger delay
              style={mounted ? { "--card-index": i } as React.CSSProperties : undefined}
            >
              <div className={styles.whoCardIcon}>{icon}</div>
              <h3 className={styles.whoCardTitle}>{title}</h3>
              <p className={styles.whoCardBody}>{body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}