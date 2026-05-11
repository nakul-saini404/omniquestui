"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./CommonQuestions.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface FaqItem {
  question: string;
  answer: string;
}

/* ── Data ───────────────────────────────────────────────────────── */
const faqs: FaqItem[] = [
  {
    question: "Is UCAT 2026 harder than previous years?",
    answer:
      "UCAT 2026 is not harder — it's just different. With Abstract Reasoning removed and the scoring scale reduced to 2700, precision and consistency matter more than sheer volume of practice. With the right EduQuest strategy, you can confidently face the changes and perform at your best.",
  },
  {
    question: "How many times can I take the UCAT?",
    answer:
      "You can take the UCAT once per year. The score is valid only for the current admission cycle, including deferred entry. Planning early and giving yourself enough preparation time — ideally 3–6 months — is the best approach to avoid retaking it the following year.",
  },
  {
    question: "UCAT UK vs UCAT ANZ — which should I choose?",
    answer:
      "If you're targeting only UK medical schools, take UCAT UK. If you want flexibility across Australia, New Zealand, and the UK, UCAT ANZ is the smarter choice — it has earlier deadlines and broader acceptance across all three countries. Most Indian students aiming for multiple countries opt for UCAT ANZ.",
  },
  {
    question: "What is a good UCAT score for 2026?",
    answer:
      "On the new 2700 scale: 2400+ is considered elite (Oxford, Cambridge, UCL); 2100–2400 is a strong competitive range for most top UK and Australian schools; 1800–2100 is still competitive for many universities. Always aim for Band 1 or 2 in Situational Judgement regardless of your cognitive score.",
  },
  {
    question:
      "Is UCAT required for all UK, Australian & NZ medical universities?",
    answer:
      "Not all universities require it — some accept ISAT or use academic merit-based selection. However, the majority of top-tier medical schools in the UK, Australia, and New Zealand make UCAT a mandatory component of their admissions process. Always verify each university's current requirements before applying.",
  },
  {
    question: "How long should I prepare for UCAT 2026?",
    answer:
      "EduQuest recommends 3–6 months of structured preparation. Begin with a diagnostic test to identify your baseline, then work section-by-section before transitioning to full mock tests in the final 6–8 weeks. Consistent practice under timed conditions — rather than just volume — is what improves UCAT scores.",
  },
];

/* ── Scroll-reveal hook ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── FaqRow ─────────────────────────────────────────────────────── */
interface FaqRowProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  parentVisible: boolean;
}

const FaqRow: React.FC<FaqRowProps> = ({
  item,
  index,
  isOpen,
  onToggle,
  parentVisible,
}) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  /* Measure real content height for smooth expand */
  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div
      className={`${styles.faqItem} ${parentVisible ? styles.itemVisible : ""}`}
      style={{ transitionDelay: `${0.08 + index * 0.07}s` }}
    >
      <button
        className={`${styles.faqBtn} ${isOpen ? styles.faqBtnOpen : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.faqQ}>{item.question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ""}`}>
          +
        </span>
      </button>

      <div
        className={styles.faqAnswerWrap}
        style={{ maxHeight: isOpen ? height : 0 }}
        aria-hidden={!isOpen}
      >
        <div ref={answerRef} className={styles.faqAnswer}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ─────────────────────────────────────────────── */
const CommonQuestions: React.FC = () => {
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);
  const { ref: wrapRef, inView: wrapVisible } = useInView(0.08);

  /* Only one item open at a time — accordion behaviour */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>

        {/* Section Header — centred, matches original */}
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? styles.headerVisible : ""
          }`}
        >
          <span className={styles.sectionTag}>Common Questions</span>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSub}>
            Everything you need to know about UCAT 2026, answered clearly.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={wrapRef} className={styles.faqWrap}>
          {faqs.map((item, i) => (
            <FaqRow
              key={item.question}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
              parentVisible={wrapVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommonQuestions;