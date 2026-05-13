"use client"
import { useState } from "react";
import styles from "./PopularTopics.module.css";

type TabId = "6-8" | "9-10" | "11-12" | "ib";

interface TopicCard {
    icon: string;
    title: string;
    description: string;
    gradeTag: string;
}

const tabs: { id: TabId; label: string }[] = [
    { id: "6-8", label: "Grade 6–8" },
    { id: "9-10", label: "Grade 9–10" },
    { id: "11-12", label: "Grade 11–12" },
    { id: "ib", label: "IB / IGCSE" },
];

const topicsData: Record<TabId, TopicCard[]> = {
    "6-8": [
        {
            icon: "🔢",
            title: "Mathematics",
            description:
                "Number systems, algebra foundations, geometry, ratio & proportion, data handling.",
            gradeTag: "Grade 6–8",
        },
        {
            icon: "⚗️",
            title: "Science",
            description:
                "Physics, Chemistry & Biology integrated — light, matter, cells, ecosystems, and more.",
            gradeTag: "Grade 6–8",
        },
        {
            icon: "📖",
            title: "English Language",
            description:
                "Grammar, comprehension, writing skills, vocabulary building, and literature appreciation.",
            gradeTag: "Grade 6–8",
        },
        {
            icon: "🌏",
            title: "Social Science",
            description:
                "History, Geography, Civics and Economics — map skills, historical analysis, and critical thinking.",
            gradeTag: "Grade 6–8",
        },
        {
            icon: "💻",
            title: "Computer Science",
            description:
                "Scratch programming, digital literacy, basic coding concepts, and internet safety.",
            gradeTag: "Grade 6–8",
        },
        {
            icon: "🗣️",
            title: "Hindi / Sanskrit",
            description:
                "Grammar, comprehension, essay writing, and literature from CBSE/ICSE syllabus.",
            gradeTag: "Grade 6–8",
        },
    ],
    "9-10": [
        {
            icon: "📐",
            title: "Mathematics (Standard & Basic)",
            description:
                "Algebra, triangles, circles, statistics, probability, quadratics — board exam focused.",
            gradeTag: "Grade 9–10",
        },
        {
            icon: "⚡",
            title: "Physics",
            description:
                "Motion, force, light, electricity, magnetism — concept-first teaching with derivation practice.",
            gradeTag: "Grade 9–10",
        },
        {
            icon: "🧪",
            title: "Chemistry",
            description:
                "Atoms, periodic table, chemical reactions, acids, bases — with NCERT + extra practice sets.",
            gradeTag: "Grade 9–10",
        },
        {
            icon: "🧬",
            title: "Biology",
            description:
                "Life processes, reproduction, heredity, evolution, ecology — diagram-based exam prep.",
            gradeTag: "Grade 9–10",
        },
        {
            icon: "📝",
            title: "English Literature & Language",
            description:
                "First Flight, Footprints, letter writing, grammar, comprehension — full board prep.",
            gradeTag: "Grade 9–10",
        },
        {
            icon: "💰",
            title: "Economics & Geography",
            description:
                "Development, money, globalisation, Indian geography, agriculture, industries.",
            gradeTag: "Grade 9–10",
        },
    ],
    "11-12": [
        {
            icon: "📊",
            title: "Accountancy & Business Studies",
            description:
                "Partnership, company accounts, financial statements, marketing, finance — board + entrance.",
            gradeTag: "Grade 11–12",
        },
        {
            icon: "🔭",
            title: "Physics (Advanced)",
            description:
                "Electrostatics, magnetism, optics, modern physics, semiconductors — JEE/NEET aligned.",
            gradeTag: "Grade 11–12",
        },
        {
            icon: "⚗️",
            title: "Chemistry (Organic & Inorganic)",
            description:
                "Reaction mechanisms, d-block elements, polymers, biomolecules — board + competitive prep.",
            gradeTag: "Grade 11–12",
        },
        {
            icon: "🧮",
            title: "Mathematics (Advanced)",
            description:
                "Calculus, vectors, 3D geometry, probability distributions — conceptual + application mastery.",
            gradeTag: "Grade 11–12",
        },
        {
            icon: "🧬",
            title: "Biology (Advanced)",
            description:
                "Genetics, biotechnology, human physiology, ecology — NEET-focused teaching approach.",
            gradeTag: "Grade 11–12",
        },
        {
            icon: "💹",
            title: "Economics (Macro & Micro)",
            description:
                "National income, money, banking, balance of payments, demand-supply analysis.",
            gradeTag: "Grade 11–12",
        },
    ],
    ib: [
        {
            icon: "🔬",
            title: "IB Physics SL/HL",
            description:
                "All IB topics including Measurement, Mechanics, Electricity, Fields — IA guidance included.",
            gradeTag: "IB DP",
        },
        {
            icon: "🧮",
            title: "IB Mathematics AA / AI",
            description:
                "Analysis & Approaches and Applications & Interpretation — SL and HL — with IA support.",
            gradeTag: "IB DP",
        },
        {
            icon: "🌍",
            title: "IB Economics SL/HL",
            description:
                "Micro, macro, international, development — Paper 1, 2, 3 strategy + extended essay.",
            gradeTag: "IB DP",
        },
        {
            icon: "🧪",
            title: "IGCSE Chemistry & Physics",
            description:
                "Cambridge IGCSE full syllabus — exam technique, past papers, and grade boundary strategies.",
            gradeTag: "IGCSE",
        },
        {
            icon: "📝",
            title: "IB English A Lang & Lit",
            description:
                "Paper 1 & 2, IOC, HL Essay — taught by IB examiners with inside knowledge of marking.",
            gradeTag: "IB DP",
        },
        {
            icon: "🧬",
            title: "IB Biology SL/HL",
            description:
                "Cell biology, genetics, ecology, human physiology — concept + IB command term mastery.",
            gradeTag: "IB DP",
        },
    ],
};

export default function PopularTopics() {
    const [activeTab, setActiveTab] = useState<TabId>("6-8");

    return (
        <section className={styles.section} id="topics">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.secLabel}>
                        <span className={styles.secLabelLine} />
                        Popular Topics
                    </div>
                    <h2 className={styles.secHeading}>
                        What students are learning with{" "}
                        <em className={styles.headingEm}>EduQuest</em>
                    </h2>
                    <p className={styles.secSub}>
                        Expert tutoring available across all major subjects and boards.
                        Select your grade to see what we cover.
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabsWrapper}>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Topic Cards Grid */}
                <div className={styles.grid}>
                    {topicsData[activeTab].map((card, index) => (
                        <div key={index} className={styles.card}>
                            <span className={styles.cardIcon}>{card.icon}</span>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <span className={styles.gradeTag}>{card.gradeTag}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}