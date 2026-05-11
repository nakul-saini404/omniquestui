"use client";

import { useEffect, useRef } from "react";
import styles from "./StructuredTracks.module.css";

/* ─────────────────────────────────────────────────────────
   Scroll-reveal hook — replicates the IntersectionObserver
   from the original HTML file
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
interface Programme {
  badge: string;
  title: string;
  desc: string;
  details: string[];
  featured?: boolean;
}

const PROGRAMMES: Programme[] = [
  {
    badge: "Grade 8–9",
    title: "Early Foundation Programme",
    desc: "A 4–5 year integrated track starting in Grade 8 or 9, building deep subject mastery well before the AP exam cycle begins.",
    details: [
      "PSAT 8/9 + PSAT 10 + SAT integration",
      "Conceptual STEM & Humanities foundation",
      "Profile & extracurricular strategy from Day 1",
      "National Merit Scholarship pathway",
    ],
  },
  {
    badge: "Most Popular · Grade 10–11",
    title: "Accelerated Pre-AP Track",
    desc: "A 12–18 month intensive for Grade 10–11 students targeting 5/5 in 4–6 AP subjects alongside SAT 1500+ and Ivy League admission.",
    details: [
      "Subject-wise diagnostic → customised plan",
      "Full AP exam simulation with 6 mocks",
      "SAT + AP dual-track coaching",
      "College application & essay support",
    ],
    featured: true,
  },
  {
    badge: "Grade 11–12",
    title: "AP Readiness Sprint",
    desc: "A focused 6–8 month programme for students entering Grade 11 who need rapid conceptual grounding before formal AP coursework begins.",
    details: [
      "Subject gap-analysis & rapid remediation",
      "Full AP May exam prep integrated",
      "Unlimited doubt-clearing sessions",
      "Online & offline modes, Gurgaon",
    ],
  },
  {
    badge: "Online · All Grades",
    title: "Pre-AP Online Coaching",
    desc: "Full-featured live online coaching matching the quality of in-centre sessions — ideal for students across Delhi NCR and internationally.",
    details: [
      "Live classes with virtual whiteboard",
      "Recorded sessions for revision",
      "EST / IST / GST time-zone slots",
      "Parent progress dashboard",
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────── */
export default function StructuredTracks() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} ${styles.sectionCream}`}
      id="programmes"
    >
      <div className={styles.inner}>
        {/* ── Section header ── */}
        <div className={`${styles.hdr} ${styles.reveal}`}>
          <span className={styles.sTag}>Structured Tracks</span>
          <span className={styles.goldLine} />
          <h2 className={styles.sHead}>Our Pre-AP Programmes</h2>
          <p className={styles.sSub}>
            From 6-month intensives to 5-year integrated journeys — every
            programme is built around your child's timeline and university
            goals.
          </p>
        </div>

        {/* ── Programme cards grid ── */}
        <div className={styles.progGrid}>
          {PROGRAMMES.map((prog) => (
            <div
              key={prog.title}
              className={`${prog.featured ? styles.progCardFeatured : styles.progCard} ${styles.reveal}`}
            >
              {/* Navy header band */}
              <div
                className={
                  prog.featured ? styles.progHeadFeatured : styles.progHead
                }
              >
                <span className={styles.progBadge}>{prog.badge}</span>
                <div className={styles.progTitle}>{prog.title}</div>
              </div>

              {/* Card body */}
              <div className={styles.progBody}>
                <p className={styles.progDesc}>{prog.desc}</p>
                {prog.details.map((detail) => (
                  <div key={detail} className={styles.progDetail}>
                    <span className={styles.pdDot}>◆</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}