'use client';

import { useEffect, useRef } from 'react';
import styles from './OnlineTuitionSection.module.css';

const stats = [
    { num: '10', suffix: 'K+', label: 'Students taught online' },
    { num: '98', suffix: '%', label: 'Parent satisfaction rate' },
    { num: '15', suffix: '+', label: 'Years of teaching expertise' },
    { num: '4', suffix: 'x', label: 'Faster concept clarity vs. group tuition' },
];

const cardTags = [
    '✅ Live Sessions',
    '✅ Doubt Solving',
    '✅ Whiteboard Tools',
    '✅ Session Recordings',
    '✅ Progress Reports',
];

export default function OnlineTuitionSection() {
    const textRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const els = [textRef.current, visualRef.current].filter(Boolean) as HTMLElement[];

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
        <section className={styles.section} id="online-tuition">
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* ── Left: text + stats ── */}
                    <div className={`${styles.textCol} ${styles.reveal}`} ref={textRef}>
                        <div className={styles.secLabel}>
                            <span className={styles.secLabelLine} aria-hidden="true" />
                            Online Tuition Classes
                        </div>

                        <h2 className={styles.secHeading}>
                            Expert tutoring,<br />
                            <em>delivered live</em> to you
                        </h2>

                        <p className={styles.secSub}>
                            EduQuest&apos;s online tuition classes bring India&apos;s best teachers directly to
                            your screen — live, interactive, and tailored to your board and syllabus. No commute,
                            no compromise on quality.
                        </p>

                        <div className={styles.statsGrid}>
                            {stats.map(({ num, suffix, label }) => (
                                <div key={label} className={styles.statBox}>
                                    <div className={styles.statNum}>
                                        {num}
                                        <span>{suffix}</span>
                                    </div>
                                    <div className={styles.statLabel}>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: big card ── */}
                    <div
                        className={`${styles.visualCol} ${styles.reveal} ${styles.revealD1}`}
                        ref={visualRef}
                    >
                        <div className={styles.bigCard}>
                            <span className={styles.bigCardIcon} aria-hidden="true">📡</span>
                            <h3 className={styles.bigCardHeading}>Live, Two-Way Interactive Learning</h3>
                            <p className={styles.bigCardBody}>
                                Our online classes aren&apos;t recorded videos. Every session is live — with a real
                                expert teacher, real-time doubt solving, and personalised feedback. Your child
                                learns, not just watches.
                            </p>
                            <div className={styles.bigCardTags}>
                                {cardTags.map((tag) => (
                                    <span key={tag} className={styles.tbcTag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}