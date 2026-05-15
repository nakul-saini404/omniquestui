"use client";

import { useEffect, useRef } from "react";
import styles from "./RoadmapSection.module.css";

interface RoadmapPhase {
    dot: string;
    delayClass: "d0" | "d1" | "d2" | "d3";
    /** Which side carries the card — left or right */
    cardSide: "left" | "right";
    card: {
        phase: string;
        title: string;
        desc: string;
        points: string[];
    };
    quote: string;
    /** Quote is right-aligned when the card is on the right (even phases) */
    quoteAlign?: "right";
}

const phases: RoadmapPhase[] = [
    {
        dot: "🔍",
        delayClass: "d0",
        cardSide: "left",
        card: {
            phase: "Phase 1 · Discovery",
            title: "Academic Profiling & Strategy",
            desc: "Analysis of your current academic standing and strategic subject selection aligned to your target universities.",
            points: [
                "1-to-1 Profile Gap Analysis",
                "Subject Selection (AP / IB)",
                "Standardised Test Prep Planning",
            ],
        },
        quote:
            "Choosing the right AP subjects and test prep strategy is where 80% of application success is determined — before a single word is written.",
    },
    {
        dot: "⚡",
        delayClass: "d1",
        cardSide: "right",
        card: {
            phase: "Phase 2 · Skill Building",
            title: "The Technical Differentiator",
            desc: 'We integrate Aptech Professional Courses to give you a "Maker" profile — a certified, deployable project that no competitor has.',
            points: [
                "Master Python, Tableau, or Node.js",
                "Build a GitHub Portfolio with real commits",
                "Earn Aptech 'Smart Professional' certification",
            ],
        },
        quote:
            "Most students submit applications. EduQuest students submit profiles. The difference is a certified Aptech project that proves what you can build.",
        quoteAlign: "right",
    },
    {
        dot: "🏆",
        delayClass: "d2",
        cardSide: "left",
        card: {
            phase: "Phase 3 · Honing Profile",
            title: "Global Competitions",
            desc: "Targeting high-impact global essays, competitions, and research publications that signal intellectual leadership.",
            points: [
                "Harvard International Review (HIR)",
                "Queen's Commonwealth Essay Competition",
                "MIT Inspire Research Program",
            ],
        },
        quote:
            "A published research paper or a global essay prize tells admissions officers something a 1600 SAT cannot — that you think at the level they train.",
    },
    {
        dot: "🎓",
        delayClass: "d3",
        cardSide: "right",
        card: {
            phase: "Phase 4 · Applications",
            title: "College Consulting",
            desc: "Translating your academic stats and Aptech projects into a compelling narrative that admissions panels remember.",
            points: [
                "Crafting the 'Technical' SOP",
                "Best-Fit University Selection",
                "Interview Prep with ex-Admission Officers",
            ],
        },
        quote:
            "The SOP is where everything converges. Your Aptech project, your AP scores, your essays — all woven into one narrative that makes the reader say 'yes'.",
        quoteAlign: "right",
    },
];

export default function RoadmapSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const elements = [
            headerRef.current,
            ...rowRefs.current,
        ].filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        /* Add .in to the row; children pick it up via descendant selectors */
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.roadmap} id="roadmap">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div ref={headerRef} className={`${styles.roadmapHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>The EduQuest 360° Roadmap</div>
                    <h2 className={styles.secHeading}>
                        From Academic Profiling
                        <br />
                        <em>to Admission Letters.</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        A four-phase journey — from where you are now to the offer letter
                        you&apos;ve been working toward.
                    </p>
                </div>

                {/* ── Timeline ── */}
                <div className={styles.roadmapSteps}>
                    {phases.map((phase, i) => {
                        const isCardLeft = phase.cardSide === "left";

                        const cardEl = (
                            <div className={styles.roadmapCard}>
                                <div className={styles.roadmapPhase}>{phase.card.phase}</div>
                                <div className={styles.roadmapTitle}>{phase.card.title}</div>
                                <p className={styles.roadmapDesc}>{phase.card.desc}</p>
                                <ul className={styles.roadmapPoints}>
                                    {phase.card.points.map((pt) => (
                                        <li key={pt}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        );

                        const quoteEl = (
                            <p
                                className={[
                                    styles.roadmapQuote,
                                    phase.quoteAlign === "right" ? styles.quoteRight : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                            >
                                <em>&ldquo;{phase.quote}&rdquo;</em>
                            </p>
                        );

                        return (
                            <div
                                key={i}
                                ref={(el) => { rowRefs.current[i] = el; }}
                                className={[
                                    styles.roadmapRow,
                                    styles[phase.delayClass],
                                ].join(" ")}
                            >
                                {/* Left column */}
                                <div className={`${styles.roadmapLeft} ${styles.revealLeft}`}>
                                    {isCardLeft ? cardEl : quoteEl}
                                </div>

                                {/* Centre dot */}
                                <div className={styles.roadmapCenter}>
                                    <div className={styles.roadmapDot}>{phase.dot}</div>
                                </div>

                                {/* Right column */}
                                <div className={`${styles.roadmapRight} ${styles.revealRight}`}>
                                    {isCardLeft ? quoteEl : cardEl}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}