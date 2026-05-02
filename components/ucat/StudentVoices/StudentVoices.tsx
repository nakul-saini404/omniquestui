"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StudentVoices.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface Testimonial {
  initials: string;
  name: string;
  location: string;
  stars: number;
  quote: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const testimonials: Testimonial[] = [
  {
    initials: "PR",
    name: "Priya Rajawat",
    location: "New Delhi · UCL Medicine Admit",
    stars: 5,
    quote:
      "EduQuest's application team is brilliant. They helped me apply to 12 universities across the US and UK. Their free IELTS coaching was a bonus I never expected!",
  },
  {
    initials: "AM",
    name: "Arjun Malhotra",
    location: "Gurgaon · King's College London",
    stars: 5,
    quote:
      "EduQuest provided full support for my applications — from essays to interviews. I got into UCL and had a smooth visa process. Their TOEFL sessions were super useful!",
  },
  {
    initials: "SK",
    name: "Sanya Kapur",
    location: "Gurugram · Monash Medicine",
    stars: 5,
    quote:
      "I'm very happy with the planning and support EduQuest offers from PSAT to final application. No other institute in Gurgaon offers this level of early strategy.",
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

/* ── Stars ──────────────────────────────────────────────────────── */
const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className={styles.star}>★</span>
    ))}
  </div>
);

/* ── TestiCard ──────────────────────────────────────────────────── */
interface TestiCardProps {
  item: Testimonial;
  index: number;
  parentVisible: boolean;
}

const TestiCard: React.FC<TestiCardProps> = ({ item, index, parentVisible }) => (
  <div
    className={`${styles.testiCard} ${parentVisible ? styles.cardVisible : ""}`}
    style={{ transitionDelay: `${0.1 + index * 0.13}s` }}
  >
    {/* Decorative large quote mark */}
    <span className={styles.bigQuote}>&ldquo;</span>

    <Stars count={item.stars} />

    <p className={styles.testiText}>{item.quote}</p>

    <div className={styles.testiAuthor}>
      <div className={styles.testiAv}>{item.initials}</div>
      <div>
        <div className={styles.testiName}>{item.name}</div>
        <div className={styles.testiLoc}>{item.location}</div>
      </div>
    </div>
  </div>
);

/* ── Main Component ─────────────────────────────────────────────── */
const StudentVoices: React.FC = () => {
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);
  const { ref: gridRef, inView: gridVisible } = useInView(0.08);

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
          <span className={styles.sectionTag}>Student Voices</span>
          <h2 className={styles.sectionTitle}>
            What Our Students &amp; Families Say
          </h2>
          <p className={styles.sectionSub}>
            Real results from real students who trusted EduQuest with their
            medical admissions journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className={styles.testiGrid}>
          {testimonials.map((item, i) => (
            <TestiCard
              key={item.name}
              item={item}
              index={i}
              parentVisible={gridVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentVoices;