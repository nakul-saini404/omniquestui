"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const stats = [
    { target: 30, suffix: "", label: "Years of Excellence" },
    { target: 500, suffix: "+", label: "Students Placed" },
    { target: 1590, suffix: "", label: "Top SAT Score" },
    { target: 8, suffix: "M+", label: "Scholarships (USD)" },
    { target: 2000, suffix: "+", label: "Universities Guided" },
];

function animateCount(
    el: HTMLElement,
    target: number,
    suffix: string
): void {
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

export default function HeroSection() {
    const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fade-up animation for hero inner
        const inner = innerRef.current;
        if (inner) {
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
            observer.observe(inner);
            return () => observer.disconnect();
        }
    }, []);

    useEffect(() => {
        // Counter animation
        const observers: IntersectionObserver[] = [];

        statRefs.current.forEach((el, i) => {
            if (!el) return;
            const { target, suffix } = stats[i];
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animateCount(entry.target as HTMLElement, target, suffix);
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.5 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={`${styles.heroInner} ${styles.fadeUp}`} ref={innerRef}>

                    <div className={styles.heroEyebrow}>About EduQuest</div>

                    <h1 className={styles.heroHeading}>
                        Positioning Students for the<br />
                        World&apos;s Most Selective Universities —<br />
                        <span className={styles.since}>Since 1995</span>
                    </h1>

                    <p className={styles.heroSub}>
                        We don&apos;t just teach students to score higher.<br />
                        We <strong>architect admissions identities</strong> — aligning academics,
                        narrative, and profile into a coherent positioning that gets students into
                        the universities they deserve.
                    </p>

                    <div className={styles.heroStats}>
                        {stats.map((stat, i) => (
                            <div className={styles.heroStat} key={stat.label}>
                                <span
                                    className={styles.heroStatNum}
                                    ref={(el) => { statRefs.current[i] = el; }}
                                >
                                    0{stat.suffix}
                                </span>
                                <span className={styles.heroStatLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}