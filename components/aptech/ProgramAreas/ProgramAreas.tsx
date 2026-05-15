"use client";

import { useEffect, useRef } from "react";
import styles from "./ProgramAreas.module.css";

interface Program {
    icon: string;
    title: string;
    desc: string;
    revealClass: "revealLeft" | "revealUp" | "revealRight";
    delayClass: "d1" | "d2" | "d3";
    centered?: boolean;
}

const programs: Program[] = [
    {
        icon: "💹",
        title: "Corporate Finance & Valuation",
        desc: "Financial Modeling, DCF Analysis, Risk Management — for aspiring finance students targeting top business schools.",
        revealClass: "revealLeft",
        delayClass: "d1",
    },
    {
        icon: "🏦",
        title: "Banking, Markets & Financial Systems",
        desc: "Global Markets, Fintech APIs, Banking Architecture. Understand how the world's money actually moves.",
        revealClass: "revealUp",
        delayClass: "d2",
    },
    {
        icon: "📣",
        title: "Strategic Digital Marketing",
        desc: "SEO, Growth Hacking, Conversion Optimization — real campaigns, real data, real results for your portfolio.",
        revealClass: "revealRight",
        delayClass: "d3",
    },
    {
        icon: "📊",
        title: "Data Visualization & Analytics",
        desc: "Tableau, PowerBI, Statistical Storytelling. Turn raw numbers into insights that decision-makers act on.",
        revealClass: "revealLeft",
        delayClass: "d2",
    },
    {
        icon: "🎮",
        title: "Game Dev & Interactive Systems",
        desc: "Unity, C#, 3D Asset Integration. Build games that demonstrate systems thinking and creative engineering.",
        revealClass: "revealUp",
        delayClass: "d3",
    },
    {
        icon: "💻",
        title: "Software Engineering",
        desc: "Full Stack, System Design, Algorithms. The foundation for every top CS programme in the world.",
        revealClass: "revealRight",
        delayClass: "d2",
    },
    {
        icon: "🤖",
        title: "AI, Data Science & Emerging Tech",
        desc: "Deep Learning, NLP, Big Data Pipelines — the skills every top university's CS and engineering panels look for.",
        revealClass: "revealLeft",
        delayClass: "d3",
        centered: true,
    },
];

export default function ProgramAreas() {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const elements = [
            headerRef.current,
            ...cardRefs.current,
        ].filter(Boolean) as Element[];

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

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.programs} id="programs">
            <div className={styles.container}>

                {/* Header */}
                <div ref={headerRef} className={`${styles.programsHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>Program Areas</div>
                    <h2 className={styles.secHeading}>
                        We Design Around <em>Where You&apos;re Headed</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Not a fixed syllabus — a strategic programme built on your goals, your target
                        universities, and the profile spike that will get you there.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.programsGrid}>
                    {programs.map((program, i) => (
                        <div
                            key={program.title}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={[
                                styles.progCard,
                                styles[program.revealClass],
                                styles[program.delayClass],
                                program.centered ? styles.progCardCentered : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            <div className={styles.progIcon}>{program.icon}</div>
                            <div className={styles.progTitle}>{program.title}</div>
                            <p className={styles.progDesc}>{program.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}