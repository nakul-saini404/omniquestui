import React, { useEffect, useRef } from "react";
import styles from "./CTAStrip.module.css";

const CTAStrip: React.FC = () => {
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
    <section id="enroll" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.ctaStrip} ${styles.reveal}`}>

          {/* Decorative radial glow — matches HTML ::before */}
          <div className={styles.glow} aria-hidden="true" />

          {/* Badge */}
          <div className={styles.badgeTop}>✦ Limited Advisory Slots · 2026 Intake</div>

          {/* Heading */}
          <h2 className={styles.heading}>
            Your Child Has Potential —{" "}
            <em className={styles.em}>They Need Positioning</em>
          </h2>

          {/* Sub text */}
          <p className={styles.sub}>
            Without the right strategy, even talented students fall short. With
            the right Top 80 university framework, anything is possible.
          </p>

          {/* CTA buttons */}
          <div className={styles.ctaBtns}>
            <a
              href="/contact-us"
              className={styles.btnPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Advance Strategy Session
            </a>
           
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAStrip;