"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RoadmapSection.module.css";

// ── Data ──────────────────────────────────────────────────────────────────────

interface Phase {
  period: string;
  title: string;
  variant: "navy" | "gold";
  items: string[];
}

interface SupportCard {
  title: string;
  description: string;
}

const phases: Phase[] = [
  {
    period: "Months 1–6",
    title: "Foundation Phase",
    variant: "navy",
    items: [
      "Profile Building kickoff — research paper topic selection",
      "Mathematics Fundamentals — Arithmetic, Algebra, Geometry",
      "Vocabulary Foundation — 30 words/week structured programme",
      "Business Awareness — Economic Times weekly analysis",
      "Aptech Certification enrollment & completion",
    ],
  },
  {
    period: "Months 7–12",
    title: "Mastery Phase",
    variant: "gold",
    items: [
      "Full-length mock test schedule — 3 per week with mentor review",
      "Verbal Refinement — RC speed & accuracy intensive",
      "Interview Preparation — personal statement & WAT training",
      "Profile finalization — research submission & internship wrap",
      "IIM application strategy & university targeting",
    ],
  },
];

const supportCards: SupportCard[] = [
  {
    title: "Bridge Classes",
    description:
      "Advanced mathematics from scratch for Commerce & Humanities students — no one left behind.",
  },
  {
    title: "Business Awareness",
    description:
      "Weekly Economic Times analysis to build current affairs depth that IIM interviews demand.",
  },
  {
    title: "Mock Test Intensive",
    description:
      "100+ mocks with detailed analytics, section-wise tracking, and mentor review sessions.",
  },
  {
    title: "Personal Mentorship",
    description:
      "Fortnightly 1:1 sessions — strategy adjustments and performance calibration.",
  },
];

const iimTags = [
  "IIM Indore", "IIM Rohtak", "IIM Ranchi",
  "IIM Bodh Gaya", "IIM Jammu", "IIFT", "JIPMAT",
];

// ── Scroll-reveal hook ────────────────────────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ── Phase card ────────────────────────────────────────────────────────────────

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.phaseCard} ${visible ? styles.phaseCardVisible : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`${styles.phaseHeader} ${styles[`phaseHeader_${phase.variant}`]}`}>
        <div className={styles.phaseLabel}>{phase.period}</div>
        <h3 className={styles.phaseTitle}>{phase.title}</h3>
      </div>
      <div className={styles.phaseBody}>
        <ul className={styles.phaseItems}>
          {phase.items.map((item, i) => (
            <li
              key={i}
              className={`${styles.phaseItem} ${styles[`phaseItem_${phase.variant}`]} ${
                visible ? styles.phaseItemVisible : ""
              }`}
              style={{ transitionDelay: `${index * 120 + i * 60}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Support card ──────────────────────────────────────────────────────────────

function SupportCardEl({ card, index }: { card: SupportCard; index: number }) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`${styles.supportCard} ${visible ? styles.supportCardVisible : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h4 className={styles.supportTitle}>{card.title}</h4>
      <p className={styles.supportDesc}>{card.description}</p>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function RoadmapSection() {
  const { ref: headRef, visible: headVisible } = useReveal(0.2);
  const { ref: tagsRef, visible: tagsVisible } = useReveal(0.2);

  return (
    <section className={styles.roadmap} id="roadmap">
      <div className={styles.container}>

        {/* Header */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.sectionHeadVisible : ""}`}
        >
          <div className={styles.sectionLabel}>Your Roadmap</div>
          <h2 className={styles.sectionHeading}>The 12-Month Success Strategy</h2>
          <p className={styles.sectionSub}>
            A structured, phase-wise approach to maximise your IPMAT success.
            Every month planned. Every milestone tracked.
          </p>
        </div>

        {/* Phase cards */}
        <div className={styles.phasesGrid}>
          {phases.map((phase, i) => (
            <PhaseCard key={phase.title} phase={phase} index={i} />
          ))}
        </div>

        {/* Support grid */}
        <div className={styles.supportGrid}>
          {supportCards.map((card, i) => (
            <SupportCardEl key={card.title} card={card} index={i} />
          ))}
        </div>

        {/* IIM tags */}
        <div
          ref={tagsRef}
          className={`${styles.tagsWrap} ${tagsVisible ? styles.tagsWrapVisible : ""}`}
        >
          <div className={styles.sectionLabel}>Target Institutions</div>
          <div className={styles.iimTags}>
            {iimTags.map((tag, i) => (
              <span
                key={tag}
                className={`${styles.iimTag} ${tagsVisible ? styles.iimTagVisible : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}