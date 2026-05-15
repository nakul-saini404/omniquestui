"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyEduQuestSection.module.css";

type AnimDir = "left" | "up" | "right";

interface WhyCard {
    icon: string;
    title: string;
    desc: string;
    animDir: AnimDir;
    delay: string;
}

const cards: WhyCard[] = [
    {
        icon: "🎯",
        title: "Get Personal Attention",
        desc: "EduQuest strives to provide individual attention to each student in a friendly manner. Our experts are flexible with their schedules and will accept assignments that best suit your needs. We appreciate what we do and place a high value on your requirements.",
        animDir: "left",
        delay: "0.08s",
    },
    {
        icon: "💡",
        title: "Distinctive & Different Advice",
        desc: "We distinguish ourselves because of the high quality of our services. We give the correct advice for the right route at the right time. We assign real value to your decision to pursue higher education and assist you in identifying and realizing your potential.",
        animDir: "up",
        delay: "0.16s",
    },
    {
        icon: "🤝",
        title: "Outstanding Commitment & Delivery",
        desc: "Our services are our promises to you, and we follow through on them. We don't try to achieve the impossible or make false promises. We speak the truth and act with responsibility and integrity — every single time.",
        animDir: "right",
        delay: "0.24s",
    },
    {
        icon: "🏆",
        title: "Maximum Success Rate",
        desc: "We assist with the submission of accurate and error-free admission and visa applications. When we accept an assignment, we complete it on time and according to the guidelines. Our goal is to maintain a 100% success rate at all times.",
        animDir: "left",
        delay: "0.16s",
    },
    {
        icon: "👩‍💼",
        title: "Trained Professionals",
        desc: "You can count on and trust our team of qualified professionals. You will receive services from the best in the industry. Only accurate, factual, and up-to-date information is provided, and your information is treated with strict confidentiality.",
        animDir: "up",
        delay: "0.24s",
    },
    {
        icon: "🔓",
        title: "No Obligation",
        desc: "We offer additional information about higher education in other countries; however, you are under no obligation to apply through us and have complete control over your decision. We value your opinion and respect your educational choices completely.",
        animDir: "right",
        delay: "0.16s",
    },
];

/* Map direction → CSS module class */
const dirClass: Record<AnimDir, string> = {
    left: styles.revealLeft,
    up: styles.revealUp,
    right: styles.revealRight,
};

export default function WhyEduQuestSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

        if (headerRef.current) observer.observe(headerRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);
        cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.why} id="why">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    className={`${styles.whyHeader} ${styles.revealUp}`}
                    ref={headerRef}
                >
                    <div className={styles.secLabel}>Why EduQuest</div>
                    <h2 className={styles.secHeading}>
                        Why Choose EduQuest —{" "}
                        <em>Best Overseas Education</em>
                        <br />
                        Consultants in India
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Get the complete guidance with EduQuest who provide visa, counseling,
                        program, help, guidance, free counseling, and university admissions.
                    </p>
                </div>

                {/* ── Cards Grid ── */}
                <div className={styles.whyGrid}>
                    {cards.map((card, i) => (
                        <div
                            key={card.title}
                            className={`${styles.whyCard} ${dirClass[card.animDir]}`}
                            style={{ transitionDelay: card.delay }}
                            ref={(el) => { cardRefs.current[i] = el; }}
                        >
                            <div className={styles.whyIconWrap}>{card.icon}</div>
                            <div className={styles.whyTitle}>{card.title}</div>
                            <p className={styles.whyDesc}>{card.desc}</p>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div
                    className={`${styles.ctaWrap} ${styles.revealUp}`}
                    style={{ transitionDelay: "0.32s" }}
                    ref={ctaRef}
                >
                    <a
                        href="/contact-us"
                        className={styles.btnGold}
                    >
                        Request a Call Back →
                    </a>
                </div>

            </div>
        </section>
    );
}