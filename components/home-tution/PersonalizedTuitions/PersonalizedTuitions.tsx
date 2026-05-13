"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./PersonalizedTuitions.module.css";

interface FeatureCard {
    icon: string;
    title: string;
    desc: string;
    imgSrc: string;
    imgAlt: string;
}

const features: FeatureCard[] = [
    {
        icon: "🎯",
        title: "One-on-One Teaching",
        desc: "Get personalised school tuition classes for students in Classes 1–12. Personalised learning improves the process significantly with direct attention from an expert.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "One-on-one teaching",
    },
    {
        icon: "👩‍🏫",
        title: "Expert Teachers",
        desc: "Every academic subject is taught by highly skilled and trained instructors — all pros at setting up school tuition classes, especially over the internet.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "Expert teachers",
    },
    {
        icon: "🔄",
        title: "Flexible Learning",
        desc: "Our best home tutors take a very flexible approach — modifying teachings in accordance with the student's rate of learning and adapting to each unique pace.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "Flexible learning",
    },
    {
        icon: "🏠",
        title: "Safe & Comfortable",
        desc: "No commute required. You won't have to stress about running late for a crucial class — study quickly and safely from the comfort of your own home.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "Safe and comfortable",
    },
    {
        icon: "💬",
        title: "Personalised Support",
        desc: "Connect with home tutors to get the aid you need — whether homework help or exam strategy — with the best school tuitions for Classes 6–12.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "Personalised support",
    },
    {
        icon: "💻",
        title: "Interactive Technology",
        desc: "Students can visualize ideas and improve comprehension through interactive classes — watching lectures again, doing activities, and reviewing at their own pace.",
        imgSrc: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/young-student-sitting-table-use-laptop-scaled-pjtqx062svcnjgj68t3dxlf3yo08qib1qc5dh9cc3k.jpg",
        imgAlt: "Interactive technology",
    },
];

const CARDS_PER_PAGE = 3;

function ChevronLeft() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

export default function PersonalizedTuitions() {
    const [activeCard, setActiveCard] = useState(0);
    const [page, setPage] = useState(0);
    const [mounted, setMounted] = useState(false);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const totalPages = Math.ceil(features.length / CARDS_PER_PAGE);
    const visibleCards = features.slice(
        page * CARDS_PER_PAGE,
        page * CARDS_PER_PAGE + CARDS_PER_PAGE
    );

    // Absolute index of the active card
    const absActive = page * CARDS_PER_PAGE + activeCard;

    const goToPage = useCallback((p: number) => {
        const clamped = Math.max(0, Math.min(p, totalPages - 1));
        setPage(clamped);
        setActiveCard(0);
    }, [totalPages]);

    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setActiveCard((prev) => {
                const nextLocal = prev + 1;
                if (nextLocal >= CARDS_PER_PAGE) {
                    setPage((p) => {
                        const nextPage = (p + 1) % totalPages;
                        return nextPage;
                    });
                    return 0;
                }
                return nextLocal;
            });
        }, 3000);
    }, [totalPages]);

    useEffect(() => {
        setMounted(true);
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [startAuto]);

    const handleCardClick = (localIdx: number) => {
        setActiveCard(localIdx);
        startAuto();
    };

    const currentFeature = features[absActive] ?? features[0];

    return (
        <section className={styles.section} id="personalized-tuitions" suppressHydrationWarning>
            <div className={styles.container} suppressHydrationWarning>
                <div className={styles.grid} suppressHydrationWarning>

                    {/* ── LEFT: Feature cards carousel ── */}
                    <div
                        className={styles.carouselCol}
                        onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
                        onMouseLeave={startAuto}
                    >
                        {visibleCards.map((card, i) => (
                            <div
                                key={page * CARDS_PER_PAGE + i}
                                className={`${styles.featureCard}${i === activeCard ? " " + styles.active : ""}`}
                                onClick={() => handleCardClick(i)}
                            >
                                <div className={styles.iconWrap} suppressHydrationWarning>{card.icon}</div>
                                <div className={styles.featureCardText}>
                                    <div className={styles.featureCardTitle}>{card.title}</div>
                                    <div className={styles.featureCardDesc}>{card.desc}</div>
                                </div>
                            </div>
                        ))}

                        {/* Controls */}
                        <div className={styles.carouselControls}>
                            <button
                                className={styles.carouselBtn}
                                onClick={() => goToPage(page - 1)}
                                disabled={page === 0}
                                aria-label="Previous"
                            >
                                <ChevronLeft />
                            </button>

                            <div className={styles.carouselDots}>
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.dot}${i === page ? " " + styles.dotActive : ""}`}
                                        onClick={() => goToPage(i)}
                                        aria-label={`Page ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <span className={styles.carouselCount}>
                                {page + 1} / {totalPages}
                            </span>

                            <button
                                className={styles.carouselBtn}
                                onClick={() => goToPage(page + 1)}
                                disabled={page === totalPages - 1}
                                aria-label="Next"
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        {/* Stat chips */}
                        <div className={styles.statChips}>
                            <div className={styles.statChip}>
                                <span className={styles.statChipNum}>30+</span>
                                <span className={styles.statChipLabel}>Years</span>
                            </div>
                            <div className={styles.statChip}>
                                <span className={styles.statChipNum}>10K+</span>
                                <span className={styles.statChipLabel}>Students</span>
                            </div>
                            <div className={styles.statChip}>
                                <span className={styles.statChipNum}>6–12</span>
                                <span className={styles.statChipLabel}>Classes</span>
                            </div>
                            <div className={styles.statChip}>
                                <span className={styles.statChipNum}>4</span>
                                <span className={styles.statChipLabel}>Boards</span>
                            </div>
                        </div>

                        <a
                            href="/contact-us"
                            className={styles.cta}
                        >
                            Enrol Now
                        </a>
                    </div>

                    {/* ── LEFT: sticky text + dynamic image ── */}
                    <div className={styles.textCol}>
                        <div className={styles.sectionLabel}>Personalized Online School Tuitions</div>
                        <h2 className={styles.heading}>Learn from Anywhere,<br />Excel Everywhere</h2>

                        {/* Image (left) + Description (right) side by side */}
                        <div className={styles.contentRow}>
                            <div className={styles.imgWrap}>
                                <img
                                    className={styles.img}
                                    src={currentFeature.imgSrc}
                                    alt={currentFeature.imgAlt}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.body}>
                                <p>
                                    In this interactive teaching environment, computers and internet
                                    connections are used by both the students and the tutors. Online
                                    school tuition is one of those breakthroughs that allow home
                                    tutors to teach students from anywhere in the world.
                                </p>
                                <p>
                                    EduQuest is the most trusted learning platform for 6th to
                                    12th-grade students — utilizing the most recent learning
                                    technology and offering school tuitions in Delhi and Gurgaon.
                                </p>
                                <p>
                                    Online school tuitions has been found to be better than
                                    traditional in-person tutoring, thanks to technological
                                    advancements. Certain tools and strategies must be used to
                                    create a stimulating and innovative environment where a
                                    student&apos;s mind can grow.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}