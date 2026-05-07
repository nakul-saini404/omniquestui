"use client";

import styles from "./OurApproach.module.css";

const steps = [
  {
    num: "01",
    title: "Student Analysis",
    desc: "One-week analysis class — group or individual — followed by a warm-up mapping test to validate strengths and gaps.",
  },
  {
    num: "02",
    title: "Module Design",
    desc: "Personalised modules built around weak and gap areas. AI-powered diagnostics generate a learning path unique to you.",
  },
  {
    num: "03",
    title: "Adaptive Training",
    desc: "Section-wise coaching with one-on-one sessions on identified micro gaps. Improvement ladder tracked on each student sheet.",
  },
  {
    num: "04",
    title: "Profile + Admission",
    desc: "Psychometric test, profile assessment, career counselling, and profile building activities — full 360° support.",
  },
];

export default function OurApproach() {
  return (
    <section id="methodology" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>Our Approach</span>
        <h2 className={styles.title}>
          The EduQuest <em className={styles.em}>Adaptive Model</em>
        </h2>
        <p className={styles.sub}>
          Our "Diagnostic Test Framework" ensures continuous assessment,
          continuous improvement. We identify micro gap areas and design
          personalised modules — not one-size-fits-all coaching.
        </p>

        <div className={styles.stepsTrack}>
          <div className={styles.connector} aria-hidden="true" />
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.circleWrap}>
                <div className={styles.circle}>
                  <span className={styles.circleInner} />
                  <span className={styles.stepNum}>{step.num}</span>
                </div>
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}