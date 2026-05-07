"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyACT.module.css";

const CARDS = [
  {
    icon: "🎯",
    title: "Accepted by All US Universities",
    desc: "Every accredited US college accepts ACT scores. Ivy League, Ivy+ and top state schools all evaluate ACT composite scores equally alongside SAT.",
  },
  {
    icon: "🔬",
    title: "Unique Science Section Advantage",
    desc: "ACT's Science Reasoning section rewards data interpretation skills — a natural strength for Indian students trained in CBSE/ICSE science curricula.",
  },
  {
    icon: "📊",
    title: "Concordance with SAT",
    desc: "Official ACT–SAT concordance tables let you compare and leverage both scores. A 36 ACT is equivalent to 1600 SAT — the perfect score.",
  },
  {
    icon: "⚡",
    title: "Broader Syllabus = Wider Edge",
    desc: "ACT covers pre-algebra, algebra, geometry, and trigonometry, plus grammar and reading — preparing you more comprehensively for college academics.",
  },
  {
    icon: "🏆",
    title: "Competitive Advantage",
    desc: "Fewer Indian students attempt ACT, making a high ACT score a genuine differentiator in applications to US universities.",
  },
  {
    icon: "🔄",
    title: "Strategic Dual-Test Approach",
    desc: "EduQuest's proven method prepares you for both ACT and SAT simultaneously — one prep investment, two opportunities to shine.",
  },
];

export default function WhyACT() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      aria-labelledby="why-act-heading"
    >
      <div className={styles.inner}>

        {/* ── Section header ── */}
        <div className={`${styles.header} ${visible ? styles.fadeIn : ""}`}>

          {/* Eyebrow — red line + red uppercase label (matches Hero.tsx) */}
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Why Choose ACT</span>
          </div>

          <h2 className={styles.title} id="why-act-heading">
            The Smartest Path to{" "}
            <em className={styles.accent}>US University Admission</em>
          </h2>

          <p className={styles.sub}>
            ACT and SAT complement each other. Students who prepare for one gain
            an edge in the other. A strategic ACT preparation opens doors to
            every top US college.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Icon pill */}
              <div className={styles.cardIconWrap} aria-hidden="true">
                <span className={styles.cardIcon}>{card.icon}</span>
              </div>

              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDesc}>{card.desc}</p>

              {/* Gold bottom bar revealed on hover via CSS */}
              <div className={styles.cardBar} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}