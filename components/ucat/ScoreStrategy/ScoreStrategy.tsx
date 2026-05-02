"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ScoreStrategy.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface ScoreTier {
  /** The primary (end) number to count up to */
  targetPrimary: number;
  /** Secondary number for range cards, e.g. 2400 in "2100–2400" */
  targetSecondary?: number;
  /** Suffix appended after the number, e.g. "+" */
  suffix?: string;
  tier: string;
  icon: string;
  variant: "elite" | "strong" | "competitive";
  universities: string[];
}

/* ── Data ───────────────────────────────────────────────────────── */
const scoreTiers: ScoreTier[] = [
  {
    targetPrimary: 2400,
    suffix: "+",
    tier: "Elite Tier",
    icon: "🏆",
    variant: "elite",
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "UCL & Imperial College London",
      "University of Edinburgh",
    ],
  },
  {
    targetPrimary: 2100,
    targetSecondary: 2400,
    tier: "Strong Range",
    icon: "⭐",
    variant: "strong",
    universities: [
      "King's College London",
      "Monash University",
      "UNSW Sydney",
      "University of Queensland",
    ],
  },
  {
    targetPrimary: 1800,
    targetSecondary: 2100,
    tier: "Competitive",
    icon: "✅",
    variant: "competitive",
    universities: [
      "University of Adelaide",
      "Western Sydney University",
      "University of Auckland",
      "University of Otago",
    ],
  },
];

/* ── Count-up hook ──────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1400, started = false): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

/* ── AnimatedRange ──────────────────────────────────────────────── */
interface AnimatedRangeProps {
  tier: ScoreTier;
  started: boolean;
}

const AnimatedRange: React.FC<AnimatedRangeProps> = ({ tier, started }) => {
  const primary = useCountUp(tier.targetPrimary, 1400, started);
  const secondary = useCountUp(tier.targetSecondary ?? 0, 1600, started);

  if (tier.targetSecondary !== undefined) {
    return (
      <>
        {primary.toLocaleString()}
        <span className={styles.rangeSep}>–</span>
        {secondary.toLocaleString()}
      </>
    );
  }

  return (
    <>
      {primary.toLocaleString()}
      {tier.suffix && (
        <span className={styles.rangeSuffix}>{tier.suffix}</span>
      )}
    </>
  );
};

/* ── ScoreCard ──────────────────────────────────────────────────── */
interface ScoreCardProps {
  tier: ScoreTier;
  delay: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ tier, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animStarted, setAnimStarted] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the card fade-in
          setTimeout(() => setVisible(true), delay);
          // Start number count-up slightly after card appears
          setTimeout(() => setAnimStarted(true), delay + 200);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`${styles.scoreBox} ${styles[tier.variant]} ${
        visible ? styles.cardVisible : ""
      }`}
    >
      <div className={styles.scoreRange}>
        <AnimatedRange tier={tier} started={animStarted} />
      </div>
      <div className={styles.scoreTier}>
        {tier.icon}&nbsp;{tier.tier}
      </div>
      <ul className={styles.scoreUnis}>
        {tier.universities.map((uni) => (
          <li key={uni}>{uni}</li>
        ))}
      </ul>
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
const ScoreStrategy: React.FC = () => {
  return (
    <section className={styles.section} id="scores">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Score Strategy</span>
          <h2 className={styles.sectionTitle}>
            Score vs University: What You Need
          </h2>
          <p className={styles.sectionSub}>
            Different universities set different cut-offs and use UCAT scores in
            different ways. This guide is based on historical data — always
            verify with official sources before applying.
          </p>
        </div>

        {/* Score Tier Grid */}
        <div className={styles.scoreVisGrid}>
          {scoreTiers.map((tier, i) => (
            <ScoreCard key={tier.variant} tier={tier} delay={i * 160} />
          ))}
        </div>

        {/* Footnote */}
        <p className={styles.scoreNote}>
          * Scores based on 2026 scale (max 2700). Always aim for Band 1 or 2
          in Situational Judgement regardless of cognitive score tier. Cut-offs
          change yearly.
        </p>
      </div>
    </section>
  );
};

export default ScoreStrategy;