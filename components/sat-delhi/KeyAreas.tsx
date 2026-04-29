"use client";

import React, { useEffect, useRef } from "react";
import styles from "./KeyAreas.module.css";

/* ─── Types ──────────────────────────────────────────────────── */
interface Topic {
  label: string;
}

interface AreaCard {
  icon: string;
  title: string;
  body: string;
  weight: string;       // approximate % of score
  weightLabel: string;
  topics: Topic[];
  tagVariant: "navy" | "gold" | "red";
}

/* ─── Data ───────────────────────────────────────────────────── */
const AREAS: AreaCard[] = [
  {
    icon: "📐",
    title: "Algebra & Advanced Mathematics",
    weight: "~35%",
    weightLabel: "of Math Score",
    body:
      "The largest single contributor to the Math score. Covers linear equations, systems, quadratics, polynomials, exponential functions, and complex equations. Most 1400+ students have this as a strength; most students below 1350 have measurable, addressable gaps here.",
    topics: [
      { label: "Linear Equations" },
      { label: "Quadratics" },
      { label: "Functions" },
      { label: "Exponentials" },
      { label: "Polynomials" },
      { label: "Systems" },
    ],
    tagVariant: "navy",
  },
  {
    icon: "📊",
    title: "Problem Solving & Data Analysis",
    weight: "~30%",
    weightLabel: "of Math Score",
    body:
      "Tests quantitative reasoning, ratios, proportions, percentages, unit conversion, statistics, and data interpretation from tables and graphs. A high time-pressure area — many students lose points through inefficient reading of data, not through lack of content knowledge.",
    topics: [
      { label: "Statistics" },
      { label: "Ratios & Proportions" },
      { label: "Percentages" },
      { label: "Data Interpretation" },
      { label: "Unit Conversion" },
    ],
    tagVariant: "gold",
  },
  {
    icon: "📖",
    title: "Reading Comprehension",
    weight: "~50%",
    weightLabel: "of R&W Score",
    body:
      "The Digital SAT Reading component tests inference, evidence-based reasoning, vocabulary-in-context, and author purpose across literary, scientific, historical, and social science texts. Strong readers consistently route to Module 2 Hard.",
    topics: [
      { label: "Inference" },
      { label: "Evidence-Based Reasoning" },
      { label: "Vocabulary in Context" },
      { label: "Author Purpose" },
      { label: "Cross-Text Analysis" },
    ],
    tagVariant: "navy",
  },
  {
    icon: "✍️",
    title: "Grammar & Writing Conventions",
    weight: "~50%",
    weightLabel: "of R&W Score",
    body:
      "Standard English Conventions and Expression of Ideas account for a significant portion of the R&W section. Tests sentence structure, punctuation, transitions, rhetorical effectiveness, and clarity. Highly trainable — most students see rapid gains with structured drill.",
    topics: [
      { label: "Sentence Structure" },
      { label: "Punctuation" },
      { label: "Transitions" },
      { label: "Rhetorical Effectiveness" },
      { label: "Clarity & Precision" },
    ],
    tagVariant: "gold",
  },
];

/* tag variant → global class name */
const TAG_CLASS: Record<AreaCard["tagVariant"], string> = {
  navy: "tag-navy",
  gold: "tag-gold",
  red:  "tag-red",
};

/* ─── Component ──────────────────────────────────────────────── */
const KeyAreas: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  /* Wire up global .reveal / .visible */
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={styles.section}
      id="key-areas"
      ref={sectionRef}
      aria-labelledby="key-areas-heading"
    >
      <div className={`container ${styles.inner}`}>

        {/* ── Section head — global .section-head / .label / h2 em ── */}
        <div className="section-head reveal">
          <p className="label">Academic Depth</p>
          <h2 id="key-areas-heading">
            Key Areas That Impact Your <em>SAT Score</em>
          </h2>
          <p>
            Each SAT skill cluster contributes differently to your total score.
            Understanding where you stand in each area is the starting point of
            every EduQuest preparation plan.
          </p>
        </div>

        {/* ── 2 × 2 area cards ── */}
        <div className={`reveal ${styles.grid}`}>
          {AREAS.map((area, i) => (
            <article
              className={styles.card}
              key={area.title}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Card top row: icon + weight pill */}
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden>
                  {area.icon}
                </span>
                {/* weight uses global .tag + variant class */}
                <span className={`tag ${TAG_CLASS[area.tagVariant]} ${styles.weightTag}`}>
                  {area.weight} {area.weightLabel}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardBody}>{area.body}</p>

              {/* Topic chips */}
              <div className={styles.topicRow} aria-label="Key topics">
                {area.topics.map((t) => (
                  <span className={styles.topicChip} key={t.label}>
                    {t.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* ── Closing insight strip ── */}
        <div className={`reveal ${styles.insightStrip}`} style={{ transitionDelay: "0.12s" }}>
          <div className={styles.insightBar} aria-hidden />
          <div className={styles.insightBody}>
            <h3 className={styles.insightTitle}>How EduQuest Uses This</h3>
            <p className={styles.insightText}>
              Every student's preparation plan at EduQuest begins with a full Bluebook diagnostic.
              The diagnostic identifies which of these four clusters is responsible for the score
              gap — and the preparation plan drills those clusters specifically, not the entire
              syllabus. This is what consistently produces 150–300 point improvements.
            </p>
          </div>
          <a
            href="https://eduquest.org.in/contact-us/"
            className="btn-primary"
          >
            Book Free Diagnostic →
          </a>
        </div>

      </div>
    </section>
  );
};

export default KeyAreas;