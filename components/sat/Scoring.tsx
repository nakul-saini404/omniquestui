"use client";

import { useEffect } from "react";
import styles from "./Scoring.module.css";

const scoreRows = [
  { range: "1550–1600", uni: "Harvard, MIT, Stanford", pct: "99th+", isGold: true },
  { range: "1500–1550", uni: "Columbia, Wharton, NYU", pct: "98th–99th", isGold: true },
  { range: "1450–1500", uni: "UCLA, UC Berkeley, LSE", pct: "96th–98th", isGold: false },
  { range: "1400–1450", uni: "Purdue, UBC, King's College", pct: "93rd–96th", isGold: false },
  { range: "1300–1400", uni: "Many Top-50 Universities", pct: "85th–93rd", isGold: false },
  { range: "1200–1300", uni: "Good Universities Globally", pct: "72nd–85th", isGold: false },
];

const adaptSteps = [
  "You take <strong>Module 1</strong> with a mix of easy, medium, and hard questions.",
  "Performance routes you to <strong>Module 2 Easy</strong> or <strong>Module 2 Hard</strong>.",
  "Module 2 Hard → potential max score <strong>~800 per section</strong>.",
  "Module 2 Easy → score ceiling capped around <strong>650–680 per section</strong>.",
  "EduQuest trains you to <strong>target Module 2 Hard</strong> from Day 1.",
];

export default function Scoring() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            document.querySelectorAll<HTMLElement>(".diffBar").forEach((bar) => {
              bar.style.width = bar.dataset.width || "0%";
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("scoring");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.scoring} id="scoring">
      <div className="container">
        <div className="section-head reveal">
          <div className="label">SAT Scoring Explained</div>
          <h2>
            What Score Do You<br />
            <em>Need</em> for Top Universities?
          </h2>
          <p>
            Understanding SAT scoring helps you set the right target and plan backwards
            from your goal university.
          </p>
        </div>

        <div className={`${styles.scoringGrid} reveal`}>
          <div>
            <table className={styles.scoreTable}>
              <thead>
                <tr>
                  <th>Score Range</th>
                  <th>University Tier</th>
                  <th>Percentile</th>
                </tr>
              </thead>
              <tbody>
                {scoreRows.map((r) => (
                  <tr key={r.range}>
                    <td className={r.isGold ? styles.goldCell : ""}>{r.range}</td>
                    <td>{r.uni}</td>
                    <td>{r.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div className="label" style={{ marginBottom: "16px" }}>
              Section-wise Difficulty Spread
            </div>
            <div className={styles.difficultyBars}>
              {[
                { name: "Easy Questions (Module 1)", pct: "~33%", cls: styles.easy, width: "33%" },
                { name: "Medium Questions", pct: "~40%", cls: styles.medium, width: "40%" },
                { name: "Hard Questions (Module 2 Hard)", pct: "~27%", cls: styles.hard, width: "27%" },
              ].map((d) => (
                <div key={d.name} className={styles.diffItem}>
                  <div className={styles.diffHeader}>
                    <span className={styles.diffName}>{d.name}</span>
                    <span className={styles.diffPct}>{d.pct}</span>
                  </div>
                  <div className={styles.diffBarWrap}>
                    <div
                      className={`${styles.diffBar} ${d.cls} diffBar`}
                      data-width={d.width}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.adaptiveBox}>
              <h4>Adaptive Testing Explained</h4>
              <div className={styles.adaptiveSteps}>
                {adaptSteps.map((step, i) => (
                  <div key={i} className={styles.adaptStep}>
                    <div className={styles.adaptNum}>{i + 1}</div>
                    <span dangerouslySetInnerHTML={{ __html: step }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
