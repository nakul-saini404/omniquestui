"use client";

import React from "react";
import styles from "./WhyEduQuest.module.css";

interface WhyCard {
    icon: string;
    title: string;
    description: string;
}

const cards: WhyCard[] = [
    {
        icon: "🧠",
        title: "Concept-First Teaching",
        description:
            "Our faculty teaches the reasoning behind every concept — not just what the answer is, but why. This is what separates students who score well on olympiads from those who merely pass.",
    },
    {
        icon: "📊",
        title: "AI-Powered Diagnostics",
        description:
            "Before you practice, you take a diagnostic test. Our AI identifies your exact weak zones, builds a personalised study plan, and tracks your progress every week — not just before exams.",
    },
    {
        icon: "🏅",
        title: "Track Record of Results",
        description:
            "With 10,000+ students trained, $8M+ in scholarships won, and a 97% success ratio, our methods are proven across every major olympiad and competitive exam format.",
    },
    {
        icon: "📅",
        title: "Structured Year-Round Program",
        description:
            "Unlike crash courses, EduQuest's Olympiad coaching runs year-round with weekly sessions, monthly mocks, and regular feedback cycles. Consistency is what produces champions.",
    },
    {
        icon: "🎓",
        title: "Profile-Building Integration",
        description:
            "Olympiad medals are not just trophies — they are strategic profile assets. EduQuest integrates Olympiad coaching into your overall admissions strategy for top schools and universities.",
    },
    {
        icon: "👨‍🏫",
        title: "Expert Faculty with 20+ Years",
        description:
            "Our teachers are subject specialists with a minimum of 10 years of experience in competitive exam preparation — not generalists pulled in to fill a class.",
    },
];

export default function WhyEduQuest() {
    return (
        <section className={styles.section} id="why-eduquest">
            <div className={styles.container}>

                {/* Section Head */}
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Why EduQuest</span>
                    <h2 className={styles.heading}>
                        India's Most Strategic Olympiad Preparation
                    </h2>
                    <p className={styles.subText}>
                        EduQuest doesn't just hand students papers — we build the skills,
                        habits, and mindset to win consistently.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className={styles.whyGrid}>
                    {cards.map((card) => (
                        <div key={card.title} className={styles.whyCard}>
                            <div className={styles.wcIcon}>{card.icon}</div>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardDesc}>{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className={styles.whyBanner}>
                    <div className={styles.wbIcon}>⭐</div>
                    <div className={styles.whyBannerText}>
                        <h4 className={styles.bannerQuote}>
                            "Universities don't just look at marks — they look at intellectual
                            identity. Olympiads build that identity."
                        </h4>
                        <p className={styles.bannerSub}>
                            — EduQuest Admissions Strategy Team · Trusted by 15,000+ students
                            across India and 30+ countries
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}