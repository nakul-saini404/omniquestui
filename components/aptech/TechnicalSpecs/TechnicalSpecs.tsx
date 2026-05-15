"use client";

import { useEffect, useRef } from "react";
import styles from "./TechnicalSpecs.module.css";

interface TechModule {
    title: string;
    points: (string | { text: string; highlight: string }[])[];
}

interface TechCard {
    label: string;
    title: string;
    tags: string[];
    modules: TechModule[];
    revealClass: "revealLeft" | "revealUp" | "revealRight";
    delayClass: "d1" | "d2" | "d3";
}

const techCards: TechCard[] = [
    {
        label: "Smart Professional Course",
        title: "Data Science & AI / ML",
        tags: ["Python", "TensorFlow", "Hadoop", "R Studio"],
        revealClass: "revealLeft",
        delayClass: "d1",
        modules: [
            {
                title: "Core Programming",
                points: [
                    "Python & R Studio Fundamentals",
                    "Large Data Management with <MongoDB>",
                    "Data Wrangling using Pandas & NumPy",
                    "Jupyter Notebook & Google Collab",
                ],
            },
            {
                title: "Big Data & AI",
                points: [
                    "Apache <Hadoop>, Spark, Hive, YARN",
                    "<TensorFlow> & Keras Frameworks",
                    "Artificial Neural Networks (ANN) & CNN",
                    "NLP & Recommendation Engines",
                ],
            },
        ],
    },
    {
        label: "Visual Analytics & Reporting",
        title: "Data Analytics with Tableau",
        tags: ["Tableau", "Adv. Excel", "MySQL", "Stats"],
        revealClass: "revealUp",
        delayClass: "d2",
        modules: [
            {
                title: "Analysis Tools",
                points: [
                    "<ANOVA>, Regression, Solver & Goal Seek",
                    "Financial Functions (NPV, IRR)",
                    "MySQL: Stored Procedures & Triggers",
                    "Database Replication & Partitioning",
                ],
            },
            {
                title: "Visual Analytics",
                points: [
                    "Interactive <Dashboards> & Stories",
                    "Tableau Prep Conductor",
                    "<Ask Data> & AI Powered Models",
                    "Sales & Finance Forecasting",
                ],
            },
        ],
    },
    {
        label: "Skill Builder Course",
        title: "Web & App Development",
        tags: ["Node.js", "Angular", "PHP", "HTML5"],
        revealClass: "revealRight",
        delayClass: "d3",
        modules: [
            {
                title: "Frontend",
                points: [
                    "HTML5, CSS3, ES6+ JavaScript",
                    "<jQuery> & Responsive Design",
                    "<AngularJS>: Directives & MVC",
                    "SPA (Single Page Applications)",
                ],
            },
            {
                title: "Backend & DB",
                points: [
                    "<Node.js> Event-Driven Architecture",
                    "Express.js for RESTful APIs",
                    "<PHP> Server-Side Scripting",
                    "MySQL Integration & Security",
                ],
            },
        ],
    },
];

/** Renders a bullet string — wraps <Word> in a gold <strong> */
function BulletText({ text }: { text: string }) {
    const parts = text.split(/(<[^>]+>)/g);
    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith("<") && part.endsWith(">")) {
                    return (
                        <strong key={i} className={styles.highlight}>
                            {part.slice(1, -1)}
                        </strong>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </>
    );
}

export default function TechnicalSpecs() {
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
        <section className={styles.techSpecs} id="tech-specs">
            <div className={styles.container}>

                {/* Header */}
                <div ref={headerRef} className={`${styles.techHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>Technical Specs</div>
                    <h2 className={styles.secHeading}>
                        Deep Dive Into <em>Course Modules</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Three Aptech certifications — each mapped to a real career outcome
                        and university admission strategy.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.techGrid}>
                    {techCards.map((card, i) => (
                        <div
                            key={card.title}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={[
                                styles.techCard,
                                styles[card.revealClass],
                                styles[card.delayClass],
                            ].join(" ")}
                        >
                            {/* Card Head */}
                            <div className={styles.techCardHead}>
                                <div className={styles.techCardLabel}>{card.label}</div>
                                <div className={styles.techCardTitle}>{card.title}</div>
                                <div className={styles.techTags}>
                                    {card.tags.map((tag) => (
                                        <span key={tag} className={styles.techTag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className={styles.techBody}>
                                {card.modules.map((mod) => (
                                    <div key={mod.title}>
                                        <div className={styles.techModuleTitle}>{mod.title}</div>
                                        <ul className={styles.techPoints}>
                                            {mod.points.map((point, pi) => (
                                                <li key={pi}>
                                                    <BulletText text={point as string} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}