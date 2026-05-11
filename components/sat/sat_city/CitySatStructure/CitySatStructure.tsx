"use client";
// components/sat_city/CitySatStructure/CitySatStructure.tsx
// City-aware version of SatStructure.
// Heading, subtext, adaptive note, and score tier table update per city.

import React, { useEffect, useRef } from "react";
import styles from "./CitySatStructure.module.css";
import type { SATCityData } from "@/constants/satCities";

/* ─── Types ──────────────────────────────────────────────────── */
interface Props {
  data: SATCityData;
}

interface SectionStat {
  label: string;
  value: string;
}

interface SectionCard {
  icon: string;
  title: string;
  subtitle: string;
  stats: SectionStat[];
  accentClass?: string;
}

interface AdaptiveStep {
  num: number;
  heading: string;
  body: string;
}

interface ScoreTier {
  range: string;
  universities: string;
  percentile: string;
  highlight?: boolean;
}

/* ─── Static section card data (same for all cities) ─────────── */
const SECTIONS: SectionCard[] = [
  {
    icon: "📖",
    title: "Reading & Writing",
    subtitle: "2 Adaptive Modules · 54 Questions · 64 Minutes",
    stats: [
      { label: "Total Questions",   value: "54" },
      { label: "Time Allowed",      value: "64 minutes" },
      { label: "Format",            value: "2 Adaptive Modules" },
      { label: "Max Section Score", value: "800" },
      { label: "Question Types",    value: "MCQ + Student-Produced" },
      {
        label: "Content Areas",
        value:
          "Craft & Structure · Expression of Ideas · Standard English Conventions · Information & Ideas",
      },
    ],
  },
  {
    icon: "🧮",
    title: "Mathematics",
    subtitle: "2 Adaptive Modules · 44 Questions · 70 Minutes",
    accentClass: "headAlt",
    stats: [
      { label: "Total Questions",   value: "44" },
      { label: "Time Allowed",      value: "70 minutes" },
      { label: "Format",            value: "2 Adaptive Modules" },
      { label: "Max Section Score", value: "800" },
      { label: "Calculator",        value: "Allowed throughout" },
      {
        label: "Content Areas",
        value:
          "Algebra · Advanced Math · Problem Solving & Data · Geometry & Trigonometry",
      },
    ],
  },
];

const ADAPTIVE_STEPS: AdaptiveStep[] = [
  {
    num: 1,
    heading: "Module 1",
    body: "Serves a mix of difficulty levels to all students.",
  },
  {
    num: 2,
    heading: "Routing",
    body: "Your Module 1 performance determines whether you receive Module 2 Easy or Module 2 Hard.",
  },
  {
    num: 3,
    heading: "High Ceiling",
    body: "Module 2 Hard unlocks a higher score ceiling — essential for 700+ per section.",
  },
  {
    num: 4,
    heading: "Score Cap",
    body: "Module 2 Easy caps your score around 640–660 per section, regardless of performance.",
  },
  {
    num: 5,
    heading: "EduQuest Target",
    body: "Our preparation specifically targets Module 2 Hard routing from Day 1.",
  },
];

const SCORE_TIERS: ScoreTier[] = [
  {
    range: "1550–1600",
    universities: "Harvard, MIT, Stanford",
    percentile: "99th+",
    highlight: true,
  },
  {
    range: "1500–1550",
    universities: "Columbia, Wharton, NYU",
    percentile: "98–99th",
    highlight: true,
  },
  {
    range: "1450–1500",
    universities: "UCLA, UC Berkeley, LSE",
    percentile: "96–98th",
  },
  {
    range: "1400–1450",
    universities: "Purdue, UBC, King's College",
    percentile: "93–96th",
  },
  {
    range: "1300–1400",
    universities: "Many Top-50 Universities",
    percentile: "85–93rd",
  },
];

