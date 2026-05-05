'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './WhyStudentsFail.module.css';

/* ── Data ─────────────────────────────────────────────────── */
interface Row {
  failReason: string;
  failDetail: string;
  fixIcon: string;
  fixTitle: string;
  fixDetail: string;
}

const ROWS: Row[] = [
  {
    failReason: 'Self-study with YouTube & textbooks',
    failDetail:
      'No personalised feedback loop. Students grind content but never learn why they lose marks on FRQs.',
    fixIcon: '🎯',
    fixTitle: 'Live 1-on-1 Expert Sessions',
    fixDetail:
      'Subject-specialist faculty identifies your exact weak spots and rebuilds them — not a generalist tutor running a script.',
  },
  {
    failReason: 'Starting 4–6 weeks before the exam',
    failDetail:
      "AP exams test college-level depth. Cramming a semester's content in weeks leaves huge conceptual gaps.",
    fixIcon: '🗓️',
    fixTitle: '6–12 Month Structured Roadmap',
    fixDetail:
      'EduQuest builds a personalised preparation timeline starting 6–12 months out so there are zero surprises in May.',
  },
  {
    failReason: 'Zero real exam practice',
    failDetail:
      'Most students never attempt a full-length timed AP paper before exam day. Timing alone kills scores.',
    fixIcon: '📊',
    fixTitle: 'Full-length Mock Tests + FRQ Scoring',
    fixDetail:
      'Multiple College Board-aligned full papers with detailed FRQ scoring rubrics and performance breakdowns.',
  },
  {
    failReason: 'Wrong subject selection',
    failDetail:
      'Students pick AP subjects based on peer pressure or school availability rather than their target university and major.',
    fixIcon: '🧭',
    fixTitle: 'Strategic Subject Planning',
    fixDetail:
      'EduQuest maps your AP subject mix to your target universities, major requirements, and scholarship eligibility.',
  },
  {
    failReason: 'No access to doubt resolution',
    failDetail:
      'Doubts pile up between lessons. Without instant resolution, misconceptions harden and cost marks.',
    fixIcon: '💬',
    fixTitle: 'Between-Session Doubt Support',
    fixDetail:
      'Dedicated faculty WhatsApp access between sessions means no doubt waits more than a few hours for an answer.',
  },
  {
    failReason: 'Isolated AP prep, no bigger picture',
    failDetail:
      'AP scores must work in concert with SAT, extracurriculars, and essays. Treating them in silos wastes their value.',
    fixIcon: '🎓',
    fixTitle: 'Integrated Admissions Strategy',
    fixDetail:
      'AP coaching is woven into your broader admissions narrative — scores, credits, scholarships, and applications aligned.',
  },
];

const STATS = [
  { num: '60%', label: 'of global AP test-takers score below 3' },
  { num: '98%', label: 'of EduQuest students score 4 or 5' },
  { num: '$12M+', label: 'in scholarships unlocked by our students' },
];

/* ── Component ────────────────────────────────────────────── */
const WhyStudentsFail: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.sectionVisible : ''}`}
      aria-labelledby="wsf-heading"
    >
      {/* ── Background decoration ── */}
      <div className={styles.bgGlow1} aria-hidden="true" />
      <div className={styles.bgGlow2} aria-hidden="true" />
      <div className={styles.bgGrid}  aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} aria-hidden="true" />
            <span>The Hard Truth</span>
          </div>
          <h2 id="wsf-heading" className={styles.title}>
            Why Most Students{' '}
            <span className={styles.highlightRed}>Score Below 3</span>
            <br />
            — And How EduQuest{' '}
            <span className={styles.highlightAmber}>Fixes Every One</span>
          </h2>
          <p className={styles.subtitle}>
            60% of AP test-takers globally score 1 or 2 — not because the exams
            are impossible, but because the preparation is wrong. Here's exactly
            where students go wrong, and how EduQuest corrects it.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div className={styles.statsStrip}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.stat}>
              {i > 0 && <span className={styles.statDivider} aria-hidden="true" />}
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Column headers ── */}
        <div className={styles.colHeaders}>
          <div className={styles.colHeaderFail}>
            <span className={styles.colHeaderIcon}>✕</span>
            Without EduQuest
          </div>
          <div className={styles.colHeaderFix}>
            <span className={styles.colHeaderIcon}>✓</span>
            With EduQuest
          </div>
        </div>

        {/* ── Comparison rows ── */}
        <div className={styles.rows}>
          {ROWS.map((row, i) => (
            <div
              key={i}
              className={styles.row}
              style={{ animationDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              {/* Fail side */}
              <div className={styles.failCell}>
                <div className={styles.failIcon} aria-hidden="true">✕</div>
                <div>
                  <p className={styles.failReason}>{row.failReason}</p>
                  <p className={styles.failDetail}>{row.failDetail}</p>
                </div>
              </div>

              {/* VS divider */}
              <div className={styles.vs} aria-hidden="true">VS</div>

              {/* Fix side */}
              <div className={styles.fixCell}>
                <div className={styles.fixIconBox} aria-hidden="true">
                  {row.fixIcon}
                </div>
                <div>
                  <p className={styles.fixTitle}>{row.fixTitle}</p>
                  <p className={styles.fixDetail}>{row.fixDetail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <p className={styles.ctaText}>
            Don't be part of the 60%. Join 3,000+ students who chose the right
            preparation.
          </p>
          <a href="#enroll" className={styles.ctaBtn}>
            Book Your Free Demo Class →
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyStudentsFail;