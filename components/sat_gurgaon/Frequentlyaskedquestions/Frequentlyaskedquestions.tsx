"use client";

import { useState } from "react";
import styles from "./FrequentlyAskedQuestions.module.css";

const faqs = [
  {
    q: "What SAT coaching options does EduQuest offer in Gurgaon?",
    a: "EduQuest offers Classroom SAT coaching, Online Live Group classes, One-on-One sessions (online and hybrid), and full Hybrid programmes for students in Gurgaon, Delhi, and Noida. Both offline and digital SAT coaching in Gurgaon are available. All courses include a Diagnostic Test Framework, 100+ minimum hours, and unlimited doubt-clearing sessions.",
  },
  {
    q: "What is the fee for SAT coaching at EduQuest Gurgaon?",
    a: "The fee for our SAT coaching programmes in Gurgaon varies by course type. The Online Live Group Course starts at ₹45,000, Hybrid Group Course at ₹70,800, Classroom Group at ₹55,000, One-on-One at ₹80,000, and Hybrid One-on-One at ₹1,18,000. All fees include study material and mock tests. GST is applicable. Contact us for a detailed fee structure and current offers.",
  },
  {
    q: "How to score 1500+ on the SAT at EduQuest Gurgaon?",
    a: "Score 1500+ by: (1) Taking a full diagnostic to find your baseline. (2) Targeting your weak skill clusters with a personalized module plan. (3) Mastering Bluebook's interface and adaptive testing strategy. (4) Taking 15+ full-length adaptive mocks. (5) Reviewing every wrong AND lucky-correct answer. (6) Aligning your SAT preparation with your university admissions strategy. EduQuest's programme in Gurgaon is built around this exact sequence.",
  },
  {
    q: "When should a Gurgaon student start SAT coaching?",
    a: "EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11 to allow for a retake if needed. For students targeting the most selective universities, starting in Grade 9 or earlier through EduQuest's 3-year or 4-year integrated programme gives the best advantage. Most students complete preparation in 3–4 months with our Regular Batch.",
  },
  {
    q: "What is the Digital SAT exam pattern 2026?",
    a: "Digital SAT 2026: 2 sections — Reading & Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total: 98 questions in 2 hours 14 minutes. Both sections are fully adaptive (2 modules each). Calculator is allowed throughout the Math section. Scored 400–1600. EduQuest's coaching in Gurgaon is fully aligned with the current Digital SAT format.",
  },
  {
    q: "Does EduQuest offer online SAT coaching for Gurgaon students?",
    a: "Yes. EduQuest offers fully online Live Group SAT classes, Online One-on-One sessions (via Zoom/Webex), and Hybrid programmes combining online and classroom coaching. Students from Delhi, Noida, Faridabad, and even outside India have successfully prepared for the SAT through our online platform.",
  },
  {
    q: "What is the batch size for SAT coaching at EduQuest Gurgaon?",
    a: "We maintain a strict maximum batch size of 12 students per SAT batch at our Gurgaon centre. This ensures personalised attention for every student, allows the faculty to track individual progress, and creates a focused learning environment without the noise and distraction of large classroom settings.",
  },
  {
    q: "What is the average SAT score improvement for EduQuest students in Gurgaon?",
    a: "Our students in Gurgaon achieve an average SAT score improvement of 200–300 points over the duration of the course. Many students who began with scores around 1100–1200 have gone on to achieve 1450–1580+ after completing our structured SAT coaching programme. Results depend on individual effort, consistency, and starting baseline.",
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
        SAT Coaching in Gurgaon —{" "}
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