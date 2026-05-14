"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./MeetOurLeaders.module.css";

interface Leader {
    name: string;
    role: string;
    initials: string;
    photo: string;
    details: string[];
    linkedin: string;
}

const leaders: Leader[] = [
    {
        name: "Priya P Mahajan",
        role: "Managing Director",
        initials: "PP",
        photo: "https://eduquest.org.in/wp-content/uploads/2020/11/PriyaP-150x150.png",
        details: [
            "B.Eng — SVNIT Surat (2002–2006)",
            "PGP — IIM Kozhikode (2006–2009)",
            "Microsoft India (R&D) Pvt Ltd (2009–2011)",
            "Managing Director, EduQuest — 2012 to present",
        ],
        linkedin: "https://www.linkedin.com/in/priya-p-mahajan-824a011b6/",
    },
    {
        name: "Mayank Mani Pandey",
        role: "Senior Academic — SAT / AP",
        initials: "MM",
        photo: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2020-09-17-at-8.05.33-PM-oygdta50s3v6l8agwtshthz93edpxa0mkfyxlb430y.jpeg",
        details: [
            "B.Tech & M.Tech — Mechanical Engineering (2002–2008)",
            "GATE 2009 · GMAT 770 · GRE 340",
            "Assistant Lecturer, Delhi University (2009–2012)",
            "8+ yrs SAT/AP teaching · Researcher & Academician",
        ],
        linkedin: "https://in.linkedin.com/in/mayank-mani-pandey-194a8654",
    },
    {
        name: "Raghuvinder Singhani",
        role: "Legal Advisor",
        initials: "RS",
        photo: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Raghu-oygdpe32hsjgjbxwmn92zzbkkzk12dkmd6rl32vqyq.jpeg",
        details: [
            "National Law School of India University (1995–2000)",
            "NMIMS — Management (2002–2004)",
            "Fortune Legal Advocates (2005–2010)",
            "Legal Advisor, EduQuest — 2012 to present",
        ],
        linkedin: "https://www.linkedin.com/in/raghuvinder-singhani-602125184/",
    },
    {
        name: "Nitin Kapoor",
        role: "Admissions Specialist",
        initials: "NK",
        photo: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Nitin-Kapoor-oygdo8q652yuchlzc5dhy9rag17vnp0fji27ywl2e4.jpg",
        details: [
            "Carnegie Mellon University — Business Admin & Management (2000–2004)",
            "Panorama Education, Greater Boston (2004–2014)",
            "Admissions Specialist, EduQuest — 2015 to present",
        ],
        linkedin: "https://www.linkedin.com/in/nitin-kapoor-9b368919a/",
    },
    {
        name: "Aditi Gupta",
        role: "Academic Advisor",
        initials: "AG",
        photo: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Aditi-oygdgm9apgj46conuuqfq70ozisp82qt5rkfu3w0v0.jpg",
        details: [
            "Cornell University — Business Management & Psychology (Grad. 2007)",
            "Deloitte — Assistant (2008–2010)",
            "Grant Thornton Public Sector — Manager (2010–2015)",
            "Academic Advisor, EduQuest — 2015 to present",
        ],
        linkedin: "https://www.linkedin.com/in/aditi-gupta-928564183/",
    },
    {
        name: "Rupali Sharma",
        role: "Associate Director & Head Counsellor",
        initials: "RS",
        photo: "https://eduquest.org.in/wp-content/uploads/elementor/thumbs/Rupali-oygdpe32hsjgjbxwmn92zzbkkzk12dkmd6rl32vqyq.jpeg",
        details: [
            "Delhi University (2008–2011)",
            "MDI Gurgaon (2011–2013)",
            "Editorial Assistant, Education Week (2013–2015)",
            "Head Counsellor, EduQuest — 2015 to present",
        ],
        linkedin: "https://www.linkedin.com/in/rupali-sharma-001ba5160/",
    },
    {
        name: "Prateek Singh",
        role: "Strategy & Operations",
        initials: "PS",
        photo: "https://eduquest.org.in/wp-content/uploads/2021/10/WhatsApp-Image-2021-09-22-at-17.32.11-1.jpeg",
        details: [
            "B.Tech — Delhi College of Engineering (2009)",
            "MBA — HEC Paris (2016) · GMAT 740",
            "Bid Management, Transportation & Ed-Tech Industry",
            "Operations Management, EduQuest",
        ],
        linkedin: "https://www.linkedin.com/company/eduquest-learning-centre/",
    },
];

const PER_VIEW_DESKTOP = 3;
const PER_VIEW_TABLET = 2;
const PER_VIEW_MOBILE = 1;

function getPerView(width: number): number {
    if (width <= 560) return PER_VIEW_MOBILE;
    if (width <= 900) return PER_VIEW_TABLET;
    return PER_VIEW_DESKTOP;
}

function LinkedInIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

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

