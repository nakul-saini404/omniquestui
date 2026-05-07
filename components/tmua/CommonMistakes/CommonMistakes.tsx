'use client';

import { useEffect, useRef } from 'react';
import styles from './CommonMistakes.module.css';

const mistakes = [
  {
    num: '01',
    title: 'Treating It Like a School Exam',
    desc: "TMUA doesn't reward rote learning. Students who memorize formulas without understanding the underlying logic consistently underperform — it tests reasoning, not recall.",
  },
  {
    num: '02',
    title: 'Neglecting Logical Reasoning',
    desc: "Many students focus entirely on calculus and algebra, ignoring Paper 1's logic. Confusing converses, inverses, and contrapositives is one of the most common fatal mistakes.",
  },
  {
    num: '03',
    title: 'No Calculator Strategy',
    desc: "Students accustomed to calculators often struggle badly. Without practiced mental arithmetic and algebraic fluency, even students with strong school grades run out of time.",
  },
  {
    num: '04',
    title: 'Poor Time Management',
    desc: "With 20 questions in 75 minutes, spending more than 4 minutes on any single question is dangerous. Students who don't practice timed conditions consistently run out of time.",
  },
  {
    num: '05',
    title: 'Starting Too Late',
    desc: "TMUA requires building genuine mathematical intuition — not cramming. Students who start preparation less than 2–3 months before the test rarely reach their score potential.",
  },
  {
    num: '06',
    title: 'Ignoring Past Papers',
    desc: "Cambridge releases official past papers and specimen papers. Students who skip them are often surprised by question formats on test day — a costly and avoidable mistake.",
  },
];

export default function CommonMistakes() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLDivElement>(
      `.${styles.failCard}`
    );
    if (!cards) return;

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="fail" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Common Mistakes</span>
        <h2 className={styles.sectionTitle}>What Makes Students Fail in TMUA?</h2>
        <p className={styles.sectionSub}>
          Understanding the most common failure points is the first step to
          avoiding them. EduQuest's coaching is specifically designed to address
          each one.
        </p>

        <div className={styles.failGrid} ref={gridRef}>
          {mistakes.map((item) => (
            <div key={item.num} className={styles.failCard}>
              <div className={styles.failCardNum}>{item.num}</div>
              <h4 className={styles.failCardTitle}>{item.title}</h4>
              <p className={styles.failCardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}