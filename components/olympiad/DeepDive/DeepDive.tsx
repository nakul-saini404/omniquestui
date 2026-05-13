'use client';

import { useState } from 'react';
import styles from './DeepDive.module.css';

/* ── Types ── */
interface MetaItem {
    label: string;
    value: string;
}

interface OlympiadData {
    id: string;
    icon: string;
    shortName: string;
    fullName: string;
    eligibility: string;
    headerTheme: string;
    whatTitle: string;
    whatDesc: string;
    topics: string[];
    whyTitle: string;
    whyItems: { emoji: string; text: string }[];
    meta: MetaItem[];
}

/* ── Data ── */
const olympiads: OlympiadData[] = [
    {
        id: 'icso',
        icon: '💻',
        shortName: 'ICSO',
        fullName: 'International Cyber Science Olympiad',
        eligibility: 'Class 1 – 10',
        headerTheme: styles.cardHeaderSky,
        whatTitle: 'What Is ICSO?',
        whatDesc:
            'The International Cyber Science Olympiad (ICSO) tests students on computer science fundamentals, digital literacy, and cyber awareness. It is designed to prepare young learners for an increasingly technology-driven world — from basic computer operations in primary grades all the way to programming logic, networking, and cybersecurity awareness in Classes 8–10.',
        topics: [
            'Computer Basics',
            'MS Office Suite',
            'Internet & Email',
            'Programming Logic',
            'Algorithms',
            'Networking Concepts',
            'Cybersecurity',
            'Operating Systems',
            'Database Basics',
            'Scratch / Block Coding',
        ],
        whyTitle: 'Why Is ICSO Necessary?',
        whyItems: [
            { emoji: '🖥️', text: 'Builds foundational digital literacy — essential in every career path today' },
            { emoji: '🔐', text: 'Raises awareness about cybersecurity, online safety, and responsible digital citizenship' },
            { emoji: '💡', text: 'Develops logical and computational thinking from an early age' },
            { emoji: '🎓', text: 'A top rank in ICSO adds powerful technical credentials to a student\'s profile' },
            { emoji: '🌍', text: 'Prepares students for global careers in tech, AI, data science, and engineering' },
            { emoji: '📊', text: 'Bridges the gap between school computer classes and real-world tech skills' },
        ],
        meta: [
            { label: 'Eligibility', value: 'Class 1 – 10' },
            { label: 'Mode', value: 'Online / Offline' },
            { label: 'Sections', value: '2–3 per paper' },
            { label: 'Duration', value: '60 minutes' },
            { label: 'Recognised By', value: 'Schools Nationwide' },
        ],
    },
    {
        id: 'ieo',
        icon: '📖',
        shortName: 'IEO',
        fullName: 'International English Olympiad',
        eligibility: 'Class 1 – 12',
        headerTheme: styles.cardHeaderTeal,
        whatTitle: 'What Is IEO?',
        whatDesc:
            'The International English Olympiad (IEO) is a competitive examination focused on English language proficiency — including grammar, vocabulary, reading comprehension, and verbal reasoning. Open to Class 1 to Class 12, IEO is widely regarded as the most important language olympiad because English is the primary medium of academic, professional, and global communication.',
        topics: [
            'Grammar & Usage',
            'Vocabulary',
            'Reading Comprehension',
            'Spelling & Word Forms',
            'Sentence Correction',
            'Verbal Reasoning',
            'Idioms & Phrases',
            'Synonyms & Antonyms',
            'Writing Skills',
        ],
        whyTitle: 'Why Is IEO Necessary?',
        whyItems: [
            { emoji: '🗣️', text: 'English fluency is the single most important life skill for higher education and global careers' },
            { emoji: '📝', text: 'Directly strengthens SAT, IELTS, TOEFL, and all language-based competitive exams' },
            { emoji: '📚', text: 'Improves comprehension skills that benefit every academic subject' },
            { emoji: '🏆', text: 'Internationally recognised credential adding value to school and university profiles' },
            { emoji: '🧩', text: 'Develops verbal reasoning — tested in CAT, GMAT, and GRE aptitude exams' },
            { emoji: '💼', text: 'Employers and universities consistently rank communication as a top sought-after skill' },
        ],
        meta: [
            { label: 'Eligibility', value: 'Class 1 – 12' },
            { label: 'Mode', value: 'Online / Offline' },
            { label: 'Sections', value: 'Word & Structure, Reading, HOT' },
            { label: 'Duration', value: '60 minutes' },
            { label: 'Recognised By', value: 'Schools & Colleges Nationwide' },
        ],
    },
    {
        id: 'igko',
        icon: '🌍',
        shortName: 'IGKO',
        fullName: 'International General Knowledge Olympiad',
        eligibility: 'Class 1 – 10',
        headerTheme: styles.cardHeaderAmber,
        whatTitle: 'What Is IGKO?',
        whatDesc:
            'The International General Knowledge Olympiad (IGKO) assesses students\' awareness of the world around them — spanning science, history, geography, current affairs, sports, and culture. It is one of the most holistic olympiads, testing breadth of knowledge and is particularly valuable for students who want to develop a well-rounded intellectual personality.',
        topics: [
            'Science & Technology',
            'World Geography',
            'Indian History',
            'Current Affairs',
            'Famous Personalities',
            'Sports & Games',
            'Arts & Culture',
            'Environment',
            'Logical Reasoning',
            'Economics Basics',
        ],
        whyTitle: 'Why Is IGKO Necessary?',
        whyItems: [
            { emoji: '🌍', text: 'Creates informed, curious citizens who understand the world beyond their classroom' },
            { emoji: '🧭', text: 'Builds general awareness needed for civil services, MBA, and competitive exams later' },
            { emoji: '💬', text: 'Improves performance in group discussions, debates, and personal interviews' },
            { emoji: '📰', text: 'Encourages a habit of reading newspapers and staying updated on world events' },
            { emoji: '🧠', text: 'Broadens perspective, making students more empathetic, analytical, and globally aware' },
            { emoji: '🏅', text: 'IGKO medals signal intellectual breadth — valued in holistic university admissions' },
        ],
        meta: [
            { label: 'Eligibility', value: 'Class 1 – 10' },
            { label: 'Mode', value: 'Online / Offline' },
            { label: 'Sections', value: 'GK, Current Affairs, HOT' },
            { label: 'Duration', value: '60 minutes' },
            { label: 'Recognised By', value: 'Schools Nationwide' },
        ],
    },
    {
        id: 'iso',
        icon: '🔬',
        shortName: 'ISO',
        fullName: 'International Science Olympiad',
        eligibility: 'Class 1 – 12',
        headerTheme: styles.cardHeaderRose,
        whatTitle: 'What Is ISO?',
        whatDesc:
            'The International Science Olympiad (ISO) tests conceptual understanding of Physics, Chemistry, Biology, and Environmental Science. It challenges students to think beyond textbook formulas and truly understand the principles of natural science. For Classes 11–12, the ISO curriculum directly aligns with JEE and NEET preparation — making it one of the highest-value olympiads a science student can appear in.',
        topics: [
            'Physics — Motion, Force, Light',
            'Chemistry — Atoms, Reactions',
            'Biology — Cell, Life Processes',
            'Environment & Ecology',
            'Scientific Reasoning',
            'Practical Application',
            'Human Body Systems',
            'Space Science',
            'Data Interpretation',
        ],
        whyTitle: 'Why Is ISO Necessary?',
        whyItems: [
            { emoji: '🔬', text: 'Directly strengthens preparation for JEE, NEET, and other science-based entrance exams' },
            { emoji: '🧪', text: 'Builds deep conceptual understanding that goes beyond board exam expectations' },
            { emoji: '🏅', text: 'A gold or silver ISO rank is a prestigious credential for engineering and medical college applications' },
            { emoji: '💡', text: 'Develops scientific temperament — observation, hypothesis, and evidence-based reasoning' },
            { emoji: '🌱', text: 'Encourages environmental awareness and responsibility in younger students' },
            { emoji: '📐', text: 'Prepares students for advanced courses like IB, AP Science, and international competitions' },
        ],
        meta: [
            { label: 'Eligibility', value: 'Class 1 – 12' },
            { label: 'Mode', value: 'Online / Offline' },
            { label: 'Sections', value: 'Science, Applied Science, HOT' },
            { label: 'Duration', value: '60 minutes' },
            { label: 'Recognised By', value: 'Schools, Colleges & Universities' },
        ],
    },
];

