'use client';

import { useEffect, useRef } from 'react';
import styles from './OurMethodology.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ScoreItem {
  name: string;
  score: string;
  beforePct: string;
  afterPct: string;
  badge: string;
}

interface Program {
  name: string;
  desc: string;
  tag: string;
}

/* ─── DATA ────────────────────────────────────────────── */
const steps: Step[] = [
  {
    num: '01',
    title: 'Diagnostic Assessment',
    desc: 'Full-length baseline PSAT under timed, test-like conditions. Identifies exact topic gaps and section weaknesses with percentile benchmarking.',
  },
  {
    num: '02',
    title: 'Personalised Study Plan',
    desc: 'Custom 12/24-week roadmap. R&W and Math broken into weekly targets. Khan Academy + EduQuest materials integrated with live sessions.',
  },
  {
    num: '03',
    title: 'Concept Mastery Sessions',
    desc: 'Live online/offline classes with expert faculty. Core concepts taught with high-yield strategies, not just formulas. Focus on the adaptive exam mindset.',
  },
  {
    num: '04',
    title: 'Adaptive Mock Tests',
    desc: 'Weekly sectional quizzes + bi-weekly full-length PSAT mocks on Bluebook. AI-powered performance analytics track score trajectory and predict final score.',
  },
  {
    num: '05',
    title: 'Targeted Error Analysis',
    desc: 'Every wrong answer is categorised — conceptual gap, careless error, or time management. Faculty address patterns, not just individual mistakes.',
  },
  {
    num: '06',
    title: 'SAT Bridge & Scholarship Guidance',
    desc: 'Post-PSAT, scores are used to build your SAT preparation plan. National Merit students receive dedicated application and scholarship guidance.',
  },
];

const scoreItems: ScoreItem[] = [
  {
    name: 'Rahul M. · Class 9 Start',
    score: '1080 → 1390',
    beforePct: '45%',
    afterPct: '91%',
    badge: '+310 points',
  },
  {
    name: 'Aanya S. · Class 10 Start',
    score: '1200 → 1460',
    beforePct: '55%',
    afterPct: '96%',
    badge: '+260 points · Commended Scholar',
  },
  {
    name: 'Dev K. · Class 11 Start',
    score: '1310 → 1490',
    beforePct: '66%',
    afterPct: '98%',
    badge: '+180 points · Semifinalist',
  },
  {
    name: 'Priya T. · Class 8 Start',
    score: '900 → 1420',
    beforePct: '37%',
    afterPct: '93%',
    badge: '+520 points over 3 years',
  },
];

const programs: Program[] = [
  {
    name: '5-Year Track',
    desc: 'Class 8 → PSAT 8/9 → PSAT 10 → PSAT/NMSQT → SAT 1550+',
    tag: 'Most Recommended',
  },
  {
    name: '4-Year Track',
    desc: 'Class 9 → PSAT 8/9 → PSAT 10 → PSAT/NMSQT → SAT',
    tag: 'Popular',
  },
  {
    name: 'NMSQT Sprint',
    desc: 'Class 11 intensive → PSAT/NMSQT Semifinalist target',
    tag: 'Class 11',
  },
  {
    name: 'PSAT + SAT Combo',
    desc: 'PSAT as springboard, direct pathway to SAT 1450+',
    tag: 'Best Value',
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function OurMethodology() {
  const badgeRef    = useRef<HTMLDivElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const stepRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const visualRef   = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);

  /* bar refs — animated when visual scrolls in */
  const afterBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    /* ── Fade-up observer ── */
    const fadeTargets: Element[] = [
      badgeRef.current,
      titleRef.current,
      subRef.current,
      ...stepRefs.current,
      programsRef.current,
    ].filter(Boolean) as Element[];

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeTargets.forEach((el) => fadeObserver.observe(el));

    /* ── Bar-grow observer (fires on the visual card) ── */
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);

            /* animate the score bars */
            afterBarRefs.current.forEach((bar, i) => {
              if (!bar) return;
              const target = scoreItems[i].afterPct;
              bar.style.width = '0';
              setTimeout(() => {
                bar.style.width = target;
              }, 100);
            });

            barObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (visualRef.current) barObserver.observe(visualRef.current);

    return () => {
      fadeObserver.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <section id="approach" className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.approachGrid}>

          {/* ══ LEFT — steps ══ */}
          <div>
            <div ref={badgeRef} className={styles.sectionBadge}>
              Our Methodology
            </div>

            <h2 ref={titleRef} className={styles.sectionTitle}>
              The EduQuest{' '}
              <span className={styles.titleAccent}>PSAT Method</span>
            </h2>

            <p ref={subRef} className={styles.sectionSub}>
              A 6-phase system used by 1500+ PSAT students. Adaptive,
              data-driven, and built around each student's strengths.
            </p>

            <div className={styles.approachSteps}>
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={styles.step}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.stepLine}>
                    <div className={styles.stepNum}>{step.num}</div>
                    {i < steps.length - 1 && (
                      <div className={styles.stepConnector} />
                    )}
                  </div>
                  <div className={styles.stepBody}>
                    <div className={styles.stepTitle}>{step.title}</div>
                    <div className={styles.stepDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT — visual + programs ══ */}
          <div>
            {/* Score improvement card */}
            <div ref={visualRef} className={styles.approachVisual}>
              <div className={styles.avTitle}>
                📈 Score Improvement — Real Students
              </div>

              <div className={styles.scoreImprove}>
                {scoreItems.map((item, i) => (
                  <div key={item.name} className={styles.siItem}>
                    <div className={styles.siLabel}>
                      <span className={styles.siBefore}>{item.name}</span>
                      <span className={styles.siAfter}>{item.score}</span>
                    </div>
                    <div className={styles.siTrack}>
                      <div
                        className={styles.siBeforeBar}
                        style={{ width: item.beforePct }}
                      />
                      <div
                        ref={(el) => { afterBarRefs.current[i] = el; }}
                        className={styles.siAfterBar}
                        /* width starts at 0, JS sets final value after scroll */
                      />
                    </div>
                    <div className={styles.siBadge}>{item.badge}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated programs */}
            <div ref={programsRef} className={styles.programsWrap}>
              <div className={styles.programsLabel}>
                EduQuest Integrated Programs
              </div>
              <div className={styles.programsGrid}>
                {programs.map((prog) => (
                  <div key={prog.name} className={styles.progCard}>
                    <div className={styles.progName}>{prog.name}</div>
                    <div className={styles.progDesc}>{prog.desc}</div>
                    <div className={styles.progTag}>{prog.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}