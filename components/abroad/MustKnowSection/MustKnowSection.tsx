"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MustKnowSection.module.css";

interface Point {
    num: string;
    icon: string;
    title: string;
    desc: string;
}

const points: Point[] = [
    {
        num: "01",
        icon: "🌐",
        title: "Advantages of Education Abroad",
        desc: "Study at world-class universities with great facilities. Gain networking opportunities and develop an international outlook. Access specialized, work-oriented programs and options for Permanent Residency with excellent post-graduation career opportunities.",
    },
    {
        num: "02",
        icon: "🏛️",
        title: "Top Universities",
        desc: "We advise and assist students in gaining admission to world-renowned universities. Our team ensures a seamless application process — visa, counseling, program selection, guidance, and university admissions across the US, UK, Canada, Australia, and beyond.",
    },
    {
        num: "03",
        icon: "🗺️",
        title: "Selection of University & Country",
        desc: "A good institution and country for you would be one that fits your budget, offers your chosen courses, has a strong university rating, and provides post-study stay-back and permanent residency options. These are the key considerations before narrowing down your choices.",
    },
    {
        num: "04",
        icon: "📚",
        title: "Selection of Right Course",
        desc: "The best course for you is determined by your academic background, work experience, and future professional objectives. Some courses are offered after careful consideration of their approval, home country restrictions, and council registrations.",
    },
    {
        num: "05",
        icon: "✅",
        title: "Eligibility Criteria",
        desc: "Most nations demand a minimum of 50% in academics, along with an IELTS, PTE, or TOEFL score. Admission to prestigious universities is extremely competitive — a strong overall reputation and profile is essential. Let us examine your profile for multiple universities.",
    },
    {
        num: "06",
        icon: "💰",
        title: "Cost of Overseas Education",
        desc: "The cost of an international education varies significantly by country and course. We ascertain all costs and expenses and communicate the complete pricing structure with full transparency — including tuition, living costs, and ancillary fees.",
    },
    {
        num: "07",
        icon: "🎓",
        title: "Study Abroad Scholarships",
        desc: "Almost all countries offer excellent scholarships to international students — from universities, governments, and organizations. Scholarships can range from 20% to 60% of tuition fees. Early application is always advantageous in securing scholarship rewards.",
    },
    {
        num: "08",
        icon: "📄",
        title: "Documents Required",
        desc: "Academics, passports, work experience, statement of purpose, letters of recommendation, IELTS, CV and other documents are needed. A predicted scorecard from your school is required for UG admission. Late submission risks missing your desired intake.",
    },
    {
        num: "09",
        icon: "🔄",
        title: "Application & Admission Process",
        desc: "The study abroad application process involves multiple steps that must be completed in a timely manner. Admission to prestigious universities requires a strong overall profile. Utilize our services to have your profile examined for admission to multiple universities simultaneously.",
    },
    {
        num: "10",
        icon: "🛂",
        title: "How to Prepare Your Visa File",
        desc: "Preparation of a student visa file must adhere to embassy standards precisely. We ascertain all the costs, required documents, and processes, and guide you through the complete visa filing procedure with full transparency and zero surprises.",
    },
];

function getPerView(width: number): number {
    if (width <= 600) return 1;
    if (width <= 960) return 2;
    return 3;
}

export default function MustKnowSection() {
    const [current, setCurrent] = useState(0);
    const [perView, setPerView] = useState(3);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const total = points.length;
    const maxIdx = Math.max(0, total - perView);
    const numPages = maxIdx + 1;

    /* ── Carousel navigation ── */
    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, maxIdx)));
        },
        [maxIdx]
    );

    /* ── Auto-advance ── */
    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setCurrent((c) => (c >= maxIdx ? 0 : c + 1));
        }, 4500);
    }, [maxIdx]);

    useEffect(() => {
        startAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [startAuto]);

    /* ── Responsive perView ── */
    useEffect(() => {
        const update = () => setPerView(getPerView(window.innerWidth));
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    /* ── Clamp current when perView shrinks ── */
    useEffect(() => {
        setCurrent((c) => Math.min(c, maxIdx));
    }, [maxIdx]);

    /* ── Touch / drag swipe ── */
    const dragStart = useRef(0);
    const onMouseDown = (e: React.MouseEvent) => { dragStart.current = e.clientX; };
    const onMouseUp = (e: React.MouseEvent) => {
        const d = dragStart.current - e.clientX;
        if (Math.abs(d) > 50) { goTo(d > 0 ? current + 1 : current - 1); startAuto(); }
    };
    const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX; };
    const onTouchEnd = (e: React.TouchEvent) => {
        const d = dragStart.current - e.changedTouches[0].clientX;
        if (Math.abs(d) > 50) { goTo(d > 0 ? current + 1 : current - 1); startAuto(); }
    };

    /* ── Scroll reveal (header + carousel) ── */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (headerRef.current) observer.observe(headerRef.current);
        if (carouselRef.current) observer.observe(carouselRef.current);
        return () => observer.disconnect();
    }, []);

    const slideWidthPct = 100 / perView;
    const translatePct = slideWidthPct * current;

    return (
        <section className={styles.top10} id="top10" ref={sectionRef}>
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={`${styles.top10Header} ${styles.revealUp}`} ref={headerRef}>
                    <div className={styles.secLabel}>Must Know</div>
                    <h2 className={styles.secHeading}>
                        Top 10 Essential Points to Know
                        <br />
                        <em>Before Applying for Overseas Education</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Everything you need to understand before you start your study abroad
                        journey — from eligibility to visa filing.
                    </p>
                </div>

                {/* ── Carousel ── */}
                <div
                    className={`${styles.carouselWrap} ${styles.revealUp} ${styles.d1}`}
                    ref={carouselRef}
                >
                    {/* Viewport */}
                    <div className={styles.carouselViewport}>
                        <div
                            className={styles.carouselTrack}
                            style={{ transform: `translateX(-${translatePct}%)` }}
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseUp}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            {points.map((point) => (
                                <div
                                    key={point.num}
                                    className={styles.pointSlide}
                                    style={{ flex: `0 0 ${slideWidthPct}%` }}
                                >
                                    <div className={styles.pointCard}>
                                        <div className={styles.pointCardHead}>
                                            <div className={styles.pointNum}>{point.num}</div>
                                            <div className={styles.pointIcon}>{point.icon}</div>
                                            <div className={styles.pointTitle}>{point.title}</div>
                                        </div>
                                        <div className={styles.pointBody}>
                                            <p className={styles.pointDesc}>{point.desc}</p>
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
                            onClick={() => { goTo(current - 1); startAuto(); }}
                            disabled={current === 0}
                            aria-label="Previous"
                        >
                            ‹
                        </button>

                        <div className={styles.cDots}>
                            {Array.from({ length: numPages }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.cDot} ${i === current ? styles.cDotActive : ""}`}
                                    onClick={() => { goTo(i); startAuto(); }}
                                    aria-label={`Slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <span className={styles.cCount}>
                            {current + 1} / {numPages}
                        </span>

                        <button
                            className={styles.cBtn}
                            onClick={() => { goTo(current + 1); startAuto(); }}
                            disabled={current >= maxIdx}
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}