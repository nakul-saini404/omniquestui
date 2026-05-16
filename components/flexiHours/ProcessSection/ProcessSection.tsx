"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ProcessSection.module.css";

/* ─────────────────────────────────────────
   Static step data
───────────────────────────────────────── */
const STEPS = [
    {
        num: 1,
        icon: "🎯",
        title: "Choose Your Hours",
        desc: "Pick the number of hours that suits your needs and budget — from as few as 1 hour to 50+ hours with the best per-hour rates.",
    },
    {
        num: 2,
        icon: "📅",
        title: "Book Anytime You Want",
        desc: "Use your hours whenever you're ready — today, next week, or next month. There's no expiration, so they're always there for you.",
    },
    {
        num: 3,
        icon: "📚",
        title: "Pick Any Subject",
        desc: "Math, Science, Business, Coding, SAT, AP, IB, IELTS — switch freely between subjects within the same hour package.",
    },
    {
        num: 4,
        icon: "🚀",
        title: "Unlock Best Rates & Learn!",
        desc: "Book bigger packages to unlock the lowest per-hour rates. The more you commit to learning, the more you save.",
    },
] as const;

/* ─────────────────────────────────────────
   Delays matching original .d1–.d4
───────────────────────────────────────── */
const DELAYS = [0.1, 0.24, 0.38, 0.52]; // seconds

/* ─────────────────────────────────────────
   Process Section — main export
───────────────────────────────────────── */
export default function ProcessSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [headerIn, setHeaderIn] = useState(false);
    const [cardsIn, setCardsIn] = useState<boolean[]>(STEPS.map(() => false));

    useEffect(() => {
        const entries: { el: Element; onEnter: () => void }[] = [];

        // header observer
        if (headerRef.current) {
            entries.push({
                el: headerRef.current,
                onEnter: () => setHeaderIn(true),
            });
        }

        // card observers
        cardRefs.current.forEach((el, i) => {
            if (el) {
                entries.push({
                    el,
                    onEnter: () =>
                        setCardsIn((prev) => {
                            const next = [...prev];
                            next[i] = true;
                            return next;
                        }),
                });
            }
        });

        const io = new IntersectionObserver(
            (observed) => {
                observed.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const found = entries.find((e) => e.el === entry.target);
                    if (found) {
                        found.onEnter();
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        entries.forEach(({ el }) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <section className={styles.section} id="how-it-works">
            <div className={styles.container}>

                {/* ── Section header ── */}
                <div
                    ref={headerRef}
                    className={`${styles.header} ${headerIn ? styles.revealIn : styles.revealUp
                        }`}
                >
                    <div className={styles.secLabel}>Process</div>
                    <h2 className={styles.secHeading}>
                        How Does <em>StudyVault Work?</em>
                    </h2>
                    <p className={styles.secSub}>
                        Four simple steps stand between you and completely stress-free,
                        flexible learning.
                    </p>
                </div>

                {/* ── Steps track ── */}
                <div className={styles.track}>
                    {/* decorative connector line (hidden below 1024 px) */}
                    <div className={styles.connectorLine} aria-hidden="true" />

                    <div className={styles.grid}>
                        {STEPS.map((step, i) => (
                            <div
                                key={step.num}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                className={`${styles.card} ${cardsIn[i] ? styles.revealIn : styles.revealUp
                                    }`}
                                style={
                                    !cardsIn[i]
                                        ? { transitionDelay: `${DELAYS[i]}s` }
                                        : { transitionDelay: `${DELAYS[i]}s` }
                                }
                            >
                                {/* numbered circle */}
                                <div className={styles.stepNum}>{step.num}</div>

                                {/* emoji icon */}
                                <div className={styles.stepIcon}>{step.icon}</div>

                                {/* text */}
                                <div className={styles.stepTitle}>{step.title}</div>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}