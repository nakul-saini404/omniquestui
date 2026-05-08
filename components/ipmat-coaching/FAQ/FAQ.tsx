"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    category: "Admissions",
    q: "Who is the EduQuest IPMAT programme designed for?",
    a: "Our programme is built for Class 11 & 12 students — from any stream (Science, Commerce, or Humanities) — who are targeting IIM Indore, IIM Rohtak, IIM Ranchi, IIM Bodh Gaya, IIM Jammu, IIFT, and JIPMAT. We have dedicated bridge classes for students without a strong mathematics background.",
  },
  {
    category: "Admissions",
    q: "When should I start preparing for IPMAT 2026?",
    a: "Ideally, you should begin at the start of Class 11 — that gives you a full 12-month runway to complete our structured Foundation and Mastery phases, publish a research paper, complete your Aptech certification, and accumulate meaningful internship experience. Starting in Class 12 is still viable, but the preparation must be more intensive.",
  },
  {
    category: "Curriculum",
    q: "What does the EduQuest 360° curriculum cover?",
    a: "The curriculum is mapped precisely to the NTA and IIM exam patterns. It covers Quantitative Ability (Arithmetic, Algebra, Geometry, Modern Math), Verbal Ability (RC, Grammar, Vocabulary, Critical Reasoning), and Data Interpretation & Logical Reasoning — with 100+ full-length mock tests, section-wise analytics, and mentor review built in throughout.",
  },
  {
    category: "Curriculum",
    q: "How many mock tests are included in the programme?",
    a: "Students receive access to 100+ full-length mock tests across all formats — simulating IPMAT Indore, IPMAT Rohtak, JIPMAT, and IIFT patterns. From Month 7 onwards, our schedule ramps to 3 full-length mocks per week, each followed by a structured mentor review session to identify patterns and eliminate weak areas.",
  },
  {
    category: "Profile Building",
    q: "What is the EduQuest Spike and why does it matter?",
    a: "The Spike is our profile-building framework that takes you beyond the test. It includes publishing a 2,000-word peer-reviewed research paper on economics or management, earning industry-recognised Aptech certifications in Data Science or AI, facilitating high-impact internships in Finance, Marketing, or Operations, and building community leadership credentials. IIM interview panels actively notice and reward these differentiators.",
  },
  {
    category: "Profile Building",
    q: "Is the Aptech certification genuinely valuable for IIM interviews?",
    a: "Yes — the partnership with Aptech gives our students certifications in Data Science for Business and AI for Managers that are recognised by employers and noticed by IIM panellists. These credentials demonstrate technical curiosity and initiative that most IPMAT candidates cannot show. Several of our students have used these certifications as the anchor for their entire WAT-PI narrative.",
  },
  {
    category: "Logistics",
    q: "Is the programme available online, offline, or both?",
    a: "EduQuest offers both modes. Our primary centre is at Galleria Boulevard, DLF Phase-IV, Gurgaon. Online batches run live (not recorded-only) with the same mentor access, mock infrastructure, and profile-building support. Hybrid enrolment — attending offline for key sessions and online for weekday classes — is also available on request.",
  },
  {
    category: "Logistics",
    q: "How do I book a free consultation session?",
    a: "Simply fill in the contact form on this page or call +91-9958041888 / +91-9717738553. Our team responds within 24 hours to schedule a 60-minute strategy session with our Chief Mentor — completely free, with zero obligation. We will map out your personalised 12-month roadmap on the spot.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered =
    activeFilter === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeFilter);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section} id="faq" ref={sectionRef}>
      {/* Background texture */}
      <div className={styles.noiseOverlay} aria-hidden="true" />
      <div className={styles.accentBar} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${visible ? styles.headerVisible : ""}`}>
          <div className={styles.labelWrap}>
            <span className={styles.labelDash} />
            <span className={styles.labelText}>Frequently Asked Questions</span>
          </div>
          <h2 className={styles.heading}>
            Everything You Need
            <br />
            <em className={styles.headingEm}>to Know</em>
          </h2>
          <p className={styles.sub}>
            Straight answers to the questions every serious IPMAT aspirant asks
            before they commit to a programme.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={`${styles.filters} ${visible ? styles.filtersVisible : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.pill} ${activeFilter === cat ? styles.pillActive : ""}`}
              onClick={() => {
                setActiveFilter(cat);
                setOpenIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className={styles.accordion}>
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`${styles.item} ${visible ? styles.itemVisible : ""} ${isOpen ? styles.itemOpen : ""}`}
                style={{ animationDelay: `${0.15 + i * 0.07}s` }}
              >
                {/* Category chip */}
                <span className={styles.chip}>{faq.category}</span>

                <button
                  className={styles.trigger}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                 
                >
                  <span className={styles.triggerText}>{faq.q}</span>

                  <span className={styles.iconWrap}  style={{marginTop:"26px"}} aria-hidden="true">
                    <svg
                      className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={styles.answerWrap}
                  style={{
                    maxHeight: isOpen
                      ? `${answerRefs.current[i]?.scrollHeight ?? 500}px`
                      : "0px",
                  }}
                >
                  <div
                    ref={(el) => { answerRefs.current[i] = el; }}
                    className={styles.answer}
                  >
                    {faq.a}
                  </div>
                </div>

                {/* Animated left border fill */}
                <div className={styles.borderFill} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA nudge */}
        <div className={`${styles.nudge} ${visible ? styles.nudgeVisible : ""}`}>
          <span className={styles.nudgeText}>Still have questions?</span>
          <a href="#contact" className={styles.nudgeLink}>
            Talk to a mentor
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}