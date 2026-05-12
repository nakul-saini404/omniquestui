"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./WhatWeDo.module.css";

/* ── Types ── */
interface Card {
  icon: string;
  title: string;
  description: string;
}

/* ── Static data ── */
const cards: Card[] = [
  {
    icon: "🗺️",
    title: "Custom Roadmaps",
    description:
      "No cookie-cutter plans. Your roadmap is built around your strengths, interests, and target universities — from Grade 8 all the way to submission day.",
  },
  {
    icon: "🔭",
    title: "Interest Discovery",
    description:
      "Psychometric assessments and 1-on-1 mentor sessions to identify your authentic academic and extracurricular direction before the world tells you what to be.",
  },
  {
    icon: "🏆",
    title: "Achievement Architecture",
    description:
      "We help you earn the right accolades — competitions, research papers, leadership roles — that signal intellectual potential to elite admissions panels.",
  },
  {
    icon: "✍️",
    title: "Essay & Application Strategy",
    description:
      "Personalised essay coaching, activity list curation, and application strategy designed to connect every element into one compelling, cohesive narrative.",
  },
  {
    icon: "🔬",
    title: "Research Programme",
    description:
      "PhD-supervised cohorts guiding you to produce a published academic paper or a state-of-the-art project — one of the strongest differentiators on any top application.",
  },
  {
    icon: "☀️",
    title: "Summer Programme Guidance",
    description:
      "Strategy and application support for selective summer programmes (MIT, Stanford, Oxford), research roles, internships, and employment — timed to your grade.",
  },
];

const CARDS_PER_VIEW = 3; // number of cards visible at once

/* ── Component ── */
export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Total number of "pages" / discrete steps */
  const totalSteps = cards.length - CARDS_PER_VIEW + 1; // 4 steps for 6 cards

  /* Scroll-reveal — observe all .reveal children */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    section.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Navigation */
  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(totalSteps - 1, i + 1));
  }, [totalSteps]);

  /* Keyboard support */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  /* Translate % = index × (100 / CARDS_PER_VIEW) */
  const translateX = `${-(currentIndex * (100 / CARDS_PER_VIEW))}%`;

  return (
    <section className={styles.section} id="what-we-do">
      <div className={styles.container} ref={sectionRef}>

        {/* ── Header ── */}
        <div className={`${styles.headerWrap} ${styles.reveal}`}>
          <p className={styles.secLabel}>What We Do</p>
          <h2 className={styles.secHeading}>
            We don&apos;t build <em>résumés</em>.<br />
            We craft narratives.
          </h2>
          <p className={styles.secSub}>
            Every student has a unique story. The EduQuest Profile Building
            Programme helps you find it, sharpen it, and present it in a way
            that stops admissions officers cold.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className={`${styles.carouselWrap} ${styles.reveal}`}>
          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(${translateX})` }}
              aria-live="polite"
            >
              {cards.map((card, i) => (
                <div
                  key={card.title}
                  className={styles.card}
                  role="group"
                  aria-label={`Card ${i + 1} of ${cards.length}: ${card.title}`}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.cardIcon} aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls: prev · dots · next ── */}
          <div className={styles.controls}>
            <button
              className={styles.arrowBtn}
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="Previous cards"
            >
              ←
            </button>

            <div className={styles.dots} role="tablist" aria-label="Carousel position">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`Go to position ${i + 1}`}
                  className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ""}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>

            <button
              className={styles.arrowBtn}
              onClick={next}
              disabled={currentIndex === totalSteps - 1}
              aria-label="Next cards"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}