"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";

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
   DATA
───────────────────────────────────────────────────────── */
interface WhyCard {
  title: string;
  body: string;
}

const WHY_CARDS: WhyCard[] = [
  {
    title: "College Board Aligned",
    body: "Our curriculum is built around College Board's framework, ensuring students are fully prepared for the actual AP exam — not a local approximation of it.",
  },
  {
    title: "Personalised, Not Generic",
    body: "Every student receives a bespoke learning plan based on their diagnostic results, learning style, grade level, and target universities.",
  },
  {
    title: "One-Stop Ecosystem",
    body: "Pre-AP, SAT, AP, PSAT, college essays, extracurricular strategy, and visa support — all under one roof, designed to work together.",
  },
  {
    title: "Expert Mentors",
    body: "Our faculty are subject matter experts and academic mentors — many are Ivy League graduates or have international teaching experience.",
  },
  {
    title: "Technology-Enhanced",
    body: "Digital progress tracking, adaptive mock testing, recorded sessions, and a parent dashboard keep every stakeholder informed and on track.",
  },
  {
    title: "Proven Track Record",
    body: "10,000+ students coached. Consistent 5/5 AP scores. Admissions to Harvard, MIT, Stanford, Oxford, Monash, and 200+ universities worldwide.",
  },
];

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionCream2}`}
    >
      <div className={styles.inner}>

        {/* ── Section header — centred ── */}
        <div className={`${styles.hdrCenter} ${styles.reveal}`}>
          <span className={styles.sTag}>Why Choose Us</span>
          <span className={styles.goldLineCenter} />
          <h2 className={styles.sHead}>What Sets EduQuest Apart</h2>
          <p className={styles.sSub}>
            More than 20 years of guiding students to their dream universities
            — here's what makes us different from every other coaching centre
            in Gurgaon.
          </p>
        </div>

        {/* ── Why cards grid ── */}
        <div className={styles.whyGrid}>
          {WHY_CARDS.map((card) => (
            <div key={card.title} className={`${styles.whyCard} ${styles.reveal}`}>
              <h4 className={styles.whyCardTitle}>{card.title}</h4>
              <p className={styles.whyCardBody}>{card.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}