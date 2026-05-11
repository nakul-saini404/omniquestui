import React from "react";
import styles from "./OurProcess.module.css";

const steps = [
  {
    num: "1",
    title: "Free Diagnostic",
    desc: "Full Bluebook mock. Baseline score across 19 skill clusters.",
  },
  {
    num: "2",
    title: "Personalized Roadmap",
    desc: "Custom study plan built around your target school, date, and weak areas.",
  },
  {
    num: "3",
    title: "Live Sessions",
    desc: "1-on-1 or group sessions with senior faculty. EST/CST/PST slots.",
  },
  {
    num: "4",
    title: "Mock + Feedback",
    desc: "Full adaptive mocks every 2–3 weeks. Detailed feedback on every error.",
  },
  {
    num: "5",
    title: "Score + Strategy",
    desc: "Hit your target. Integrate into your full college application narrative.",
  },
];

export default function OurProcess() {
  return (
    <section className={`${styles.sec} ${styles.secBorder}`}>

      <div className={`${styles.sectionLabel} ${styles.dk}`}>Our Process</div>
      <h2 className={styles.sectionTitle}>
        How EduQuest <em>Prepares You</em>
      </h2>
      <div className={styles.divider}></div>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.num} className={styles.step}>
            <div className={styles.stepNum}>{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}