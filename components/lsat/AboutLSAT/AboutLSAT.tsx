'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AboutLSAT.module.css';

/* ─── TYPES ──────────────────────────────────────────────── */
interface BarItem {
  label: string;
  pct: number;
  color: string;
}

interface FeatureItem {
  icon: string;
  iconBg: string;
  title: string;
  body: string;
  tag: string;
}

interface StatItem {
  num: string;
  label: string;
}

/* ─── DATA ───────────────────────────────────────────────── */
const bars: BarItem[] = [
  { label: 'Logical Reasoning',     pct: 92, color: '#d4a843' },
  { label: 'Analytical Reasoning',  pct: 88, color: '#d4a843' },
  { label: 'Reading Comprehension', pct: 95, color: '#d4a843' },
];

const features: FeatureItem[] = [
  {
    icon: '⚖️',
    iconBg: 'rgba(11,28,61,0.07)',
    title: 'Logical Reasoning',
    body: 'Two scored LR sections (one unscored experimental). Each contains 24–26 questions testing your ability to analyse arguments, identify assumptions, and evaluate conclusions.',
    tag: '~50% of score',
  },
  {
    icon: '🧩',
    iconBg: 'rgba(212,168,67,0.1)',
    title: 'Analytical Reasoning',
    body: 'One Logic Games section with 4 games (23–24 questions). The most mechanical section — near-perfect scores are achievable with the right diagramming system.',
    tag: '~25% of score',
  },
  {
    icon: '📖',
    iconBg: 'rgba(200,75,49,0.08)',
    title: 'Reading Comprehension',
    body: 'Long, complex passages from law, humanities, and sciences — including one comparative reading pair. Speed, precision, and passage mapping are essential.',
    tag: '~25% of score',
  },
];

const quickStats: StatItem[] = [
  { num: '120–180', label: 'Score Scale'    },
  { num: '~151',    label: 'Median Score'   },
  { num: '170+',    label: 'T-14 Threshold' },
  { num: '3 hrs',   label: 'Test Duration'  },
];

/* ─── COMPONENT ──────────────────────────────────────────── */
export default function AboutLSAT() {
  const sectionRef   = useRef<HTMLElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);
  const leftRef      = useRef<HTMLDivElement>(null);
  const rightRef     = useRef<HTMLDivElement>(null);
  const featRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef     = useRef<HTMLDivElement>(null);

  const [barsReady,  setBarsReady]  = useState(false);
  const [leftVis,    setLeftVis]    = useState(false);
  const [rightVis,   setRightVis]   = useState(false);
  const [statsVis,   setStatsVis]   = useState(false);
  const [featVis,    setFeatVis]    = useState<boolean[]>([false, false, false]);

  /* generic observer helper */
  const observe = (
    el: Element | null,
    cb: () => void,
    threshold = 0.15,
  ) => {
    if (!el) return () => {};
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { cb(); obs.disconnect(); } },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  };

  useEffect(() => {
    const cleanups = [
      observe(cardRef.current,  () => setBarsReady(true), 0.3),
      observe(leftRef.current,  () => setLeftVis(true),   0.15),
      observe(rightRef.current, () => setRightVis(true),  0.15),
      observe(statsRef.current, () => setStatsVis(true),  0.2),
      ...featRefs.current.map((el, i) =>
        observe(el, () =>
          setFeatVis(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          }), 0.15,
        ),
      ),
    ];
    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      <div className={styles.inner}>

        {/* ── Quick stats ribbon ── */}
        <div
          ref={statsRef}
          className={`${styles.statsRibbon} ${statsVis ? styles.visible : ''}`}
        >
          {quickStats.map((s, i) => (
            <div
              key={s.label}
              className={styles.ribbonStat}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.ribbonNum}>{s.num}</span>
              <span className={styles.ribbonLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Main two-column grid ── */}
        <div className={styles.grid}>

          {/* ════ LEFT — visual card ════ */}
          <div
            ref={leftRef}
            className={`${styles.visualCol} ${leftVis ? styles.visible : ''}`}
          >
            {/* Score card */}
            <div ref={cardRef} className={styles.scoreCard}>

              {/* card glow */}
              <div className={styles.cardGlow} aria-hidden="true" />

              {/* top row */}
              <div className={styles.cardTopRow}>
                <div>
                  <div className={styles.scoreLabel}>Perfect Score</div>
                  <div className={styles.scoreDisplay}>180</div>
                </div>
                <div className={styles.scalePill}>120 – 180</div>
              </div>

              {/* divider */}
              <div className={styles.cardDivider} />

              {/* bars */}
              <div className={styles.barsWrap}>
                {bars.map(b => (
                  <div key={b.label} className={styles.barRow}>
                    <div className={styles.barMeta}>
                      <span className={styles.barLabel}>{b.label}</span>
                      <span className={styles.barPct}>{b.pct}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: barsReady ? `${b.pct}%` : '0%',
                          background: b.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* card footer chips */}
              <div className={styles.cardFooter}>
                <span className={styles.chip}>LSAC Administered</span>
                <span className={styles.chip}>Digital Format</span>
                <span className={styles.chip}>India + Global</span>
              </div>
            </div>

            {/* floating badge */}
            <div className={styles.floatBadge}>
              <span className={styles.floatBadgeIcon}>🏛️</span>
              <div>
                <div className={styles.floatBadgeNum}>T-14</div>
                <div className={styles.floatBadgeSub}>Law School Ready</div>
              </div>
            </div>

            {/* decorative corner ring */}
            <div className={styles.cornerRing} aria-hidden="true" />
          </div>

          {/* ════ RIGHT — copy ════ */}
          <div
            ref={rightRef}
            className={`${styles.copyCol} ${rightVis ? styles.visible : ''}`}
          >
            <div className={styles.badge}>What is the LSAT?</div>

            <h2 className={styles.heading}>
              The Gateway to{' '}
              <em className={styles.headingEm}>Elite Law Schools</em>
            </h2>

            <div className={styles.divider} />

            <p className={styles.body}>
              The <strong className={styles.strongGold}>Law School Admission Test (LSAT)</strong> is
              the globally recognised entrance exam for law schools in India and abroad. A high LSAT
              score unlocks top-tier institutions like NALSAR, NLU Delhi, Jindal Global, and leading
              international programs. It tests not what you know — but <em>how precisely you think.</em>
            </p>

            {/* feature list */}
            <div className={styles.featureList}>
              {features.map((f, i) => (
                <div
                  key={f.title}
                  ref={el => { featRefs.current[i] = el; }}
                  className={`${styles.featureItem} ${featVis[i] ? styles.featVisible : ''}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div
                    className={styles.featureIcon}
                    style={{ background: f.iconBg }}
                  >
                    {f.icon}
                  </div>
                  <div className={styles.featureBody}>
                    <div className={styles.featureRow}>
                      <span className={styles.featureTitle}>{f.title}</span>
                      <span className={styles.featureTag}>{f.tag}</span>
                    </div>
                    <p className={styles.featureText}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className={styles.ctaRow}>
              <a href="#scores" className={styles.btnPrimary}>
                See Score Breakdown →
              </a>
              <a href="#curriculum" className={styles.btnGhost}>
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}