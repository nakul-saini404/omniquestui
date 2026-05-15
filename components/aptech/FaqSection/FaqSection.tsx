"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FaqSection.module.css";

interface FaqItem {
    question: string;
    answer: string;
}

const faqs: FaqItem[] = [
    {
        question: "What is the EduQuest × Aptech programme exactly?",
        answer:
            "EduQuest × Aptech is India's only programme that combines Aptech's internationally recognised professional tech certifications (Data Science, Analytics, Web Dev) with EduQuest's Ivy-calibre admissions consulting. Students earn a real technical credential, build a deployable capstone project, and then use that project as the centrepiece of their university application narrative.",
    },
    {
        question: "Which grades can enrol in this programme?",
        answer:
            "The programme is designed for students in Grades 6–12 and college students building their first serious technical profile. Students in Grades 6–9 focus on foundational academic direction and early skill exposure. Students in Grades 10–12 and college undergo the full four-phase programme including capstone project, competition entry, and application consulting.",
    },
    {
        question: "Do universities actually value Aptech certifications?",
        answer:
            "Yes — but what universities value most is the project that the certification enables. A certified course alone is a line on a CV. A deployed, live capstone project with real metrics (98.5% model accuracy, 15% revenue recovery, <200ms response time) is evidence of a builder, a thinker, a maker. EduQuest trains students to articulate the project's real-world impact in interviews, SOPs, and portfolios.",
    },
    {
        question: "How long does the programme take?",
        answer:
            "The full four-phase programme typically runs 12–18 months for students in Grades 11–12 applying to universities. For younger students in Grades 6–10, the programme is structured to run over 2–3 years, building progressively. Aptech certifications themselves can be completed in 3–6 months alongside the EduQuest academic and profile-building work.",
    },
    {
        question:
            "Which Aptech course should I choose — Data Science, Analytics, or Web Dev?",
        answer:
            "This depends on your target universities and subject interests. Students targeting CS, AI, or engineering programmes should choose Data Science & AI/ML. Students interested in business, economics, or finance programmes benefit most from Data Analytics with Tableau. Web Dev is ideal for students targeting product management, startup ecosystems, or interdisciplinary engineering. EduQuest's initial profile analysis will recommend the right track for your specific goals.",
    },
    {
        question:
            "Can this programme help me get into US Ivy League or UK Russell Group universities?",
        answer:
            "Absolutely — and this is precisely what the programme is designed to do. EduQuest has placed students at LSE, University of Toronto, Melbourne, UC Berkeley, and Ivy League schools. The technical profile spike from an Aptech capstone, combined with EduQuest's admissions strategy and essay consulting, creates a narrative that top-tier universities specifically look for: intellectual identity, initiative, and demonstrated real-world impact.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const headerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    /* Scroll reveal */
    useEffect(() => {
        const elements = [headerRef.current, listRef.current].filter(
            Boolean
        ) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className={styles.faq} id="faq">
            <div className={styles.container}>

                {/* Header */}
                <div ref={headerRef} className={`${styles.faqHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>Common Questions</div>
                    <h2 className={styles.secHeading}>
                        Frequently Asked <em>Questions</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Everything parents and students ask about the EduQuest × Aptech
                        programme.
                    </p>
                </div>

                {/* Accordion list */}
                <div
                    ref={listRef}
                    className={`${styles.faqList} ${styles.revealUp} ${styles.d1}`}
                >
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                            >
                                {/* Question button */}
                                <button
                                    className={styles.faqQ}
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span className={`${styles.faqArrow} ${isOpen ? styles.faqArrowOpen : ""}`}>
                                        ▾
                                    </span>
                                </button>

                                {/* Answer panel */}
                                <div
                                    className={`${styles.faqA} ${isOpen ? styles.faqAOpen : ""}`}
                                    aria-hidden={!isOpen}
                                >
                                    <div className={styles.faqAInner}>{item.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}