"use client";

import { useEffect, useRef } from "react";
import styles from "./OurFoundation.module.css";

interface MvCard {
    tag: string;
    heading: string;
    variant: "mission" | "vision";
    delay?: string;
    paragraphs: (string | JSX.Element)[];
}

const cards: MvCard[] = [
    {
        tag: "Our Mission",
        heading: "Build. Position. Place.",
        variant: "mission",
        paragraphs: [
            <>
                At EduQuest, our mission is to{" "}
                <strong>reimagine what education can do for a student</strong> — not
                just move them from classroom to exam hall, but from potential to
                placement.
            </>,
            <>
                We understand each student is unique. Our faculty works to find the
                spark in every individual, building a platform where students can
                interact, learn, and excel through unmatched resources and the highest
                level of dedication.
            </>,
            <>
                We provide a <strong>complete solution</strong> — from Diagnostic Test
                Frameworks to personalised study plans, application writing to
                university selection — delivered across offline, online, and hybrid
                modes, in group and individual formats.
            </>,
        ],
    },
    {
        tag: "Our Vision",
        heading: "Confident. Capable. World-Ready.",
        variant: "vision",
        delay: "0.12s",
        paragraphs: [
            <>
                EduQuest&apos;s vision is to{" "}
                <strong>transform lives for better careers</strong> through academic
                excellence, all-around development, and the building of confident,
                result-oriented individuals.
            </>,
            <>
                For exams like SAT and ACT, admission depends on many dimensions —
                score, CV, transcripts, essays, LORs, and sometimes interviews. Our
                vision is holistic preparation that leaves no stone unturned: not just
                exam-ready, but life-ready.
            </>,
            <>
                A dedicated{" "}
                <strong>
                    panel of experts assigned to one student throughout the course
                </strong>{" "}
                ensures we know them deeply — and build a roadmap that is truly
                personalised, not templated.
            </>,
        ],
    },
];

export default function OurFoundation() {
    const fadeRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.mvSection} id="mission-vision">
            <div className={styles.container}>

                {/* Section Header */}
                <div
                    className={`${styles.sectionHead} ${styles.fadeUp}`}
                    ref={(el) => { fadeRefs.current[0] = el; }}
                >
                    <div className={styles.sectionLabel}>Our Foundation</div>
                    <h2>Mission &amp; Vision</h2>
                    <p>Two sides of the same commitment — to every student who walks through our door.</p>
                </div>

                {/* Cards Grid */}
                <div className={styles.mvGrid}>
                    {cards.map((card, i) => (
                        <div
                            key={card.variant}
                            className={`${styles.mvCard} ${styles[card.variant]} ${styles.fadeUp}`}
                            style={card.delay ? { transitionDelay: card.delay } : undefined}
                            ref={(el) => { fadeRefs.current[i + 1] = el; }}
                        >
                            {/* Card Header */}
                            <div className={styles.mvCardHead}>
                                <div className={styles.mvCardTag}>{card.tag}</div>
                                <h3>{card.heading}</h3>
                            </div>

                            {/* Card Body */}
                            <div className={styles.mvCardBody}>
                                {card.paragraphs.map((para, j) => (
                                    <p key={j}>{para}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}