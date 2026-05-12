"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatWeBuild.module.css";

/* ── Types ── */
interface DrawerPoint {
  icon: string;
  text: string;
}

interface Pillar {
  id: string;
  step: string;
  icon: string;
  title: string;
  tag: string;
  desc: string;
  points: DrawerPoint[];
}

/* ── Static data ── */
const pillars: Pillar[] = [
  {
    id: "autobiography",
    step: "01",
    icon: "📖",
    title: "Profile Autobiography",
    tag: "Foundation · Step 01",
    desc: "A structured form capturing your demographics, academic record, and profile data points — modelled after the personal information section required by all major college applications. The first step in understanding your starting point.",
    points: [
      { icon: "📋", text: "Academic history, grades, and board information" },
      { icon: "🏫", text: "School background and extracurricular involvement to date" },
      { icon: "🎯", text: "Initial aspirations, target countries, and subject preferences" },
      { icon: "🔗", text: "Foundation document used across all future strategy sessions" },
    ],
  },
  {
    id: "deep-auto",
    step: "02",
    icon: "📝",
    title: "Deep Autobiography",
    tag: "Reflection · Step 02",
    desc: "A profound questionnaire that asks meaningful questions about your background, identity, values, and goals — designed to prompt serious, honest reflection. The raw material for all future essays, activity descriptions, and application narratives.",
    points: [
      { icon: "💭", text: "Identity, values, and what drives you at your core" },
      { icon: "🌱", text: "Defining life experiences and moments of growth" },
      { icon: "✍️", text: "Seeds of your Common App / UCAS personal statement" },
      { icon: "🔮", text: "Honest exploration of your vision for the future" },
    ],
  },
  {
    id: "psychometric",
    step: "03",
    icon: "🧠",
    title: "Psychometric Assessment",
    tag: "Discovery · Step 03",
    desc: "A validated assessment designed to measure your cognitive strengths, personality traits, and areas for improvement — guiding your choice of academic interests, university shortlist, and activity selection with data rather than guesswork.",
    points: [
      { icon: "📊", text: "Identify academic strengths vs areas needing development" },
      { icon: "🧩", text: "Personality mapping to align activities with authentic self" },
      { icon: "🏛️", text: "University fit analysis based on learning style and environment" },
      { icon: "📌", text: "Input into subject selection and major exploration" },
    ],
  },
  {
    id: "theme",
    step: "04",
    icon: "🎯",
    title: "Application Theme & Strategy",
    tag: "Strategy · Step 04",
    desc: "Your personal brand roadmap — a year-by-year strategic plan that ties together academics, standardised testing, extracurriculars, and essays into one coherent, compelling narrative that admissions officers remember.",
    points: [
      { icon: "🗺️", text: "Multi-year roadmap: Grade 8 through submission day" },
      { icon: "🎭", text: "Core application theme that connects all profile elements" },
      { icon: "📐", text: "Sub-strategies for academics, SAT/AP, activities, and essays" },
      { icon: "🏁", text: "University shortlist framework: Dream / Match / Safety" },
    ],
  },
  {
    id: "consulting",
    step: "05",
    icon: "🤝",
    title: "1-on-1 Strategic Consulting",
    tag: "Guidance · Step 05",
    desc: "Weekly update meetings with your primary assigned EduQuest mentor to keep you on track with all deliverables. Plus personalised strategy sessions led by seasoned experts and former Ivy League admissions officers.",
    points: [
      { icon: "📅", text: "Weekly progress check-ins with your dedicated mentor" },
      { icon: "🎓", text: "Strategy sessions with former Ivy League admissions officers" },
      { icon: "🔄", text: "Real-time roadmap adjustments as results and opportunities arise" },
      { icon: "💬", text: "Essay feedback, interview prep, and decision support" },
    ],
  },
];

/* ── Component ── */
export default function WhatWeBuild() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* Which card is currently open — null = all closed */
  const [openId, setOpenId] = useState<string | null>(null);

  /* Active pillar data for the drawer */
  const activePillar = pillars.find((p) => p.id === openId) ?? null;

  /* Scroll-reveal */
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
      { threshold: 0.08 }
    );
    section.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Scroll drawer into view after it opens */
  useEffect(() => {
    if (openId && drawerRef.current) {
      setTimeout(() => {
        drawerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 60);
    }
  }, [openId]);

  /* Toggle a card — same card click closes it */
  function handleCardClick(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  /* Keyboard: Enter / Space to open card */
  function handleCardKeyDown(e: React.KeyboardEvent, id: string) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick(id);
    }
  }

  return (
    <section className={styles.section} id="resume-building">
      <div className={styles.container} ref={sectionRef}>

        {/* ── Header ── */}
        <div className={`${styles.headerWrap} ${styles.reveal}`}>
          <p className={styles.secLabel}>What We Build</p>
          <h2 className={styles.secHeading}>
            &ldquo;Résumé-building&rdquo;?<br />
            We help you craft <em>a story</em>.
          </h2>
          <p className={styles.secSub}>
            Based on your grade, our programme helps you identify your vision
            and build the right path through each of these pillars. Click any
            card to see what it means in practice.
          </p>
        </div>

        {/* ── Pillar cards grid ── */}
        <div className={`${styles.cardGrid} ${styles.reveal} ${styles.revealDelay1}`}>
          {pillars.map((pillar) => {
            const isOpen = openId === pillar.id;
            return (
              <div
                key={pillar.id}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-controls={`drawer-${pillar.id}`}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
                onClick={() => handleCardClick(pillar.id)}
                onKeyDown={(e) => handleCardKeyDown(e, pillar.id)}
              >
                <div className={styles.cardNum}>{pillar.step}</div>
                <span className={styles.cardIcon} aria-hidden="true">
                  {pillar.icon}
                </span>
                <div className={styles.cardTitle}>{pillar.title}</div>
                <span className={styles.cardArrow} aria-hidden="true">→</span>
              </div>
            );
          })}
        </div>

        {/* ── Expand drawer — shared, shown below grid ── */}
        <div
          ref={drawerRef}
          id={openId ? `drawer-${openId}` : undefined}
          role="region"
          aria-label={activePillar ? `Details: ${activePillar.title}` : undefined}
          className={`${styles.drawer} ${activePillar ? styles.drawerOpen : ""}`}
        >
          {activePillar && (
            <div className={styles.drawerInner}>
              {/* Left — tag + title + description */}
              <div>
                <span className={styles.drawerTag}>
                  {activePillar.icon}&nbsp; {activePillar.tag}
                </span>
                <h3 className={styles.drawerTitle}>{activePillar.title}</h3>
                <p className={styles.drawerDesc}>{activePillar.desc}</p>
              </div>

              {/* Right — bullet points */}
              <ul className={styles.drawerPoints}>
                {activePillar.points.map((pt) => (
                  <li key={pt.text} className={styles.drawerPoint}>
                    <span className={styles.drawerPointIcon} aria-hidden="true">
                      {pt.icon}
                    </span>
                    <span>{pt.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}