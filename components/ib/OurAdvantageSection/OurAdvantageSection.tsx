'use client';

import styles from './OurAdvantageSection.module.css';

const cards = [
    {
        icon: '🧑‍🏫',
        title: 'IB® Certified Tutors',
        desc: "Our tutors are IB-certified, trained in the exact marking schemes and assessment criteria examiners use — so you learn what actually earns marks.",
    },
    {
        icon: '🎯',
        title: 'One-on-One Sessions',
        desc: "Every class is a private 1:1 session tailored to your pace, gaps, and goals. No crowded classrooms, no one-size-fits-all teaching.",
    },
    {
        icon: '🔁',
        title: 'Revise Every Session',
        desc: "All sessions are recorded and available to review anytime. Revisit difficult concepts, re-watch explanations and cement your understanding.",
    },
    {
        icon: '📅',
        title: 'Flexible Scheduling',
        desc: "Connect with your tutor anytime, anywhere. Morning, evening or weekend — we fit around your school timetable, not the other way around.",
    },
    {
        icon: '📝',
        title: 'IA & EE Guidance',
        desc: "We help students structure and write outstanding Internal Assessments and Extended Essays — often the difference between a 5 and a 7.",
    },
    {
        icon: '💰',
        title: 'Affordable Tuitions',
        desc: "Regular and intensive plans at accessible price points. Quality IB coaching shouldn't be out of reach — we ensure it isn't.",
    },
];

export default function OurAdvantageSection() {
    return (
        <section id="why-choose-ib" className={styles.section}>

            {/* ── Section header ── */}
            <div className={styles.sectionHeader}>
                <div className={styles.sectionLabel}>Our Advantage</div>
                <h2 className={styles.sectionTitle}>Why Choose EduQuest for IB?</h2>
                <p className={styles.sectionSub}>
                    We combine IB-certified expertise with personalised, technology-driven
                    tutoring to help every student reach their potential score.
                </p>
            </div>

            {/* ── Cards grid ── */}
            <div className={styles.cardsGrid}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.cardIcon}>{card.icon}</div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}