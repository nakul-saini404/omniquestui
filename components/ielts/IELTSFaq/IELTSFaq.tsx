'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './IELTSFaq.module.css';

/* ── Data ── */
interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  label: string;
  icon: string;
  items: FaqItem[];
}

const categories: FaqCategory[] = [
  {
    label: 'IELTS',
    icon: '📘',
    items: [
      {
        q: 'What is IELTS and who should take it?',
        a: 'IELTS (International English Language Testing System) is the world\'s most popular English proficiency test, accepted by over 11,000 organisations globally. It is designed for people who want to study, work, or migrate to English-speaking countries such as the UK, Australia, Canada, USA, and New Zealand.',
      },
      {
        q: 'What is the difference between IELTS Academic and IELTS General Training?',
        a: 'IELTS Academic is required for undergraduate or postgraduate study at a university and for professional registration in medicine or nursing. IELTS General Training is suited for secondary education, work experience, or immigration to English-speaking countries. Both share the same Listening and Speaking tests, but differ in Reading and Writing tasks.',
      },
      {
        q: 'What is a good IELTS band score?',
        a: 'Most universities require a minimum of Band 6.5 to 7.0 for postgraduate admission, while undergraduate programmes typically accept Band 6.0. Immigration pathways usually ask for Band 6.0 to 7.0. Our champion batches are specifically designed to take students from their current level to Band 7.5–8.0+.',
      },
      {
        q: 'How long is the IELTS score valid?',
        a: 'IELTS scores are valid for two years from the date of the test. After two years, scores are no longer considered a reliable reflection of your current English proficiency, and you will need to retake the test if required.',
      },
      {
        q: 'How many times can I take IELTS in a year?',
        a: 'There is no limit to how many times you can take IELTS. Tests are offered up to four times a month at most test centres, so you can retake as often as you need. Each attempt is independent, and institutions will typically consider your highest score.',
      },
    ],
  },
  {
    label: 'TOEFL',
    icon: '🌐',
    items: [
      {
        q: 'What is TOEFL and who accepts it?',
        a: 'TOEFL (Test of English as a Foreign Language) is a standardised test measuring your ability to use and understand English at the university level. It is accepted by over 11,500 universities and institutions in more than 160 countries, making it a top choice for students applying to US and Canadian universities.',
      },
      {
        q: 'What is the format of the TOEFL iBT?',
        a: 'The TOEFL iBT consists of four sections: Reading (35 minutes, 20 questions), Listening (36 minutes, 28 questions), Speaking (16 minutes, 4 tasks), and Writing (29 minutes, 2 tasks). The total test duration is approximately 2 hours, and the maximum score is 120.',
      },
      {
        q: 'What is a good TOEFL score for top universities?',
        a: 'Most top universities in the US and UK require a TOEFL iBT score of 90–100. Highly competitive programmes at Ivy League universities often expect 105 or above. Our coaching is tailored to help students consistently achieve 100+ with targeted practice on all four sections.',
      },
      {
        q: 'How is TOEFL different from IELTS?',
        a: 'TOEFL is primarily accepted by North American institutions and uses an American English standard, while IELTS is more widely accepted in the UK, Australia, and Canada and uses British English. TOEFL is entirely computer-based, whereas IELTS offers both paper-based and computer-based formats. The TOEFL Speaking section is recorded and evaluated by AI and human raters, unlike IELTS which is assessed face-to-face.',
      },
      {
        q: 'How long is a TOEFL score valid?',
        a: 'TOEFL scores are valid for two years from the test date. ETS (the testing organisation) stores your scores for up to 10 years, but most institutions only accept scores within the two-year validity window.',
      },
    ],
  },
  {
    label: 'PTE',
    icon: '💻',
    items: [
      {
        q: 'What is PTE Academic and who should take it?',
        a: 'PTE (Pearson Test of English) Academic is a computer-based English language test accepted by thousands of universities worldwide and by the Australian, UK, and New Zealand governments for visa applications. It is known for fast results — typically delivered within 48 hours — making it popular among applicants with tight deadlines.',
      },
      {
        q: 'What is the format of the PTE Academic test?',
        a: 'PTE Academic is a single 2-hour computer-based test divided into three parts: Speaking & Writing (77–93 minutes), Reading (32–41 minutes), and Listening (45–57 minutes). The test is fully AI-scored, removing the risk of human scoring bias and ensuring consistent, objective results.',
      },
      {
        q: 'What score do I need for Australian immigration?',
        a: 'For Australian Skilled Migration (subclass 189/190), you typically need a minimum PTE score of 65 in each communicative skill (Listening, Reading, Speaking, Writing). Higher scores of 79+ can earn you additional points in the points-based immigration system, which can significantly improve your chances of receiving an invitation.',
      },
      {
        q: 'Is PTE easier than IELTS?',
        a: 'PTE and IELTS test the same core skills but with different formats. PTE is fully computer-based and AI-scored, which many test-takers find more objective. The speaking section involves speaking to a microphone rather than a human examiner, which some find less stressful. With the right preparation, either test can be mastered — our coaches help you choose the format that suits your strengths.',
      },
      {
        q: 'How quickly can I get my PTE results?',
        a: 'PTE Academic results are typically available within 48 hours of completing your test, and in many cases even sooner. This is significantly faster than IELTS (typically 3–5 days for computer-based and up to 13 days for paper-based), making PTE ideal if you need scores urgently.',
      },
    ],
  },
  {
    label: 'Duolingo',
    icon: '🦉',
    items: [
      {
        q: 'What is the Duolingo English Test and who accepts it?',
        a: 'The Duolingo English Test (DET) is an affordable, convenient online English proficiency test that can be taken from home. It is accepted by over 5,000 programmes at more than 3,500 institutions worldwide, including many top universities in the US, UK, Canada, and Australia. It is particularly popular with students who prefer a flexible, on-demand testing option.',
      },
      {
        q: 'What is the format of the Duolingo English Test?',
        a: 'The DET is approximately 1 hour long and consists of an adaptive section (45 minutes) testing reading, writing, listening, and speaking through integrated tasks, followed by a video interview section where you record short responses to open-ended prompts. The test is fully online and proctored using AI and human review.',
      },
      {
        q: 'What is a good Duolingo English Test score?',
        a: 'Duolingo scores range from 10 to 160. Most universities require a minimum score of 105–115 for admission, while highly competitive programmes may require 120 or above. Our coaching specifically targets the adaptive nature of the DET, helping students score 120+ through focused vocabulary, fluency, and reading comprehension practice.',
      },
      {
        q: 'How soon are Duolingo results available?',
        a: 'Duolingo English Test results are typically available within 2 days of taking the test. Once your results are ready, you can share them directly with as many institutions as you like at no additional cost — a major advantage over IELTS and TOEFL, which charge per score report.',
      },
      {
        q: 'Is the Duolingo English Test accepted for immigration purposes?',
        a: 'Currently, the DET is primarily accepted for university admissions and is not widely accepted for immigration or visa applications. If your goal is immigration to Australia, Canada, the UK, or New Zealand, you will likely need IELTS, PTE, or TOEFL instead. Our counsellors can help you determine the right test for your specific goal.',
      },
    ],
  },
];

