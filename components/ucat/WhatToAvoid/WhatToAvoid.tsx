"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./WhatToAvoid.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface MistakeCard {
  heading: string;
  body: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const mistakes: MistakeCard[] = [
  {
    heading: "Treating it like a content exam",
    body: "UCAT is a skills test. Mugging up facts doesn't work — you need to practice reasoning patterns and build speed through targeted drills.",
  },
  {
    heading: "Starting too late",
    body: "Most students who start under 2 months before the exam struggle with pacing. Begin 3–6 months early for consistent improvement and confidence.",
  },
  {
    heading: "Ignoring Situational Judgement",
    body: "SJT is often underestimated. Many top cognitive scorers lose competitive advantage because of low SJT bands. Understand NHS values and practice scenarios.",
  },
  {
    heading: "Choosing the wrong UCAT version",
    body: "Taking UCAT UK when targeting Australia/NZ costs you an entire year. Plan your version based on your dream university — before you register.",
  },
];

/* ── Scroll-reveal hook ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── MistakeCard ────────────────────────────────────────────────── */
interface MistakeCardProps {
  card: MistakeCard;
  index: number;
  parentVisible: boolean;
}

const MistakeItem: React.FC<MistakeCardProps> = ({
  card,
  index,
  parentVisible,
}) => {
  return (
    <div
      className={`${styles.mistakeCard} ${
        parentVisible ? styles.cardVisible : ""
      }`}
      style={{ transitionDelay: `${0.1 + index * 0.12}s` }}
    >
      {/* Red X badge */}
      <div className={styles.xBadge}>✕</div>

      <h4 className={styles.cardHeading}>{card.heading}</h4>
      <p className={styles.cardBody}>{card.body}</p>

      {/* Decorative corner accent */}
      <div className={styles.cornerAccent} />
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
const WhatToAvoid: React.FC = () => {
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);
  const { ref: gridRef, inView: gridVisible } = useInView(0.1);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? styles.headerVisible : ""
          }`}
        >
          <span className={styles.sectionTag}>What to Avoid</span>
          <h2 className={styles.sectionTitle}>
            Common UCAT Mistakes Indian Students Make
          </h2>
          <p className={styles.sectionSub}>
            Most students who underperform in UCAT make one or more of these
            avoidable mistakes. Don't let this be you.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className={styles.mistakesGrid}>
          {mistakes.map((card, i) => (
            <MistakeItem
              key={card.heading}
              card={card}
              index={i}
              parentVisible={gridVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatToAvoid;