"use client";

import React, { useEffect, useRef } from "react";
import styles from "./EduQuestPillars.module.css";

/* ── Data ────────────────────────────────────────────── */
const pillars = [
  {
    number: "01",
    label: "Pillar 1",
    focus: "SAT Mastery & Academic Readiness",
    description:
      "Rigorous test preparation and foundational academic excellence that unlocks opportunity at every tier of higher education.",
    icon: "◈",
    accent: "#C9973A",
  },
  {
    number: "02",
    label: "Pillar 2",
    focus: "Purpose-Driven Profile Depth & Leadership",
    description:
      "Cultivating authentic extracurricular narratives and leadership trajectories that distinguish candidates beyond the transcript.",
    icon: "◉",
    accent: "#2E3A52",
  },
  {
    number: "03",
    label: "Pillar 3",
    focus: "Application Strategy, Storytelling & Execution",
    description:
      "Precision-crafted application architecture and compelling personal narratives that convert ambition into admission.",
    icon: "◇",
    accent: "#C9973A",
  },
];

const dimensions = [
  {
    code: "I",
    title: "Intellectual Identity",
    short: "Discover how you think — not just what you've done.",
    detail:
      "We map your curiosity, cognitive strengths, and natural depth to build your unique intellectual fingerprint.",
  },
  {
    code: "II",
    title: "Direction Architecture",
    short: "Build a guiding framework that lasts years, not months.",
    detail:
      "Your long-term academic direction is shaped to be personally aligned, strategically coherent, and deeply sustainable.",
  },
  {
    code: "III",
    title: "Signature Work",
    short: "Create work that means something.",
    detail:
      "Research, ventures, original ideas — substantive outputs that speak for themselves on any application or platform.",
  },
  {
    code: "IV",
    title: "Strategic Access",
    short: "Direct advisory when decisions actually matter.",
    detail:
      "Priority guidance at key milestones ensures you never navigate a high-stakes moment alone or unprepared.",
  },
  {
    code: "V",
    title: "Curated Exposure",
    short: "Fewer, better opportunities — each one intentional.",
    detail:
      "Selective participation in research platforms, competitive forums, and visibility opportunities chosen for your specific profile.",
  },
  {
    code: "VI",
    title: "Narrative Maturity",
    short: "Your story isn't written at application time — it's already lived.",
    detail:
      "By the time you apply, your narrative is consistent, coherent, and naturally developed. It cannot be faked.",
  },
];

const distinctions = [
  { stat: "Limited", label: "Students per cohort" },
  { stat: "Multi-year", label: "Advisory relationship" },
  { stat: "Bespoke", label: "No fixed template" },
  { stat: "Senior", label: "Strategic involvement" },
];

/* ── Scroll-reveal hook ──────────────────────────────── */
function useReveal() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), i * 110);
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);
  return refs;
}

/* ── Component ───────────────────────────────────────── */
export default function EduQuestPillars() {
  const pillarRefs = useReveal();
  const dimRefs = useReveal();
  const statRefs = useReveal();

  return (
    <main className={styles.page}>
      <div className={styles.bgTexture} aria-hidden="true" />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Framework</span>
        <h1 className={styles.heroTitle}>
          <span>EduQuest</span>
          <em>Three-Pillar</em>
          <span>Methodology</span>
        </h1>
        <p className={styles.heroSub}>
          A holistic architecture for transforming students into exceptional
          candidates — across academics, identity, and narrative.
        </p>
      </section>

      {/* ── Three Pillars ── */}
      <section className={styles.pillarSection}>
        <div className={styles.grid3}>
          {pillars.map((p, i) => (
            <div
              key={p.number}
              ref={(el) => {
                pillarRefs.current[i] = el;
              }}
              className={styles.pillarCard}
              style={{ "--accent": p.accent } as React.CSSProperties}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <span className={styles.num}>{p.number}</span>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
                <hr className={styles.rule} />
                <p className={styles.cardLabel}>{p.label}</p>
                <h2 className={styles.cardFocus}>{p.focus}</h2>
                <p className={styles.cardDesc}>{p.description}</p>
                <div className={styles.accentBar} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Premium Consulting ── */}
      <section className={styles.premiumSection}>
        <div className={styles.premiumHeader}>
          <span className={styles.eyebrow}>Premium Consulting</span>
          <h2 className={styles.sectionTitle}>
            Not just prep.<em> Intellectual shaping.</em>
          </h2>
          <p className={styles.sectionSub}>
            A select advisory relationship that begins years before you apply —
            building the foundation from which strong applications naturally
            emerge.
          </p>
        </div>

        {/* Stats strip */}
        <div className={styles.statsRow}>
          {distinctions.map((d, i) => (
            <div
              key={d.label}
              ref={(el) => {
                statRefs.current[i] = el;
              }}
              className={styles.statBox}
            >
              <span className={styles.statNum}>{d.stat}</span>
              <span className={styles.statLabel}>{d.label}</span>
            </div>
          ))}
        </div>

        {/* Six dimensions */}
        <div className={styles.dimGrid}>
          {dimensions.map((d, i) => (
            <div
              key={d.code}
              ref={(el) => {
                dimRefs.current[i] = el;
              }}
              className={styles.dimCard}
            >
              <span className={styles.dimCode}>{d.code}</span>
              <h3 className={styles.dimTitle}>{d.title}</h3>
              <p className={styles.dimShort}>{d.short}</p>
              <p className={styles.dimDetail}>{d.detail}</p>
            </div>
          ))}
        </div>

        {/* Who it's for */}
        <div className={styles.forBlock}>
          <p className={styles.forLabel}>This is for you if you —</p>
          <ul className={styles.forList}>
            <li>Value depth over a long list of activities</li>
            <li>Want clarity in direction early, not last-minute correction</li>
            <li>
              Understand that real differentiation is built, not assembled
            </li>
            <li>
              Prefer structured intellectual development over surface-level prep
            </li>
          </ul>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.foot}>
        <span className={styles.footMark}>EQ</span>
        <span className={styles.footText}>
          Three pillars. One decisive outcome.
        </span>
      </footer>
    </main>
  );
}