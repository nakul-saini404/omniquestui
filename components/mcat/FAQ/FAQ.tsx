"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is the MCAT score range and what score do I need?",
    a: "The MCAT is scored 472–528, with each of the four sections scored 118–132. The national average is around 501–502. Top MD programs typically require 515+, with elite schools like Harvard, Johns Hopkins, and UCSF expecting 520+. EduQuest targets 520+ for all students in our Mentored and Bootcamp programs.",
  },
  {
    q: "How long does MCAT preparation typically take?",
    a: "Most students achieve their target score in 4–6 months studying 20–25 hours per week. Our diagnostic identifies your personal timeline from the first session. Students retaking the MCAT with a targeted plan often need only 8–12 weeks to achieve a significant score jump.",
  },
  {
    q: "Is the MCAT accepted at Indian medical schools?",
    a: "The MCAT is primarily used for admissions to US and Canadian MD programs. However, many Indian students pursuing international medical education — particularly at US allopathic schools — require strong MCAT scores. Some Caribbean and international medical schools also accept MCAT scores for admission.",
  },
  {
    q: "Can I study for the MCAT while completing my undergraduate degree?",
    a: "Absolutely. Our programs are specifically built for pre-med students carrying a full academic load. All lectures are recorded and accessible on demand. Live sessions are scheduled flexibly. Our adaptive platform maximises the efficiency of every study hour — designed around your schedule, not ours.",
  },
  {
    q: "How many times can I take the MCAT?",
    a: "The AAMC allows you to take the MCAT up to three times in a single testing year, four times across two consecutive years, and seven times total across your lifetime. Most medical schools see all MCAT scores, so it is essential to be fully prepared before your first attempt — which is exactly what EduQuest programmes are built for.",
  },
  {
    q: "How is EduQuest's MCAT prep different from other platforms?",
    a: "Three things set us apart: (1) every instructor scored 520+, not just 'MCAT-trained'; (2) our adaptive diagnostic personalises your study plan from the first session based on reasoning gaps, not just content gaps; (3) our mandatory wrong-answer debrief system — unique to EduQuest — is responsible for the majority of our students' score gains in the final 6 weeks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealEls = sectionRef.current?.querySelectorAll<HTMLElement>(
      "[data-reveal]"
    );
    if (!revealEls) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faq} id="faq" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section Header ── */}
        <div
          className={`${styles.secHeaderCenter} ${styles.reveal}`}
          data-reveal
        >
          <div className={`${styles.secBadge} ${styles.secBadgeNavy}`}>
            FAQ
          </div>
          <h2 className={styles.secTitle}>
            Frequently Asked <em>Questions</em>
          </h2>
          <div className={`${styles.divider} ${styles.dividerCenter}`} />
        </div>

        {/* ── Accordion List ── */}
        <div
          className={`${styles.faqList} ${styles.reveal}`}
          data-reveal
          style={{ transitionDelay: "0.1s" }}
        >
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              >
                <button
                  className={styles.faqQ}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}