"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./CapstoneSection.module.css";

interface CapstoneProject {
    trackLabel: string;
    title: string;
    author: string;
    challengePoints: { label: string; text: string }[];
    techStack: string[];
    metricVal: string;
    metricLbl: string;
    quote: string;
}

const projects: CapstoneProject[] = [
    {
        trackLabel: "WEB DEV CAPSTONE",
        title: "Nandini's Full-Stack Non-Profit Platform",
        author: "Nandini · Node.js & React",
        challengePoints: [
            { label: "Goal", text: "Build a donation management platform for a real NGO" },
            { label: "Stack", text: "React frontend + Node.js/Express backend" },
            { label: "Deployed", text: "Live on Vercel + Railway in production" },
        ],
        techStack: ["React", "Node.js", "MySQL", "Express"],
        metricVal: "Live",
        metricLbl: "Production Deployment",
        quote: "Melbourne loved that it was a real, deployed app solving a real problem.",
    },
    {
        trackLabel: "DATA ANALYTICS",
        title: "Rajan's Global Sales Financial Dashboard",
        author: "Rajan · Tableau & SQL",
        challengePoints: [
            { label: "Client", text: "Retail MNC with declining revenue visibility" },
            { label: "Data", text: "3 years of transaction data across 12 markets" },
            { label: "Goal", text: "Real-time Tableau dashboard for C-suite decisions" },
        ],
        techStack: ["Tableau", "MySQL", "Excel", "SQL"],
        metricVal: "15%",
        metricLbl: "Revenue Recovery Identified",
        quote: "Visual proof of my skills — LSE saw a practitioner, not a student.",
    },
    {
        trackLabel: "BIG DATA & AI",
        title: "Amrit's Movie Recommendation Engine",
        author: "Amrit · Hadoop & Spark",
        challengePoints: [
            { label: "Scale", text: "1 Million+ user ratings to process" },
            { label: "Complexity", text: "Unstructured, sparse data matrix" },
            { label: "Goal", text: "Netflix-style collaborative filtering engine" },
        ],
        techStack: ["Python", "Hadoop", "Spark", "TensorFlow"],
        metricVal: "<200ms",
        metricLbl: "Response Time at Scale",
        quote: "Scalability won the UofT interview. They asked about Spark for 20 minutes.",
    },
    {
        trackLabel: "AI / ML",
        title: "Nandini's Customer Churn Prediction Model",
        author: "Nandini · Python & Deep Learning",
        challengePoints: [
            { label: "Goal", text: "Reduce telecom customer loss via prediction" },
            { label: "Data", text: "10,000 customer behaviour records" },
            { label: "Task", text: "Binary classification with ANN architecture" },
        ],
        techStack: ["Python", "TensorFlow", "Keras", "Pandas"],
        metricVal: "98.5%",
        metricLbl: "Model Accuracy",
        quote:
            "This accuracy figure secured my Melbourne admit — they cited it in the offer letter.",
    },
];

const PER_VIEW_BREAKPOINTS = { mobile: 1, tablet: 2, desktop: 3 };

function getPerView(): number {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 600) return PER_VIEW_BREAKPOINTS.mobile;
    if (window.innerWidth <= 960) return PER_VIEW_BREAKPOINTS.tablet;
    return PER_VIEW_BREAKPOINTS.desktop;
}

