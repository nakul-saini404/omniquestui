"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Subjects.module.css";

/* ─── Types ─── */
interface SubjectCard {
  miniTitle: string;
  items: string[];
  type: "topics" | "info" | "struggles";
}

interface Subject {
  id: string;
  emoji: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  coreTitle: string;
  coreTopics: string[];
  aside: SubjectCard[];
}

/* ─── Data ─── */
const subjects: Subject[] = [
  {
    id: "chem",
    emoji: "⚗️",
    label: "Chemistry",
    badge: "HL & SL",
    title: "IB Chemistry",
    description:
      "EduQuest™ offers the best IB® Chemistry training with an IB® certified workforce. Our approach combines deep conceptual understanding with rigorous exam technique, covering all topics in the IB Chemistry syllabus for both HL and SL students.",
    coreTitle: "Core Topics Covered",
    coreTopics: [
      "Stoichiometric relationships & mole concept",
      "Atomic structure & periodic table trends",
      "Chemical bonding & structure (ionic, covalent, metallic)",
      "Energetics/Thermochemistry — Hess's Law, Born-Haber cycles (HL)",
      "Chemical kinetics — collision theory, rate expressions, reaction mechanisms",
      "Chemical equilibrium — Le Chatelier's principle, Ka, Kb, Kw",
      "Acids and bases — pH, buffer solutions, titration curves",
      "Redox processes & electrochemistry",
      "Organic chemistry — functional groups, reaction mechanisms (HL)",
      "Measurement, data processing and Internal Assessment (IA) guidance",
    ],
    aside: [
      {
        miniTitle: "HL vs SL Differences",
        type: "info",
        items: [
          "HL has additional topics including further organic chemistry and spectroscopic identification",
          "HL requires deeper mathematical treatment in thermodynamics and kinetics",
          "HL students sit Paper 3 with optional topic questions",
          "Both levels require a lab-based Internal Assessment (IA)",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Visual molecular models & interactive simulations",
          "Past paper walkthrough with marking scheme analysis",
          "IA topic selection, methodology and write-up support",
          "Dedicated sessions for Data Booklet proficiency",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Confusing organic mechanisms without visual aids",
          "Poor IA methodology leading to lost marks",
          "Weak maths foundations affecting calculations",
          "Not practising Paper 1 MCQs under timed conditions",
        ],
      },
    ],
  },
  {
    id: "phys",
    emoji: "⚛️",
    label: "Physics",
    badge: "HL & SL",
    title: "IB Physics",
    description:
      "At EduQuest™, we offer premium IB® Physics tutoring that focuses not only on understanding concepts and the mathematics behind them, but also on conveying the real-world applications that make physics meaningful and memorable.",
    coreTitle: "Core Topics Covered",
    coreTopics: [
      "Measurements, uncertainties & vectors",
      "Mechanics — kinematics, Newton's laws, momentum, energy",
      "Thermal physics — ideal gas laws, thermodynamics",
      "Waves — Doppler effect, standing waves, diffraction, interference",
      "Electricity & magnetism — circuits, electromagnetic induction (HL)",
      "Circular motion & gravitation",
      "Atomic, nuclear & particle physics",
      "Energy production — renewable and non-renewable sources",
      "Option topics — astrophysics, engineering physics (HL)",
      "Experimental design and IA support",
    ],
    aside: [
      {
        miniTitle: "HL vs SL Differences",
        type: "info",
        items: [
          "HL covers additional topics in fields and forces, electromagnetic induction and quantum physics",
          "HL mathematical treatment is significantly more rigorous",
          "HL has a longer Paper 3 with optional topic depth",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Concept-first approach before any equation work",
          "Diagrams and worked examples for every topic",
          "Full past-paper practice with mark-scheme analysis",
          "Real-world context to make concepts stick",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Applying formulae without conceptual understanding",
          "Vector and diagram errors under exam pressure",
          "Weak lab skills affecting IA marks significantly",
          "Under-preparing for Paper 2 long-answer questions",
        ],
      },
    ],
  },
  {
    id: "math",
    emoji: "📐",
    label: "Mathematics",
    badge: "AA & AI · HL & SL",
    title: "IB Mathematics",
    description:
      "IB Mathematics now offers two pathways — Analysis & Approaches (AA) for students who enjoy theory and proof, and Applications & Interpretation (AI) for students who prefer real-world problem solving. EduQuest covers both at HL and SL.",
    coreTitle: "Core Topics Covered",
    coreTopics: [
      "Algebra — sequences, binomial theorem, proof by induction (HL)",
      "Functions — transformations, inverse, composite, logarithmic",
      "Trigonometry — unit circle, identities, complex numbers (HL)",
      "Calculus — differentiation, integration, differential equations (HL)",
      "Statistics & probability — distributions, hypothesis testing, regression",
      "Geometry & trigonometry — vectors, 3D geometry (HL)",
      "Exploration (Mathematical Investigation / IA) guidance",
      "GDC (graphic display calculator) exam technique",
    ],
    aside: [
      {
        miniTitle: "AA vs AI — Which to Choose?",
        type: "info",
        items: [
          "AA: Pure mathematics, proofs, abstract thinking — suits science/engineering paths",
          "AI: Data-driven, modelling, statistics — suits business, social sciences",
          "Both have HL and SL levels with different content breadth",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Step-by-step worked solutions for every question type",
          "Weekly timed practice paper sets",
          "Dedicated IA topic selection and exploration support",
          "GDC proficiency training built into every session",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Choosing the wrong pathway (AA vs AI) for their strengths",
          "Weak algebraic manipulation affecting higher topics",
          "Poor IA exploration leading to low scores",
          "Calculator dependency without conceptual backup",
        ],
      },
    ],
  },
  {
    id: "bio",
    emoji: "🧬",
    label: "Biology",
    badge: "HL & SL",
    title: "IB Biology",
    description:
      "IB Biology is one of the most content-heavy subjects in the Diploma Programme. EduQuest™ tutors help students master both the factual recall and application skills required to score at the highest levels in HL and SL examinations.",
    coreTitle: "Core Topics Covered",
    coreTopics: [
      "Cell biology — structure, ultrastructure, membrane transport",
      "Molecular biology — DNA structure, replication, protein synthesis",
      "Genetics — Mendelian inheritance, chromosomal theory, biotechnology",
      "Ecology — nutrient cycling, population dynamics, conservation",
      "Evolution & biodiversity — natural selection, cladistics",
      "Human physiology — digestion, gas exchange, blood, neurons",
      "HL Extensions — metabolism, animal physiology, biotechnology",
      "Practical skills & IA design support",
    ],
    aside: [
      {
        miniTitle: "HL vs SL Differences",
        type: "info",
        items: [
          "HL adds topics on metabolism, animal physiology and additional options",
          "HL students must study one Option topic in depth",
          "HL Paper 3 includes data-based questions requiring analysis",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Annotated diagrams for every system and process",
          "Command-term flashcard practice (define, explain, compare)",
          "Focus on data analysis questions that differentiate top scorers",
          "IA topic brainstorming and methodology coaching",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Volume of content overwhelms students who don't use active recall",
          "Not knowing exact command-term responses costs easy marks",
          "Weak graph/data interpretation skills on Paper 1 and 3",
          "IA lacking a clear research question or statistical analysis",
        ],
      },
    ],
  },
  {
    id: "eng",
    emoji: "📖",
    label: "English",
    badge: "Lang & Lit · Literature · HL & SL",
    title: "IB English",
    description:
      "IB English is assessed through a combination of written tasks, individual oral commentary, Paper 1 (unseen text analysis) and Paper 2 (comparative essay). EduQuest tutors help students develop sophisticated analytical writing and confident oral skills.",
    coreTitle: "Areas Covered",
    coreTopics: [
      "Paper 1 — Guided textual analysis of unseen literary & non-literary texts",
      "Paper 2 — Comparative essay on studied works with literary critics",
      "Individual Oral (IO) — analysis of a global issue across two works",
      "Higher Level Essay (HL only) — extended literary analysis",
      "Literary devices — metaphor, symbolism, structure, tone, voice",
      "Non-literary text types — speeches, advertisements, editorials",
      "Comparative writing techniques and paragraph structure",
      "Time management and essay planning under exam conditions",
    ],
    aside: [
      {
        miniTitle: "Language & Literature vs Literature",
        type: "info",
        items: [
          "Lang & Lit: Studies both literary and non-literary texts; media and language in context",
          "Literature: Focuses exclusively on literary works; deeper textual analysis required",
          "Both pathways available at HL and SL with different mark distributions",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Live practice commentaries with tutor feedback",
          "IO preparation with mock recordings and scoring",
          "Essay structure templates and paragraph frameworks",
          "Close reading drills on diverse text types",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Generic analysis without specific textual evidence",
          "Poor IO preparation and underdeveloped global issue arguments",
          "Descriptive essays instead of analytical ones",
          "Time pressure causing incomplete Paper 1 responses",
        ],
      },
    ],
  },
  {
    id: "myp",
    emoji: "🏫",
    label: "MYP",
    badge: "Ages 11–16 · All Subjects",
    title: "IB MYP",
    description:
      "The Middle Years Programme (MYP) is a five-year programme for students aged 11–16. EduQuest provides comprehensive MYP tutoring across all subject groups, with particular focus on developing the skills required for the eAssessment and Personal Project.",
    coreTitle: "Subjects & Areas Covered",
    coreTopics: [
      "MYP Sciences — chemistry, physics, biology integration",
      "MYP Mathematics — number, algebra, geometry, statistics",
      "MYP Language & Literature — analysis, writing skills",
      "MYP Individuals & Societies — history, geography, economics",
      "Personal Project — research, process journal, product & report",
      "MYP eAssessment preparation — on-screen exams",
      "Assessment criteria mastery — all four criteria per subject",
      "ATL (Approaches to Learning) skill development",
    ],
    aside: [
      {
        miniTitle: "MYP to DP Transition",
        type: "info",
        items: [
          "MYP content directly bridges into IB DP subjects — strong MYP foundation reduces DP difficulty significantly",
          "Personal Project skills transfer to DP Extended Essay",
          "MYP criterion-based grading prepares students for DP assessment expectations",
        ],
      },
      {
        miniTitle: "How We Teach It",
        type: "topics",
        items: [
          "Criterion-by-criterion breakdown for each subject",
          "Personal Project mentoring from idea to final submission",
          "eAssessment practice with technology-based question formats",
          "Interdisciplinary unit support across subject groups",
        ],
      },
      {
        miniTitle: "Why Students Struggle",
        type: "struggles",
        items: [
          "Not understanding the four-criterion assessment structure",
          "Personal Project lacking clear research process documentation",
          "Mixing descriptive and analytical responses incorrectly",
          "Underestimating eAssessment difficulty vs traditional exams",
        ],
      },
    ],
  },
];

