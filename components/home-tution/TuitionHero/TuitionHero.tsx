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
    { num: "95%+", label: "Avg. Score Improvement" },
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
            {/* Decorative glow — bottom left */}
            <div className={styles.glowLeft} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.inner}>

                    {/* Eyebrow */}
                    <div className={styles.eyebrow}>EduQuest Online Tuitions</div>

                    {/* Heading */}
                    <h1 className={styles.heading}>
                        Score High in Your Exams with{" "}
                        <em className={styles.headingEm}>EduQuest</em>
                    </h1>

                    {/* Sub */}
                    <p className={styles.sub}>
                        Personalised online school tuitions for CBSE, ICSE, IB &amp; IGCSE
                        — Class 6 to 12. Expert tutors, flexible scheduling, proven results
                        since 1995.
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

                    {/* Stats */}
                    <div className={styles.stats}>
                        {stats.map((stat, i) => (
                            <React.Fragment key={stat.label}>
                                {i > 0 && (
                                    <div
                                        className={styles.statDivider}
                                        aria-hidden="true"
                                    />
                                )}
                                <div className={styles.stat}>
                                    <span className={styles.statNum}>{stat.num}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://eduquest.org.in/contact-us/"
                        className={styles.cta}
                    >
                        Start 3-Day FREE Trial
                        <span className={styles.ctaArrow}>→</span>
                    </a>

                </div>
            </div>
        </section>
    );
}