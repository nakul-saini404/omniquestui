import React, { useEffect, useRef } from "react";
import styles from "./WhatChanges.module.css";

const beforeItems = [
  "Random study without a diagnostic",
  "No structured error analysis",
  "Score plateau at 1200–1300",
  "Weak adaptive strategy",
  "No clarity on target universities",
  "Exam taken without profile context",
];

const afterItems = [
  "Diagnostic-driven, targeted preparation",
  "Structured mock review and error logging",
  "Consistent 1400–1560 score range",
  "Module 2 Hard routing mastered",
  "Clear university shortlist with score goals",
  "SAT integrated into full admissions strategy",
];

const WhatChanges: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.sectionLabel}>What Changes</div>
          <h2 className={styles.sectionTitle}>
            What Changes When You{" "}
            <em className={styles.em}>Work With Us</em>
          </h2>
        </div>

        {/* ── Before / After grid ── */}
        <div className={styles.baGrid}>

          {/* Before card */}
          <div className={`${styles.card} ${styles.cardBefore} ${styles.reveal}`}>
            <h3 className={`${styles.cardHeading} ${styles.headingBefore}`}>
              <span className={styles.iconNo}>✗</span> Before EduQuest
            </h3>
            <ul className={styles.list}>
              {beforeItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.iconNo}`}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After card */}
          <div className={`${styles.card} ${styles.cardAfter} ${styles.reveal}`}
            style={{ transitionDelay: "0.12s" }}
          >
            <h3 className={`${styles.cardHeading} ${styles.headingAfter}`}>
              <span className={styles.iconYes}>✓</span> After EduQuest
            </h3>
            <ul className={styles.list}>
              {afterItems.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={`${styles.icon} ${styles.iconYes}`}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatChanges;