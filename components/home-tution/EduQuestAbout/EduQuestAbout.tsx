"use client";

import styles from "./EduQuestAbout.module.css";

const whyItems = [
    {
        icon: "📝",
        text: "Our best home tutors consistently produce excellent notes and tests, make appropriate course material references as needed, and offer the greatest academic help available.",
    },
    {
        icon: "📈",
        text: "The pace of sessions is perfect — starting with basic concepts and working up to more difficult problems at each student's own speed.",
    },
    {
        icon: "🎯",
        text: "Emphasis on exam-oriented issues gives students a thorough understanding of many disciplines so they can ace their exams with confidence.",
    },
    {
        icon: "🏠",
        text: "A student can receive individualized instruction from an expert teacher in the comfort of his or her own home — Classes 6 to 12th.",
    },
    {
        icon: "⚖️",
        text: "Both internal and external exams are viewed equally — ensuring balanced, all-round performance across every type of assessment.",
    },
];

export default function EduQuestAbout() {
    return (
        <>
            {/* ── About EduQuest ── */}
            <section className={styles.aboutSection} id="about">
                <div className={styles.container}>
                    <div className={styles.aboutGrid}>

                        <div className={styles.aboutImg}>
                            <img
                                src="https://eduquest.org.in/wp-content/uploads/2022/02/Mentoring-Services-for-Class-11.jpg"
                                alt="About EduQuest"
                                loading="lazy"
                            />
                        </div>

                        <div className={styles.aboutText}>
                            <div className={styles.sectionLabel}>About EduQuest</div>
                            <h2>Three Decades of Changing Lives Through Education</h2>
                            <p>
                                EduQuest offers the best online school tuitions, with a desire
                                for educational achievement. We have been focusing on changing
                                the lives and careers of numerous students for all of these
                                lovely years in the realm of education.
                            </p>
                            <p>
                                Our personalized learning resources support students in learning
                                at their own rate and according to their needs. To ensure that
                                they fully understand a concept, students can frequently watch
                                video lectures again, do activities again, and review. With the
                                support of our technology, students can visualize ideas and
                                improve their comprehension — interactive classes help them
                                remember things better.
                            </p>
                            <p>
                                Our goal is for students to retain their enthusiasm for learning
                                for extended periods of time in addition to improving their test
                                scores. Only when there is a dedicated mentor to show them the
                                right path is it conceivable — and that is exactly what
                                EduQuest provides.
                            </p>
                            <a
                                href="https://eduquest.org.in/about-us/"
                                className={styles.btnPrimary}
                            >
                                Learn More About Us →
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Why Choose EduQuest ── */}
            <section className={styles.whySection} id="why-eduquest">
                <div className={styles.container}>
                    <div className={styles.whyInner}>

                        <div className={styles.whyLeft}>
                            <div className={styles.sectionLabelGold}>Why Choose EduQuest</div>
                            <h3>
                                The <em>Smarter</em> Way to Learn Online
                            </h3>
                            <p>
                                From our pedagogy to our tutors, every element of EduQuest's
                                online tuitions is designed to maximise student outcomes — with
                                a proven track record spanning three decades.
                            </p>
                        </div>

                        <div className={styles.whyList}>
                            {whyItems.map((item, i) => (
                                <div key={i} className={styles.whyItem}>
                                    <div className={styles.whyItemIcon} suppressHydrationWarning>{item.icon}</div>
                                    <div className={styles.whyItemText}>{item.text}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}