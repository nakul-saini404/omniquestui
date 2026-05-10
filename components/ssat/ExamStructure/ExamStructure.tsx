"use client";

import { useState } from "react";
import styles from "./ExamStructure.module.css";

/* ── Types ──────────────────────────────────── */
type TabId = "elementary" | "middle" | "upper";

interface MetaRow {
  key: string;
  val: string;
}

interface ExamCard {
  icon: string;
  section: string;
  title: string;
  meta: MetaRow[];
  topics: string[];
  experimental?: boolean;
}

interface LevelData {
  id: TabId;
  label: string;
  cards: ExamCard[];
  note: {
    heading: string;
    body: string;
  };
}

/* ── Static data ─────────────────────────────── */
const levels: LevelData[] = [
  {
    id: "elementary",
    label: "Elementary (Gr 3–4)",
    cards: [
      {
        icon: "📖",
        section: "Section 1",
        title: "Reading",
        meta: [
          { key: "Questions", val: "28 MCQs" },
          { key: "Passages", val: "7 short passages" },
          { key: "Formats", val: "Prose, poetry, fiction, nonfiction" },
        ],
        topics: ["Main idea", "Inference", "Vocabulary in context", "Tone & purpose"],
      },
      {
        icon: "🔢",
        section: "Section 2",
        title: "Math",
        meta: [
          { key: "Format", val: "MCQ" },
          { key: "Level", val: "Grades 3–4 concepts" },
        ],
        topics: [
          "Arithmetic (+ − × ÷)",
          "Measurement",
          "Geometry basics",
          "Graphs",
          "Ordering numbers",
        ],
      },
      {
        icon: "💬",
        section: "Section 3",
        title: "Verbal",
        meta: [
          { key: "Question types", val: "Synonyms & Analogies" },
          { key: "Topics", val: "Science, tech, social studies" },
        ],
        topics: [
          "Synonyms",
          "Word relationships",
          "Analogy patterns",
          "Advanced vocabulary (Gr 4)",
        ],
      },
      {
        icon: "✏️",
        section: "Section 4",
        title: "Writing Sample",
        meta: [
          { key: "Prompt", val: "Picture-based story" },
          { key: "Scored?", val: "No — shared with schools" },
          { key: "Duration", val: "Included in 2 hr 5 min total" },
        ],
        topics: ["Clear beginning–middle–end", "Grammar", "Creativity"],
      },
    ],
    note: {
      heading: "⏱ Elementary Level Duration: 2 Hours 5 Minutes",
      body: "Designed for students in Grades 3 and 4. The writing sample is unscored but reviewed by admissions officers as a direct sample of the student's writing ability. Arrive at the test centre 30 minutes early with admission ticket, sharpened pencils, and eraser.",
    },
  },
  {
    id: "middle",
    label: "Middle (Gr 5–7)",
    cards: [
      {
        icon: "✏️",
        section: "Section 1 · Unscored",
        title: "Writing Sample",
        meta: [
          { key: "Time", val: "25 minutes" },
          { key: "Prompts", val: "Choose 1 of 2" },
          { key: "Scored?", val: "No — shared with schools" },
        ],
        topics: ["Creative writing", "Structure", "Grammar & syntax"],
      },
      {
        icon: "🔢",
        section: "Section 2 & 4",
        title: "Math (x2 sections)",
        meta: [
          { key: "Questions", val: "50 MCQs total" },
          { key: "Time", val: "~30 min per section" },
        ],
        topics: [
          "Number concepts & operations",
          "Ratios & percentages",
          "Algebra basics",
          "Geometry & measurement",
          "Probability & data analysis",
          "Exponents",
        ],
      },
      {
        icon: "📖",
        section: "Section 3",
        title: "Reading",
        meta: [
          { key: "Time", val: "40 minutes" },
          { key: "Passage length", val: "~250–350 words" },
          { key: "Genres", val: "Humanities, Science, Fiction, Social Studies" },
        ],
        topics: [
          "Author's purpose",
          "Tone & attitude",
          "Inference",
          "Argument evaluation",
        ],
      },
      {
        icon: "💬",
        section: "Section 5",
        title: "Verbal",
        meta: [
          { key: "Question types", val: "Synonyms & Analogies" },
          { key: "Questions", val: "60 questions" },
        ],
        topics: ["Synonyms", "Word analogies", "Advanced vocabulary"],
      },
      {
        icon: "🔬",
        section: "Experimental · Unscored",
        title: "Experimental Section",
        meta: [
          { key: "Scored?", val: "No — used for research" },
          { key: "Note", val: "Position varies; cannot be identified" },
        ],
        topics: ["May appear as Math or Verbal"],
        experimental: true,
      },
    ],
    note: {
      heading: "⏱ Middle Level Duration: 3 Hours 10 Minutes",
      body: "Designed for students in Grades 5–7. The writing section comes first and is followed by a 5-minute break. The unscored experimental section may appear anywhere in the test — treat every section as if it counts. 5th graders may need to learn some new concepts not yet covered in their school curriculum.",
    },
  },
  {
    id: "upper",
    label: "Upper (Gr 8–11)",
    cards: [
      {
        icon: "✏️",
        section: "Section 1 · Unscored",
        title: "Writing Sample",
        meta: [
          { key: "Time", val: "25 minutes" },
          { key: "Prompts", val: "Choose 1 of 2" },
        ],
        topics: [
          "Creative prompt",
          "Traditional/essay prompt",
          "Grammar & syntax",
        ],
      },
      {
        icon: "🔢",
        section: "Section 2 & 4",
        title: "Math (x2 sections)",
        meta: [
          { key: "Questions", val: "50 MCQs total" },
          { key: "Level", val: "Advanced concepts" },
        ],
        topics: [
          "Number concepts & operations",
          "Algebra",
          "Geometry (coordinate, parallel lines)",
          "Probability & data analysis",
          "Sequences & estimation",
        ],
      },
      {
        icon: "📖",
        section: "Section 3",
        title: "Reading",
        meta: [
          { key: "Time", val: "40 minutes" },
          { key: "Genres", val: "Humanities, Science, Fiction, Social Studies" },
        ],
        topics: [
          "Advanced inference",
          "Argument evaluation",
          "Tone & attitude",
          "Vocabulary in context",
        ],
      },
      {
        icon: "💬",
        section: "Section 5",
        title: "Verbal",
        meta: [
          { key: "Question types", val: "Synonyms & Analogies" },
          { key: "Level", val: "Advanced vocabulary" },
        ],
        topics: [
          "Advanced synonyms",
          "Complex analogies",
          "SAT-level vocabulary",
        ],
      },
      {
        icon: "🔬",
        section: "Experimental · Unscored",
        title: "Experimental Section",
        meta: [{ key: "Scored?", val: "No — used for research" }],
        topics: ["Cannot be identified during the test"],
        experimental: true,
      },
    ],
    note: {
      heading: "⏱ Upper Level Duration: 3 Hours 10 Minutes",
      body: "Designed for students in Grades 8–11. Same structure as Middle Level but with significantly advanced questions. The upper level requires a strong vocabulary foundation and solid command of algebra, geometry, and data analysis. This is the most competitive level with the most selective schools evaluating performance.",
    },
  },
];

