"use client";

import styles from "./OurPedagogy.module.css";

interface PedagogyItem {
    icon: string;
    title: string;
    description: string;
}

const items: PedagogyItem[] = [
    {
        icon: "🔬",
        title: "Diagnostic Test Framework",
        description:
            "Individual assessment on day one — adaptive modules designed to target exactly what each student needs.",
    },
    {
        icon: "🧑‍🏫",
        title: "Career Counselling by Study Abroad Experts",
        description:
            "Structured sessions matching student potential to the right universities and pathways.",
    },
    {
        icon: "🧠",
        title: "Personality Development & Debating",
        description:
            "Conducted by psychologists and experienced faculty — building the soft skills that universities value.",
    },
    {
        icon: "🎯",
        title: "One Expert Panel per Student",
        description:
            "The same team follows each student throughout — knowing them deeply, building a truly personalised roadmap.",
    },
    {
        icon: "🌐",
        title: "Online Live & Classroom Sessions",
        description:
            "Flexible delivery — group and individual modes — to match every student's location and schedule.",
    },
];

export default function OurPedagogy() {
    return (
        <section className={styles.section} id="our-approach">
            <div className={styles.container}>
                <div className={styles.inner}>

                    {/* Left — heading */}
                    <div className={styles.left}>
                        <div className={styles.sectionLabel}>Our Pedagogy</div>
                        <h3 className={styles.heading}>
                            The <em>360° Approach</em>
                            <br />
                            to Student Development
                        </h3>
                        <p className={styles.description}>
                            Since 1995, EduQuest has refined a pedagogy that goes beyond exam
                            prep. Our Diagnostic Test Framework, expert panels, and holistic
                            development programmes have shaped thousands of students into
                            world-ready applicants.
                        </p>
                    </div>

                    {/* Right — items */}
                    <div className={styles.list}>
                        {items.map((item, i) => (
                            <div key={i} className={styles.item}>
                                <span className={styles.itemIcon}>{item.icon}</span>
                                <div className={styles.itemText}>
                                    <strong className={styles.itemTitle}>{item.title}</strong>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}