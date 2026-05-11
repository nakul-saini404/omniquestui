'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyStartNow.module.css';

/* ─── TYPES ───────────────────────────────────────────── */
interface WhyCard {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

/* ─── DATA ────────────────────────────────────────────── */
const cards: WhyCard[] = [
  {
    num: '01',
    icon: '🏆',
    title: 'National Merit Scholarships',
    desc: 'Score in the top 3–4% and qualify as a Commended Scholar or Semifinalist. Corporate-sponsored scholarships can reach $10,000+. Some colleges offer full merit aid to Finalists.',
  },
  {
    num: '02',
    icon: '📊',
    title: 'SAT Score Predictor',
    desc: 'PSAT scores are highly correlated with SAT scores. A 1400+ PSAT typically translates to a 1450–1550 SAT. Taking the PSAT in Class 9–10 gives you 2–3 years to target your SAT goal.',
  },
  {
    num: '03',
    icon: '🎯',
    title: 'Identify Gaps Early',
    desc: "The PSAT's detailed score report pinpoints exact weaknesses — by question type, domain, and skill. EduQuest uses this to build a personalised study plan for SAT readiness.",
  },
  {
    num: '04',
    icon: '🎓',
    title: 'College Recruitment Gateway',
    desc: 'Colleges use PSAT scores to identify students for recruitment. High scorers receive personalised outreach from top universities — Harvard, Yale, Stanford and others actively recruit through this channel.',
  },
  {
    num: '05',
    icon: '🔄',
    title: 'Digital SAT Familiarity',
    desc: 'The PSAT uses the same Bluebook platform and adaptive format as the Digital SAT. Students who have taken the PSAT enter the SAT with significant test-day confidence and familiarity.',
  },
  {
    num: '06',
    icon: '⚡',
    title: "EduQuest's Early Start Edge",
    desc: "Students who start PSAT prep in Class 8–9 consistently outperform last-minute SAT preppers. EduQuest's 4-year integrated track builds compounding academic advantages year over year.",
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
export default function WhyStartNow() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

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
          <div className={styles.sectionBadge}>Why Start Now</div>
          <h2 className={styles.sectionTitle}>
            Why the PSAT is More Than
            <br />
            <span className={styles.titleAccent}>Just Practice</span>
          </h2>
          <p className={styles.sectionSub}>
            Most students underestimate the PSAT. EduQuest students understand
            it's a strategic advantage — and use it as one.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.whyGrid}>
          {cards.map((card, i) => (
            <div
              key={card.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={styles.whyCard}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className={styles.whyNum}>{card.num}</div>
              <div className={styles.whyIcon}>{card.icon}</div>
              <div className={styles.whyTitle}>{card.title}</div>
              <div className={styles.whyDesc}>{card.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}