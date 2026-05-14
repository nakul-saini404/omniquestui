'use client';

import { useState, useEffect } from 'react';
import styles from './SubjectExplorer.module.css';

/* ── Types ── */
interface PriceBox {
    price: string;
    detail: string;
}

interface SubjectPanel {
    id: string;
    title: string;
    subtitle: string;
    board: string;
    aboutHeading: string;
    aboutText: string;
    secondHeading: string;
    secondText: string;
    pricing: PriceBox[];
    topics: string[];
    enrollLabel: string;
}

/* ── Data ── */
const igcseSubjects: SubjectPanel[] = [
    {
        id: 'igcse-biology',
        title: '🧬 IGCSE Biology',
        subtitle: 'Cambridge International · Classes 9–10',
        board: 'IGCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'At EduQuest™, we offer premium IGCSE Biology tutoring focused on not just understanding concepts, but conveying the elegance of the subject. The Cambridge IGCSE Biology curriculum emphasizes human development, practical skills, and scientific thinking. Topics span from cellular biology to ecology.',
        secondHeading: 'Why EduQuest?',
        secondText:
            'Our experienced mentors guide students with structured lesson plans, regular assessments, and extensive resource materials — enabling students to excel in biology without relying solely on school courses.',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month · $20/hr' },
            { price: '$128/mo', detail: '8 hrs/month · $16/hr' },
        ],
        topics: [
            'Cells and Cell Structure',
            'Enzymes & Nutrition',
            'Transport in Plants & Animals',
            'Respiration & Excretion',
            'Coordination and Response',
            'Homeostasis',
            'Genetics and Evolution',
            'Classification of Living Organisms',
            'Human Influences on the Ecosystem',
        ],
        enrollLabel: 'Enroll in Biology →',
    },
    {
        id: 'igcse-chemistry',
        title: '⚗️ IGCSE Chemistry',
        subtitle: 'Cambridge International · Classes 9–10',
        board: 'IGCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'Chemistry is one of the most vital disciplines for daily life and higher STEM education. IGCSE Chemistry (Cambridge) develops scientific thinking, fundamental chemistry understanding, and technical skills necessary for Cambridge AS & A Level progression. EduQuest tutors help students build a scientific aptitude with conceptual depth.',
        secondHeading: 'Curriculum Level',
        secondText:
            'Available as IGCSE Core and IGCSE Extended. Evaluation by Cambridge International Education or Edexcel, as selected by the school.',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month · $20/hr' },
            { price: '$128/mo', detail: '8 hrs/month · $16/hr' },
        ],
        topics: [
            'Particulate Nature of Matter',
            'Atomic Structure & Periodic Table',
            'Stoichiometry & Valency',
            'Acids, Bases & Salts',
            'Electrolysis',
            'Organic Chemistry',
            'Inorganic Chemistry',
            'Chemical Energetics & Reactions',
            'Rates of Reaction & Equilibrium',
        ],
        enrollLabel: 'Enroll in Chemistry →',
    },
    {
        id: 'igcse-physics',
        title: '⚡ IGCSE Physics',
        subtitle: 'Cambridge International · Classes 9–10',
        board: 'IGCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'IGCSE Physics builds strong conceptual and mathematical foundations in physical sciences. EduQuest tutors help students develop analytical thinking through problem-solving, experiments, and structured revision strategies. The course is ideal preparation for A-Level Physics or IB DP Physics.',
        secondHeading: 'Learning Approach',
        secondText:
            'Our mentors focus on real-world applications, past paper mastery, and developing the quantitative reasoning skills required for future STEM study.',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month · $20/hr' },
            { price: '$128/mo', detail: '8 hrs/month · $16/hr' },
        ],
        topics: [
            'Motion, Forces & Energy',
            'Pressure & Thermal Physics',
            'Waves, Sound & Light',
            'Electricity & Magnetism',
            'Electromagnetic Induction',
            'Atomic Physics & Radioactivity',
            'Space Physics',
            'Experimental Techniques',
        ],
        enrollLabel: 'Enroll in Physics →',
    },
    {
        id: 'igcse-english',
        title: '📖 IGCSE English',
        subtitle: 'Cambridge International · Classes 9–10',
        board: 'IGCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'IGCSE English Language & Literature develops students into confident, articulate communicators. EduQuest tutors guide students through comprehension, directed writing, grammar, and critical analysis with personalized attention to individual language development.',
        secondHeading: 'Skills Developed',
        secondText:
            'Students learn to appreciate how texts in English accomplish varied results, understand cultural influences on language, and develop insightful, genuine responses to literary content.',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month · $20/hr' },
            { price: '$128/mo', detail: '8 hrs/month · $16/hr' },
        ],
        topics: [
            'Reading Comprehension Strategies',
            'Directed Writing Techniques',
            'Descriptive & Narrative Composition',
            'Summary Writing',
            'Argumentative & Persuasive Writing',
            'Grammar & Vocabulary Enhancement',
            'Literature: Prose, Poetry, Drama',
            'Critical & Analytical Response',
        ],
        enrollLabel: 'Enroll in English →',
    },
    {
        id: 'igcse-maths',
        title: '📐 IGCSE Mathematics',
        subtitle: 'Cambridge International · Classes 9–10',
        board: 'IGCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'IGCSE Mathematics (Cambridge) develops rigorous mathematical thinking across pure and applied topics. EduQuest mentors offer both Core and Extended tier coaching, with a focus on conceptual mastery, exam technique, and efficient problem-solving for Cambridge assessments.',
        secondHeading: 'Exam Tiers',
        secondText:
            'Core (grades C–G) and Extended (grades A*–E) tiers both supported. Regular mock tests, past paper drilling, and personalized feedback sessions included.',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month · $20/hr' },
            { price: '$128/mo', detail: '8 hrs/month · $16/hr' },
        ],
        topics: [
            'Number & Arithmetic',
            'Algebra & Functions',
            'Coordinate Geometry',
            'Trigonometry',
            'Mensuration & Vectors',
            'Statistics & Probability',
            'Set Notation & Logic',
            'Matrices & Transformations',
        ],
        enrollLabel: 'Enroll in Maths →',
    },
];

const gcseSubjects: SubjectPanel[] = [
    {
        id: 'gcse-english',
        title: '📝 GCSE English',
        subtitle: 'Edexcel / AQA · Classes 11–12',
        board: 'GCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'GCSE English Language and Literature (Edexcel/AQA) is the UK equivalent of Classes 11–12 English. EduQuest provides targeted coaching for both Language and Literature components — developing analytical writing, literary appreciation, and examination technique.',
        secondHeading: '',
        secondText: '',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month' },
            { price: '$128/mo', detail: '8 hrs/month' },
        ],
        topics: [
            'Unseen Fiction & Non-fiction Analysis',
            'Transactional & Persuasive Writing',
            'Imaginative / Creative Writing',
            'Poetry Anthology & Unseen Poetry',
            '19th Century Novel Study',
            'Shakespeare (Set Text)',
            'Modern Drama / Prose Text',
        ],
        enrollLabel: 'Enroll in GCSE English →',
    },
    {
        id: 'gcse-chemistry',
        title: '🔬 GCSE Chemistry',
        subtitle: 'Edexcel / AQA · Classes 11–12',
        board: 'GCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'GCSE Chemistry from Edexcel or AQA covers advanced chemical concepts suitable for Classes 11–12. EduQuest mentors help students build conceptual clarity across all topics with structured revision and exam-style practice to achieve top grades.',
        secondHeading: '',
        secondText: '',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month' },
            { price: '$128/mo', detail: '8 hrs/month' },
        ],
        topics: [
            'Atomic Structure & Bonding',
            'Quantitative Chemistry',
            'Chemical Changes',
            'Energy Changes in Reactions',
            'Rate & Extent of Reactions',
            'Organic Chemistry',
            'Earth & Atmosphere',
            'Using Resources',
        ],
        enrollLabel: 'Enroll in GCSE Chemistry →',
    },
    {
        id: 'gcse-physics',
        title: '🌊 GCSE Physics',
        subtitle: 'Edexcel / AQA · Classes 11–12',
        board: 'GCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'GCSE Physics (AQA/Edexcel) is a rigorous course covering classical and modern physics for Classes 11–12 level. EduQuest tutors provide conceptual clarity, mathematical problem-solving practice, and strategies for securing high grades in both papers.',
        secondHeading: '',
        secondText: '',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month' },
            { price: '$128/mo', detail: '8 hrs/month' },
        ],
        topics: [
            'Forces & Motion',
            'Energy Transfers & Resources',
            'Waves & Electromagnetic Spectrum',
            'Particle Model of Matter',
            'Atomic Structure & Radioactivity',
            'Electricity & Circuits',
            'Magnetism & Electromagnetism',
            'Space Physics',
        ],
        enrollLabel: 'Enroll in GCSE Physics →',
    },
    {
        id: 'gcse-maths',
        title: '📊 GCSE Mathematics',
        subtitle: 'Edexcel / AQA · Classes 11–12',
        board: 'GCSE',
        aboutHeading: 'About the Course',
        aboutText:
            'GCSE Mathematics (Edexcel/AQA) covers Foundation and Higher tier content. EduQuest mentors provide structured coaching across all topic areas with an emphasis on exam technique, speed, accuracy, and confidence under timed conditions.',
        secondHeading: '',
        secondText: '',
        pricing: [
            { price: '$80/mo', detail: '4 hrs/month' },
            { price: '$128/mo', detail: '8 hrs/month' },
        ],
        topics: [
            'Number & Ratio',
            'Algebra & Graphs',
            'Geometry & Measures',
            'Trigonometry & Pythagoras',
            'Statistics & Probability',
            'Sequences & Functions',
            'Vectors & Transformation',
            'Proportion & Rates of Change',
        ],
        enrollLabel: 'Enroll in GCSE Maths →',
    },
];

