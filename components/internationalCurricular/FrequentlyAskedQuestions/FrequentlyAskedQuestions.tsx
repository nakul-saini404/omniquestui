'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FrequentlyAskedQuestions.module.css';

type Category = 'all' | 'igcse' | 'gcse' | 'biology' | 'chemistry' | 'physics' | 'general';

interface FaqItem {
    id: number;
    category: Category;
    question: string;
    answer: string;
}

const FAQ_DATA: FaqItem[] = [
    {
        id: 1,
        category: 'igcse',
        question: 'Is the IGCSE Programme recognized by schools & universities globally?',
        answer:
            'Yes. IGCSE is one of the most globally recognized school-level qualifications, accepted by schools and universities in 160+ countries. It carries worldwide status and credibility that is considered superior to many national-level programs by colleges and universities worldwide.',
    },
    {
        id: 2,
        category: 'igcse',
        question: 'Is the IGCSE recognized by Indian Boards and Universities?',
        answer:
            'Yes. IGCSE is recognized by CBSE, CISCE, and state boards in India as a qualification for entry to Class XI or higher secondary courses. It is also a recognized Class X qualification, meeting requirements for admission to undergraduate courses in India.',
    },
    {
        id: 3,
        category: 'igcse',
        question: 'What are the benefits of IGCSE over Indian national board exams?',
        answer:
            'IGCSE offers: (1) international examination with worldwide recognition and credibility, (2) motivates inquiry-based learning rather than rote memorisation, (3) excellent preparation for the IB Diploma Programme, and (4) strong skills development through coursework, practicals, and application-oriented learning.',
    },
    {
        id: 4,
        category: 'igcse',
        question: 'After completing IGCSE, what career and study options are available?',
        answer:
            'After IGCSE, students can pursue: IB Diploma Programme (Class XI–XII), GCE A Levels, Advanced International Certificate of Education (AICE), North American Advanced Placement (AP), or the Indian Plus Two system (ISC/CBSE/HSC). IGCSE board exams are held May–June with results in August.',
    },
    {
        id: 5,
        category: 'gcse',
        question: 'What is the difference between GCSE and IGCSE?',
        answer:
            'GCSE is the standard British secondary school qualification (equivalent to Class 12 level), primarily designed for students in the UK. IGCSE is the internationally adapted version of GCSE, designed for a global student body with a more content-oriented approach. Both are assessed by boards like Cambridge (IGCSE) or AQA/Edexcel (GCSE).',
    },
    {
        id: 6,
        category: 'gcse',
        question: 'Which exam boards does EduQuest support for GCSE?',
        answer:
            'EduQuest supports students for all major GCSE exam boards including Edexcel (Pearson), AQA, OCR, and Cambridge. Our mentors are familiar with the specific syllabus, mark scheme requirements, and question styles of each board.',
    },
    {
        id: 7,
        category: 'biology',
        question: 'What topics does IGCSE Biology cover?',
        answer:
            'The IGCSE Biology curriculum covers: Classification of Living Organisms, Cells, Enzymes, Nutrition, Transport in Plants and Animals, Excretion, Respiration, Coordination and Response, Homeostasis, Genetics and Evolution, and Human Influences on the Ecosystem. The syllabus has a special emphasis on the human body and its processes.',
    },
    {
        id: 8,
        category: 'biology',
        question: 'Why is IGCSE Biology considered challenging for students?',
        answer:
            'IGCSE Biology requires strong conceptual understanding alongside memorisation. Many students struggle with the transition from surface-level learning to the analytical and application-based thinking required by Cambridge exams. The human body systems in particular require detail-oriented understanding that goes beyond what many school courses provide.',
    },
    {
        id: 9,
        category: 'chemistry',
        question: 'What does IGCSE Chemistry cover?',
        answer:
            'IGCSE Chemistry covers: Particulate Nature of Matter, Atomic Structure, Stoichiometry, Chemical Bonding, Acids, Bases & Salts, Electrolysis, Energy Changes, Rates of Reaction, Equilibrium, Organic Chemistry, Inorganic Chemistry, and the Periodic Table. The extended syllabus also includes additional depth in electrochemistry and organic reactions.',
    },
    {
        id: 10,
        category: 'chemistry',
        question: 'What is the difference between IGCSE Core and Extended Chemistry?',
        answer:
            'IGCSE Core covers the fundamental syllabus and is assessed at grades C–G. IGCSE Extended covers all Core content plus additional advanced topics and is assessed at grades A*–G. Students aiming for strong university prospects or IB/A-Level progression are advised to take the Extended tier.',
    },
    {
        id: 11,
        category: 'physics',
        question: 'Is IGCSE Physics good preparation for IB or A-Level Physics?',
        answer:
            'Yes. IGCSE Physics (especially the Extended tier) provides excellent groundwork for IB Physics HL/SL and A-Level Physics. Topics like mechanics, electricity, waves, and atomic physics form the foundation for both. EduQuest mentors specifically align IGCSE coaching with the demands of the next level of study.',
    },
    {
        id: 12,
        category: 'general',
        question: "How does EduQuest's online tutoring work?",
        answer:
            "EduQuest's online tutoring uses live, interactive sessions via video conferencing with a shared whiteboard. Sessions are one-on-one or small group, fully personalised. Students receive study materials, practice worksheets, and access to doubt-resolution support via WhatsApp between sessions. All sessions can be recorded for replay.",
    },
    {
        id: 13,
        category: 'general',
        question: 'What are the pricing plans for IGCSE / GCSE tutoring?',
        answer:
            'EduQuest offers two flexible pricing plans for all IGCSE/GCSE subjects: (1) $80 per month for 4 hours/month ($20/hour) — ideal for supplementary support; (2) $128 per month for 8 hours/month ($16/hour) — recommended for students who want a comprehensive, broad-based approach. Both plans include the same quality of instruction, resources, and materials.',
    },
    {
        id: 14,
        category: 'general',
        question: 'Can Indian students (CBSE/ICSE) benefit from IGCSE preparation at EduQuest?',
        answer:
            'Absolutely. Many Indian students enrolled in CBSE/ICSE schools choose to supplement with IGCSE preparation to gain an internationally recognized credential, strengthen their subject knowledge, or prepare for IB or A-Level programmes. EduQuest bridges both systems and helps students transition smoothly.',
    },
];

