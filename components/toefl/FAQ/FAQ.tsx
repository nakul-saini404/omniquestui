"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "What is the TOEFL iBT and who should take it?",
    a: "The TOEFL iBT (Internet-Based Test) is the world's most accepted English proficiency exam, administered by ETS. It's required by 11,500+ universities across 180+ countries — especially US, Canadian, Australian, and UK institutions — for international student admissions.",
  },
  {
    q: "What is the total score and how is it calculated?",
    a: "The TOEFL iBT is scored out of 120. Each of the four sections — Reading, Listening, Speaking, and Writing — contributes a maximum of 30 points. Most top universities require a score between 90–110.",
  },
  {
    q: "How long does the TOEFL iBT exam take?",
    a: "The test takes approximately 2 hours. Reading is 35 min, Listening 36 min, Speaking 16 min, and Writing 29 min. There are no scheduled breaks between sections.",
  },
  {
    q: "Can I take TOEFL from home?",
    a: "Yes. The TOEFL iBT Home Edition is identical to the test-centre version — same format, same scoring, same global validity. You need a quiet room, a computer with a webcam, and a stable internet connection.",
  },
  {
    q: "How long is a TOEFL score valid?",
    a: "TOEFL scores are valid for 2 years from the test date. Most universities require a score that is no older than 2 years at the time of application.",
  },
  {
    q: "How long does EduQuest's TOEFL programme take?",
    a: "Our full TOEFL coaching programme runs for 12 weeks with live classes Monday–Friday (7:30–8:30 PM). Platform access is available for 180 days. You can start anytime — batches are rolling with no fixed start date.",
  },
  {
    q: "Is there a free trial before I enrol?",
    a: "Yes. EduQuest offers a free 3-day demo — no payment required. You attend live classes, get access to study material, and take one full mock test before deciding to enrol.",
  },
  {
    q: "What score do I need for US universities?",
    a: "Most US universities require 80–100+ depending on the programme. Ivy League schools (Harvard, MIT, Yale) typically expect 100–110+. EduQuest coaches you to your specific target score based on your shortlisted universities.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target); }
        }),
      { threshold: 0.1 }
    );
    if (headerRef.current) io.observe(headerRef.current);
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>

        {/* Header */}
        <div className={`${styles.reveal} ${styles.headerWrap}`} ref={headerRef}>
          <div className={styles.secLabel}>FAQ</div>
          <h2 className={styles.heading}>
            Frequently Asked <em>Questions</em>
          </h2>
          <p className={styles.sub}>
            Everything you need to know about TOEFL iBT and EduQuest's coaching programme.
          </p>
        </div>

        {/* Accordion */}
        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`${styles.item} ${styles.reveal}`}
                style={{ transitionDelay: `${i * 0.06}s` }}
                ref={(el) => { itemRefs.current[i] = el; }}
              >
                <button
                  className={`${styles.question} ${isOpen ? styles.questionOpen : ""}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.qNum}>0{i + 1}</span>
                  <span className={styles.qText}>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                    ↓
                  </span>
                </button>

                <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}>
                  <p className={styles.answerText}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`${styles.cta} ${styles.reveal}`}>
          <p>Still have questions? Our advisors are happy to help.</p>
          <a href="#contact" className={styles.btn}>Book a Free Callback →</a>
        </div>

      </div>
    </section>
  );
}