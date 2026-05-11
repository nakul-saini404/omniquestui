"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyToefl.module.css";

const reasons = [
  {
    icon: "🌐",
    num: "01",
    title: "Broadest Global Acceptance",
    body: "More universities — 11,500+ across 180+ countries — prefer or exclusively accept TOEFL over any other English test, giving you the widest application reach.",
    animationDelay: 0.04,
  },
  {
    icon: "🤖",
    num: "02",
    title: "Zero Examiner Bias",
    body: "TOEFL uses AI and certified remote raters — not a local examiner sitting across from you. Your accent or appearance never influences your Speaking score.",
    animationDelay: 0.1,
  },
  {
    icon: "🏛️",
    num: "03",
    title: "Ivy League's First Choice",
    body: "Every Ivy League university — Harvard, MIT, Yale, Princeton, Columbia — accepts and often recommends TOEFL as their primary English proficiency benchmark.",
    animationDelay: 0.16,
  },
  {
    icon: "🏠",
    num: "04",
    title: "Test From Home Option",
    body: "The TOEFL iBT Home Edition is an identical test you can take from your bedroom — same scoring, same validity, same global recognition.",
    animationDelay: 0.22,
  },
  {
    icon: "🎓",
    num: "05",
    title: "Academic English Focus",
    body: "Every TOEFL question mirrors real university tasks — lectures, textbook passages, academic debates — making a high score a genuine predictor of academic success.",
    animationDelay: 0.28,
  },
  {
    icon: "📤",
    num: "06",
    title: "Free Score Sends",
    body: "Send your TOEFL score to up to 4 universities at no extra cost on test day. Additional score reports for other institutions cost a small fee per report.",
    animationDelay: 0.34,
  },
];

export default function WhyToefl() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const allTargets = [
      headerRef.current,
      ...cardRefs.current,
    ].filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    allTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.whyToefl} id="why-toefl">
      {/* Grid texture overlay */}
      <div className={styles.gridTex} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.header} ${styles.reveal}`}
          ref={headerRef}
        >
          <div className={styles.secLabel}>Why TOEFL</div>
          <h2 className={styles.heading}>
            Why Choose <em>TOEFL iBT</em> Over Other English Tests?
          </h2>
          <p className={styles.subheading}>
            Six reasons why TOEFL remains the benchmark English proficiency test
            for global university admissions.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className={styles.whyGrid}>
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={styles.whyCard}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{ animationDelay: `${r.animationDelay}s` }}
            >
              {/* Gold shimmer sweep on hover */}
              <div className={styles.whyCardShimmer} aria-hidden="true" />

              {/* Top row: icon + number */}
              <div className={styles.whyCardTop}>
                <div className={styles.whyIcon}>{r.icon}</div>
                <span className={styles.whyCardNum}>{r.num}</span>
              </div>

              <h4 className={styles.whyCardTitle}>{r.title}</h4>
              <p className={styles.whyCardBody}>{r.body}</p>

              {/* Gold underline that expands on hover */}
              <div className={styles.whyCardUnderline} aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}