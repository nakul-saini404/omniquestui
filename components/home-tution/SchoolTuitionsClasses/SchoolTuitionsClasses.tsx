"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SchoolTuitionsClasses.module.css";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
type ClassGroup = {
    label: string;
    heading: string;
    subjects: string[];
};

type Board = {
    id: string;
    label: string;
    classGroups: ClassGroup[];
};

const boards: Board[] = [
    {
        id: "cbse",
        label: "CBSE",
        classGroups: [
            {
                label: "Class 6, 7, 8, 9 & 10",
                heading: "CBSE Board — Class 6, 7, 8, 9 & 10",
                subjects: ["Maths", "English", "Hindi", "Science", "Social Science"],
            },
            {
                label: "Class 11 & 12",
                heading: "CBSE Board — Class 11 & 12",
                subjects: [
                    "English", "Hindi", "Maths", "Physics", "Chemistry", "Biology",
                    "Computer Studies", "Accountancy", "Business Studies", "Economics",
                    "History", "Geography", "Political Science", "Physical Science",
                ],
            },
        ],
    },
    {
        id: "icse",
        label: "ICSE",
        classGroups: [
            {
                label: "Class 6, 7 & 8",
                heading: "ICSE — Class 6, 7 & 8",
                subjects: [
                    "English", "Hindi", "Maths", "Biology", "Chemistry", "Physics",
                    "History & Civics", "Geography", "Computer Applications",
                ],
            },
            {
                label: "Class 9 & 10",
                heading: "ICSE — Class 9 & 10",
                subjects: [
                    "English", "History", "Geography", "Maths", "Physics", "Economics",
                    "Environmental Science", "Computer Applications", "Economic Applications",
                    "Commercial Studies", "Commercial Applications", "Environmental Applications",
                    "Art", "Performing Arts", "Home Science", "Physical Education",
                ],
            },
            {
                label: "Class 11 & 12",
                heading: "ICSE — Class 11 & 12",
                subjects: [
                    "English", "Elective English", "Indian Languages", "Modern Foreign Languages",
                    "Classical Languages", "History", "Political Science", "Geography",
                    "Sociology", "Psychology", "Economics", "Commerce", "Accounts",
                    "Business Studies", "Mathematics", "Physics", "Chemistry", "Biology",
                    "Biotechnology", "Computer Science", "Fashion Designing", "Home Science",
                    "Physical Education", "Environmental Science", "Mass Media & Communication",
                    "Legal Studies", "Art", "Music", "Hospitality Management",
                ],
            },
        ],
    },
    {
        id: "ib",
        label: "IB",
        classGroups: [
            {
                label: "Class 6, 7 & 8",
                heading: "IB — Class 6, 7 & 8 (MYP)",
                subjects: [
                    "Language and Literature", "Language Acquisition",
                    "Individuals and Societies", "Mathematics", "Sciences", "The Arts",
                ],
            },
            {
                label: "Class 9 & 10",
                heading: "IB — Class 9 & 10 (MYP)",
                subjects: [
                    "Arts", "Maths", "Science", "Individuals & Societies",
                    "Language & Literature", "Physical and Health Education", "Design",
                ],
            },
            {
                label: "Class 11 & 12",
                heading: "IB — Class 11 & 12 (IBDP)",
                subjects: [
                    "Language", "Business Management", "Economics", "History", "Geography",
                    "Chemistry", "Physics", "Environmental Systems & Societies",
                    "Biology", "Maths", "Computer Science", "Music",
                ],
            },
        ],
    },
    {
        id: "igcse",
        label: "IGCSE",
        classGroups: [
            {
                label: "IGCSE Subjects",
                heading: "IGCSE Subjects",
                subjects: [
                    "English", "Mathematics", "Economics", "Geography", "History",
                    "Biology", "Chemistry", "Physics", "Business Studies", "Accounting",
                    "Information and Communication Technology", "Physical Education",
                ],
            },
        ],
    },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Schooltuitionsclasses() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeBoard, setActiveBoard] = useState("cbse");
    const [activeClassIdx, setActiveClassIdx] = useState<Record<string, number>>({
        cbse: 0, icse: 0, ib: 0, igcse: 0,
    });

    /* Intersection observer — single flag drives all fade-ins */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const currentBoard = boards.find((b) => b.id === activeBoard)!;
    const currentIdx = activeClassIdx[activeBoard] ?? 0;
    const currentGroup = currentBoard.classGroups[currentIdx];

    const handleBoardChange = (id: string) => setActiveBoard(id);
    const handleClassChange = (idx: number) =>
        setActiveClassIdx((prev) => ({ ...prev, [activeBoard]: idx }));

    return (
        <section
            className={styles.section}
            id="tuitions"
            ref={sectionRef}
            data-visible={visible}
        >
            <div className={styles.container}>

                {/* Heading */}
                <div className={styles.head}>
                    <span className={styles.label}>Personalized Online School Tuitions</span>
                    <h2 className={styles.heading}>Choose Your Board &amp; Class</h2>
                    <p className={styles.subheading}>
                        Comprehensive subject coverage across all major boards — click your board
                        to explore classes and subjects.
                    </p>
                </div>

                {/* Board tab bar */}
                <div className={styles.tabBar} role="tablist" aria-label="Board selection">
                    {boards.map((board) => (
                        <button
                            key={board.id}
                            role="tab"
                            aria-selected={activeBoard === board.id}
                            onClick={() => handleBoardChange(board.id)}
                            className={
                                activeBoard === board.id
                                    ? `${styles.tabBtn} ${styles.tabBtnActive}`
                                    : styles.tabBtn
                            }
                        >
                            {board.label}
                        </button>
                    ))}
                </div>

                {/* Class sub-tabs — hidden when board has only one group (IGCSE) */}
                {currentBoard.classGroups.length > 1 && (
                    <div className={styles.classTabs}>
                        {currentBoard.classGroups.map((group, idx) => (
                            <button
                                key={group.label}
                                onClick={() => handleClassChange(idx)}
                                className={
                                    currentIdx === idx
                                        ? `${styles.classBtn} ${styles.classBtnActive}`
                                        : styles.classBtn
                                }
                            >
                                {group.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Subjects card */}
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>{currentGroup.heading}</h3>
                    <div className={styles.pillGrid}>
                        {currentGroup.subjects.map((subject) => (
                            <div className={styles.pill} key={subject}>
                                <span className={styles.arrow}>▸</span>
                                {subject}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}