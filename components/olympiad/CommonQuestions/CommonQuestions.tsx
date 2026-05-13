'use client';

import { useState } from 'react';
import styles from './CommonQuestions.module.css';

/* ── Data ── */
const faqs = [
    {
        q: 'Who can appear for these Olympiads?',
        a: 'Students from Class 1 to Class 10 can appear for ICSO and IGKO. IEO and ISO are open to students from Class 1 to Class 12. Any student enrolled in a recognised school in India or abroad can register and appear for these exams.',
    },
    {
        q: 'How are these sample papers useful?',
        a: 'Sample papers mirror the exact pattern, difficulty level, and topic distribution of the actual Olympiad exam. Practising them helps students understand the format, manage time, identify weak areas, and build confidence before exam day. EduQuest recommends solving at least 3–4 sample papers before the actual exam.',
    },
    {
        q: 'Are these sample papers free?',
        a: 'Yes — absolutely free. EduQuest provides these sample papers at no cost as a resource for students and parents. Simply tap the class button under any olympiad and the PDF downloads directly to your device without any login or registration required.',
    },
    {
        q: 'Which Olympiad should my child appear for first?',
        a: 'We recommend IEO for all students as a starting point — strong English skills benefit every subject and every exam. For students with a science interest, ISO is the most academically valuable. ICSO is excellent for tech-inclined students and IGKO is ideal for students who love reading and current affairs. Many students appear for two or more olympiads simultaneously.',
    },
    {
        q: 'Do Olympiad medals actually help in school and college admissions?',
        a: 'Yes, significantly. Top schools in India use Olympiad ranks as a criterion for Class 11 admissions. For global university applications — especially US universities including Ivy League schools — Olympiad medals serve as evidence of academic excellence. EduQuest\'s profile-building program specifically integrates Olympiad achievements into your university application narrative.',
    },
    {
        q: 'Is Olympiad preparation useful for JEE and NEET?',
        a: 'Absolutely — especially ISO for science students. The ISO curriculum for Classes 9–12 closely mirrors the JEE and NEET syllabus. The conceptual depth required to excel in ISO builds the exact analytical skills that JEE and NEET reward. Students who score well in ISO at Class 10 are typically better positioned for JEE/NEET preparation in Classes 11 and 12.',
    },
    {
        q: "How does EduQuest's coaching differ from self-study?",
        a: 'Self-study using sample papers is a great start, but EduQuest adds AI diagnostics to identify weak areas, structured concept teaching by subject experts, weekly mock tests with performance analysis, and a year-round schedule that builds genuine mastery. Students coached by EduQuest consistently outperform self-studying peers by 2–3 rank tiers in competitive olympiads.',
    },
];

/* ── Component ── */
export default function CommonQuestions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>

                {/* Section Head */}
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Common Questions</span>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Everything parents and students ask us about Olympiad preparation
                        and sample papers.
                    </p>
                </div>

                {/* FAQ List */}
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={styles.faqQ}
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    {faq.q}
                                    <span className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <div className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}