"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GetStartedToday.module.css";

const cards = [
  {
    emoji: "📅",
    title: "Book Free Consultation",
    desc: "Meet our Chief Mentor for a personalized 60-minute strategy session. No obligation, pure value.",
    cta: "Schedule Now →",
    href: "/contact-us",
    variant: "gold" as const,
  },
  {
    emoji: "📘",
    title: "Free Resource Download",
    desc: "The 2026 Profile Building Manual — your complete guide to the EduQuest preparation framework.",
    cta: "Download PDF →",
    href: "https://eduquest.org.in/free-download/",
    variant: "ghost" as const,
  },
];

export default function GetStartedToday() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number; dur: number; size: number }[]
  >([]);

  useEffect(() => {
    // Generate floating particles only on client
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        dur: 6 + Math.random() * 6,
        size: 1.5 + Math.random() * 3,
      }))
    );
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Watermark text */}
      <div className={styles.watermark} aria-hidden="true">
        IIM 2026
      </div>

      {/* Animated grid lines */}
      <div className={styles.gridLines} aria-hidden="true" />

      {/* Floating gold particles */}
      <div className={styles.particleField} aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={
              {
                left: `${p.x}%`,
                top: `${p.y}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.dur}s`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.container}>
        {/* Label */}
        <div
          className={`${styles.label} ${visible ? styles.labelVisible : ""}`}
        >
          <span className={styles.labelLine} />
          Get Started Today
          <span className={styles.labelLine} />
        </div>

        {/* Headline */}
        <h2
          className={`${styles.heading} ${visible ? styles.headingVisible : ""}`}
        >
          Success in IPMAT is
          <br />
          <em className={styles.headingEm}>40% Preparation</em>
          <span className={styles.headingAnd}> and </span>
          <em className={styles.headingEm2}>60% Strategy</em>
        </h2>

        {/* Sub */}
        <p
          className={`${styles.sub} ${visible ? styles.subVisible : ""}`}
        >
          At EduQuest, we provide both. Your IIM journey starts with a single
          conversation.
        </p>

        {/* Divider */}
        <div
          className={`${styles.divider} ${visible ? styles.dividerVisible : ""}`}
        >
          <span className={styles.dividerDot} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerDot} />
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
              style={{ animationDelay: `${0.55 + i * 0.15}s` }}
            >
              {/* Corner accent */}
              <div className={styles.cardCorner} />

              <div className={styles.cardEmoji}>{card.emoji}</div>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <p className={styles.cardDesc}>{card.desc}</p>

              <a
                href={card.href}
                className={
                  card.variant === "gold"
                    ? styles.btnGold
                    : styles.btnGhost
                }
              >
                <span>{card.cta}</span>
                <svg
                  className={styles.btnArrow}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Hover shimmer */}
              <div className={styles.cardShimmer} />
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          className={`${styles.trust} ${visible ? styles.trustVisible : ""}`}
        >
          <span className={styles.trustItem}>✓ No Obligation</span>
          <span className={styles.trustSep} />
          <span className={styles.trustItem}>✓ Response in 24 hrs</span>
          <span className={styles.trustSep} />
          <span className={styles.trustItem}>✓ 500+ IIM Selections</span>
          <span className={styles.trustSep} />
          <span className={styles.trustItem}>✓ 98% Success Rate</span>
        </div>
      </div>
    </section>
  );
}