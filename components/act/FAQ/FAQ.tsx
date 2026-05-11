"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is the ACT and who should take it?",
    a: "The ACT (American College Testing) is a standardised exam accepted by all US colleges for undergraduate admission. Students in Class 11–12 targeting US universities should consider the ACT, especially if they are strong in all-round academics including Science reasoning.",
  },
  {
    q: "How is EduQuest's ACT coaching different?",
    a: 'EduQuest uses an Adaptive Model — a "Diagnostic Test Framework" that continuously assesses each student and designs personalised modules. With 90+ hours of training, AI-powered test generation, and individual attention, we track a specific improvement ladder for every student.',
  },
  {
    q: "What is the course validity?",
    a: "Course validity extends until the student gets admission in their desired college — no time pressure. EduQuest believes every student deserves unlimited access until they achieve their goal.",
  },
  {
    q: "Can I take both SAT and ACT?",
    a: "Absolutely. SAT and ACT complement each other — they share many common topics. Many students take diagnostic versions of both in Class 11 to identify which one suits them better. EduQuest prepares students for both to maximise their competitive advantage.",
  },
  {
    q: "Are online and offline classes available?",
    a: "Yes — EduQuest offers both online and offline coaching. Classroom sessions are available at our Gurgaon centres (South City II & Galleria, DLF Phase IV). Online coaching is available for students across India and internationally.",
  },
  {
    q: "Is TOEFL/IELTS training included?",
    a: "Yes. Every ACT student at EduQuest receives complimentary TOEFL/IELTS training as part of their package — at no additional cost. Language proficiency is critical for US college applications, and we ensure complete preparation.",
  },
  {
    q: "What is the highest ACT score EduQuest has achieved?",
    a: "EduQuest students have achieved the maximum ACT composite score of 36. Our SAT students have scored 1590–1600. Our goal is to take every student to their personal maximum — with a minimum target of 28+ and aim for 36.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>FAQ</span>
        <h2 className={styles.title}>
          Common <em className={styles.em}>Questions</em>
        </h2>

        <div className={styles.list}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}