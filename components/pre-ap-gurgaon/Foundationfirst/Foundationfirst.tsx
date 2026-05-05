"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./FoundationFirst.module.css";

/* ─── Data ───────────────────────────────────────────────── */
const POINTS = [
  "Bridges the gap between CBSE / IGCSE / IB and College Board AP standards — often 1–2 years of conceptual depth ahead of peers",
  "Develops critical thinking and analytical reasoning — skills schools rarely teach explicitly but universities always assess",
  "Gives students a 6–24 month head-start, dramatically reducing exam-season stress and last-minute cramming",
  "Integrates seamlessly with PSAT, SAT, and university application timelines for a holistic 3–5 year roadmap",
  "Accepted at 4,000+ universities — US Ivy League, UK Russell Group, Canadian U15, Australian Go8 and more",
];

const DIFFERENCE = [
  "College Board aligned coaching methodology tailored for Indian students",
  "Integrated PSAT + SAT + AP + admissions roadmap from Grade 8 onwards",
  "Personalised learning pathways — no one-size-fits-all batches",
  "Technology-enhanced education with progress monitoring at every stage",
  "Full profile building: extracurriculars, essays, scholarship prep & university shortlisting",
  "Online, offline, and hybrid modes — Gurgaon, Delhi NCR & internationally",
  "Parent progress dashboard updated fortnightly",
];

/* ─── Reveal hook ────────────────────────────────────────── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Component ──────────────────────────────────────────── */
export default function FoundationFirst() {
  const left  = useReveal(0.1);
  const right = useReveal(0.1);

  return (
    <section className={styles.section} id="what-is" aria-labelledby="ff-heading">
      <div className={styles.inner}>

        {/* ── Left column ── */}
        <div
          ref={left.ref}
          className={`${styles.col} ${left.visible ? styles.colVisible : ""}`}
        >
          <span className={styles.tag}>Foundation First</span>
          <div className={styles.goldLine} aria-hidden />
          <h2 id="ff-heading" className={styles.heading}>
            What is <span className={styles.headingAccent}>Pre-AP Coaching?</span>
          </h2>
          <p className={styles.intro}>
            Pre-AP coaching is a structured academic head-start programme for
            students in Grades 8–11 who plan to sit College Board AP exams. It
            builds deep conceptual clarity in core subjects before the
            high-stakes AP curriculum begins.
          </p>

          <ul className={styles.points} aria-label="Key benefits of Pre-AP coaching">
            {POINTS.map((point, i) => (
              <li
                key={i}
                className={styles.point}
                style={{ transitionDelay: left.visible ? `${i * 70}ms` : "0ms" }}
              >
                <span className={styles.pointDot} aria-hidden />
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right column — info card ── */}
        <div
          ref={right.ref}
          className={`${styles.col} ${right.visible ? styles.colVisible : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <div className={styles.card}>
            <div className={styles.cardAccent} aria-hidden />
            <h3 className={styles.cardHeading}>The EduQuest Difference</h3>
            <ul className={styles.diffList} aria-label="The EduQuest difference">
              {DIFFERENCE.map((item, i) => (
                <li
                  key={i}
                  className={styles.diffItem}
                  style={{ transitionDelay: right.visible ? `${i * 60 + 120}ms` : "0ms" }}
                >
                  <span className={styles.diffArrow} aria-hidden>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}