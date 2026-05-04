import { useState, useRef, useEffect } from "react";
import styles from "./FrequentlyAsked.module.css";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag?: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    tag: "Requirements",
    question: "Is the SAT still required at US universities in 2026?",
    answer:
      "Yes — MIT, Yale, Dartmouth, UT Austin, Florida, Georgia Tech, and 80+ others require SAT or ACT scores. Even at test-optional schools, submitting a strong score (1500+) statistically improves admission chances and merit aid eligibility.",
  },
  {
    id: "faq-2",
    tag: "Online Coaching",
    question:
      "How does EduQuest coach US-based students? Do I need to travel to India?",
    answer:
      "No travel required. All sessions are online via live video with screen sharing and virtual whiteboard. Sessions are scheduled to match your US time zone (EST, CST, MST, PST). Weekend intensives are also available.",
  },
  {
    id: "faq-3",
    tag: "Test Format",
    question:
      "What is the Digital SAT? How is it different from the old paper SAT?",
    answer:
      "The Digital SAT replaced the paper SAT for US students in 2024. Key changes: taken on computer (Bluebook app), adaptive (Module 2 difficulty adjusts based on Module 1), shorter (2h 14m vs 3+ hours), calculator allowed throughout Math, and features shorter passages with one question each.",
  },
  {
    id: "faq-4",
    tag: "Attempts",
    question: "How many times can I take the SAT? Is there a limit?",
    answer:
      "College Board allows unlimited attempts. Most colleges use Superscoring — taking your highest Math and highest R&W scores across all attempts. EduQuest recommends 2–3 attempts, peaking by August or October of Grade 12.",
  },
  {
    id: "faq-5",
    tag: "PSAT / NM",
    question: "What is PSAT/NMSQT and should my child take it?",
    answer:
      "The PSAT/NMSQT is taken in October of Grade 11. High scorers are named National Merit Semifinalists — unlocking significant scholarships and strengthening applications. EduQuest offers dedicated PSAT prep as part of its long-horizon programmes.",
  },
  {
    id: "faq-6",
    tag: "Timeline",
    question: "When should my child start SAT preparation?",
    answer:
      "Grade 10 is ideal for students aiming at 1500+. Grade 11 students should start immediately — March or May test dates are optimal. Grade 12 students targeting EA/ED applications should prepare to test in August or October.",
  },
  {
    id: "faq-7",
    tag: "Admissions",
    question:
      "Can EduQuest help with the full college application — not just SAT?",
    answer:
      "Yes. EduQuest offers full admissions positioning — university shortlisting, application strategy, essay guidance, extracurricular narrative development, and profile building. SAT coaching is one component of a comprehensive ecosystem many US families use end-to-end.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
      style={{ "--idx": index } as React.CSSProperties}
    >
      <div className={styles.itemNum}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className={styles.itemBody}>
        <button
          className={styles.trigger}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={item.id}
        >
          <div className={styles.triggerLeft}>
            {item.tag && <span className={styles.tag}>{item.tag}</span>}
            <span className={styles.question}>{item.question}</span>
          </div>
          <div className={styles.iconWrap} aria-hidden>
            <span className={styles.iconBar} />
            <span
              className={`${styles.iconBar} ${styles.iconBarV} ${
                isOpen ? styles.iconBarVOpen : ""
              }`}
            />
          </div>
        </button>

        <div
          id={item.id}
          className={styles.answerWrap}
          style={{ height: `${height}px` }}
          role="region"
        >
          <div ref={bodyRef} className={styles.answer}>
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FrequentlyAsked() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.bgOrb1} aria-hidden />
      <div className={styles.bgOrb2} aria-hidden />

      <div className={styles.inner}>
        {/* ── Centered header ── */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Frequently Asked</span>
          <h2 className={styles.title}>
            FAQs for <em className={styles.titleAccent}>US&nbsp;Families</em>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Everything US parents and students need to know about the Digital
            SAT, EduQuest's programmes, and the path to top-10 universities.
          </p>
        </div>

        {/* ── Full-width accordion ── */}
        <ol className={styles.list} role="list">
          {faqs.map((item, i) => (
            <li key={item.id} className={styles.listItem}>
              <AccordionItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={i}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}