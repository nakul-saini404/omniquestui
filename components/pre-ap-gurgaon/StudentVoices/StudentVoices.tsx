"use client";

import { useEffect, useRef } from "react";
import styles from "./StudentVoices.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook
───────────────────────────────────────────────────────── */
function useReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    targets?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return sectionRef;
}

/* ─────────────────────────────────────────────────────────
   DATA — names taken verbatim from eduquest.org.in/ap-coaching/
───────────────────────────────────────────────────────── */
interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "EduQuest's early foundation program (PSAT + SAT) is brilliant. My son is already ahead of his peers in 10th grade and has completed 2 AP subjects.",
    name: "Parent — Grade 10 Student",
    meta: "Gurgaon · Google Review",
  },
  {
    quote:
      "I scored 5/5 in AP Computer Science. Throughout my journey, EduQuest's team was always available to solve doubts at any time I needed.",
    name: "Soham Sharma",
    meta: "New Delhi · AP CS 5/5",
  },
  {
    quote:
      "I loved how EduQuest planned a 3-year roadmap for my daughter starting from PSAT. Their SAT and AP training was very well-connected with the final application.",
    name: "Parent — Grade 12 Student",
    meta: "Gurgaon · Google Review",
  },
  {
    quote:
      "No other institute in Gurgaon offers this level of early strategy. EduQuest's support from PSAT to final application is unmatched.",
    name: "Parent — SAT + AP Student",
    meta: "Delhi NCR · Google Review",
  },
];

/** Returns up to 2 initials from a display name */
// function getInitials(name: string): string {
//   const words = name.trim().split(/\s+/);
//   if (words.length === 1) return words[0][0].toUpperCase();
//   return (words[0][0] + words[1][0]).toUpperCase();
// }

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function StudentVoices() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionWhite}`}
    >
      <div className={styles.inner}>

        {/* ── Section header ── */}
        <div className={`${styles.hdrCenter} ${styles.reveal}`}>
          <span className={styles.sTag}>Student Voices</span>
          <span className={styles.goldLineCenter} />
          <h2 className={styles.sHead}>What Our Students Say</h2>
        </div>

        {/* ── Testimonial cards grid ── */}
        <div className={styles.testiGrid}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`${styles.testiCard} ${styles.reveal}`}
            >
              {/* Stars */}
              <div className={styles.testiStars}>★★★★★</div>

              {/* Quote */}
              <p className={styles.testiQuote}>{t.quote}</p>

              {/* Author row — initials avatar, no image dependency */}
              <div className={styles.testiAuthor}>
                {/* <div className={styles.testiAvatar} aria-hidden="true">
                  {getInitials(t.name)}
                </div> */}
                <div>
                  <div className={styles.testiName}>{t.name}</div>
                  <div className={styles.testiMeta}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}