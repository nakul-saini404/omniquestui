'use client';

import { useEffect, useRef } from 'react';
import styles from './Advantage.module.css';

const advantages = [
  {
    icon: '🏆',
    title: 'Credibility & Academic Rigor',
    desc: 'Adds demonstrable, objective credibility to your application and signals genuine preparedness for the mathematical demands of university study.',
  },
  {
    icon: '🌏',
    title: 'Differentiate as an International Applicant',
    desc: 'UK admissions offices receive thousands of applications from international students with top grades. TMUA provides objective, comparable evidence of mathematical ability.',
  },
  {
    icon: '📉',
    title: 'Offset Lower School Grades',
    desc: 'A high TMUA score can compensate for a relatively lower grade in school-level math, demonstrating that your true ability exceeds what your transcript shows.',
  },
  {
    icon: '🎯',
    title: 'Unlock Reduced Conditional Offers',
    desc: 'Several universities offer reduced grade requirements to applicants with high TMUA scores — potentially lowering an A*AA offer to AAA.',
  },
  {
    icon: '💬',
    title: 'Strengthen Interview Performance',
    desc: 'TMUA preparation significantly improves mathematical thinking and communication skills — directly useful in Cambridge-style and Oxbridge interviews.',
  },
  {
    icon: '🎓',
    title: 'Scholarship & Funding Edge',
    desc: 'A competitive TMUA score strengthens merit-based scholarship applications and departmental bursary requests at top UK institutions.',
  },
];

export default function Advantage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLDivElement>(
      `.${styles.whyItem}`
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
    <section id="why" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Advantage</span>
        <h2 className={styles.sectionTitle}>
          Why Take TMUA Even if Not Required?
        </h2>
        <p className={styles.sectionSub}>
          A strong TMUA score can transform a borderline application into an
          acceptance — and sometimes unlock reduced offers and scholarships that
          change everything.
        </p>

        <div className={styles.whyGrid} ref={gridRef}>
          {advantages.map((item, index) => (
            <div key={index} className={styles.whyItem}>
              <div className={styles.whyIcon}>{item.icon}</div>
              <div>
                <h4 className={styles.whyItemTitle}>{item.title}</h4>
                <p className={styles.whyItemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}