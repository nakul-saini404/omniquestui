'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SatHero.module.css';

/* ─── Badge strip ───────────────────────────────────────────────────────── */
const BADGES = [
  'EST · CST · PST Slots',
  'Digital SAT 2026 Aligned',
  'PSAT / National Merit Ready',
  'US School Calendar Friendly',
];

/* ─── Stat definitions ──────────────────────────────────────────────────── */
interface Stat {
  prefix:   string;
  target:   number;
  suffix:   string;
  label:    string;
  gold:     boolean; // true = render number in --gold
}

const STATS: Stat[] = [
  { prefix: '',  target: 1560, suffix: '',  label: 'Avg Score — 2025 US Batch',  gold: true  },
  { prefix: '',  target: 97,   suffix: '%', label: 'Score Improvement Rate',      gold: false },
  { prefix: '',  target: 320,  suffix: '+', label: 'US Students Coached',         gold: false },
  { prefix: '+', target: 220,  suffix: '',  label: 'Avg Score Improvement',       gold: true  },
];

/* ─── Count-up hook ─────────────────────────────────────────────────────── */
function useCountUp(
  target: number,
  duration: number,
  triggered: boolean,
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return value;
}

/* ─── Single animated stat cell ────────────────────────────────────────── */
function StatCell({
  stat,
  triggered,
  index,
}: {
  stat: Stat;
  triggered: boolean;
  index: number;
}) {
  const val = useCountUp(stat.target, 1700, triggered);

  return (
    <div
      className={styles.statItem}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className={styles.statNum}>
        {stat.prefix && (
          <span className={stat.gold ? styles.statGold : styles.statNavy}>
            {stat.prefix}
          </span>
        )}
        <span className={stat.gold ? styles.statGold : styles.statNavy}>
          {val.toLocaleString('en-US')}
        </span>
        {stat.suffix && (
          <span className={styles.statSuffix}>{stat.suffix}</span>
        )}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────── */
export default function SatHero() {
  const statRef   = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  /* Fire count-up when stat bar scrolls into view */
  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setFired(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO  — navy background
      ══════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="SAT Coaching hero">

        {/* Layered atmosphere */}
        <div className={styles.bgGlow}  aria-hidden />
        <div className={styles.bgGrid}  aria-hidden />
        <div className={styles.bgRule}  aria-hidden />

        <div className={styles.inner}>

          {/* Eyebrow */}
          <div className={styles.badge}>
            <span aria-hidden>🇺🇸</span>
            United States · Digital SAT 2026
          </div>

          {/* Heading */}
          <h1 className={styles.h1}>
            SAT Coaching for{' '}
            <em className={styles.h1Em}>US Students</em>
            <br />
            Score 1570+
          </h1>

          {/* Sub-copy */}
          <p className={styles.sub}>
            Time-zone flexible 1-on-1 and live group sessions for US-based
            students. Fully aligned with College Board&apos;s US test schedule
            &mdash; EST · CST · PST slots available.
          </p>

          {/* CTAs */}
          <div className={styles.btns}>
            <a
              href="https://test.eduquest.org.in/sat-score-calculator/"
              className={styles.btnPrimary}
            >
              📊 Book Free Diagnostic
            </a>
            <a href="#structure" className={styles.btnGhost}>
              Explore SAT 2026 Guide
            </a>
          </div>

          {/* Badge strip */}
          <div className={styles.badgeStrip} role="list">
            {BADGES.map(b => (
              <span key={b} className={styles.hBadge} role="listitem">
                ✓ {b}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          STAT BAR  — white background
      ══════════════════════════════════════════ */}
      <div
        ref={statRef}
        className={styles.statBar}
        role="list"
        aria-label="Key programme statistics"
      >
        {STATS.map((s, i) => (
          <StatCell key={s.label} stat={s} triggered={fired} index={i} />
        ))}
      </div>
    </>
  );
}