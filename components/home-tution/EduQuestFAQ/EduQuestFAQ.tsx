"use client";

import { useState } from "react";
import styles from "./EduQuestFAQ.module.css";

const faqs = [
    {
        question: "What makes school students' tuition important?",
        answer:
            "Schoolkids need to develop new study habits and have a thorough comprehension of the various ideas — classroom instruction alone is not sufficient. Only tuition classes will be able to accomplish this, enabling students to provide their best effort. Due to its ability to connect students with the best professors in the nation regardless of where they live, online tuition is in high demand. Students need trustworthy academic direction during their years of senior secondary and higher secondary school.",
    },
    {
        question: "Which tuition is best — online or offline?",
        answer:
            "Online tutoring helps students understand topics better because they can envision questions, comprehend concepts better, and keep them in their minds for longer periods of time than they can in typical classroom settings. Technological advancements have made online tuitions in many cases superior to traditional in-person tutoring.",
    },
    {
        question: "Which is the best online tuition in India?",
        answer:
            "EduQuest is one of the most preferred and trusted online tuitions platforms where students can connect with their personal home tutors, learn concepts at their own pace and clear all their doubts with ease. With over 30 years of experience and thousands of successful students, EduQuest is a name you can trust.",
    },
    {
        question: "Which boards and classes does EduQuest cover?",
        answer:
            "EduQuest covers all major boards — CBSE (Classes 6–12), ICSE (Classes 6–12), IB (MYP Classes 6–10 and IBDP Classes 11–12), and IGCSE subjects. Whether you need help with Maths, Sciences, Languages, Commerce, or Humanities, we have expert tutors ready to assist.",
    },
    {
        question: "How do I get started with EduQuest's online tuitions?",
        answer:
            "Simply reach out to us via phone (+91-9958041888 or +91-9717738553) or email (contact@eduquest.org.in) to schedule a free consultation. You can also request a callback through our website. We'll match you with the right tutor and create a personalised learning plan within 24 hours.",
    },
];

export default function EduQuestFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.container}>

                <div className={`${styles.sectionHead} ${styles.center}`}>
                    <div className={styles.sectionLabel}>FAQ</div>
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about EduQuest's online school tuitions.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className={styles.faqItem}>
                                <button
                                    className={styles.faqQuestion}
                                    aria-expanded={isOpen}
                                    onClick={() => toggle(i)}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div
                                    className={styles.faqAnswer}
                                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                                >
                                    <div className={styles.faqAnswerInner}>{faq.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}