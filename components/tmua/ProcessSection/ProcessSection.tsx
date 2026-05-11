"use client";

import { useEffect, useState } from "react";
import styles from "./ProcessSection.module.css";

/* ── Data ─────────────────────────────────────────────────── */

interface RegStep {
  num: number;
  title: string;
  body: string;
}

const REG_STEPS: RegStep[] = [
  {
    num: 1,
    title: "Find a Centre",
    body: "Locate an authorized Cambridge Assessment test centre near you, or register through your school if it is an approved centre.",
  },
  {
    num: 2,
    title: "Register",
    body: "Registration must be completed through the authorized centre. EduQuest guides students through the entire registration process.",
  },
  {
    num: 3,
    title: "Payment",
    body: "Pay applicable fees (which vary by region and test centre). Bursary support may be available for eligible students in certain countries.",
  },
  {
    num: 4,
    title: "Prepare & Appear",
    body: "Bring valid photo ID (passport, Aadhaar, or school ID) on test day. Results are typically released in late November for the October sitting.",
  },
];

const SCORING_POINTS: string[] = [
  "Scores range from 1.0 to 9.0 (9.0 = highest)",
  "Each paper scored individually — average reported",
  "Score above 6.5 is generally competitive",
  "Top universities (Cambridge) look for 7.0+",
  "Results available in late November",
  "Students choose which universities receive their scores",
];

const UNIS_REQUIRED: string[] = [
  "University of Cambridge",
  "Durham University",
  "University of Warwick",
  "Lancaster University",
  "University of Sheffield",
];

const UNIS_BENEFICIAL: string[] = [
  "LSE · UCL · University of Bath · Imperial College",
  "Southampton · King's College London · Bristol",
  "Queen Mary University of London",
];

/* ── Component ───────────────────────────────────────────── */

export default function ProcessSection() {
  // Mount guard — prevents SSR/client mismatch on animated children
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="registration" className={styles.process}>
      <div className={styles.container}>

        <span className={styles.tag}>Process</span>
        <h2 className={styles.sectionTitle}>
          Registration Process &amp; Universities Accepting TMUA
        </h2>
        <p className={styles.sectionSub}>
          Registration is done through Cambridge Admissions Testing. You cannot
          register directly online — an authorized test centre must process your
          registration.
        </p>

        {/* ── Step tracker ── */}
        <div className={styles.regSteps}>
          {/* Connector line sits behind the step circles */}
          <div className={styles.connector} aria-hidden="true" />

          {REG_STEPS.map((step) => (
            <div
              key={step.num}
              className={`${styles.regStep} ${mounted ? styles.regStepVisible : ""}`}
              style={mounted ? ({ "--step-index": step.num - 1 } as React.CSSProperties) : undefined}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>

        {/* ── Scoring + Universities cards ── */}
        <div className={styles.scoringGrid}>

          {/* Scoring system */}
          <div className={styles.scoringCard}>
            <h3 className={styles.scoringCardTitle}>Scoring System</h3>
            <ul className={styles.scoringList}>
              {SCORING_POINTS.map((point) => (
                <li key={point} className={styles.scoringItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div className={styles.scoringCard}>
            <h3 className={styles.scoringCardTitle}>
              Universities Accepting TMUA
            </h3>

            <p className={styles.uniGroupLabel}>Require or Strongly Consider:</p>
            <ul className={styles.scoringList}>
              {UNIS_REQUIRED.map((u) => (
                <li key={u} className={styles.scoringItem}>{u}</li>
              ))}
            </ul>

            <p className={`${styles.uniGroupLabel} ${styles.uniGroupLabelSpaced}`}>
              Also Beneficial For:
            </p>
            <ul className={styles.scoringList}>
              {UNIS_BENEFICIAL.map((u) => (
                <li key={u} className={styles.scoringItem}>{u}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}