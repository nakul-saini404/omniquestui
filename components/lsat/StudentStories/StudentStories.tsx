"use client";

import { useEffect, useRef } from "react";
import styles from "./StudentStories.module.css";

/* ── Types ── */
interface Testimonial {
  initials: string;
  body: string;
  name: string;
  role: string;
  score: string;
  delay: string;
}

/* ── Static data ── */
const testimonials: Testimonial[] = [
  {
    initials: "AR",
    body: "EduQuest's logic games methodology is unlike anything else available. I went from missing 8–10 games questions to consistently going -0 or -1. The structured notation alone was worth the entire course fee.",
    name: "Arjun Reddy",
    role: "NALSAR University of Law",
    score: "159 → 174 (+15 points)",
    delay: "0.05s",
  },
  {
    initials: "PS",
    body: "The adaptive diagnostic immediately showed me I was wasting time on LR methods that didn't match my error patterns. Six weeks later I had a 170 — my target score for NLU Delhi admission.",
    name: "Priya Sharma",
    role: "NLU Delhi",
    score: "155 → 170 (+15 points)",
    delay: "0.1s",
  },
  {
    initials: "KM",
    body: "I was a working professional with limited study time. EduQuest's flexible format and highly targeted drills let me score 172 studying only 15 hours per week. Exceptional ROI on preparation time.",
    name: "Kavya Menon",
    role: "Symbiosis Law School, Pune",
    score: "161 → 172 (+11 points)",
    delay: "0.15s",
  },
];

/* ── Component ── */
export default function StudentStories() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-based reveal via IntersectionObserver */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>(`.${styles.reveal}`);

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

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles.testimonials}
      id="testimonials"
      ref={sectionRef}
    >
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`}>
          <div className={`${styles.secBadge} ${styles.secBadgeGold}`}>
            Student Stories
          </div>
          <h2 className={styles.secTitle}>
            Results That Speak <em>for Themselves</em>
          </h2>
          <div className={styles.divider} />
        </div>

        {/* ── Testimonial cards ── */}
        <div className={styles.testiGrid}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`${styles.testiCard} ${styles.reveal}`}
              style={{ transitionDelay: t.delay }}
            >
              {/* Opening quote mark */}
              <div className={styles.testiQuote}>&ldquo;</div>

              {/* Body */}
              <p className={styles.testiBody}>{t.body}</p>

              {/* Author */}
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