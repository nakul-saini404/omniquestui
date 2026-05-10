"use client";

import { useEffect, useRef } from "react";
import styles from "./ScoreBreakdown.module.css";

/* ── Types ── */
interface ScoreCardData {
  variant: "teal" | "gold" | "navy";
  iconClass: "iconNavy" | "iconGold" | "iconRed";
  icon: string;
  name: string;
  rangeClass: "rangeTeal" | "rangeGold" | "rangeNavy";
  range: string;
  desc: string;
  dotClass: "dotTeal" | "dotGold" | "dotNavy";
  topics: string[];
  delay: string;
}

/* ── Static data ── */
const scoreCards: ScoreCardData[] = [
  {
    variant: "teal",
    iconClass: "iconNavy",
    icon: "⚖️",
    name: "Logical Reasoning",
    rangeClass: "rangeTeal",
    range: "~50%",
    desc: "Two scored LR sections (one unscored). Each contains 24–26 questions. Mastering argument structure here delivers the biggest score jump.",
    dotClass: "dotTeal",
    topics: [
      "Assumption & Strengthen",
      "Flaw & Weaken",
      "Inference & Must Be True",
      "Method of Reasoning",
    ],
    delay: "0.05s",
  },
  {
    variant: "gold",
    iconClass: "iconGold",
    icon: "🧩",
    name: "Analytical Reasoning",
    rangeClass: "rangeGold",
    range: "~25%",
    desc: "One logic games section with 4 games (23–24 questions). The most mechanical section — near-perfect scores are achievable with the right system.",
    dotClass: "dotGold",
    topics: [
      "Ordering (Linear) Games",
      "Grouping Games",
      "Combination Games",
      "Pattern & Mapping Games",
    ],
    delay: "0.1s",
  },
  {
    variant: "navy",
    iconClass: "iconRed",
    icon: "📖",
    name: "Reading Comprehension",
    rangeClass: "rangeNavy",
    range: "~25%",
    desc: "One RC section with 4 passages (27 questions). Includes one comparative reading pair. Speed and precision across dense text is key.",
    dotClass: "dotNavy",
    topics: [
      "Main Point & Author's Purpose",
      "Inference from Passage",
      "Comparative Reading",
      "Structural & Tone Questions",
    ],
    delay: "0.15s",
  },
];

/* ── Component ── */
export default function ScoreBreakdown() {
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
    <section className={styles.scores} id="scores" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`}>
          <div className={`${styles.secBadge} ${styles.secBadgeGold}`}>
            Score Breakdown
          </div>
          <h2 className={styles.secTitle}>
            LSAT Score Structure <em>Explained</em>
          </h2>
          <div className={`${styles.divider} ${styles.dividerCenter}`} />
          <p className={styles.secSub}>
            Understanding how the LSAT is scored helps you allocate study time
            strategically and target maximum point gains per section.
          </p>
        </div>

        {/* ── Score cards ── */}
        <div className={styles.scoresGrid}>
          {scoreCards.map((card) => (
            <div
              key={card.name}
              className={`${styles.scoreCard} ${styles[card.variant]} ${styles.reveal}`}
              style={{ transitionDelay: card.delay }}
            >
              {/* Icon */}
              <div
                className={`${styles.scoreCardIcon} ${styles[card.iconClass]}`}
              >
                {card.icon}
              </div>

              {/* Name */}
              <div className={styles.scoreCardName}>{card.name}</div>

              {/* Range */}
              <div
                className={`${styles.scoreCardRange} ${styles[card.rangeClass]}`}
              >
                {card.range}
              </div>

              {/* Description */}
              <div className={styles.scoreCardDesc}>{card.desc}</div>

              {/* Topics */}
              <div className={styles.scoreTopics}>
                {card.topics.map((topic) => (
                  <div key={topic} className={styles.scoreTopic}>
                    <span
                      className={`${styles.scoreDot} ${styles[card.dotClass]}`}
                    />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── LSAT callout ── */}
        <div
          className={`${styles.lsatCallout} ${styles.reveal}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className={styles.lsatCalloutIcon}>🏛️</div>
          <div>
            <div className={styles.lsatCalloutTitle}>
              LSAT Scoring Scale — 120 to 180
            </div>
            <p className={styles.lsatCalloutBody}>
              The LSAT is scored on a scale of{" "}
              <strong>120–180</strong>. The national median sits around{" "}
              <strong>151</strong>, while top-14 law schools (T14) typically
              require <strong>170+</strong>. EduQuest&apos;s coaching is
              precision-engineered to push your raw score from the 150s into the{" "}
              <strong>170+ elite tier</strong> — placing you in the 97th–99th
              percentile.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}