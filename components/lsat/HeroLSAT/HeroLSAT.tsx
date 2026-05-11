'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroLSAT.module.css';

/* ─── TYPES ─────────────────────────────────────────────── */
interface StatItem {
  num: string;
  label: string;
}

interface MetricItem {
  val: string;
  label: string;
}

/* ─── DATA ───────────────────────────────────────────────── */
const stats: StatItem[] = [
  { num: '97%',   label: 'Score Improvement Rate' },
  { num: '170+',  label: 'Avg. Target Score'       },
  { num: '4,200+',label: 'Students Enrolled'       },
];

const metrics: MetricItem[] = [
  { val: '+14',  label: 'Score Gain'   },
  { val: '8wks', label: 'Duration'     },
  { val: '98%',  label: 'Accuracy'     },
  { val: '320+', label: 'Drills Done'  },
];

const bars = [
  { label: 'Logical Reasoning',    pct: 92 },
  { label: 'Analytical Reasoning', pct: 88 },
  { label: 'Reading Comprehension',pct: 95 },
];

/* ─── COMPONENT ──────────────────────────────────────────── */
export default function HeroLSAT() {
  const ulRef      = useRef<HTMLSpanElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const [barsReady, setBarsReady] = useState(false);

  /* trigger underline animation after mount */
  useEffect(() => {
    const t = setTimeout(() => {
      ulRef.current?.classList.add(styles.underlineVisible);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  /* animate score bars when card scrolls into view */
  useEffect(() => {
    if (!cardRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsReady(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.hero}>

      {/* ── Background decorations ── */}
      <div className={styles.gridLines} aria-hidden="true" />
      <div className={styles.geoGlow1}  aria-hidden="true" />
      <div className={styles.geoGlow2}  aria-hidden="true" />
      <div className={styles.ornament}  aria-hidden="true" />

      <div className={styles.inner}>

        {/* ══════════════════════════════
            LEFT — copy
        ══════════════════════════════ */}
        <div className={styles.copy}>

          {/* badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            India's Premier LSAT Coaching
          </div>

          {/* headline */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              Master the{' '}
              <em className={styles.titleEm}>LSAT.</em>
            </span>
            <span className={styles.titleLine}>Unlock Your</span>
            <span className={styles.titleLine}>
              <span
                ref={ulRef}
                className={styles.underlineWord}
              >
                Law School Dream.
              </span>
            </span>
          </h1>

          {/* sub */}
          <p className={styles.sub}>
            Precision-engineered LSAT preparation from EduQuest — combining
            expert mentorship, adaptive practice, and proven strategy to push
            your score into the 170+ tier.
          </p>

          {/* CTAs */}
          <div className={styles.actions}>
            <a href="#pricing" className={styles.btnPrimary}>
              Start Free Trial →
            </a>
            <a href="https://test.eduquest.org.in/lsat-score-calculator/" className={styles.btnOutline}>
              Calculate Your LSAT Score
            </a>
          </div>

          {/* stats strip */}
          <div className={styles.statsStrip}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}

           
          </div>
           
        </div>

        {/* ══════════════════════════════
            RIGHT — score panel
        ══════════════════════════════ */}
        <div className={styles.panel}>

          <div className={styles.panelTitle}>Score Progress Tracker</div>
          <div className={styles.panelSub}>Live dashboard preview</div>

          {/* SVG ring */}
          <div className={styles.ringWrap}>
            <div className={styles.ring}>
              <svg width="140" height="140" viewBox="0 0 140 140">
                <circle
                  cx="70" cy="70" r="56"
                  fill="none" strokeWidth="8"
                  className={styles.ringBg}
                  transform="rotate(-90 70 70)"
                />
                <circle
                  cx="70" cy="70" r="56"
                  fill="none" strokeWidth="8"
                  className={styles.ringFill}
                  strokeDasharray="351"
                  strokeDashoffset="90"
                  strokeLinecap="round"
                  transform="rotate(-90 70 70)"
                />
              </svg>
              <div className={styles.ringText}>
                <span className={styles.ringNum}>173</span>
                <span className={styles.ringCap}>Current</span>
              </div>
            </div>
          </div>
          

          {/* score bars */}
          <div ref={cardRef} className={styles.barsWrap}>
            {bars.map((b) => (
              <div key={b.label} className={styles.barRow}>
                <div className={styles.barMeta}>
                  <span className={styles.barLabel}>{b.label}</span>
                  <span className={styles.barPct}>{b.pct}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: barsReady ? `${b.pct}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* metrics grid */}
          <div className={styles.metricsGrid}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <div className={styles.metricVal}>{m.val}</div>
                <div className={styles.metricLbl}>{m.label}</div>
              </div>
            ))}
            
          </div>
          
        </div>

      </div>
    </section>
  );
}