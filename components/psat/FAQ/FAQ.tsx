"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "What is the difference between PSAT 8/9, PSAT 10, and PSAT/NMSQT?",
    answer:
      "PSAT 8/9 is for Class 8–9 students, scores 240–1440. PSAT 10 is for Class 10 students, scores 320–1520 but not eligible for National Merit. PSAT/NMSQT is for Class 11 students, scores 320–1520, and is the version that qualifies for National Merit Scholarships. All three are on the same digital adaptive format via Bluebook.",
  },
  {
    question:
      "How does the National Merit Scholarship work for Indian students?",
    answer:
      "Indian students attending US high schools or international schools that administer the PSAT/NMSQT are eligible. Students scoring at or above the state/school Commended cutoff (~top 50,000 nationally, ~207+ Selection Index) receive recognition. Semifinalists (top 16,000) and Finalists qualify for corporate-sponsored scholarships ranging from $2,500 to full-ride awards. EduQuest has a dedicated National Merit pathway.",
  },
  {
    question: "When should my child start PSAT coaching?",
    answer:
      "The earlier, the better. EduQuest recommends starting PSAT awareness in Class 8, PSAT 8/9 prep formally in Class 9, and NMSQT-targeted coaching from Class 10 onward. Students who start in Class 9 consistently score 200–300 points higher on the NMSQT than those who start in Class 11. Our 5-year integrated track is specifically designed for this compounding advantage.",
  },
  {
    question: "Does the PSAT score appear on college applications?",
    answer:
      "PSAT scores themselves do not go on college applications, but National Merit recognition does — and it's a powerful signal. Beyond that, colleges use the College Board's Student Search Service to recruit high-PSAT scorers. Many Ivy League and top US universities proactively reach out to students with high PSAT scores for recruitment.",
  },
  {
    question: "What modes of coaching does EduQuest offer for PSAT?",
    answer:
      "EduQuest offers three modes: (1) Online Live — real-time classes via Zoom with recordings, accessible from anywhere in India or internationally; (2) Hybrid — a mix of online and in-person sessions in Delhi/Gurgaon; (3) Classroom — in-person at EduQuest centres. All modes include the same mock test access, 1-on-1 sessions, and faculty support.",
  },
  {
    question: "Is there a score improvement guarantee?",
    answer:
      "Our NMSQT Elite program includes a score improvement guarantee policy. If a student completes 90%+ of the coursework and attends all scheduled sessions but does not improve by at least 100 points over their diagnostic score, we offer a complimentary 3-month extension. Terms and conditions apply — contact us for details.",
  },
  {
    question: "How is the PSAT different from the SAT format-wise?",
    answer:
      "The PSAT and digital SAT share the same Bluebook adaptive format and question types. Key differences: PSAT is slightly shorter (2h 45m vs 3h 14m for SAT), PSAT does not test the most advanced SAT Math topics (though these are introduced in EduQuest's integrated program), and the PSAT max score is 1520 vs. SAT's 1600. Students who score 1450+ on PSAT typically score 1500+ on SAT with EduQuest's bridge training.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.inner}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>
            Frequently Asked{" "}
            <span className={styles.titleAccent}>Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                  role="region"
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}