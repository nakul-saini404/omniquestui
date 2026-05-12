"use client";

import styles from "./WhyEduQuest.module.css";

/* ─── Data ─────────────────────────────────────────────────────────────────── */
interface Stat {
  value: string;
  valueSuffix?: string;
  heading: string;
  body: string;
}

const stats: Stat[] = [
  {
    value: "1,000",
    valueSuffix: "+",
    heading: "Students Guided",
    body: "Over a thousand students across India have used EduQuest's profile building programme to reach their dream universities.",
  },
  {
    value: "15",
    valueSuffix: "+",
    heading: "Years of Expertise",
    body: "Since 2009, EduQuest has been the benchmark for strategic admissions consulting in India, backed by real results.",
  },
  {
    value: "US · UK",
    heading: "+ Canada · Singapore",
    body: "Deep admissions expertise across four major global destinations — tailored strategy for every geography and university type.",
  },
  {
    value: "5",
    valueSuffix: "+",
    heading: "Cities Across India",
    body: "Offices in Delhi/NCR (Gurugram), Bengaluru, Mumbai, Hyderabad, and Chennai — with online support nationwide.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */
export default function WhyEduQuest() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.secLabel}>Why EduQuest</div>
          <h2 className={styles.heading}>
            Numbers that <em>speak</em>.
          </h2>
          <p className={styles.sub}>
            We don't ask you to take our word for it. Here's what 15+ years of
            doing this right looks like.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stat}>
                {stat.value}
                {stat.valueSuffix && (
                  <span className={styles.statSuffix}>{stat.valueSuffix}</span>
                )}
              </div>
              <h4 className={styles.cardHeading}>{stat.heading}</h4>
              <p className={styles.cardBody}>{stat.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}