"use client";

import { useEffect, useRef } from "react";
import styles from "./TestimonialsSection.module.css";

/* ── Types ─────────────────────────────────────────── */
interface Stat {
    value: string;
    label: string;
}

type AnimDir = "left" | "up" | "right";

interface Story {
    initial: string;
    name: string;
    destination: string;
    quote: string;
    animDir: AnimDir;
    delay: string;
}

/* ── Data ───────────────────────────────────────────── */
const stats: Stat[] = [
    { value: "500+", label: "Students Placed" },
    { value: "40+", label: "Partner Universities" },
    { value: "8+", label: "Countries" },
    { value: "100%", label: "Visa Success Rate" },
];

const stories: Story[] = [
    {
        initial: "V",
        name: "Vaibhav Tewari",
        destination: "🇬🇧 Studying in the United Kingdom",
        quote:
            "I would like to take a moment to appreciate the efforts of EduQuest in helping me in my dream of studying abroad. Team EduQuest has done a great job all through the journey. Right from the offer letter till getting the visa done, they guided me thoroughly every step of the way.",
        animDir: "left",
        delay: "0.08s",
    },
    {
        initial: "A",
        name: "Adrew Joseph",
        destination: "🇮🇪 Studying in Ireland",
        quote:
            "I am glad to have had the opportunity to meet Team EduQuest! They are truly great and do an excellent job in mentoring students to study abroad. My visa process would not have been so smooth if I didn't connect with EduQuest. I am very happy with the quality of assistance given.",
        animDir: "up",
        delay: "0.16s",
    },
    {
        initial: "T",
        name: "Tanvi Agarwal",
        destination: "🇨🇦 Studying in Canada",
        quote:
            "I had a very encouraging, supportive and helpful experience with the experienced team of EduQuest. Right from making an application up to visa approval, they were approachable and helpful. My visa application was completely stress-free and easy because of their guidance.",
        animDir: "right",
        delay: "0.24s",
    },
];

/* Map direction → CSS module class */
const dirClass: Record<AnimDir, string> = {
    left: styles.revealLeft,
    up: styles.revealUp,
    right: styles.revealRight,
};

/* ── Component ─────────────────────────────────────── */
export default function TestimonialsSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (statsRef.current) observer.observe(statsRef.current);
        cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.success} id="success">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    className={`${styles.successHeader} ${styles.revealUp}`}
                    ref={headerRef}
                >
                    <div className={styles.secLabel}>Testimonials</div>
                    <h2 className={styles.secHeading}>
                        Our <em>Success Stories</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Real students. Real universities. Real results from India&apos;s top
                        overseas education consultants.
                    </p>
                </div>

                {/* ── Stats Bar ── */}
                <div
                    className={`${styles.statsBar} ${styles.revealUp}`}
                    style={{ transitionDelay: "0.1s" }}
                    ref={statsRef}
                >
                    {stats.map((stat) => (
                        <div className={styles.statItem} key={stat.label}>
                            <span className={styles.statVal}>{stat.value}</span>
                            <span className={styles.statLbl}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Story Cards ── */}
                <div className={styles.successGrid}>
                    {stories.map((story, i) => (
                        <div
                            key={story.name}
                            className={`${styles.storyCard} ${dirClass[story.animDir]}`}
                            style={{ transitionDelay: story.delay }}
                            ref={(el) => { cardRefs.current[i] = el; }}
                        >
                            {/* Opening quote */}
                            <div className={styles.storyQuoteMark}>&ldquo;</div>

                            {/* Testimonial text */}
                            <p className={styles.storyText}>{story.quote}</p>

                            {/* Divider */}
                            <div className={styles.storyDivider} />

                            {/* Author */}
                            <div className={styles.storyFooter}>
                                <div className={styles.storyAvatar}>{story.initial}</div>
                                <div>
                                    <div className={styles.storyName}>{story.name}</div>
                                    <div className={styles.storyDest}>{story.destination}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}