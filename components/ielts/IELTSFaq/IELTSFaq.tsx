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
    label: 'About IELTS',
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
        a: 'IELTS scores are valid for two years from the date of the test. After two years, scores are no longer considered as a reliable reflection of your current English proficiency, and you will need to retake the test if required.',
      },
    ],
  },
  {
    label: 'Our Courses',
    icon: '🎓',
    items: [
      {
        q: 'What packages does EduQuest offer for IELTS preparation?',
        a: 'EduQuest offers three main packages: Self Preparation Pack (180-day access, 14 full mock tests, weekend doubt-solving sessions), Champion Pack (live lectures Mon–Fri with morning and evening batches, full mock tests, and master sessions), and Marathon Packs (focused 45-day sprints for Reading, Writing, or Speaking modules).',
      },
      {
        q: 'Can I join a batch at any time, or are there fixed start dates?',
        a: 'There are no fixed start dates at EduQuest. You can enrol any time and our structured session format ensures you catch up seamlessly regardless of when you join. Each batch is designed so that you can start from any session without missing critical content.',
      },
      {
        q: 'Do you offer a free trial before I enrol?',
        a: 'Yes. EduQuest offers a free 3-day trial for all packages. You can attend live sessions, access the resource platform, and experience the full learning environment before making any payment decision. Simply fill in the contact form and our team will set up your trial within 24 hours.',
      },
      {
        q: 'What is included in the Champion Pack?',
        a: 'The Champion Pack includes: English Level Checker, live lectures Mon–Fri (beginner and advanced batches), 120-day platform access, comprehensive video library, 14 full timed mock tests with expert feedback within 48 hours, Saturday test analysis sessions, Sunday doubt-solving sessions, master classes for Band 7.5+, and a free e-book for live class reference.',
      },
    ],
  },
  {
    label: 'Batch Timings',
    icon: '🕗',
    items: [
      {
        q: 'What batch timings are available for live classes?',
        a: 'Live lectures run Monday to Friday across three slots: Morning Batch (07:30 AM – 09:30 AM), Afternoon Batch (02:00 PM – 04:00 PM), and Evening Batch (08:30 PM – 10:30 PM). Advanced batches run 07:30 AM – 10:30 AM, 02:00 PM – 05:00 PM, and 08:00 PM – 11:00 PM.',
      },
      {
        q: 'Are there weekend sessions?',
        a: 'Yes. Every Saturday includes Practice Test and Mock Test analysis sessions at 07:30 AM – 09:30 AM and 02:00 PM – 04:00 PM. Sundays are reserved for 1-hour live doubt-solving sessions with expert trainers, running from 08:00 PM – 09:00 PM.',
      },
      {
        q: 'What are the demo batch timings?',
        a: 'Demo batches run Monday to Saturday at three times: 07:30 AM – 09:30 AM, 02:00 PM – 04:00 PM, and 08:30 PM – 10:30 PM. You can pick any slot that fits your schedule and attend a live session before committing to a full package.',
      },
    ],
  },
  {
    label: 'Results & Support',
    icon: '🏆',
    items: [
      {
        q: 'What band scores do EduQuest students typically achieve?',
        a: 'The majority of our students from champion batches achieve Band 7.0 to 8.0+. Our master session students have gone on to score perfect Band 9 in individual modules. Our faculty have over a decade of British Council experience and our methods are backed by thousands of successful test-takers.',
      },
      {
        q: 'How is speaking practice conducted for shy or introverted learners?',
        a: 'EduQuest provides a private recorded-response model for speaking practice. You record your answers at your own pace and receive detailed expert feedback within 48 hours — no live pressure, full personalised guidance. This helps shy learners build confidence before attempting real mock speaking tests.',
      },
      {
        q: 'Is there support if I fail to achieve my target band score?',
        a: 'Absolutely. Students who do not meet their target score within the validity period are given access to supplementary doubt-solving sessions and can re-attend weekend analysis sessions. Our team does a detailed gap analysis to identify the weak modules and provides targeted resources to close those gaps before a retake.',
      },
      {
        q: 'How do I get started?',
        a: 'Simply fill in the enquiry form on our website or call us at +91-9958041888 / +91-9717738553. Our counsellor will call you within 24 hours to understand your target score, current level, and preferred batch timing — then set up your free 3-day trial immediately.',
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
            Everything you need to know about IELTS preparation, our batches,
            and what to expect from EduQuest.
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