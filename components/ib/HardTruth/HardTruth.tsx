"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HardTruth.module.css";

/* ─── Types ─── */
interface FailCard {
    emoji: string;
    title: string;
    description: string;
    fix: string;
}

/* ─── Data ─── */
const cards: FailCard[] = [
    {
        emoji: "😰",
        title: "Weak Conceptual Foundation",
        description:
            "Students rush through theory to practise questions, but IB exams reward deep understanding. Without a solid foundation, every exam paper becomes a guessing game.",
        fix: "We build concepts first, always — before any exam technique.",
    },
    {
        emoji: "📝",
        title: "Poor IA & EE Performance",
        description:
            "Internal Assessments and the Extended Essay account for a significant portion of marks. Many students treat them as afterthoughts, costing them crucial points.",
        fix: "We guide every stage from topic selection to final draft.",
    },
    {
        emoji: "⏱️",
        title: "Exam Time Mismanagement",
        description:
            "Running out of time mid-paper is one of the most common causes of lost marks. Students who haven't practised under timed conditions leave answers incomplete.",
        fix: "Timed past-paper drills are built into every revision cycle.",
    },
    {
        emoji: "🗂️",
        title: "Ignoring Command Terms",
        description:
            'IB exams use precise command terms — "describe," "explain," "evaluate," "discuss." Students who don\'t know the difference write the wrong answer type and lose marks.',
        fix: "We dedicate sessions specifically to command-term mastery.",
    },
    {
        emoji: "📉",
        title: "Insufficient Past Paper Practice",
        description:
            "Familiarity with past paper question styles is crucial. Students who study theory without practising exam questions are unprepared for the specific way IB tests knowledge.",
        fix: "Style matters as much as content — we practise both together.",
    },
    {
        emoji: "🧠",
        title: "Last-Minute Cramming",
        description:
            "IB content is too vast to cram. Students who don't follow a structured, spaced-repetition revision plan find themselves overwhelmed when it matters most.",
        fix: "We provide structured revision plans months before exams.",
    },
];

/* ─── Component ─── */
export default function HardTruth() {
    const [visible, setVisible] = useState(false);
    const [flipped, setFlipped] = useState<Record<number, boolean>>({});
    const [hovered, setHovered] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    /* Scroll reveal */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const toggleFlip = (i: number) => {
        setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));
    };

    return (
        <section
            id="students-fail"
            ref={sectionRef}
            className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
        >
            {/* Decorative background pattern */}
            <div className={styles.bgPattern} aria-hidden="true" />

            {/* Header */}
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>The Hard Truth</span>
                <h2 className={styles.sectionTitle}>
                    Why IB Students Fail —{" "}
                    <span className={styles.titleAccent}>And How We Fix It</span>
                </h2>
                <p className={styles.sectionSub}>
                    Understanding the root causes of underperformance is the first step to
                    a 7. EduQuest's curriculum is specifically designed to address every
                    one of these pitfalls.
                </p>
                <p className={styles.flipHint}>
                    <span className={styles.hintIcon}>↩</span> Click any card to reveal
                    how we fix it
                </p>
            </div>

            {/* Cards grid */}
            <div className={styles.grid}>
                {cards.map((card, i) => (
                    <div
                        key={card.title}
                        className={`${styles.cardWrap} ${visible ? styles.cardVisible : ""
                            }`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div
                            className={`${styles.cardInner} ${flipped[i] ? styles.cardFlipped : ""
                                }`}
                            onClick={() => toggleFlip(i)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={!!flipped[i]}
                            aria-label={`${card.title} — click to see the fix`}
                            onKeyDown={(e) => e.key === "Enter" && toggleFlip(i)}
                        >
                            {/* ── FRONT ── */}
                            <div className={styles.cardFront}>
                                {/* red accent bar */}
                                <div className={styles.accentBar} aria-hidden="true" />

                                {/* pulse ring on hover */}
                                {hovered === i && !flipped[i] && (
                                    <div className={styles.pulseRing} aria-hidden="true" />
                                )}

                                <div className={styles.emojiWrap}>
                                    <span className={styles.emoji}>{card.emoji}</span>
                                </div>
                                <h4 className={styles.cardTitle}>{card.title}</h4>
                                <p className={styles.cardDesc}>{card.description}</p>

                                <div className={styles.flipCue}>
                                    <span className={styles.flipCueIcon}>↩</span>
                                    <span>See the fix</span>
                                </div>
                            </div>

                            {/* ── BACK ── */}
                            <div className={styles.cardBack}>
                                <div className={styles.backGlow} aria-hidden="true" />
                                <div className={styles.backEmojiWrap}>
                                    <span className={styles.backEmoji}>✅</span>
                                </div>
                                <h4 className={styles.backTitle}>How We Fix It</h4>
                                <p className={styles.backOriginalTitle}>{card.title}</p>
                                <p className={styles.backFix}>{card.fix}</p>
                                <div className={styles.backCta}>
                                    <a
                                        href="https://eduquest.org.in/contact-us/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.backBtn}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Book a Free Demo →
                                    </a>
                                </div>
                                <div className={styles.flipCue} style={{ color: "rgba(255,255,255,0.45)" }}>
                                    <span className={styles.flipCueIcon}>↩</span>
                                    <span>Flip back</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}