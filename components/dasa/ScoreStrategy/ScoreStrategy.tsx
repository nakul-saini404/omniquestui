'use client';

import { useEffect, useRef } from 'react';
import styles from './ScoreStrategy.module.css';

interface StratCard {
  icon: string;
  title: string;
  description: string;
  animationDelay: string;
}

const cards: StratCard[] = [
  {
    icon: '🎯',
    title: 'Section-Specific Focus',
    description:
      'We identify whether your Math or ERW is stronger and allocate more prep time to the weaker section — maximising your super-score composite.',
    animationDelay: '0.04s',
  },
  {
    icon: '📈',
    title: 'Adaptive Practice Tests',
    description:
      'Digital SAT adaptive format practice under timed conditions, with detailed post-test analysis mirroring the actual College Board algorithm.',
    animationDelay: '0.08s',
  },
  {
    icon: '🔁',
    title: 'Multiple Attempt Planning',
    description:
      'We plan your SAT attempt calendar around DASA score deadlines, ensuring you have at least 2 attempts before the 31 May reporting deadline.',
    animationDelay: '0.12s',
  },
  {
    icon: '📚',
    title: 'High-Yield Math Modules',
    description:
      'DASA cutoffs are heavily Math-weighted. Our Math modules cover every tested concept — Algebra, Advanced Math, Geometry, and Data Analysis — in depth.',
    animationDelay: '0.16s',
  },
  {
    icon: '✍️',
    title: 'ERW Vocabulary & Reading',
    description:
      'Structured vocabulary building, passage analysis strategy, and grammar rules targeting the ERW section patterns specific to DASA-competitive scores.',
    animationDelay: '0.20s',
  },
  {
    icon: '📋',
    title: 'Score Reporting Guidance',
    description:
      'We help you send scores to IIIT Hyderabad (code 6997) and BITS Pilani correctly — errors in official score reporting can disqualify an otherwise valid application.',
    animationDelay: '0.24s',
  },
];

export default function ScoreStrategy() {
  const headRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.strategy} id="strategy" aria-labelledby="strat-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.container}>

        {/* Section Head */}
        <div
          className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>Score Strategy</div>
          <h2 id="strat-heading">
            How to Maximise Your SAT Score for DASA &amp; ISA
          </h2>
          <p>
            Super-scoring means every point from every attempt counts.
            EduQuest&apos;s approach is built around this.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.strategyGrid}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={styles.stratCard}
              style={{ animationDelay: card.animationDelay }}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <div className={styles.stratIcon}>{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}