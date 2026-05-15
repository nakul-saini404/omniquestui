"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const stats = [
    { value: "10K+", label: "Students Trained" },
    { value: "97%", label: "Success Ratio" },
    { value: "$8M+", label: "Scholarships Won" },
    { value: "20+", label: "Years Excellence" },
];

const universities = [
    "London School of Economics",
    "University of Toronto",
    "Melbourne University",
    "Ivy League Schools",
    "NUS Singapore",
];

export default function HeroSection() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = [leftRef.current, rightRef.current].filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.heroGrid}>

                    {/* Left Column */}
                    <div ref={leftRef} className={`${styles.revealLeft}`}>
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeLine}></span>
                            EduQuest × Aptech
                        </div>

                        <h1 className={styles.heroH1}>
                            Global Admit.<br />
                            <em>Tech Ready.</em>
                        </h1>

                        <p className={styles.heroSub}>
                            We don&apos;t just write SOPs. We build profiles. Get trained in{" "}
                            <strong className={styles.heroHighlight}>
                                Data Science, Analytics &amp; Web Dev
                            </strong>{" "}
                            to crack top university admissions worldwide.
                        </p>

                        <div className={styles.heroBtns}>
                            <a href="#contact" className={styles.btnGold}>
                                ▶ Start The Journey
                            </a>
                            <a href="#admit" className={styles.btnOutline}>
                                See Admit List
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div ref={rightRef} className={`${styles.revealRight} ${styles.d1}`}>
                        <div className={styles.heroCard}>
                            <div className={styles.heroCardTitle}>Students Placed At</div>

                            <div className={styles.heroStats}>
                                {stats.map((stat) => (
                                    <div key={stat.label} className={styles.heroStat}>
                                        <span className={styles.heroStatVal}>{stat.value}</span>
                                        <span className={styles.heroStatLbl}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.heroUnis}>
                                {universities.map((uni) => (
                                    <span key={uni} className={styles.uniTag}>
                                        {uni}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}