/* ── Component ───────────────────────────────── */
export default function ExamStructure() {
  const [activeTab, setActiveTab] = useState<TabId>("elementary");

  const activeLevel = levels.find((l) => l.id === activeTab)!;

  return (
    <section className={styles.examSection} id="structure">
      <div className={styles.container}>
        {/* ── Section header ── */}
        <div className={styles.sectionHead}>
          <span className={styles.sectionLabel}>Exam Structure</span>
          <h2 className={styles.sectionTitle}>
            SSAT Exam <em>Structure</em> &amp; Sections
          </h2>
          <p className={styles.sectionSub}>
            The SSAT has three levels. Select your level below to see the full
            section-wise breakdown, time allotted, and topics covered.
          </p>
        </div>

        {/* ── Level tabs ── */}
        <div className={styles.levelTabs} role="tablist">
          {levels.map((level) => (
            <button
              key={level.id}
              role="tab"
              aria-selected={activeTab === level.id}
              aria-controls={`tabpanel-${level.id}`}
              className={
                activeTab === level.id
                  ? `${styles.tabBtn} ${styles.tabBtnActive}`
                  : styles.tabBtn
              }
              onClick={() => setActiveTab(level.id)}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* ── Active tab panel ── */}
        {levels.map((level) => (
          <div
            key={level.id}
            id={`tabpanel-${level.id}`}
            role="tabpanel"
            aria-hidden={activeTab !== level.id}
            className={
              activeTab === level.id
                ? `${styles.tabPanel} ${styles.tabPanelActive}`
                : styles.tabPanel
            }
          >
            {/* Cards grid */}
            <div className={styles.examGrid}>
              {level.cards.map((card) => (
                <div
                  key={card.title}
                  className={
                    card.experimental
                      ? `${styles.examCard} ${styles.examCardExperimental}`
                      : styles.examCard
                  }
                >
                  <span className={styles.examCardIcon} aria-hidden="true">
                    {card.icon}
                  </span>
                  <div className={styles.examCardSection}>{card.section}</div>
                  <div className={styles.examCardTitle}>{card.title}</div>

                  {/* Meta rows */}
                  <div className={styles.examCardMeta}>
                    {card.meta.map((row) => (
                      <div key={row.key} className={styles.examMetaRow}>
                        <span className={styles.metaKey}>{row.key}</span>
                        <span className={styles.metaVal}>{row.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Topic tags */}
                  <div className={styles.examTopics}>
                    {card.topics.map((topic) => (
                      <span key={topic} className={styles.examTopicTag}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Duration note box */}
            <div className={styles.noteBox}>
              <h4>{level.note.heading}</h4>
              <p>{level.note.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}