'use client';

import { useState } from 'react';
import styles from './FAQs.module.css';

const faqs = [
  {
    question: "Is TMUA mandatory for UK university applications?",
    answer: "TMUA is not mandatory for most UK universities, but a high score can significantly strengthen your application and sometimes lead to reduced conditional offers from institutions like Cambridge and Warwick.",
  },
  {
    question: "Which universities consider TMUA scores?",
    answer: "Cambridge, Warwick, Durham, Lancaster, and Sheffield either require or strongly consider TMUA. LSE, UCL, Imperial, Bath, Southampton, Bristol, and Queen Mary also welcome TMUA scores for relevant courses.",
  },
  {
    question: "What is a good score in TMUA?",
    answer: "TMUA is scored on a scale of 1.0 to 9.0. A score above 6.5 is generally considered competitive. Top-tier universities like Cambridge typically look for 7.0 or above. EduQuest students regularly achieve 7.0+.",
  },
  {
    question: "When should I take the TMUA?",
    answer: "TMUA is offered in October (Cambridge applicants) and January (most other universities). Students should take it in the same year they apply to meet UCAS deadlines. EduQuest recommends starting preparation 6–9 months in advance.",
  },
  {
    question: "Can I prepare for TMUA alongside school studies?",
    answer: "Yes! EduQuest provides a flexible schedule designed to align with your school workload, including weekend and holiday classes. Many successful students prepare for TMUA while completing their A-levels or IB Diploma.",
  },
  {
    question: "Is TMUA only for Mathematics majors?",
    answer: "No. TMUA is valuable for students applying to Computer Science, Economics, Data Science, Engineering, and any course with a significant quantitative component — not exclusively Mathematics degrees.",
  },
  {
    question: "Can international students outside the UK take TMUA?",
    answer: "Yes, international students can register and take TMUA at designated test centers worldwide. EduQuest helps students in India and abroad navigate the full registration process from start to finish.",
  },
  {
    question: "How do I register for TMUA?",
    answer: "Registration is done through an authorized Cambridge Assessment test centre — you cannot register directly online. EduQuest also helps students through the registration process as part of our comprehensive coaching support.",
  },
  {
    question: "What kind of questions appear in TMUA?",
    answer: "TMUA features multiple-choice questions. Paper 1 tests logical reasoning and argument evaluation. Paper 2 tests application of mathematical concepts including algebra, calculus, trigonometry, and sequences. No calculator is permitted in either paper.",
  },
  {
    question: "Can EduQuest help with university applications too?",
    answer: "Absolutely. EduQuest provides end-to-end support including profile building, personal statement drafting, university shortlisting, and Oxbridge-style interview preparation — all alongside TMUA coaching under one roof.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>FAQs</span>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <p className={styles.sectionSub}>
          Everything you need to know about TMUA registration, scoring,
          preparation, and how EduQuest can support your UK university journey.
        </p>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                >
                  <p className={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}