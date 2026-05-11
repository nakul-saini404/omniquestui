'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What are AP exams and who can take them?',
    answer:
      'Advanced Placement (AP) exams are college-level standardized tests administered by College Board. Any high school student worldwide can take AP exams — they are not restricted to US students. Indian students, international school students, and homeschooled students are all eligible. Exams are offered every May and scored 1–5.',
  },
  {
    question: 'How many AP subjects should I take?',
    answer:
      'Top universities (Ivy League, Oxbridge, etc.) expect applicants to have taken 4–8 AP exams, particularly in subjects relevant to their intended major. STEM applicants should target Calculus BC, Physics C, Chemistry, Biology, CS A, and Statistics. Humanities majors benefit from English Language, History, and Economics APs. EduQuest helps you select the optimal subject combination for your goals.',
  },
  {
    question: 'When should I start AP preparation?',
    answer:
      'Ideally, AP preparation should begin 6–12 months before the exam in May. For students starting from scratch on a new subject, 9–12 months of preparation is recommended. For students already familiar with the subject material, 3–6 months of focused exam prep is sufficient. Pre-AP preparation should begin in Grades 6–8.',
  },
  {
    question: 'Do AP scores actually earn college credits?',
    answer:
      'Yes — a score of 4 or 5 on an AP exam earns college credit at the vast majority of US universities and many global universities. The specific credit amount varies by university and subject. A student scoring 5/5 on Calculus BC can receive up to 10 credit hours (equivalent to Calc I + II), saving $3,000–$6,000 in tuition. Some universities require a score of 5 for credit; others accept 4.',
  },
  {
    question: 'Can students outside India enroll with EduQuest?',
    answer:
      'Absolutely. EduQuest coaches AP students across 40+ countries including India, USA, UAE, UK, Singapore, Australia, Canada, and more. All sessions are conducted online (1-on-1 live), and our faculty is available across all major time zones including IST, EST, CST, PST, GST, and GMT.',
  },
  {
    question: 'What is the difference between AP and Pre-AP?',
    answer:
      'AP (Advanced Placement) exams are college-level exams taken in Grades 9–12. Pre-AP courses, designed by College Board for Grades 6–8, are preparatory courses that build foundational skills in critical thinking, writing, and subject knowledge. Pre-AP students are significantly better prepared when they reach AP-level coursework and exams.',
  },
  {
    question: 'How does EduQuest AP coaching work?',
    answer:
      'EduQuest provides live 1-on-1 online AP coaching sessions with subject-specialist faculty. We begin with a diagnostic assessment, build a personalized study plan, conduct regular sessions, administer full-length practice tests, and provide detailed performance feedback. We also integrate AP preparation with your broader university admissions strategy.',
  },
  {
    question: 'Are the 2026 AP exams digital or paper-based?',
    answer:
      'Starting 2025, select AP exams moved to digital format — including AP Computer Science Principles, AP English Language, AP English Literature, AP U.S. History, AP World History, AP European History, AP Seminar, and AP Research. All other AP exams continue in paper format. EduQuest prepares students for both formats.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span>FAQs</span>
          </div>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked
            <br />
            <span className={styles.highlight}>Questions</span>
          </h2>
        </div>

        {/* Accordion list */}
        <div className={styles.list}>
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.open : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={styles.answer}
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
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