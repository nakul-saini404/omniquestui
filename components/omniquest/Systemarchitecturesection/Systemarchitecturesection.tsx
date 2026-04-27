"use client";
// components/SystemArchitectureSection/SystemArchitectureSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./SystemArchitectureSection.module.css";

// ── Types ────────────────────────────────────────────────────────────────────

type Accent = "blue" | "purple" | "green";

interface Panel {
  accent: Accent;
  pathway: string;
  title: string;
  audience: string;
  desc: string;
  bullets: string[];
  tagline: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const PANELS: Panel[] = [
  {
    accent: "blue",
    pathway: "Pathway 01 · EduQuest",
    title: "EduQuest",
    audience: "For students targeting top global universities",
    desc: "EduQuest builds academically strong students into strategically positioned applicants for the world's most selective universities. We don't guide applications — we architect positioning, aligning academics, narrative, and profile into a coherent admissions identity.",
    bullets: [
      "Admissions strategy for Ivy League & top global universities",
      "Academic readiness & positioning architecture",
      "Essay & narrative design systems",
      "Long-term profile development (Grades 8–12)",
    ],
    tagline: "Where potential is structured into selection.",
  },
  {
    accent: "purple",
    pathway: "Pathway 02 · MBA Wizards",
    title: "MBA Wizards",
    audience: "For professionals targeting top global business schools",
    desc: "MBA Wizards transforms professional experience into high-impact, strategically positioned MBA applications. We design career narratives, reposition trajectories, and build application strategies that convert experience into admission outcomes.",
    bullets: [
      "MBA admissions strategy",
      "Application narrative architecture",
      "Career positioning & transition design",
      "Graduate school admissions systems",
    ],
    tagline: "From experience to elite business school positioning.",
  },
  {
    accent: "green",
    pathway: "Pathway 03 · Aptech",
    title: "Aptech",
    audience: "For individuals building real-world capability and execution depth",
    desc: "Aptech develops applied skill systems that translate learning into measurable, industry-relevant capability. Beyond learning, we focus on execution — building demonstrable competence that strengthens both career outcomes and academic profiles.",
    bullets: [
      "Applied skill development systems",
      "Industry-aligned capability building",
      "Real-world execution training",
      "Career readiness infrastructure",
    ],
    tagline: "Where capability becomes proof.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function SystemArchitectureSection() {
  return (
    <section className={styles.section} id="architecture">

      {/* ── Header ── */}
      <div className={`${styles.titleWrap} reveal`}>
        <div className={styles.sectionLabel}>System Architecture</div>
        <h2 className={styles.h2}>
          <em className={styles.h2Em}>Select Your</em>
          <br />Strategic Entry Point
        </h2>
        <p className={styles.subtitle}>
          Each pathway serves a distinct audience, collectively powered by a
          unified intelligence system designed to convert potential into
          measurable outcomes.
        </p>
      </div>

      {/* ── Panel grid ── */}
      <div className={`${styles.grid} reveal`}>
        {PANELS.map((panel) => (
          <div
            key={panel.title}
            className={`${styles.panel} ${styles[`li_${panel.accent}`]}`}
          >
            {/* colour bar */}
            <div className={`${styles.bar} ${styles[panel.accent]}`} />

            {/* pathway label */}
            <div className={`${styles.pathwayNum} ${styles[panel.accent]}`}>
              {panel.pathway}
            </div>

            {/* name */}
            <h3 className={styles.panelTitle}>{panel.title}</h3>

            {/* audience */}
            <div className={styles.audience}>{panel.audience}</div>

            {/* description */}
            <p className={styles.desc}>{panel.desc}</p>

            {/* bullet list */}
            <ul className={styles.bulletList}>
              {panel.bullets.map((b) => (
                <li key={b} className={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ul>

            {/* tagline */}
            <div className={styles.tagline}>{panel.tagline}</div>
          </div>
        ))}
      </div>

    </section>
  );
}