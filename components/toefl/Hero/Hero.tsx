"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const stats = [
  { num: "11,500+", label: "Accepting Institutions" },
  { num: "180+",    label: "Countries" },
  { num: "120",     label: "Max Score" },
];

const cards = [
  { icon: "🏛️", name: "US Universities",  tag: "MIT · Stanford · Harvard" },
  { icon: "🤖", name: "AI Scored",         tag: "Unbiased Evaluation" },
  { icon: "📅", name: "Valid 2 Years",     tag: "From Test Date" },
  { icon: "⏱️", name: "~2 Hours",          tag: "Complete Test Duration" },
];

export default function Hero() {
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [leftRef.current, rightRef.current].filter(Boolean) as Element[];

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

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="top">
      {/* Grid texture overlay */}
      <div className={styles.gridTex} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>

          {/* ── Left Column ── */}
          <div className={`${styles.revealLeft}`} ref={leftRef}>
            <div className={styles.heroBadge}>
              🌐 TOEFL iBT Coaching — EduQuest
            </div>

            <h1 className={styles.heroH1}>
              Ace <em>TOEFL iBT</em> — Your Gateway to Global Universities
            </h1>

            <p className={styles.heroSub}>
              The world's most accepted English proficiency test. Score 100+ and
              unlock admission to MIT, Harvard, Stanford, and 11,500+ institutions
              across 180+ countries — without an examiner bias.
            </p>

            <div className={styles.heroActions}>
              <a href="#contact" className={`${styles.btn} ${styles.btnGold}`}>
                Book Free 3-Day Trial
              </a>
              <a href="#pattern" className={`${styles.btn} ${styles.btnGhost}`}>
                View Score Pattern
              </a>
            </div>

            {/* Stats bar */}
            <div className={styles.heroStats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatNum}>{s.num}</span>
                  <span className={styles.heroStatLbl}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className={`${styles.revealRight}`} ref={rightRef}>
            {/* Image card */}
            <div className={styles.heroImgWrap}>
              <img
                className={styles.heroImg}
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=700&q=80"
                alt="Students preparing for TOEFL"
              />
              <div className={styles.heroImgTicker}>
                TOEFL iBT&nbsp;&nbsp;·&nbsp;&nbsp;Test of English as a Foreign Language
              </div>
            </div>

            {/* Feature mini-cards */}
            <div className={styles.heroCards}>
              {cards.map((c) => (
                <div key={c.name} className={styles.heroCard}>
                  <div className={styles.heroCardIcon}>{c.icon}</div>
                  <div className={styles.heroCardName}>{c.name}</div>
                  <div className={styles.heroCardTag}>{c.tag}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}