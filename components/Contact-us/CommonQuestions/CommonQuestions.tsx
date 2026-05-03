"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./CommonQuestions.module.css";

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "919954041888";
const EMAIL_ADDRESS   = "wrieto.eduquest@gmail.com";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    id: "free-session",
    question: "Is the first advisory session really free?",
    answer:
      "Yes — absolutely free, no strings attached. Our counsellor will spend 30–45 minutes understanding your goals, reviewing your current profile, and outlining a personalised strategy. There is no commitment required.",
  },
  {
    id: "response-time",
    question: "How quickly will someone contact me after I submit the form?",
    answer: (
      <>
        Our team commits to responding within 24 hours on all business days. For
        urgent queries, WhatsApp at +91-9954041888 typically gets a response
        within 2 hours during office hours.
      </>
    ),
  },
  {
    id: "international",
    question: "Do you offer online coaching for international students?",
    answer:
      "Yes. EduQuest coaches students across the UK, UAE, Singapore, USA, Nigeria, Mauritius, and more — fully online. Sessions are scheduled around your local timezone, including GMT/BST-compatible evening slots for UK students.",
  },
  {
    id: "multiple-tracks",
    question: "Can I switch programmes or take multiple coaching tracks?",
    answer:
      "Yes. Many students take SAT coaching alongside AP coaching, or profile building alongside admissions counselling. We'll build a schedule that accommodates your school workload and board exams without conflicts.",
  },
  {
    id: "refund",
    question: "What is EduQuest's refund policy?",
    answer: (
      <>
        EduQuest has a clearly defined refund policy. Please visit{" "}
        <a
          href="https://eduquest.org.in/refund-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          eduquest.org.in/refund-policy
        </a>{" "}
        for full terms, or ask your counsellor during the free advisory session.
      </>
    ),
  },
  {
    id: "franchise",
    question: "Do you help with franchise or partnership enquiries?",
    answer: (
      <>
        Yes. For franchise opportunities, write to{" "}
        <a
          href="mailto:director@eduquest.org.in"
          className={styles.inlineLink}
        >
          director@eduquest.org.in
        </a>{" "}
        or visit{" "}
        <a
          href="https://eduquest.org.in/franchise/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          eduquest.org.in/franchise
        </a>{" "}
        for details on the EduQuest partner programme.
      </>
    ),
  },
];

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const CommonQuestions: React.FC = () => {
  const [openId, setOpenId]   = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef            = useRef<HTMLElement>(null);

  /* reveal animation */
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

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.sectionInner}>
        <div className={`${styles.layout} ${visible ? styles.layoutVisible : ""}`}>

          {/* ── Left column: header + CTA buttons ── */}
          <div className={styles.leftCol}>
            <div className={styles.sectionTag}>FAQ</div>
            <h2 className={styles.sectionTitle}>
              Common <em>Questions</em>
            </h2>
            <div className={styles.goldLine} aria-hidden="true" />
            <p className={styles.sectionSub}>
              Have more questions? Reach us on WhatsApp and get an answer in
              under 2 hours.
            </p>

            <div className={styles.ctaGroup}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                💬 WhatsApp a Counsellor
              </a>

              {/* ── Email button: opens Gmail compose in a new tab ── */}
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${EMAIL_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnOutline}`}
              >
                ✉ Send an Email
              </a>
            </div>
          </div>

          {/* ── Right column: accordion ── */}
          <div className={styles.faqList} role="list">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  role="listitem"
                >
                  <button
                    className={styles.faqQ}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ""}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.faqAInner}>{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;