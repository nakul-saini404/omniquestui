"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./PreApSections.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────────────── */
function useReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

/* ─────────────────────────────────────────────────────────
   SECTION 1 — THE HARD TRUTH
───────────────────────────────────────────────────────── */

const FAIL_REASONS = [
  {
    icon: "⏰",
    title: "Starting Too Late",
    body: "Most students begin AP prep 8–12 weeks before the exam. College Board content requires 6–18 months of conceptual build-up. Cramming a year's worth of material in weeks leads to surface-level recall — not the analytical depth AP questions demand.",
  },
  {
    icon: "📚",
    title: "Weak Foundational Knowledge",
    body: "AP Chemistry assumes mastery of Moles and Equilibrium. AP Calculus BC assumes fluency in limits and derivatives. Students who skip the foundation and jump into AP content consistently struggle with multi-step problems and free-response questions.",
  },
  {
    icon: "🎯",
    title: "No Personalised Strategy",
    body: "Generic coaching and YouTube playlists treat all students the same. AP exams have 19+ skill clusters, and each student's gap profile is different. Without a diagnostic-driven plan, students spend time on what they already know and neglect their actual weak areas.",
  },
  {
    icon: "📝",
    title: "Poor Free-Response Technique",
    body: "Free-response questions account for 40–50% of AP scores, yet most students practise almost exclusively on multiple-choice. Learning how to structure FRQ answers — with the right vocabulary, data citation, and argumentation — requires months of deliberate practice.",
  },
  {
    icon: "🧪",
    title: "No Real Mock Testing",
    body: "Students who haven't taken full-length, timed, exam-condition mock tests before May are almost always surprised by the pacing and mental stamina required. AP exams are 3+ hours — familiarity with exam conditions is a performance factor in itself.",
  },
  {
    icon: "🧩",
    title: "Subject-Only Focus",
    body: "AP is not just about knowing Biology or History — it is about communicating that knowledge in College Board's specific style. Students who learn content without simultaneously learning how AP frames and weights questions consistently underperform relative to their knowledge level.",
  },
  {
    icon: "😰",
    title: "Exam Anxiety & Burnout",
    body: "Grade 12 students juggling SAT, school board exams, extracurriculars, and college applications simultaneously often hit burnout by April. Pre-AP students spread their load across Grades 9–11, arriving at Grade 12 calmer and better prepared.",
  },
  {
    icon: "🗺️",
    title: "No Long-Term Roadmap",
    body: "Students who choose AP subjects randomly — without aligning them to their intended major, target universities, or academic strengths — often take too many or the wrong combination. A strategic AP subject selection plan is as important as the coaching itself.",
  },
];

const SCORE_ROWS = [
  {
    label: "Score 5 (Extremely Well Qualified)",
    pct: "~15%",
    width: "15%",
    fillClass: "fillGold" as const,
    redPct: false,
  },
  {
    label: "Score 4 (Well Qualified)",
    pct: "~20%",
    width: "20%",
    fillClass: "fillGold2" as const,
    redPct: false,
  },
  {
    label: "Score 3 (Qualified)",
    pct: "~25%",
    width: "25%",
    fillClass: "fillGrey" as const,
    redPct: false,
  },
  {
    label: "Score 1–2 (Not Qualified)",
    pct: "~40%",
    width: "40%",
    fillClass: "fillRed" as const,
    redPct: true,
  },
];

