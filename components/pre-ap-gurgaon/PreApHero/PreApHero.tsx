"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./PreApHero.module.css";

/* ─── Types ────────────────────────────────────────────── */
interface Stat {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
}

/* ─── Data ─────────────────────────────────────────────── */
const STATS: Stat[] = [
  { value: 20,    prefix: "", suffix: "+",    decimals: 0, label: "Years of Excellence"    },
  { value: 10000, prefix: "", suffix: "+",    decimals: 0, label: "Students Coached"       },
  { value: 4.8,   prefix: "", suffix: " / 5", decimals: 1, label: "Avg AP Score"           },
  { value: 4.9,   prefix: "", suffix: " ★",   decimals: 1, label: "Google Rating"          },
  { value: 200,   prefix: "", suffix: "+",    decimals: 0, label: "Universities Worldwide" },
];

/* ─── useCountUp ────────────────────────────────────────── */
function useCountUp(
  target: number,
  decimals: number,
  started: boolean,
  duration = 1800
) {
  const [display, setDisplay] = useState(
    decimals > 0 ? (0).toFixed(decimals) : "0"
  );
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;

    /*
     * `alive` is the Strict-Mode fix.
     * React 18 + Next.js 14 dev mode mounts → unmounts → remounts every
     * component. Without this flag, a queued rAF tick fires after unmount
     * and calls setDisplay on a detached fiber, which makes React call
     * removeChild on a null parent → "Cannot read properties of null
     * (reading 'removeChild')".
     */
    let alive = true;
    let startTime: number | null = null;

    function tick(now: number) {
      if (!alive) return;
      if (startTime === null) startTime = now;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out

      const current = eased * target;
      setDisplay(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString()
      );

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        // snap to exact final value
        setDisplay(
          decimals > 0 ? target.toFixed(decimals) : target.toLocaleString()
        );
      }
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      alive = false; // stop any in-flight tick from touching state
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [started, target, decimals, duration]);

  return display;
}

/* ─── StatItem ──────────────────────────────────────────── */
function StatItem({
  stat,
  index,
  started,
}: {
  stat: Stat;
  index: number;
  started: boolean;
}) {
  // stagger each counter slightly so they finish at different times
  const display = useCountUp(stat.value, stat.decimals, started, 1500 + index * 150);

  return (
    <div className={styles.stat}>
      <div className={styles.statNum} aria-live="polite">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className={styles.statLbl}>{stat.label}</div>
    </div>
  );
}

/* ─── PreApHero ─────────────────────────────────────────── */
export default function PreApHero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    // Already in viewport on first render? Start right away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setStatsStarted(true);
      return;
    }

    // Otherwise wait for the element to scroll into view.
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Ambient orbs */}
      <div className={styles.orb1} aria-hidden />
      <div className={styles.orb2} aria-hidden />
      <div className={styles.orb3} aria-hidden />
      <div className={styles.orbCentre} aria-hidden />

      <div className={styles.inner}>
        {/* Pill badge */}
        <div className={styles.pill}>
          <span className={styles.pillDot} aria-hidden />
          Gurgaon's #1 Pre-AP Coaching Centre
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Build the{" "}
          <em className={styles.headingEm}>Academic Foundation</em>
          <br />
          Top Universities Demand
        </h1>

        {/* Sub-text */}
        <p className={styles.sub}>
          India's most comprehensive Pre-AP programme — personalised learning
          pathways, expert faculty, and end-to-end admissions support for
          students in Grades&nbsp;8–11.
        </p>

        {/* CTAs */}
        <div className={styles.btns}>
          <a href="#consult" className={styles.btnGold}>
            Book Free Diagnostic ↓
          </a>
          <a href="#programmes" className={styles.btnOutline}>
            Explore Programmes
          </a>
        </div>

        {/* Divider + Stats */}
        <div className={styles.divider}>
          <div className={styles.statsRow} ref={statsRef}>
            {STATS.map((stat, i) => (
              <StatItem
                key={stat.label}
                stat={stat}
                index={i}
                started={statsStarted}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}