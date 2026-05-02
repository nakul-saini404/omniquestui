"use client";
// components/ucat/UCATFoundation/UCATFoundation.tsx
// "Foundation" section — What is the UCAT Exam?

import { useEffect, useRef } from "react";
import styles from "./UCATFoundation.module.css";

const CARDS = [
  {
    icon: "🧠",
    title: "Skills-Based, Not Knowledge-Based",
    body: "UCAT evaluates critical thinking, logical reasoning, decision-making and situational judgement — real skills of a future doctor. You cannot mug up answers from a textbook.",
    delay: "d1",
  },
  {
    icon: "⏱️",
    title: "Computer-Based, Time-Pressured",
    body: "Every section has a strict time limit, making speed and accuracy equally critical. Exam window is July–September every year. Results are instant after completion.",
    delay: "d2",
  },
  {
    icon: "🌍",
    title: "Two Versions: UCAT UK & UCAT ANZ",
    body: "Target the UK only? Take UCAT UK. Targeting Australia or New Zealand? Take UCAT ANZ — it offers flexibility and is accepted across all three countries.",
    delay: "d3",
  },
  {
    icon: "📊",
    title: "2026 Scoring Scale: Max 2700",
    body: "The scoring scale has been reduced to 2700 for 2026 (previously 3600). Even small improvements now significantly impact your percentile ranking.",
    delay: "d4",
  },
];

export default function UCATFoundation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer — adds .revealed class when element enters viewport
  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );
    if (!targets) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="what-ucat" ref={sectionRef}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.sectionHeader} ${styles.reveal}`} data-reveal>
          <span className={styles.sectionTag}>Foundation</span>
          <h2 className={styles.sectionTitle}>What is the UCAT Exam?</h2>
          <p className={styles.sectionSub}>
            The University Clinical Aptitude Test (UCAT) is a standardised
            aptitude test used by medical &amp; dental schools across the UK,
            Australia and New Zealand. It doesn&apos;t test academic knowledge
            — it tests <em>how you think.</em>
          </p>
        </div>

        {/* ── Card grid ── */}
        <div className={styles.whatGrid}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`${styles.whatCard} ${styles.reveal} ${styles[card.delay as keyof typeof styles]}`}
              data-reveal
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}