"use client";

import { useState } from "react";
import styles from "./temp.module.css";

const faqs = [
  {
    q: "What SAT coaching options does EduQuest offer in Jaipur?",
    a: "EduQuest offers Online Live Group SAT classes, One-on-One sessions (online and hybrid), and full Hybrid programmes for students in Jaipur and across Rajasthan. Both offline and digital SAT coaching in Jaipur are available. All courses include a Diagnostic Test Framework, 100+ minimum hours, and unlimited doubt-clearing sessions.",
  },
  {
    q: "What is the Adaptive Model that EduQuest uses in Jaipur?",
    a: "EduQuest's Adaptive Model is a student-first learning approach where the process adapts to the student — not the other way around. It includes a Diagnostic Test Framework, personalized module design, step-by-step roadmaps, and continuous mapping so that by the end of the programme, every Jaipur student is fully prepared for the Digital SAT.",
  },
  {
    q: "How to score 1500+ on the SAT with EduQuest Jaipur?",
    a: "Score 1500+ by: (1) Taking a full diagnostic to find your baseline. (2) Targeting your weak skill clusters with a personalized module plan. (3) Mastering Bluebook's interface and adaptive testing strategy. (4) Taking full-length adaptive mocks rigorously. (5) Reviewing every wrong AND lucky-correct answer. (6) Aligning your SAT preparation with your university admissions strategy. EduQuest's programme in Jaipur is built around this exact sequence.",
  },
  {
    q: "When should a Jaipur student start SAT coaching?",
    a: "EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11 to allow for a retake if needed. For students targeting the most selective universities, starting in Grade 9 or earlier through EduQuest's 3-year or 4-year integrated programme gives the best advantage. Most students complete preparation in 3–4 months with the regular batch.",
  },
  {
    q: "What is the Digital SAT exam pattern 2026?",
    a: "Digital SAT 2026: 2 sections — Reading & Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total: 98 questions in 2 hours 14 minutes. Both sections are fully adaptive (2 modules each). Calculator is allowed throughout the Math section. Scored 400–1600. EduQuest's coaching in Gurgaon is fully aligned with the current Digital SAT format.",
  },
  {
    q: "Does EduQuest offer online SAT coaching for Jaipur students?",
    a: "Yes. EduQuest offers fully online Live Group SAT classes, Online One-on-One sessions (via Zoom/Webex), and Hybrid programmes combining online and classroom coaching. Students from Jaipur, across Rajasthan, and even outside India have successfully prepared for the SAT through our online platform.",
  },
  {
    q: "What makes EduQuest different from other SAT coaching in Jaipur??",
    a: "EduQuest offers a unique 360-degree approach that goes beyond test preparation to include personality development, application writing, and university counselling. EduQuest has been conducting seminars in prestigious Jaipur schools and has connections with many schools in the area. With experience since 1995 and 2,299+ student profiles, EduQuest brings proven methodologies and real results.",
  },
  {
    q: "What is the average SAT score improvement for EduQuest students?",
    a: "EduQuest students typically achieve an average SAT score improvement of 200–300 points over the course duration. Many students who began with scores around 1100–1200 have gone on to achieve 1450–1580+ after completing our structured SAT coaching programme. Results depend on individual effort, consistency, and starting baseline.",
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.sectionLabel}>Frequently Asked Questions</div>
      <h2 className={styles.heading}>
        SAT Coaching in Jaipur —{" "}
        <em>Your Questions Answered</em>
      </h2>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
            >
              <div
                className={styles.faqQ}
                onClick={() => handleToggle(index)}
              >
                {faq.q}
              </div>
              <div className={styles.faqA}>
                <div className={styles.faqAInner}>{faq.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}