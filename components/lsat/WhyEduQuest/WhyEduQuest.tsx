"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyEduQuest.module.css";

/* ── Types ── */
interface WhyCard {
  num: string;
  icon: string;
  title: string;
  body: string;
  delay: string;
}

interface StatItem {
  value: string;
  label: string;
}

/* ── Static data ── */
const whyCards: WhyCard[] = [
  {
    num: "01",
    icon: "🎯",
    title: "Adaptive Diagnostic Engine",
    body: "A 200-question diagnostic maps every weakness before you study a single concept. Your plan is built around your gaps — not a template.",
    delay: "0.05s",
  },
  {
    num: "02",
    icon: "👨‍⚖️",
    title: "Expert 170+ Mentors",
    body: "Every EduQuest instructor scored 170+ on an official LSAT administration. No exceptions. Their experience shapes every lesson.",
    delay: "0.1s",
  },
  {
    num: "03",
    icon: "📊",
    title: "Data-Driven Practice",
    body: "Our platform tracks accuracy by question type, time per question, and error patterns — serving targeted drills to eliminate weaknesses fast.",
    delay: "0.15s",
  },
  {
    num: "04",
    icon: "🔁",
    title: "Spaced Repetition Review",
    body: "Our review system re-introduces concepts at scientifically optimal intervals, locking in long-term retention without wasted revision time.",
    delay: "0.2s",
  },
  {
    num: "05",
    icon: "🕐",
    title: "Flexible Scheduling",
    body: "Study at your pace with live sessions, recorded lectures, and on-demand practice. Designed for working professionals and full-time students alike.",
    delay: "0.25s",
  },
  {
    num: "06",
    icon: "📝",
    title: "Full Official PT Library",
    body: "Access every officially released LSAT PrepTest (PT1–PT93+) with video explanations and timed simulation mode matching real test conditions.",
    delay: "0.3s",
  },
];

const stats: StatItem[] = [
  { value: "+14.2", label: "Avg. Score Gain" },
  { value: "4,200+", label: "Students Enrolled" },
  { value: "97%", label: "Improvement Rate" },
  { value: "93+", label: "Official PTs Available" },
];

/* ── Component ── */
export default function WhyEduQuest() {
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
    <section className={styles.why} id="why" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`}>
          <div className={`${styles.secBadge} ${styles.secBadgeGold}`}>
            Why EduQuest
          </div>
          <h2 className={styles.secTitle}>
            Why Students Choose <em>EduQuest</em>
          </h2>
          <div className={`${styles.divider} ${styles.dividerCenter}`} />
          <p className={styles.secSub}>
            We don&apos;t teach the LSAT. We engineer the highest possible score
            through a ruthlessly efficient, evidence-backed methodology.
          </p>
        </div>

        {/* ── Why cards grid ── */}
        <div className={styles.whyGrid}>
          {whyCards.map((card) => (
            <div
              key={card.num}
              className={`${styles.whyCard} ${styles.reveal}`}
              style={{ transitionDelay: card.delay }}
            >
              <div className={styles.whyCardNum}>{card.num}</div>
              <div className={styles.whyCardIcon}>{card.icon}</div>
              <div className={styles.whyCardTitle}>{card.title}</div>
              <div className={styles.whyCardBody}>{card.body}</div>
            </div>
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div
          className={`${styles.whyStats} ${styles.reveal}`}
          style={{ transitionDelay: "0.35s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.whyStat}>
              <div className={styles.whyStatNum}>{stat.value}</div>
              <div className={styles.whyStatLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}