const igcseTabLabels = [
    { label: '🧬 Biology', id: 'igcse-biology' },
    { label: '⚗️ Chemistry', id: 'igcse-chemistry' },
    { label: '⚡ Physics', id: 'igcse-physics' },
    { label: '📖 English', id: 'igcse-english' },
    { label: '📐 Mathematics', id: 'igcse-maths' },
];

const gcseTabLabels = [
    { label: '📝 English', id: 'gcse-english' },
    { label: '🔬 Chemistry', id: 'gcse-chemistry' },
    { label: '🌊 Physics', id: 'gcse-physics' },
    { label: '📊 Mathematics', id: 'gcse-maths' },
];

/* ── Panel Component ── */
function Panel({ subject }: { subject: SubjectPanel }) {
    return (
        <div className={styles.panelCard}>
            <div className={styles.panelHeader}>
                <div>
                    <div className={styles.panelTitle}>{subject.title}</div>
                    <p className={styles.panelSubtitle}>{subject.subtitle}</p>
                </div>
                <div className={styles.panelBoard}>{subject.board}</div>
            </div>

            <div className={styles.panelBody}>
                {/* Left col */}
                <div className={styles.panelDesc}>
                    <h4 className={styles.panelDescHeading}>{subject.aboutHeading}</h4>
                    <p>{subject.aboutText}</p>

                    {subject.secondHeading && (
                        <>
                            <h4 className={`${styles.panelDescHeading} ${styles.panelDescHeadingTop}`}>
                                {subject.secondHeading}
                            </h4>
                            <p>{subject.secondText}</p>
                        </>
                    )}

                    <div className={styles.pricingBoxes}>
                        {subject.pricing.map((p) => (
                            <div key={p.detail} className={styles.priceBox}>
                                <div className={styles.price}>{p.price}</div>
                                <div className={styles.priceDetail}>{p.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right col */}
                <div className={styles.panelDesc}>
                    <h4 className={styles.panelDescHeading}>Key Topics Covered</h4>
                    <ul className={styles.topicList}>
                        {subject.topics.map((t) => (
                            <li key={t}>{t}</li>
                        ))}
                    </ul>
                    <div className={styles.enrollWrap}>
                        <a href="#contact" className={styles.btnPrimary}>
                            {subject.enrollLabel}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ── Main Component ── */
export default function SubjectExplorer() {
    const [mounted, setMounted] = useState(false);
    const [activeGroup, setActiveGroup] = useState<'igcse' | 'gcse'>('igcse');
    const [activeIgcse, setActiveIgcse] = useState('igcse-biology');
    const [activeGcse, setActiveGcse] = useState('gcse-english');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <section className={styles.subjectsSection} id="subjects" suppressHydrationWarning>
                <div className={styles.container} suppressHydrationWarning />
            </section>
        );
    }

    const currentSubjects = activeGroup === 'igcse' ? igcseSubjects : gcseSubjects;
    const currentActiveId = activeGroup === 'igcse' ? activeIgcse : activeGcse;
    const activeSubject = currentSubjects.find((s) => s.id === currentActiveId) ?? currentSubjects[0];

    return (
        <section className={styles.subjectsSection} id="subjects">
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.sectionLabel}>Subject Explorer</div>
                <h2 className={styles.sectionTitle}>
                    Click a Subject to See <em>Full Details</em>
                </h2>
                <p className={styles.sectionSub}>
                    Select IGCSE or GCSE, then choose a subject to view curriculum, topics, and pricing.
                </p>

                {/* Group toggle */}
                <div className={styles.tabGroups}>
                    <button
                        type="button"
                        className={`${styles.tabGroupBtn} ${activeGroup === 'igcse' ? styles.tabGroupBtnActive : ''}`}
                        onClick={() => setActiveGroup('igcse')}
                    >
                        IGCSE Subjects
                    </button>
                    <button
                        type="button"
                        className={`${styles.tabGroupBtn} ${activeGroup === 'gcse' ? styles.tabGroupBtnActive : ''}`}
                        onClick={() => setActiveGroup('gcse')}
                    >
                        GCSE Subjects
                    </button>
                </div>

                {/* IGCSE subject tabs */}
                {activeGroup === 'igcse' && (
                    <div>
                        <div className={styles.subjectTabs}>
                            {igcseTabLabels.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`${styles.subjBtn} ${activeIgcse === tab.id ? styles.subjBtnActive : ''}`}
                                    onClick={() => setActiveIgcse(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <Panel subject={activeSubject} />
                    </div>
                )}

                {/* GCSE subject tabs */}
                {activeGroup === 'gcse' && (
                    <div>
                        <div className={styles.subjectTabs}>
                            {gcseTabLabels.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`${styles.subjBtn} ${activeGcse === tab.id ? styles.subjBtnActive : ''}`}
                                    onClick={() => setActiveGcse(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <Panel subject={activeSubject} />
                    </div>
                )}

            </div>
        </section>
    );
}