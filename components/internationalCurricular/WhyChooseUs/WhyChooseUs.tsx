'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './WhyChooseUs.module.css';

const WHY_CARDS = [
    {
        num: '01',
        title: 'Expert Subject Mentors',
        description:
            'All our IGCSE & GCSE tutors are subject specialists — many with IIT, IIM, Oxford, or Cambridge credentials and 8–15 years of experience.',
        icon: '🎓',
    },
    {
        num: '02',
        title: 'No Student Left Behind',
        description:
            'Our experienced tutors guarantee personalised attention regardless of the pricing plan selected. Every student receives equal quality instruction.',
        icon: '🤝',
    },
    {
        num: '03',
        title: 'Flexible Scheduling',
        description:
            "Sessions scheduled around students' school timetables. Classes available weekdays, evenings, and weekends — online from anywhere in the world.",
        icon: '🗓️',
    },
    {
        num: '04',
        title: 'Proven Track Record',
        description:
            '97% success ratio, 10,000+ happy students, and $8M+ in scholarships won. Students admitted to Harvard, Yale, MIT, Oxford, Cambridge, and LSE.',
        icon: '🏆',
    },
    {
        num: '05',
        title: 'Concept-First Approach',
        description:
            'We focus on genuine understanding — not rote learning. Students who understand concepts perform better across all types of exam questions.',
        icon: '💡',
    },
    {
        num: '06',
        title: 'Holistic Support',
        description:
            'Beyond academics: guidance on choosing between IGCSE Core & Extended, board selection strategy, university pathway planning, and beyond.',
        icon: '🌐',
    },
];

function useCardsPerView() {
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        function update() {
            if (window.innerWidth < 640) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(3);
            }
        }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return cardsPerView;
}

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const cardsPerView = useCardsPerView();
    const totalSlides = Math.ceil(WHY_CARDS.length / cardsPerView);
    const trackRef = useRef<HTMLDivElement>(null);
    const startX = useRef<number | null>(null);

    const goTo = useCallback(
        (index: number) => {
            if (isAnimating) return;
            setIsAnimating(true);
            setActiveIndex(index);
            setTimeout(() => setIsAnimating(false), 400);
        },
        [isAnimating]
    );

    const prev = useCallback(() => {
        goTo(activeIndex === 0 ? totalSlides - 1 : activeIndex - 1);
    }, [activeIndex, totalSlides, goTo]);

    const next = useCallback(() => {
        goTo(activeIndex === totalSlides - 1 ? 0 : activeIndex + 1);
    }, [activeIndex, totalSlides, goTo]);

    // Swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const diff = startX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        startX.current = null;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        startX.current = e.clientX;
    };
    const handleMouseUp = (e: React.MouseEvent) => {
        if (startX.current === null) return;
        const diff = startX.current - e.clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        startX.current = null;
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const visibleCards = WHY_CARDS.slice(
        activeIndex * cardsPerView,
        activeIndex * cardsPerView + cardsPerView
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <span className={styles.sectionLabel}>Why Choose Us</span>
                    <h2 className={styles.sectionTitle}>
                        Why <em>10,000+ Students</em> Trust EduQuest
                    </h2>
                    <p className={styles.sectionSub}>
                        20+ years of consolidated experience. Expert faculty. A track record that speaks for
                        itself.
                    </p>
                </div>

                {/* Carousel wrapper */}
                <div className={styles.carouselWrapper}>
                    {/* Prev button */}
                    <button
                        className={`${styles.navBtn} ${styles.navBtnPrev}`}
                        onClick={prev}
                        aria-label="Previous cards"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Track */}
                    <div
                        className={styles.carouselTrack}
                        ref={trackRef}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        <div
                            className={styles.cardsGrid}
                            style={{ '--cards-per-view': cardsPerView } as React.CSSProperties}
                        >
                            {visibleCards.map((card, i) => (
                                <article
                                    key={`${activeIndex}-${i}`}
                                    className={styles.card}
                                    style={{ '--card-delay': `${i * 80}ms` } as React.CSSProperties}
                                >
                                    <div className={styles.cardTop}>
                                        <span className={styles.cardIcon}>{card.icon}</span>
                                        <span className={styles.cardNum}>{card.num}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                    <p className={styles.cardDesc}>{card.description}</p>
                                    <div className={styles.cardAccent} />
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Next button */}
                    <button
                        className={`${styles.navBtn} ${styles.navBtnNext}`}
                        onClick={next}
                        aria-label="Next cards"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className={styles.dots} role="tablist" aria-label="Carousel navigation">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={i === activeIndex}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}