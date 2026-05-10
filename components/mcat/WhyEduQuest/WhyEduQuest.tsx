'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyEduQuest.module.css';

const whyCards = [
  {
    num: '01',
    icon: '🎯',
    title: 'Adaptive Diagnostic Engine',
    body: 'A 240-question diagnostic maps every knowledge gap before you study a single concept. Your personalised plan targets maximum point gains from day one.',
    delay: '0.05s',
  },
  {
    num: '02',
    icon: '🩺',
    title: 'Expert 520+ Mentors',
    body: 'Every EduQuest MCAT instructor scored 520+ on an official administration. No exceptions. Their precision shapes every session and explanation.',
    delay: '0.10s',
  },
  {
    num: '03',
    icon: '📊',
    title: 'Data-Driven Science Practice',
    body: 'Our platform tracks accuracy by content category, passage type, and time-on-question — serving targeted drills to close your weakest areas fast.',
    delay: '0.15s',
  },
  {
    num: '04',
    icon: '🔁',
    title: 'Spaced Repetition for Science',
    body: 'Our review algorithm re-introduces high-yield facts at scientifically optimal intervals — locking in thousands of content points without wasted repetition.',
    delay: '0.20s',
  },
  {
    num: '05',
    icon: '🕐',
    title: 'Flexible for Working Students',
    body: 'All sessions recorded on demand, live office hours across time zones. Designed for pre-med students carrying a full course load or clinical hours.',
    delay: '0.25s',
  },
  {
    num: '06',
    icon: '📝',
    title: 'Full AAMC Material Library',
    body: 'Access every official AAMC full-length, Section Bank, and Question Packs with expert video walkthroughs and timed simulation mode for authentic test conditions.',
    delay: '0.30s',
  },
];

const stats = [
  { num: '+12.4', label: 'Avg. Score Gain' },
  { num: '3,800+', label: 'Students Enrolled' },
  { num: '96%', label: 'Improvement Rate' },
  { num: '10+', label: 'Full-Length AAMCs' },
];

export default function WhyEduQuest() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els: HTMLElement[] = [
      headerRef.current,
      ...cardRefs.current,
      statsRef.current,
    ].filter(Boolean) as HTMLElement[];

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

  return (
    <section className={styles.section} id="why">
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <div
          className={`${styles.secHeaderCenter} ${styles.reveal}`}
          ref={headerRef}
        >
          <div className={styles.secBadge}>Why EduQuest</div>
          <h2 className={styles.secTitle}>
            Why Students Choose <em>EduQuest</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.secSub}>
            We don&apos;t teach the MCAT. We engineer the highest possible score
            through a ruthlessly efficient, science-backed methodology.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.whyGrid}>
          {whyCards.map((card, i) => (
            <div
              key={card.num}
              className={`${styles.whyCard} ${styles.reveal}`}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ transitionDelay: card.delay }}
            >
              <div className={styles.whyCardNum}>{card.num}</div>
              <div className={styles.whyCardIcon}>{card.icon}</div>
              <div className={styles.whyCardTitle}>{card.title}</div>
              <div className={styles.whyCardBody}>{card.body}</div>
            </div>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <div
          className={`${styles.whyStats} ${styles.reveal}`}
          ref={statsRef}
          style={{ transitionDelay: '0.35s' }}
        >
          {stats.map((s) => (
            <div key={s.label} className={styles.whyStat}>
              <div className={styles.whyStatNum}>{s.num}</div>
              <div className={styles.whyStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}