/* ─── Helper: card type → icon ─── */
const cardIcon: Record<SubjectCard["type"], string> = {
  info: "⚖️",
  topics: "✏️",
  struggles: "⚠️",
};

/* ─── Component ─── */
export default function Subjects() {
  const [active, setActive] = useState("chem");
  const [animKey, setAnimKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    if (id === active) return;
    setActive(id);
    setAnimKey((k) => k + 1);
  };

  const subject = subjects.find((s) => s.id === active)!;

  return (
    <section
      id="subjects"
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
    >
      {/* Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Subjects</span>
        <h2 className={styles.sectionTitle}>
          IB Subject Coaching —{" "}
          <span className={styles.titleAccent}>All in One Place</span>
        </h2>
        <p className={styles.sectionSub}>
          Click a subject to explore topics covered, how we teach it, common
          challenges and what makes our coaching different.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs} role="tablist" aria-label="IB Subjects">
        {subjects.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === s.id}
            aria-controls={`panel-${s.id}`}
            className={`${styles.tab} ${active === s.id ? styles.tabActive : ""}`}
            onClick={() => handleTabClick(s.id)}
          >
            <span className={styles.tabEmoji}>{s.emoji}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        key={animKey}
        id={`panel-${subject.id}`}
        role="tabpanel"
        className={styles.panel}
      >
        <div className={styles.grid}>
          {/* ── Main card ── */}
          <div className={styles.main}>
            <span className={styles.badge}>{subject.badge}</span>
            <h2 className={styles.subjTitle}>{subject.title}</h2>
            <p className={styles.subjDesc}>{subject.description}</p>

            <div className={styles.miniTitle}>
              <span className={styles.miniTitleBar} />
              {subject.coreTitle}
            </div>
            <ul className={styles.topicList}>
              {subject.coreTopics.map((t, i) => (
                <li key={i} className={styles.topicItem}>
                  <span className={styles.topicArrow}>→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Aside cards ── */}
          <div className={styles.aside}>
            {subject.aside.map((card, i) => (
              <div
                key={card.miniTitle}
                className={`${styles.asideCard} ${card.type === "struggles" ? styles.asideCardStruggle : ""
                  }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.miniTitle}>
                  <span className={styles.miniTitleBar} />
                  <span className={styles.cardIconBadge}>
                    {cardIcon[card.type]}
                  </span>
                  {card.miniTitle}
                </div>

                {card.type === "struggles" ? (
                  <ul className={styles.failList}>
                    {card.items.map((item, j) => (
                      <li key={j} className={styles.failItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className={styles.topicList}>
                    {card.items.map((item, j) => (
                      <li key={j} className={styles.topicItem}>
                        <span className={styles.topicArrow}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}