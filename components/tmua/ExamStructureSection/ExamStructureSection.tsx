"use client";

import styles from "./ExamStructureSection.module.css";

interface Paper {
  badge: string;
  title: string;
  duration: string;
  focus: string;
  skills: string;
  pitfall: string;
}

const PAPERS: Paper[] = [
  {
    badge: "Paper 1",
    title: "Mathematical Thinking",
    duration: "75 minutes | Multiple Choice",
    focus:
      "Understanding and analyzing mathematical arguments — logic, comprehension, argument structure, and fundamental problem-solving.",
    skills:
      "Logic gates, conditional statements, truth tables, valid argument identification, De Morgan's Laws, contrapositive reasoning.",
    pitfall:
      "Confusing the inverse of a statement with its contrapositive — a mistake that eliminates many students on Paper 1.",
  },
  {
    badge: "Paper 2",
    title: "Mathematical Reasoning",
    duration: "75 minutes | Multiple Choice",
    focus:
      "Applying mathematical concepts and techniques to solve novel, unseen problems at speed and under pressure.",
    skills:
      "Algebra, calculus, trigonometry, sequences and series, graph interpretation, coordinate geometry, proof techniques.",
    pitfall:
      "Spending too long on a single question. Practice timed drills and reverse-engineering MCQ options to stay on pace.",
  },
];

interface SyllabusItem {
  icon: string;
  label: string;
}

const SYLLABUS: SyllabusItem[] = [
  { icon: "🔢", label: "Algebra & Functions" },
  { icon: "📐", label: "Coordinate Geometry" },
  { icon: "〰️", label: "Trigonometry" },
  { icon: "♾️",  label: "Sequences & Series" },
  { icon: "∫",   label: "Differentiation & Integration" },
  { icon: "📊", label: "Graph Sketching & Analysis" },
  { icon: "🔍", label: "Proof Techniques & Logic" },
  { icon: "🔢", label: "Basic Number Theory" },
];

export default function ExamStructureSection() {
  return (
    <section id="exam" className={styles.examSection}>
      <div className={styles.container}>

        <span className={styles.tag}>Structure</span>
        <h2 className={styles.sectionTitle}>TMUA Exam Pattern &amp; Syllabus Overview</h2>
        <p className={styles.sectionSub}>
          Two 75-minute multiple-choice papers, each testing a distinct mathematical
          skill set. Understanding the structure is the first step to a 7.0+ score.
        </p>

        {/* Paper cards */}
        <div className={styles.patternGrid}>
          {PAPERS.map((paper) => (
            <div key={paper.badge} className={styles.paperCard}>
              <div className={styles.paperHeader}>
                <span className={styles.paperBadge}>{paper.badge}</span>
                <h3 className={styles.paperTitle}>{paper.title}</h3>
              </div>
              <div className={styles.paperBody}>
                <p>
                  <strong>Duration:</strong> {paper.duration}
                </p>
                <p>
                  <strong>Focus:</strong> {paper.focus}
                </p>
                <p>
                  <strong>Skills Tested:</strong> {paper.skills}
                </p>
                <p>
                  <strong>Key Pitfall:</strong> {paper.pitfall}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Critical note */}
        <div className={styles.noteBar}>
          <span className={styles.noteIcon}>⚠️</span>
          <span className={styles.noteText}>
            <strong>Critical Note:</strong> Calculators are{" "}
            <strong>not allowed</strong> in either paper. Mental math fluency and
            algebraic manipulation speed are fundamental to a high TMUA score.
          </span>
        </div>

        {/* Syllabus grid */}
        <div className={styles.syllabusSection}>
          <h3 className={styles.syllabusHeading}>Syllabus Key Areas</h3>
          <div className={styles.syllabusGrid}>
            {SYLLABUS.map(({ icon, label }) => (
              <div key={label} className={styles.syllabusItem}>
                <div className={styles.syllabusIcon}>{icon}</div>
                <p className={styles.syllabusLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}