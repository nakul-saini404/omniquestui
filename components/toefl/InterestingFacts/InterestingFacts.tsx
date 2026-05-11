"use client";

import { useEffect, useRef } from "react";
import styles from "./InterestingFacts.module.css";

const facts = [
  {
    num: "01",
    title: "Real Academic Texts",
    body: "Reading passages are taken from actual university textbooks and course materials — not fictional stories or made-up texts.",
    delay: 0,
  },
  {
    num: "02",
    title: "11,500+ Institutions",
    body: "TOEFL scores are accepted by over 11,500 colleges and universities in 180+ countries including Canada, Australia, the US, UK, New Zealand, Europe, and Asia.",
    delay: 0.06,
  },
  {
    num: "03",
    title: "Academic Language in Context",
    body: "The test isn't asking random English questions — every question reflects how language is actually used in a university classroom.",
    delay: 0.12,
  },
  {
    num: "04",
    title: "Integrated Tasks",
    body: "Writing and Speaking sections are integrated — you must listen to a recording or read a passage before you speak or write your response.",
    delay: 0.18,
  },
  {
    num: "05",
    title: "Multiple Accents",
    body: "In Listening and Speaking you may hear native English accents from North America, the UK, and Australia — not just American English.",
    delay: 0.24,
  },
  {
    num: "06",
    title: "Unofficial Scores On-Screen",
    body: "After completing the test, you see unofficial Reading and Listening scores immediately on screen. Speaking and Writing scores come later after human review.",
    delay: 0.3,
  },
  {
    num: "07",
    title: "~700 Words Per Passage",
    body: "Each Reading section passage contains approximately 700 words — learning to read quickly and accurately at this density is a core prep skill.",
    delay: 0.36,
  },
  {
    num: "08",
    title: "Listening Section Pictures",
    body: "Pictures shown during Listening lectures indicate how many people are speaking — some are monologues; others feature 1–2 additional voices.",
    delay: 0.42,
  },
  {
    num: "09",
    title: "AI + Human Rated Speaking",
    body: "Speaking responses are digitally recorded and sent to ETS where both certified human raters and an automated AI scoring system evaluate them together.",
    delay: 0.48,
  },
  {
    num: "10",
    title: "Scores in ~6 Days",
    body: "About 6 days after your test you receive an email with your online score report. Official scores reach your designated institutions within 11 days.",
    delay: 0.54,
  },
];

export default function InterestingFacts() {
  const headerRef = useRef<HTMLDivElement>(null);
  const bonusRef  = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const staticTargets = [headerRef.current, bonusRef.current].filter(
      Boolean
    ) as Element[];
    const cardTargets = cardRefs.current.filter(Boolean) as Element[];

    // Header + bonus banner: standard fade-up reveal
    const headerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            headerObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    staticTargets.forEach((el) => headerObs.observe(el));

    // Fact cards: same observer, class toggled on each card
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            cardObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardTargets.forEach((el) => cardObs.observe(el));

    return () => {
      headerObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return (
    <section className={styles.facts} id="facts">
      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.header} ${styles.reveal}`}
          ref={headerRef}
        >
          <div className={styles.secLabel}>Interesting Facts</div>
          <h2 className={styles.heading}>
            10 Things Most Students{" "}
            <em>Don&apos;t Know</em> About TOEFL
          </h2>
          <p className={styles.subheading}>
            Surprising facts about the TOEFL iBT that can change how you
            prepare — and help you score higher.
          </p>
        </div>

        {/* ── Facts Grid ── */}
        <div className={styles.factsGrid}>
          {facts.map((fact, i) => (
            <div
              key={fact.num}
              className={styles.factCard}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ transitionDelay: `${fact.delay}s` }}
            >
              {/* Blue left accent bar */}
              <span className={styles.factCardAccent} aria-hidden="true" />
              {/* Shimmer overlay on hover */}
              <div className={styles.factCardShimmer} aria-hidden="true" />

              <div className={styles.factNum}>{fact.num}</div>
              <div className={styles.factTitle}>{fact.title}</div>
              <div className={styles.factBody}>{fact.body}</div>
            </div>
          ))}
        </div>

        {/* ── Bonus Banner ── */}
        <div
          className={`${styles.factBonus} ${styles.reveal}`}
          ref={bonusRef}
        >
          <div className={styles.factBonusIcon}>⭐</div>
          <p className={styles.factBonusText}>
            <strong>Bonus Fact:</strong> Your official TOEFL scores are sent
            directly to your designated recipients within{" "}
            <strong>11 business days</strong> from the test date — completely
            free for up to 4 institutions selected on test day.
          </p>
        </div>

      </div>
    </section>
  );
}