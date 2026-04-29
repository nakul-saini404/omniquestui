"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "What SAT coaching options does EduQuest offer in Delhi?",
    a: "EduQuest offers Classroom SAT coaching, Online Live Group classes, One-on-One sessions (online and hybrid), and full Hybrid programmes for students in Delhi, Noida, and Gurgaon. Both offline and digital SAT coaching in Delhi are available. All courses include a Diagnostic Test Framework, 100+ minimum hours, and unlimited doubt-clearing sessions.",
  },
  {
    q: "How to score 1500+ on the SAT in Delhi?",
    a: "Score 1500+ by: (1) Taking a full diagnostic to find your baseline. (2) Targeting your weak skill clusters with a personalized module plan. (3) Mastering Bluebook's interface and adaptive testing strategy. (4) Taking 6+ full-length adaptive mocks. (5) Reviewing every wrong AND lucky-correct answer. (6) Aligning your SAT preparation with your university admissions strategy. EduQuest's programme in Delhi is built around this exact sequence.",
  },
  {
    q: "When should a Delhi student start SAT coaching?",
    a: "EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11 to allow for a retake if needed. For students targeting the most selective universities, starting in Grade 9 or earlier through EduQuest's 3-year or 4-year integrated programme gives the best advantage.",
  },
  {
    q: "What is the Digital SAT exam pattern 2026?",
    a: "Digital SAT 2026: 2 sections — Reading & Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total: 98 questions in 2 hours 14 minutes. Both sections are fully adaptive (2 modules each). Calculator is allowed throughout the Math section. Scored 400–1600. EduQuest's coaching in Delhi is fully aligned with the current Digital SAT format.",
  },
  {
    q: "Does EduQuest offer online SAT coaching for Delhi students?",
    a: "Yes. EduQuest offers fully online Live Group SAT classes, Online One-on-One sessions (via Zoom/Webex), and Hybrid programmes combining online and classroom coaching. Students from Delhi, Noida, Gurgaon, and across India — as well as international students from Nigeria, UAE, and other countries — have been successfully coached online.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className="section-head">
          <div className="label">Frequently Asked Questions</div>
          <h2>
            SAT Coaching in Delhi — <em>Your Questions Answered</em>
          </h2>
        </div>

        <div className={styles.list}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
            >
              <button className={styles.question} onClick={() => toggle(i)}>
                {faq.q}
                <span className={styles.chevron}>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="#0B1C3D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div className={styles.answer}>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
