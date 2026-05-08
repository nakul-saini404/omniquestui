"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatMakesUsDifferent.module.css";

const usps = [
  {
    icon: "📅",
    title: "120-Day Access",
    body: "Flexible learning at your pace — no stress about exams or personal events interrupting your schedule.",
  },
  {
    icon: "🔓",
    title: "No Fixed Start Dates",
    body: "Enroll anytime. Each session is structured to help you catch up seamlessly, wherever you join from.",
  },
  {
    icon: "🎯",
    title: "Live Classes & Mock Tests",
    body: "Real-time interaction with experienced instructors and realistic test simulation — not just recorded videos.",
  },
  {
    icon: "📚",
    title: "Comprehensive Resource Platform",
    body: "Access videos, practice exercises, mock tests, and grammar quizzes all in one integrated platform.",
  },
  {
    icon: "🧩",
    title: "English Level Assessment",
    body: "Start with a proficiency test to join the right batch — Beginner or Advanced — for maximum efficiency.",
  },
  {
    icon: "📊",
    title: "Performance Tracker",
    body: "Monitor your progress, track attendance, and measure skill improvement across all four modules.",
  },
  {
    icon: "🎬",
    title: "Daily Video Library",
    body: "Engaging videos on vocabulary, synonyms, antonyms, and sentence usage — new content every day.",
  },
  {
    icon: "🔀",
    title: "Shuffled Daily Videos",
    body: "Ensure variety and keep learning interesting with daily-shuffled content so you never hit a plateau.",
  },
  {
    icon: "💡",
    title: "Expert Tips",
    body: "Learn from faculty members with over a decade of British Council experience and proven results.",
  },
  {
    icon: "🎓",
    title: "IELTS Skill Improvement Videos",
    body: "Detailed guidance on all modules: Listening, Reading, Writing, and Speaking — every technique covered.",
  },
  {
    icon: "🏆",
    title: "Master Classes for Higher Band",
    body: "Master Sessions by 15-years-experienced trainers designed to push you from Band 6.5 to Band 8+.",
  },
  {
    icon: "🎙️",
    title: "Speaking Practice for Shy Learners",
    body: "Record your responses to practice and improve at your own pace — no pressure, full feedback.",
  },
  {
    icon: "📶",
    title: "Beginner & Advanced Classes",
    body: "Tailored content for all levels, including specialised batches for complex modules like Task 2 Writing.",
  },
  {
    icon: "📆",
    title: "Weekend Bonanza",
    body: "Saturday test analysis with Sunday Doubt-Solving Sessions — dedicated personalised guidance every week.",
  },
  {
    icon: "🔤",
    title: "Grammar Foundation Building",
    body: "Quizzes to reinforce essential grammar rules and clear the conceptual gaps that cost you band scores.",
  },
  {
    icon: "⚡",
    title: "All-in-One Platform",
    body: "Combines live classes, recorded sessions, and personal practice for truly holistic IELTS preparation.",
  },
];

function UspCard({
  usp,
  index,
}: {
  usp: (typeof usps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const badge = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{ animationDelay: `${index * 0.055}s` }}
    >
      {/* Shimmer sweep on hover */}
      <div className={styles.shimmer} aria-hidden="true" />

      {/* Top row: icon + badge */}
      <div className={styles.cardTop}>
        <div
          className={`${styles.iconWrap} ${visible ? styles.iconVisible : ""}`}
          style={{ animationDelay: `${index * 0.055 + 0.18}s` }}
        >
          <span className={styles.iconEmoji} aria-hidden="true">
            {usp.icon}
          </span>
        </div>
        <span
          className={`${styles.badge} ${visible ? styles.badgeVisible : ""}`}
          style={{ animationDelay: `${index * 0.055 + 0.28}s` }}
          aria-hidden="true"
        >
          {badge}
        </span>
      </div>

      <h4 className={styles.cardTitle}>{usp.title}</h4>
      <p className={styles.cardBody}>{usp.body}</p>

      {/* Bottom gold line that expands on hover */}
      <div className={styles.cardUnderline} aria-hidden="true" />
    </div>
  );
}

export default function WhatMakesUsDifferent() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="usps">
      {/* Background grid texture */}
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* Radial glow blobs */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ── Section header ── */}
        <div
          ref={headRef}
          className={`${styles.header} ${headVisible ? styles.headerVisible : ""}`}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} aria-hidden="true" />
            What Makes Us Different
          </div>
          <h2 className={styles.heading}>
            IELTS Course Features
            <br />
            <em className={styles.headingEm}>&amp; USPs</em>
          </h2>
          <p className={styles.subtext}>
            16 reasons why EduQuest&rsquo;s IELTS programme delivers results
            that other platforms simply cannot match.
          </p>
        </div>

        {/* ── USP Cards Grid ── */}
        <div className={styles.grid}>
          {usps.map((usp, i) => (
            <UspCard key={usp.title} usp={usp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}