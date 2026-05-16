"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface BenefitCard {
    icon: string;
    title: string;
    description: string;
    stat?: { value: number; suffix: string; prefix?: string };
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const BENEFITS: BenefitCard[] = [
    {
        icon: "⏱️",
        title: "No Rush, No Pressure",
        description:
            "Study completely at your own pace. There are no monthly quotas to hit, no deadlines to stress over — just learning when you feel ready.",
        stat: { value: 0, suffix: "" }, // no stat for this card
    },
    {
        icon: "🔄",
        title: "Switch Subjects Freely",
        description:
            "Pivot from SAT prep to AP Chemistry to IELTS writing — all within the same package. Your hours are fully interchangeable across subjects.",
        stat: { value: 10, suffix: "+ Subjects" },
    },
    {
        icon: "💰",
        title: "Exclusive Volume Discounts",
        description:
            "Get significantly lower rates as you book more hours. The 40–50 hour package offers up to 47% savings on online classes compared to the base rate.",
        stat: { value: 47, suffix: "% Savings" },
    },
    {
        icon: "📱",
        title: "Online & Offline Options",
        description:
            "Choose between live 1-on-1 online sessions from home or in-person classes at EduQuest's Gurugram or Bangalore centres — whichever suits you best.",
        stat: { value: 2, suffix: " Modes" },
    },
    {
        icon: "👨‍🏫",
        title: "Expert EduQuest Mentors",
        description:
            "All sessions are taught by EduQuest's vetted, experienced mentors — the same team behind India's top SAT, AP, and overseas admissions outcomes.",
        stat: { value: 500, suffix: "+ Students" },
    },
    {
        icon: "📈",
        title: "Track Progress Every Session",
        description:
            "Each session is outcome-driven. Your mentor tracks your progress, adjusts the plan, and ensures every hour invested is moving you forward.",
        stat: { value: 100, suffix: "% Tracked" },
    },
];

/* ─────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────── */
function useCounter(target: number, isActive: boolean, duration = 1800) {
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
   Single benefit card
───────────────────────────────────────── */
interface CardProps {
    benefit: BenefitCard;
    index: number;
}

function BenefitCardItem({ benefit, index }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    // Alternating direction: even index → from left, odd → from right
    const isFromRight = index % 2 !== 0;

    // Delay cycles: 0→d1, 1→d2, 2→d3, 3→d1 …
    const delayClass = [styles.delay1, styles.delay2, styles.delay3][index % 3];

    const count = useCounter(benefit.stat?.value ?? 0, visible);

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

    const classNames = [
        styles.card,
        isFromRight ? styles.slideFromRight : "",
        visible ? styles.visible : "",
        delayClass,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={cardRef} className={classNames}>
            <div className={styles.iconWrap}>{benefit.icon}</div>

            {/* Animated stat number — only shown when stat.value > 0 */}
            {benefit.stat && benefit.stat.value > 0 && (
                <span className={styles.statNumber}>
                    {benefit.stat.prefix ?? ""}
                    {count}
                    {benefit.stat.suffix}
                </span>
            )}

            <div className={styles.cardTitle}>{benefit.title}</div>
            <div className={styles.cardDesc}>{benefit.description}</div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Main Benefits section
───────────────────────────────────────── */
export default function Benefits() {
    return (
        <section className={styles.section} id="benefits">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.sectionLabel}>Benefits</div>
                    <h2 className={styles.heading}>
                        Everything You Gain with <em>StudyVault</em>
                    </h2>
                    <p className={styles.subText}>
                        More than just flexible hours — it&apos;s a smarter way to learn,
                        save, and grow.
                    </p>
                </div>

                {/* Cards grid */}
                <div className={styles.grid}>
                    {BENEFITS.map((benefit, index) => (
                        <BenefitCardItem key={benefit.title} benefit={benefit} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}