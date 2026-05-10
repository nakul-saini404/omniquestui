"use client";

import { useEffect, useRef } from "react";
import styles from "./Roadmap.module.css";

const steps = [
  { icon: "🔍", step: "Step 01 · Week 1",    title: "Diagnostic Assessment",            body: "Full diagnostic mock to identify your baseline score and pinpoint your weakest section.", side: "left" },
  { icon: "📖", step: "Step 02 · Weeks 2–3", title: "Reading & Vocabulary Foundation",  body: "Speed-reading techniques, vocabulary-in-context strategies, and passage inference skills.", side: "right" },
  { icon: "🎧", step: "Step 03 · Weeks 4–5", title: "Listening Mastery",                body: "Academic lecture comprehension, note-taking strategies, and inference question tactics.", side: "left" },
  { icon: "🗣️", step: "Step 04 · Weeks 6–7", title: "Speaking Response Templates",      body: "Proven templates for all 4 speaking task types — drilled until fluency is automatic.", side: "right" },
  { icon: "✍️", step: "Step 05 · Weeks 8–9", title: "Integrated & Independent Writing", body: "Integrated writing (listen + read → write) and academic essay with AI-aligned templates.", side: "left" },
  { icon: "📊", step: "Step 06 · Weeks 10–11", title: "Mock Tests + Gap Analysis",      body: "Two full-length timed simulations with section-wise score reports and gap-closure plans.", side: "right" },
  { icon: "🏆", step: "Step 07 · Week 12",   title: "Final Sprint & Test-Day Strategy", body: "High-yield revision, test-day logistics, and a final mock. Walk in calm and confident.", side: "left" },
] as const;

export default function Roadmap() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    if (headerRef.current) io.observe(headerRef.current);
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.success} id="success">
      <div className={styles.gridTex} aria-hidden="true" />
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.reveal} ${styles.headerWrap}`} ref={headerRef}>
          <div className={styles.secLabel}>Roadmap</div>
          <h2 className={styles.heading}>Your <em>Way to Success</em> — TOEFL 100+ in 12 Weeks</h2>
          <p className={styles.sub}>A clear, structured path from enrolment to your target score.</p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.spine} aria-hidden="true" />

          {steps.map((s, i) => (
            <div key={i} className={`${styles.tlItem} ${s.side === "right" ? styles.tlRight : ""}`}>
              {/* Card */}
              <div
                className={styles.tlCard}
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <div className={styles.tlStep}>{s.step}</div>
                <h4 className={styles.tlTitle}>{s.title}</h4>
                <p className={styles.tlBody}>{s.body}</p>
              </div>

              {/* Dot */}
              <div className={styles.tlDot}>{s.icon}</div>

              {/* Empty spacer */}
              <div className={styles.tlEmpty} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}