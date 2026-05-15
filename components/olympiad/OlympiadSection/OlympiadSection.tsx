"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OlympiadSection.module.css";

/* ── Types ── */
interface WhyItem {
    icon: string;
    title: string;
    desc: string;
}

interface HelpItem {
    icon: string;
    title: string;
    desc: string;
}

interface Olympiad {
    id: string;
    emoji: string;
    short: string;
    full: string;
    subject: string;
    classes: string;
    color: string;
}

/* ── Data ── */
const whyItems: WhyItem[] = [
    {
        icon: "🧠",
        title: "Higher-Order Thinking",
        desc: "Olympiads test conceptual depth and reasoning — skills that school exams never measure but universities always look for.",
    },
    {
        icon: "🌐",
        title: "Global Benchmark",
        desc: "National and international rankings place your child on a world stage, validating their intellect against the best peers.",
    },
    {
        icon: "🎓",
        title: "Admissions Edge",
        desc: "Gold medals and top ranks are strategic profile assets valued by top Indian schools for Class 11, and Ivy League universities for UG admissions.",
    },
    {
        icon: "📈",
        title: "Exam Synergy",
        desc: "ISO directly strengthens JEE & NEET prep. IEO boosts SAT verbal. ICSO aligns with AP CS. Every olympiad builds toward a bigger goal.",
    },
    {
        icon: "🏅",
        title: "Scholarships Worth Lakhs",
        desc: "Top performers earn significant scholarships and recognition — turning academic effort into tangible financial rewards.",
    },
    {
        icon: "🌱",
        title: "Character & Mindset",
        desc: "Competing at this level instils discipline, resilience, and a growth mindset — qualities that compound across every area of life.",
    },
];

const olympiads: Olympiad[] = [
    {
        id: "icso",
        emoji: "💻",
        short: "ICSO",
        full: "International Cyber Science Olympiad",
        subject: "Computer Science & Digital Literacy",
        classes: "Class 1 – 10",
        color: "#1a6b8a",
    },
    {
        id: "ieo",
        emoji: "📖",
        short: "IEO",
        full: "International English Olympiad",
        subject: "English Language & Communication",
        classes: "Class 1 – 12",
        color: "#b8860b",
    },
    {
        id: "igko",
        emoji: "🌍",
        short: "IGKO",
        full: "International General Knowledge Olympiad",
        subject: "GK, Current Affairs & Reasoning",
        classes: "Class 1 – 10",
        color: "#2e7d4f",
    },
    {
        id: "iso",
        emoji: "🔬",
        short: "ISO",
        full: "International Science Olympiad",
        subject: "Physics, Chemistry & Biology",
        classes: "Class 1 – 12",
        color: "#7b3fa0",
    },
];



/* ── Component ── */
export default function OlympiadSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeOlympiad, setActiveOlympiad] = useState<string>("icso");

    /* Scroll reveal */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const io = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add(styles.in);
                        io.unobserve(e.target);
                    }
                }),
            { threshold: 0.07 }
        );
        section.querySelectorAll(`.${styles.reveal}`).forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    const active = olympiads.find((o) => o.id === activeOlympiad)!;

    return (
        <section className={styles.section} id="olympiad" ref={sectionRef}>

            {/* ── Background decoration ── */}
            <div className={styles.bgDeco} aria-hidden="true">
                <div className={styles.bgCircle1} />
                <div className={styles.bgCircle2} />
            </div>

            <div className={styles.container}>

                {/* ════════ SECTION HEADER ════════ */}
                <div className={`${styles.headerWrap} ${styles.reveal}`}>
                    <p className={styles.secLabel}>Olympiad Preparation</p>
                    <h2 className={styles.secHeading}>
                        Why Olympiads Are <em>Not Optional</em><br />
                        for Ambitious Students
                    </h2>
                    <p className={styles.secSub}>
                        Beyond the school syllabus lies a world of competitive brilliance —
                        where medals, scholarships, and university admissions are decided.
                        Here&apos;s why every serious student should compete.
                    </p>
                </div>

                {/* ════════ WHY OLYMPIADS ════════ */}
                <div className={`${styles.whyGrid} ${styles.reveal} ${styles.d1}`}>
                    {whyItems.map((item) => (
                        <div key={item.title} className={styles.whyCard}>
                            <span className={styles.whyIcon} aria-hidden="true">{item.icon}</span>
                            <h3 className={styles.whyTitle}>{item.title}</h3>
                            <p className={styles.whyDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}