/* ── Single FAQ Item ── */
function FaqRow({
  item,
  index,
  isOpen,
  onToggle,
  visible,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  visible: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  /* Animate height */
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.opacity = '1';
    } else {
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ''} ${visible ? styles.faqRowVisible : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <button
        className={styles.faqQ}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.faqQText}>{item.q}</span>
        <span className={styles.faqIcon} aria-hidden>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div ref={bodyRef} className={styles.faqA}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

/* ── Category Panel ── */
function CategoryPanel({
  cat,
  activeIndex,
  onToggle,
  visible,
}: {
  cat: FaqCategory;
  activeIndex: number | null;
  onToggle: (i: number) => void;
  visible: boolean;
}) {
  return (
    <div className={styles.catPanel}>
      {cat.items.map((item, i) => (
        <FaqRow
          key={i}
          item={item}
          index={i}
          isOpen={activeIndex === i}
          onToggle={() => onToggle(i)}
          visible={visible}
        />
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function IELTSFaq() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let mounted = true;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mounted) setVisible(true);
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => {
      mounted = false;
      obs.disconnect();
    };
  }, []);

  const switchTab = (i: number) => {
    setActiveTab(i);
    setOpenIndex(0);
  };

  const toggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section className={styles.faq} id="faq" ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.sub}>
            Everything you need to know about IELTS, TOEFL, PTE, and Duolingo
            preparation — and what to expect from EduQuest.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className={`${styles.tabs} ${visible ? styles.tabsVisible : ''}`}>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => switchTab(i)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Content: Side label + Accordion ── */}
        <div className={`${styles.body} ${visible ? styles.bodyVisible : ''}`}>

          {/* Left decorative label */}
          <div className={styles.sideLabel}>
            <span className={styles.sideLabelIcon}>{categories[activeTab].icon}</span>
            <span className={styles.sideLabelText}>{categories[activeTab].label}</span>
            <span className={styles.sideLabelCount}>
              {categories[activeTab].items.length} questions
            </span>
          </div>

          {/* Accordion */}
          <div className={styles.accordion}>
            <CategoryPanel
              key={activeTab}
              cat={categories[activeTab]}
              activeIndex={openIndex}
              onToggle={toggle}
              visible={visible}
            />
          </div>

        </div>

        {/* ── Bottom CTA ── */}
        <div className={`${styles.cta} ${visible ? styles.ctaVisible : ''}`}>
          <p className={styles.ctaText}>
            Still have questions? Our counsellors are happy to help.
          </p>
          <a href="#contact" className={styles.ctaBtn}>
            Talk to an Expert →
          </a>
        </div>

      </div>
    </section>
  );
}