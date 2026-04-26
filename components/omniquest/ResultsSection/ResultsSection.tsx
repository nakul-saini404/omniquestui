"use client";
// components/ResultsSection/ResultsSection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import styles from "./ResultsSection.module.css";
import { METRICS } from "@/app/omniquest/data/constants";

const US_UK = [
  "Harvard","MIT","Stanford","Wharton","Columbia","NYU Stern",
  "UCLA","UC Berkeley","Oxford","Cambridge","LSE","UCL","KCL",
  "Imperial","LBS",
];

const GLOBAL = ["INSEAD","ISB","NUS","McGill","UBC","Toronto","HEC Paris"];

/** Animate a counter element from 0 → target over ~1800ms */
function animCounter(el: HTMLElement, target: number) {
  let start = 0;
  const step = (ts: number) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / 1800, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const v = Math.round(ease * target);
    el.textContent = v >= 1000 ? v.toLocaleString() + "+" : v + "+";
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function ResultsSection() {
  const numbersRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target ?? "0", 10);
            animCounter(el, target);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    numbersRef.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="results" aria-labelledby="results-h" className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={`reveal ${styles.header}`}>
          <div className={styles.eyebrowRow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Success Outcomes</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 id="results-h" className={styles.h2}>Numbers That Speak</h2>
          <h2 className={styles.h2Gold}>For Themselves</h2>
          <p className={styles.headerBody}>
            A decade of strategic consulting,{" "}
            <em>precision profile building</em>, and data-driven{" "}
            <em className={styles.headerBodyEm}>admissions outcomes</em>.
          </p>
        </div>

        {/* ── Metrics ── */}
        <div className={`reveal ${styles.metricsRow}`}>
          {METRICS.map((m, i) => (
            <div key={m.label} className={styles.metricCell}>
              <span className={styles.metricBadge}>{m.badge}</span>
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
                data-target={m.target}
                className={styles.metricNumber}
              >
                0
              </span>
              <p className={styles.metricLabel}>{m.label}</p>
            </div>
          ))}
        </div>

        {/* ── University tags ── */}
        <div className={`reveal ${styles.uniGrid}`}>
          <div>
            <p className={styles.uniGroupTitle}>
              <span className={styles.underlineGold}>United States</span>
              {" "}&amp;{" "}
              <span className={styles.underlineGold}>United Kingdom</span>
            </p>
            <div className={styles.tagWrap}>
              {US_UK.map((u) => (
                <span key={u} className={styles.uniTag}>{u}</span>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.uniGroupTitle}>Global Institutions</p>
            <div className={styles.tagWrap}>
              {GLOBAL.map((u) => (
                <span key={u} className={styles.uniTag}>{u}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}