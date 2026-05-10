"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

/* ── Types ── */
interface FaqItem {
  question: string;
  answer: string;
}

/* ── Static data ── */
const faqs: FaqItem[] = [
  {
    question: "What is the LSAT score range and what score do I need?",
    answer:
      "The LSAT is scored 120–180. For NLU Delhi (CLAT) you need top percentiles, while international T14 schools typically require 170+. The median score is ~151. EduQuest targets 170+ for all students in our Mentored and Bootcamp programs.",
  },
  {
    question: "How long does LSAT preparation typically take?",
    answer:
      "Most students achieve their target score in 3–6 months studying 15–20 hours per week. Our diagnostic immediately identifies your personal timeline. Students retaking the LSAT often need only 6–10 weeks with our targeted approach.",
  },
  {
    question: "Is the LSAT accepted at Indian law schools?",
    answer:
      "Yes. LSAT–India is administered by Pearson VUE and accepted at over 80 law schools in India including Jindal Global Law School, Symbiosis, UPES, and many others. It is separate from CLAT but increasingly valued by top institutions.",
  },
  {
    question: "Can I study for the LSAT while in college or working full-time?",
    answer:
      "Absolutely. Our programs are built for exactly this scenario. All lectures are recorded and accessible on demand. Live sessions are scheduled across time zones. Our platform adapts to your available hours — not the other way around.",
  },
  {
    question: "What is the score guarantee in the Mentored Prep plan?",
    answer:
      "If you complete all assigned work in the Mentored Prep program and do not improve your score by at least 10 points (or reach your stated target), we will provide a full second cycle of mentored prep at no additional cost. Full terms are available on enrolment.",
  },
  {
    question: "How is EduQuest's LSAT prep different from other platforms?",
    answer:
      "Three things set us apart: (1) every instructor scored 170+, not just 'LSAT-trained'; (2) our adaptive diagnostic personalises your plan from day one; (3) we have the most comprehensive PT library in India with expert video explanations for every question in PT1–PT93+.",
  },
];

/* ── Component ── */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  /* Toggle accordion — one item open at a time */
  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  /* Scroll-based reveal via IntersectionObserver */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveals = section.querySelectorAll<HTMLElement>(`.${styles.reveal}`);

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

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.faq} id="faq" ref={sectionRef}>
      <div className={styles.sectionInner}>

        {/* ── Section header ── */}
        <div className={`${styles.secHeaderCenter} ${styles.reveal}`}>
          <div className={`${styles.secBadge} ${styles.secBadgeNavy}`}>
            FAQ
          </div>
          <h2 className={styles.secTitle}>
            Frequently Asked <em>Questions</em>
          </h2>
          <div className={styles.divider} />
        </div>

        {/* ── FAQ list ── */}
        <div
          className={`${styles.faqList} ${styles.reveal}`}
          style={{ transitionDelay: "0.1s" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem}${isOpen ? " " + styles.open : ""}`}
              >
                {/* Question button */}
                <button
                  className={styles.faqQ}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span className={styles.faqIcon} aria-hidden="true">
                    +
                  </span>
                </button>

                {/* Answer panel */}
                <div className={styles.faqA} role="region">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}