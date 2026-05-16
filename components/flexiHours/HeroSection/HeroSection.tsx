"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";

/* ─────────────────────────────────────────
   Animated counter hook — ease-out-expo
   (mirrors the original vanilla JS counter)
───────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, start = false): number {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;
        let rafId: number;
        const startTime = performance.now();

        const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out-expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.floor(ease * target));
            if (progress < 1) {
                rafId = requestAnimationFrame(step);
            } else {
                setValue(target);
            }
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [start, target, duration]);

    return value;
}

/* ─────────────────────────────────────────
   Single animated stat cell
───────────────────────────────────────── */
interface StatProps {
    prefix?: string;
    value: number;
    suffix: string;
    label: string;
    animate: boolean;
    delay?: number;
}

function AnimatedStat({
    prefix = "",
    value,
    suffix,
    label,
    animate,
    delay = 0,
}: StatProps) {
    const [localStart, setLocalStart] = useState(false);
    const count = useCountUp(value, 1800, localStart);

    useEffect(() => {
        if (!animate) return;
        const t = setTimeout(() => setLocalStart(true), delay);
        return () => clearTimeout(t);
    }, [animate, delay]);

    return (
        <div className={styles.heroStat}>
            <span className={styles.heroStatVal}>
                {prefix}
                {localStart ? count : 0}
                {suffix}
            </span>
            <span className={styles.heroStatLbl}>{label}</span>
        </div>
    );
}

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const STATS: Omit<StatProps, "animate">[] = [
    { value: 500, suffix: "+", label: "Happy Students", delay: 0 },
    { value: 100, suffix: "%", label: "Success Ratio", delay: 160 },
    { prefix: "$", value: 5, suffix: "M+", label: "In Scholarships", delay: 320 },
    { value: 10, suffix: "+", label: "Years of Service", delay: 480 },
];

const SUBJECTS = [
    { emoji: "📐", label: "Math" },
    { emoji: "🔬", label: "Science" },
    { emoji: "💼", label: "Business" },
    { emoji: "💻", label: "Coding" },
    { emoji: "📖", label: "English" },
    { emoji: "🌍", label: "Languages" },
    { emoji: "📊", label: "AP Subjects" },
    { emoji: "🧪", label: "IB Courses" },
];

/* ─────────────────────────────────────────
   Hero Section — main export
───────────────────────────────────────── */
export default function HeroSection() {
    const leftRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [leftIn, setLeftIn] = useState(false);
    const [cardIn, setCardIn] = useState(false);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.target === leftRef.current && e.isIntersecting) {
                        setLeftIn(true);
                        io.unobserve(e.target);
                    }
                    if (e.target === cardRef.current && e.isIntersecting) {
                        setCardIn(true);
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        if (leftRef.current) io.observe(leftRef.current);
        if (cardRef.current) io.observe(cardRef.current);
        return () => io.disconnect();
    }, []);

    return (
        <section className={styles.hero} id="hero">
            {/* diagonal accent strip */}
            <div className={styles.heroStrip} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.heroInner}>

                    {/* ── Left: copy ── */}
                    <div
                        ref={leftRef}
                        className={`${styles.heroLeft} ${leftIn ? styles.slideIn : styles.slideFromLeft
                            }`}
                    >
                        <div className={styles.heroBadge}>
                            <span className={styles.heroBadgeLine} />
                            EduQuest — Exclusive Learning Package
                        </div>

                        <h1 className={styles.heroH1}>
                            StudyVault&nbsp;—<br />
                            Learn <em>Anytime,</em>
                            <br />
                            Any Subject!
                        </h1>

                        <p className={styles.heroSub}>
                            An exclusive learning hours package designed for students and
                            professionals who want to study at their own pace, across multiple
                            subjects — with zero restrictions and zero expiry.
                        </p>

                        <div className={styles.heroBtns}>
                            <a
                                href="/contact-us"
                                className={styles.btnGold}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ▶ Book Free Consultation
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=919958041888&text=Hi%20Team%20EduQuest"
                                className={styles.btnOutlineGold}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* ── Right: stat card ── */}
                    <div
                        ref={cardRef}
                        className={`${styles.heroStatCard} ${cardIn ? styles.slideIn : styles.slideFromRight
                            }`}
                    >
                        <div className={styles.heroStatCardTitle}>
                            Why Students Love StudyVault
                        </div>

                        <div className={styles.heroStats}>
                            {STATS.map((s) => (
                                <AnimatedStat key={s.label} {...s} animate={cardIn} />
                            ))}
                        </div>

                        <div className={styles.heroSubjects}>
                            {SUBJECTS.map((s) => (
                                <span key={s.label} className={styles.subjectTag}>
                                    {s.emoji} {s.label}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}