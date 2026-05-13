'use client';

import { useEffect, useRef } from 'react';
import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: '🎓',
        title: 'Expert Subject Specialists',
        body: 'Every teacher is a certified specialist in their subject — not a generalist. Physics teachers teach only Physics. Maths teachers teach only Maths.',
        tag: 'Subject Experts',
    },
    {
        icon: '📡',
        title: 'Live Interactive Sessions',
        body: 'Two-way video classes with digital whiteboard, screen sharing, and real-time doubt solving. Students raise hands, ask questions, and engage fully.',
        tag: 'Live & Interactive',
    },
    {
        icon: '📋',
        title: 'Personalised Study Plans',
        body: 'Each student gets a customised weekly plan based on their current level, upcoming exams, and weaker chapters — updated regularly by the tutor.',
        tag: 'Personalised',
    },
    {
        icon: '🔁',
        title: 'Session Recordings & Notes',
        body: 'Every class is automatically recorded and shared. Comprehensive chapter-wise notes provided so students can revise anytime, especially before exams.',
        tag: 'Always Available',
    },
    {
        icon: '📊',
        title: 'Regular Tests & Analytics',
        body: 'Weekly chapter tests, monthly mock exams, and detailed performance analytics sent to parents — with clear improvement tracking over time.',
        tag: 'Data-Driven',
    },
    {
        icon: '🧩',
        title: 'Doubt-Clearing Sessions',
        body: 'Dedicated doubt slots between main sessions. Students never get stuck — they can submit doubts anytime and get priority resolution within hours.',
        tag: 'Always Supported',
    },
    {
        icon: '👨‍👩‍👧',
        title: 'Parent Progress Reports',
        body: 'Detailed monthly reports with chapter-wise scores, attendance, teacher observations, and next-month goals. Full transparency for parents.',
        tag: 'Parent Visibility',
    },
    {
        icon: '🌍',
        title: 'Multi-Board Coverage',
        body: 'Deep expertise across CBSE, ICSE, IB (MYP & DP), IGCSE and State Boards. Same teacher, same quality — regardless of your child\'s curriculum.',
        tag: 'All Boards',
    },
    {
        icon: '🗓️',
        title: 'Flexible Scheduling',
        body: 'Morning, afternoon, evening or weekend — pick slots that work around school, sports, and activities. Reschedule with 24-hour notice, no penalties.',
        tag: 'Flexible',
    },
];

export default function FeaturesSection() {
    const introRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = [introRef.current, gridRef.current].filter(Boolean) as HTMLElement[];

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
        <section className={styles.section} id="features">
            <div className={styles.container}>

                {/* ── Intro ── */}
                <div className={`${styles.intro} ${styles.reveal}`} ref={introRef}>
                    <div className={styles.secLabel}>
                        <span className={styles.secLabelLine} aria-hidden="true" />
                        Main Features
                    </div>
                    <h2 className={styles.secHeading}>
                        Everything your child needs<br />
                        to <em>excel academically</em>
                    </h2>
                    <p className={styles.secSub}>
                        EduQuest online tuition is built around one outcome: genuine academic mastery.
                        Every feature is designed to make that happen.
                    </p>
                </div>

                {/* ── Cards grid ── */}
                <div className={`${styles.grid} ${styles.reveal} ${styles.revealD1}`} ref={gridRef}>
                    {features.map(({ icon, title, body, tag }) => (
                        <div key={title} className={styles.card}>
                            <div className={styles.cardIcon}>{icon}</div>
                            <h3 className={styles.cardTitle}>{title}</h3>
                            <p className={styles.cardBody}>{body}</p>
                            <span className={styles.cardTag}>{tag}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}