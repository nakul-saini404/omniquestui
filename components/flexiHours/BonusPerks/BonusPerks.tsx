"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./BonusPerks.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface Perk {
    icon: string;
    title: string;
    description: string;
    stat: {
        value: number;
        prefix?: string;
        suffix: string;
    };
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const PERKS: Perk[] = [
    {
        icon: "🧘",
        title: "No Rush Learning",
        description:
            "Study at your absolute convenience — morning, afternoon, evening, or weekend. Your schedule, your pace, your rules. No expiry means you'll never feel rushed or pressured to use up hours.",
        stat: { value: 0, suffix: "% Expiry", prefix: "" },
    },
    {
        icon: "🔓",
        title: "Total Subject Freedom",
        description:
            "Use your hours across any subject, mix and match as your priorities shift, and switch your focus with zero penalty. One pool of hours — infinite learning directions. Perfect for students juggling multiple exams.",
        stat: { value: 10, suffix: "+ Subjects" },
    },
    {
        icon: "🎁",
        title: "Exclusive Discounts & Offers",
        description:
            "StudyVault students get access to limited-time discounts on top of tiered pricing. Book more hours during special offer windows and maximise your savings even further. Early birds always win.",
        stat: { value: 47, suffix: "% Max Savings" },
    },
];

/* ─────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────── */
function useCounter(
    target: number,
    isActive: boolean,
    duration = 1800
): number {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isActive || target === 0) return;

        let startTime: number | null = null;
        let rafId: number;

        function step(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out-expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(ease * target));
            if (progress < 1) {
                rafId = requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        }

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [isActive, target, duration]);

    return count;
}

/* ─────────────────────────────────────────
   Single perk card
───────────────────────────────────────── */
const DELAY_CLASSES = [styles.delay1, styles.delay2, styles.delay3] as const;

interface PerkCardProps {
    perk: Perk;
    index: number;
}

function PerkCard({ perk, index }: PerkCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    const count = useCounter(perk.stat.value, visible);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const cardClass = [
        styles.card,
        DELAY_CLASSES[index % 3],
        visible ? styles.visible : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={cardRef} className={cardClass}>
            {/* Emoji icon */}
            <span className={styles.cardIcon}>{perk.icon}</span>

            {/* Animated stat — shown when value > 0, "0% Expiry" rendered as label */}
            {perk.stat.value === 0 ? (
                <span className={styles.statNumber}>
                    {perk.stat.prefix ?? ""}0{perk.stat.suffix}
                </span>
            ) : (
                <span className={styles.statNumber}>
                    {perk.stat.prefix ?? ""}
                    {count}
                    {perk.stat.suffix}
                </span>
            )}

            <div className={styles.cardTitle}>{perk.title}</div>
            <div className={styles.cardDesc}>{perk.description}</div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Main Bonus Perks section
───────────────────────────────────────── */
export default function BonusPerks() {
    const headerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const [headerVisible, setHeaderVisible] = useState(false);
    const [ctaVisible, setCtaVisible] = useState(false);

    /* observe header */
    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeaderVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* observe cta */
    useEffect(() => {
        const el = ctaRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCtaVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} id="bonus">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    ref={headerRef}
                    className={[styles.header, headerVisible ? styles.visible : ""].join(" ")}
                >
                    <div className={styles.sectionLabel}>Bonus Perks</div>
                    <h2 className={styles.heading}>
                        Bonus Perks <em>For You!</em>
                    </h2>
                    <p className={styles.subText}>
                        On top of the flexible hours, every StudyVault student gets
                        exclusive extras that make the difference.
                    </p>
                </div>

                {/* ── Cards ── */}
                <div className={styles.grid}>
                    {PERKS.map((perk, index) => (
                        <PerkCard key={perk.title} perk={perk} index={index} />
                    ))}
                </div>

                {/* ── CTA ── */}
                <div
                    ref={ctaRef}
                    className={[styles.cta, ctaVisible ? styles.visible : ""].join(" ")}
                >
                    <a
                        href="gdb /contact-us"
                        className={styles.ctaButton}
                    >
                        ▶ Book Your StudyVault Now
                    </a>
                    <p className={styles.ctaNote}>
                        Limited time offer! Book your hours now and start your journey
                        toward excellence.
                    </p>
                </div>

            </div>
        </section>
    );
}