"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is the SAT exam?",
    a: "The SAT (Scholastic Assessment Test) is a standardised college-entry exam by College Board, testing Reading & Writing and Mathematics on a 400–1600 scale. It is accepted by 4,000+ universities in the USA, UK, Canada, and Australia.",
  },
  {
    q: "Is the SAT hard to crack?",
    a: "The Digital SAT is adaptive — difficulty adjusts per section based on your performance. With structured coaching and consistent practice, most students gain 150–300+ points. Cracking 1500+ requires strategy, not just content knowledge.",
  },
  {
    q: "How to score 1500+ on the SAT?",
    a: "To score 1500+: (1) Take a full diagnostic to find your baseline. (2) Target your weak skill clusters — not random chapters. (3) Master Bluebook's interface tools. (4) Take 6+ full-length adaptive mocks. (5) Review every wrong AND lucky-correct answer. (6) Aim for Module 2 Hard routing in both sections. EduQuest's structured program is built around this exact sequence.",
  },
  {
    q: "What is the SAT exam pattern 2026?",
    a: "Digital SAT 2026: 2 sections — Reading & Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total: 98 questions in 2 hours 14 minutes. Both sections are fully adaptive (2 modules each). Calculator is allowed throughout the Math section. Scored 400–1600.",
  },
  {
    q: "How many questions are in the SAT?",
    a: "The Digital SAT has 98 questions total: 54 in Reading & Writing and 44 in Math, across 4 adaptive modules (2 per section). This is shorter than the old paper SAT which had 154 questions.",
  },
  {
    q: "How many SAT attempts are allowed?",
    a: "There is no official limit on SAT attempts. Most students take 2–3 attempts. Many universities consider your Superscore (highest section scores across attempts). EduQuest recommends starting SAT prep in Grade 10 and aiming to finish by November of Grade 11 to allow for a retake if needed.",
  },
  {
    q: "Does EduQuest offer online SAT coaching?",
    a: "Yes. EduQuest offers Online Live Group classes, Hybrid (online + offline) courses, One-on-One sessions (online and hybrid), and a fully integrated year-round programme. Students from Delhi, Gurgaon, Bangalore, Mumbai, Hyderabad, and internationally (Nigeria, UAE, etc.) have been successfully coached. Contact us to discuss the right format for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.faqSection} id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="label">Frequently Asked Questions</div>
          <h2>
            SAT Questions,<br /><em>Answered</em>
          </h2>
          <p>
            Every question Indian students ask before starting their SAT journey —
            answered clearly, with real numbers.
          </p>
        </div>
        <div className={`${styles.faqList} reveal`}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.open : ""}`}>
              <button className={styles.faqQ} onClick={() => toggle(i)}>
                {f.q}
                <span className={styles.faqChevron}>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke={openIndex === i ? "#fff" : "#0B1C3D"} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && <div className={styles.faqA}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
