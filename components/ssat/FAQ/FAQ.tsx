"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

/* ── Types ──────────────────────────────────── */
interface FaqItem {
  question: string;
  answer: string;
}

/* ── Static data ─────────────────────────────── */
const faqItems: FaqItem[] = [
  {
    question: "What is the SSAT exam?",
    answer:
      "The SSAT (Secondary School Admission Test) is a standardised test used by independent and private schools worldwide to evaluate students for admission. It tests Verbal, Reading, and Quantitative (Math) skills and is available at three levels: Elementary (Grades 3–4), Middle (Grades 5–7), and Upper (Grades 8–11).",
  },
  {
    question: "How many times can I take the SSAT?",
    answer:
      "There is no official limit on the number of SSAT attempts. Students can take it up to 8 times per year on standard test dates. Many schools consider the highest score across all attempts. EduQuest recommends starting preparation early so you have room to attempt it 2–3 times if needed.",
  },
  {
    question: "What is a good SSAT score?",
    answer:
      "A \"good\" SSAT score is relative to the schools you are targeting. For highly selective boarding schools (Phillips Exeter, Andover, Choate), you typically need the 90th percentile or above. For other strong independent schools, the 75th–85th percentile is competitive. EduQuest helps you set school-specific score targets based on your application list.",
  },
  {
    question: "What is the SSAT negative marking rule?",
    answer:
      "The SSAT awards +1 for each correct answer, −¼ for each incorrect answer, and 0 for unanswered questions. This means random guessing is not advisable. However, if you can eliminate 2 or more answer choices, strategic guessing becomes statistically worthwhile. EduQuest's coaching covers decision-making frameworks for every scenario.",
  },
  {
    question: "Does EduQuest offer online SSAT coaching?",
    answer:
      "Yes. EduQuest offers online, offline (Gurgaon, Bangalore), and hybrid SSAT coaching for all three levels. Our online programme has the same faculty, curriculum, and mock test rigour as our in-person classes — ideal for students in India, UAE, Nigeria, and other international locations.",
  },
  {
    question: "How early should I start SSAT preparation?",
    answer:
      "Ideally, SSAT preparation should begin 4–6 months before your target test date. For highly competitive schools with early application deadlines (often December–January), starting by July–August of the preceding year gives you time to take 2 attempts, review results, and apply with confidence. EduQuest also offers a Foundation Programme for students who wish to start 1–2 years in advance.",
  },
  {
    question: "What should I bring on SSAT exam day?",
    answer:
      "On exam day, bring your printed admission ticket, two or more sharpened No. 2 pencils, and a good eraser. No calculators, phones, or other electronic devices are permitted during the test. Arrive at the test centre at least 30 minutes before the scheduled start time — exams typically begin at 9:00 AM.",
  },
  {
    question: "Is the writing sample scored by schools?",
    answer:
      "The writing sample is NOT included in your SSAT score. However, an unscored copy is sent directly to every school you designate. Admissions committees at competitive schools review it carefully as a direct sample of your writing ability, structure, and vocabulary. EduQuest includes dedicated writing sample coaching in all SSAT programmes.",
  },
];

/* ── Component ───────────────────────────────── */
export default function FAQ() {
  // Track which FAQ index is open; null means all closed
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.faqLayout}>
          {/* ── LEFT: label, title, subtitle, CTA card ── */}
          <div className={styles.faqLeft}>
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              SSAT Questions, <em>Answered</em>
            </h2>
            <p className={styles.sectionSub}>
              Every question families ask before starting SSAT preparation —
              answered clearly.
            </p>

            <div className={styles.ctaCard}>
              <div className={styles.ctaCardEyebrow}>Still have questions?</div>
              <p className={styles.ctaCardText}>
                Our SSAT counsellors are available 6 days a week to answer your
                specific questions about levels, dates, target schools, and
                preparation timelines.
              </p>
              <a href="#enroll" className={styles.ctaCardBtn}>
                Book a Free Counselling Session
              </a>
            </div>
          </div>

          {/* ── RIGHT: accordion list ── */}
          <div className={styles.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span
                      className={
                        isOpen
                          ? `${styles.faqIcon} ${styles.faqIconOpen}`
                          : styles.faqIcon
                      }
                      aria-hidden="true"
                    >
                      ＋
                    </span>
                  </button>

                  <div
                    className={
                      isOpen
                        ? `${styles.faqAnswer} ${styles.faqAnswerOpen}`
                        : styles.faqAnswer
                    }
                  >
                    <div className={styles.faqAnswerInner}>{item.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}