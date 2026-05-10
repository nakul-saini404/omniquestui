'use client';

import { useEffect, useRef } from 'react';
import styles from './ScoreBreakdown.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface ScoreCard {
  emoji: string;
  iconClass: string;
  name: string;
  range: string;
  rangeClass: string;
  desc: string;
  dotClass: string;
  topics: string[];
}

/* ─── DATA ────────────────────────────────────────────── */
const scoreCards: ScoreCard[] = [
  {
    emoji: '📖',
    iconClass: styles.scoreIconTeal,
    name: 'Reading & Writing',
    range: '160–760',
    rangeClass: styles.rangeTeal,
    desc: 'Two Reading & Writing modules. Questions drawn from authentic literary, historical, and scientific texts.',
    dotClass: styles.dotTeal,
    topics: [
      'Information & Ideas',
      'Craft & Structure',
      'Expression of Ideas',
      'Standard English Conventions',
    ],
  },
  {
    emoji: '🔢',
    iconClass: styles.scoreIconGold,
    name: 'Mathematics',
    range: '160–760',
    rangeClass: styles.rangeGold,
    desc: 'Two Math modules. Calculator permitted throughout. Tests applied math in real-world contexts.',
    dotClass: styles.dotGold,
    topics: [
      'Algebra',
      'Advanced Math',
      'Problem Solving & Data Analysis',
      'Geometry & Trigonometry',
    ],
  },
  {
    emoji: '🎯',
    iconClass: styles.scoreIconPurple,
    name: 'Total Score',
    range: '320–1520',
    rangeClass: styles.rangePurple,
    desc: 'Combined score of both sections. Format is adaptive — Module 2 difficulty depends on Module 1 performance.',
    dotClass: styles.dotPurple,
    topics: [
      'Adaptive Digital Format (Bluebook)',
      'October Administration (Primary)',
      'School / test center based',
      'National Percentile + Selection Index',
    ],
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function ScoreBreakdown() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nmsqtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets: Element[] = [
      headerRef.current,
      ...cardRefs.current,
      nmsqtRef.current,
    ].filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Score Breakdown</div>
          <h2 className={styles.sectionTitle}>
            PSAT Score Structure{' '}
            <span className={styles.titleAccent}>Explained</span>
          </h2>
          <p className={styles.sectionSub}>
            The digital PSAT has two sections. Understanding how each is weighted
            helps you target the right areas for maximum score improvement.
          </p>
        </div>

        {/* ── Three score cards ── */}
        <div className={styles.scoreGrid}>
          {scoreCards.map((card, i) => (
            <div
              key={card.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={styles.scoreCard}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${styles.scoreIcon} ${card.iconClass}`}>
                {card.emoji}
              </div>

              <div className={styles.scoreCardName}>{card.name}</div>

              <div className={`${styles.scoreCardRange} ${card.rangeClass}`}>
                {card.range}
              </div>

              <div className={styles.scoreCardDesc}>{card.desc}</div>

              <div className={styles.scoreTopics}>
                {card.topics.map((topic) => (
                  <div key={topic} className={styles.scoreTopic}>
                    <span className={`${styles.topicDot} ${card.dotClass}`} />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── NMSQT callout box ── */}
        <div ref={nmsqtRef} className={styles.nmsqtBox}>
          <div className={styles.nmsqtIcon}>🏅</div>
          <div>
            <h3 className={styles.nmsqtTitle}>
              National Merit Scholarship — Selection Index
            </h3>
            <p className={styles.nmsqtBody}>
              For PSAT/NMSQT, your <strong>Selection Index</strong> = (Reading &amp;
              Writing score + Math score) × 2 × a scaling factor. Semifinalist
              cutoffs in most US states range from{' '}
              <strong className={styles.nmsqtHighlight}>207–221</strong>.
              EduQuest's targeted coaching focuses on pushing your Selection Index
              above the state threshold, maximising your National Merit recognition
              chances.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}