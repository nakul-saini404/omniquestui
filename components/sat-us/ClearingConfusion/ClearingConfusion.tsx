import React, { useState, useRef, useEffect } from "react";
import styles from "./ClearingConfusion.module.css";

const items = [
  {
    myth: '"The SAT is optional everywhere now — I don\'t need to bother."',
    fact: 'As of 2025–2026, MIT, Yale, Dartmouth, UT Austin, Georgia Tech, and 80+ others have reinstated mandatory SAT/ACT requirements. Even at test-optional schools, a 1500+ score statistically improves admission odds and merit scholarship eligibility.',
  },
  {
    myth: '"The Digital SAT is easier than the old paper SAT."',
    fact: 'The Digital SAT is shorter and in a different format, but the scoring curve is equally rigorous. The adaptive engine accurately reflects ability level, and Module 2 Hard is genuinely difficult. Top scores still require serious, structured preparation.',
  },
  {
    myth: '"A high GPA means I don\'t need to prep for the SAT."',
    fact: 'GPA and SAT measure different things. Many straight-A students score 1200–1350 on their first attempt without prep. The SAT tests specific reasoning patterns, adaptive test strategy, and time management — skills that require deliberate practice.',
  },
  {
    myth: '"You can only take the SAT once or twice — more attempts look bad."',
    fact: 'College Board allows unlimited attempts. Most US colleges use Superscoring — combining your highest Math and highest R&W score across all sittings. Taking the SAT 2–3 times with proper prep is completely normal and often produces a significantly higher Superscore.',
  },
  {
    myth: '"Local US tutors know the SAT better than international coaching firms."',
    fact: "SAT expertise depends on methodology, not geography. EduQuest uses Bluebook-native mocks, 19-cluster diagnostics, and adaptive module strategies that most local US tutors don't employ. The 2025 US batch averaged 1560 — the highest of any EduQuest cohort.",
  },
  {
    myth: '"The SAT is just a math and reading test — natural ability is enough."',
    fact: "The Digital SAT rewards pattern recognition, process elimination, and adaptive pacing — not raw intelligence. Structured preparation consistently yields 150–250 point improvements. EduQuest's US batch averaged a +220 point improvement across all cohorts.",
  },
  {
    myth: '"PSAT scores don\'t matter — it\'s just a practice test."',
    fact: 'The PSAT/NMSQT taken in Grade 11 is the qualifying exam for the National Merit Scholarship Program — a distinction that can unlock $2,500–full-ride scholarships and significantly strengthens college applications. One of the most underutilized opportunities for US students.',
  },
  {
    myth: '"Starting SAT prep in Grade 12 is fine — there\'s plenty of time."',
    fact: "Grade 12 prep is possible but significantly harder — you're competing with AP exams, college applications, and extracurriculars simultaneously. Students who begin in Grade 10 or 11 consistently outscore last-minute preppers by 100–200 points on average.",
  },
];

function AccordionCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof items)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
      style={{ "--card-idx": index } as React.CSSProperties}
    >
      {/* Myth trigger */}
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.triggerTop}>
          <span className={styles.mythBadge}>
            <span className={styles.mythIco}>❌</span>
            <span className={styles.mythLabel}>Myth</span>
          </span>
          <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
            {isOpen ? "−" : "+"}
          </span>
        </div>
        <p className={styles.mythText}>{item.myth}</p>
      </button>

      {/* Fact panel — animated height */}
      <div
        className={styles.factWrap}
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div ref={bodyRef} className={styles.factInner}>
          <div className={styles.sep} />
          <div className={styles.factBadge}>
            <span className={styles.factIco}>✅</span>
            <span className={styles.factLabel}>Fact</span>
          </div>
          <p className={styles.factText}>{item.fact}</p>
        </div>
      </div>
    </div>
  );
}

export default function ClearingConfusion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className={styles.section} id="myths">
      <div className={styles.inner} style={{maxWidth:"1560px"}}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Clearing the Confusion</span>
          <h2 className={styles.title}>
            SAT <em className={styles.titleAccent}>Myths &amp; Facts</em> for US
            Students
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Misinformation about the SAT is rampant — especially after the
            test-optional years. Here's what's actually true in 2026.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <AccordionCard
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}