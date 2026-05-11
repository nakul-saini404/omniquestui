"use client";

import { useState } from "react";
import styles from "./APSubjects.module.css";

// ── Types ──────────────────────────────────────────────────────────────────────
type Category = "all" | "stem" | "humanities" | "social" | "arts";

interface Subject {
  name: string;
  credits: string;
  duration: string;
  format: string;
  description: string;
  difficulty: number; // 1–5
  category: Exclude<Category, "all">;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const SUBJECTS: Subject[] = [
  // STEM
  {
    name: "AP Calculus BC",
    credits: "5 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description:
      "Covers limits, derivatives, integrals, series, and multivariable calculus. Highest college credit value in STEM. Equivalent to Calc I + II.",
    difficulty: 5,
    category: "stem",
  },
  {
    name: "AP Calculus AB",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description:
      "Limits, derivatives, and integrals. Equivalent to a one-semester college calculus course. Prerequisite for Calc BC.",
    difficulty: 4,
    category: "stem",
  },
  {
    name: "AP Physics C: Mechanics",
    credits: "4 Credits",
    duration: "1h 30m",
    format: "MCQ + FRQ",
    description:
      "Calculus-based Mechanics covering kinematics, Newton's laws, energy, momentum, rotation, and oscillations. Top choice for engineers.",
    difficulty: 5,
    category: "stem",
  },
  {
    name: "AP Physics C: E&M",
    credits: "4 Credits",
    duration: "1h 30m",
    format: "MCQ + FRQ",
    description:
      "Calculus-based Electricity & Magnetism. Coulomb's law, circuits, Gauss's law, magnetic fields, Faraday's law, and Maxwell's equations.",
    difficulty: 5,
    category: "stem",
  },
  {
    name: "AP Chemistry",
    credits: "5 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description:
      "Atomic structure, bonding, thermodynamics, kinetics, equilibrium, electrochemistry. Equivalent to full-year college general chemistry.",
    difficulty: 5,
    category: "stem",
  },
  {
    name: "AP Biology",
    credits: "4 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description:
      "Cell biology, genetics, evolution, ecology, and molecular biology. High lab component. Excellent for pre-med and biology majors.",
    difficulty: 4,
    category: "stem",
  },
  {
    name: "AP Computer Science A",
    credits: "4 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description:
      "Java programming, OOP, data structures, algorithms, and problem-solving. Essential for CS majors. One of the highest-scoring AP exams.",
    difficulty: 4,
    category: "stem",
  },
  {
    name: "AP Statistics",
    credits: "3 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description:
      "Exploring data, sampling, probability, statistical inference, and regression. Valuable for business, social science, and STEM students.",
    difficulty: 3,
    category: "stem",
  },
  // HUMANITIES
  {
    name: "AP English Language",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description:
      "Rhetoric, argumentation, and synthesis. Critical analysis of non-fiction texts. Now available in digital format. Universally useful for gen-ed.",
    difficulty: 3,
    category: "humanities",
  },
  {
    name: "AP English Literature",
    credits: "3 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description:
      "Literary analysis of poetry, prose, and drama. Close reading, thematic analysis, and essay writing. Now available in digital format.",
    difficulty: 3,
    category: "humanities",
  },
  // SOCIAL
  {
    name: "AP Microeconomics",
    credits: "3 Credits",
    duration: "2h 10m",
    format: "MCQ + FRQ",
    description:
      "Supply & demand, market structures, factor markets, market failures, and government intervention. Foundation for economics majors.",
    difficulty: 3,
    category: "social",
  },
  {
    name: "AP Macroeconomics",
    credits: "3 Credits",
    duration: "2h 10m",
    format: "MCQ + FRQ",
    description:
      "GDP, monetary policy, fiscal policy, inflation, unemployment, and international trade. Often taken alongside Microeconomics.",
    difficulty: 3,
    category: "social",
  },
  {
    name: "AP Psychology",
    credits: "3 Credits",
    duration: "2h",
    format: "MCQ + FRQ",
    description:
      "History of psychology, biological bases, sensation, cognition, development, personality, and abnormal psychology. Very high pass rate.",
    difficulty: 2,
    category: "social",
  },
  {
    name: "AP World History: Modern",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + SAQ + DBQ",
    description:
      "Patterns in global history from 1200 CE to present. Excellent for humanities and social science majors. Now available in digital format.",
    difficulty: 3,
    category: "social",
  },
  // ARTS
  {
    name: "AP CS Principles",
    credits: "3 Credits",
    duration: "2h",
    format: "Digital + Portfolio",
    description:
      "Intro to computational thinking, algorithms, data, and digital innovation. Less rigorous than CS-A, but valuable for non-CS majors.",
    difficulty: 2,
    category: "arts",
  },
  {
    name: "AP Seminar",
    credits: "Profile",
    duration: "Portfolio",
    format: "Research-based",
    description:
      "Research, analysis, and argument. Great for building research skills and college application profiles. Part of the AP Capstone Diploma program.",
    difficulty: 3,
    category: "arts",
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All Subjects", value: "all" },
  { label: "STEM", value: "stem" },
  { label: "Humanities", value: "humanities" },
  { label: "Social Sciences", value: "social" },
  { label: "Arts & Others", value: "arts" },
];

// ── Sub-components ─────────────────────────────────────────────────────────────
function DifficultyDots({ level }: { level: number }) {
  return (
    <div className={styles.diffDots}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`${styles.diffDot} ${i < level ? styles.diffDotFilled : ""}`}
        />
      ))}
    </div>
  );
}

function SubjectCard({ subject }: { subject: Subject }) {
  return (
    <div className={styles.subjectCard}>
      <div className={styles.cardHeader}>
        <div className={styles.subjectName}>{subject.name}</div>
        <div className={styles.credits}>{subject.credits}</div>
      </div>

      <div className={styles.cardMeta}>
        <span className={styles.tag}>⏱ {subject.duration}</span>
        <span className={styles.tag}>📊 {subject.format}</span>
      </div>

      <p className={styles.cardDesc}>{subject.description}</p>

      <div className={styles.difficultyRow}>
        <span className={styles.diffLabel}>Difficulty:</span>
        <DifficultyDots level={subject.difficulty} />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function APSubjects() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filtered =
    activeTab === "all"
      ? SUBJECTS
      : SUBJECTS.filter((s) => s.category === activeTab);

  return (
    <section id="subjects" className={styles.section} aria-labelledby="subjects-heading">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span>AP Subjects We Coach</span>
          </div>
          <h2 id="subjects-heading" className={styles.heading}>
            30+ AP Subjects.<br />
            <span className={styles.highlight}>One Expert Platform.</span>
          </h2>
          <p className={styles.subheading}>
            EduQuest coaches all major AP subjects with specialist faculty — not generalist tutors.
            Every teacher has AP-specific expertise.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Filter AP subjects by category">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              role="tab"
              aria-selected={activeTab === tab.value}
              className={`${styles.tabBtn} ${activeTab === tab.value ? styles.tabBtnActive : ""}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid} role="tabpanel">
          {filtered.map((subject) => (
            <SubjectCard key={subject.name} subject={subject} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className={styles.footer}>
          <p className={styles.footerNote}>
            Don't see your AP subject? EduQuest coaches 30+ AP subjects.
          </p>
          <a href="#enroll" className={styles.ghostBtn}>
            Ask About Your Subject →
          </a>
        </div>

      </div>
    </section>
  );
}