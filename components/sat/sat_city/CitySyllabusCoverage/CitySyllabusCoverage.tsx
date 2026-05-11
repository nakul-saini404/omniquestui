"use client";
// components/sat_city/CitySyllabusCoverage/CitySyllabusCoverage.tsx
// City-aware — heading, subtext, footer note update from SATCityData prop.
// ref cast fixed; slug-scoped aria id prevents duplicate-id warnings on multi-city SSG.

import { useEffect, useRef, useState } from "react";
import styles from "./CitySyllabusCoverage.module.css";
import type { SATCityData } from "@/constants/satCities";

/* ─── Types ─────────────────────────────────────── */

interface Props {
  data: SATCityData;
}

interface Topic {
  label: string;
  detail: string;
}

interface SyllabusCard {
  icon: string;
  subject: string;
  color: "blue" | "gold";
  topics: Topic[];
  meta: string;
}

/* ─── Static data (same for all cities) ────────── */

const SYLLABUS_DATA: SyllabusCard[] = [
  {
    icon: "📖",
    subject: "Reading & Writing (EBRW)",
    color: "blue",
    topics: [
      {
        label: "Information and Ideas",
        detail: "Central ideas, details, command of evidence",
      },
      {
        label: "Craft and Structure",
        detail: "Words in context, text structure, cross-text connections",
      },
      {
        label: "Expression of Ideas",
        detail: "Rhetorical synthesis, transitions",
      },
      {
        label: "Standard English Conventions",
        detail: "Boundaries, form, structure, sense",
      },
    ],
    meta: "54 questions · 64 minutes",
  },
  {
    icon: "📐",
    subject: "Math",
    color: "gold",
    topics: [
      {
        label: "Algebra",
        detail: "Linear equations, systems, linear inequalities",
      },
      {
        label: "Advanced Math",
        detail: "Equivalent expressions, nonlinear equations, functions",
      },
      {
        label: "Problem-Solving & Data Analysis",
        detail: "Ratios, percentages, statistics, probability",
      },
      {
        label: "Geometry & Trigonometry",
        detail: "Area, volume, angles, right triangles, trigonometry",
      },
    ],
    meta: "44 questions · 70 minutes",
  },
];

const EXAM_FACTS = [
  { num: "2", label: "Sections" },
  { num: "98", label: "Total Questions" },
  { num: "2h 14m", label: "Total Duration" },
  { num: "400–1600", label: "Score Range" },
];

/* ─── Scroll-reveal hook ────────────────────────── */

function useReveal(threshold = 0.14) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Component ─────────────────────────────────── */

export default function CitySyllabusCoverage({ data }: Props) {
  const { ref, visible } = useReveal();
  const { city, country } = data;

  // Location string: "Jaipur" for Indian cities, "Dubai, UAE" for international
  const locationStr =
    country === "India" ? city : `${city}, ${country}`;

  return (
    <section
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby={`syllabus-heading-${data.slug}`}
    >
      <div className={`container ${styles.inner}`}>

        {/* ── Section label — city-aware ── */}
        <div className={`${styles.sectionLabel} ${visible ? styles.in : ""}`}>
          Syllabus Coverage · {locationStr}
        </div>

        {/* ── Heading — city-aware ── */}
        <h2
          id={`syllabus-heading-${data.slug}`}
          className={`${styles.heading} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          Complete Digital SAT{" "}
          <em className={styles.em}>Syllabus</em> Coverage —{" "}
          {city}
        </h2>

        {/* ── Subtext — city-aware ── */}
        <p
          className={`${styles.subText} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.18s" }}
        >
          Our SAT coaching in{" "}
          <strong className={styles.cityHighlight}>{city}</strong> covers every
          section of the Digital SAT (dSAT) comprehensively — from foundational
          concepts to advanced adaptive test strategy.
        </p>

        {/* ── Exam-at-a-glance bar ── */}
        <div
          className={`${styles.examBar} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.26s" }}
          aria-label="Digital SAT 2026 at a glance"
        >
          <span className={styles.examBarLabel}>Digital SAT 2026 ·</span>
          {EXAM_FACTS.map((f) => (
            <span key={f.label} className={styles.examFact}>
              <strong className={styles.examNum}>{f.num}</strong>
              <span className={styles.examFactLabel}>{f.label}</span>
            </span>
          ))}
          <span className={styles.examBarNote}>
            Calculator allowed throughout Math
          </span>
        </div>

        {/* ── Syllabus cards ── */}
        <div className={styles.grid}>
          {SYLLABUS_DATA.map((card, i) => (
            <div
              key={card.subject}
              className={`${styles.card} ${styles[`card--${card.color}`]} ${
                visible ? styles.in : ""
              }`}
              style={{ animationDelay: `${0.32 + i * 0.12}s` }}
            >
              {/* Card header */}
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <div>
                  <h3 className={styles.cardTitle}>{card.subject}</h3>
                  <span className={styles.cardMeta}>{card.meta}</span>
                </div>
              </div>

              {/* Topic list */}
              <ul className={styles.topicList} role="list">
                {card.topics.map((t) => (
                  <li key={t.label} className={styles.topicItem}>
                    <span className={styles.topicBullet} aria-hidden="true">
                      ›
                    </span>
                    <span className={styles.topicText}>
                      <strong className={styles.topicLabel}>{t.label}</strong>
                      <span className={styles.topicDetail}> — {t.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Adaptive badge */}
              <div className={styles.adaptiveBadge}>
                ⚡ Fully Adaptive · 2 Modules
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer note — city-aware ── */}
        <p
          className={`${styles.footNote} ${visible ? styles.in : ""}`}
          style={{ animationDelay: "0.56s" }}
        >
          EduQuest&apos;s SAT coaching in{" "}
          <strong>{city}</strong> is fully aligned with the current{" "}
          <strong>Digital SAT 2026</strong> format and Bluebook interface.{" "}
          {data.localContext}
        </p>

      </div>
    </section>
  );
}