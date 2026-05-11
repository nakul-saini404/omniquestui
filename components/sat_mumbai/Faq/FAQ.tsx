import React, { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is the SAT exam?",
    a: "The SAT (Scholastic Assessment Test) is a standardised test developed by College Board, used for college admissions in the USA, UK, Canada, and Australia. It tests Reading & Writing and Mathematics, scored on a scale of 400–1600. The Digital SAT (launched 2024) is fully computer-adaptive.",
  },
  {
    q: "Is the SAT hard to crack?",
    a: "The SAT is strategically manageable with the right preparation. Most students who prepare with a structured plan improve 150–300 points. The adaptive format rewards consistency over raw intelligence — if you master Module 1, you get harder questions in Module 2, which unlocks higher scores.",
  },
  {
    q: "How to score 1500+ on the SAT?",
    a: "Score 1500+ by: (1) taking a full Bluebook diagnostic first, (2) drilling weak skill clusters, (3) mastering the Bluebook interface tools, (4) taking 6+ full-length mocks, and (5) reviewing every wrong answer. EduQuest's structured approach has helped hundreds of students reach this milestone.",
  },
  {
    q: "What is the SAT exam pattern 2026?",
    a: "The Digital SAT 2026 has 98 questions across 4 adaptive modules: Reading & Writing (54 questions, 64 min) and Mathematics (44 questions, 70 min). Total test time is 2 hours 14 minutes. The test is fully computer-adaptive — Module 2 difficulty is determined by Module 1 performance.",
  },
  {
    q: "How many questions are in the SAT?",
    a: "The SAT has 98 questions total: 54 in Reading & Writing (2 modules of 27 each) and 44 in Mathematics (2 modules of 22 each). Each module is timed separately with a break between the two sections.",
  },
  {
    q: "How many SAT attempts are allowed?",
    a: "There is no official limit on SAT attempts. Most EduQuest students take 2–3 attempts. Colleges accept your best score or Superscore (best section scores across attempts). We recommend starting in Grade 10 so you have time to improve.",
  },
  {
    q: "Does EduQuest offer online SAT coaching in Mumbai?",
    a: "Yes. EduQuest offers online, offline (Mumbai centre), and hybrid SAT coaching. Our online programme includes live classes, recorded sessions, Bluebook mock tests, and 1-on-1 mentoring — identical to our offline offering. Mumbai students can choose whichever mode suits their schedule.",
  },
  {
    q: "What makes EduQuest different from other SAT coaching in Mumbai?",
    a: "EduQuest integrates SAT test prep with full admissions strategy — profile building, essay coaching, and university positioning. We've been operating since 1995 with 2,299+ student profiles and 1,839+ university admits. Our focus on adaptive test strategy (targeting Module 2 Hard) consistently delivers 1400–1560 results.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.08 }
    );

    // ✅ Only observe .reveal on the header and list wrapper — NOT on individual items
    const els = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.sectionLabel}>Frequently Asked Questions</div>
          <h2 className={styles.sectionTitle}>
            SAT Questions, <em className={styles.em}>Answered</em>
          </h2>
          <p className={styles.sectionSub}>
            Every question Mumbai students ask before starting their SAT journey
            — answered clearly, with real numbers.
          </p>
        </div>

        {/* ── Accordion list — reveal on the whole list, not each item ── */}
        <div className={`${styles.faqList} ${styles.reveal}`}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                // ✅ No reveal class here — items are always fully visible
              >
                <button
                  className={styles.faqQ}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;