"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhatMakesUsDifferent.module.css";

/* ══════════════════════════════════════
   DATA PER EXAM
══════════════════════════════════════ */
interface Usp {
  icon: string;
  title: string;
  body: string;
}

interface ExamConfig {
  id: string;
  label: string;
  accentColor: string;
  headingLine1: string;
  headingEm: string;
  subtext: string;
  usps: Usp[];
}

const EXAM_DATA: ExamConfig[] = [
  /* ── IELTS ── */
  {
    id: "ielts",
    label: "IELTS",
    accentColor: "#d4a843",
    headingLine1: "IELTS Course Features",
    headingEm: "& USPs",
    subtext:
      "16 reasons why EduQuest's IELTS programme delivers results that other platforms simply cannot match.",
    usps: [
      { icon: "📅", title: "120-Day Access", body: "Flexible learning at your pace — no stress about exams or personal events interrupting your schedule." },
      { icon: "🔓", title: "No Fixed Start Dates", body: "Enroll anytime. Each session is structured to help you catch up seamlessly, wherever you join from." },
      { icon: "🎯", title: "Live Classes & Mock Tests", body: "Real-time interaction with experienced instructors and realistic test simulation — not just recorded videos." },
      { icon: "📚", title: "Comprehensive Resource Platform", body: "Access videos, practice exercises, mock tests, and grammar quizzes all in one integrated platform." },
      { icon: "🧩", title: "English Level Assessment", body: "Start with a proficiency test to join the right batch — Beginner or Advanced — for maximum efficiency." },
      { icon: "📊", title: "Performance Tracker", body: "Monitor your progress, track attendance, and measure skill improvement across all four modules." },
      { icon: "🎬", title: "Daily Video Library", body: "Engaging videos on vocabulary, synonyms, antonyms, and sentence usage — new content every day." },
      { icon: "🔀", title: "Shuffled Daily Videos", body: "Ensure variety and keep learning interesting with daily-shuffled content so you never hit a plateau." },
      { icon: "💡", title: "Expert Tips", body: "Learn from faculty members with over a decade of British Council experience and proven results." },
      { icon: "🎓", title: "IELTS Skill Improvement Videos", body: "Detailed guidance on all modules: Listening, Reading, Writing, and Speaking — every technique covered." },
      { icon: "🏆", title: "Master Classes for Higher Band", body: "Master Sessions by 15-years-experienced trainers designed to push you from Band 6.5 to Band 8+." },
      { icon: "🎙️", title: "Speaking Practice for Shy Learners", body: "Record your responses to practice and improve at your own pace — no pressure, full feedback." },
      { icon: "📶", title: "Beginner & Advanced Classes", body: "Tailored content for all levels, including specialised batches for complex modules like Task 2 Writing." },
      { icon: "📆", title: "Weekend Bonanza", body: "Saturday test analysis with Sunday Doubt-Solving Sessions — dedicated personalised guidance every week." },
      { icon: "🔤", title: "Grammar Foundation Building", body: "Quizzes to reinforce essential grammar rules and clear the conceptual gaps that cost you band scores." },
      { icon: "⚡", title: "All-in-One Platform", body: "Combines live classes, recorded sessions, and personal practice for truly holistic IELTS preparation." },
    ],
  },

  /* ── TOEFL ── */
  {
    id: "toefl",
    label: "TOEFL",
    accentColor: "#1a4a8a",
    headingLine1: "TOEFL Course Features",
    headingEm: "& USPs",
    subtext:
      "Everything that sets EduQuest's TOEFL iBT programme apart — built for North American university aspirants.",
    usps: [
      { icon: "🌐", title: "iBT-Focused Curriculum", body: "Every lesson is tailored to the internet-based TOEFL format — no outdated paper-test material." },
      { icon: "🎧", title: "Listening Mastery Drills", body: "Academic lecture simulations and conversation tasks that mirror real iBT listening passages." },
      { icon: "✍️", title: "Integrated Writing Tasks", body: "Practice the unique TOEFL task of synthesising listening and reading material into a cohesive essay." },
      { icon: "🗣️", title: "Speaking Response Templates", body: "Proven templates for all 4 speaking tasks — structured answers that score higher with AI raters." },
      { icon: "📖", title: "Academic Reading Speed Training", body: "Techniques to skim, scan, and comprehend dense academic passages within tight time limits." },
      { icon: "🏛️", title: "University-Specific Score Targets", body: "Customised coaching based on the TOEFL requirements of your target university and programme." },
      { icon: "🤖", title: "AI Scoring Familiarisation", body: "Understand how ETS's e-rater evaluates your speaking and writing to optimise your scoring strategy." },
      { icon: "📊", title: "Section-Wise Progress Reports", body: "Granular performance tracking across Reading, Listening, Speaking, and Writing sub-scores." },
      { icon: "🔁", title: "Unlimited Practice Tests", body: "Full-length iBT simulations with authentic question types and timed conditions." },
      { icon: "🧠", title: "Vocabulary for Academic English", body: "Targeted word lists curated from actual TOEFL passages across science, arts, and social sciences." },
      { icon: "💡", title: "Expert Faculty", body: "Coaches with first-hand TOEFL 110+ experience and years of helping students reach Ivy League cut-offs." },
      { icon: "📅", title: "Flexible Schedule", body: "Weekend and weekday batches — fit intensive prep around your school or college timetable." },
    ],
  },

  /* ── PTE ── */
  {
    id: "pte",
    label: "PTE",
    accentColor: "#1a6b2e",
    headingLine1: "PTE Academic Features",
    headingEm: "& USPs",
    subtext:
      "Why EduQuest's PTE Academic programme is the fastest route to a 79+ score for visa and university applications.",
    usps: [
      { icon: "🤖", title: "AI Scoring Decoded", body: "We break down exactly how Pearson's AI marks each task type — enabling you to game the system ethically." },
      { icon: "⚡", title: "Speed & Accuracy Training", body: "PTE rewards fast, fluent responses. Our drills build the muscle memory needed to answer confidently under pressure." },
      { icon: "🗣️", title: "Oral Fluency Bootcamp", body: "Targeted sessions on pronunciation, pacing, and rhythm — the three pillars of a high PTE Speaking score." },
      { icon: "📝", title: "Summarise Written Text Mastery", body: "A notoriously tricky task. We provide proven one-sentence templates that consistently score full marks." },
      { icon: "📖", title: "Re-Order Paragraphs Strategy", body: "Logical sequencing techniques that make re-ordering paragraph tasks predictable and fast." },
      { icon: "🎧", title: "Dictation & Fill-in-the-Blanks", body: "Intensive listening exercises targeting the high-weight tasks that most candidates lose easy marks on." },
      { icon: "✍️", title: "Essay Writing Frameworks", body: "Structured argument templates that let you write a 200-word academic essay in under 15 minutes." },
      { icon: "📊", title: "Enabling Skills Tracker", body: "Monitor your Grammar, Oral Fluency, Pronunciation, Spelling, Vocabulary, and Written Discourse scores separately." },
      { icon: "🔁", title: "Full Mock Tests with Feedback", body: "Timed PTE Academic simulations with detailed AI-aligned score reports after every attempt." },
      { icon: "🏆", title: "79+ Score Guarantee Pathway", body: "Structured milestones and checkpoints to ensure you reach the 79+ needed for Australian visa applications." },
      { icon: "📅", title: "48-Hour Result Prep", body: "Since PTE results come in 48 hrs, our rapid re-attempt coaching gets you back on track in days, not weeks." },
      { icon: "💡", title: "Expert PTE Trainers", body: "Faculty with PTE scores of 85+ who understand the AI marking system from a test-taker's perspective." },
    ],
  },

  /* ── DUOLINGO ── */
  {
    id: "duolingo",
    label: "Duolingo",
    accentColor: "#3a9a00",
    headingLine1: "Duolingo English Test Features",
    headingEm: "& USPs",
    subtext:
      "EduQuest's DET programme — compact, modern, and built for the test that's reshaping university admissions globally.",
    usps: [
      { icon: "🦉", title: "DET Format Deep-Dive", body: "Complete walkthrough of every task type in the Duolingo English Test, from Read Aloud to Writing Sample." },
      { icon: "🏠", title: "At-Home Test Simulation", body: "Practice in real test conditions — quiet room, webcam on, microphone active — exactly how DET is administered." },
      { icon: "⏱️", title: "60-Minute Sprint Training", body: "The DET takes under an hour. Our coaching builds the concentration and pacing to peak within that window." },
      { icon: "🎙️", title: "Speaking Confidence Builder", body: "Read-aloud and speak-about-the-photo tasks demand fluency without preparation time. We fix that." },
      { icon: "🔤", title: "Real Word vs Fake Word Drill", body: "Master the unique 'Is this a real English word?' task with vocabulary recognition exercises." },
      { icon: "✍️", title: "Interactive Writing Tasks", body: "Coaching on writing prompts that appear mid-test — structured approach to the open-ended essay section." },
      { icon: "📖", title: "Read & Complete Strategy", body: "Techniques for the fill-in-the-letter task that trains pattern recognition at speed." },
      { icon: "🎧", title: "Listen & Type Accuracy", body: "High-accuracy transcription drills that target the most error-prone task in the DET." },
      { icon: "📊", title: "Subscores Strategy", body: "Understand how Literacy, Comprehension, Conversation, and Production subscores affect your overall DET score." },
      { icon: "🏛️", title: "University Matching Service", body: "We map your target DET score to specific university requirements across the US, UK, Canada, and Australia." },
      { icon: "💸", title: "Most Affordable Prep", body: "DET costs $59. Our coaching is priced to match — high quality, no bloated pricing." },
      { icon: "⚡", title: "Results in 48 Hours", body: "With fast results comes fast decisions. We prep you to be re-attempt-ready within 72 hours if needed." },
    ],
  },
];

