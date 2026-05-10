"use client";

import { useEffect, useRef } from "react";
import styles from "./CommonPitfalls.module.css";

const pitfalls = [
  {
    num: "01",
    icon: "📚",
    title: "Passive Content Review",
    body: "Re-reading notes and watching lectures feels productive but builds no retrieval skill. The MCAT tests application, not recall. Active retrieval — flashcards, free recall — is what actually transfers to points.",
  },
  {
    num: "02",
    icon: "⏱️",
    title: "Ignoring CARS Until the End",
    body: "CARS is the section that sinks medical school applications most often. It takes 60–90 days of daily practice to improve. Students who treat it as a last-minute review consistently plateau at 125–126.",
  },
  {
    num: "03",
    icon: "🔍",
    title: "No Wrong-Answer Analysis",
    body: "Getting a question wrong and moving on is the single most wasteful habit in MCAT prep. Each wrong answer contains an exact diagnosis of a reasoning error — unpacked correctly, one wrong answer can fix thirty future questions.",
  },
  {
    num: "04",
    icon: "📋",
    title: "Using Non-AAMC Practice Material",
    body: "Third-party question banks mimic the MCAT's topics but not its reasoning style. Students who train on non-AAMC material build skills for a different exam. Official materials are the only valid training ground for the real test.",
  },
  {
    num: "05",
    icon: "🧩",
    title: "Silo Studying Each Section",
    body: "The MCAT integrates concepts across disciplines. A passage may require biochemistry, cellular biology, and psychological theory simultaneously. Students who study sections in isolation are consistently caught off-guard by integrated passages.",
  },
  {
    num: "06",
    icon: "🏃",
    title: "Starting Full-Lengths Too Late",
    body: "Full-length exams are not assessment tools — they are training tools. Students who complete fewer than six full-lengths before test day have not built the stamina or timing calibration to execute under real 7.5-hour conditions.",
  },
];

export default function CommonPitfalls() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );
    if (!revealEls) return;

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

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.fail} id="fail" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.secHeaderCenter} ${styles.reveal}`}
          data-reveal
        >
          <div className={`${styles.secBadge} ${styles.secBadgeRed}`}>
            Common Pitfalls
          </div>
          <h2 className={styles.secTitle}>
            Why Most MCAT Students <em>Plateau</em>
          </h2>
          <div className={`${styles.divider} ${styles.dividerCenter}`} />
          <p className={styles.secSub}>
            The MCAT is not a knowledge test. It is a reasoning test built on
            science knowledge. Most students fail to cross 510 because of six
            predictable, fixable mistakes.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className={styles.failGrid}>
          {pitfalls.map((p, i) => (
            <div
              key={p.num}
              className={`${styles.failCard} ${styles.reveal}`}
              data-reveal
              style={{ transitionDelay: `${0.05 * (i + 1)}s` }}
            >
              <div className={styles.failCardNum}>{p.num}</div>
              <div className={styles.failCardIcon}>{p.icon}</div>
              <div className={styles.failCardTitle}>{p.title}</div>
              <div className={styles.failCardBody}>{p.body}</div>
            </div>
          ))}
        </div>

        {/* ── Callout Banner ── */}
        <div
          className={`${styles.failCallout} ${styles.reveal}`}
          data-reveal
          style={{ transitionDelay: "0.35s" }}
        >
          <div className={styles.failCalloutText}>
            <div className={styles.failCalloutTitle}>
              EduQuest fixes every one of these{" "}
              <em>by design.</em>
            </div>
            <div className={styles.failCalloutBody}>
              Our programme is built around the exact failure modes above. From
              day-one active retrieval protocols to mandatory CARS streaks,
              biweekly full-lengths, and systematic wrong-answer debrief
              sessions — we close the gaps before they cost you points.
            </div>
          </div>
          <div className={styles.failCalloutCta}>
            <a href="#cta" className={styles.btnPrimary}>
              See How It Works →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}