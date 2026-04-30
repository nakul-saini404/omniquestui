// components/sat_city/extras/OnlineAdvantageSection.tsx
"use client";
import styles from "./extras.module.css";

export default function OnlineAdvantageSection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className="section-head reveal">
          <p className="label">Why Online Works</p>
          <h2>The <em>Online Advantage</em> at EduQuest</h2>
          <p>Our online SAT coaching is identical in quality to in-person sessions.</p>
        </div>
        <div className={styles.advantageGrid}>
          {[
            { icon: "🎯", title: "Same Faculty", desc: "India's senior SAT faculty — no outsourced tutors." },
            { icon: "📊", title: "Same Diagnostics", desc: "Full DTF diagnostic and Bluebook-identical mocks online." },
            { icon: "🕐", title: "Flexible Timing", desc: "Sessions scheduled around your school, board exam, and time zone." },
            { icon: "📹", title: "Session Recordings", desc: "Every class recorded for revision and re-watching." },
            { icon: "💬", title: "Doubt Resolution", desc: "WhatsApp doubt support between sessions with 24hr response." },
            { icon: "📈", title: "Score Tracking", desc: "Live mock performance dashboard updated after every test." },
          ].map((item) => (
            <div key={item.title} className={styles.advantageCard}>
              <span className={styles.advantageIcon}>{item.icon}</span>
              <h3 className={styles.advantageTitle}>{item.title}</h3>
              <p className={styles.advantageDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}