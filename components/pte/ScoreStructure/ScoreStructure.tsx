"use client";

import { useEffect, useRef } from "react";
import styles from "./ScoreStructure.module.css";

const scoreBands = [
  {
    range: "79–90",
    name: "Expert",
    desc: "Native-like command of English. Required for top Australian & NZ universities.",
    delay: 0,
  },
  {
    range: "65–78",
    name: "Advanced",
    desc: "Highly effective English. Meets most UK, USA & Canadian university requirements.",
    delay: 60,
  },
  {
    range: "50–64",
    name: "Good",
    desc: "Effective for academic use. Canada SDS requires overall 60+.",
    delay: 120,
  },
  {
    range: "10–49",
    name: "Developing",
    desc: "Limited English proficiency. Coaching and targeted practice required.",
    delay: 180,
  },
];

const scoreSkills = [
  {
    skill: "Speaking",
    desc: "Scored on oral fluency, pronunciation and content. AI measures rhythm, stress and natural pacing in your spoken responses.",
    delay: 0,
  },
  {
    skill: "Writing",
    desc: "Assessed on grammar, vocabulary, spelling, written discourse and content. Essays and summaries are both included here.",
    delay: 60,
  },
  {
    skill: "Reading",
    desc: "Tests comprehension, vocabulary range and the ability to interpret and reorganise written academic information.",
    delay: 120,
  },
  {
    skill: "Listening",
    desc: "Evaluates the ability to interpret, analyse and synthesise spoken English in academic lecture and conversation contexts.",
    delay: 180,
  },
];

export default function ScoreStructure() {
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
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      `.${styles.bandCard}, .${styles.skillBox}, .${styles.sectionHead}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.scoreSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Score Structure</div>
          <h2>PTE Score Structure</h2>
          <p>
            Scores range from 10 to 90. Understanding the structure helps you
            target exactly what you need for your destination.
          </p>
        </div>

        {/* Score Bands */}
        <div className={styles.scoreBands}>
          {scoreBands.map(({ range, name, desc, delay }) => (
            <div
              key={name}
              className={styles.bandCard}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className={styles.bandRange}>{range}</div>
              <div className={styles.bandName}>{name}</div>
              <div className={styles.bandDesc}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Score Skills */}
        <div className={styles.scoreSkills}>
          {scoreSkills.map(({ skill, desc, delay }) => (
            <div
              key={skill}
              className={styles.skillBox}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <h4>{skill}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}