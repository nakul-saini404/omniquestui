'use client';

import { useEffect, useRef } from 'react';
import styles from './WhatYoullLearn.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface CurriculumTopic {
  dotColor: string;
  strong: string;
  rest: string;
}

interface CurriculumSection {
  emoji: string;
  iconClass: string;
  name: string;
  weight: string;
  topics: CurriculumTopic[];
}

/* ─── DATA ────────────────────────────────────────────── */
const sections: CurriculumSection[] = [
  {
    emoji: '📖',
    iconClass: styles.currIconTeal,
    name: 'Reading & Writing',
    weight: '27 questions per module · 32 min per module',
    topics: [
      {
        dotColor: '#00C9B1',
        strong: 'Information & Ideas',
        rest: ' — Central ideas, textual evidence, cross-text connections, command of evidence (quantitative)',
      },
      {
        dotColor: '#2355C8',
        strong: 'Craft & Structure',
        rest: ' — Words in context, text structure and purpose, cross-text connections',
      },
      {
        dotColor: '#a78bfa',
        strong: 'Expression of Ideas',
        rest: ' — Rhetorical synthesis, transitions, main ideas vs. supporting details',
      },
      {
        dotColor: '#f472b6',
        strong: 'Standard English Conventions',
        rest: ' — Boundaries, form/structure/sense, subject-verb agreement, punctuation',
      },
    ],
  },
  {
    emoji: '🔢',
    iconClass: styles.currIconGold,
    name: 'Mathematics',
    weight: '22 questions per module · 35 min per module',
    topics: [
      {
        dotColor: '#D4AF37',
        strong: 'Algebra (~35%)',
        rest: ' — Linear equations, systems of equations, linear inequalities, linear functions',
      },
      {
        dotColor: '#fb923c',
        strong: 'Advanced Math (~35%)',
        rest: ' — Nonlinear equations, equivalent expressions, nonlinear functions',
      },
      {
        dotColor: '#34d399',
        strong: 'Problem Solving & Data (~15%)',
        rest: ' — Ratios, rates, percentages, statistics, probability, data interpretation',
      },
      {
        dotColor: '#5b8aff',
        strong: 'Geometry & Trig (~15%)',
        rest: ' — Area, volume, Pythagorean theorem, trigonometric ratios, circles',
      },
    ],
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function WhatYoullLearn() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const targets: Element[] = [
      headerRef.current,
      ...cardRefs.current,
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
          <div className={styles.sectionBadge}>What You'll Learn</div>
          <h2 className={styles.sectionTitle}>
            Complete{' '}
            <span className={styles.titleAccent}>Curriculum</span>
          </h2>
          <p className={styles.sectionSub}>
            Every topic, every question type — covered with depth and strategic
            priority weighting based on real PSAT data.
          </p>
        </div>

        {/* ── Curriculum cards ── */}
        <div className={styles.curriculumGrid}>
          {sections.map((sec, i) => (
            <div
              key={sec.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={styles.currSection}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Card header */}
              <div className={styles.currHead}>
                <div className={`${styles.currIcon} ${sec.iconClass}`}>
                  {sec.emoji}
                </div>
                <div>
                  <div className={styles.currName}>{sec.name}</div>
                  <div className={styles.currWeight}>{sec.weight}</div>
                </div>
              </div>

              {/* Topics */}
              <div className={styles.currTopics}>
                {sec.topics.map((topic) => (
                  <div key={topic.strong} className={styles.currTopic}>
                    <div
                      className={styles.currTopicDot}
                      style={{ background: topic.dotColor }}
                    />
                    <div className={styles.currTopicText}>
                      <strong>{topic.strong}</strong>
                      {topic.rest}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}