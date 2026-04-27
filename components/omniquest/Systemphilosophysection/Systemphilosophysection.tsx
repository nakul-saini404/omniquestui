"use client";
// components/SystemPhilosophySection/SystemPhilosophySection.tsx
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./SystemPhilosophySection.module.css";
import {
  PHILOSOPHY_STEPS,
  BEFORE_AFTER,
  PHILOSOPHY_QUOTE,
} from "@/app/omniquest/data/constants";

export default function SystemPhilosophySection() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-h" className={styles.section}>
      <div className={styles.layout}>

        {/* ── Left — eyebrow + headline + steps ── */}
        <div className={`reveal ${styles.left}`}>
          <div className={styles.sectionLabel}>System Philosophy</div>

          <h2 id="philosophy-h" className={styles.h2}>
            One System.
            <br />
            <em className={styles.h2Em}>Different Outcomes.</em>
          </h2>

          <p className={styles.body}>
            Each pathway is independently designed for a specific audience,
            but built on the same underlying intelligence framework.
          </p>

          {/* numbered steps */}
          <div className={styles.steps}>
            {PHILOSOPHY_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`${styles.step} ${i === 0 ? styles.stepFirst : ""}`}
              >
                <div className={styles.stepMarker}>{step.num}</div>
                <div>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — before/after card + quote ── */}
        <div className={`reveal ${styles.right}`}>

          {/* before / after comparison */}
          <div className={styles.beforeAfter}>
            <div className={styles.baGrid}>

              {/* Before column */}
              <div className={`${styles.baCol} ${styles.baColBefore}`}>
                <div className={`${styles.baLabel} ${styles.baLabelBefore}`}>
                  {BEFORE_AFTER.before.label}
                </div>
                {BEFORE_AFTER.before.items.map((item) => (
                  <div key={item} className={`${styles.baItem} ${styles.baItemBefore}`}>
                    <div className={`${styles.baDot} ${styles.baDotBefore}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* After column */}
              <div className={`${styles.baCol} ${styles.baColAfter}`}>
                <div className={`${styles.baLabel} ${styles.baLabelAfter}`}>
                  {BEFORE_AFTER.after.label}
                </div>
                {BEFORE_AFTER.after.items.map((item) => (
                  <div key={item} className={`${styles.baItem} ${styles.baItemAfter}`}>
                    <div className={`${styles.baDot} ${styles.baDotAfter}`} />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* pull-quote */}
          <div className={styles.quoteBox}>
            <blockquote className={styles.quote}>
              &ldquo;
              {/* split on em-dash to bold the second half */}
              {PHILOSOPHY_QUOTE.split(" — ")[0]} &mdash;{" "}
              <strong className={styles.quoteStrong}>
                {PHILOSOPHY_QUOTE.split(" — ")[1]}
              </strong>
              &rdquo;
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}