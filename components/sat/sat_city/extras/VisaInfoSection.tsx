// components/sat_city/extras/VisaInfoSection.tsx
"use client";
import styles from "./extras.module.css";
import type { SATCityData } from "@/constants/satCities";

export default function VisaInfoSection({ data }: { data: SATCityData }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head reveal">
          <p className="label">US Admissions</p>
          <h2>From <em>{data.city}</em> to a US University</h2>
          <p>Key steps for international students applying to US universities.</p>
        </div>
        <div className={styles.stepsGrid}>
          {[
            { step: "01", title: "SAT Score", desc: "Target 1500+ on the Digital SAT to strengthen your application." },
            { step: "02", title: "University List", desc: "EduQuest helps you build a balanced list of reach, target, and safety schools." },
            { step: "03", title: "Application", desc: "Common App, essays, recommendations — guided by our admissions counsellors." },
            { step: "04", title: "F-1 Visa", desc: "Post-admit guidance on I-20, DS-160, and SEVIS fee for your F-1 student visa." },
          ].map((s) => (
            <div key={s.step} className={styles.stepCard}>
              <span className={styles.stepNum}>{s.step}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}