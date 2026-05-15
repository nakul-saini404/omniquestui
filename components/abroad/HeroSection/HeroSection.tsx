"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const stats = [
    { value: "500+", label: "Students Placed" },
    { value: "40+", label: "Universities" },
    { value: "8", label: "Countries" },
    { value: "100%", label: "Visa Success" },
];

const countries = [
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇸🇬", name: "Singapore" },
    { flag: "🇳🇿", name: "New Zealand" },
];

export default function HeroSection() {
    const revealRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
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

        revealRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.heroInner}>

                    {/* Left Column */}
                    <div className={styles.heroLeft}>
                        <div
                            className={`${styles.heroBadge} ${styles.revealLeft}`}
                            ref={addRef}
                        >
                            <span className={styles.heroBadgeLine}></span>
                            India&apos;s No. 1 Study Abroad Partner
                        </div>

                        <h1
                            className={`${styles.heroH1} ${styles.revealLeft} ${styles.d1}`}
                            ref={addRef}
                        >
                            Want to Study Abroad
                            <br />
                            but <em>Confused?</em>
                        </h1>

                        <p
                            className={`${styles.heroSub} ${styles.revealLeft} ${styles.d2}`}
                            ref={addRef}
                        >
                            The good news is that you don&apos;t have to go through the
                            application procedure by yourself. EduQuest — Top Overseas
                            Education Consultants in India — are here to take you a step
                            closer to your dream university.
                        </p>

                        <div
                            className={`${styles.heroBtns} ${styles.revealLeft} ${styles.d3}`}
                            ref={addRef}
                        >
                            <a
                                href="/contact-us"
                                className={styles.btnGold}
                            >
                                ▶ Book Free Consultation
                            </a>
                            <a
                                href="/about-us/"
                                className={styles.btnNavy}
                            >
                                About Us
                            </a>
                        </div>
                    </div>

                    {/* Right Column — Stat Card */}
                    <div
                        className={`${styles.heroStatCard} ${styles.revealRight} ${styles.d1}`}
                        ref={addRef}
                    >
                        <div className={styles.heroStatCardTitle}>Our Global Footprint</div>

                        <div className={styles.heroStats}>
                            {stats.map((stat) => (
                                <div className={styles.heroStat} key={stat.label}>
                                    <span className={styles.heroStatVal}>{stat.value}</span>
                                    <span className={styles.heroStatLbl}>{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.heroCountries}>
                            {countries.map((c) => (
                                <span className={styles.countryTag} key={c.name}>
                                    {c.flag} {c.name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}