const tabs = [
    { id: 'icso', label: '💻 ICSO' },
    { id: 'ieo', label: '📖 IEO' },
    { id: 'igko', label: '🌍 IGKO' },
    { id: 'iso', label: '🔬 ISO' },
];

/* ── Component ── */
export default function DeepDive() {
    const [activeTab, setActiveTab] = useState<string>('icso');

    const active = olympiads.find((o) => o.id === activeTab)!;

    return (
        <section className={styles.section} id="olympiad-subjects">
            <div className={styles.container}>

                {/* Section Head */}
                <div className={styles.sectionHead}>
                    <span className={styles.sectionEyebrow}>Deep Dive</span>
                    <h2>Understanding ICSO, IEO, IGKO &amp; ISO</h2>
                    <p>
                        Each olympiad targets a distinct subject area. Explore what each one
                        covers, why it matters, and what it can do for your child's future.
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabsRow}>
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            className={`${styles.tabBtn} ${activeTab === t.id ? styles.tabBtnActive : ''}`}
                            onClick={() => setActiveTab(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Detail Card */}
                <div className={styles.card}>

                    {/* Card Header */}
                    <div className={`${styles.cardHeader} ${active.headerTheme}`}>
                        <div className={styles.odcIcon}>{active.icon}</div>
                        <div className={styles.odcHeaderText}>
                            <h3>{active.shortName}</h3>
                            <div className={styles.odcFullName}>{active.fullName}</div>
                        </div>
                        <div className={styles.odcBadge}>{active.eligibility}</div>
                    </div>

                    {/* Card Body */}
                    <div className={styles.cardBody}>

                        {/* Left: What + Topics */}
                        <div className={styles.odcSection}>
                            <h4>{active.whatTitle}</h4>
                            <p>{active.whatDesc}</p>
                            <h4 className={styles.topicHeading}>Topics Covered</h4>
                            <div className={styles.topicTags}>
                                {active.topics.map((t) => (
                                    <span key={t} className={styles.topicTag}>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right: Why */}
                        <div className={styles.odcSection}>
                            <h4>{active.whyTitle}</h4>
                            <ul className={styles.necessityList}>
                                {active.whyItems.map((item) => (
                                    <li key={item.text}>
                                        <span className={styles.ni}>{item.emoji}</span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Card Footer */}
                    <div className={styles.cardFooter}>
                        <div className={styles.odcMeta}>
                            {active.meta.map((m) => (
                                <div key={m.label} className={styles.odcMetaItem}>
                                    <strong>{m.label}</strong>
                                    {m.value}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}