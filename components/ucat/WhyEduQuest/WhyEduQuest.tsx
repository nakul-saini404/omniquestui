"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./WhyEduQuest.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface WhyCard {
  icon: string;
  heading: string;
  body: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const whyCards: WhyCard[] = [
  {
    icon: "🎯",
    heading: "Live 1-on-1 UCAT Classes",
    body: "Targeted sessions with UCAT experts covering all four active sections. Personalised strategies built around your specific score gaps and weaknesses.",
  },
  {
    icon: "📊",
    heading: "AI-Powered Mock Analysis",
    body: "Full-length mocks with detailed score gap analysis and a strengths map. The same platform used by 10,000+ students globally to track consistent progress.",
  },
  {
    icon: "🏫",
    heading: "University Application Support",
    body: "Full UCAS and ANZ application support — personal statement drafting, profile alignment with university expectations, and document review.",
  },
  {
    icon: "🎤",
    heading: "MMI Interview Training",
    body: "Multiple Mini Interview preparation covering ethical dilemmas, teamwork scenarios, and real confidence-building mock interviews under exam conditions.",
  },
  {
    icon: "💰",
    heading: "All-Inclusive Fee Structure",
    body: "UCAT prep + application support + MMI training under a single fee — more affordable and comprehensive than paying for each service separately.",
  },
  {
    icon: "🌍",
    heading: "Global University Network",
    body: "Trusted guidance for 2,000+ universities worldwide. Expert mentors with 20+ years of consolidated international admissions experience.",
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

/* ── WhyCard ────────────────────────────────────────────────────── */
interface WhyCardProps {
  card: WhyCard;
  index: number;
  parentVisible: boolean;
}

const WhyCardItem: React.FC<WhyCardProps> = ({ card, index, parentVisible }) => {
  return (
    <div
      className={`${styles.whyCard} ${parentVisible ? styles.cardVisible : ""}`}
      style={{ transitionDelay: `${0.08 + index * 0.1}s` }}
    >
      <div className={styles.iconBox}>{card.icon}</div>
      <h3 className={styles.cardHeading}>{card.heading}</h3>
      <p className={styles.cardBody}>{card.body}</p>

      {/* Gold bottom-border reveal on hover — driven purely by CSS */}
      <div className={styles.hoverLine} />
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
const WhyEduQuest: React.FC = () => {
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);
  const { ref: gridRef, inView: gridVisible } = useInView(0.08);

  return (
    <section className={styles.section} id="why-eq">
      <div className={styles.container}>

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? styles.headerVisible : ""
          }`}
        >
          <span className={styles.sectionTag}>Why EduQuest</span>
          <h2 className={styles.sectionTitle}>
            More Than UCAT Coaching —
            <br />
            A Complete Medical Admissions Ecosystem
          </h2>
          <p className={styles.sectionSub}>
            EduQuest guides you from UCAT preparation all the way through to
            final admission interviews, under one roof, one fee — no hidden
            charges.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className={styles.whyGrid}>
          {whyCards.map((card, i) => (
            <WhyCardItem
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

export default WhyEduQuest;