"use client"
import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What grade should my child start Pre-AP coaching?",
    answer:
      "Grade 8 or 9 is ideal for students targeting Ivy League or top-10 global universities, as it allows a 4–5 year integrated roadmap. Grade 10 students still have ample time for our Accelerated Track. Grade 11 students can join our AP Readiness Sprint. The right time to start is always now — every semester of early preparation compounds.",
  },
  {
    question: "How long does the Pre-AP programme last?",
    answer:
      "Programme duration ranges from 6 months (AP Readiness Sprint for Grade 11) to 4–5 years (Early Foundation Programme for Grade 8). The duration is finalised after a free diagnostic assessment tailored to the student's current level and target goals.",
  },
  {
    question: "Is Pre-AP coaching only for students targeting US universities?",
    answer:
      "No. AP scores are accepted at 4,000+ universities in the US, UK (Oxford, Cambridge, Imperial), Canada (UofT, UBC), Australia (Melbourne, Monash), and many others globally. Pre-AP coaching builds a foundation that is valuable regardless of your target geography.",
  },
  {
    question: "Does EduQuest help with the college application beyond coaching?",
    answer:
      "Yes. EduQuest offers end-to-end support including university shortlisting, application strategy, personal statement and essay guidance, extracurricular narrative development, scholarship preparation, and interview coaching. Pre-AP coaching is one component of our full admissions ecosystem.",
  },
  {
    question: "Are online sessions as effective as in-centre coaching?",
    answer:
      "Yes. EduQuest's online platform uses live video, screen sharing, virtual whiteboards, and recorded session replays. Online students consistently achieve the same AP scores as in-centre students. Sessions can be scheduled to match Indian Standard Time, Gulf time, or international time zones.",
  },
  {
    question: "What subjects does EduQuest cover in Pre-AP coaching?",
    answer:
      "EduQuest covers STEM subjects (Calculus AB/BC, Physics 1 & C, Chemistry, Biology, Computer Science A & Principles, Statistics, Environmental Science) and Liberal Arts subjects (English Language & Literature, World & US History, Psychology, Micro & Macroeconomics, Human Geography).",
  },
  {
    question: "How many AP subjects should my child take?",
    answer:
      "Most competitive applicants to top US universities take 5–8 AP exams over Grades 11 and 12. Quality matters more than quantity — scoring 5 on four well-chosen subjects outweighs scoring 3 on eight. EduQuest helps students select the right AP combination for their target universities and intended major during the initial roadmap session.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.tag}>FAQs</span>
          <span className={styles.goldLine}></span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className={styles.faqWrap}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className={styles.arrow} aria-hidden="true">▼</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={styles.answer}
                  role="region"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}