"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CurriculumSection.module.css";

// ── Data ─────────────────────────────────────────────────────────────────────

interface Module {
  num: string;
  title: string;
  topics: string[];
}

interface Tab {
  id: string;
  label: string;
  modules: Module[];
}

const tabs: Tab[] = [
  {
    id: "quant",
    label: "Quantitative Ability",
    modules: [
      {
        num: "Module 01",
        title: "Arithmetic Foundation",
        topics: [
          "Percentage & Ratios",
          "Simple & Compound Interest",
          "Time & Work",
          "Profit & Loss",
          "Averages & Mixtures",
        ],
      },
      {
        num: "Module 02",
        title: "Algebra Filter",
        topics: [
          "Polynomials",
          "Linear & Quadratic Equations",
          "Logarithms",
          "Progressions (AP/GP/HP)",
          "Functions & Graphs",
        ],
      },
      {
        num: "Module 03",
        title: "Geometry & Trigonometry",
        topics: [
          "Coordinate Geometry",
          "Trigonometric Identities",
          "Heights & Distances",
          "2D & 3D Mensuration",
        ],
      },
      {
        num: "Module 04",
        title: "Modern Math",
        topics: [
          "Set Theory",
          "Permutation & Combination",
          "Probability",
          "Determinants & Matrices",
        ],
      },
    ],
  },
  {
    id: "verbal",
    label: "Verbal Ability",
    modules: [
      {
        num: "Module 01",
        title: "Reading Dynamics",
        topics: [
          "Speed Reading Techniques",
          "Long-form RC Passages",
          "Inference & Conclusion",
          "Author's Tone & Purpose",
        ],
      },
      {
        num: "Module 02",
        title: "Vocabulary Mastery",
        topics: [
          "Roots & Etymology",
          "Prefixes & Suffixes",
          "Word Power Made Easy",
          "Contextual Usage",
        ],
      },
      {
        num: "Module 03",
        title: "Grammar Elite",
        topics: [
          "Advanced Syntax",
          "Tenses & Voice",
          "Modifiers & Parallelism",
          "Error Spotting",
        ],
      },
      {
        num: "Module 04",
        title: "Critical Reasoning",
        topics: [
          "Strengthen & Weaken Arguments",
          "Assumptions & Conclusions",
          "Course of Action",
          "Logical Deductions",
        ],
      },
    ],
  },
  {
    id: "dilr",
    label: "DI & Logical Reasoning",
    modules: [
      {
        num: "Module 01",
        title: "Analytical Reasoning",
        topics: [
          "Linear & Circular Arrangement",
          "Complex Puzzles",
          "Distribution Problems",
          "Scheduling & Sequencing",
        ],
      },
      {
        num: "Module 02",
        title: "Visual Logic",
        topics: [
          "Cubes & Dice",
          "Paper Cutting & Folding",
          "Series Completion",
          "Pattern Recognition",
        ],
      },
      {
        num: "Module 03",
        title: "Data Interpretation",
        topics: [
          "Bar, Line & Pie Charts",
          "Caselets & Tables",
          "Multi-step Analysis",
          "Data Sufficiency",
        ],
      },
      {
        num: "Module 04",
        title: "Advanced DI",
        topics: [
          "Mixed Graphs",
          "Network Diagrams",
          "Complex Comparison Sets",
          "Speed & Accuracy Drills",
        ],
      },
    ],
  },
];

// ── easeOutExpo counter ───────────────────────────────────────────────────────

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, duration = 1600, started = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(easeOutExpo(p) * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);
  return value;
}

// ── Module card ───────────────────────────────────────────────────────────────

function ModuleCard({
  mod,
  index,
  panelKey,
}: {
  mod: Module;
  index: number;
  panelKey: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
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
    }, index * 80);
    return () => clearTimeout(timer);
  }, [panelKey, index]);

  return (
    <div
      ref={ref}
      className={`${styles.currModule} ${visible ? styles.currModuleVisible : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.currModuleNum}>{mod.num}</div>
      <h4 className={styles.currModuleTitle}>{mod.title}</h4>
      <ul className={styles.currModuleList}>
        {mod.topics.map((topic) => (
          <li key={topic} className={styles.currModuleItem}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState("quant");
  const [animKey, setAnimKey] = useState(0); // bump to re-trigger card anims on tab change

  // Section header scroll reveal
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);
  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setHeadVisible(true); obs.disconnect(); }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Progress bar scroll reveal
  const progRef = useRef<HTMLDivElement>(null);
  const [progStarted, setProgStarted] = useState(false);
  useEffect(() => {
    const el = progRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setProgStarted(true); obs.disconnect(); }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(100, 1600, progStarted);

  function handleTabChange(id: string) {
    setActiveTab(id);
    setAnimKey((k) => k + 1); // force re-mount animation
  }

  const activeModules = tabs.find((t) => t.id === activeTab)?.modules ?? [];

  return (
    <section className={styles.curriculum} id="curriculum">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`${styles.sectionHead} ${headVisible ? styles.sectionHeadVisible : ""}`}
        >
          <div className={styles.sectionLabel}>Complete Curriculum</div>
          <h2 className={styles.sectionHeading}>Comprehensive Syllabus Breakdown</h2>
          <p className={styles.sectionSub}>
            Our curriculum is mapped to the latest NTA and IIM exam patterns.
            Every topic. Every concept. Every edge case.
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div className={styles.currTabs} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.currTab} ${activeTab === tab.id ? styles.currTabActive : ""}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Module grid ── */}
        <div className={styles.currPanel}>
          {activeModules.map((mod, i) => (
            <ModuleCard
              key={`${animKey}-${mod.num}`}
              mod={mod}
              index={i}
              panelKey={`${animKey}`}
            />
          ))}
        </div>

        {/* ── Progress bar ── */}
        <div ref={progRef} className={styles.progressBarWrap}>
          <div className={styles.progHeader}>
            <div className={styles.progLabel}>Curriculum Coverage</div>
            <div className={styles.progPct}>{count}%</div>
          </div>
          <div className={styles.progTrack}>
            <div
              className={`${styles.progFill} ${progStarted ? styles.progFillAnimate : ""}`}
            />
          </div>
        </div>

      </div>
    </section>
  );
}