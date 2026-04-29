import React, { useEffect, useRef } from "react";
import styles from "./OurSystem.module.css";

const systemCards = [
  {
    num: "01",
    title: "Academic Excellence",
    description:
      "Structured curriculum mastery aligned with SAT syllabus 2026 and your school board (CBSE, IB, ICSE, IGCSE).",
    tags: ["CBSE", "IB", "IGCSE"],
  },
  {
    num: "02",
    title: "Profile Architecture",
    description:
      "Extracurricular narrative design, leadership positioning, and research projects that strengthen your application.",
    tags: ["Essays", "ECs", "Research"],
  },
  {
    num: "03",
    title: "Narrative Design",
    description:
      "Application essays, short answers, and supplemental writing crafted with admissions committee psychology in mind.",
    tags: ["Common App", "Essays", "LORs"],
  },
  {
    num: "04",
    title: "Admission Strategy",
    description:
      "School selection, Early Decision / Regular Decision strategy, interview coaching, and financial aid optimisation.",
    tags: ["ED/EA", "Interviews", "Visa"],
  },
];

const OurSystem: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="system" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.reveal}>
          <div className={styles.sectionLabel}>Our System</div>
          <h2 className={styles.sectionTitle}>
            How We Build <em className={styles.em}>Selected</em> Students
          </h2>
          <p className={styles.sectionSub}>
            A structured consulting model — not a coaching class. Four
            intelligence layers working in sync.
          </p>
        </div>

        {/* 4-col grid */}
        <div className={styles.grid}>
          {systemCards.map((card, i) => (
            <div
              key={card.num}
              className={`${styles.card} ${styles.reveal}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={styles.num}>{card.num}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSystem;