'use client';

import { useEffect, useRef } from 'react';
import styles from './ScoreStructure.module.css';

const cards = [
  {
    variant: styles.cardBio,
    iconClass: styles.iconTeal,
    icon: '🧬',
    name: 'Bio & Biochem',
    abbr: 'BBFL',
    rangeClass: styles.rangeTeal,
    range: '118–132',
    desc: 'Heavy on biology and biochemistry. Mastery of cellular processes, genetics, and enzyme kinetics yields the biggest gains here.',
    dotClass: styles.dotTeal,
    topics: [
      'Molecular Biology & Genetics',
      'Enzyme Kinetics & Metabolism',
      'Physiology & Organ Systems',
      'Research Methods & Statistics',
    ],
  },
  {
    variant: styles.cardChem,
    iconClass: styles.iconGold,
    icon: '⚗️',
    name: 'Chem & Physics',
    abbr: 'CPBS',
    rangeClass: styles.rangePurple,
    range: '118–132',
    desc: 'Quantitative reasoning under pressure. Physics and general chemistry dominate — speed and formula fluency are non-negotiable.',
    dotClass: styles.dotPurple,
    topics: [
      'General Chemistry',
      'Physics & Electrostatics',
      'Organic Chemistry Mechanisms',
      'Thermodynamics & Kinetics',
    ],
  },
  {
    variant: styles.cardPsych,
    iconClass: styles.iconNavy,
    icon: '🧠',
    name: 'Psych & Sociology',
    abbr: 'PSBB',
    rangeClass: styles.rangeGold,
    range: '118–132',
    desc: 'The highest-ceiling section for most students. Pure content mastery — consistent 130+ scores are achievable with the right system.',
    dotClass: styles.dotGold,
    topics: [
      'Psychological Theories',
      'Social Structures & Identity',
      'Neuroscience of Behaviour',
      'Research Design & Statistics',
    ],
  },
  {
    variant: styles.cardCars,
    iconClass: styles.iconNavy,
    icon: '📖',
    name: 'CARS',
    abbr: 'Critical Analysis',
    rangeClass: styles.rangeNavy,
    range: '118–132',
    desc: 'No science content — pure reading speed and inference. Daily timed passage practice is the single biggest lever for improvement.',
    dotClass: styles.dotNavy,
    topics: [
      "Main Idea & Author's Purpose",
      'Inference & Application',
      'Reasoning Beyond the Text',
      'Passage Mapping Strategy',
    ],
  },
];

export default function ScoreStructure() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headerRef.current, gridRef.current, calloutRef.current].filter(
      Boolean
    ) as HTMLElement[];

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
    <section className={styles.section} id="scores">
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`} ref={headerRef}>
          <div className={styles.secBadge}>Score Structure</div>
          <h2 className={styles.secTitle}>
            MCAT Score Breakdown <em>Explained</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.secSub}>
            Each section is scored 118–132, for a total composite score of
            472–528. Knowing where points live helps you allocate study time
            with surgical precision.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div
          className={`${styles.scoresGrid} ${styles.reveal}`}
          ref={gridRef}
          style={{ transitionDelay: '0.12s' }}
        >
          {cards.map((card) => (
            <div
              key={card.abbr}
              className={`${styles.scoreCard} ${card.variant}`}
            >
              <div className={`${styles.scoreCardIcon} ${card.iconClass}`}>
                {card.icon}
              </div>
              <div className={styles.scoreCardName}>{card.name}</div>
              <div className={styles.scoreCardAbbr}>{card.abbr}</div>
              <div className={`${styles.scoreCardRange} ${card.rangeClass}`}>
                {card.range}
              </div>
              <div className={styles.scoreCardDesc}>{card.desc}</div>
              <div className={styles.scoreTopics}>
                {card.topics.map((topic) => (
                  <div key={topic} className={styles.scoreTopic}>
                    <span className={`${styles.scoreDot} ${card.dotClass}`} />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Callout banner ── */}
        <div
          className={`${styles.mcatCallout} ${styles.reveal}`}
          ref={calloutRef}
          style={{ transitionDelay: '0.25s' }}
        >
          <div className={styles.mcatCalloutIcon}>🏥</div>
          <div>
            <div className={styles.mcatCalloutTitle}>
              MCAT Composite Scale — 472 to 528
            </div>
            <p className={styles.mcatCalloutBody}>
              The total MCAT score is the sum of four section scores (118–132
              each). The national average sits around{' '}
              <strong>501–502</strong>. Top US medical schools (MD programs)
              typically require <strong>515+</strong>, while the most elite
              programs expect <strong>520+</strong>. EduQuest&apos;s coaching is
              engineered to push you from the 500s into the{' '}
              <strong>520+ elite tier</strong> — placing you in the top 10th
              percentile.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}