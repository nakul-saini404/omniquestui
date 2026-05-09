"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExamPattern.module.css";

/* ── Data ─────────────────────────────────────────────── */

const summaryStats = [
  {
    value: "~2 Hours",
    label: "Total test duration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "3 Sections",
    label: "Speaking+Writing · Reading · Listening",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    value: "74 Questions",
    label: "Approx. across all sections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

type Tab = "sw" | "rd" | "ls";

const tabs: { id: Tab; label: string }[] = [
  { id: "sw", label: "Speaking & Writing" },
  { id: "rd", label: "Reading" },
  { id: "ls", label: "Listening" },
];

const tabContent: Record<Tab, { num: number; title: string; desc: string }[]> = {
  sw: [
    { num: 1, title: "Personal Introduction", desc: "A brief unscored introduction recorded at the start of the test to help institutions understand the candidate." },
    { num: 2, title: "Read Aloud", desc: "Read a text of up to 60 words aloud. Scored on reading and speaking — fluency and pronunciation are key." },
    { num: 3, title: "Repeat Sentence", desc: "Listen to a sentence and repeat it exactly. Tests both listening and speaking simultaneously." },
    { num: 4, title: "Describe Image", desc: "Describe a graph, chart, map or picture in 40 seconds. Tests the ability to convey data accurately in spoken English." },
    { num: 5, title: "Re-tell Lecture", desc: "After listening to a lecture, summarise its key points in 40 seconds. A high-value task for both listening and speaking scores." },
    { num: 6, title: "Answer Short Question", desc: "Listen to a question and give a one or two word answer. Tests everyday vocabulary and listening comprehension." },
    { num: 7, title: "Summarise Written Text", desc: "Read a passage and write a one-sentence summary (5–75 words) in 10 minutes. Tests both reading and writing skills." },
    { num: 8, title: "Essay (20 Minutes)", desc: "Write an argumentative essay of 200–300 words on an academic topic. This is the most heavily weighted writing task." },
  ],
  rd: [
    { num: 1, title: "R&W Fill in the Blanks", desc: "A reading passage with blanks. Choose from a dropdown list to fill each gap. Tests both reading comprehension and vocabulary." },
    { num: 2, title: "Multiple Choice — Multiple Answers", desc: "Read a passage and choose more than one correct response. Incorrect answers carry a negative mark, so careful reading is critical." },
    { num: 3, title: "Re-order Paragraphs", desc: "Arrange text boxes into a logical order to reconstruct the original passage. Tests understanding of discourse and cohesion." },
    { num: 4, title: "Reading Fill in the Blanks", desc: "Drag words from a box into the correct gaps in a passage. Tests vocabulary range and reading accuracy." },
    { num: 5, title: "Multiple Choice — Single Answer", desc: "Read a passage and choose the one correct response from several options. Tests comprehension of the main idea or detail." },
  ],
  ls: [
    { num: 1, title: "Summarise Spoken Text", desc: "Listen to a recording and write a summary (50–70 words) in 10 minutes. Scores both listening and writing." },
    { num: 2, title: "Multiple Choice — Multiple Answers", desc: "Listen to a recording and select more than one correct answer. Negative marking applies." },
    { num: 3, title: "Fill in the Blanks", desc: "Listen to a recording and type the missing words into the transcript. Tests listening accuracy and spelling simultaneously." },
    { num: 4, title: "Highlight Correct Summary", desc: "Listen to a recording and choose the paragraph that best summarises it. Tests comprehension of the overall message." },
    { num: 5, title: "Multiple Choice — Single Answer", desc: "Choose the correct response to a question about a listening passage." },
    { num: 6, title: "Select Missing Word", desc: "Listen to a recording where the last word or phrase is replaced by a beep. Choose the most appropriate word from the options." },
    { num: 7, title: "Highlight Incorrect Words", desc: "Listen to a recording while reading the transcript. Click on words that differ from what you hear. A high-frequency, high-stakes task." },
    { num: 8, title: "Write From Dictation", desc: "Listen to a sentence and type it exactly. One of the most impactful tasks for both listening and writing scores." },
  ],
};

/* ── Component ─────────────────────────────────────────── */

export default function ExamPattern() {
  const [activeTab, setActiveTab] = useState<Tab>("sw");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll(
      `.${styles.sectionHead}, .${styles.psumm}, .${styles.patternCard}`
    );
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section className={styles.examPattern} ref={sectionRef}>
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.sectionHead} ${styles.center}`}>
          <div className={styles.sectionLabel}>Exam Pattern</div>
          <h2>PTE Exam Pattern</h2>
          <p>The PTE Academic test lasts approximately 2 hours and is divided into three main sections.</p>
        </div>

        {/* Summary Stats */}
        <div className={styles.patternSummary}>
          {summaryStats.map(({ value, label, icon }) => (
            <div key={value} className={styles.psumm}>
              <div className={styles.psummIcon}>{icon}</div>
              <div>
                <div className={styles.psummVal}>{value}</div>
                <div className={styles.psummLbl}>{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className={styles.patternTabs}>
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.ptab} ${activeTab === id ? styles.active : ""}`}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.ptabContent}>
          {tabContent[activeTab].map(({ num, title, desc }) => (
            <div key={num} className={styles.patternCard}>
              <div className={styles.patternCardNum}>{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}