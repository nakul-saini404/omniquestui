"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./PreparationRoadmap.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface TimelineItem {
  month: string;
  title: string;
  desc: string;
}

interface ChallengeCard {
  label: string;
  labelColor: string;
  heading: string;
  body: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const timelineItems: TimelineItem[] = [
  {
    month: "Jan – Feb 2026",
    title: "Understand & Diagnose",
    desc: "Learn the new 2026 structure. Take a diagnostic test to identify strengths & weaknesses. Choose UCAT UK or UCAT ANZ based on target country.",
  },
  {
    month: "Mar – Apr 2026",
    title: "Section-by-Section Mastery",
    desc: "Focus on one section at a time. Build foundational skills in Verbal Reasoning, Decision Making, and Quantitative Reasoning. Targeted practice with EduQuest experts.",
  },
  {
    month: "May – Jun 2026",
    title: "Mock Tests & Speed Drills",
    desc: "Simulate real exam conditions weekly. Focus on speed + accuracy under pressure. Review results with EduQuest mentors. Systematically close weak spots.",
  },
  {
    month: "Jul – Sep 2026",
    title: "Exam Window — Test Day",
    desc: "UCAT registration opens. Choose your test centre & date. Results available immediately after. Scores sent automatically to your selected universities in November 2026.",
  },
];

const challengeCards: ChallengeCard[] = [
  {
    label: "⚡ Speed vs Accuracy",
    labelColor: "#A32D2D",
    heading: "Extreme Time Pressure",
    body: "Each section has under 1 minute per question on average. Students who don't train for speed routinely run out of time — even if they know the content.",
  },
  {
    label: "🧩 Unfamiliar Question Types",
    labelColor: "#185FA5",
    heading: "No Textbook Preparation",
    body: "Unlike board exams, UCAT tests aptitude patterns you've never seen before. Exposure through mock tests is the only way to build familiarity.",
  },
  {
    label: "📈 Percentile Competition",
    labelColor: "#0F6E56",
    heading: "You Compete Globally",
    body: "Your score is ranked against all other candidates. Even a score that seems good may put you in a lower percentile if the cohort is strong.",
  },
];

/* ── Scroll-reveal hook ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── Timeline Column ────────────────────────────────────────────── */
const TimelineColumn: React.FC = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className={`${styles.col} ${inView ? styles.colVisible : ""}`}>
      <span className={styles.sectionTag}>Preparation Roadmap</span>
      <h2 className={styles.sectionTitle}>
        Your UCAT 2026<br />Preparation Timeline
      </h2>
      <p className={styles.sectionSub}>
        Ideal preparation is 3–6 months. The exam window is July–September.
        Missing deadlines can delay your study abroad plans by an entire year —
        start early.
      </p>

      <div className={styles.timelineWrap}>
        {timelineItems.map((item, i) => (
          <div
            key={item.month}
            className={`${styles.tlItem} ${inView ? styles.tlItemVisible : ""}`}
            style={{ transitionDelay: `${0.25 + i * 0.18}s` }}
          >
            {/* Dot + line drawn in CSS via ::before on .timelineWrap */}
            <div className={styles.tlDot} />
            <div className={styles.tlContent}>
              <div className={styles.tlMonth}>{item.month}</div>
              <div className={styles.tlTitle}>{item.title}</div>
              <div className={styles.tlDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Challenge Column ───────────────────────────────────────────── */
const ChallengeColumn: React.FC = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className={`${styles.col} ${inView ? styles.colVisible : ""}`} style={{ transitionDelay: "0.12s" }}>
      <span className={styles.sectionTag}>Is UCAT Difficult?</span>
      <h2 className={styles.sectionTitle}>What Makes UCAT Challenging</h2>
      <p className={styles.sectionSub} style={{ marginBottom: 28 }}>
        UCAT is not harder — it's just different. Here's what trips most
        students:
      </p>

      <div className={styles.diffGrid}>
        {challengeCards.map((card, i) => (
          <div
            key={card.heading}
            className={`${styles.diffCard} ${inView ? styles.diffCardVisible : ""}`}
            style={{ transitionDelay: `${0.3 + i * 0.15}s` }}
          >
            <div
              className={styles.dLabel}
              style={{ color: card.labelColor }}
            >
              {card.label}
            </div>
            <h4 className={styles.diffHeading}>{card.heading}</h4>
            <p className={styles.diffBody}>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
const PreparationRoadmap: React.FC = () => {
  return (
    <section className={styles.section} id="prep">
      <div className={styles.container}>
        <div className={styles.twoCol}>
          <TimelineColumn />
          <ChallengeColumn />
        </div>
      </div>
    </section>
  );
};

export default PreparationRoadmap;