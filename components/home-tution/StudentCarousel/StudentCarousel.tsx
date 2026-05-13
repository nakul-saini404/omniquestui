"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./StudentCarousel.module.css";

interface Student {
    name: string;
    score: string;
    board: "CBSE" | "ICSE" | "IB";
}

const students: Student[] = [
    // CBSE
    { name: "Halona Sancia Dantes", score: "589/600", board: "CBSE" },
    { name: "Lizan Meryl Pereira", score: "588/600", board: "CBSE" },
    { name: "Prinson Fernandes", score: "587/600", board: "CBSE" },
    { name: "Aman M Shoib", score: "586/600", board: "CBSE" },
    { name: "Deepthi Dsouza", score: "586/600", board: "CBSE" },
    { name: "Aman H A", score: "584/600", board: "CBSE" },
    { name: "Samriddhi U Shetty", score: "584/600", board: "CBSE" },
    { name: "Saishree Arun Naik", score: "582/600", board: "CBSE" },
    { name: "Vaidehi Vinchurkar", score: "580/600", board: "CBSE" },
    { name: "Edric Oscar Dsilva", score: "579/600", board: "CBSE" },
    { name: "Adithi Ashok Bhandari", score: "591/600", board: "CBSE" },
    { name: "Deeksha Pai", score: "588/600", board: "CBSE" },
    { name: "Jay D Shah", score: "586/600", board: "CBSE" },
    { name: "Alston Sonil Dias", score: "585/600", board: "CBSE" },
    { name: "Ashwini Baliga B", score: "585/600", board: "CBSE" },
    { name: "Anish Khatri", score: "91.8%", board: "CBSE" },
    { name: "Pooja Jain V", score: "89%", board: "CBSE" },
    { name: "Mubrack Pasha", score: "97.2%", board: "CBSE" },
    { name: "Ashwini S", score: "89.5%", board: "CBSE" },
    { name: "Sanjay S", score: "79.5%", board: "CBSE" },
    { name: "Kavitha N", score: "97.2%", board: "CBSE" },
    { name: "Rishab K Gandhi", score: "77.4%", board: "CBSE" },
    { name: "Hrithia Jana", score: "91.8%", board: "CBSE" },
    { name: "Kesar Krishna C", score: "89%", board: "CBSE" },
    { name: "Vatsal Mehta", score: "89.5%", board: "CBSE" },
    { name: "Vijay Jain", score: "89%", board: "CBSE" },
    { name: "Lavanya M", score: "91.6%", board: "CBSE" },
    { name: "Vaishnavi R", score: "89%", board: "CBSE" },
    { name: "Mohendra Patal", score: "79.5%", board: "CBSE" },
    { name: "Sneha G R", score: "89.5%", board: "CBSE" },
    { name: "Shri Sharan S", score: "79.5%", board: "CBSE" },
    { name: "Chandini Singh", score: "77.4%", board: "CBSE" },
    { name: "Sushma R", score: "97.4%", board: "CBSE" },
    // ICSE
    { name: "Nethravathi N", score: "87.5%", board: "ICSE" },
    { name: "Vinay Kumar S Jain", score: "89.7%", board: "ICSE" },
    { name: "Mohammed Aurangzaib", score: "78.5%", board: "ICSE" },
    { name: "Yashaswini D", score: "93.6%", board: "ICSE" },
    { name: "Saif Pasha", score: "95.2%", board: "ICSE" },
    { name: "Chaithanya G", score: "91.3%", board: "ICSE" },
    { name: "Bharath Mundra", score: "86.5%", board: "ICSE" },
    { name: "Kalpesh Singh", score: "88.6%", board: "ICSE" },
    { name: "Seema S L", score: "89.7%", board: "ICSE" },
    { name: "Chirag G Jain", score: "91.2%", board: "ICSE" },
    { name: "Rucchika Jain", score: "97.2%", board: "ICSE" },
    { name: "Mohammed Mudassir Afiq", score: "87.5%", board: "ICSE" },
    { name: "Lucky C Khandelwal", score: "89.7%", board: "ICSE" },
    { name: "Rukha S", score: "78.5%", board: "ICSE" },
    { name: "Chetan Kumar C", score: "93.6%", board: "ICSE" },
    { name: "Komal Prajapat", score: "88.5%", board: "ICSE" },
    { name: "Niveditha D K", score: "97.2%", board: "ICSE" },
    { name: "Tarun R Jain", score: "89.5%", board: "ICSE" },
    { name: "Vaishnavi P", score: "89%", board: "ICSE" },
    { name: "Nikitha M Jain", score: "79.5%", board: "ICSE" },
    { name: "Nikash Khatiwoda", score: "91.8%", board: "ICSE" },
    { name: "Vandan Kumar K", score: "97.2%", board: "ICSE" },
    { name: "Fiza Banu", score: "77.4%", board: "ICSE" },
    { name: "Farzana Banu", score: "69%", board: "ICSE" },
    { name: "Jyothi V", score: "79.5%", board: "ICSE" },
    { name: "Sri Sowmya Vishnubhotla", score: "91.8%", board: "ICSE" },
    { name: "Ghousia", score: "79.5%", board: "ICSE" },
    { name: "Kiran Singh G", score: "77.4%", board: "ICSE" },
    // IB
    { name: "Neetu Kumari K", score: "97.2%", board: "IB" },
    { name: "Anshul Jain", score: "89.4%", board: "IB" },
    { name: "Bhavya S", score: "78.7%", board: "IB" },
    { name: "Kiran Kumar L", score: "71.8%", board: "IB" },
    { name: "Raju", score: "87.5%", board: "IB" },
    { name: "Syeda Saniya Farru", score: "77.5%", board: "IB" },
    { name: "Antima N Nahata", score: "74.9%", board: "IB" },
    { name: "Ashiya Fazli", score: "83.6%", board: "IB" },
    { name: "Ashwini S", score: "88%", board: "IB" },
    { name: "Lahari H", score: "78.8%", board: "IB" },
    { name: "Savita G Solanki", score: "88.9%", board: "IB" },
    { name: "Kajal A Jain", score: "98.2%", board: "IB" },
    { name: "Raghavendra V", score: "78.2%", board: "IB" },
    { name: "Bhoomika P", score: "89.5%", board: "IB" },
    { name: "Neetu Kanwar", score: "75.2%", board: "IB" },
];

