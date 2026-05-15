'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './CurriculaOverview.module.css';

const cards = [
    {
        icon: '🧬',
        title: 'IGCSE Biology',
        desc: 'Covering cells, genetics, ecosystems, coordination & response, human body systems. Focuses on understanding, not rote learning.',
        tag: 'IGCSE · Cambridge',
    },
    {
        icon: '⚗️',
        title: 'IGCSE Chemistry',
        desc: 'Stoichiometry, organic & inorganic chemistry, electrochemistry, acids & bases, periodic table — built for AS & A Level readiness.',
        tag: 'IGCSE · Cambridge',
    },
    {
        icon: '⚡',
        title: 'IGCSE Physics',
        desc: 'Forces, energy, waves, electricity & magnetism, atomic physics. Practical experiments and problem-solving emphasis.',
        tag: 'IGCSE · Cambridge',
    },
    {
        icon: '📖',
        title: 'IGCSE English',
        desc: 'Reading comprehension, directed writing, composition, literature analysis. Develop critical and creative language skills.',
        tag: 'IGCSE · Cambridge',
    },
    {
        icon: '📐',
        title: 'IGCSE Mathematics',
        desc: 'Algebra, geometry, statistics, probability, trigonometry. Core & Extended levels covered with rigorous problem-solving practice.',
        tag: 'IGCSE · Cambridge',
    },
    {
        icon: '📝',
        title: 'GCSE English',
        desc: 'Language and literature for Classes 11–12 equivalent. Analytical writing, poetry, prose, drama, and persuasive communication.',
        tag: 'GCSE · Edexcel / AQA',
    },
    {
        icon: '🔬',
        title: 'GCSE Chemistry',
        desc: 'Atomic structure, bonding, chemical calculations, organic chemistry, and earth sciences for GCSE board examinations.',
        tag: 'GCSE · Edexcel / AQA',
    },
    {
        icon: '🌊',
        title: 'GCSE Physics',
        desc: 'Motion, energy transfers, particle model, atomic structure, space, and radioactivity — conceptual and applied physics.',
        tag: 'GCSE · Edexcel / AQA',
    },
    {
        icon: '📊',
        title: 'GCSE Mathematics',
        desc: 'Number, algebra, ratio, geometry, probability & statistics. Foundation and Higher tier coaching with past paper practice.',
        tag: 'GCSE · Edexcel / AQA',
    },
];

/* ─── responsive hook ─── */
function useCardsPerView(): number {
    // Default 3 matches SSR — avoids hydration mismatch on first paint
    const [cpv, setCpv] = useState(3);

    useEffect(() => {
        function measure() {
            if (window.innerWidth < 640) setCpv(1);
            else if (window.innerWidth < 1024) setCpv(2);
            else setCpv(3);
        }
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    return cpv;
}

export default function CurricularOverview() {
    const [page, setPage] = useState(0);
    const [mounted, setMounted] = useState(false);
    // animKey increments on every page/resize change — used as CSS animation seed
    // WITHOUT changing DOM node identity (keys stay stable = no removeChild crash)
    const [animKey, setAnimKey] = useState(0);
    const cardsPerView = useCardsPerView();
    const totalPages = Math.ceil(cards.length / cardsPerView);
    const prevCpv = useRef(cardsPerView);

    useEffect(() => { setMounted(true); }, []);

    // Clamp page + bump animKey when cardsPerView changes on resize
    useEffect(() => {
        if (prevCpv.current === cardsPerView) return;
        prevCpv.current = cardsPerView;
        setPage((p) => {
            const maxPage = Math.ceil(cards.length / cardsPerView) - 1;
            return Math.min(p, maxPage);
        });
        setAnimKey((k) => k + 1);
    }, [cardsPerView]);

    const go = useCallback((next: number) => {
        setPage(next);
        setAnimKey((k) => k + 1);
    }, []);

    const handlePrev = useCallback(() => {
        go(Math.max(page - 1, 0));
    }, [page, go]);

    const handleNext = useCallback(() => {
        go(Math.min(page + 1, totalPages - 1));
    }, [page, totalPages, go]);

    const start = page * cardsPerView;
    const visibleCards = cards.slice(start, start + cardsPerView);

    return (
        <section className={styles.curriculaOverview} id="Curricular">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.textCenter}>
                    <div className={styles.sectionLabel}>International Curricular</div>
                    <h2 className={styles.sectionTitle}>
                        IGCSE / GCSE / O-Level — <em>All Subjects</em>
                    </h2>
                    <p className={styles.sectionSub}>
                        The IGCSE/GCSE are among the most globally recognized school-level qualifications.
                        EduQuest provides expert online tutoring for every major subject under both boards.
                    </p>
                </div>

                {/* ── Carousel ── */}
                <div className={styles.carouselWrapper}>

                    {/* Prev */}
                    <button
                        className={styles.navBtn}
                        onClick={handlePrev}
                        disabled={page === 0}
                        aria-label="Previous"
                        type="button"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Track — --cpv sets column count; --anim-key re-triggers animation */}
                    <div
                        className={styles.carouselTrack}
                        style={{ '--cpv': cardsPerView } as React.CSSProperties}
                    >
                        {visibleCards.map((card, i) => (
                            /*
                             * Key = stable card title — React reuses the DOM node, just updates
                             * its content. No mount/unmount = no removeChild crash.
                             * Animation is re-triggered by changing the CSS custom property
                             * --anim-key, which forces a style recalculation on the node.
                             */
                            <div
                                key={card.title}
                                className={styles.curriculaCard}
                                style={{
                                    '--card-delay': `${i * 70}ms`,
                                    '--anim-key': animKey,
                                } as React.CSSProperties}
                            >
                                <div className={styles.curriculaIcon}>{card.icon}</div>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                                <span className={styles.tag}>{card.tag}</span>
                            </div>
                        ))}
                    </div>

                    {/* Next */}
                    <button
                        className={styles.navBtn}
                        onClick={handleNext}
                        disabled={page === totalPages - 1}
                        aria-label="Next"
                        type="button"
                    >
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                </div>

                {/* ── Dots — client-only ── */}
                {mounted && (
                    <div className={styles.dots} role="tablist" aria-label="Carousel pages">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                role="tab"
                                type="button"
                                aria-selected={i === page}
                                className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                                onClick={() => go(i)}
                                aria-label={`Go to page ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}