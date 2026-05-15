'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: 'When is the right time for submitting an application to universities?',
        answer:
            'Every overseas university has admissions throughout the year. During the academic year, some have two intakes, while others have three, one, or a rolling intake. As a result, you should start the admissions process at least a year ahead of time for the desired intake. In some circumstances, 3–4 months ahead of time may be sufficient.',
    },
    {
        question: 'How do I choose the right country for my education?',
        answer:
            "The student's choice of country is determined by budget, personal interests, and career goals. Almost every country currently offers a diverse selection of courses. A student must first decide which country provides the best educational options as well as work opportunities. EduQuest can assist you in conducting this research and deciding on the ideal country for your specific goals.",
    },
    {
        question: 'How do I know which university is the best fit for me?',
        answer:
            "University rankings exist in all nations, but they may not be the only differentiating quality of a university. The greatest university for a student is one that: offers the course they're interested in, accepts the student's qualifications, and is located in an area of interest. After these points have been verified, you can move on to the financial aspect and scholarship options.",
    },
    {
        question: 'How much time does it take to complete the application process?',
        answer: (
            <>
                It takes approximately 4–6 weeks to process a file. The breakdown is:
                <ul className={styles.answerList}>
                    <li>Selecting a university and preparing the application</li>
                    <li>Receiving an offer letter from the university</li>
                    <li>Documentation for the visa file</li>
                    <li>Visa interview preparation</li>
                    <li>Interview date &amp; visa processing</li>
                    <li>Receiving visa &amp; flight booking</li>
                </ul>
            </>
        ),
    },
    {
        question: 'What documents are required for a university application?',
        answer:
            'Typically required documents include: academic transcripts, passport copy, work experience certificates (if applicable), Statement of Purpose (SOP), Letters of Recommendation (LORs), IELTS/PTE/TOEFL scores, an updated CV, and a predicted scorecard for undergraduate applicants. Students may receive a conditional offer if certain paperwork is still pending.',
    },
    {
        question: 'Are scholarships available for Indian students studying abroad?',
        answer:
            'Yes — almost all countries offer excellent scholarships to international students. Some are provided by the university, while others are provided by governments and private organizations. Scholarships can range from 20% to 60% of tuition fees. They are most often determined by the student\'s academic grades and experience. Early application is always advantageous in terms of scholarship rewards.',
    },
    {
        question: 'Does EduQuest help with visa application and interview preparation?',
        answer:
            'Absolutely. EduQuest provides end-to-end visa support — from preparing your complete documentation file that adheres to embassy standards, to visa interview preparation sessions. Our team has a near-100% visa success rate and ensures every client goes into their interview confident and fully prepared.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.container}>
                <div className={styles.faqHeader}>
                    <span className={styles.secLabel}>FAQs</span>
                    <h2 className={styles.secHeading}>
                        Frequently Asked <em>Questions</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Everything you need to know about applying for overseas education through EduQuest.
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span className={`${styles.faqArrow} ${isOpen ? styles.arrowOpen : ''}`}>
                                        ▾
                                    </span>
                                </button>
                                <div className={`${styles.faqAnswer} ${isOpen ? styles.answerOpen : ''}`}>
                                    <div className={styles.faqAnswerInner}>{item.answer}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}