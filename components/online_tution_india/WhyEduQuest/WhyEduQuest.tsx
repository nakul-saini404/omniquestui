"use client";

import styles from "./WhyEduQuest.module.css";

interface WhyCard {
    icon: string;
    title: string;
    description: string;
}

interface TrustStat {
    number: string;
    label: string;
}

const whyCards: WhyCard[] = [
    {
        icon: "👨‍🏫",
        title: "Tutors, Not Teachers",
        description:
            "Our educators are trained mentors — they understand each student's learning style, pace, and psychology. They don't just deliver content; they unlock potential.",
    },
    {
        icon: "📈",
        title: "Proven Score Improvement",
        description:
            "Avg. 27% grade improvement in 90 days across our student base. We track every chapter test, mock exam, and board result — and we're accountable to outcomes.",
    },
    {
        icon: "🔒",
        title: "Quality Guarantee",
        description:
            "Not happy with your first 2 sessions? We'll replace the tutor or refund — no paperwork, no delays. That's how confident we are in our teachers.",
    },
    {
        icon: "🏫",
        title: "All Boards, One Platform",
        description:
            "CBSE, ICSE, IB MYP, IB DP, IGCSE, State Boards — one platform handles every curriculum. No switching, no confusion, no compromise.",
    },
    {
        icon: "💬",
        title: "Parents Always in the Loop",
        description:
            "Weekly tutor messages, monthly progress reports, and a dedicated coordinator — you'll always know exactly how your child is doing and what to improve.",
    },
    {
        icon: "🎓",
        title: "Beyond Boards: Future-Ready",
        description:
            "We don't just prepare for the next exam — we build the skills, study habits, and academic confidence that students carry into college and beyond.",
    },
];

const trustStats: TrustStat[] = [
    { number: "10K+", label: "Students Taught Online" },
    { number: "15+", label: "Years of Expertise" },
    { number: "98%", label: "Parent Satisfaction Rate" },
    { number: "27%", label: "Avg. Grade Improvement (90 days)" },
];

export default function WhyEduQuest() {
    return (
        <section className={styles.section} id="why-eduquest">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.header}>
                    <div className={styles.secLabel}>
                        <span className={styles.secLabelLine} />
                        Why EduQuest
                    </div>
                    <h2 className={styles.secHeading}>
                        Not just tuition —<br />
                        a <em className={styles.headingEm}>transformation</em>
                    </h2>
                    <p className={styles.secSub}>
                        Thousands of families trust EduQuest for one reason: we consistently
                        deliver results. Here's what sets us apart from every other online
                        tuition platform.
                    </p>
                </div>

                {/* ── Why Cards Grid ── */}
                <div className={styles.grid}>
                    {whyCards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardBar} />
                            <div className={styles.cardIcon}>{card.icon}</div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* ── Trust Stats Bar ── */}
                <div className={styles.trustBar}>
                    {trustStats.map((stat, index) => (
                        <div key={index} className={styles.trustItem}>
                            <div className={styles.trustNum}>{stat.number}</div>
                            <div className={styles.trustLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}