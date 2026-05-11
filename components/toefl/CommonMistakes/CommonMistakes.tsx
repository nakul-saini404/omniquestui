"use client";

import { useEffect, useRef } from "react";
import styles from "./CommonMistakes.module.css";

interface MistakeCard {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

const mistakes: MistakeCard[] = [
  {
    icon: "😴",
    title: "Ignoring the Integrated Format",
    description:
      "Students prepare for each section in isolation — but TOEFL's hardest tasks require you to simultaneously process listening, reading, and produce output. Isolated prep fails here.",
    delay: "0s",
  },
  {
    icon: "🎧",
    title: "Underestimating Listening",
    description:
      "Academic lectures with multiple accents, fast speech, and inference questions are harder than most students expect. Many candidates spend 80% of prep time on Reading and Writing, and lose big marks in Listening.",
    delay: "0.07s",
  },
  {
    icon: "🗣️",
    title: "No Speaking Practice Under Time Pressure",
    description:
      "The 15-second prep time for TOEFL Speaking tasks is brutally short. Students who haven't practised with a timer habitually freeze or ramble, costing them 4–6 points per task.",
    delay: "0.14s",
  },
  {
    icon: "✍️",
    title: "Not Understanding e-Rater",
    description:
      "TOEFL Writing is partially scored by AI. Students who don't understand how the e-rater evaluates grammar, lexical range, and structure lose marks even when their content is strong.",
    delay: "0.21s",
  },
  {
    icon: "📖",
    title: "Reading Too Slowly",
    description:
      "With ~700 words per passage and inference-based questions, slow readers run out of time consistently. Speed-reading at the academic level is a trainable skill — but most students never train it.",
    delay: "0.28s",
  },
  {
    icon: "🧠",
    title: "No Mock Test Discipline",
    description:
      "Students take mocks casually — phone nearby, pausing allowed, no time pressure. Official TOEFL has zero pauses and strict timing. Only disciplined, full-length simulation builds the endurance needed.",
    delay: "0.35s",
  },
];

export default function CommonMistakes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => el && io.observe(el));
    revealRefs.current.forEach((el) => el && io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.fail} id="fail">
      <div className={styles.gridTex} aria-hidden="true" />

      <div className={styles.container}>
        {/* ── Section Header ── */}
        <div
          className={`${styles.reveal} ${styles.headerWrap}`}
          ref={(el) => {
            revealRefs.current[0] = el;
          }}
        >
          <div className={styles.secLabel}>Common Mistakes</div>
          <h2 className={styles.heading}>
            Why Most Students <em>Fail</em> to Hit Their TOEFL Target
          </h2>
          <p className={styles.failSub}>
            Knowing where students go wrong is the first step to making sure you
            don't repeat the same mistakes.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className={styles.failGrid}>
          {mistakes.map((item, i) => (
            <div
              key={i}
              className={styles.failCard}
              style={{ transitionDelay: item.delay }}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <span className={styles.failCardWarning} aria-hidden="true" />
              <div className={styles.failIcon}>{item.icon}</div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardBody}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* ── CTA Row ── */}
        <div
          className={`${styles.failCtaRow} ${styles.reveal}`}
          ref={(el) => {
            revealRefs.current[1] = el;
          }}
        >
          <p className={styles.ctaText}>
            EduQuest's TOEFL programme directly addresses every single one of
            these failure patterns — with targeted drills, timed simulations,
            and AI scoring strategy built into every session.
          </p>
          <a href="#contact" className={styles.btnGold}>
            Fix These Gaps — Book a Free Demo →
          </a>
        </div>
      </div>
    </section>
  );
}