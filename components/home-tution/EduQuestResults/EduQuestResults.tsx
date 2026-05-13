"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./EduQuestResults.module.css";

/* ─── Data types ─── */
interface ResultCard {
    name: string;
    score: string;
    detail: string;
    school: string;
    badge: string;
    img: string;
    board: "CBSE" | "ICSE" | "IB";
}

/* ─── All result data from HTML ─── */
const cbseResults: ResultCard[] = [
    {
        name: "Aryan Bhatt",
        score: "95.2%",
        detail: "476/500 · April–May 2022",
        school: "St. Michael's Senior Secondary School",
        badge: "🏫 CBSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.23.34-PM-150x150.png",
        board: "CBSE",
    },
    {
        name: "Ritika Singh",
        score: "96.8%",
        detail: "484/500 · April–May 2022",
        school: "Tagore International School",
        badge: "🏫 CBSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.23.08-PM-150x150.png",
        board: "CBSE",
    },
    {
        name: "Khyati Sharma",
        score: "92.6%",
        detail: "463/500 · April–May 2022",
        school: "Shiv Public Senior Secondary School",
        badge: "🏫 CBSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/02/Screenshot-2023-02-01-at-12.11.42-PM-150x150.png",
        board: "CBSE",
    },
    {
        name: "Siddhant Bhatia",
        score: "90.6%",
        detail: "453/500 · April–May 2022",
        school: "Shiksha Bharti Public School",
        badge: "🏫 CBSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.30.53-PM-150x150.png",
        board: "CBSE",
    },
];

const icseResults: ResultCard[] = [
    {
        name: "Vidhi Chauhan",
        score: "93.8%",
        detail: "469/500 · April–May 2022",
        school: "Lt Atul Katarya Memorial School",
        badge: "📚 ICSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.31.24-PM-150x150.png",
        board: "ICSE",
    },
    {
        name: "Rahul Dutta",
        score: "95.4%",
        detail: "477/500 · April–May 2022",
        school: "The Banyan Tree World School",
        badge: "📚 ICSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.32.06-PM-150x150.png",
        board: "ICSE",
    },
    {
        name: "Subhajit Paul",
        score: "97.8%",
        detail: "489/500 · April–May 2022",
        school: "Orchids The International School",
        badge: "📚 ICSE",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.32.25-PM-150x150.png",
        board: "ICSE",
    },
];

const ibResults: ResultCard[] = [
    {
        name: "Manya Gupta",
        score: "42/45 Points",
        detail: "IBDP · May 2022",
        school: "Lancers International School",
        badge: "🌐 IB",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.33.59-PM-150x150.png",
        board: "IB",
    },
    {
        name: "Tannvi Sood",
        score: "50/56 Points",
        detail: "MYP · May 2022",
        school: "Heritage International Xperiential School",
        badge: "🌐 IB",
        img: "https://eduquest.org.in/wp-content/uploads/2023/01/Screenshot-2023-01-31-at-2.34.20-PM-150x150.png",
        board: "IB",
    },
];

const boardTabs = [
    { key: "CBSE", label: "CBSE Results", data: cbseResults },
    { key: "ICSE", label: "ICSE Results", data: icseResults },
    { key: "IB", label: "IB Results", data: ibResults },
] as const;

/* ─── Per-board carousel ─── */
function BoardCarousel({ cards }: { cards: ResultCard[] }) {
    const [current, setCurrent] = useState(0);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const [perView, setPerView] = useState(3);

    /* responsive perView */
    useEffect(() => {
        const calc = () => {
            const w = window.innerWidth;
            setPerView(w <= 560 ? 1 : w <= 900 ? 2 : 3);
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, []);

    const maxIdx = Math.max(0, cards.length - perView);
    const numPages = maxIdx + 1;

    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, maxIdx)));
        },
        [maxIdx]
    );

    /* reset when perView changes */
    useEffect(() => { setCurrent((c) => Math.min(c, maxIdx)); }, [maxIdx]);

    /* auto-advance */
    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setCurrent((c) => (c >= maxIdx ? 0 : c + 1));
        }, 4200);
    }, [maxIdx]);

    useEffect(() => {
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [startAuto]);

    const slideWidth = 100 / perView;

    return (
        <div
            className={styles.carouselViewport}
            ref={viewportRef}
            onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
            onMouseLeave={startAuto}
        >
            <div className={styles.carouselTrackWrap}>
                <div
                    className={styles.carouselTrack}
                    style={{ transform: `translateX(-${slideWidth * current}%)` }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.name}
                            className={styles.resultSlide}
                            style={{ flex: `0 0 ${slideWidth}%` }}
                        >
                            <div className={styles.resultCard}>
                                <div className={styles.resultCardImg}>
                                    <img src={card.img} alt={card.name} loading="lazy" />
                                </div>
                                <div className={styles.resultCardBody}>
                                    <div className={styles.resultCardName}>{card.name}</div>
                                    <div className={styles.resultCardScore}>{card.score}</div>
                                    <div className={styles.resultCardDetail}>{card.detail}</div>
                                    <div className={styles.resultCardDetail}>{card.school}</div>
                                    <div className={styles.resultCardBadge}>{card.badge}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className={styles.carouselControls}>
                <button
                    className={styles.carouselBtn}
                    aria-label="Previous"
                    disabled={current === 0}
                    onClick={() => { goTo(current - 1); startAuto(); }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className={styles.carouselDots}>
                    {Array.from({ length: numPages }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.carouselDot} ${i === current ? styles.carouselDotActive : ""}`}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => { goTo(i); startAuto(); }}
                        />
                    ))}
                </div>

                <span className={styles.carouselCount}>{current + 1} / {numPages}</span>

                <button
                    className={styles.carouselBtn}
                    aria-label="Next"
                    disabled={current >= maxIdx}
                    onClick={() => { goTo(current + 1); startAuto(); }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

/* ─── Main section ─── */
export default function EduQuestResults() {
    const [activeBoard, setActiveBoard] = useState<"CBSE" | "ICSE" | "IB">("CBSE");

    const active = boardTabs.find((t) => t.key === activeBoard)!;

    return (
        <section className={styles.resultsSection} id="results">
            <div className={styles.container}>

                {/* Section head */}
                <div className={`${styles.sectionHead} ${styles.center}`}>
                    <div className={styles.sectionLabel}>EduQuest Results</div>
                    <h2>Students Who Made It Happen</h2>
                    <p>Real results from real students — across CBSE, ICSE, and IB boards.</p>
                </div>

                {/* Board tabs */}
                <div className={styles.resultTabBar}>
                    {boardTabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`${styles.resultTabBtn} ${activeBoard === tab.key ? styles.resultTabBtnActive : ""}`}
                            onClick={() => setActiveBoard(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Active carousel */}
                <BoardCarousel key={activeBoard} cards={active.data} />

            </div>
        </section>
    );
}