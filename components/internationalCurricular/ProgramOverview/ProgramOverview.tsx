'use client';

import { useEffect, useState } from 'react';
import styles from './ProgramOverview.module.css';

const badges = [
    '✓ CBSE Recognized',
    '✓ CISCE Recognized',
    '✓ UG Admission Eligible',
    '✓ IB DP Pathway',
    '✓ A-Level Pathway',
];

const compareRows = [
    { label: 'IGCSE equivalent', value: 'CBSE/ICSE Class 10' },
    { label: 'GCSE equivalent', value: 'CBSE/ICSE Class 12' },
    { label: 'Exam Board', value: 'Cambridge / Edexcel' },
    { label: 'Global recognition', value: '160+ countries' },
    { label: 'Post-IGCSE options', value: 'IB DP, A-Level, AICE, +2' },
    { label: 'Exam sessions', value: 'May–June & Oct–Nov' },
    { label: 'Results declared', value: '2nd week of August' },
    { label: 'India recognition', value: 'CBSE, CISCE, State Boards' },
];

export default function ProgramOverview() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Render a stable SSR skeleton — same DOM shape server & client.
    // Only after mount do we show dynamic content (avoiding removeChild crash).
    if (!mounted) {
        return (
            <section className={styles.cbseSection} id="cbse" suppressHydrationWarning>
                <div className={styles.container} suppressHydrationWarning />
            </section>
        );
    }

    return (
        <section className={styles.cbseSection} id="cbse">
            <div className={styles.container}>
                <div className={styles.cbseGrid}>

                    {/* Left — Content */}
                    <div className={styles.cbseContent}>
                        <div className={styles.sectionLabel}>Program Overview</div>
                        <h2 className={styles.cbseTitle}>
                            OUR CBSE / ICSE PROGRAM — How It Compares
                        </h2>
                        <p className={styles.cbsePara}>
                            IGCSE stands for International General Certificate of Secondary Education — similar
                            to Class 10 of CBSE/ICSE in India. It is designed for Classes 9 and 10 and opens
                            pathways to IB Diploma, ADP (US), and A/AS Levels (UK).
                        </p>
                        <p className={styles.cbsePara}>
                            GCSE is equivalent to the Class 11–12 stream of CBSE/ICSE, developed for Classes
                            11 and 12. Both qualifications are recognized by CBSE, CISCE, state boards, and
                            universities worldwide as valid credentials for higher secondary or undergraduate
                            admission.
                        </p>
                        <p className={styles.cbsePara}>
                            EduQuest supports students from both Indian (CBSE/ICSE) and international school
                            systems transition to, study within, or supplement their learning across IGCSE and
                            GCSE curricula.
                        </p>
                        <div className={styles.programBadges}>
                            {badges.map((badge) => (
                                <span key={badge} className={styles.badge}>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual card */}
                    <div className={styles.cbseVisual}>
                        <h3 className={styles.visualTitle}>Quick Comparison</h3>

                        {compareRows.map((row) => (
                            <div key={row.label} className={styles.compareRow}>
                                <span className={styles.compareLabel}>{row.label}</span>
                                <span className={styles.compareValue}>{row.value}</span>
                            </div>
                        ))}

                        <div className={styles.visualFooter}>
                            <p className={styles.methodology}>
                                Methodology: learning{' '}
                                <em className={styles.methodologyEm}>how</em> to learn, not just{' '}
                                <em className={styles.methodologyEm}>what</em> to learn.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}