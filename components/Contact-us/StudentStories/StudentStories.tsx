"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StudentStories.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
interface Testimonial {
  id: string;
  text: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  name: string;
  score?: string;
  meta: string;
}

const testimonials: Testimonial[] = [
  {
    id: "neha",
    text: "EduQuest's counsellor didn't just help me prep for the SAT — they helped me understand how my score, my profile, and my essays would all work together for Ivy League admissions.",
    initials: "NC",
    avatarBg: "#0b1c3d",
    avatarColor: "#e8c96a",
    name: "Neha C.",
    score: "SAT 1540",
    meta: "King's College School, London",
  },
  {
    id: "arvind",
    text: "From 1320 to 1520 in 3 months. The personalised strategy and the Bluebook mocks were game-changers. I knew exactly where I stood after every test.",
    initials: "AD",
    avatarBg: "#c84b31",
    avatarColor: "#ffffff",
    name: "Arvind D.",
    score: "SAT 1520",
    meta: "Harrow School, London",
  },
  {
    id: "riya",
    text: "The profile building team helped me identify internship opportunities I hadn't considered, and the essay mentors brought out a story I didn't know I had. Got into my target school!",
    initials: "RK",
    avatarBg: "#d4a843",
    avatarColor: "#0b1c3d",
    name: "Riya K.",
    score: undefined,
    meta: "Accepted · NYU Stern · Class of 2027",
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const StudentStories: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // ✅ Use Array.from instead of spread to avoid downlevelIteration error
            setVisibleCards((prev) => new Set(Array.from(prev).concat(i)));
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>

        {/* ── Header ── */}
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Student Stories</div>
          <h2 className={styles.sectionTitle}>
            What Our Students <em>Say</em>
          </h2>
          <div className={styles.goldLine} aria-hidden="true" />
        </header>

        {/* ── Testimonials grid ── */}
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`${styles.testiCard} ${
                visibleCards.has(i) ? styles.testiCardVisible : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Decorative quote mark */}
              <div className={styles.testiQuote} aria-hidden="true">"</div>

              {/* Stars */}
              <div className={styles.testiStars} aria-label="5 stars">
                ★★★★★
              </div>

              {/* Body text */}
              <p className={styles.testiText}>{t.text}</p>

              {/* Footer */}
              <div className={styles.testiFooter}>
                <div
                  className={styles.testiAv}
                  style={{ background: t.avatarBg, color: t.avatarColor }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className={styles.testiName}>
                    {t.name}
                    {t.score && (
                      <span className={styles.testiScore}>{t.score}</span>
                    )}
                  </div>
                  <div className={styles.testiMeta}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentStories;