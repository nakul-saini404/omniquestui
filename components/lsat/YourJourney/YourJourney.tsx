"use client";

import { useEffect, useRef } from "react";
import styles from "./YourJourney.module.css";

/* ── Types ── */
interface ProcessStep {
  num: string;
  title: string;
  body: string;
  active?: boolean;
  delay: string;
}

/* ── Static data ── */
const steps: ProcessStep[] = [
  {
    num: "1",
    title: "Diagnostic",
    body: "Full diagnostic test identifies your starting score, section strengths, and the highest-ROI areas to target first.",
    delay: "0.05s",
  },
  {
    num: "2",
    title: "Foundational Mastery",
    body: "Concept-by-concept instruction across all sections — with spaced practice after each module to lock in retention.",
    active: true,
    delay: "0.1s",
  },
  {
    num: "3",
    title: "Timed Drilling",
    body: "Section-level and full PT drilling builds speed, confidence, and stamina under exam-realistic conditions.",
    delay: "0.15s",
  },
  {
    num: "4",
    title: "Peak & Test Day",
    body: "Final two-week peak phase, mental prep, and a comprehensive test-day briefing so you walk in primed to perform.",
    delay: "0.2s",
  },
];

/* ── Component ── */
export default function YourJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-based reveal via IntersectionObserver */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.process} id="process" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`}>
          <div className={`${styles.secBadge} ${styles.secBadgeNavy}`}>
            Your Journey
          </div>
          <h2 className={styles.secTitle}>
            From Enrolment to <em>Elite Score</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.secSub}>
            A clear, four-phase roadmap that removes guesswork and maximises
            every hour of study.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className={styles.processSteps}>
          {steps.map((step) => (
            <div
              key={step.num}
              className={`${styles.processStep}${step.active ? " " + styles.active : ""} ${styles.reveal}`}
              style={{ transitionDelay: step.delay }}
            >
              <div className={styles.processStepNum}>{step.num}</div>
              <div className={styles.processStepTitle}>{step.title}</div>
              <div className={styles.processStepBody}>{step.body}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}