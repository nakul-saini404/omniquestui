"use client";
// components/FinalCtaSection/FinalCtaSection.tsx

import styles from "./FinalCtaSection.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FinalCtaSection() {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    if (innerRef.current) obs.observe(innerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div ref={innerRef} className={styles.inner}>
        <p className={styles.tag}>✦ Limited Advisory Slots · Fall 2026 Intake</p>

        <h2 className={styles.h2}>
          Your outcome is not defined
          <br />
          by effort — but by how
          <br />
          you are <em>positioned.</em>
        </h2>

        <p className={styles.body}>
          Choose the pathway aligned with your stage, and enter a system
          designed for high-performance outcomes.
        </p>

      
      </div>
    </section>
  );
}