"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyStudyVault.module.css";

/* ─────────────────────────────────────────
   Static card data
───────────────────────────────────────── */
const CARDS = [
    {
        icon: "♾️",
        title: "Zero Expiry — Hours That Last Forever",
        desc: "Your purchased hours NEVER expire. Use them at your own convenience — this month, next month, or even next year. No pressure, no wastage.",
    },
    {
        icon: "📚",
        title: "Learn Any Subject — Total Freedom",
        desc: "Switch between SAT, AP, IELTS, IB, IGCSE, Math, Science, Coding — or any subject you need. One package covers everything.",
    },
    {
        icon: "📅",
        title: "Use Across Months — No Monthly Lock-in",
        desc: "Spread your hours across as many months as you need. Busy this week? No problem — your hours will be right there when you're ready.",
    },
    {
        icon: "💸",
        title: "Bigger Packages, Lower Prices",
        desc: "The more hours you purchase, the lower your per-hour rate. Commit more — save more. Smart learning, smarter spending.",
    },
];

/* ─────────────────────────────────────────
   Why StudyVault Section
───────────────────────────────────────── */
export default function WhyStudyVault() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const [leftIn, setLeftIn] = useState(false);
    const [rightIn, setRightIn] = useState(false);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.target === leftRef.current && e.isIntersecting) {
                        setLeftIn(true);
                        io.unobserve(e.target);
                    }
                    if (e.target === rightRef.current && e.isIntersecting) {
                        setRightIn(true);
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        if (leftRef.current) io.observe(leftRef.current);
        if (rightRef.current) io.observe(rightRef.current);
        return () => io.disconnect();
    }, []);

    return (
        <section className={styles.section} id="why-studyvault">
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* ── Left: heading + CTA ── */}
                    <div
                        ref={leftRef}
                        className={`${styles.left} ${leftIn ? styles.revealIn : styles.revealLeft}`}
                    >
                        <div className={styles.secLabel}>Why StudyVault</div>

                        <h2 className={styles.secHeading}>
                            Why Choose Our
                            <br />
                            <em>StudyVault Package?</em>
                        </h2>

                        <p className={styles.secSub}>
                            Learning shouldn't be a race. StudyVault puts you in control —
                            no deadlines, no subject restrictions, no pressure. Just pure
                            learning on your own terms.
                        </p>

                        <a
                            href="/contact-us"
                            className={styles.btnGold}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started Today →
                        </a>
                    </div>

                    {/* ── Right: feature cards ── */}
                    <div
                        ref={rightRef}
                        className={`${styles.cards} ${rightIn ? styles.revealIn : styles.revealRight}`}
                    >
                        {CARDS.map((card, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardIcon}>{card.icon}</div>
                                <div className={styles.cardBody}>
                                    <div className={styles.cardTitle}>{card.title}</div>
                                    <div className={styles.cardDesc}>{card.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}