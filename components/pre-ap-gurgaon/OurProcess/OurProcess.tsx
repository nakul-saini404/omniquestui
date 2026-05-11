"use client";

import { useEffect, useRef } from "react";
import styles from "./OurProcess.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────────────── */
function useReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const STEPS = [
  {
    num: 1,
    title: "Free Diagnostic Assessment",
    body: "A comprehensive evaluation of subject knowledge, learning style, strengths, and gaps — forming the foundation of every personalised plan.",
  },
  {
    num: 2,
    title: "Personalised Roadmap",
    body: "A detailed 3–5 year study plan covering Pre-AP, PSAT, SAT, AP exams, and university application milestones in one integrated timeline.",
  },
  {
    num: 3,
    title: "Interactive Live Coaching",
    body: "Expert-led sessions that encourage critical thinking — not rote memorisation. Small batch sizes ensure individual attention at every stage.",
  },
  {
    num: 4,
    title: "Continuous Progress Monitoring",
    body: "Regular mock tests, performance analytics, and adaptive plan adjustments. Parents receive transparent fortnightly progress reports.",
  },
  {
    num: 5,
    title: "Holistic Profile Building",
    body: "Extracurricular guidance, summer programme applications, essay coaching, and complete university shortlisting — not just exam prep.",
  },
];

const DURATIONS = [
  { time: "6–8 months",   label: "AP Readiness Sprint — Grade 11–12" },
  { time: "12–18 months", label: "Accelerated Pre-AP Track — Grade 10–11" },
  { time: "2–3 years",    label: "Long-Horizon Programme — Grade 9–10" },
  { time: "4–5 years",    label: "Early Foundation Programme — Grade 8–9" },
];

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function OurProcess() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionWhite}`}
      id="process"
    >
      <div className={`${styles.inner} ${styles.twoCol}`}>

        {/* ── LEFT — Steps ── */}
        <div className={styles.reveal}>
          <span className={styles.sTag}>Our Process</span>
          <span className={styles.goldLine} />
          <h2 className={styles.sHead}>How We Work</h2>
          <p className={styles.sSub}>
            A proven 5-step process that has guided 10,000+ students to
            academic excellence and global university admissions.
          </p>

          <div className={styles.steps}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — Duration block + Modes ── */}
        <div className={styles.reveal}>
          {/* Duration guide */}
          <div className={styles.durationBlock}>
            <h3 className={styles.durationTitle}>Programme Duration Guide</h3>

            {DURATIONS.map((dur) => (
              <div key={dur.time} className={styles.durItem}>
                <div className={styles.durTime}>{dur.time}</div>
                <div className={styles.durLbl}>{dur.label}</div>
              </div>
            ))}

            {/* Score badge */}
            <div className={styles.scoreBadge}>
              <div className={styles.scLbl}>EduQuest Average AP Score</div>
              <div className={styles.scNum}>4.8 / 5</div>
            </div>
          </div>

          {/* Subjects by mode */}
          <div className={styles.modeCard}>
            <h4 className={styles.modeCardTitle}>Subjects available by mode</h4>
            <div className={styles.modeGrid}>
              <div className={styles.modeCol}>
                <div className={styles.modeColTitle}>Online</div>
                <div className={styles.modeColBody}>
                  All 12 subjects
                  <br />
                  EST / IST / GST slots
                  <br />
                  Weekend intensives
                </div>
              </div>
              <div className={styles.modeCol}>
                <div className={styles.modeColTitle}>Offline (Gurgaon)</div>
                <div className={styles.modeColBody}>
                  All 12 subjects
                  <br />
                  DLF Phase IV
                  <br />
                  South City 2
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}