"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.heroGrid}>
          {/* LEFT COLUMN */}
          <div>
            <div className={styles.heroEyebrow}>
              <div className={styles.heroEyebrowLine} />
              <span className={styles.heroEyebrowText}>India's #1 SAT Coaching · 18+ Years</span>
            </div>

            <h1 className={styles.heroH1}>
              Score <em>1500+</em> on the<br />
              Digital SAT — With India's<br />
              Most Trusted Coaching
            </h1>

            <p className={styles.heroSub}>
              EduQuest prepares Grade 10–12 students for the Digital SAT 2026 with
              adaptive strategy, section-wise mastery, and a proven score improvement
              framework. Online · Offline · Hybrid.
            </p>

            <div className={styles.heroSnippet}>
              <strong>What is the Digital SAT 2026?</strong>
              <p>
                The Digital SAT is a fully adaptive, computer-based test by College
                Board. 98 questions · 2 hrs 14 min · Scored 400–1600. Accepted by
                4,000+ universities in the USA, UK, Canada and Australia.
              </p>
            </div>

            <div className={styles.heroCtas}>
              <a href="/contact-us" className="btn-primary">
                Book Free Strategy Session
              </a>
              <a href="#pattern" className="btn-outline">
                View SAT Pattern 2026 →
              </a>
            </div>

            <div className={styles.heroStats}>
              {[
                { num: "1,839+", lbl: "University Admits" },
                { num: "2,299+", lbl: "Student Profiles" },
                { num: "150–300", lbl: "Avg Score Jump" },
                { num: "18+", lbl: "Years Experience" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className={styles.heroStatNum}>{s.num}</div>
                  <div className={styles.heroStatLbl}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <div className={styles.heroCardIcon}>🎯</div>
              <div className={styles.heroCardHeaderText}>
                <h3>SAT Score Estimator</h3>
                <p>Based on 2,299+ EduQuest students</p>
              </div>
            </div>
            <div className={styles.heroCardBody}>
              <div className={styles.scoreRow}>
                <div className={`${styles.scoreBadge} ${styles.gold}`}>
                  <div className={styles.scoreBadgeNum}>1560</div>
                  <div className={styles.scoreBadgeLbl}>Highest Score</div>
                </div>
                <div className={styles.scoreBadge}>
                  <div className={styles.scoreBadgeNum}>1490</div>
                  <div className={styles.scoreBadgeLbl}>Avg EduQuest Score</div>
                </div>
                <div className={styles.scoreBadge}>
                  <div className={styles.scoreBadgeNum}>+220</div>
                  <div className={styles.scoreBadgeLbl}>Avg Improvement</div>
                </div>
              </div>
              <div className={styles.progressList}>
                {[
                  { label: "Reading & Writing", pct: "80%", val: "800" },
                  { label: "Mathematics", pct: "80%", val: "800" },
                  { label: "Total SAT", pct: "81%", val: "1600" },
                ].map((p) => (
                  <div key={p.label} className={styles.progItem}>
                    <span className={styles.progLabel}>{p.label}</span>
                    <div className={styles.progBarWrap}>
                      <div className={styles.progBar} style={{ width: p.pct }} />
                    </div>
                    <span className={styles.progVal}>{p.val}</span>
                  </div>
                ))}
              </div>
              <a href="/contact-us" className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>
                Request a Callback
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
