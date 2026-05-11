"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SpikeSection.module.css";

// ── Data ──────────────────────────────────────────────────────────────────────

interface SpikeCard {
  num: string;
  title: string;
  description: string;
}

interface SpikeStat {
  target: number;
  suffix: string;
  label: string;
}

const cards: SpikeCard[] = [
  {
    num: "01",
    title: "Academic Publication",
    description:
      "2,000-word research papers published in peer-reviewed journals on modern economics or management — a rare credential that sets you apart.",
  },
  {
    num: "02",
    title: "Professional Certifications",
    description:
      "Data Science for Business & AI for Managers certifications through our Aptech partnership — industry-recognised credentials that strengthen your profile.",
  },
  {
    num: "03",
    title: "High-Impact Internships",
    description:
      "Facilitated placements in Marketing, Finance, or Operations through the EduQuest network — real-world experience that becomes interview gold.",
  },
  {
    num: "04",
    title: "Community Leadership",
    description:
      "Move beyond volunteering to founding — lead social startups or NGO initiatives that demonstrate initiative, leadership, and real-world impact.",
  },
];

const stats: SpikeStat[] = [
  { target: 50,  suffix: "+", label: "Research Papers" },
  { target: 200, suffix: "+", label: "Certifications" },
  { target: 100, suffix: "+", label: "Internships" },
  { target: 30,  suffix: "+", label: "Social Initiatives" },
];

// ── easeOutExpo counter ───────────────────────────────────────────────────────

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(
  target: number,
  duration = 1600,
  started = false
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(easeOutExpo(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return value;
}

// ── Animated stat cell ────────────────────────────────────────────────────────

function AnimatedStat({
  stat,
  started,
  delay,
}: {
  stat: SpikeStat;
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(stat.target, 1600, started);

  return (
    <div
      className={`${styles.spikeStat} ${started ? styles.spikeStatVisible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={styles.spikeStatNum}>
        {count}
        {stat.suffix}
      </span>
      <span className={styles.spikeStatLabel}>{stat.label}</span>
    </div>
  );
}

// ── Animated card ─────────────────────────────────────────────────────────────

function AnimatedCard({
  card,
  index,
}: {
  card: SpikeCard;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.spikeCard} ${visible ? styles.spikeCardVisible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Large ghost number */}
      <div className={styles.spikeCardNum}>{card.num}</div>
      <h3 className={styles.spikeCardTitle}>{card.title}</h3>
      <p className={styles.spikeCardDesc}>{card.description}</p>
      {/* Gold border-bottom reveal on hover */}
      <div className={styles.spikeCardGlow} aria-hidden="true" />
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function SpikeSection() {
  // Header reveal
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setHeadVisible(true); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Stats strip reveal + counter start
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStatsStarted(true); obs.disconnect(); }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.spike} id="spike">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.sectionHeadVisible : ""}`}
        >
          <div className={styles.sectionLabel}>The EduQuest Spike</div>
          <h2 className={styles.sectionHeading}>
            Beyond Test Prep:
            <br />
            Build Your Leadership Profile
          </h2>
          <p className={styles.sectionSub}>
            Standard coaching stops at the test. At EduQuest, we begin building
            your career from Day&nbsp;1 with real-world credentials that IIM
            interview panels actually notice.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className={styles.spikeGrid}>
          {cards.map((card, i) => (
            <AnimatedCard key={card.num} card={card} index={i} />
          ))}
        </div>

        {/* ── Stats strip ── */}
        <div ref={statsRef} className={styles.spikeStats}>
          {stats.map((stat, i) => (
            <AnimatedStat
              key={stat.label}
              stat={stat}
              started={statsStarted}
              delay={i * 120}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className={`${styles.ctaWrap} ${headVisible ? styles.ctaWrapVisible : ""}`}
        >
          <a href="#contact" className={styles.btnGold}>
            Explore Profile Building →
          </a>
        </div>

      </div>
    </section>
  );
}