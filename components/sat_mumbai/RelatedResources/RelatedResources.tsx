import React, { useEffect, useRef } from "react";
import styles from "./RelatedResources.module.css";

const resources = [
  {
    icon: "⚠️",
    title: "7 SAT Mistakes That Kill Your Score",
    description:
      "The most common errors Indian students make — and how to eliminate them before your next attempt.",
    linkLabel: "Read Guide →",
    href: "https://eduquest.org.in/sat-mistakes/",
  },
  {
    icon: "📈",
    title: "SAT 1500+ Strategy & Study Plan",
    description:
      "A proven, section-by-section 90-day prep plan for students targeting 1500 and above.",
    linkLabel: "Read Strategy →",
    href: "https://eduquest.org.in/sat-2026-seo-cluster-eduquest-growth-engine/",
  },
  {
    icon: "🏛",
    title: "Undergraduate Admissions (Premium)",
    description:
      "Full-service Ivy League and Top 50 admissions consulting. Your SAT is the starting point — not the end.",
    linkLabel: "Explore Service →",
    href: "https://eduquest.org.in/undergraduate-admission-premium/",
  },
  {
    icon: "📚",
    title: "How to Prepare for SAT in India (2026)",
    description:
      "Complete guide for Indian students: timeline, resources, adaptive strategy, and score targets.",
    linkLabel: "Read Guide →",
    href: "https://eduquest.org.in/how-to-prepare-sat-exam-in-india-edu-quest/",
  },
];

const RelatedResources: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.sectionLabel}>Related Resources</div>
          <h2 className={styles.sectionTitle}>
            Build Your <em className={styles.em}>Complete</em> Strategy
          </h2>
          <p className={styles.sectionSub}>
            The SAT is one part of a larger admissions ecosystem. Explore the
            resources that compound your results.
          </p>
        </div>

        {/* ── 4-column resource cards ── */}
        <div className={styles.resGrid}>
          {resources.map((res, i) => (
            <div
              key={res.title}
              className={`${styles.resCard} ${styles.reveal}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.resIcon}>{res.icon}</div>
              <h3 className={styles.resTitle}>{res.title}</h3>
              <p className={styles.resDesc}>{res.description}</p>
              <a
                href={res.href}
                className={styles.resLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {res.linkLabel}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedResources;