'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ScoreComparison.module.css';

/* ── Types ── */
interface ScoreRow {
  level: string;
  descriptor: string;
  ielts: string;
  toefl: string;
  pte: string;
  duolingo: string;
  color: string;
}

interface TestMeta {
  key: 'ielts' | 'toefl' | 'pte' | 'duolingo';
  label: string;
  icon: string;
  range: string;
  body: string;
  accent: string;
}

/* ── Data ── */
const tests: TestMeta[] = [
  {
    key: 'ielts',
    label: 'IELTS',
    icon: '📘',
    range: '0 – 9',
    body: 'Band score in 0.5 increments. Used globally for study, work & immigration.',
    accent: '#2563EB',
  },
  {
    key: 'toefl',
    label: 'TOEFL iBT',
    icon: '🌐',
    range: '0 – 120',
    body: 'Point score. Preferred by US & Canadian universities.',
    accent: '#16A34A',
  },
  {
    key: 'pte',
    label: 'PTE Academic',
    icon: '💻',
    range: '10 – 90',
    body: 'AI-scored. Fast results in 48 hrs. Popular for Australian immigration.',
    accent: '#D97706',
  },
  {
    key: 'duolingo',
    label: 'Duolingo',
    icon: '🦉',
    range: '10 – 160',
    body: 'Online adaptive test. Affordable & convenient. Results in 2 days.',
    accent: '#7C3AED',
  },
];

const rows: ScoreRow[] = [
  { level: 'Expert',      descriptor: 'Fully operational command',         ielts: '8.5 – 9.0',  toefl: '114 – 120', pte: '84 – 90',  duolingo: '140 – 160', color: '#0B1C3D' },
  { level: 'Very Good',   descriptor: 'Occasional inaccuracies only',      ielts: '7.5 – 8.0',  toefl: '101 – 113', pte: '73 – 83',  duolingo: '125 – 135', color: '#1A3A6B' },
  { level: 'Good',        descriptor: 'Complex situations handled well',   ielts: '6.5 – 7.0',  toefl: '88 – 100',  pte: '59 – 72',  duolingo: '110 – 120', color: '#C9880A' },
  { level: 'Competent',   descriptor: 'Generally effective command',       ielts: '5.5 – 6.0',  toefl: '72 – 87',   pte: '43 – 58',  duolingo: '95 – 105',  color: '#B45309' },
  { level: 'Modest',      descriptor: 'Partial command in familiar areas', ielts: '4.5 – 5.0',  toefl: '55 – 71',   pte: '30 – 42',  duolingo: '75 – 90',   color: '#6B7280' },
  { level: 'Limited',     descriptor: 'Basic competence in own field',     ielts: '3.5 – 4.0',  toefl: '< 55',      pte: '< 30',     duolingo: '< 75',      color: '#9CA3AF' },
];

/* ── Highlight pills ── */
const highlights = [
  { label: 'Most universities require', value: 'IELTS 6.5 / TOEFL 88 / PTE 59 / DET 110' },
  { label: 'Top postgrad programmes', value: 'IELTS 7.0 / TOEFL 100 / PTE 65 / DET 120' },
  { label: 'Australian immigration', value: 'IELTS 6.0 / PTE 50 / TOEFL 60' },
  { label: 'UK Skilled Worker Visa', value: 'IELTS 4.0+ per component' },
];

/* ── Component ── */
export default function ScoreComparison() {
  const [visible, setVisible] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let mounted = true;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && mounted) setVisible(true); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => { mounted = false; obs.disconnect(); };
  }, []);

  const toggleTest = (key: string) => {
    setActiveTest(prev => (prev === key ? null : key));
  };

  return (
    <section className={styles.section} id="score-comparison" ref={sectionRef}>

      {/* Background accents */}
      <div className={styles.bgAccentLeft} aria-hidden />
      <div className={styles.bgAccentRight} aria-hidden />

      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${visible ? styles.visible : ''}`}>
          <div className={styles.sectionLabel}>Score Guide</div>
          <h2 className={styles.heading}>Score Comparison Chart</h2>
          <p className={styles.sub}>
            Understand equivalent scores across all four major English proficiency tests —
            so you can set the right target and pick the test that works for you.
          </p>
        </div>

        {/* ── Test cards ── */}
        <div className={`${styles.testCards} ${visible ? styles.visible : ''}`}>
          {tests.map((t, i) => (
            <button
              key={t.key}
              className={`${styles.testCard} ${activeTest === t.key ? styles.testCardActive : ''}`}
              style={{ '--card-accent': t.accent, '--delay': `${i * 0.08}s` } as React.CSSProperties}
              onClick={() => toggleTest(t.key)}
              aria-pressed={activeTest === t.key}
            >
              <span className={styles.testCardIcon}>{t.icon}</span>
              <span className={styles.testCardLabel}>{t.label}</span>
              <span className={styles.testCardRange}>{t.range}</span>
              <p className={styles.testCardBody}>{t.body}</p>
              <span className={styles.testCardDot} aria-hidden />
            </button>
          ))}
        </div>

        {/* ── Table ── */}
        <div className={`${styles.tableWrap} ${visible ? styles.visible : ''}`}>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thLevel}>Level</th>
                  <th className={styles.thDesc}>Descriptor</th>
                  {tests.map(t => (
                    <th
                      key={t.key}
                      className={`${styles.thScore} ${activeTest === t.key ? styles.thScoreActive : ''}`}
                      style={{ '--col-accent': t.accent } as React.CSSProperties}
                    >
                      <span className={styles.thIcon}>{t.icon}</span>
                      {t.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`${styles.tr} ${hoveredRow === i ? styles.trHovered : ''}`}
                    style={{ '--row-delay': `${i * 0.06}s`, '--row-color': row.color } as React.CSSProperties}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className={styles.tdLevel}>
                      <span className={styles.levelDot} style={{ background: row.color }} />
                      <span className={styles.levelText}>{row.level}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.descriptor}</td>
                    {tests.map(t => (
                      <td
                        key={t.key}
                        className={`${styles.tdScore} ${activeTest === t.key ? styles.tdScoreActive : ''}`}
                        style={{ '--col-accent': t.accent } as React.CSSProperties}
                      >
                        {row[t.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Requirement highlights ── */}
        <div className={`${styles.highlights} ${visible ? styles.visible : ''}`}>
          <p className={styles.highlightsLabel}>Common Requirements</p>
          <div className={styles.highlightsList}>
            {highlights.map((h, i) => (
              <div
                key={i}
                className={styles.highlight}
                style={{ '--h-delay': `${i * 0.07}s` } as React.CSSProperties}
              >
                <span className={styles.highlightKey}>{h.label}</span>
                <span className={styles.highlightVal}>{h.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer note ── */}
        <p className={`${styles.note} ${visible ? styles.visible : ''}`}>
          * Scores are approximate equivalents based on widely accepted concordance tables.
          Always verify requirements with your target institution or immigration authority.
        </p>

      </div>
    </section>
  );
}