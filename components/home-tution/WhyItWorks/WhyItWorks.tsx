"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyItWorks.module.css";

const features = [
    {
        icon: "🎯",
        title: "One-on-One Teaching",
        description:
            "Get personalised school tuition classes for students in Classes 1–12. Personalised learning improves the learning process significantly with direct attention from an expert.",
        delay: "0s",
    },
    {
        icon: "👩‍🏫",
        title: "Expert Teachers",
        description:
            "Every academic subject is taught by highly skilled and trained instructors. All home tutors are pros at setting up school tuition classes, especially over the internet.",
        delay: "0.06s",
    },
    {
        icon: "🔄",
        title: "Flexible Learning",
        description:
            "Our best home tutors take a very flexible approach — modifying teachings in accordance with the student's rate of learning and adapting to each unique pace.",
        delay: "0.12s",
    },
    {
        icon: "🏠",
        title: "Safe & Comfortable",
        description:
            "No commute required. You won't have to stress about running late for a crucial class or being in a bad location — study quickly and safely from home.",
        delay: "0.18s",
    },
    {
        icon: "💬",
        title: "Personalised Support",
        description:
            "Connect with home tutors to get the aid you need — whether homework help or exam strategy — with the best school tuitions for Classes 6–12.",
        delay: "0.24s",
    },
    {
        icon: "💻",
        title: "Interactive Technology",
        description:
            "Students can visualize ideas and improve comprehension through interactive classes — watching video lectures again, doing activities, and reviewing concepts at their own pace.",
        delay: "0.30s",
    },
];

export default function WhyItWorks() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const fadeEls = sectionRef.current?.querySelectorAll(`.${styles.fadeUp}`);
        fadeEls?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.featuresSection} id="features" ref={sectionRef}>
            <div className={styles.container}>
                <div
                    className={`${styles.sectionHead} ${styles.center} ${styles.fadeUp}`}
                >
                    <div className={styles.sectionLabel}>Why It Works</div>
                    <h2>What Sets Our Tuitions Apart</h2>
                    <p>
                        Every feature is designed to make learning more effective, flexible
                        and safe — from the comfort of home.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className={`${styles.featureCard} ${styles.fadeUp}`}
                            style={{ transitionDelay: feature.delay }}
                        >
                            <div className={styles.featureIcon} suppressHydrationWarning>{feature.icon}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}