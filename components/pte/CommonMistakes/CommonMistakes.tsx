'use client';

import { useEffect, useRef } from 'react';
import styles from './CommonMistakes.module.css';

interface Mistake {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  delay: string;
}

const mistakes: Mistake[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Underestimating Speaking Fluency',
    description:
      "PTE's AI scorer is unforgiving with hesitations, filler words and unnatural pacing. Students who don't practise out loud consistently score poorly in Speaking, dragging their overall band down.",
    tag: 'High Impact',
    delay: '0s',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Poor Essay Structure in Writing',
    description:
      "Many test-takers treat the 20-minute essay as a free-write exercise. Without a clear intro-body-conclusion structure and academic vocabulary, PTE's algorithm assigns a low score regardless of ideas.",
    tag: 'Very Common',
    delay: '0.06s',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Ignoring Enabling Skills',
    description:
      'Grammar, vocabulary, spelling and oral fluency are scored separately. Candidates who focus only on the four communicative skills miss the enabling skill scores that pull their overall band below their target.',
    tag: 'Often Missed',
    delay: '0.12s',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Insufficient Mock Test Practice',
    description:
      "Students who only study concepts but never attempt full, timed mock tests are blindsided by the real exam's pace and question variety. Simulated practice is non-negotiable for a high score.",
    tag: 'Preparation Gap',
    delay: '0.18s',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Not Understanding the AI Scoring',
    description:
      "Unlike human-marked tests, PTE uses AI algorithms. Students who don't know what the algorithm rewards — pronunciation, content score, discourse markers — cannot strategise effectively for each task type.",
    tag: 'Strategy Issue',
    delay: '0.24s',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Poor Time Management',
    description:
      'Spending too long on one question type — particularly Re-order Paragraphs or Fill in the Blanks — leaves students rushing through Listening tasks. Section-specific timing strategies are essential.',
    tag: 'Time Pressure',
    delay: '0.30s',
  },
];

export default function CommonMistakes() {
  const headRef  = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10 }
    );

    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="mistakes-heading">
      <div className={styles.container}>

        {/* Section head */}
        <div
          className={`${styles.sectionHead} ${styles.fadeUp}`}
          ref={headRef}
        >
          <div className={styles.sectionLabel}>Common Mistakes</div>
          <h2 id="mistakes-heading" className={styles.heading}>
            Why Students Fail PTE
          </h2>
          <p className={styles.subtext}>
            Understanding these pitfalls is the first step to avoiding them —
            and EduQuest makes sure you never fall into any of them.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {mistakes.map((m, i) => (
            <div
              key={m.title}
              className={styles.card}
              style={{ transitionDelay: m.delay }}
              ref={(el) => { cardRefs.current[i] = el; }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                {m.icon}
              </div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.cardDesc}>{m.description}</p>
              <span className={styles.tag}>{m.tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}