'use client';

import { useEffect, useRef } from 'react';
import styles from './ExamStructure.module.css';

const sections = [
  {
    icon: '🧬',
    iconClass: styles.iconTeal,
    head: 'Biological & Biochemical Foundations',
    body: '59 questions · 95 minutes. Covers biology, biochemistry, organic chemistry, and molecular biology at the level of living systems.',
  },
  {
    icon: '⚗️',
    iconClass: styles.iconGold,
    head: 'Chemical & Physical Foundations',
    body: '59 questions · 95 minutes. Tests general chemistry, physics, and organic chemistry — emphasising quantitative reasoning and applications.',
  },
  {
    icon: '📖',
    iconClass: styles.iconNavy,
    head: 'CARS — Critical Analysis & Reasoning',
    body: '53 questions · 90 minutes. Passage-based reasoning across humanities and social sciences. No science knowledge required — pure comprehension and inference.',
  },
  {
    icon: '🧠',
    iconClass: styles.iconRed,
    head: 'Psychological, Social & Biological Foundations',
    body: '59 questions · 95 minutes. Covers psychology, sociology, and the biological bases of behaviour — the most content-heavy and learnable section.',
  },
];

const bars = [
  { label: 'Biological Sciences', score: '132/132', width: '90%' },
  { label: 'Chemical Sciences',   score: '132/132', width: '85%' },
  { label: 'Psych & Sociology',   score: '132/132', width: '93%' },
  { label: 'CARS',                score: '132/132', width: '80%' },
];

export default function ExamStructure() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const cardRef  = useRef<HTMLDivElement>(null);
  const barFillRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ── Scroll reveal for both columns ── */
  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Bar width animation on card entering viewport ── */
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const fills = barFillRefs.current.filter(Boolean) as HTMLDivElement[];
    const targets = fills.map((f) => f.getAttribute('data-width') ?? '0%');

    // Start at 0
    fills.forEach((f) => { f.style.width = '0%'; });

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fills.forEach((f, i) => {
              setTimeout(() => { f.style.width = targets[i]; }, 120);
            });
            barObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    barObs.observe(card);
    return () => barObs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="exam-structure">
      <div className={styles.sectionInner}>
        <div className={styles.examGrid}>

          {/* ══ LEFT — Score card ══ */}
          <div className={styles.reveal} ref={leftRef}>
            <div className={styles.examVisual}>
              <div className={styles.examCardMain} ref={cardRef}>
                <div className={styles.examScoreDisplay}>528</div>
                <div className={styles.examScoreSub}>Perfect MCAT Score</div>

                {bars.map((bar, i) => (
                  <div className={styles.examBarWrap} key={bar.label}>
                    <div className={styles.examBarLabel}>
                      <span>{bar.label}</span>
                      <span>{bar.score}</span>
                    </div>
                    <div className={styles.examBarTrack}>
                      <div
                        className={styles.examBarFill}
                        data-width={bar.width}
                        style={{ width: '0%' }}
                        ref={(el) => { barFillRefs.current[i] = el; }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.examFloatBadge}>🩺 Med School Ready</div>
            </div>
          </div>

          {/* ══ RIGHT — Text content ══ */}
          <div
            className={styles.reveal}
            ref={rightRef}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className={styles.secBadge}>What is the MCAT?</div>
            <h2 className={styles.secTitle}>
              The Gateway to <em>Medical School</em>
            </h2>
            <div className={styles.divider} />

            <p className={styles.secSub}>
              The Medical College Admission Test (MCAT) is the globally
              recognised standardised exam for medical school admission. A score
              of 520+ places you in the top 10th percentile — the threshold
              demanded by elite medical institutions worldwide.
            </p>

            <ul className={styles.examList}>
              {sections.map((item) => (
                <li key={item.head} className={styles.examListItem}>
                  <div className={`${styles.examListIcon} ${item.iconClass}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className={styles.examListHead}>{item.head}</div>
                    <div className={styles.examListBody}>{item.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}