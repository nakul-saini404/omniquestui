"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Curriculum.module.css";

/* ── Types ── */
interface CurrItem {
  num: string;
  title: string;
  body: string;
}

interface Tab {
  id: string;
  label: string;
  items: CurrItem[];
}

/* ── Static data ── */
const tabs: Tab[] = [
  {
    id: "lr",
    label: "Logical Reasoning",
    items: [
      {
        num: "01",
        title: "Argument Core Identification",
        body: "Isolate conclusions, premises, and background facts. Build the mental model that underpins every LR question type.",
      },
      {
        num: "02",
        title: "Assumption Family Questions",
        body: "Master Necessary Assumption, Sufficient Assumption, Strengthen, and Weaken — the four most common question types.",
      },
      {
        num: "03",
        title: "Flaw & Method of Reasoning",
        body: "Classify 20+ common argument flaws. Learn the precise language the LSAT uses to describe structural errors.",
      },
      {
        num: "04",
        title: "Inference & Must Be True",
        body: "Develop a conservative, evidence-only approach to inference questions — eliminating attractive but overreaching answers.",
      },
      {
        num: "05",
        title: "Parallel Reasoning",
        body: "Abstract argument forms and match structural logic across different content domains. Speed techniques for time management.",
      },
      {
        num: "06",
        title: "Principle Questions",
        body: "Apply abstract principles to specific cases. Identify the scenario that best conforms to or violates a stated rule.",
      },
    ],
  },
  {
    id: "ar",
    label: "Logic Games",
    items: [
      {
        num: "01",
        title: "Diagramming Fundamentals",
        body: "Build airtight notation systems for rules — the foundation of speed in Logic Games.",
      },
      {
        num: "02",
        title: "Basic Linear Ordering",
        body: "Sequencing games with strict conditions. Master slot-filling, deductions, and elimination frameworks.",
      },
      {
        num: "03",
        title: "Advanced Grouping Games",
        body: "In/out, defined/undefined groups, and multi-tier setups. The most varied and tricky game family.",
      },
      {
        num: "04",
        title: "Combination & Hybrid Games",
        body: "Layer grouping and ordering constraints simultaneously. Rare but high-difficulty games that define top scores.",
      },
      {
        num: "05",
        title: "Upfront Deduction Technique",
        body: "Extract all inferences before touching a single question — the key to answering 23+ questions under time pressure.",
      },
      {
        num: "06",
        title: "Game Recycling Drills",
        body: "Timed re-runs of previously solved games to internalise setup patterns and automate deduction chains.",
      },
    ],
  },
  {
    id: "rc",
    label: "Reading Comp",
    items: [
      {
        num: "01",
        title: "Passage Mapping Strategy",
        body: "Build a minimal but precise structural map of each passage — tracking viewpoints, tone shifts, and key paragraph roles.",
      },
      {
        num: "02",
        title: "Main Point & Primary Purpose",
        body: "Identify what the entire passage is ultimately trying to accomplish — foundational for all other RC question types.",
      },
      {
        num: "03",
        title: "Inference & Detail Questions",
        body: "Precise, evidence-anchored answer selection. Learn to eliminate answers that go beyond passage information.",
      },
      {
        num: "04",
        title: "Author's Tone & Attitude",
        body: "Decode academic hedging and nuanced stance language. Never misread a passage author's actual position again.",
      },
      {
        num: "05",
        title: "Comparative Reading",
        body: "Simultaneously track two authors' positions. Identify agreement, disagreement, and the scope of each perspective.",
      },
      {
        num: "06",
        title: "Speed-Reading Drills",
        body: "Timed passage sets targeting the 3-minute read ceiling. Expand comprehension breadth without sacrificing accuracy.",
      },
    ],
  },
  {
    id: "strategy",
    label: "Strategy",
    items: [
      {
        num: "01",
        title: "Section Time Management",
        body: "Section-level pacing plans tailored to your accuracy profile — maximise points by intelligently allocating 35 minutes.",
      },
      {
        num: "02",
        title: "Guessing Strategy & Skip Logic",
        body: "Know precisely when to skip, when to guess, and how to mark hard questions for efficient revisiting in the final minutes.",
      },
      {
        num: "03",
        title: "Full PrepTest Simulation",
        body: "Proctored, full-length practice tests under real conditions — every 2 weeks. Followed by instructor-led debrief sessions.",
      },
      {
        num: "04",
        title: "Stamina & Stress Management",
        body: "Mental conditioning techniques to sustain performance over the full 3-hour exam. Essential for score stability.",
      },
    ],
  },
];

/* ── Component ── */
export default function Curriculum() {
  const [activeTab, setActiveTab] = useState<string>("lr");
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-based reveal via IntersectionObserver */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.curriculum} id="curriculum" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={styles.reveal}>
          <div className={`${styles.secBadge} ${styles.secBadgeNavy}`}>
            Curriculum
          </div>
          <h2 className={styles.secTitle}>
            What You&apos;ll <em>Master</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.secSub}>
            A structured, phased curriculum designed to take you from diagnostic
            baseline to exam-day confidence.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div
          className={`${styles.curriculumTabs} ${styles.reveal}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn}${activeTab === tab.id ? " " + styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Panels ── */}
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.curriculumPanel}${activeTab === tab.id ? " " + styles.active : ""}`}
          >
            {tab.items.map((item) => (
              <div key={item.num} className={styles.currItem}>
                <div className={styles.currNum}>{item.num}</div>
                <div className={styles.currContent}>
                  <div className={styles.currTitle}>{item.title}</div>
                  <div className={styles.currBody}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}