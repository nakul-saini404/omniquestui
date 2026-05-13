"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQ.module.css";

/* ─── Types ─── */
interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    label: string;
    emoji: string;
    items: FAQItem[];
}

/* ─── Data ─── */
const categories: FAQCategory[] = [
    {
        id: "gen",
        label: "General IB",
        emoji: "🎓",
        items: [
            {
                question: "What is the IB Diploma Programme (DP)?",
                answer:
                    "The IB Diploma Programme is a two-year pre-university curriculum for students aged 16–19. Students study six subjects across different groups, write an Extended Essay, complete a Theory of Knowledge (TOK) course and participate in CAS (Creativity, Activity, Service). The maximum score is 45 points (42 from subjects + 3 bonus from TOK/EE).",
            },
            {
                question: "What is the difference between IB HL and SL?",
                answer:
                    "Higher Level (HL) subjects have more content, greater depth and more complex assessments than Standard Level (SL). Students must take at least 3 HL and 3 SL subjects. HL is generally recommended for subjects relevant to your university major. Universities often require HL passes with specific grades for competitive courses.",
            },
            {
                question: "How is the IB graded?",
                answer:
                    "Each subject is graded 1–7. The final score combines six subject grades (max 42) plus up to 3 bonus points from TOK and the Extended Essay, giving a maximum of 45. A score of 24 or above (with passing grades) typically earns the IB Diploma. The world average is around 30.",
            },
            {
                question: "Is the IB harder than A-Levels or AP?",
                answer:
                    "The IB is broadly comparable in difficulty but distinctive in its breadth — IB students study more subjects simultaneously. The Internal Assessment, Extended Essay and TOK add components that A-Level and AP don't require. Many students find the IB more holistic and better preparation for university independent learning.",
            },
            {
                question: "Which universities accept the IB Diploma?",
                answer:
                    "The IB Diploma is accepted by over 5,000 universities in more than 150 countries, including Oxford, Cambridge, Harvard, MIT, NUS, and virtually all top Indian universities under the study abroad pathways. Many universities have specific IB score requirements for individual courses.",
            },
        ],
    },
    {
        id: "chem",
        label: "Chemistry",
        emoji: "⚗️",
        items: [
            {
                question: "What is the biggest challenge in IB Chemistry HL?",
                answer:
                    "IB Chemistry HL is challenging due to its depth in organic chemistry, thermodynamics and reaction kinetics. The Internal Assessment also demands strong experimental design skills. Students who struggle with mathematical applications — particularly in energetics and equilibrium — often find HL demanding without expert support.",
            },
            {
                question: "Should I take IB Chemistry HL or SL?",
                answer:
                    "Take Chemistry HL if you plan to study medicine, dentistry, pharmacy, chemical engineering or a chemistry-related degree. Many universities require Chemistry HL for medical school applications. If chemistry is not directly relevant to your university path, SL may be more appropriate and allow you to focus HL effort elsewhere.",
            },
            {
                question: "How can EduQuest help with the IB Chemistry IA?",
                answer:
                    "Our tutors guide students through every stage of the IA — from selecting a meaningful and original research question to designing an ethical methodology, collecting and processing data with appropriate uncertainties, and writing a polished report that meets all IB IA criteria for a top score.",
            },
            {
                question: "How many papers does IB Chemistry have?",
                answer:
                    "IB Chemistry has three papers: Paper 1 (multiple choice, 30 questions for SL / 40 for HL), Paper 2 (short and long answer questions) and Paper 3 (data-based questions and optional topic questions for HL). The IA accounts for 20% of the final grade for both HL and SL.",
            },
        ],
    },
    {
        id: "phys",
        label: "Physics",
        emoji: "⚛️",
        items: [
            {
                question: "Is IB Physics HL very mathematical?",
                answer:
                    "Yes — IB Physics HL requires solid mathematical skills including algebra, trigonometry and basic calculus (especially for HL topics like electromagnetic induction and circular motion). Students who are comfortable with IB Math AA SL or above generally find the mathematical aspects manageable with good tuition.",
            },
            {
                question: "What Option topics does IB Physics HL offer?",
                answer:
                    "IB Physics HL students choose one Option topic from: A (Relativity), B (Engineering Physics), C (Imaging) or D (Astrophysics). Astrophysics is the most popular choice globally and is well supported by EduQuest tutors who specialise in this area.",
            },
            {
                question: "How does EduQuest approach IB Physics exam preparation?",
                answer:
                    "We begin with conceptual mastery, then move to mathematical application and finally intensive past-paper practice. Our tutors annotate mark schemes with students so they understand exactly how marks are awarded — including the specific language IB examiners look for in Paper 2 long-answer responses.",
            },
        ],
    },
    {
        id: "math",
        label: "Mathematics",
        emoji: "📐",
        items: [
            {
                question: "What is the difference between IB Math AA and AI?",
                answer:
                    "Analysis & Approaches (AA) focuses on pure mathematics, algebra, proof and calculus — ideal for students heading into STEM fields. Applications & Interpretation (AI) focuses on statistics, modelling and real-world applications — better suited for business, social sciences and humanities pathways. Both have HL and SL levels.",
            },
            {
                question: "Is IB Math AA HL extremely difficult?",
                answer:
                    "IB Math AA HL is considered one of the most challenging IB subjects. It requires strong abstract reasoning, comfort with proof and significant mathematical maturity. However, with consistent practice, the right tutor and a structured approach, students regularly achieve 6s and 7s. EduQuest has an excellent track record with AA HL.",
            },
            {
                question: "What is the IB Math Exploration (IA)?",
                answer:
                    "The Mathematical Exploration is the Internal Assessment for IB Math — a 12–20 page report where students investigate a mathematical topic of personal interest. It is worth 20% of the final grade and is assessed on five criteria: Presentation, Mathematical Communication, Personal Engagement, Reflection and Mathematical Content.",
            },
        ],
    },
    {
        id: "bio",
        label: "Biology",
        emoji: "🧬",
        items: [
            {
                question: "Is IB Biology mostly memorisation?",
                answer:
                    "While IB Biology does require significant factual recall, top scorers consistently demonstrate application and analysis skills. Paper 1 tests recall through MCQ, Paper 2 tests application and extended writing, and Paper 3 tests data analysis. Students who only memorise without understanding context and application typically score no higher than a 5.",
            },
            {
                question: "How should I structure my IB Biology IA?",
                answer:
                    "A strong IB Biology IA needs: a focused research question with a clear independent and dependent variable, a justified and repeatable methodology, sufficient quantitative data, appropriate statistical analysis (t-test, chi-square, etc.) and a reflective evaluation that acknowledges limitations and suggests improvements. Our tutors guide students through every element.",
            },
            {
                question: "What are the IB Biology Option topics?",
                answer:
                    "IB Biology HL students study one Option: A (Neurobiology & Behaviour), B (Biotechnology & Bioinformatics), C (Ecology & Conservation) or D (Human Physiology). The chosen Option appears in Paper 3 Section B. EduQuest tutors cover all Options and help students choose the most scoring-friendly based on their interests and strengths.",
            },
        ],
    },
    {
        id: "eng",
        label: "English",
        emoji: "📖",
        items: [
            {
                question: "What is the IB English Individual Oral (IO)?",
                answer:
                    "The Individual Oral is a 15-minute assessed speaking activity where students deliver a 10-minute analysis of how a global issue is depicted in one literary and one non-literary work studied in class, followed by a 5-minute discussion with the teacher. It accounts for 30% of the SL grade and 20% of the HL grade.",
            },
            {
                question: "How do I write a strong IB English Paper 1 response?",
                answer:
                    "A strong Paper 1 response begins with identifying the text type and guiding question, then builds a structured analysis addressing audience, purpose and stylistic choices. Each paragraph should embed textual evidence, name the technique used and explain the effect on the reader. Avoid summarising — IB examiners reward analysis of how language constructs meaning.",
            },
            {
                question:
                    "Should I take IB English Language & Literature or Literature?",
                answer:
                    "Choose Language & Literature if you enjoy analysing media, advertising, speeches and non-literary text types alongside literature. Choose Literature if you love close reading of novels, poetry and plays. Both pathways suit university English, law, humanities and social science applications. Our tutors can help you choose based on your strengths and target university requirements.",
            },
        ],
    },
    {
        id: "myp",
        label: "MYP",
        emoji: "🏫",
        items: [
            {
                question: "How is MYP assessed — does it have final exams?",
                answer:
                    "Most MYP assessment is ongoing through criterion-based school assessments (Criteria A, B, C and D vary by subject). However, schools can optionally register Year 5 (Grade 10) students for the IB eAssessment — on-screen exams that lead to the MYP Certificate. Not all IB schools participate in eAssessment; check with your school.",
            },
            {
                question: "What is the MYP Personal Project?",
                answer:
                    "The Personal Project is a student-led project completed in MYP Year 5. Students choose a topic of personal interest, define a product or outcome, follow a structured process and write a report of 1,500–3,500 words documenting their learning. It is assessed by the school against IB criteria covering Planning, Applying Skills, Reflecting and Product.",
            },
            {
                question: "Does EduQuest help with MYP as well as IB DP?",
                answer:
                    "Absolutely. EduQuest provides expert tutoring across all MYP subject groups — Sciences, Mathematics, Language & Literature, and Individuals & Societies. We also offer dedicated Personal Project mentoring. Starting with strong MYP support creates a solid foundation for succeeding in the IB Diploma Programme.",
            },
        ],
    },
    {
        id: "eq",
        label: "EduQuest",
        emoji: "🏢",
        items: [
            {
                question: "How do I start with EduQuest?",
                answer:
                    "Getting started is simple. Contact us via phone (+91-9958041888), email (contact@eduquest.org.in) or through the website. We'll assess your requirements, match you with the right tutor for your subject and level, and schedule a free 3-day trial session so you can experience the teaching before committing to a plan.",
            },
            {
                question: "Are sessions fully online or do you have physical centres?",
                answer:
                    "EduQuest primarily delivers one-on-one sessions fully online via secure video conferencing. This means students from anywhere in India and across the globe can access our expert IB tutors without any geographical limitations. Sessions are conducted on platforms that support interactive whiteboard tools and screen sharing.",
            },
            {
                question:
                    "Can I get help with just one topic or do I need a full course?",
                answer:
                    "We offer both full-course coaching and targeted topic-by-topic help. Whether you need intensive support on one specific area (e.g., IB Chemistry Organic HL) or a comprehensive programme covering your entire subject over months, we can build a package that suits your timeline and goals.",
            },
            {
                question: "Do you offer crash courses before IB exams?",
                answer:
                    "Yes. EduQuest offers intensive crash courses in the weeks leading up to the IB exam session. These fast-track programmes cover high-priority topics, focus heavily on past-paper practice and exam technique, and are specifically designed to maximise score improvement in a short timeframe.",
            },
        ],
    },
];