function getInitials(name: string) {
    return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

function getScorePct(score: string): number {
    if (score.includes("/600")) return (parseFloat(score) / 600) * 100;
    return parseFloat(score);
}

function getRank(score: string): "gold" | "silver" | "bronze" | "standard" {
    const pct = getScorePct(score);
    if (pct >= 95) return "gold";
    if (pct >= 90) return "silver";
    if (pct >= 80) return "bronze";
    return "standard";
}

const VISIBLE = 4;

export default function StudentCarousel() {
    const [activeBoard, setActiveBoard] = useState<"ALL" | "CBSE" | "ICSE" | "IB">("ALL");
    const [current, setCurrent] = useState(0);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const filtered =
        activeBoard === "ALL" ? students : students.filter((s) => s.board === activeBoard);
    const total = filtered.length;
    const maxIndex = Math.max(0, total - VISIBLE);
    const numPages = maxIndex + 1;

    const go = (d: 1 | -1) => {
        setCurrent((prev) => Math.max(0, Math.min(prev + d, maxIndex)));
    };

    useEffect(() => { setCurrent(0); }, [activeBoard]);

    useEffect(() => {
        autoRef.current = setInterval(() => {
            setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3800);
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [maxIndex, activeBoard]);

    const visible = filtered.slice(current, current + VISIBLE);

    return (
        <section className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <span className={styles.eyebrow}>EduQuest Results</span>
                <h2 className={styles.title}>
                    <em>Congratulations!!</em> Top Achievers
                </h2>
                <p className={styles.subtitle}>Celebrating excellence across CBSE · ICSE · IB</p>
            </div>

            {/* Board filter tabs */}
            <div className={styles.tabBar}>
                {(["ALL", "CBSE", "ICSE", "IB"] as const).map((b) => (
                    <button
                        key={b}
                        className={`${styles.tabBtn} ${activeBoard === b ? styles.tabActive : ""}`}
                        onClick={() => setActiveBoard(b)}
                    >
                        {b === "ALL" ? "All Boards" : b}
                        <span className={styles.tabCount}>
                            {b === "ALL" ? students.length : students.filter((s) => s.board === b).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className={styles.track}>
                {visible.map((student, idx) => {
                    const rank = getRank(student.score);
                    return (
                        <div
                            key={`${student.name}-${current}-${idx}`}
                            className={`${styles.card} ${styles["rank_" + rank]}`}
                            style={{ animationDelay: `${idx * 60}ms` }}
                        >
                            <div className={`${styles.cardTop} ${styles["top_" + student.board]}`} />

                            <div className={`${styles.avatarRing} ${styles["ring_" + rank]}`}>
                                <div className={styles.avatar}>
                                    <span className={styles.initials}>{getInitials(student.name)}</span>
                                </div>
                                {rank === "gold" && <span className={styles.crown} suppressHydrationWarning>👑</span>}
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.name}>{student.name}</p>
                                <p className={`${styles.score} ${styles["score_" + rank]}`}>{student.score}</p>
                                <span className={`${styles.badge} ${styles["badge_" + student.board]}`}>
                                    {student.board}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className={styles.controls}>
                <button
                    className={styles.navBtn}
                    onClick={() => go(-1)}
                    disabled={current === 0}
                    aria-label="Previous"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className={styles.dots}>
                    {Array.from({ length: Math.min(numPages, 10) }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === (current % 10) ? styles.dotActive : ""}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Page ${i + 1}`}
                        />
                    ))}
                </div>

                <span className={styles.counter}>{current + 1} / {numPages}</span>

                <button
                    className={styles.navBtn}
                    onClick={() => go(1)}
                    disabled={current >= maxIndex}
                    aria-label="Next"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}