export default function CapstoneSection() {
    const [hasMounted, setHasMounted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [perView, setPerView] = useState(3);
    const trackRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const dragStartRef = useRef(0);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const total = projects.length;
    const maxIdx = Math.max(0, total - perView);
    const numPages = maxIdx + 1;

    const goTo = useCallback(
        (idx: number) => {
            const clamped = Math.max(0, Math.min(idx, maxIdx));
            setCurrent(clamped);
        },
        [maxIdx]
    );

    /* Auto-play */
    const startAuto = useCallback(() => {
        if (autoTimerRef.current) clearInterval(autoTimerRef.current);
        autoTimerRef.current = setInterval(() => {
            setCurrent((prev) => (prev >= maxIdx ? 0 : prev + 1));
        }, 4500);
    }, [maxIdx]);

    useEffect(() => {
        startAuto();
        return () => {
            if (autoTimerRef.current) clearInterval(autoTimerRef.current);
        };
    }, [startAuto]);

    /* Responsive perView */
    useEffect(() => {
        const handleResize = () => {
            const pv = getPerView();
            setPerView(pv);
            setCurrent((prev) => Math.min(prev, Math.max(0, total - pv)));
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [total]);

    /* Apply track transform */
    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${(100 / perView) * current}%)`;
        }
    }, [current, perView]);

    /* Scroll reveal */
    useEffect(() => {
        const els = [headerRef.current, carouselRef.current].filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        els.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* Drag / touch */
    const handleMouseDown = (e: React.MouseEvent) => {
        dragStartRef.current = e.clientX;
    };
    const handleMouseUp = (e: React.MouseEvent) => {
        const diff = dragStartRef.current - e.clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
    };
    const handleTouchStart = (e: React.TouchEvent) => {
        dragStartRef.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = dragStartRef.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
    };

    return (
        <section className={styles.capstone} id="capstone">
            <div className={styles.container}>

                {/* Header */}
                <div ref={headerRef} className={`${styles.capstoneHeader} ${styles.revealUp}`}>
                    <div className={styles.secLabel}>Capstone Projects</div>
                    <h2 className={styles.secHeading}>
                        Your Capstone Is Not an Assignment.<br />
                        <em>It&apos;s Your Signature.</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        We design programs around where you&apos;re headed — not around a fixed syllabus.
                        Three tracks. Three stories that opened doors.
                    </p>
                </div>

                {/* Carousel */}
                <div ref={carouselRef} className={`${styles.carouselWrap} ${styles.revealUp} ${styles.d1}`}>
                    <div className={styles.carouselViewport}>
                        <div
                            ref={trackRef}
                            className={styles.carouselTrack}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            {projects.map((project, i) => (
                                <div
                                    key={i}
                                    className={styles.capSlide}
                                    style={{ flex: `0 0 calc(100% / ${perView})` }}
                                >
                                    <div className={styles.capCard}>

                                        {/* Card Head */}
                                        <div className={styles.capCardHead}>
                                            <div className={styles.capTrackLabel}>{project.trackLabel}</div>
                                            <div className={styles.capTitle}>{project.title}</div>
                                            <div className={styles.capAuthor}>{project.author}</div>
                                        </div>

                                        {/* Card Body */}
                                        <div className={styles.capBody}>
                                            <div>
                                                <div className={styles.capChallengeTitle}>The Challenge</div>
                                                <ul className={styles.capPoints}>
                                                    {project.challengePoints.map((pt) => (
                                                        <li key={pt.label}>
                                                            <strong>{pt.label}:</strong> {pt.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <div className={styles.capChallengeTitle}>Tech Stack</div>
                                                <div className={styles.capStack}>
                                                    {project.techStack.map((tech) => (
                                                        <span key={tech} className={styles.capTech}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className={styles.capMetric}>
                                                <span className={styles.capMetricVal}>{project.metricVal}</span>
                                                <span className={styles.capMetricLbl}>{project.metricLbl}</span>
                                            </div>

                                            <p className={styles.capQuote}>&ldquo;{project.quote}&rdquo;</p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className={styles.carouselControls}>
                        <button
                            className={styles.cBtn}
                            aria-label="Previous"
                            disabled={current === 0}
                            onClick={() => { goTo(current - 1); startAuto(); }}
                        >
                            ‹
                        </button>

                        <div className={styles.cDots}>
                            {Array.from({ length: numPages }).map((_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Slide ${i + 1}`}
                                    className={`${styles.cDot} ${i === current ? styles.cDotActive : ""}`}
                                    onClick={() => { goTo(i); startAuto(); }}
                                />
                            ))}
                        </div>

                        <span className={styles.cCount}>
                            {current + 1} / {numPages}
                        </span>

                        <button
                            className={styles.cBtn}
                            aria-label="Next"
                            disabled={current >= maxIdx}
                            onClick={() => { goTo(current + 1); startAuto(); }}
                        >
                            ›
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}