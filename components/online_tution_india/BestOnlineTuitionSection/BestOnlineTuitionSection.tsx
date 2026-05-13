'use client';

import { useEffect, useRef } from 'react';
import styles from './BestOnlineTuitionSection.module.css';

const checkItems = [
    {
        icon: '🎯',
        title: 'Outcome-Focused Teaching',
        body: 'Every session is mapped to board exam patterns and mark schemes — not just syllabus coverage.',
    },
    {
        icon: '🧠',
        title: 'Concept First, Not Rote',
        body: 'We build genuine understanding — so students can solve unseen questions, not just memorised ones.',
    },
    {
        icon: '📈',
        title: 'Measurable Score Improvement',
        body: 'Average student sees 20–35% grade improvement within 3 months of joining EduQuest.',
    },
    {
        icon: '💬',
        title: 'Regular Parent Communication',
        body: 'Weekly WhatsApp updates from tutors. Monthly progress calls with the academic coordinator.',
    },
];

const bestCards = [
    {
        num: '01',
        title: '100% Qualified Tutors',
        body: 'Every tutor goes through a rigorous 3-stage hiring process — academic test, teaching demo, and mock parent interview. Only the top 5% are selected.',
    },
    {
        num: '02',
        title: 'Tutor Replacement Guarantee',
        body: "If a student isn't connecting with their tutor within the first 2 sessions, we replace them — no questions asked, at no extra cost.",
    },
    {
        num: '03',
        title: 'Exam-Ready in 90 Days',
        body: 'Our structured 90-day programme takes a student from current level to exam-confident — with chapter tests, mock papers, and revision sessions.',
    },
    {
        num: '04',
        title: 'Study Material Included',
        body: 'Custom notes, practice sets, previous year papers, and formula sheets — all prepared by our academic team and provided at no additional cost.',
    },
    {
        num: '05',
        title: 'Academic Coordinator Support',
        body: 'Every student is assigned a personal academic coordinator — a single point of contact for scheduling, feedback, and any concerns.',
    },
    {
        num: '06',
        title: 'Board Exam Crash Courses',
        body: 'Intensive 4–6 week crash courses before board exams covering high-weightage chapters, past papers, and last-minute revision strategies.',
    },
];

export default function BestOnlineTuitionSection() {
    const introRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = [introRef.current, cardsRef.current].filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.07 }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} id="best-online" >
            <div className={styles.container}>
                <div className={styles.layout}>

                    {/* ── Left: intro + checklist ── */}
                    <div className={`${styles.intro} ${styles.reveal}`} ref={introRef}>
                        <div className={styles.secLabel}>
                            <span className={styles.secLabelLine} aria-hidden="true" />
                            Best Online Tuition
                        </div>

                        <h2 className={styles.secHeading}>
                            Why EduQuest is <em>ranked #1</em><br />
                            by parents
                        </h2>

                        <p className={styles.secSub}>
                            We don&apos;t just teach — we transform how students learn. Here&apos;s what makes
                            the difference.
                        </p>

                        <div className={styles.checklist}>
                            {checkItems.map(({ icon, title, body }) => (
                                <div key={title} className={styles.checkItem}>
                                    <span className={styles.checkIcon}>{icon}</span>
                                    <div className={styles.checkText}>
                                        <strong>{title}</strong>
                                        <span>{body}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: numbered cards grid ── */}
                    <div
                        className={`${styles.cardsGrid} ${styles.reveal} ${styles.revealD1}`}
                        ref={cardsRef}
                    >
                        {bestCards.map(({ num, title, body }) => (
                            <div key={num} className={styles.card}>
                                <div className={styles.cardAccent} aria-hidden="true" />
                                <div className={styles.cardNum}>{num}</div>
                                <h3 className={styles.cardTitle}>{title}</h3>
                                <p className={styles.cardBody}>{body}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}