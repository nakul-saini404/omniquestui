"use client";

import { useEffect, useRef } from "react";
import styles from "./StudentStories.module.css";

const testimonials = [
  {
    initials: "RV",
    body: "EduQuest's CARS methodology is unlike anything I had tried before. I'd plateaued at 126 for three months. After six weeks of daily passage work with their structured approach, I hit 130. The diagnostic immediately told me exactly which reasoning skills were costing me points.",
    name: "Rohan Verma",
    role: "AIIMS New Delhi",
    score: "508 → 521 (+13 points)",
  },
  {
    initials: "AS",
    body: "I was a full-time clinical volunteer with limited study windows. EduQuest's adaptive plan and on-demand lectures let me prep 12 hours a week and still score 524. The spaced repetition system alone removed hours of wasted review time every single week.",
    name: "Ananya Singh",
    role: "Kasturba Medical College",
    score: "510 → 524 (+14 points)",
  },
  {
    initials: "KP",
    body: "The wrong-answer debrief sessions changed everything. I thought I understood biochemistry — the debrief showed me I had a reasoning gap, not a content gap. That single insight added four points to my score in six weeks. Extraordinary programme.",
    name: "Karan Patel",
    role: "Manipal College of Medical Sciences",
    score: "514 → 526 (+12 points)",
  },
];

export default function StudentStories() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section className={styles.testimonials} id="testimonials" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.secHeaderCenter} ${styles.reveal}`}
          data-reveal
        >
          <div className={`${styles.secBadge} ${styles.secBadgeGold}`}>
            Student Stories
          </div>
          <h2 className={`${styles.secTitle} ${styles.secTitleLight}`}>
            Results That Speak <em>for Themselves</em>
          </h2>
          <div className={`${styles.divider} ${styles.dividerCenter}`} />
        </div>

        {/* ── Testimonial Cards ── */}
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <div
              key={t.initials}
              className={`${styles.testiCard} ${styles.reveal}`}
              data-reveal
              style={{ transitionDelay: `${0.05 * (i + 1)}s` }}
            >
              <div className={styles.testiQuote}>&ldquo;</div>
              <p className={styles.testiBody}>{t.body}</p>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.testiName}>{t.name}</div>
                  <div className={styles.testiRole}>{t.role}</div>
                  <div className={styles.testiScore}>{t.score}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}