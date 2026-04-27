"use client";
// components/DecisionCtaSection/DecisionCtaSection.tsx

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./DecisionCtaSection.module.css";
import { DECISION_CTA } from "@/app/omniquest/data/constants";

export default function DecisionCtaSection() {
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
    <section id="decision-cta" className={styles.section}>
      <div ref={innerRef} className={styles.inner}>

        {/* ── Tag ── */}
        <p className={styles.tag}>{DECISION_CTA.tag}</p>

        {/* ── Heading ── */}
        <h2 className={styles.h2}>
          {DECISION_CTA.heading.line1}
          <br />
          {DECISION_CTA.heading.line2}
          <br />
          <em>{DECISION_CTA.heading.line3Em}</em>
        </h2>

        {/* ── Body ── */}
        <p className={styles.body}>{DECISION_CTA.body}</p>

        {/* ── Buttons ── */}
        <div className={styles.buttons}>
          {DECISION_CTA.buttons.map((btn) =>
            btn.primary ? (
              <Link
                key={btn.label}
                href={btn.href}
                className={styles.btnPrimary}
              >
                {btn.label}
              </Link>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className={styles.btnSecondary}
              >
                {btn.label}
              </Link>
            )
          )}
        </div>

      </div>
    </section>
  );
}