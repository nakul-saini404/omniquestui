"use client";

import { useState } from "react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "What is the Digital SAT?",
    a: "The Digital SAT (dSAT) is the current format of the SAT, launched globally in 2024 by College Board. It is taken entirely on a computer using the Bluebook application. Key differences from the paper SAT: it is shorter (2 hours 14 minutes vs 3+ hours), fully computer-adaptive (Module 2 difficulty adjusts based on Module 1 performance), allows a calculator throughout the Math section, and uses shorter individual passages paired with focused questions in the R&W section. The Digital SAT is scored 400–1600 and is accepted by 4,000+ universities worldwide.",
  },
  {
    q: "How is the SAT different from CBSE or IB board exams?",
    a: "The SAT and Indian board exams (CBSE, ICSE) or international curricula (IB, IGCSE) serve different purposes and test different competencies. Board exams assess curriculum-specific content knowledge across multiple subjects. The SAT is a standardised reasoning test that assesses mathematical problem-solving and evidence-based reading and writing — skills that predict college readiness. The SAT does not test memorisation of syllabus content; it tests application, reasoning, and adaptive problem-solving. Students strong in CBSE or IB Maths often find SAT Math manageable; however, the R&W section requires distinct preparation focused on inference, rhetoric, and grammar conventions not typically covered in Indian school curricula.",
  },
  {
    q: "Is the SAT important for US university admissions in 2026?",
    a: "Yes — the SAT has regained significant importance for US university admissions in 2025–2026. Most selective universities that went test-optional during COVID-19 have now reinstated SAT/ACT requirements. MIT, Yale, Dartmouth, Harvard, Princeton, and many other top-20 universities now require standardised test scores. Even at test-optional schools, submitting a strong SAT score (typically 1450+) meaningfully increases admission probability. For international students from India, where grade inflation and curriculum differences make GPA comparisons difficult, a strong SAT score serves as a credible, comparable academic signal. EduQuest strongly recommends preparing for and submitting the SAT for all students targeting US universities in 2026.",
  },
  {
    q: "What SAT coaching options does EduQuest offer in Delhi?",
    a: "EduQuest offers Classroom SAT coaching, Online Live Group classes, One-on-One sessions (online and hybrid), and full Hybrid programmes for students in Delhi, Noida, and Gurgaon. All courses include a Diagnostic Test Framework, 100+ minimum hours, and unlimited doubt-clearing sessions.",
  },
  {
    q: "How to score 1500+ on the SAT in Delhi?",
    a: "Score 1500+ by: (1) Taking a full Bluebook diagnostic to find your baseline and skill-cluster gaps. (2) Targeting your weak clusters with a personalised module plan. (3) Mastering Bluebook's interface and adaptive testing strategy — specifically targeting Module 2 Hard routing. (4) Taking 6+ full-length adaptive mocks under timed conditions. (5) Reviewing every wrong and lucky-correct answer after each mock. (6) Aligning your SAT preparation with your university admissions strategy. EduQuest's programme in Delhi is built around this exact sequence.",
  },
   {
    q: " When should a Delhi student start SAT coaching?",
    a: "EduQuest recommends starting SAT preparation in Grade 10, aiming to complete the first attempt by October/November of Grade 11 — leaving time for a retake if needed before Grade 12 applications open. For students targeting the most selective universities, starting in Grade 9 through EduQuest's 3-year or 4-year integrated programme provides a significant advantage in both score and profile development.",
  },
   {
    q: "What is the Digital SAT exam pattern for 2026?",
    a: "Digital SAT 2026: 2 sections — Reading &amp; Writing (54 questions, 64 minutes) and Math (44 questions, 70 minutes). Total: 98 questions in 2 hours 14 minutes. Both sections are fully adaptive (2 modules each). Calculator is allowed throughout the Math section. Scored 400–1600. Both sections use 2 adaptive modules — performance in Module 1 determines whether you receive Module 2 Easy or Module 2 Hard. EduQuest's coaching in Delhi is fully aligned with the current Digital SAT format.",
  },
   {
    q: " Does EduQuest offer online SAT coaching for Delhi students?",
    a: "Yes. EduQuest offers fully online Live Group SAT classes, Online One-on-One sessions, and Hybrid programmes combining online and classroom coaching. Students from Delhi, Noida, Gurgaon, and across India — as well as international students from Nigeria, UAE, and other countries — have been successfully coached online to scores of 1450–1560.",
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
