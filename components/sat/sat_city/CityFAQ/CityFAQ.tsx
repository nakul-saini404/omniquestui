"use client";
// components/sat_city/CityFAQ/CityFAQ.tsx

import { useState } from "react";
import styles from "./CityFAQ.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

export default function CityFAQ({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <header className={styles.header}>
          <p className={styles.sectionLabel}>── FAQs</p>
          <h2 className={styles.heading}>
            Questions about SAT Coaching in <em>{data.city}</em>
          </h2>
        </header>

        {/* ── Accordion ── */}
        <dl className={styles.faqList}>
          {data.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                {/* dt contains the clickable question */}
                <dt>
                  <button
                    className={styles.faqQ}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    type="button"
                  >
                    <span className={styles.faqQText}>{faq.question}</span>
                    <span
                      className={styles.icon}
                      aria-hidden="true"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                </dt>

                {/* dd contains the answer — always in DOM, height-animated */}
                <dd
                  id={`faq-answer-${index}`}
                  className={styles.faqA}
                  style={{ maxHeight: isOpen ? "600px" : "0px" }}
                >
                  <p className={styles.faqAInner}>{faq.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}