function LeaderCard({ leader }: { leader: Leader }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className={styles.leaderCard}>
            {/* Header row: circle photo + name/role */}
            <div className={styles.leaderHeader}>
                <div className={styles.leaderAvatar}>
                    {imgError ? (
                        <div className={styles.leaderAvatarPlaceholder}>{leader.initials}</div>
                    ) : (
                        <img
                            className={styles.leaderAvatarImg}
                            src={leader.photo}
                            alt={leader.name}
                            loading="lazy"
                            onError={() => setImgError(true)}
                        />
                    )}
                </div>
                <div className={styles.leaderHeaderInfo}>
                    <div className={styles.leaderName}>{leader.name}</div>
                    <div className={styles.leaderRole}>{leader.role}</div>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.leaderDivider} />

            {/* Details + LinkedIn */}
            <div className={styles.leaderBody}>
                <div className={styles.leaderDetails}>
                    {leader.details.map((detail, i) => (
                        <div key={i} className={styles.leaderDetail}>
                            {detail}
                        </div>
                    ))}
                </div>
                <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.leaderLinkedin}
                >
                    <LinkedInIcon />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default function MeetOurLeaders() {
    const total = leaders.length;
    const [current, setCurrent] = useState(0);
    const [perView, setPerView] = useState(PER_VIEW_DESKTOP);
    const trackRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const dragStartX = useRef(0);
    const isDragging = useRef(false);

    const maxIndex = useCallback(
        (pv: number) => Math.max(0, total - pv),
        [total]
    );
    const pages = useCallback((pv: number) => total - pv + 1, [total]);

    useEffect(() => {
        if (!trackRef.current) return;
        const pct = (100 / perView) * current;
        trackRef.current.style.transform = `translateX(-${pct}%)`;
    }, [current, perView]);

    useEffect(() => {
        function handleResize() {
            const pv = getPerView(window.innerWidth);
            setPerView(pv);
            setCurrent((c) => Math.min(c, maxIndex(pv)));
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [maxIndex]);

    const startAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setCurrent((c) => {
                const pv = getPerView(window.innerWidth);
                return c >= maxIndex(pv) ? 0 : c + 1;
            });
        }, 4000);
    }, [maxIndex]);

    useEffect(() => {
        startAuto();
        return () => {
            if (autoRef.current) clearInterval(autoRef.current);
        };
    }, [startAuto]);

    const goTo = useCallback(
        (idx: number) => {
            setCurrent(Math.max(0, Math.min(idx, maxIndex(perView))));
            startAuto();
        },
        [maxIndex, perView, startAuto]
    );

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "ArrowLeft") goTo(current - 1);
            if (e.key === "ArrowRight") goTo(current + 1);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [current, goTo]);

    function onMouseDown(e: React.MouseEvent) {
        dragStartX.current = e.clientX;
        isDragging.current = true;
    }
    function onMouseUp(e: React.MouseEvent) {
        if (!isDragging.current) return;
        isDragging.current = false;
        const diff = dragStartX.current - e.clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    }
    function onTouchStart(e: React.TouchEvent) {
        dragStartX.current = e.touches[0].clientX;
        isDragging.current = true;
    }
    function onTouchEnd(e: React.TouchEvent) {
        if (!isDragging.current) return;
        isDragging.current = false;
        const diff = dragStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    }

    const numPages = pages(perView);
    const mx = maxIndex(perView);

    return (
        <section className={styles.section} id="leaders">
            <div className={styles.container}>
                <div className={styles.sectionHead}>
                    <div className={styles.sectionLabel}>Meet Our Leaders</div>
                    <h2>The Team Behind Three Decades of Results</h2>
                    <p>
                        Educators, counsellors, and strategists — each bringing deep
                        expertise and a genuine commitment to every student&apos;s success.
                    </p>
                </div>

                <div className={styles.carouselViewport}>
                    <div className={styles.carouselTrackWrap}>
                        <div
                            ref={trackRef}
                            className={styles.carouselTrack}
                            onMouseDown={onMouseDown}
                            onMouseUp={onMouseUp}
                            onMouseLeave={(e) => {
                                if (isDragging.current) onMouseUp(e);
                                startAuto();
                            }}
                            onMouseEnter={() => {
                                if (autoRef.current) clearInterval(autoRef.current);
                            }}
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            {leaders.map((leader, i) => (
                                <div key={i} className={styles.leaderSlide}>
                                    <LeaderCard leader={leader} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.carouselControls}>
                        <button
                            className={styles.carouselBtn}
                            onClick={() => goTo(current - 1)}
                            disabled={current === 0}
                            aria-label="Previous"
                        >
                            <ChevronLeft />
                        </button>

                        <div className={styles.carouselDots}>
                            {Array.from({ length: numPages }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.carouselDot}${i === current ? " " + styles.active : ""}`}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <span className={styles.carouselCount}>
                            {current + 1} / {numPages}
                        </span>

                        <button
                            className={styles.carouselBtn}
                            onClick={() => goTo(current + 1)}
                            disabled={current >= mx}
                            aria-label="Next"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}