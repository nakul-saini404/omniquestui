'use client';

import { useState } from 'react';
import styles from './Practice.module.css';

interface Tip {
  label: string;
  text: string;
}

interface QCard {
  header: string;
  body: Array<{ type: 'text'; content: string } | { type: 'math'; content: string } | { type: 'tip'; tip: Tip }>;
}

interface Panel {
  tabLabel: string;
  cards: QCard[];
}

const panels: Panel[] = [
  {
    tabLabel: 'Paper 1 — Logic',
    cards: [
      {
        header: 'Mathematical Thinking — Logic Question',
        body: [
          { type: 'text', content: '<strong>Q:</strong> If statement P is true and statement Q is false, which of the following must be true?' },
          { type: 'math', content: '(A) P → Q     (B) ¬P → ¬Q     (C) Q → P     (D) ¬Q → P' },
          { type: 'tip', tip: { label: 'Approach:', text: 'Use truth tables. P→Q is false (true→false = false). Q→P: Q is false, so vacuously true. ¬Q→P: ¬Q is true, P is true, so true. Both (C) and (D) are correct.' } },
          { type: 'tip', tip: { label: 'Shortcut:', text: 'When the antecedent is false, any implication is vacuously true. Master this rule — it appears repeatedly throughout Paper 1.' } },
        ],
      },
      {
        header: 'Key Strategies — Paper 1',
        body: [
          { type: 'text', content: '<strong>Study Logic Gates & Conditionals:</strong> Build fluency with truth tables for AND, OR, NOT, IMPLIES, IFF.' },
          { type: 'text', content: "<strong>De Morgan's Laws:</strong> ¬(P∧Q) ≡ ¬P∨¬Q and ¬(P∨Q) ≡ ¬P∧¬Q. Know these cold." },
          { type: 'text', content: '<strong>Contrapositive:</strong> "P→Q" is equivalent to "¬Q→¬P" — not "¬P→¬Q" (that\'s the inverse, and a very common trap).' },
          { type: 'tip', tip: { label: 'Tip:', text: 'Learn to quickly identify valid vs. invalid arguments. Spotting the logical error in 4 options is faster than constructing a full truth table under exam pressure.' } },
        ],
      },
    ],
  },
  {
    tabLabel: 'Paper 2 — Reasoning',
    cards: [
      {
        header: 'Mathematical Reasoning — Calculus Question',
        body: [
          { type: 'text', content: '<strong>Q:</strong> Evaluate ∫(x² + 2x + 1) dx' },
          { type: 'math', content: 'Recognise: x² + 2x + 1 = (x + 1)²' },
          { type: 'text', content: '<strong>Solution:</strong>' },
          { type: 'math', content: '∫(x+1)² dx = x³/3 + x² + x + C' },
          { type: 'tip', tip: { label: 'Tip:', text: 'Always check for perfect square or difference-of-squares patterns before expanding. Spotting structure saves 30–60 seconds per question — crucial over 20 questions.' } },
        ],
      },
      {
        header: 'Mathematical Reasoning — Algebra Question',
        body: [
          { type: 'text', content: '<strong>Q:</strong> If x² − 4x + 3 = 0, which of the following is true?' },
          { type: 'math', content: 'Factor: (x−1)(x−3) = 0 → x = 1 or x = 3' },
          { type: 'tip', tip: { label: 'Strategy:', text: "Factor first. If options include x=1, x=3, x=−1, x=−3 — eliminate systematically. Don't use the quadratic formula unless factoring clearly fails." } },
          { type: 'text', content: '<strong>Reverse Engineering MCQs:</strong> Substitute each option back into the equation. On Paper 2, this is often faster than solving from scratch under time pressure.' },
        ],
      },
    ],
  },
];

export default function Practice() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="sample" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Practice</span>
        <h2 className={styles.sectionTitle}>Sample Questions &amp; Tips</h2>
        <p className={styles.sectionSub}>
          Representative questions from both papers with step-by-step strategies,
          shortcuts, and common pitfalls identified by EduQuest&apos;s expert faculty.
        </p>

        {/* Tabs */}
        <div className={styles.sampleTabs}>
          {panels.map((panel, i) => (
            <button
              key={i}
              className={`${styles.sampleTab} ${activeTab === i ? styles.active : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {panel.tabLabel}
            </button>
          ))}
        </div>

        {/* Panels */}
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`${styles.samplePanel} ${activeTab === i ? styles.panelActive : ''}`}
          >
            {panel.cards.map((card, j) => (
              <div key={j} className={styles.qCard}>
                <div className={styles.qHeader}>
                  <h4 className={styles.qHeaderTitle}>{card.header}</h4>
                </div>
                <div className={styles.qBody}>
                  {card.body.map((block, k) => {
                    if (block.type === 'math') {
                      return (
                        <div key={k} className={styles.math}>
                          {block.content}
                        </div>
                      );
                    }
                    if (block.type === 'tip') {
                      return (
                        <div key={k} className={styles.qTip}>
                          <span className={styles.qTipLabel}>{block.tip.label}</span>
                          <span className={styles.qTipText}>{block.tip.text}</span>
                        </div>
                      );
                    }
                    return (
                      <p
                        key={k}
                        className={styles.qText}
                        dangerouslySetInnerHTML={{ __html: block.content }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}