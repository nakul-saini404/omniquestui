"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyEduQuest.module.css";

/* ── Data ─────────────────────────────────────────────── */

const eqCards = [
  {
    title: "Expert PTE Trainers",
    desc: "Our instructors have trained over 10,000 students and hold deep expertise in PTE's AI scoring rubrics — not just general English teaching.",
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Mock Tests",
    desc: "14 full-length timed mock tests on a simulated PTE test engine — the same AI environment as the real exam. Know exactly how you will score before test day.",
    delay: 60,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Live Classes + Online Mentors",
    desc: "90-minute daily live sessions Monday–Friday with Saturday doubt-solving. Online mentors available asynchronously for query resolution between classes.",
    delay: 120,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "300+ Strategy Videos",
    desc: "An extensive library of vocabulary, grammar and task-specific strategy videos — available on demand so you learn at your own pace between live sessions.",
    delay: 180,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Fresh Practice Material",
    desc: "Authentic, regularly updated practice material curated by our expert trainers — not recycled question banks. 180+ practice exercises covering 800+ questions.",
    delay: 240,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Speaking & Writing Feedback",
    desc: "Personalised evaluation of your essay and spoken responses by expert mentors — not just AI auto-grades. Real human feedback on what the algorithm rewards.",
    delay: 300,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const eqStats = [
  { num: "10,000+", label: "Students trained", delay: 0 },
  { num: "14", label: "Full mock tests included", delay: 60 },
  { num: "300+", label: "Video lessons & strategies", delay: 120 },
  { num: "5 Weeks", label: "Live lecture curriculum", delay: 180 },
];

/* ── Component ─────────────────────────────────────────── */

export default function WhyEduQuest() {
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
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll(
      `.${styles.sectionHead}, .${styles.eqCard}, .${styles.eqStat}`
    );
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.whyEq} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Why EduQuest</div>
          <h2>Why Choose EduQuest for PTE?</h2>
          <p>
            We don&apos;t just teach English — we decode the PTE algorithm and
            train you to score exactly what your dream institution requires.
          </p>
        </div>

        {/* Feature Cards */}
        <div className={styles.whyEqGrid}>
          {eqCards.map(({ title, desc, icon, delay }) => (
            <div
              key={title}
              className={styles.eqCard}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.eqIcon}>{icon}</div>
              <div className={styles.eqBody}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className={styles.eqStats}>
          {eqStats.map(({ num, label, delay }) => (
            <div
              key={label}
              className={styles.eqStat}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.eqStatNum}>{num}</div>
              <div className={styles.eqStatLbl}>{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}