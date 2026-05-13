'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
    {
        question: 'Which boards and classes does EduQuest cover for online tuition?',
        answer:
            'EduQuest covers Grades 6–12 across all major boards: CBSE, ICSE, IB (MYP and Diploma Programme), IGCSE (Cambridge), and major State Boards. Subject availability spans Mathematics, Physics, Chemistry, Biology, English, Economics, Accountancy, Business Studies, Computer Science, and more. If you are  unsure whether we cover your child\'s board and subject, just call us — we almost certainly do.',
    },
    {
        question: 'How are the online classes conducted? What technology is needed?',
        answer:
            'Classes are conducted live via Zoom or Google Meet — both are free to download. All you need is a laptop, tablet, or smartphone with a stable internet connection (even basic broadband works). Our tutors use digital whiteboards, screen sharing, and interactive tools to make sessions engaging. Every class is recorded and shared within 30 minutes of ending.',
    },
    {
        question: 'Are the classes 1-on-1 or in a group?',
        answer:
            'EduQuest offers both formats. Our most popular — and most effective — option is 1-on-1 tutoring where the teacher\'s complete attention is on your child. We also offer small group sessions (max 3–4 students) for students who enjoy peer learning and at a slightly lower cost. Parents can choose the format that works best for their child.',
    },
    {
        question: 'How do you select and verify your tutors?',
        answer:
            'All EduQuest tutors go through a rigorous 3-stage hiring process: (1) a subject-knowledge written test, (2) a live teaching demo assessed by our academic team, and (3) a mock parent-student interaction interview. Only the top 5% of applicants are selected. All tutors are background-verified. Many are IIT/IIM alumni, IB examiners, CBSE paper setters, or experienced school teachers.',
    },
    {
        question: "What if my child doesn't connect well with the assigned tutor?",
        answer:
            'We offer a no-questions-asked tutor replacement within the first 2 sessions. If the chemistry isn\'t right, just tell your coordinator and we\'ll match your child with a better-fit teacher — at no extra cost and with no paperwork. Learning works best when the student-teacher relationship is strong, and we take that seriously.',
    },
    {
        question: 'How many sessions per week are recommended?',
        answer:
            'For most students, 2–3 sessions per week per subject is ideal — giving enough time to practise between sessions without overloading. For exam preparation (boards, JEE, NEET), we recommend 4–5 sessions per week. Our academic coordinator will suggest the optimal frequency based on your child\'s goals and current level after the free demo class.',
    },
    {
        question: 'Do you provide study material, notes, and test papers?',
        answer:
            'Yes — all included at no extra cost. Students receive chapter-wise notes prepared by our academic team, curated practice sets, previous year board papers with solutions, and formula/concept summary sheets. For IB and IGCSE students, we also provide past papers with examiner mark schemes and commentary on common mistakes.',
    },
    {
        question: "How can parents track their child's progress?",
        answer:
            'Parents receive weekly WhatsApp updates from the tutor after each session, a detailed monthly progress report (covering chapter-wise scores, attendance, teacher observations, and next-month goals), and access to their child\'s test results. Your dedicated academic coordinator is also available for a monthly call to walk through performance and discuss any adjustments to the plan.',
    },
    {
        question: 'Is there a free trial or demo class available?',
        answer:
            'Absolutely. We offer a completely free, no-obligation demo class — a full 45-minute session with one of our tutors for your child\'s subject and grade. After the demo, you\'ll also get a brief report from the tutor on your child\'s current level and recommended focus areas. Book your demo below — no credit card required.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <div className={styles.layout}>

                    {/* ── Left intro column ── */}
                    <div className={styles.intro}>
                        <span className={styles.sectionLabel}>FAQ</span>
                        <h2 className={styles.heading}>
                            Everything parents<br />ask us before <em>joining</em>
                        </h2>
                        <p className={styles.introText}>
                            Honest answers to the most common questions about EduQuest online tuition — no
                            sales pitch, just clarity.
                        </p>
                        <div className={styles.contactBox}>
                            <p className={styles.contactBoxText}>
                                Still have questions? Our academic counsellors are available Monday–Saturday,
                                9am–7pm.
                            </p>
                            <a href="#contact" className={styles.contactBoxLink}>
                                Talk to a Counsellor →
                            </a>
                        </div>
                    </div>

                    {/* ── Right accordion column ── */}
                    <div className={styles.list}>
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                                >
                                    <button
                                        className={styles.question}
                                        onClick={() => toggle(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className={styles.qNum}>{index + 1}</span>
                                        <span className={styles.qText}>{item.question}</span>
                                        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                                            ›
                                        </span>
                                    </button>
                                    <div
                                        className={styles.answerWrapper}
                                        style={{ maxHeight: isOpen ? '400px' : '0px' }}
                                        aria-hidden={!isOpen}
                                    >
                                        <div className={styles.answerInner}>{item.answer}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}