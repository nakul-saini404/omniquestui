'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'What is the minimum SAT score for IIIT Hyderabad under DASA?',
    answer:
      'The minimum required SAT score for IIIT Hyderabad under DASA is <strong>1070 out of 1600</strong>, combining Math and ERW sections. Super-scoring — taking the best Math score from one attempt and the best ERW score from another — is accepted, which means you have multiple opportunities to reach this threshold.',
  },
  {
    question: 'Can CIWG students who studied in India apply via DASA?',
    answer:
      'Yes. Schooling location does not affect CIWG eligibility. As long as the parent has been employed in a Gulf Cooperation Council (GCC) country and meets the CIWG residency requirements, the student qualifies — even if they completed Class 11 and 12 in India under CBSE, ICSE, or a State Board.',
  },
  {
    question: 'Does BITS Pilani require BITSAT from international students?',
    answer:
      'No. Under the ISA (International Student Admission) route, BITS Pilani accepts SAT scores as a complete replacement for BITSAT. This applies to Foreign Nationals, PIO/OCI card holders, and children of Indian workers in Gulf countries. All three campuses — Pilani, Goa, and Hyderabad — are covered.',
  },
  {
    question: 'What is super-scoring and how does it help?',
    answer:
      'Super-scoring means that both IIIT Hyderabad and BITS Pilani will combine your <strong>best Math score</strong> from one SAT attempt with your <strong>best ERW score</strong> from another attempt to produce your highest possible composite. This means taking the SAT multiple times almost always helps — there is no penalty for additional attempts.',
  },
  {
    question: 'Which College Board code do I use to send scores to IIIT Hyderabad?',
    answer:
      'Use College Board institution code <strong>6997</strong> when sending official SAT score reports to IIIT Hyderabad. Scores must be received by the deadline — for DASA 2025, this is <strong>31 May 2025</strong>. EduQuest will guide you through the score-sending process to ensure there are no errors or delays.',
  },
  {
    question: 'Can I apply to both IIIT Hyderabad (DASA) and BITS Pilani (ISA) simultaneously?',
    answer:
      'Yes — these are completely independent application processes. You can apply to IIIT Hyderabad through the centralized DASA portal and to BITS Pilani through the ISA channel at the same time using the same SAT score. EduQuest recommends applying to both to maximise your chances of securing a seat.',
  },
  {
    question: 'Do CIWG students get domestic fee rates at IIIT Hyderabad?',
    answer:
      'Yes. CIWG (Children of Indian Workers in Gulf) students admitted to IIIT Hyderabad under DASA pay <strong>domestic-level tuition fees</strong> rather than the higher international student rates. This is a significant financial advantage — the savings can run into several lakhs of rupees per academic year compared to international fee structures.',
  },
  {
    question: "How long does EduQuest's SAT coaching take before I'm DASA-ready?",
    answer:
      'Most students achieve their target score within <strong>6–12 weeks</strong> of structured coaching, depending on their starting level. We take a diagnostic test on day one, build a personalised plan, and schedule your SAT dates with a 3–4 week buffer before the DASA score reporting deadline. Contact us early — the earlier you start, the more attempts you can fit in.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>FAQs</span>
        <h2 className={styles.sectionTitle}> Frequently Asked Questions — DASA, CIWG &amp; ISA</h2>
        <p className={styles.sectionSub}>
         The questions we hear most from students and parents — answered clearly.
        </p>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}>
                    +
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}
                >
                  <p className={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}