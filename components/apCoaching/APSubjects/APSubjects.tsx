"use client";

import { useState } from "react";
import styles from "./APSubjects.module.css";

// ── Types ──────────────────────────────────────────────────────────────────────
type Category = "all" | "stem" | "humanities" | "social" | "arts";

interface SubjectDetail {
  what: string;
  examFormat: { label: string; value: string }[];
  curriculum: string[];
  scoring: { label: string; value: string }[];
  tips: string[];
}

interface Subject {
  name: string;
  credits: string;
  duration: string;
  format: string;
  description: string;
  difficulty: number;
  category: Exclude<Category, "all">;
  details: SubjectDetail;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const SUBJECTS: Subject[] = [
  {
    name: "AP Calculus BC",
    credits: "5 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description: "Covers limits, derivatives, integrals, series, and multivariable calculus. Highest college credit value in STEM.",
    difficulty: 5,
    category: "stem",
    details: {
      what: "AP Calculus BC is a college-level course equivalent to Calc I + II, covering all of AB plus polar, parametric, sequences, series, and advanced integration techniques. It's the gold standard for STEM-bound students.",
      examFormat: [
        { label: "Section I – MCQ", value: "45 questions · 1h 45m · 50% of score" },
        { label: "Section II – FRQ", value: "6 questions · 1h 30m · 50% of score" },
        { label: "Calculator", value: "Permitted on part of each section" },
      ],
      curriculum: [
        "Limits & Continuity",
        "Differentiation (all rules + implicit)",
        "Applications of Derivatives",
        "Integration & Accumulation",
        "Differential Equations",
        "Sequences & Series (Taylor, Maclaurin)",
        "Polar & Parametric Equations",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~40% of test takers" },
        { label: "3+ Pass Rate", value: "~80%" },
        { label: "AB Subscore", value: "Reported separately (1–5)" },
      ],
      tips: [
        "Master the AB content first — it's 60% of BC.",
        "Series convergence tests are high-yield; memorize all.",
        "FRQ justifications must use calculus language, not just answers.",
        "Practice no-calculator FRQs — they're often harder.",
      ],
    },
  },
  {
    name: "AP Calculus AB",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description: "Limits, derivatives, and integrals. Equivalent to a one-semester college calculus course. Prerequisite for Calc BC.",
    difficulty: 4,
    category: "stem",
    details: {
      what: "AP Calculus AB is equivalent to a first-semester college calculus course. It introduces limits, derivatives, integrals, and the Fundamental Theorem of Calculus — essential for any STEM major.",
      examFormat: [
        { label: "Section I – MCQ", value: "45 questions · 1h 45m · 50% of score" },
        { label: "Section II – FRQ", value: "6 questions · 1h 30m · 50% of score" },
        { label: "Calculator", value: "Permitted on select portions" },
      ],
      curriculum: [
        "Limits & Continuity",
        "Derivatives & Differentiation Rules",
        "Applications of Derivatives (optimization, related rates)",
        "Integrals & Area",
        "Fundamental Theorem of Calculus",
        "Differential Equations (basic)",
        "Applications of Integration",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~19% of test takers" },
        { label: "3+ Pass Rate", value: "~60%" },
        { label: "Mean Score", value: "~2.9 / 5" },
      ],
      tips: [
        "Understand the FTC deeply — it appears in multiple FRQs.",
        "Show all work; partial credit is generous in FRQ sections.",
        "Practice graphical analysis — reading f, f', f'' graphs.",
        "Don't skip u-substitution; it's tested heavily.",
      ],
    },
  },
  {
    name: "AP Physics C: Mechanics",
    credits: "4 Credits",
    duration: "1h 30m",
    format: "MCQ + FRQ",
    description: "Calculus-based Mechanics covering kinematics, Newton's laws, energy, momentum, rotation, and oscillations.",
    difficulty: 5,
    category: "stem",
    details: {
      what: "AP Physics C: Mechanics is a calculus-based course equivalent to a semester of college mechanics. It's the most rigorous physics AP and the top choice for engineering and physics majors.",
      examFormat: [
        { label: "Section I – MCQ", value: "35 questions · 45m · 50% of score" },
        { label: "Section II – FRQ", value: "3 questions · 45m · 50% of score" },
        { label: "Calculator", value: "Required throughout" },
      ],
      curriculum: [
        "Kinematics (1D & 2D)",
        "Newton's Laws & Dynamics",
        "Work, Energy & Power",
        "Systems of Particles & Linear Momentum",
        "Rotation & Angular Momentum",
        "Oscillations (SHM)",
        "Gravitation",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~40% of test takers" },
        { label: "3+ Pass Rate", value: "~75%" },
        { label: "Mean Score", value: "~3.6 / 5" },
      ],
      tips: [
        "Calculus is non-negotiable — integrate and differentiate fluently.",
        "FRQs require full derivations, not just final answers.",
        "Rotational analogs to linear quantities appear every year.",
        "Often taken alongside E&M for dual college credit.",
      ],
    },
  },
  {
    name: "AP Physics C: E&M",
    credits: "4 Credits",
    duration: "1h 30m",
    format: "MCQ + FRQ",
    description: "Calculus-based Electricity & Magnetism. Coulomb's law, circuits, Gauss's law, magnetic fields, and Maxwell's equations.",
    difficulty: 5,
    category: "stem",
    details: {
      what: "AP Physics C: Electricity & Magnetism is the most mathematically demanding AP exam. It covers electric fields, circuits, magnetism, and Maxwell's equations — equivalent to a college E&M course.",
      examFormat: [
        { label: "Section I – MCQ", value: "35 questions · 45m · 50% of score" },
        { label: "Section II – FRQ", value: "3 questions · 45m · 50% of score" },
        { label: "Calculator", value: "Required throughout" },
      ],
      curriculum: [
        "Electrostatics (Coulomb's Law, Gauss's Law)",
        "Electric Potential & Capacitance",
        "DC Circuits (Kirchhoff's Laws)",
        "Magnetic Fields & Forces",
        "Electromagnetic Induction (Faraday's Law)",
        "Inductance & LC Circuits",
        "Maxwell's Equations (conceptual)",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~38% of test takers" },
        { label: "3+ Pass Rate", value: "~70%" },
        { label: "Mean Score", value: "~3.4 / 5" },
      ],
      tips: [
        "Gauss's Law problems need symmetric charge distributions — always identify them.",
        "Faraday's Law FRQs appear every single year.",
        "Understand RC and RL circuits deeply — exponential behavior.",
        "Most students take Mechanics first; it's strongly recommended.",
      ],
    },
  },
  {
    name: "AP Chemistry",
    credits: "5 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description: "Atomic structure, bonding, thermodynamics, kinetics, equilibrium, electrochemistry. Equivalent to full-year college chemistry.",
    difficulty: 5,
    category: "stem",
    details: {
      what: "AP Chemistry is one of the most comprehensive AP science courses. It covers general chemistry at a college level including bonding, thermodynamics, kinetics, equilibrium, and electrochemistry with a significant lab component.",
      examFormat: [
        { label: "Section I – MCQ", value: "60 questions · 1h 30m · 50% of score" },
        { label: "Section II – FRQ", value: "7 questions (3 long, 4 short) · 1h 45m · 50% of score" },
        { label: "Reference Sheet", value: "Provided (periodic table, formulas)" },
      ],
      curriculum: [
        "Atomic Structure & Periodicity",
        "Molecular & Ionic Compound Structure",
        "Intermolecular Forces & States of Matter",
        "Chemical Reactions & Stoichiometry",
        "Kinetics",
        "Thermodynamics (ΔG, ΔH, ΔS)",
        "Equilibrium & Acids/Bases",
        "Electrochemistry",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~13% of test takers" },
        { label: "3+ Pass Rate", value: "~53%" },
        { label: "Mean Score", value: "~2.7 / 5" },
      ],
      tips: [
        "Equilibrium (ICE tables, Ksp, Ka) is the highest-yield topic.",
        "Memorize no constants — the reference sheet covers everything.",
        "Lab-based FRQs ask you to design experiments; practice this.",
        "Electrochemistry (cell notation, Nernst equation) appears annually.",
      ],
    },
  },
  {
    name: "AP Biology",
    credits: "4 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description: "Cell biology, genetics, evolution, ecology, and molecular biology. High lab component. Excellent for pre-med and biology majors.",
    difficulty: 4,
    category: "stem",
    details: {
      what: "AP Biology is a college-level biology course covering cell structure, genetics, evolution, ecology, and molecular biology. It's especially valuable for pre-med students and biology majors seeking college credit.",
      examFormat: [
        { label: "Section I – MCQ", value: "60 questions · 1h 30m · 50% of score" },
        { label: "Section II – FRQ", value: "6 questions (2 long, 4 short) · 1h 30m · 50% of score" },
        { label: "Lab Component", value: "25% of coursework (13 required labs)" },
      ],
      curriculum: [
        "Chemistry of Life",
        "Cell Structure & Function",
        "Cellular Energetics (Photosynthesis, Respiration)",
        "Cell Communication & Cell Cycle",
        "Heredity & Genetics",
        "Gene Expression & Regulation",
        "Natural Selection & Evolution",
        "Ecology",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~15% of test takers" },
        { label: "3+ Pass Rate", value: "~65%" },
        { label: "Mean Score", value: "~2.9 / 5" },
      ],
      tips: [
        "Practice interpreting graphs, data tables, and experimental designs.",
        "Free response expects you to explain mechanisms, not just name them.",
        "Evolution is woven across ALL units — understand it deeply.",
        "The 13 AP labs appear in FRQs; know their purpose and procedures.",
      ],
    },
  },
  {
    name: "AP Computer Science A",
    credits: "4 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description: "Java programming, OOP, data structures, algorithms, and problem-solving. Essential for CS majors.",
    difficulty: 4,
    category: "stem",
    details: {
      what: "AP Computer Science A teaches Java programming with a focus on object-oriented design, data structures, and algorithmic thinking. It's equivalent to a first-semester college CS course.",
      examFormat: [
        { label: "Section I – MCQ", value: "40 questions · 1h 30m · 50% of score" },
        { label: "Section II – FRQ", value: "4 questions · 1h 30m · 50% of score" },
        { label: "Language", value: "Java (all code written in Java)" },
      ],
      curriculum: [
        "Primitive Types & Variables",
        "Using Objects & Methods",
        "Boolean Expressions & Conditionals",
        "Iteration (loops)",
        "Writing Classes (OOP)",
        "Arrays & ArrayLists",
        "2D Arrays",
        "Inheritance & Recursion",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~25% of test takers" },
        { label: "3+ Pass Rate", value: "~70%" },
        { label: "Mean Score", value: "~3.2 / 5" },
      ],
      tips: [
        "Trace code by hand regularly — MCQ is full of tracing questions.",
        "Understand inheritance and polymorphism deeply for FRQ.",
        "The ArrayList and 2D array FRQs are predictable — master them.",
        "Recursion is tested every year; practice base cases carefully.",
      ],
    },
  },
  {
    name: "AP Statistics",
    credits: "3 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description: "Exploring data, sampling, probability, statistical inference, and regression. Valuable for business, social science, and STEM.",
    difficulty: 3,
    category: "stem",
    details: {
      what: "AP Statistics introduces students to data collection, analysis, probability, and statistical inference. It's one of the most broadly useful AP courses for students in any field.",
      examFormat: [
        { label: "Section I – MCQ", value: "40 questions · 1h 30m · 50% of score" },
        { label: "Section II – FRQ", value: "6 questions (1 investigative task) · 1h 30m · 50% of score" },
        { label: "Calculator", value: "Required (graphing calculator)" },
      ],
      curriculum: [
        "Exploring One-Variable Data",
        "Exploring Two-Variable Data",
        "Collecting Data (Sampling & Experiments)",
        "Probability & Random Variables",
        "Sampling Distributions",
        "Inference for Categorical Data (Chi-square)",
        "Inference for Quantitative Data (t-tests)",
        "Inference for Slopes (Regression)",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~16% of test takers" },
        { label: "3+ Pass Rate", value: "~60%" },
        { label: "Mean Score", value: "~2.9 / 5" },
      ],
      tips: [
        "Always define parameters in context — graders are strict about this.",
        "The 4-step inference procedure (State, Plan, Do, Conclude) must be followed.",
        "Investigative task is 25% of FRQ score — don't skip it.",
        "Calculator syntax matters: know normalcdf, invNorm, t-tests cold.",
      ],
    },
  },
  {
    name: "AP English Language",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + FRQ",
    description: "Rhetoric, argumentation, and synthesis. Critical analysis of non-fiction texts. Available in digital format.",
    difficulty: 3,
    category: "humanities",
    details: {
      what: "AP English Language & Composition focuses on non-fiction rhetoric, argumentation, and synthesis. Students analyze real-world texts and write persuasive and analytical essays.",
      examFormat: [
        { label: "Section I – MCQ", value: "45 questions · 1h · 45% of score" },
        { label: "Section II – FRQ", value: "3 essays (Synthesis, Rhetorical Analysis, Argument) · 2h 15m · 55%" },
        { label: "Format", value: "Available in digital format (2025–26)" },
      ],
      curriculum: [
        "Rhetorical Situation (purpose, audience, context)",
        "Claims, Evidence & Commentary",
        "Reasoning & Organization",
        "Style (diction, syntax, figurative language)",
        "Synthesis (using multiple sources)",
        "Argument & Counterargument",
        "Rhetorical Analysis of non-fiction texts",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~12% of test takers" },
        { label: "3+ Pass Rate", value: "~60%" },
        { label: "Mean Score", value: "~2.8 / 5" },
      ],
      tips: [
        "Thesis must make a defensible claim — not a fact or broad statement.",
        "For synthesis, cite at least 3 sources and use them as evidence, not decoration.",
        "Rhetorical analysis: identify the choice, explain its effect, tie it to purpose.",
        "Practice writing timed essays — pacing is the most common student struggle.",
      ],
    },
  },
  {
    name: "AP English Literature",
    credits: "3 Credits",
    duration: "3h",
    format: "MCQ + FRQ",
    description: "Literary analysis of poetry, prose, and drama. Close reading, thematic analysis, and essay writing.",
    difficulty: 3,
    category: "humanities",
    details: {
      what: "AP English Literature & Composition focuses on reading and interpreting fiction, poetry, and drama. Students develop close-reading skills, analyze literary techniques, and write analytical essays grounded in textual evidence.",
      examFormat: [
        { label: "Section I – MCQ", value: "55 questions · 1h · 45% of score" },
        { label: "Section II – FRQ", value: "3 essays (Poetry, Prose Fiction, Open Prompt) · 2h · 55% of score" },
        { label: "Format", value: "Available in digital format (2025–26)" },
      ],
      curriculum: [
        "Short Fiction & Close Reading",
        "Poetry Analysis",
        "Longer Fiction & Drama",
        "Character, Setting, Structure",
        "Figurative Language & Imagery",
        "Narration & Point of View",
        "Thematic Analysis",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~8% of test takers" },
        { label: "3+ Pass Rate", value: "~55%" },
        { label: "Mean Score", value: "~2.6 / 5" },
      ],
      tips: [
        "The open prompt essay rewards students who have read widely — prepare 5–6 complex novels.",
        "Avoid plot summary at all costs; analyze choices, not events.",
        "Literary argument essays score highest when thesis is interpretive, not descriptive.",
        "Poetry MCQ is tricky — read the whole poem before answering any question.",
      ],
    },
  },
  {
    name: "AP Microeconomics",
    credits: "3 Credits",
    duration: "2h 10m",
    format: "MCQ + FRQ",
    description: "Supply & demand, market structures, factor markets, market failures, and government intervention.",
    difficulty: 3,
    category: "social",
    details: {
      what: "AP Microeconomics examines how individuals and firms make decisions. It covers supply and demand, market structures, factor markets, and market failure.",
      examFormat: [
        { label: "Section I – MCQ", value: "60 questions · 1h 10m · 66% of score" },
        { label: "Section II – FRQ", value: "3 questions (1 long, 2 short) · 1h · 34% of score" },
        { label: "Graphs", value: "Required in FRQ — label all axes and curves" },
      ],
      curriculum: [
        "Basic Economic Concepts (scarcity, opportunity cost, PPC)",
        "Supply & Demand",
        "Elasticity",
        "Consumer & Producer Theory",
        "Perfect Competition & Profit Maximization",
        "Monopoly, Oligopoly, Monopolistic Competition",
        "Factor Markets",
        "Market Failure & Government Intervention",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~19% of test takers" },
        { label: "3+ Pass Rate", value: "~60%" },
        { label: "Mean Score", value: "~2.9 / 5" },
      ],
      tips: [
        "Graphs are everything — draw and label them for every FRQ.",
        "MR = MC is the universal profit-maximization rule; memorize its applications.",
        "Understand deadweight loss — it appears in multiple market structures.",
        "Often taken with Macro; concepts reinforce each other.",
      ],
    },
  },
  {
    name: "AP Macroeconomics",
    credits: "3 Credits",
    duration: "2h 10m",
    format: "MCQ + FRQ",
    description: "GDP, monetary policy, fiscal policy, inflation, unemployment, and international trade.",
    difficulty: 3,
    category: "social",
    details: {
      what: "AP Macroeconomics covers how entire economies function — measuring output, employment, price levels, and the tools governments and central banks use to stabilize them.",
      examFormat: [
        { label: "Section I – MCQ", value: "60 questions · 1h 10m · 66% of score" },
        { label: "Section II – FRQ", value: "3 questions (1 long, 2 short) · 1h · 34% of score" },
        { label: "Graphs", value: "AD-AS and Money Market are essential" },
      ],
      curriculum: [
        "Basic Economic Concepts",
        "Economic Indicators & Business Cycle",
        "National Income & Price Determination (AD-AS)",
        "Financial Sector (money supply, banking, Fed policy)",
        "Stabilization Policies",
        "Open Economy (exchange rates, trade balance)",
        "Economic Growth",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~20% of test takers" },
        { label: "3+ Pass Rate", value: "~56%" },
        { label: "Mean Score", value: "~2.9 / 5" },
      ],
      tips: [
        "Master three core graphs: AD-AS, Money Market, Loanable Funds.",
        "Chain the effects: policy → money market → AD-AS → outcomes.",
        "International trade FRQs (exchange rates) appear almost every year.",
        "Understand expansionary vs contractionary fiscal and monetary policy.",
      ],
    },
  },
  {
    name: "AP Psychology",
    credits: "3 Credits",
    duration: "2h",
    format: "MCQ + FRQ",
    description: "History of psychology, biological bases, sensation, cognition, development, personality, and abnormal psychology.",
    difficulty: 2,
    category: "social",
    details: {
      what: "AP Psychology surveys major areas of psychology from biological bases of behavior to social psychology. It's a great introduction to the field and offers an easy path to college credit.",
      examFormat: [
        { label: "Section I – MCQ", value: "100 questions · 1h 10m · 66% of score" },
        { label: "Section II – FRQ", value: "2 questions · 50m · 34% of score" },
        { label: "Note", value: "No calculator needed; concept-heavy" },
      ],
      curriculum: [
        "History & Approaches",
        "Biological Bases of Behavior",
        "Sensation & Perception",
        "States of Consciousness",
        "Learning (Classical & Operant Conditioning)",
        "Cognition, Memory & Language",
        "Motivation, Emotion & Personality",
        "Developmental, Social & Abnormal Psychology",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~20% of test takers" },
        { label: "3+ Pass Rate", value: "~65%" },
        { label: "Mean Score", value: "~3.0 / 5" },
      ],
      tips: [
        "Vocabulary is everything — flashcards for 500+ terms are standard.",
        "FRQ scenarios test application, not recall; practice linking terms to situations.",
        "Biological bases unit (neurotransmitters, brain structures) is high-yield.",
        "With good prep, a 5 is very achievable — many students score it.",
      ],
    },
  },
  {
    name: "AP World History: Modern",
    credits: "3 Credits",
    duration: "3h 15m",
    format: "MCQ + SAQ + DBQ",
    description: "Patterns in global history from 1200 CE to present. Excellent for humanities and social science majors.",
    difficulty: 3,
    category: "social",
    details: {
      what: "AP World History: Modern covers global history from 1200 CE to the present, focusing on themes like trade networks, imperialism, revolutions, and globalization.",
      examFormat: [
        { label: "Section I – MCQ + SAQ", value: "55 MCQ (55m) + 3 SAQs (40m) · 60% of score" },
        { label: "Section II – LEQ + DBQ", value: "1 DBQ (1h) + 1 LEQ (40m) · 40% of score" },
        { label: "Format", value: "Available digitally (2025–26)" },
      ],
      curriculum: [
        "The Global Tapestry (1200–1450)",
        "Networks of Exchange (1200–1450)",
        "Land-Based Empires (1450–1750)",
        "Transoceanic Interconnections (1450–1750)",
        "Revolutions (1750–1900)",
        "Consequences of Industrialization (1750–1900)",
        "Global Conflict (1900–present)",
        "Cold War & Decolonization",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~13% of test takers" },
        { label: "3+ Pass Rate", value: "~60%" },
        { label: "Mean Score", value: "~2.8 / 5" },
      ],
      tips: [
        "DBQ: contextualization must be a full paragraph before the thesis, not one sentence.",
        "Use HAPP (Historical context, Audience, Purpose, POV) for document analysis.",
        "Memorize major turning points by period — the exam tests periodization.",
        "SAQs require specific evidence — vague claims score zero.",
      ],
    },
  },
  {
    name: "AP CS Principles",
    credits: "3 Credits",
    duration: "2h",
    format: "Digital + Portfolio",
    description: "Intro to computational thinking, algorithms, data, and digital innovation. Less rigorous than CS-A, but valuable.",
    difficulty: 2,
    category: "arts",
    details: {
      what: "AP Computer Science Principles is an accessible, broad introduction to computing. It focuses on concepts like algorithms, data, the internet, cybersecurity, and digital impact — not Java syntax.",
      examFormat: [
        { label: "Section I – Digital Exam", value: "70 questions · 2h · 70% of score" },
        { label: "Section II – Create Performance Task", value: "Portfolio of a coded program · 30% of score" },
        { label: "Note", value: "Create Task submitted before exam day" },
      ],
      curriculum: [
        "Creative Development",
        "Data (representation, compression, encryption)",
        "Algorithms & Programming",
        "Computer Systems & Networks (internet protocols)",
        "Impact of Computing (ethical, social, legal)",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~13% of test takers" },
        { label: "3+ Pass Rate", value: "~70%" },
        { label: "Mean Score", value: "~3.1 / 5" },
      ],
      tips: [
        "Start the Create Task early — it takes multiple iterations.",
        "Pseudocode on the exam is not Python or Java; learn the AP format.",
        "Impact of Computing questions test nuance — both benefits and harms.",
        "Data representation (binary, hex) is tested more than students expect.",
      ],
    },
  },
  {
    name: "AP Seminar",
    credits: "Profile",
    duration: "Portfolio",
    format: "Research-based",
    description: "Research, analysis, and argument. Great for building research skills and college application profiles. Part of AP Capstone.",
    difficulty: 3,
    category: "arts",
    details: {
      what: "AP Seminar is the first course in the AP Capstone Diploma program. It develops research, argumentation, and presentation skills through team and individual projects — building the foundation for AP Research.",
      examFormat: [
        { label: "Team Project & Presentation", value: "45% of score" },
        { label: "Individual Research Report", value: "45% of score" },
        { label: "End-of-Course Exam", value: "10% of score (2 short essays)" },
      ],
      curriculum: [
        "Understanding & Analyzing Arguments",
        "Developing a Research Question",
        "Gathering & Evaluating Sources (SIFT method)",
        "Synthesizing Multiple Perspectives",
        "Crafting a Research Argument",
        "Designing & Delivering Presentations",
        "Responding to Counterarguments",
      ],
      scoring: [
        { label: "5 – Extremely Well Qualified", value: "~15% of test takers" },
        { label: "3+ Pass Rate", value: "~80%" },
        { label: "AP Capstone Diploma", value: "Requires Seminar + Research + 4 AP exams with 3+" },
      ],
      tips: [
        "Choose a research question you're genuinely curious about — quality shows.",
        "Cite diverse sources: academic journals, news, primary sources.",
        "Team projects require clear division of roles; document your contribution.",
        "The exam essays are short but require a clear, supported argument.",
      ],
    },
  },
];

const TABS: { label: string; value: Category }[] = [
  { label: "All Subjects", value: "all" },
  { label: "STEM", value: "stem" },
  { label: "Humanities", value: "humanities" },
  { label: "Social Sciences", value: "social" },
  { label: "Arts & Others", value: "arts" },
];

// ── Difficulty Dots ────────────────────────────────────────────────────────────
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

// ── Subject List Item (left panel row) ────────────────────────────────────────
function SubjectListItem({
  subject,
  isActive,
  onClick,
}: {
  subject: Subject;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${styles.subjectListItem} ${isActive ? styles.subjectListItemActive : ""}`}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
    >
      {/* Name + credits row */}
      <div className={styles.listItemTop}>
        <span className={styles.listItemName}>{subject.name}</span>
        <span className={styles.listItemCredits}>{subject.credits}</span>
      </div>

      {/* Tags row */}
      <div className={styles.listItemMeta}>
        <span className={styles.listTag}>⏱ {subject.duration}</span>
        <span className={styles.listTag}>📊 {subject.format}</span>
      </div>

      {/* Difficulty */}
      <div className={styles.listItemDiff}>
        <span className={styles.diffLabel}>Difficulty:</span>
        <DifficultyDots level={subject.difficulty} />
      </div>

      {/* Active indicator arrow */}
      <span className={styles.listArrow} aria-hidden="true">›</span>
    </button>
  );
}

// ── Detail Panel (right) ───────────────────────────────────────────────────────
function DetailPanel({ subject }: { subject: Subject }) {
  const d = subject.details;

  return (
    <div className={styles.detailPanel}>
      {/* Header */}
      <div className={styles.panelHeader}>
        <div className={styles.panelLabel}>AP Subject Details</div>
        <h3 className={styles.panelTitle}>{subject.name}</h3>
        <div className={styles.panelTags}>
          <span className={styles.panelTag}>⏱ {subject.duration}</span>
          <span className={styles.panelTag}>📊 {subject.format}</span>
          <span className={`${styles.panelTag} ${styles.panelTagBlue}`}>{subject.credits}</span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className={styles.panelBody}>

        {/* What is */}
        <section className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>
            <span className={styles.panelSectionDot} />
            What is {subject.name}?
          </div>
          <p className={styles.panelText}>{d.what}</p>
        </section>

        {/* Exam Format */}
        <section className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>
            <span className={styles.panelSectionDot} />
            Exam Format (2025–26)
          </div>
          <div className={styles.formatGrid}>
            {d.examFormat.map((item) => (
              <div key={item.label} className={styles.formatRow}>
                <span className={styles.formatLabel}>{item.label}</span>
                <span className={styles.formatValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>
            <span className={styles.panelSectionDot} />
            Revised Curriculum
          </div>
          <ul className={styles.curriculumList}>
            {d.curriculum.map((item, i) => (
              <li key={i} className={styles.curriculumItem}>
                <span className={styles.curriculumNum}>{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Scoring */}
        <section className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>
            <span className={styles.panelSectionDot} />
            Scoring
          </div>
          <div className={styles.scoringGrid}>
            {d.scoring.map((item, i) => (
              <div key={i} className={styles.scoringCard}>
                <div className={styles.scoringValue}>{item.value}</div>
                <div className={styles.scoringLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Tips */}
        <section className={styles.panelSection}>
          <div className={styles.panelSectionTitle}>
            <span className={styles.panelSectionDot} />
            Key Tips
          </div>
          <div className={styles.tipsList}>
            {d.tips.map((tip, i) => (
              <div key={i} className={styles.tipItem}>
                <span className={styles.tipNumber}>{i + 1}</span>
                <span className={styles.tipText}>{tip}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function APSubjects() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [selectedSubject, setSelectedSubject] = useState<Subject>(
    SUBJECTS[0]
  );

  const filtered =
    activeTab === "all"
      ? SUBJECTS
      : SUBJECTS.filter((s) => s.category === activeTab);

  const handleTabChange = (tab: Category) => {
    setActiveTab(tab);
    const firstInTab =
      tab === "all" ? SUBJECTS[0] : SUBJECTS.find((s) => s.category === tab);
    if (firstInTab) setSelectedSubject(firstInTab);
  };

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
            Click any subject to explore exam format, curriculum, scoring, and expert tips.
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
              onClick={() => handleTabChange(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Split Layout — always open */}
        <div className={styles.splitLayout}>

          {/* Left: subject list */}
          <div className={styles.subjectList}>
            {filtered.map((subject) => (
              <SubjectListItem
                key={subject.name}
                subject={subject}
                isActive={selectedSubject?.name === subject.name}
                onClick={() => setSelectedSubject(subject)}
              />
            ))}
          </div>

          {/* Right: detail panel */}
          <DetailPanel subject={selectedSubject} />

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