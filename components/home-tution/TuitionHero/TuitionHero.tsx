"use client";

import React from "react";
import styles from "./TuitionHero.module.css";

interface Stat {
    num: string;
    label: string;
}

interface Board {
    label: string;
}

const stats: Stat[] = [
    { num: "30+", label: "Years of Excellence" },
    { num: "10,000+", label: "Students Guided" },
    { num: "95%+", label: "Score Improvement" },
    { num: "4", label: "Boards Covered" },
];

const boards: Board[] = [
    { label: "CBSE" },
    { label: "ICSE" },
    { label: "IB" },
    { label: "IGCSE" },
];

export default function TuitionHero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Decorative glows */}
            <div className={styles.glowLeft} aria-hidden="true" />
            <div className={styles.glowRight} aria-hidden="true" />
            <div className={styles.gridOverlay} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.inner}>

                    {/* Eyebrow */}
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowLine} />
                        EduQuest Online Tuitions
                        <span className={styles.eyebrowLine} />
                    </div>

                    {/* Heading */}
                    <h1 className={styles.heading}>
                        Score High in Your Exams
                        <br />
                        <span className={styles.headingAccent}>with EduQuest</span>
                    </h1>

                    {/* Sub */}
                    <p className={styles.sub}>
                        Personalised online school tuitions for CBSE, ICSE, IB &amp; IGCSE
                        — Class 6 to 12. Expert tutors, flexible scheduling,
                        proven results since 1995.
                    </p>

                    {/* Board badges */}
                    <div className={styles.boardBadges}>
                        {boards.map((board) => (
                            <span key={board.label} className={styles.boardBadge}>
                                <span className={styles.boardBadgeDot} />
                                {board.label}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={styles.ctaRow}>
                        <a href="/contact-us" className={styles.ctaPrimary}>
                            Book a Free Demo
                            <span className={styles.ctaArrow}>→</span>
                        </a>

                    </div>

                    {/* Divider */}
                    <div className={styles.divider} aria-hidden="true" />

                    {/* Stats */}
                    <div className={styles.stats}>
                        {stats.map((stat, i) => (
                            <React.Fragment key={stat.label}>
                                {i > 0 && (
                                    <div className={styles.statDivider} aria-hidden="true" />
                                )}
                                <div className={styles.stat}>
                                    <span className={styles.statNum}>{stat.num}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}