/* ══════════════════════════════════════
   USP CARD
══════════════════════════════════════ */
function UspCard({
  usp,
  index,
  accentColor,
}: {
  usp: Usp;
  index: number;
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const badge = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      style={{
        animationDelay: `${index * 0.048}s`,
        "--card-accent": accentColor,
      } as React.CSSProperties}
    >
      {/* shimmer sweep */}
      <div className={styles.shimmer} aria-hidden="true" />

      {/* top row */}
      <div className={styles.cardTop}>
        <div
          className={`${styles.iconWrap} ${visible ? styles.iconVisible : ""}`}
          style={{ animationDelay: `${index * 0.048 + 0.18}s` }}
        >
          <span className={styles.iconEmoji} aria-hidden="true">{usp.icon}</span>
        </div>
        <span
          className={`${styles.badge} ${visible ? styles.badgeVisible : ""}`}
          style={{ animationDelay: `${index * 0.048 + 0.28}s` }}
          aria-hidden="true"
        >
          {badge}
        </span>
      </div>

      <h4 className={styles.cardTitle}>{usp.title}</h4>
      <p className={styles.cardBody}>{usp.body}</p>

      {/* bottom gold line */}
      <div className={styles.cardUnderline} aria-hidden="true" />
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════ */
export default function WhatMakesUsDifferent() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  const [activeId, setActiveId] = useState("ielts");
  const [displayId, setDisplayId] = useState("ielts");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleTab = (id: string) => {
    if (id === activeId || animating) return;
    setAnimating(true);
    // fade out → swap → fade in
    setTimeout(() => {
      setDisplayId(id);
      setActiveId(id);
      setAnimating(false);
    }, 280);
  };

  const exam = EXAM_DATA.find((e) => e.id === displayId)!;

  return (
    <section className={styles.section} id="usps">
      {/* background textures */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── TAB ROW ── */}
        <div
          className={`${styles.tabRow} ${headVisible ? styles.tabRowVisible : ""}`}
          role="tablist"
          aria-label="Select exam"
        >
          {EXAM_DATA.map((e) => (
            <button
              key={e.id}
              role="tab"
              aria-selected={activeId === e.id}
              className={styles.tabBtn}
              data-active={activeId === e.id}
              style={{ "--tab-accent": e.accentColor } as React.CSSProperties}
              onClick={() => handleTab(e.id)}
            >
              <span className={styles.tabBtnInk} aria-hidden="true" />
              {e.label}
            </button>
          ))}
        </div>

        {/* ── SECTION HEADER ── */}
        <div
          ref={headRef}
          className={`${styles.header} ${headVisible ? styles.headerVisible : ""}`}
          data-animating={animating}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} aria-hidden="true" />
            What Makes Us Different
          </div>
          <h2 className={styles.heading}>
            {exam.headingLine1}
            <br />
            <em
              className={styles.headingEm}
              style={{ color: exam.accentColor }}
            >
              {exam.headingEm}
            </em>
          </h2>
          <p className={styles.subtext}>{exam.subtext}</p>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          className={styles.grid}
          data-animating={animating}
          role="tabpanel"
        >
          {exam.usps.map((usp, i) => (
            <UspCard
              key={`${exam.id}-${usp.title}`}
              usp={usp}
              index={i}
              accentColor={exam.accentColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}