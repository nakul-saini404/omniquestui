'use client';

import { useEffect, useRef } from 'react';
import styles from './Preparation.module.css';

const phases = [
  {
    dot: 'M1',
    title: 'Month 1 — Foundation',
    items: [
      'Algebra, functions & graphs',
      'Logic-based reasoning',
      'Conditional statements',
      'Weekly quizzes',
      '1 mock paper',
    ],
  },
  {
    dot: 'M2',
    title: 'Month 2 — Intermediate',
    items: [
      'Sequences & trigonometry',
      'Inequalities & proof',
      'Time-bound drills',
      'Peer discussions',
      'Video analysis sessions',
    ],
  },
  {
    dot: 'M3',
    title: 'Month 3 — Advanced',
    items: [
      'Differential calculus',
      'Integration basics',
      'Past-year questions',
      '4 full-length mocks',
      '1-on-1 error review',
    ],
  },
  {
    dot: 'W4',
    title: 'Final Week — Sharpen',
    items: [
      'Revise formulae & shortcuts',
      'Review all mock errors',
      'Live strategy session',
      'Mental math drills',
      'EduQuest mentor Q&A',
    ],
  },
];

const tips = [
  {
    icon: '⏰',
    title: 'Start Early',
    desc: 'Ideally 6–9 months before the exam. Mathematical reasoning is a skill built over time — it cannot be crammed in a week.',
  },
  {
    icon: '📝',
    title: 'Solve Past Papers',
    desc: 'Work through all official Cambridge specimen and past TMUA papers under timed conditions. Familiarity with format is essential for a strong result.',
  },
  {
    icon: '🧠',
    title: 'Logic Over Speed',
    desc: 'Focus on understanding argument structure and reasoning deeply. Speed follows naturally from deep comprehension — not the other way around.',
  },
  {
    icon: '🔢',
    title: 'Master Mental Math',
    desc: 'No calculator is allowed. Practice mental arithmetic, estimation, and algebraic manipulation until they become second nature under pressure.',
  },
  {
    icon: '📊',
    title: 'Mock Test Series',
    desc: "Join EduQuest's mock test series and strategy workshops. Analyzing mistakes from mocks is more valuable than solving new questions.",
  },
  {
    icon: '👨‍🏫',
    title: '1-on-1 Mentoring',
    desc: 'EduQuest provides personalized strategy sessions, weekly progress tracking, and Math Olympiad-level reasoning practice for every student.',
  },
];

export default function Preparation() {
  const phasesRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      ...Array.from(phasesRef.current?.querySelectorAll<HTMLDivElement>(`.${styles.revPhase}`) ?? []),
      ...Array.from(tipsRef.current?.querySelectorAll<HTMLDivElement>(`.${styles.prepTip}`) ?? []),
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="revision" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Preparation</span>
        <h2 className={styles.sectionTitle}>TMUA Revision Plan by EduQuest</h2>
        <p className={styles.sectionSub}>
          A structured 3-month roadmap designed by EduQuest&apos;s expert faculty.
          Start 6–9 months early for maximum impact and a truly competitive score.
        </p>

        {/* Timeline */}
        <div className={styles.revisionTimeline} ref={phasesRef}>
          {phases.map((phase) => (
            <div key={phase.dot} className={styles.revPhase}>
              <div className={styles.revDot}>{phase.dot}</div>
              <h3 className={styles.revPhaseTitle}>{phase.title}</h3>
              <ul className={styles.revPhaseList}>
                {phase.items.map((item, i) => (
                  <li key={i} className={styles.revPhaseItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Prep Tips */}
        <div className={styles.prepTips} ref={tipsRef}>
          {tips.map((tip, i) => (
            <div key={i} className={styles.prepTip}>
              <div className={styles.prepTipIcon}>{tip.icon}</div>
              <h4 className={styles.prepTipTitle}>{tip.title}</h4>
              <p className={styles.prepTipDesc}>{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}