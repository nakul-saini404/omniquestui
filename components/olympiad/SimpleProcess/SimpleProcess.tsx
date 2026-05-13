'use client';

import styles from './SimpleProcess.module.css';

/* ── Data ── */
const steps = [
    {
        icon: '🎯',
        num: 1,
        title: 'Pick a Subject',
        desc: 'Choose from ICSO, IEO, IGKO, or ISO based on what you want to practice.',
    },
    {
        icon: '🎓',
        num: 2,
        title: 'Select Your Class',
        desc: 'Tap the class number button that matches your current grade.',
    },
    {
        icon: '📥',
        num: 3,
        title: 'Download PDF',
        desc: 'The paper saves instantly to your device — no sign-up required.',
    },
    {
        icon: '🏆',
        num: 4,
        title: 'Practice & Excel',
        desc: 'Solve, identify weak areas, and repeat with EduQuest coaching.',
    },
];

/* ── Component ── */
export default function SimpleProcess() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Section Head */}
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Simple Process</span>
                    <h2>How to Download Your Sample Paper</h2>
                </div>

                {/* Steps Grid */}
                <div className={styles.howGrid}>
                    {steps.map((step) => (
                        <div key={step.num} className={styles.howStep}>
                            <span className={styles.stepIcon}>{step.icon}</span>
                            <div className={styles.stepNum}>{step.num}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}