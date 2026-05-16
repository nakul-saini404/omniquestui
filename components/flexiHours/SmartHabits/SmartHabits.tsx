"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./SmartHabits.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface HabitItem {
    icon: string;
    title: string;
    desc: string;
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const DONT_ITEMS: HabitItem[] = [
    {
        icon: "⚠️",
        title: "Don't hoard hours without a plan",
        desc: "Buying 50 hours with no study schedule means you'll end up using them randomly. Set a weekly target before you buy.",
    },
    {
        icon: "⚠️",
        title: "Don't switch subjects every single session",
        desc: "Freedom to switch is great — but jumping topics every hour breaks continuity. Build depth first, then breadth.",
    },
    {
        icon: "⚠️",
        title: "Don't skip revision between sessions",
        desc: "Each session builds on the last. Skipping practice between classes wastes your mentor's time and your money.",
    },
    {
        icon: "⚠️",
        title: "Don't use StudyVault as a last-minute cram",
        desc: "These hours are most effective when spread over weeks and months — not burned in 3 days before an exam.",
    },
    {
        icon: "⚠️",
        title: "Don't ignore your mentor's feedback",
        desc: "Your mentor knows where you're weak. Avoiding those areas and only doing what's comfortable is a sure path to stagnation.",
    },
];

const DO_ITEMS: HabitItem[] = [
    {
        icon: "✅",
        title: "Plan your weekly learning goal before booking",
        desc: "Decide how many hours per week you'll use — then purchase the package that covers 4–6 weeks for the best rate.",
    },
    {
        icon: "✅",
        title: "Focus on one subject for 3–4 sessions before switching",
        desc: "Get meaningful progress in one area before pivoting. Consistency within a subject builds genuine mastery.",
    },
    {
        icon: "✅",
        title: "Practice for at least 1 hour after every session",
        desc: "The learning compounds when you reinforce what your mentor taught. 1 hour of session + 1 hour of self-practice = 2x the result.",
    },
    {
        icon: "✅",
        title: "Start early and spread hours over weeks",
        desc: "The best StudyVault students start 3–4 months before their exam and use 2–3 hours per week consistently. Long-term beats short-burst every time.",
    },
    {
        icon: "✅",
        title: "Actively engage with mentor feedback",
        desc: "Ask your mentor to focus on weak areas first. Address the gaps head-on — that's where the biggest score gains come from.",
    },
];

/* delay class map */
const ITEM_DELAYS = [
    styles.itemDelay1,
    styles.itemDelay2,
    styles.itemDelay3,
    styles.itemDelay4,
    styles.itemDelay5,
];

/* ─────────────────────────────────────────
   Generic IntersectionObserver hook
───────────────────────────────────────── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ─────────────────────────────────────────
   Single habit item
───────────────────────────────────────── */
interface HabitItemProps {
    item: HabitItem;
    index: number;
    type: "dont" | "do";
}

function HabitRow({ item, index, type }: HabitItemProps) {
    const { ref, visible } = useReveal(0.1);

    const baseClass = type === "dont" ? styles.dontItem : styles.doItem;
    const titleClass = type === "dont" ? styles.dontTitle : styles.doTitle;
    const delayClass = ITEM_DELAYS[index] ?? styles.itemDelay5;

    const className = [baseClass, delayClass, visible ? styles.visible : ""]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={ref} className={className}>
            <span className={styles.itemIcon}>{item.icon}</span>
            <div className={styles.itemBody}>
                <div className={titleClass}>{item.title}</div>
                <div className={styles.itemDesc}>{item.desc}</div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Main SmartHabits section
───────────────────────────────────────── */
export default function SmartHabits() {
    const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
    const { ref: leftRef, visible: leftVisible } = useReveal(0.1);
    const { ref: rightRef, visible: rightVisible } = useReveal(0.1);

    return (
        <section className={styles.section} id="dont">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    ref={headerRef}
                    className={[styles.header, headerVisible ? styles.visible : ""]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className={styles.sectionLabel}>Smart Habits</div>
                    <h2 className={styles.heading}>
                        Common Mistakes vs. <em>The Right Way</em>
                    </h2>
                    <p className={styles.subText}>
                        StudyVault gives you freedom — but here&apos;s how to use it wisely
                        to get the best results.
                    </p>
                </div>

                {/* ── Two-column grid ── */}
                <div className={styles.grid}>

                    {/* ── Left: What NOT to do ── */}
                    <div
                        ref={leftRef}
                        className={[styles.columnLeft, leftVisible ? styles.visible : ""]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <div className={`${styles.colLabel} ${styles.bad}`}>
                            ❌ What Not To Do
                        </div>
                        <div className={styles.itemList}>
                            {DONT_ITEMS.map((item, i) => (
                                <HabitRow key={item.title} item={item} index={i} type="dont" />
                            ))}
                        </div>
                    </div>

                    {/* ── Right: What you SHOULD do ── */}
                    <div
                        ref={rightRef}
                        className={[styles.columnRight, rightVisible ? styles.visible : ""]
                            .filter(Boolean)
                            .join(" ")}
                    >
                        <div className={`${styles.colLabel} ${styles.good}`}>
                            ✅ What You Should Do Instead
                        </div>
                        <div className={styles.itemList}>
                            {DO_ITEMS.map((item, i) => (
                                <HabitRow key={item.title} item={item} index={i} type="do" />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}