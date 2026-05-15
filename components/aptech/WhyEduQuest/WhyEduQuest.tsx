"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyEduQuest.module.css";

interface WhyCard {
    icon: string;
    title: string;
    desc: string;
    revealClass: "revealLeft" | "revealUp" | "revealRight";
    delayClass: "d1" | "d2" | "d3";
}

const cards: WhyCard[] = [
    {
        icon: "🤝",
        title: "Real Industry Partnership",
        desc: "The Aptech × EduQuest collaboration is the only programme in India that combines certified tech training with Ivy-calibre admissions consulting.",
        revealClass: "revealLeft",
        delayClass: "d1",
    },
    {
        icon: "🧠",
        title: "Concept-First Teaching",
        desc: "Our faculty teaches the reasoning behind every concept. Students understand deeply — which is what admissions panels and interviews actually test.",
        revealClass: "revealUp",
        delayClass: "d2",
    },
    {
        icon: "📊",
        title: "AI-Powered Diagnostics",
        desc: "Diagnostic tests identify exact weak zones before you begin. Personalised study plans are built from data — not guesswork.",
        revealClass: "revealRight",
        delayClass: "d3",
    },
    {
        icon: "📅",
        title: "Year-Round Structure",
        desc: "Unlike crash courses, our programme runs all year — weekly sessions, monthly mocks, feedback cycles. Consistency produces the profiles that win.",
        revealClass: "revealLeft",
        delayClass: "d2",
    },
    {
        icon: "🏅",
        title: "Proven Track Record",
        desc: "10,000+ students trained. $8M+ in scholarships won. 97% success ratio. 20+ years. Our methods are proven across every major exam and admission format.",
        revealClass: "revealUp",
        delayClass: "d3",
    },
    {
        icon: "👨‍🏫",
        title: "Expert Faculty",
        desc: "Subject specialists with 10+ years in competitive prep — not generalists. Former IIM, Ivy, and LSE alumni guide your strategy at every phase.",
        revealClass: "revealRight",
        delayClass: "d2",
    },
];

export default function WhyEduQuest() {
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
        <section className={styles.why} id="why">
            <div className={styles.container}>

                {/* Header */}
                <div ref={headerRef} className={`${styles.whyHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>Why EduQuest</div>
                    <h2 className={styles.secHeading}>
                        India&apos;s Most Strategic
                        <br />
                        <em>Admission Programme</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        We don&apos;t just prepare students for tests — we build profiles
                        that change what&apos;s possible.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.whyGrid}>
                    {cards.map((card, i) => (
                        <div
                            key={card.title}
                            ref={(el) => { cardRefs.current[i] = el; }}
                            className={[
                                styles.whyCard,
                                styles[card.revealClass],
                                styles[card.delayClass],
                            ].join(" ")}
                        >
                            <div className={styles.whyIconWrap}>{card.icon}</div>
                            <div className={styles.whyTitle}>{card.title}</div>
                            <p className={styles.whyDesc}>{card.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}