"use client";

import React from "react";
import styles from "./StudentStories.module.css";

interface Testimonial {
    quote: string;
    avatarLetter: string;
    name: string;
    sub: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            "EduQuest's Olympiad coaching completely changed how I approach science. I scored Gold in ISO Class 9 and it directly helped me in my board exams too. The concepts clicked in a way they never had before.",
        avatarLetter: "A",
        name: "Aryan Mehta",
        sub: "ISO Gold Medallist · Class 9 · Delhi",
    },
    {
        quote:
            "I was nervous about the English Olympiad but EduQuest made vocabulary and grammar so systematic. My IEO rank helped my school application and my SAT verbal scores are also much stronger now.",
        avatarLetter: "S",
        name: "Sanya Kapoor",
        sub: "IEO Rank 3 · Class 11 · Gurgaon",
    },
    {
        quote:
            "My son was never interested in GK but the IGKO coaching at EduQuest made it so engaging. He now reads newspapers daily and won Silver in IGKO Class 7. His overall awareness has improved dramatically.",
        avatarLetter: "P",
        name: "Priya Sharma",
        sub: "Parent of IGKO Silver Medallist · Noida",
    },
];

export default function StudentStories() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Section Head */}
                <div className={styles.sectionHead}>
                    <span className={styles.eyebrow}>Student Stories</span>
                    <h2 className={styles.heading}>What Our Students Say</h2>
                    <p className={styles.subText}>
                        Real results from real students who prepared for Olympiads with EduQuest.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className={styles.testimonialGrid}>
                    {testimonials.map((t) => (
                        <div key={t.name} className={styles.testimonialCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <blockquote className={styles.blockquote}>
                                {t.quote}
                            </blockquote>
                            <div className={styles.tAuthor}>
                                <div className={styles.tAvatar}>{t.avatarLetter}</div>
                                <div>
                                    <div className={styles.tAuthorName}>{t.name}</div>
                                    <div className={styles.tAuthorSub}>{t.sub}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}