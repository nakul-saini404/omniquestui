'use client';

import { useEffect, useRef } from 'react';
import styles from './StrategicRoadmap.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface TimelineItem {
  classLabel: string;
  title: string;
  items: string[];
  gold?: boolean;
  goldFirstItem?: boolean; /* first bullet gets gold colour */
}

/* ─── DATA ────────────────────────────────────────────── */
const timelineItems: TimelineItem[] = [
  {
    classLabel: 'Class 8',
    title: 'Foundation',
    items: [
      'PSAT 8/9 awareness',
      'SAT vocabulary start',
      'Math foundation',
      'Reading habits',
    ],
  },
  {
    classLabel: 'Class 9',
    title: 'PSAT 8/9',
    items: [
      'Appear for PSAT 8/9',
      'Score report analysis',
      'Algebra mastery',
      'R&W grammar rules',
    ],
  },
  {
    classLabel: 'Class 10',
    title: 'PSAT 10',
    items: [
      'PSAT 10 target: 1350+',
      'Advanced math start',
      'Mock test series',
      'NM score awareness',
    ],
  },
  {
    classLabel: 'Class 11 ⭐',
    title: 'PSAT/NMSQT',
    gold: true,
    goldFirstItem: true,
    items: [
      'Target 1460–1520',
      'October NMSQT',
      'NM Semifinalist push',
      'SAT preview mocks',
    ],
  },
  {
    classLabel: 'Class 12',
    title: 'SAT + Apply',
    items: [
      'SAT 1500+ target',
      'NM finalist follow-up',
      'University applications',
      'Scholarship essays',
    ],
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function StrategicRoadmap() {
  const headerRef   = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [headerRef.current, timelineRef.current].filter(
      Boolean
    ) as Element[];

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
    <section id="timeline" className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <div ref={headerRef} className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Strategic Roadmap</div>
          <h2 className={styles.sectionTitle}>
            Your{' '}
            <span className={styles.titleAccent}>Class-wise</span>{' '}
            PSAT Timeline
          </h2>
          <p className={styles.sectionSub}>
            EduQuest's integrated approach spans Class 8 through Class 12.
            Every year has a purpose. Every year compounds.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div ref={timelineRef} className={styles.timeline}>
          {timelineItems.map((item) => (
            <div key={item.classLabel} className={styles.tlItem}>
              {/* Dot */}
              <div
                className={[
                  styles.tlDot,
                  item.gold ? styles.tlDotGold : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              />

              {/* Class label */}
              <div
                className={[
                  styles.tlClass,
                  item.gold ? styles.tlClassGold : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.classLabel}
              </div>

              {/* Stage title */}
              <div className={styles.tlTitle}>{item.title}</div>

              {/* Bullet items */}
              <div className={styles.tlItems}>
                {item.items.map((text, idx) => (
                  <div
                    key={text}
                    className={[
                      styles.tlItemText,
                      item.goldFirstItem && idx === 0
                        ? styles.tlItemTextGold
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {text}
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