export function HardTruthSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionCream2}`}
      id="why-fail"
    >
      <div className={styles.inner}>
        <div className={`${styles.hdr} ${styles.reveal}`}>
          <span className={styles.sTag}>The Hard Truth</span>
          <span className={styles.goldLine} />
          <h2 className={styles.sHead}>
            Why Most Students Struggle in AP Exams
          </h2>
          <p className={styles.sSub}>
            Understanding the root causes of poor AP performance is the first
            step to avoiding them. These are the patterns we see most often —
            and exactly what Pre-AP coaching is designed to fix.
          </p>
        </div>

        <div className={styles.failIntro}>
          <div className={styles.reveal}>
            <div className={styles.failStatBlock}>
              <div className={styles.bigNum}>60%</div>
              <div className={styles.bigLbl}>
                of AP students globally score 2 or below — not because they
                aren't smart, but because they start too late and study the
                wrong way.
              </div>
            </div>

            <div className={styles.scoreDistCard}>
              <h4 className={styles.scoreDistTitle}>
                The Score Distribution Reality
              </h4>
              <div className={styles.scoreDistRows}>
                {SCORE_ROWS.map((row) => (
                  <div key={row.label} className={styles.scoreRow}>
                    <div className={styles.scoreRowMeta}>
                      <span>{row.label}</span>
                      <span
                        className={
                          row.redPct
                            ? styles.scoreRowPctRed
                            : styles.scoreRowPct
                        }
                      >
                        {row.pct}
                      </span>
                    </div>
                    <div className={styles.scoreBar}>
                      <div
                        className={`${styles.scoreBarFill} ${styles[row.fillClass]}`}
                        style={{ width: row.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.scoreDistSource}>
                Source: College Board AP Score Distributions — global average
                across all subjects.
              </p>
            </div>
          </div>

          <div className={`${styles.failIntroRight} ${styles.reveal}`}>
            <p className={styles.failIntroText}>
              The difference between a 5 and a 2 is rarely intelligence. It is
              almost always preparation timing, study methodology, and
              conceptual depth. Here are the eight most common failure patterns
              we identify in our free diagnostic assessments:
            </p>
            <div className={styles.failAvgBlock}>
              <div className={styles.failAvgTitle}>
                EduQuest students average 4.8 / 5
              </div>
              <p className={styles.failAvgDesc}>
                Because every EduQuest student has their failure patterns
                identified at the diagnostic stage — and eliminated through
                structured Pre-AP coaching before exam season begins.
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.failReasons} ${styles.reveal}`}>
          {FAIL_REASONS.map((item) => (
            <div key={item.title} className={styles.failCard}>
              <div className={styles.failCardHead}>
                <div className={styles.failIcon}>{item.icon}</div>
                <h4 className={styles.failCardTitle}>{item.title}</h4>
              </div>
              <p className={styles.failCardBody}>{item.body}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.failSolution} ${styles.reveal}`}>
          <div className={styles.failSolutionIcon}>💡</div>
          <div>
            <h4 className={styles.failSolutionTitle}>
              How EduQuest Eliminates Every One of These
            </h4>
            <p className={styles.failSolutionText}>
              Our free diagnostic assessment maps every student across all
              failure categories on Day 1. The result is a personalised Pre-AP
              plan that starts at exactly the right time, covers exactly the
              right content, includes full mock testing, and is integrated with
              a long-term university admissions strategy — so students arrive at
              AP May exams fully prepared, not hoping for the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION 2 — ALL TRACKS  (with detail panel)
───────────────────────────────────────────────────────── */

interface SubjectDetail {
  whatIs: string;
  examFormat: {
    section: string;
    questions: string;
    time: string;
    weight: string;
  }[];
  revisedCurriculum: string[];
  scoring: {
    score: number;
    label: string;
    credit: string;
  }[];
  keyTips: string[];
}

interface Subject {
  icon: string;
  name: string;
  type: "STEM" | "Liberal Arts";
  badge?: string;
  detail: SubjectDetail;
}

const SUBJECTS: Subject[] = [
  {
    icon: "∫",
    name: "AP Calculus AB & BC",
    type: "STEM",
    badge: "High Demand",
    detail: {
      whatIs:
        "Pre-AP Calculus builds the algebraic fluency and function intuition students need before tackling AP Calculus AB or BC. It focuses on deep understanding of polynomial, rational, exponential, logarithmic, and trigonometric functions — the exact toolkit AP Calculus assumes on Day 1.",
      examFormat: [
        { section: "Section I – MCQ", questions: "45 questions", time: "1h 45m", weight: "50%" },
        { section: "Section II – FRQ", questions: "6 questions", time: "1h 30m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Polynomial & Rational Functions",
        "Unit 2: Exponential & Logarithmic Functions",
        "Unit 3: Trigonometric Functions",
        "Unit 4: Function Analysis & Transformations",
        "Unit 5: Introduction to Limits (BC bridge)",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Calc I + II credit (~6–8 credits)" },
        { score: 4, label: "Well Qualified", credit: "Calc I credit (~3–4 credits)" },
        { score: 3, label: "Qualified", credit: "Credit at many colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Master function transformations early — they appear in every unit of AP Calc.",
        "Build mental arithmetic speed: AP MCQ has no calculator in Section IA.",
        "Do FRQ from the last 5 years — notation and step-by-step justification matter.",
        "If targeting BC, complete AB content by January to allow BC extension time.",
        "Focus on understanding 'why' a rule works, not just the rule itself.",
      ],
    },
  },
  {
    icon: "⚗️",
    name: "AP Chemistry",
    type: "STEM",
    detail: {
      whatIs:
        "Pre-AP Chemistry establishes the conceptual and mathematical foundations that AP Chemistry requires. It emphasises atomic structure, the mole concept, stoichiometry, and basic thermodynamics — areas where AP Chemistry students most commonly hit a wall.",
      examFormat: [
        { section: "Section I – MCQ", questions: "60 questions", time: "1h 30m", weight: "50%" },
        { section: "Section II – FRQ", questions: "7 questions", time: "1h 45m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Atomic Structure & Periodic Trends",
        "Unit 2: The Mole & Stoichiometry",
        "Unit 3: Chemical Bonding & Molecular Shape",
        "Unit 4: Intermolecular Forces & States of Matter",
        "Unit 5: Introduction to Thermodynamics",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Full-year Gen Chem (~8 credits)" },
        { score: 4, label: "Well Qualified", credit: "One semester (~4 credits)" },
        { score: 3, label: "Qualified", credit: "Credit at many colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "The mole concept must be second nature — it underpins equilibrium, kinetics, and electrochemistry.",
        "AP Chem FRQs require clear chemical reasoning, not just correct numbers.",
        "Practise dimensional analysis until unit conversions are automatic.",
        "Learn to read and draw particulate diagrams — a 2025 exam priority.",
        "Thermodynamics links every unit: always connect ΔG, ΔH, and ΔS.",
      ],
    },
  },
  {
    icon: "🔬",
    name: "AP Biology",
    type: "STEM",
    badge: "Pre-Med",
    detail: {
      whatIs:
        "Pre-AP Biology develops the scientific reasoning skills, data analysis habits, and core biological literacy that AP Biology demands. The focus is on building conceptual frameworks around cell biology, genetics, and evolution — not memorisation.",
      examFormat: [
        { section: "Section I – MCQ", questions: "60 questions", time: "1h 30m", weight: "50%" },
        { section: "Section II – FRQ", questions: "6 questions", time: "1h 30m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Cell Structure & Function",
        "Unit 2: Cell Energetics (Photosynthesis & Respiration)",
        "Unit 3: Genetics & Heredity",
        "Unit 4: Gene Expression & Regulation",
        "Unit 5: Evolution & Natural Selection",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Full-year Bio (~8 credits)" },
        { score: 4, label: "Well Qualified", credit: "One semester (~4 credits)" },
        { score: 3, label: "Qualified", credit: "Credit at most colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "AP Bio is about scientific thinking, not recall — practise data interpretation weekly.",
        "Master the four big ideas: evolution, cellular processes, genetics, and interactions.",
        "FRQ answers must use scientific vocabulary precisely — use the correct terms every time.",
        "Graph analysis is tested heavily in 2025–26 — build this skill early.",
        "Flashcards alone will not earn a 5; connect concepts across units constantly.",
      ],
    },
  },
  {
    icon: "⚡",
    name: "AP Physics 1 & C",
    type: "STEM",
    detail: {
      whatIs:
        "Pre-AP Physics establishes the quantitative reasoning and conceptual foundation for both AP Physics 1 (algebra-based) and AP Physics C (calculus-based). It covers classical mechanics fundamentals and builds the mathematical fluency — vectors, graphs, proportional reasoning — that AP Physics exams assume.",
      examFormat: [
        { section: "Section I – MCQ", questions: "50 questions", time: "1h 30m", weight: "50%" },
        { section: "Section II – FRQ", questions: "5 questions", time: "1h 30m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Kinematics & Vectors",
        "Unit 2: Newton's Laws of Motion",
        "Unit 3: Work, Energy & Power",
        "Unit 4: Momentum & Collisions",
        "Unit 5: Rotational Motion (C bridge)",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Mechanics credit (~4 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Draw free-body diagrams for every mechanics problem — non-negotiable.",
        "AP Physics 1 FRQs require written justification; answers without explanation score zero.",
        "Build vector component fluency before touching Newton's laws.",
        "For Physics C, calculus proficiency is a hard prerequisite — enroll in Calc AB first.",
        "Practise graphical analysis: slope = velocity, area = displacement patterns recur constantly.",
      ],
    },
  },
  {
    icon: "💻",
    name: "AP Computer Science A & CSP",
    type: "STEM",
    badge: "High Demand",
    detail: {
      whatIs:
        "Pre-AP Computer Science introduces computational thinking, algorithmic design, and foundational programming concepts that AP Computer Science A (Java) and AP CSP (principles-based) build upon. No prior coding experience is assumed.",
      examFormat: [
        { section: "Section I – MCQ (CS A)", questions: "40 questions", time: "1h 30m", weight: "50%" },
        { section: "Section II – FRQ (CS A)", questions: "4 questions", time: "1h 30m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Variables, Data Types & Expressions",
        "Unit 2: Conditionals & Control Flow",
        "Unit 3: Loops & Iteration",
        "Unit 4: Methods & Modularity",
        "Unit 5: Introduction to Arrays & Objects",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "CS I credit (~3–4 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Write code by hand on paper — AP CS A FRQs require handwritten Java.",
        "Master ArrayList, 2D arrays, and inheritance: these appear every year.",
        "Trace through code line by line; AP MCQ is heavy on code reading, not writing.",
        "For CSP, the Create Performance Task is 30% of your score — start early.",
        "Practice debugging: identifying logic errors is a tested AP CS A skill.",
      ],
    },
  },
  {
    icon: "📊",
    name: "AP Statistics",
    type: "STEM",
    detail: {
      whatIs:
        "Pre-AP Statistics develops data literacy, probabilistic thinking, and the inferential reasoning skills that AP Statistics requires. It is ideal for students planning careers in business, social sciences, medicine, or any STEM field.",
      examFormat: [
        { section: "Section I – MCQ", questions: "40 questions", time: "1h 30m", weight: "50%" },
        { section: "Section II – FRQ", questions: "6 questions (incl. 1 investigative task)", time: "1h 30m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Exploring One-Variable Data",
        "Unit 2: Exploring Two-Variable Data",
        "Unit 3: Collecting Data (Sampling & Experiments)",
        "Unit 4: Probability & Simulation",
        "Unit 5: Introduction to Inference",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Stats credit (~3 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Communication is graded as strictly as calculation — explain your reasoning in full sentences.",
        "Know all four inference procedures cold: z-test, t-test, chi-square, and regression.",
        "Context is mandatory in FRQ: every answer must reference the scenario given.",
        "The investigative task is 25% of Section II — practise open-ended problem synthesis.",
        "Calculator fluency (TI-84 or Nspire) saves critical time in exam conditions.",
      ],
    },
  },
  {
    icon: "📖",
    name: "AP English Language & Literature",
    type: "Liberal Arts",
    detail: {
      whatIs:
        "Pre-AP English builds the close reading, rhetorical analysis, and argumentative writing skills that both AP English Language and AP English Literature require. Students learn to analyse how authors use language choices to achieve specific effects — a skill tested on every AP English exam.",
      examFormat: [
        { section: "Section I – MCQ", questions: "45 questions", time: "1h", weight: "45%" },
        { section: "Section II – FRQ (3 essays)", questions: "3 prompts", time: "2h 15m", weight: "55%" },
      ],
      revisedCurriculum: [
        "Unit 1: Reading for Meaning & Authorial Choices",
        "Unit 2: Rhetorical Situation & Purpose",
        "Unit 3: Claims, Evidence & Argumentation",
        "Unit 4: Literary Analysis (prose & poetry)",
        "Unit 5: Synthesis Writing across Sources",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "English Composition (~3–6 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at most colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Your thesis must make a defensible, specific claim — a broad statement scores 0.",
        "Use literary and rhetorical terms precisely: 'diction', 'syntax', 'juxtaposition', etc.",
        "For Synthesis FRQ, you must cite at least 3 of the 6–7 provided sources.",
        "Practise timed writing weekly — 40 minutes per essay is tight without practice.",
        "Reading diverse non-fiction builds the pattern recognition MCQ requires.",
      ],
    },
  },
  {
    icon: "🌍",
    name: "AP World & US History",
    type: "Liberal Arts",
    detail: {
      whatIs:
        "Pre-AP World History develops the historical thinking skills — causation, continuity and change over time, comparison, and contextualization — that AP World History: Modern and AP US History exams directly assess. Students learn to read primary sources and construct historical arguments.",
      examFormat: [
        { section: "Section I – MCQ + SAQ", questions: "55 MCQ + 3 SAQ", time: "1h 35m + 40m", weight: "40% + 20%" },
        { section: "Section II – DBQ + LEQ", questions: "1 DBQ + 1 LEQ", time: "1h", weight: "25% + 15%" },
      ],
      revisedCurriculum: [
        "Unit 1: Historical Thinking Skills & Causation",
        "Unit 2: Primary Source Analysis (HAPP method)",
        "Unit 3: Continuity & Change Over Time",
        "Unit 4: Comparison Across Societies",
        "Unit 5: DBQ & LEQ Essay Construction",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "History credit (~3–6 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at most colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "DBQ sourcing, contextualization, and complexity points are where most students lose marks.",
        "Write a real thesis with a line of reasoning — not just a restatement of the prompt.",
        "Practise SAQ weekly: 3 parts, 3 minutes each — concise and precise.",
        "Know the AP World periods (1200–1450, 1450–1750, 1750–1900, 1900–present) cold.",
        "Every document in DBQ must be analysed with HAPP (Historical situation, Audience, Purpose, Point of view).",
      ],
    },
  },
  {
    icon: "🧠",
    name: "AP Psychology",
    type: "Liberal Arts",
    detail: {
      whatIs:
        "Pre-AP Psychology introduces the scientific study of human behaviour and mental processes, building the vocabulary, research methodology understanding, and theoretical frameworks that AP Psychology directly tests. It is one of the most accessible AP subjects for students new to the programme.",
      examFormat: [
        { section: "Section I – MCQ", questions: "100 questions", time: "1h 10m", weight: "66.7%" },
        { section: "Section II – FRQ", questions: "2 questions", time: "50m", weight: "33.3%" },
      ],
      revisedCurriculum: [
        "Unit 1: History & Approaches to Psychology",
        "Unit 2: Biological Bases of Behaviour",
        "Unit 3: Sensation, Perception & Consciousness",
        "Unit 4: Learning, Memory & Cognition",
        "Unit 5: Development, Personality & Abnormal Psychology",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Psych Intro (~3 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Vocabulary is 50% of success — build a running glossary of 400+ terms.",
        "FRQ requires application of terms to a new scenario — practise this specifically.",
        "Research methods (experimental design, statistics) appear in almost every FRQ.",
        "AP Psych has one of the highest pass rates — a 5 is very achievable with consistent study.",
        "Use the AP Psych acronyms (e.g. OCEAN for Big Five) but understand what each represents.",
      ],
    },
  },
  {
    icon: "📈",
    name: "AP Micro & Macroeconomics",
    type: "Liberal Arts",
    detail: {
      whatIs:
        "Pre-AP Economics develops economic reasoning, graph literacy, and the core concepts of supply, demand, and market behaviour that both AP Microeconomics and AP Macroeconomics build upon. Students learn to think like economists — using models to predict and explain real-world outcomes.",
      examFormat: [
        { section: "Section I – MCQ", questions: "60 questions", time: "1h 10m", weight: "66.7%" },
        { section: "Section II – FRQ", questions: "3 questions", time: "1h", weight: "33.3%" },
      ],
      revisedCurriculum: [
        "Unit 1: Basic Economic Concepts & Opportunity Cost",
        "Unit 2: Supply, Demand & Market Equilibrium",
        "Unit 3: Elasticity & Consumer Choice",
        "Unit 4: Market Structures & Firm Behaviour",
        "Unit 5: Intro to Macroeconomic Indicators",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Micro + Macro credit (~6 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Graph drawing is mandatory in FRQ — practise drawing and labelling quickly.",
        "For every market change, trace the full chain: shock → shift → new equilibrium → effect.",
        "Micro and Macro share graphs but interpret them differently — keep models distinct.",
        "Know the loanable funds, money market, and aggregate demand/supply models cold.",
        "Taking both Micro and Macro in the same year is common and efficient — plan accordingly.",
      ],
    },
  },
  {
    icon: "🌱",
    name: "AP Environmental Science",
    type: "STEM",
    detail: {
      whatIs:
        "Pre-AP Environmental Science develops scientific literacy around Earth's systems, human-environment interactions, and the data analysis skills AP Environmental Science (APES) demands. It is an ideal entry point for students interested in sustainability, policy, or life sciences.",
      examFormat: [
        { section: "Section I – MCQ", questions: "80 questions", time: "1h 30m", weight: "60%" },
        { section: "Section II – FRQ", questions: "3 questions", time: "1h 10m", weight: "40%" },
      ],
      revisedCurriculum: [
        "Unit 1: Earth's Systems & Resources",
        "Unit 2: The Living World — Ecosystems & Biodiversity",
        "Unit 3: Populations (Human & Ecological)",
        "Unit 4: Land & Water Use",
        "Unit 5: Energy Resources & Pollution",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Environmental Sci (~4 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "APES has significant maths: energy calculations, population growth, and unit conversions.",
        "Learn environmental legislation (Clean Air Act, CITES, Kyoto) — it appears in MCQ annually.",
        "FRQ requires proposing and justifying solutions, not just identifying problems.",
        "Current environmental events appear on the exam — stay aware of real-world issues.",
        "The lab and field experience component builds data interpretation skills tested on every FRQ.",
      ],
    },
  },
  {
    icon: "🗺️",
    name: "AP Human Geography",
    type: "Liberal Arts",
    detail: {
      whatIs:
        "Pre-AP Human Geography introduces the spatial thinking, geographic models, and analytical frameworks that AP Human Geography tests. Students learn to interpret maps, population data, and urban patterns — and to apply geographic concepts to real-world case studies.",
      examFormat: [
        { section: "Section I – MCQ", questions: "60 questions", time: "1h", weight: "50%" },
        { section: "Section II – FRQ", questions: "3 questions", time: "1h 15m", weight: "50%" },
      ],
      revisedCurriculum: [
        "Unit 1: Thinking Geographically (Maps & Scale)",
        "Unit 2: Population & Migration Patterns",
        "Unit 3: Cultural Patterns & Diffusion",
        "Unit 4: Political Organisation of Space",
        "Unit 5: Urbanisation & Development Models",
      ],
      scoring: [
        { score: 5, label: "Extremely Well Qualified", credit: "Geography credit (~3 credits)" },
        { score: 4, label: "Well Qualified", credit: "Credit at many colleges" },
        { score: 3, label: "Qualified", credit: "Credit at some colleges" },
        { score: 2, label: "Possibly Qualified", credit: "Rarely grants credit" },
        { score: 1, label: "No Recommendation", credit: "No credit" },
      ],
      keyTips: [
        "Know your models: Demographic Transition, Rostow, Gravity, Von Thünen — with strengths and critiques.",
        "Every FRQ answer must connect to a specific geographic concept or model.",
        "AP Human Geo is often taken in Grade 9 — an excellent first AP for building exam skills.",
        "Map interpretation (choropleth, dot maps, cartograms) is tested annually in MCQ.",
        "Use real-world examples for every concept: vague answers score low on FRQ.",
      ],
    },
  },
];

/* ── Score colour helper ── */
function scoreColor(score: number) {
  if (score === 5) return styles.score5;
  if (score === 4) return styles.score4;
  if (score === 3) return styles.score3;
  return styles.score12;
}

/* ── Detail Panel ── */
function DetailPanel({ subject }: { subject: Subject }) {
  const d = subject.detail;
  return (
    <div className={styles.detailPanel}>
      <div className={styles.detailScroll}>
        {/* Header */}
        <div className={styles.detailHeader}>
          <span className={styles.detailIcon}>{subject.icon}</span>
          <div>
            <h3 className={styles.detailTitle}>Pre-AP {subject.name}</h3>
            <span className={styles.detailBadge}>{subject.type}</span>
          </div>
        </div>

        {/* What is */}
        <div className={styles.detailBlock}>
          <h4 className={styles.detailBlockTitle}>
            <span className={styles.detailBlockDot} />
            What is Pre-AP {subject.name}?
          </h4>
          <p className={styles.detailText}>{d.whatIs}</p>
        </div>

        {/* Exam Format */}
        <div className={styles.detailBlock}>
          <h4 className={styles.detailBlockTitle}>
            <span className={styles.detailBlockDot} />
            Exam Format (2025–26)
          </h4>
          <div className={styles.formatTable}>
            <div className={styles.formatTableHead}>
              <span>Section</span>
              <span>Questions</span>
              <span>Time</span>
              <span>Weight</span>
            </div>
            {d.examFormat.map((row) => (
              <div key={row.section} className={styles.formatTableRow}>
                <span className={styles.formatSection}>{row.section}</span>
                <span>{row.questions}</span>
                <span>{row.time}</span>
                <span className={styles.formatWeight}>{row.weight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revised Curriculum */}
        <div className={styles.detailBlock}>
          <h4 className={styles.detailBlockTitle}>
            <span className={styles.detailBlockDot} />
            Revised Curriculum
          </h4>
          <ul className={styles.curriculumList}>
            {d.revisedCurriculum.map((item, i) => (
              <li key={i} className={styles.curriculumItem}>
                <span className={styles.curriculumNum}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Scoring */}
        <div className={styles.detailBlock}>
          <h4 className={styles.detailBlockTitle}>
            <span className={styles.detailBlockDot} />
            Scoring
          </h4>
          <div className={styles.scoringGrid}>
            {d.scoring.map((row) => (
              <div key={row.score} className={`${styles.scoreRow2} ${scoreColor(row.score)}`}>
                <div className={styles.scoreNum}>{row.score}</div>
                <div>
                  <div className={styles.scoreLabel}>{row.label}</div>
                  <div className={styles.scoreCredit}>{row.credit}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Tips */}
        <div className={styles.detailBlock}>
          <h4 className={styles.detailBlockTitle}>
            <span className={styles.detailBlockDot} />
            Key Tips
          </h4>
          <ul className={styles.tipsList}>
            {d.keyTips.map((tip, i) => (
              <li key={i} className={styles.tipItem}>
                <span className={styles.tipCheck}>✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── Main AllTracksSection ── */
export function AllTracksSection() {
  const ref = useReveal();
  const [selected, setSelected] = useState<Subject>(SUBJECTS[0]);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionWhite}`}
      id="subjects"
    >
      <div className={styles.inner}>
        {/* Header */}
        <div className={`${styles.hdrCenter} ${styles.reveal}`}>
          <span className={styles.sTag}>All Tracks</span>
          <span className={styles.goldLineCenter} />
          <h2 className={styles.sHead}>Subjects We Coach</h2>
          <p className={styles.sSub}>
            Click any subject to explore the full Pre-AP programme — curriculum,
            exam format, scoring, and expert tips.
          </p>
        </div>

        {/* Split layout */}
        <div className={`${styles.splitLayout} ${styles.reveal}`}>
          {/* Left — subject list */}
          <div className={styles.subjectList}>
            {SUBJECTS.map((subj) => (
              <button
                key={subj.name}
                className={`${styles.subjectListItem} ${selected.name === subj.name ? styles.subjectListItemActive : ""}`}
                onClick={() => setSelected(subj)}
              >
                <span className={styles.listIcon}>{subj.icon}</span>
                <div className={styles.listMeta}>
                  <span className={styles.listName}>{subj.name}</span>
                  <span className={styles.listType}>{subj.type}</span>
                </div>
                {subj.badge && (
                  <span className={styles.listBadge}>{subj.badge}</span>
                )}
                <span className={styles.listArrow}>→</span>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <DetailPanel subject={selected} />
        </div>
      </div>
    </section>
  );
}

export default function PreApSections() {
  return (
    <>
      <HardTruthSection />
      <AllTracksSection />
    </>
  );
}