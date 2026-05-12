"use client";

import { useEffect, useRef } from "react";
import styles from "./ProfileBuildingHero.module.css";

/* ── Types ── */
interface Badge {
  emoji: string;
  label: string;
}

/* ── Static data ── */
const badges: Badge[] = [
  { emoji: "🎯", label: "Strategic Admissions" },
  { emoji: "📊", label: "SAT / AP Benchmarking" },
  { emoji: "🔬", label: "Research & Capstones" },
  { emoji: "🌍", label: "US · UK · Canada · Singapore" },
  { emoji: "🏆", label: "1,000+ Students Placed" },
];

/* ── Component ── */
export default function ProfileBuildingHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Observe every .reveal element inside the section */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );

    container
      .querySelectorAll(`.${styles.reveal}`)
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Wrapper holds both reveal blocks so the observer picks them all up */}
      <div ref={containerRef}>

        {/* ── Block 1: label + heading + subtitle ── */}
        <div className={styles.reveal}>
          <p className={styles.heroLabel}>Profile Building Programme</p>

          <h1 className={styles.heroHeading}>
            Don&apos;t just <em>study</em>.<br />
            Build a story they<br />
            can&apos;t ignore.
          </h1>

          <p className={styles.heroSub}>
            India&apos;s most strategic profile building programme for Grades 8–12.
            Used by 1,000+ students. Backed by 15+ years of global admissions
            expertise.
          </p>
        </div>

        {/* ── Block 2: badges + CTAs ── */}
        <div className={`${styles.reveal} ${styles.revealDelay1}`}>
          <div className={styles.heroBadges}>
            {badges.map((b) => (
              <span key={b.label} className={styles.badge}>
                {b.emoji} {b.label}
              </span>
            ))}
          </div>

          <div className={styles.heroCtaRow}>
            <a href="#path-through" className={styles.btnPrimary}>
              See Your Roadmap →
            </a>
            <a href="#by-grade" className={styles.btnOutline}>
              Explore by Grade
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}