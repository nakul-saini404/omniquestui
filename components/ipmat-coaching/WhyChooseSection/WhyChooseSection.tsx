"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseSection.module.css";

interface Card {
  icon: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: "🎯",
    title: "360° Curriculum",
    description:
      "Mapped to the latest NTA & IIM exam patterns with comprehensive coverage of Quant, Verbal, and Logical Reasoning for maximum accuracy.",
  },
  {
    icon: "🏆",
    title: "Profile Building 2.0",
    description:
      "Research papers, professional certifications, high-impact internships, and community leadership opportunities that make you unforgettable.",
  },
  {
    icon: "💡",
    title: "Aptech Technology Partnership",
    description:
      "Industry-recognised Data Science & AI certifications to strengthen your academic profile with credentials that IIMs actively look for.",
  },
  {
    icon: "🎤",
    title: "Interview Mastery",
    description:
      "Intensive mock interview bootcamps with personalised feedback from IIM alumni mentors who have been through the exact same process.",
  },
];

function DiffCard({ card, index }: { card: Card; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.diffCard} ${visible ? styles.diffCardVisible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.diffIconWrap}>
        <span className={styles.diffIcon}>{card.icon}</span>
      </div>
      <h3 className={styles.diffCardTitle}>{card.title}</h3>
      <p className={styles.diffCardDesc}>{card.description}</p>
      <div className={styles.diffCardAccent} />
    </div>
  );
}

export default function WhyChooseSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.difference} id="difference">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.sectionHeadVisible : ""}`}
        >
          <div className={styles.sectionLabel}>Why Choose EduQuest</div>
          <h2 className={styles.sectionHeading}>The EduQuest Difference</h2>
          <p className={styles.sectionSub}>
            Standard coaching stops at the test. We build careers through our
            unique holistic approach — from Day&nbsp;1 to your IIM admit.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.diffGrid}>
          {cards.map((card, i) => (
            <DiffCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}