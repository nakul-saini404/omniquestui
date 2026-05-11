'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SatBasics.module.css';

/* ─── Section 1: feature cards ─────────────────────────────────────────── */
const FEATURE_CARDS = [
  {
    icon: '📱',
    title: 'Fully Digital',
    body: 'Taken on laptop or tablet via the Bluebook app. No paper, no pencil — with offline capability built in.',
  },
  {
    icon: '⚡',
    title: 'Adaptive Modules',
    body: 'Two-stage adaptive design. Module 1 score determines whether you get Module 2 Easy or Hard — setting your score ceiling.',
  },
  {
    icon: '⏱',
    title: 'Shorter Format',
    body: '2 hrs 14 min — significantly shorter than the old paper SAT (3 hrs). Same rigorous 400–1600 scale.',
  },
  {
    icon: '🧮',
    title: 'Calculator Throughout',
    body: 'Built-in Desmos graphing calculator available for the entire Math section — a major change from the old format.',
  },
];

/* ─── Section 2: SAT blocks ─────────────────────────────────────────────── */
const SAT_BLOCKS = [
  {
    icon: '📖',
    title: 'Reading & Writing',
    pills: ['54 Questions', '64 Minutes', '2 Adaptive Modules', 'Max: 800'],
    topics: [
      'Information and Ideas — central ideas, details, command of evidence',
      'Craft and Structure — words in context, text structure, cross-text connections',
      'Expression of Ideas — rhetorical synthesis, transitions',
      'Standard English Conventions — boundaries, form, structure, sense',
    ],
  },
  {
    icon: '🧮',
    title: 'Mathematics',
    pills: ['44 Questions', '70 Minutes', '2 Adaptive Modules', 'Max: 800'],
    topics: [
      'Algebra — linear equations, systems, linear inequalities',
      'Advanced Math — equivalent expressions, nonlinear equations, functions',
      'Problem-Solving & Data Analysis — ratios, percentages, statistics, probability',
      'Geometry & Trigonometry — area, volume, angles, right triangles, trig',
    ],
  },
];

/* ─── Reveal-on-scroll hook ─────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref  = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function SatBasics() {
  const sec1 = useReveal(0.12);
  const sec2 = useReveal(0.1);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — SAT Basics for US Families  (cream bg)
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={sec1.ref as React.RefObject<HTMLElement>}
        className={`${styles.basics} ${sec1.visible ? styles.visible : ''}`}
        aria-labelledby="basics-heading"
        id="basics"
      >
        {/* Top border rule */}
        <div className={styles.topRule} aria-hidden />

        <div className={styles.secInner}>

          {/* ── Header ── */}
          <div className={styles.header}>
            <span className={styles.sectionLabel}>SAT Basics for US Families</span>
            <h2 id="basics-heading" className={styles.sectionTitle}>
              What is the <em className={styles.em}>Digital SAT 2026</em>?
            </h2>
            <div className={styles.divider} aria-hidden />
            <p className={styles.sectionSub}>
              The Digital SAT is a fully computer-adaptive test by College
              Board. It replaced the paper SAT in 2024 for US students and is
              the definitive college admissions benchmark for American
              universities.
            </p>
          </div>

          {/* ── Info box ── */}
          <div className={styles.infoBox}>
            <div className={styles.infoBoxBar} aria-hidden />
            <div className={styles.infoBoxBody}>
              <h4 className={styles.infoBoxTitle}>
                🏫 Why the SAT Still Matters for US Students in 2026
              </h4>
              <p className={styles.infoBoxText}>
                After a brief test-optional wave during COVID, elite US
                universities — MIT, Yale, Dartmouth, UT Austin, Florida,
                Georgia Tech, and 80+ others — have reinstated SAT/ACT
                requirements as of 2024–2026. A strong score can unlock merit
                scholarships worth $20,000–$60,000+ at many schools.
              </p>
            </div>
          </div>

          {/* ── Feature cards ── */}
          <div className={styles.cardsGrid} role="list">
            {FEATURE_CARDS.map((c, i) => (
              <div
                key={c.title}
                className={styles.card}
                role="listitem"
                style={{ animationDelay: `${0.1 + i * 0.09}s` }}
              >
                {/* Gold accent sweep on top */}
                <div className={styles.cardTopLine} aria-hidden />
                <div className={styles.cardIcon} aria-hidden>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 2 — Digital SAT Structure 2026  (white bg)
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={sec2.ref as React.RefObject<HTMLElement>}
        className={`${styles.structure} ${sec2.visible ? styles.visible : ''}`}
        aria-labelledby="structure-heading"
        id="structure"
      >
        <div className={styles.secInner}>

          {/* ── Header ── */}
          <div className={styles.header}>
            <span className={styles.sectionLabelDk}>Test Format</span>
            <h2 id="structure-heading" className={styles.sectionTitle}>
              Digital SAT <em className={styles.em}>Structure 2026</em>
            </h2>
            <div className={styles.divider} aria-hidden />
            <p className={styles.sectionSub}>
              A two-section, fully adaptive test. EduQuest&apos;s US programme
              starts with Bluebook-native mock tests from Day 1.
            </p>
          </div>

          {/* ── SAT blocks ── */}
          <div className={styles.satGrid}>
            {SAT_BLOCKS.map((block, i) => (
              <div
                key={block.title}
                className={styles.satBlock}
                style={{ animationDelay: `${0.12 + i * 0.12}s` }}
              >
                {/* Gold bar at very top — matches .sat-block::before */}
                <div className={styles.satBlockBar} aria-hidden />

                <h3 className={styles.satBlockTitle}>
                  <span aria-hidden>{block.icon}</span> {block.title}
                </h3>

                {/* Meta pills */}
                <div className={styles.satMeta}>
                  {block.pills.map(p => (
                    <span key={p} className={styles.metaPill}>{p}</span>
                  ))}
                </div>

                {/* Topic list */}
                <ul className={styles.topicList}>
                  {block.topics.map(t => (
                    <li key={t} className={styles.topicItem}>
                      <span className={styles.topicChevron} aria-hidden>›</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Warning info box ── */}
          <div className={styles.infoBox}>
            <div className={styles.infoBoxBar} aria-hidden />
            <div className={styles.infoBoxBody}>
              <h4 className={styles.infoBoxTitle}>
                ⚠️ How the Adaptive Module Determines Your Score Ceiling
              </h4>
              <p className={styles.infoBoxText}>
                Module 2 Hard unlocks 700–800 per section. Module 2 Easy caps
                you at around 640–660 — no matter how perfectly you answer.
                EduQuest&apos;s entire methodology targets Module 2 Hard
                routing from Day 1.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}