'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Is PTE computer-based or paper-based?',
    answer:
      'PTE is available only in computer-based format. There is no paper-based version. All responses — spoken, typed and selected — are submitted directly through the test computer at an authorised Pearson VUE centre.',
  },
  {
    question: 'How many times can I appear for the PTE exam?',
    answer:
      'You can sit the PTE test as many times as you need. The only requirement is a minimum gap of 5 days between consecutive attempts. There is no annual cap on the number of attempts.',
  },
  {
    question: 'What is a good PTE score?',
    answer:
      'PTE scores range from 10 to 90. There is no universal "good" score — it depends entirely on your target institution or visa category. Most UK and Canadian universities require 58–65. Australia immigration typically requires 65+. Canada SDS requires an overall of 60.',
  },
  {
    question: 'Does PTE help secure student, work and immigration visas?',
    answer:
      'Yes. PTE Academic is accepted for student visas, skilled worker visas and permanent residency applications in Australia, New Zealand, Canada and the UK. It is one of the few tests accepted across all major immigration routes simultaneously.',
  },
  {
    question: 'Is PTE valid for Canada SDS visa category?',
    answer:
      'Yes, since 10th August 2023, an overall PTE Academic score of 60 obtained at an authorised test centre is accepted under Canada Student Direct Stream (SDS). Home-based PTE test scores are not valid for SDS applications — only centre-based tests qualify.',
  },
  {
    question: 'Which countries accept PTE?',
    answer:
      'PTE is accepted in more than 50 countries worldwide. The primary accepting nations are Australia, New Zealand, the UK, the USA and Canada. Over 3,300 universities, colleges, professional bodies and government agencies globally recognise PTE Academic scores.',
  },
  {
    question: 'How do I book the PTE test?',
    answer:
      'Create a myPTE account at pearsonpte.com and sign in to select your preferred test date and authorised centre. You can also contact local test centres directly by phone. EduQuest can guide you through the booking process to avoid common errors.',
  },
  {
    question: "How long is the PTE score valid?",
    answer:
      'PTE scores are valid for two years from the date of the test. After that period, scores are no longer visible in your myPTE account and cannot be sent to institutions. Plan your applications accordingly to use your score within this window.',
  },
   {
    question: "Can I send my score to multiple institutions?",
    answer:
      'Yes — you can send your PTE score to an unlimited number of institutions at no extra charge. This is a significant advantage over IELTS and TOEFL, which both charge per additional score report sent.',
  },
   {
    question: "Can I reschedule or cancel my PTE test date?",
    answer:
      'Yes, rescheduling and cancellation are possible online or by phone. Fees and timelines apply depending on how close to your test date you make the change. Always review Pearson current rescheduling policy before booking to understand the terms.',
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