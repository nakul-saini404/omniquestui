"use client"
import { useEffect, useRef, useState } from "react";
import styles from "./WhyItMatters.module.css";

/* ─── Data ───────────────────────────────────────────────── */
const BENEFITS = [
  {
    num: "01",
    title: "Higher AP Scores — Consistently",
    desc: "Students with structured Pre-AP preparation score an average of 4.4–5.0 on their AP exams, compared to the global average of 3.1. Early conceptual grounding means exam-day confidence, not panic.",
    tag: "Academic Edge",
  },
  {
    num: "02",
    title: "College Credit & Tuition Savings",
    desc: "A single AP score of 4 or 5 can replace one full university course — worth $4,000–$8,000 at US schools. Students who take 5–8 APs can save an entire semester's tuition.",
    tag: "Financial Benefit",
  },
  {
    num: "03",
    title: "Stronger University Applications",
    desc: "Admissions officers at Harvard, Stanford, and Oxford actively look for AP courses as evidence of academic rigour. A Pre-AP student applies with a demonstrably stronger academic profile than peers who don't.",
    tag: "Admissions Power",
  },
  {
    num: "04",
    title: "Merit Scholarship Eligibility",
    desc: "Many US and Canadian universities award merit scholarships worth $10,000–$50,000 per year based on AP scores. National Merit Scholarship (PSAT-linked) alone can fund four full years of study.",
    tag: "Scholarship Access",
  },
  {
    num: "05",
    title: "Reduced Workload in Grade 12",
    desc: "Students who begin Pre-AP in Grades 8–10 spread their AP load intelligently across years, avoiding the dangerous burnout of cramming 4–5 APs in Grade 12 while simultaneously managing applications.",
    tag: "Well-being",
  },
  {
    num: "06",
    title: "Real Subject Mastery",
    desc: "Pre-AP coaching builds genuine understanding — not just test-taking tricks. Students arrive at university with actual knowledge of Calculus, Chemistry, or Literature, performing better in Year 1 courses.",
    tag: "Deep Learning",
  },
  {
    num: "07",
    title: "Confidence & Academic Identity",
    desc: "Students who master challenging content early develop an academic self-image as capable learners. This confidence compounds: better questions, deeper curiosity, and more impressive extracurricular outcomes.",
    tag: "Mindset",
  },
  {
    num: "08",
    title: "Global University Flexibility",
    desc: "AP scores are accepted at 4,000+ universities across the US, UK, Canada, Australia, and Europe — giving students maximum optionality when finalising their university list in Grade 12.",
    tag: "Flexibility",
  },
];

/* ─── Reveal hook (Strict-Mode safe) ────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    let alive = true;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && alive) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => { alive = false; obs.disconnect(); };
  }, [threshold]);

  return { ref, visible };
}

/* ─── BenefitCard ────────────────────────────────────────── */
function BenefitCard({
  benefit,
  index,
  gridVisible,
}: {
  benefit: (typeof BENEFITS)[0];
  index: number;
  gridVisible: boolean;
}) {
  return (
    <div
      className={`${styles.card} ${gridVisible ? styles.cardVisible : ""}`}
      style={{ transitionDelay: gridVisible ? `${index * 70}ms` : "0ms" }}
    >
      <div className={styles.cardTopBar} aria-hidden />
      <div className={styles.cardNum} aria-hidden>{benefit.num}</div>
      <h3 className={styles.cardTitle}>{benefit.title}</h3>
      <p className={styles.cardDesc}>{benefit.desc}</p>
      <span className={styles.cardTag}>{benefit.tag}</span>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function WhyItMatters() {
  const headerReveal = useReveal(0.15);
  const gridReveal = useReveal(0.05);

  return (
    <section
      className={styles.section}
      id="benefits"
      aria-labelledby="wim-heading"
    >
      {/* Section header */}
      <div
        ref={headerReveal.ref as React.RefObject<HTMLDivElement>}
        className={`${styles.header} ${headerReveal.visible ? styles.headerVisible : ""}`}
      >
        <span className={styles.tag}>Why It Matters</span>
        <div className={styles.goldLine} aria-hidden />
        <h2 id="wim-heading" className={styles.heading}>
          Benefits of <span className={styles.headingAccent}>Pre-AP Coaching</span>
        </h2>
        <p className={styles.sub}>
          Students who begin Pre-AP coaching early don't just score higher —
          they think differently, apply stronger, and win more scholarships.
          Here's what the data and our 10,000+ alumni tell us.
        </p>
      </div>

      {/* Benefits grid */}
      <div
        ref={gridReveal.ref as React.RefObject<HTMLDivElement>}
        className={styles.grid}
      >
        {BENEFITS.map((benefit, i) => (
          <BenefitCard
            key={benefit.num}
            benefit={benefit}
            index={i}
            gridVisible={gridReveal.visible}
          />
        ))}
      </div>
    </section>
  );
}