"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PhilosophySection.module.css";

interface BarItem {
  label: string;
  pct: number;
  desc: string;
  colorVar: string; // maps to a CSS class
}

const bars: BarItem[] = [
  {
    label: "Preparation",
    pct: 40,
    desc: "Syllabus, concepts, fundamentals",
    colorVar: "navy",
  },
  {
    label: "Strategy",
    pct: 60,
    desc: "Time management, mock analysis, test-taking",
    colorVar: "gold",
  },
  {
    label: "Profile",
    pct: 85,
    desc: "Research papers, certs, internships",
    colorVar: "red",
  },
  {
    label: "Mocks",
    pct: 75,
    desc: "100+ full-length simulated tests",
    colorVar: "white",
  },
];

// ── Animated percentage counter (easeOutExpo) ──────────────────────────────
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, duration = 1400, started = false): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    function step(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return value;
}

// ── Single bar row ─────────────────────────────────────────────────────────
function AnimatedBar({
  bar,
  started,
  delay,
}: {
  bar: BarItem;
  started: boolean;
  delay: number;
}) {
  const count = useCountUp(bar.pct, 1400, started);

  return (
    <div className={styles.barItem}>
      <div className={styles.barMeta}>
        <span className={styles.barLabel}>{bar.label}</span>
        <span className={`${styles.barPct} ${styles[`barPct_${bar.colorVar}`]}`}>
          {count}%
        </span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={`${styles.barFill} ${styles[`barFill_${bar.colorVar}`]} ${
            started ? styles.barFillAnimate : ""
          }`}
          style={
            {
              "--bar-width": `${bar.pct}%`,
              "--bar-delay": `${delay}ms`,
            } as React.CSSProperties
          }
        />
      </div>
      <div className={styles.barDesc}>{bar.desc}</div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────
export default function PhilosophySection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const [textVisible, setTextVisible] = useState(false);

  // Trigger bars + counter when right panel scrolls into view
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Slide-in for left text column
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.strategyBanner}>
      {/* Decorative circle */}
      <div className={styles.decorCircle} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.strategyInner}>
          {/* ── LEFT: Text ── */}
          <div
            ref={textRef}
            className={`${styles.strategyText} ${
              textVisible ? styles.strategyTextVisible : ""
            }`}
          >
            <div className={styles.sectionLabel}>The EduQuest Philosophy</div>
            <h2 className={styles.strategyHeading}>
              Success in IPMAT is
              <br />
              <em>40% Preparation</em>
              <br />
              and 60% Strategy
            </h2>
            <p className={styles.strategyBody}>
              Most students over-invest in content revision and under-invest in
              strategic test-taking, time management, and profile
              differentiation. At EduQuest, we give you both — and the edge to
              convert your hard work into an IIM seat.
            </p>
            <div className={styles.strategyBtns}>
              <a href="/contact-us" className={`${styles.btn} ${styles.btnGold}`}>
                Start Your Strategy →
              </a>
              <a href="#roadmap" className={`${styles.btn} ${styles.btnGhost}`}>
                View Roadmap
              </a>
            </div>
          </div>

          {/* ── RIGHT: Bars panel ── */}
          <div
            ref={panelRef}
            className={`${styles.strategyRight} ${
              started ? styles.strategyRightVisible : ""
            }`}
          >
            <div className={styles.barsTitle}>
              How we structure your 12 months
            </div>
            {bars.map((bar, i) => (
              <AnimatedBar
                key={bar.label}
                bar={bar}
                started={started}
                delay={i * 160}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}