const FILTERS: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Questions' },
    { key: 'igcse', label: 'IGCSE' },
    { key: 'gcse', label: 'GCSE' },
    { key: 'biology', label: 'Biology' },
    { key: 'chemistry', label: 'Chemistry' },
    { key: 'physics', label: 'Physics' },
    { key: 'general', label: 'EduQuest' },
];

const CATEGORY_COLORS: Record<Category, string> = {
    all: '',
    igcse: styles.tagIgcse,
    gcse: styles.tagGcse,
    biology: styles.tagBiology,
    chemistry: styles.tagChemistry,
    physics: styles.tagPhysics,
    general: styles.tagGeneral,
};

/* Animated accordion panel */
function AccordionPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (innerRef.current) {
            setHeight(isOpen ? innerRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            className={styles.answerPanel}
            style={{ height }}
            aria-hidden={!isOpen}
        >
            <div ref={innerRef} className={styles.answerInner}>
                {children}
            </div>
        </div>
    );
}

export default function FrequentlyAskedQuestions() {
    const [activeFilter, setActiveFilter] = useState<Category>('all');
    const [openId, setOpenId] = useState<number | null>(null);

    const filtered =
        activeFilter === 'all'
            ? FAQ_DATA
            : FAQ_DATA.filter((f) => f.category === activeFilter);

    const handleToggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const handleFilter = (cat: Category) => {
        setActiveFilter(cat);
        setOpenId(null);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div className={styles.header}>
                    <span className={styles.sectionLabel}>Frequently Asked Questions</span>
                    <h2 className={styles.sectionTitle}>
                        Everything You <em>Need to Know</em>
                    </h2>
                    <p className={styles.sectionSub}>
                        FAQs covering IGCSE, GCSE, our programs, and EduQuest itself.
                    </p>
                </div>

                {/* ── Filter Pills ── */}
                <div className={styles.filterRow} role="tablist" aria-label="FAQ categories">
                    {FILTERS.map((f) => (
                        <button
                            key={f.key}
                            role="tab"
                            aria-selected={activeFilter === f.key}
                            className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterBtnActive : ''}`}
                            onClick={() => handleFilter(f.key)}
                        >
                            {f.label}
                            {activeFilter === f.key && (
                                <span className={styles.filterCount}>
                                    {f.key === 'all' ? FAQ_DATA.length : FAQ_DATA.filter((q) => q.category === f.key).length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ── FAQ List ── */}
                <div className={styles.faqList} role="list">
                    {filtered.map((item, index) => {
                        const isOpen = openId === item.id;
                        const tagClass = CATEGORY_COLORS[item.category] ?? '';

                        return (
                            <div
                                key={item.id}
                                role="listitem"
                                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                                style={{ '--item-delay': `${index * 40}ms` } as React.CSSProperties}
                            >
                                <button
                                    className={styles.questionBtn}
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${item.id}`}
                                >
                                    <span className={styles.questionText}>{item.question}</span>
                                    <div className={styles.questionMeta}>
                                        <span className={`${styles.tag} ${tagClass}`}>
                                            {item.category === 'general' ? 'EduQuest' : item.category.toUpperCase()}
                                        </span>
                                        <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M4.5 9H13.5M9 4.5V13.5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    />
                                            </svg>
                                        </span>
                                    </div>
                                </button>

                                <AccordionPanel isOpen={isOpen}>
                                    <p id={`faq-answer-${item.id}`} className={styles.answerText}>
                                        {item.answer}
                                    </p>
                                </AccordionPanel>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}