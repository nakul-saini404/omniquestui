"use client";

import { useEffect, useRef } from "react";
import styles from "./WhoWeAreSection.module.css";

interface Highlight {
    icon: string;
    title: string;
    desc: string;
}

const highlights: Highlight[] = [
    {
        icon: "🎯",
        title: "Personalized Admission Plans",
        desc: "Custom roadmaps built around each student's profile, goals, and target universities — not a one-size-fits-all approach.",
    },
    {
        icon: "🌍",
        title: "Global University Network",
        desc: "Students placed at LSE, University of Toronto, Melbourne, UC Berkeley, and Ivy League schools across 8+ countries.",
    },
    {
        icon: "🤝",
        title: "1-on-1 Expert Mentorship",
        desc: "Direct access to experienced counselors who guide you through every step — from shortlisting to visa approval.",
    },
    {
        icon: "📋",
        title: "Weekly Profile-Building Workshops",
        desc: "Sessions on creating research papers, building online presence, and strengthening extracurricular activities.",
    },
    {
        icon: "🏆",
        title: "Top 10 Ranked in India",
        desc: "Consistently listed among the top 10 overseas education consultants in India with a near-100% success rate.",
    },
];

export default function WhoWeAreSection() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

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

        if (leftRef.current) observer.observe(leftRef.current);
        if (rightRef.current) observer.observe(rightRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.leader} id="leader">
            <div className={styles.container}>
                <div className={styles.leaderGrid}>

                    {/* ── Left: Text ── */}
                    <div className={`${styles.leaderText} ${styles.slideFromLeft}`} ref={leftRef}>
                        <div className={styles.secLabel}>Who We Are</div>

                        <h2 className={styles.secHeading}>
                            EduQuest — India&apos;s Top Leader
                            <br />
                            in <em>Overseas Education</em>
                        </h2>

                        <p>
                            EduQuest Mentors examine each student&apos;s area of interest,
                            intrinsic passions and hobbies, strong points, and weaknesses to
                            provide a unique approach to overseas education preparation. By
                            being the best study abroad consultants in India, we ensure that
                            the student&apos;s strengths, goals, and interests are perfectly
                            balanced.
                        </p>

                        <p>
                            As the No. 1 Overseas Education Consultants in India, our
                            personalized admissions plan seeks to improve the student&apos;s
                            application and increase their chances of acceptance to their
                            preferred university. We recognize that no two students face the
                            same challenges in the study abroad process — which is why every
                            session is one-on-one.
                        </p>

                        <p>
                            Our experienced mentors believe that if no two students are alike,
                            why should their admission plan be the same? We hold weekly
                            sessions on building a strong online presence — covering
                            extracurriculars, research papers, and everything in between.
                        </p>

                        <div className={styles.ctaWrap}>
                            <a
                                href="/contact-us"
                                className={styles.btnGold}
                            >
                                Start Your Journey →
                            </a>
                        </div>
                    </div>

                    {/* ── Right: Highlight Cards ── */}
                    <div className={`${styles.leaderHighlights} ${styles.slideFromRight}`} ref={rightRef}>
                        {highlights.map((item, i) => (
                            <div
                                key={item.title}
                                className={styles.highlightItem}
                                style={{ transitionDelay: `${0.08 + i * 0.07}s` }}
                            >
                                <div className={styles.highlightIcon}>{item.icon}</div>
                                <div>
                                    <div className={styles.highlightTitle}>{item.title}</div>
                                    <div className={styles.highlightDesc}>{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}