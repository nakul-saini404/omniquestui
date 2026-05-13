import styles from "./SpecialEnglishClasses.module.css";

interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

interface ProgrammeCard {
    tag: string;
    title: string;
    description: string;
}

const featureItems: FeatureItem[] = [
    {
        icon: "🗣️",
        title: "Spoken English & Communication",
        description:
            "Structured fluency-building sessions — public speaking, debate, and interview skills.",
    },
    {
        icon: "✍️",
        title: "Creative & Academic Writing",
        description:
            "Essays, letters, reports, and narratives — taught with real marking criteria from board examiners.",
    },
    {
        icon: "📖",
        title: "Literature & Text Analysis",
        description:
            "Close reading, thematic analysis, and character studies — for CBSE, ICSE, IB, and IGCSE texts.",
    },
    {
        icon: "🏆",
        title: "English for Competitive Exams",
        description:
            "SAT Reading & Writing, IELTS, TOEFL, and UPSC English — exam-specific preparation.",
    },
];

const programmeCards: ProgrammeCard[] = [
    {
        tag: "Programme 1",
        title: "Foundation English (Grade 6–8)",
        description:
            "Grammar mastery, reading comprehension, vocabulary expansion, and structured paragraph writing. Builds the confidence students need heading into board years.",
    },
    {
        tag: "Programme 2",
        title: "Board Exam English (Grade 9–10)",
        description:
            "CBSE/ICSE/IGCSE exam-focused — formal and informal letters, long answers, literature questions, and unseen passages with mark-maximising techniques.",
    },
    {
        tag: "Programme 3",
        title: "Advanced English (Grade 11–12)",
        description:
            "For CBSE Class 12, IB English A, and IGCSE First Language. Includes essay writing, literary commentary, and preparation for oral assessments.",
    },
    {
        tag: "Programme 4",
        title: "SAT / IELTS / TOEFL English",
        description:
            "Structured preparation for international English proficiency tests. Reading strategies, grammar for writing section, and speaking practice for IELTS.",
    },
];

export default function SpecialEnglishClasses() {
    return (
        <section className={styles.section} id="english">
            <div className={styles.container}>
                <div className={styles.layout}>

                    {/* ── Left column: label, heading, sub, feature list ── */}
                    <div className={styles.leftCol}>
                        <div className={styles.secLabel}>Special English Classes</div>

                        <h2 className={styles.secHeading}>
                            English isn't just a subject —<br />
                            it's a <em className={styles.headingEm}>life skill</em>
                        </h2>

                        <p className={styles.secSub}>
                            EduQuest's Special English Programme goes beyond grammar and
                            comprehension. We build confident communicators, strong writers,
                            and analytical readers — skills that matter in exams and beyond.
                        </p>

                        <div className={styles.featureList}>
                            {featureItems.map((item, index) => (
                                <div key={index} className={styles.featureItem}>
                                    <span className={styles.featureIcon}>{item.icon}</span>
                                    <div className={styles.featureText}>
                                        <strong className={styles.featureStrong}>
                                            {item.title}
                                        </strong>
                                        <span className={styles.featureSpan}>
                                            {item.description}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right column: programme cards ── */}
                    <div className={styles.cardsCol}>
                        {programmeCards.map((card, index) => (
                            <div key={index} className={styles.card}>
                                <span className={styles.cardTag}>{card.tag}</span>
                                <h4 className={styles.cardTitle}>{card.title}</h4>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}