/* ─── Component ──────────────────────────────────────────────── */
const CitySatStructure: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const { city, country, slug } = data;
  const locationStr = country === "India" ? city : `${city}, ${country}`;

  /* Wire up .reveal / .visible */
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
      id={`structure-${slug}`}
      ref={sectionRef}
      aria-labelledby={`structure-heading-${slug}`}
    >
      <div className={`container ${styles.inner}`}>

        {/* ── Section head — city-aware ── */}
        <div className={`section-head reveal ${styles.headOverride}`}>
          <p className="label">SAT Exam Pattern 2026 · {locationStr}</p>
          <h2 id={`structure-heading-${slug}`}>
            Digital SAT Structure for{" "}
            <em>{city} Students</em>
          </h2>
          <p>
            The Digital SAT is a two-section, fully computer-adaptive test.{" "}
            {data.structureIntro ??
              `Understanding its structure — especially the adaptive module system —
              is foundational for ${city} students targeting scores in the top percentiles.`}
          </p>
        </div>

        {/* ── Two section cards ── */}
        <div className={`reveal ${styles.cardsGrid}`}>
          {SECTIONS.map((sec) => (
            <div className={styles.sectionCard} key={sec.title}>
              <div
                className={`${styles.cardHead} ${
                  sec.accentClass ? styles[sec.accentClass as keyof typeof styles] : ""
                }`}
              >
                <h3 className={styles.cardHeadTitle}>
                  {sec.icon} {sec.title}
                </h3>
                <p className={styles.cardHeadSub}>{sec.subtitle}</p>
              </div>
              <div className={styles.cardBody}>
                {sec.stats.map((s) => (
                  <div className={styles.statRow} key={s.label}>
                    <span className={styles.statLabel}>{s.label}</span>
                    <span className={styles.statValue}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Adaptive module note (two columns) ── */}
        <div className={`reveal ${styles.adaptiveNote}`}>

          {/* Left: how adaptive modules work */}
          <div className={styles.adaptiveCol}>
            <h3 className={styles.adaptiveColTitle}>How Adaptive Modules Work</h3>
            <div className={styles.stepList}>
              {ADAPTIVE_STEPS.map((step) => (
                <div className={styles.step} key={step.num}>
                  <div className={styles.stepNum} aria-hidden>
                    {step.num}
                  </div>
                  <div className={styles.stepBody}>
                    <strong>{step.heading}</strong> —{" "}
                    {/* Swap last step body to be city-aware */}
                    {step.num === 5
                      ? `EduQuest's ${city} programme targets Module 2 Hard routing from Day 1.`
                      : step.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: score range table + city avg highlight */}
          <div className={styles.adaptiveCol}>
            <h3 className={styles.adaptiveColTitle}>Score Ranges by University Tier</h3>
            <table
              className={styles.scoreTable}
              aria-label={`SAT score ranges relevant to ${city} students`}
            >
              <thead>
                <tr>
                  <th>Score Range</th>
                  <th>University Tier</th>
                  <th>Percentile</th>
                </tr>
              </thead>
              <tbody>
                {SCORE_TIERS.map((tier) => (
                  <tr
                    key={tier.range}
                    className={tier.highlight ? styles.tierHighlight : ""}
                  >
                    <td>
                      <strong>{tier.range}</strong>
                    </td>
                    <td>{tier.universities}</td>
                    <td>{tier.percentile}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* City avg callout */}
            {data.structureAvgScore && (
              <div className={styles.cityAvg}>
                <span className={styles.cityAvgIcon}>🏆</span>
                <span>
                  <strong>EduQuest {city} Avg (2025):</strong>{" "}
                  <span className={styles.cityAvgScore}>{data.structureAvgScore}</span>
                  {data.structureAvgNote && (
                    <span className={styles.cityAvgNote}> — {data.structureAvgNote}</span>
                  )}
                </span>
              </div>
            )}

            {/* Quick stats strip */}
            <div className={styles.statsStrip}>
              {[
                { val: "98",       lbl: "Total Questions" },
                { val: "2h 14m",   lbl: "Total Duration"  },
                { val: "400–1600", lbl: "Score Range"      },
              ].map((s) => (
                <div className={styles.stripItem} key={s.lbl}>
                  <span className={styles.stripVal}>{s.val}</span>
                  <span className={styles.stripLbl}>{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── City-specific footer note ── */}
        {data.structureFootNote && (
          <p className={`reveal ${styles.footNote}`}>
            {data.structureFootNote}
          </p>
        )}

      </div>
    </section>
  );
};

export default CitySatStructure;