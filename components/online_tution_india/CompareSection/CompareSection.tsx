'use client';

import { useEffect, useRef } from 'react';
import styles from './CompareSection.module.css';

const onlineRows = [
    {
        icon: '✅',
        title: '1-on-1 or small-group sessions',
        body: 'Complete teacher focus on your child — no distractions from 30 other students.',
    },
    {
        icon: '✅',
        title: "Learn from India's best — anywhere",
        body: 'No geographic limit. Access expert CBSE/IB tutors regardless of your city.',
    },
    {
        icon: '✅',
        title: 'Flexible scheduling',
        body: 'Morning, evening, weekends — sessions fit around your school timetable.',
    },
    {
        icon: '✅',
        title: 'Session recordings & notes',
        body: 'Every class recorded. Student can revise anytime before exams.',
    },
    {
        icon: '✅',
        title: 'Real-time progress tracking',
        body: 'Monthly reports sent to parents with chapter-wise performance data.',
    },
    {
        icon: '✅',
        title: 'Zero commute, zero stress',
        body: 'Study in a comfortable home environment with no travel fatigue.',
    },
];

const classroomRows = [
    {
        icon: '⚠️',
        title: 'Large batch sizes (10–30 students)',
        body: 'Teacher attention divided — slower students fall behind, faster ones are held back.',
    },
    {
        icon: '⚠️',
        title: 'Limited to local teachers',
        body: "Quality depends on what's available in your neighbourhood or city.",
  },
    {
        icon: '⚠️',
        title: 'Fixed rigid timings',
        body: 'After-school slots often clash with sports, music, or extracurriculars.',
    },
    {
        icon: '⚠️',
        title: 'No replay or revision material',
        body: 'Miss a class, miss the content. Notes are handwritten and often incomplete.',
    },
    {
        icon: '⚠️',
        title: 'Minimal parent visibility',
        body: "Hard to track what's being taught, at what pace, and how the child is performing.",
    },
    {
        icon: '⚠️',
        title: 'Commute adds 30–60 min/day',
        body: 'Travel fatigue before and after school reduces actual study effectiveness.',
    },
];

interface CompareRowItem {
    icon: string;
    title: string;
    body: string;
}

function CompareRow({ icon, title, body }: CompareRowItem) {
    return (
        <div className={styles.compareRow}>
            <span className={styles.compareRowIcon}>{icon}</span>
            <div className={styles.compareRowText}>
                <strong>{title}</strong>
                {body}
            </div>
        </div>
    );
}

export default function CompareSection() {
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
        <section className={styles.section} id="compare">
            <div className={styles.container}>

                {/* ── Intro ── */}
                <div className={`${styles.intro} ${styles.reveal}`} ref={introRef}>
                    <div className={styles.secLabel}>
                        <span className={styles.secLabelLine} aria-hidden="true" />
                        Classroom vs. Online Tuition
                    </div>
                    <h2 className={styles.secHeading}>
                        Why students are choosing<br />
                        <em>online over classroom</em>
                    </h2>
                    <p className={styles.secSub}>
                        Both have their place — but for focused, expert-led, one-on-one learning, online
                        tuition consistently wins. Here&apos;s the honest comparison.
                    </p>
                </div>

                {/* ── Two-column comparison grid ── */}
                <div className={`${styles.compareGrid} ${styles.reveal} ${styles.revealD1}`} ref={gridRef}>

                    {/* Online column */}
                    <div className={styles.compareCol}>
                        <div className={`${styles.colHead} ${styles.colHeadOnline}`}>
                            <span className={styles.colIcon}>💻</span>
                            <div>
                                <div className={`${styles.colTitle} ${styles.colTitleWhite}`}>
                                    EduQuest Online Tuition
                                </div>
                                <div className={`${styles.colSub} ${styles.colSubGold}`}>Recommended</div>
                            </div>
                        </div>
                        <div className={styles.colBody}>
                            {onlineRows.map((row) => (
                                <CompareRow key={row.title} {...row} />
                            ))}
                        </div>
                    </div>

                    {/* Classroom column */}
                    <div className={styles.compareCol}>
                        <div className={`${styles.colHead} ${styles.colHeadClassroom}`}>
                            <span className={styles.colIcon}>🏫</span>
                            <div>
                                <div className={`${styles.colTitle} ${styles.colTitleDark}`}>
                                    Traditional Classroom Tuition
                                </div>
                                <div className={`${styles.colSub} ${styles.colSubBlue}`}>Typical experience</div>
                            </div>
                        </div>
                        <div className={styles.colBody}>
                            {classroomRows.map((row) => (
                                <CompareRow key={row.title} {...row} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}