/* ─── Component ─── */
export default function FAQ() {
    const [activeTab, setActiveTab] = useState("gen");
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [animKey, setAnimKey] = useState(0);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const answerRefs = useRef<Record<string, HTMLDivElement | null>>({});

    /* scroll reveal */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleTabClick = (id: string) => {
        if (id === activeTab) return;
        setActiveTab(id);
        setOpenItem(null);
        setAnimKey((k) => k + 1);
    };

    const toggleItem = (key: string) => {
        setOpenItem((prev) => (prev === key ? null : key));
    };

    const activeCategory = categories.find((c) => c.id === activeTab)!;

    return (
        <section
            id="faq"
            ref={sectionRef}
            className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
        >
            {/* bg decoration */}
            <div className={styles.bgDeco} aria-hidden="true" />

            {/* Header */}
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>FAQ</span>
                <h2 className={styles.sectionTitle}>
                    Frequently Asked{" "}
                    <span className={styles.titleAccent}>Questions</span>
                </h2>
                <p className={styles.sectionSub}>
                    Find answers to the most common questions about IB, our coaching and
                    how to get started with EduQuest.
                </p>
            </div>

            {/* Tabs */}
            <div className={styles.tabs} role="tablist" aria-label="FAQ Categories">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        role="tab"
                        aria-selected={activeTab === cat.id}
                        aria-controls={`faq-panel-${cat.id}`}
                        className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ""
                            }`}
                        onClick={() => handleTabClick(cat.id)}
                    >
                        <span className={styles.tabEmoji}>{cat.emoji}</span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Panel */}
            <div
                key={animKey}
                id={`faq-panel-${activeCategory.id}`}
                role="tabpanel"
                className={styles.panel}
                style={{ maxWidth: "1500px" }}
            >
                <div className={styles.faqList}>
                    {activeCategory.items.map((item, i) => {
                        const key = `${activeCategory.id}-${i}`;
                        const isOpen = openItem === key;

                        return (
                            <div
                                key={key}
                                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                                style={{ animationDelay: `${i * 0.07}s` }}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleItem(key)}
                                    aria-expanded={isOpen}
                                    aria-controls={`answer-${key}`}
                                >
                                    {/* number badge */}
                                    <span className={styles.qNum}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className={styles.qText}>{item.question}</span>
                                    {/* animated chevron */}
                                    <span
                                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 6L8 11L13 6"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    id={`answer-${key}`}
                                    className={styles.faqAnswer}
                                    style={{
                                        maxHeight: isOpen
                                            ? `${answerRefs.current[key]?.scrollHeight ?? 400}px`
                                            : "0px",
                                    }}
                                >
                                    <div
                                        ref={(el) => {
                                            answerRefs.current[key] = el;
                                        }}
                                        className={styles.faqAnswerInner}
                                    >
                                        <p className={styles.faqAnswerText}>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}