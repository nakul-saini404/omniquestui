"use client";
import styles from "./ResultsSection.module.css";
import { METRICS } from "@/app/omniquest/data/constants";
import { useEffect, useRef } from "react";

const MARQUEE_UNIS = [
  "Harvard","MIT","Stanford","Wharton","Columbia","Oxford",
  "Cambridge","LSE","INSEAD","ISB","LBS","UC Berkeley",
  "NUS","Imperial","NYU Stern","HEC Paris","McGill","UCL",
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current
      ?.querySelectorAll(".fade-up")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="outcomes" ref={sectionRef} className={styles.section}>
      {/* ── Header ── */}
      <div className={`fade-up ${styles.head}`}>
        <p className={styles.sectionLabel}>Success Outcomes</p>
        <h2 className={styles.h2}>
          Numbers That Speak
          <br />
          for <em>Themselves</em>
        </h2>
        <p className={styles.subtext}>
          A decade of strategic consulting, precision profile building, and
          data-driven admissions outcomes.
        </p>
      </div>

      {/* ── Metrics grid ── */}
      <div className={`fade-up ${styles.grid}`}>
        {METRICS.map((m) => (
          <div key={m.label} className={styles.cell}>
            <div className={styles.num}>{m.display}</div>
            <div className={styles.label}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* ── Marquee ── */}
      <div className={`fade-up ${styles.marqueeWrap}`}>
        <div className={styles.marqueeInner}>
          {[...MARQUEE_UNIS, ...MARQUEE_UNIS].map((u, i) => (
            <>
              <span key={`${u}-${i}`} className={styles.marqueeItem}>{u}</span>
              <span key={`dot-${i}`} className={styles.marqueeDot}>·</span>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}