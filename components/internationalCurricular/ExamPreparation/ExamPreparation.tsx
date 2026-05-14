'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './ExamPreparation.module.css';

/* ── Types ── */
interface PrepCard {
    id: string;
    icon: string;
    iconBg: string;
    title: string;
    desc: string;
    chips: string[];
}

/* ── Data ── */
const cards: PrepCard[] = [
    {
        id: 'personalised-study',
        icon: '🎯',
        iconBg: '#fff3e0',
        title: 'Personalised Study Plan',
        desc: 'Every student receives a customised roadmap based on their current level, target grade, and timeline. No two students follow the exact same plan.',
        chips: ['Diagnostic Assessment', 'Weakness Mapping', 'Custom Schedule'],
    },
    {
        id: 'live-sessions',
        icon: '📹',
        iconBg: '#e8f5e9',
        title: 'Live Online Sessions',
        desc: 'Interactive one-on-one and small-group sessions with expert mentors. Real-time doubt clearing, whiteboard explanations, and concept breakdowns.',
        chips: ['1-on-1 Mentoring', 'Live Q&A', 'Recorded Replays'],
    },
    {
        id: 'past-paper',
        icon: '📋',
        iconBg: '#e3f2fd',
        title: 'Past Paper Practice',
        desc: 'Systematic past paper drilling from Cambridge and Edexcel question banks. Timed mock tests with detailed marking scheme feedback after each session.',
        chips: ['10+ Years Past Papers', 'Mark Scheme Analysis', 'Timed Mocks'],
    },
    {
        id: 'progress-tracking',
        icon: '📊',
        iconBg: '#fce4ec',
        title: 'Progress Tracking',
        desc: 'Regular assessments every 2–3 weeks to track improvement. Parents receive progress reports. Students can visualise their score growth over time.',
        chips: ['Regular Tests', 'Parent Reports', 'Score Analytics'],
    },
    {
        id: 'resource-library',
        icon: '📚',
        iconBg: '#f3e5f5',
        title: 'Resource Library',
        desc: 'Access to exhaustive study materials, notes, video explanations, formula sheets, and topical worksheets curated specifically for IGCSE and GCSE syllabi.',
        chips: ['Notes & Summaries', 'Topical Worksheets', 'Formula Sheets'],
    },
    {
        id: 'doubt-resolution',
        icon: '💬',
        iconBg: '#e8f5e9',
        title: 'Doubt Resolution',
        desc: 'WhatsApp and email doubt support between sessions ensures students never get stuck. Mentors respond within hours — not days.',
        chips: ['WhatsApp Support', '24hr Response', 'Between-Class Help'],
    },
];

/* ── Responsive perView helper ── */
function getPerView(): number {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

/* ── Component ── */
export default function ExamPreparation() {
    const [mounted, setMounted] = useState(false);
    const [page, setPage] = useState(0);
    const [perView, setPerView] = useState(3);

    useEffect(() => {
        const pv = getPerView();
        setPerView(pv);
        setMounted(true);

        const handleResize = () => {
            const next = getPerView();
            setPerView(next);
            setPage((p) => {
                const maxPage = Math.max(Math.ceil(cards.length / next) - 1, 0);
                return Math.min(p, maxPage);
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(cards.length / perView);

    const handlePrev = useCallback(() => setPage((p) => Math.max(p - 1, 0)), []);
    const handleNext = useCallback(
        () => setPage((p) => Math.min(p + 1, totalPages - 1)),
        [totalPages]
    );

    const visibleCards = mounted
        ? cards.slice(page * perView, page * perView + perView)
        : cards.slice(0, 3);

    if (!mounted) {
        return (
            <section className={styles.prepSection} id="preparation" suppressHydrationWarning>
                <div className={styles.container} suppressHydrationWarning />
            </section>
        );
    }

    return (
        <section className={styles.prepSection} id="preparation">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.textCenter}>
                    <div className={styles.sectionLabel}>Exam Online Preparation</div>
                    <h2 className={styles.sectionTitle}>
                        How We <em>Prepare You</em> for Success
                    </h2>
                    <p className={styles.sectionSub}>
                        Our structured online preparation system combines expert instruction, technology,
                        and personalised attention to get every student exam-ready.
                    </p>
                </div>

                {/* ── Carousel ── */}
                <div className={styles.carouselWrapper}>
                    {/* Prev */}
                    <button
                        type="button"
                        className={styles.navBtn}
                        onClick={handlePrev}
                        disabled={page === 0}
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>

                    {/* Track */}
                    <div
                        className={styles.carouselTrack}
                        style={{ gridTemplateColumns: `repeat(${perView}, 1fr)` }}
                    >
                        {visibleCards.map((card) => (
                            <div key={card.id} className={styles.prepCard}>
                                <div className={styles.prepCardHead}>
                                    <div className={styles.prepIcon} style={{ background: card.iconBg }}>
                                        {card.icon}
                                    </div>
                                    <h3 className={styles.prepCardTitle}>{card.title}</h3>
                                </div>
                                <p className={styles.prepCardDesc}>{card.desc}</p>
                                <div className={styles.prepFeatures}>
                                    {card.chips.map((chip) => (
                                        <span key={chip} className={styles.featChip}>
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        className={styles.navBtn}
                        onClick={handleNext}
                        disabled={page === totalPages - 1}
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
                </div>

                {/* ── Dots ── */}
                <div className={styles.dots}>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                            onClick={() => setPage(i)}
                            aria-label={`Go to page ${i + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}