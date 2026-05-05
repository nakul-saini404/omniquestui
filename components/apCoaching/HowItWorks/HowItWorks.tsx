'use client'
import React, { useEffect, useRef } from 'react';
import styles from './HowItWorks.module.css';

interface Step {
  num: number;
  icon: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: 1,
    icon: '🔍',
    title: 'Profile Analysis',
    description:
      'We review your academic background, target universities, and subject interests to design the optimal AP strategy.',
  },
  {
    num: 2,
    icon: '📋',
    title: 'Subject Selection',
    description:
      'We help you choose the right 4–8 AP subjects that maximize both credit value and scholarship potential for your goals.',
  },
  {
    num: 3,
    icon: '📚',
    title: 'Personalized Coaching',
    description:
      'Live 1-on-1 sessions with specialist AP faculty, customized pacing, and real College Board exam practice.',
  },
  {
    num: 4,
    icon: '📊',
    title: 'Mock Tests & Review',
    description:
      'Full-length AP practice exams, FRQ scoring, performance tracking, and targeted weak-area remediation.',
  },
  {
    num: 5,
    icon: '🏆',
    title: 'Exam Day Prep',
    description:
      'Final revision, exam strategy, timing techniques, and psychological preparation for maximum performance.',
  },
  {
    num: 6,
    icon: '🎓',
    title: 'Score → Admission',
    description:
      'AP scores are integrated into your university application strategy, scholarship applications, and admissions narrative.',
  },
  {
    num: 7,
    icon: '✈️',
    title: 'Post-Landing Support',
    description:
      'Visa guidance, pre-departure briefing, and international program coordination for a smooth transition abroad.',
  },
];

const HowItWorks: React.FC = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.12 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span>How It Works</span>
          </div>
          <h2 id="process-heading" className={styles.title}>
            Your AP Success{' '}
            <span className={styles.highlight}>Roadmap at EduQuest</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className={styles.grid}>
          {STEPS.map((step, index) => (
            <div
              key={step.num}
              className={styles.step}
              ref={(el) => { stepRefs.current[index] = el; }}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Connector line (not on last item) */}
              {index < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}

              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon} aria-hidden="true">
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;