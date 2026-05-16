"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FAQs.module.css";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const FAQ_DATA: FAQItem[] = [
    {
        question: "Do my StudyVault hours ever expire?",
        answer:
            "No — your purchased hours never expire. This is one of the core promises of StudyVault. Whether you use them over 2 weeks or 2 years, they remain valid. You'll never lose a single hour you've paid for.",
    },
    {
        question: "Can I use StudyVault for multiple subjects in the same week?",
        answer:
            "Absolutely. One of the biggest advantages of StudyVault is subject freedom. You can attend a SAT session on Monday, an AP Biology session on Wednesday, and an IELTS writing session on Friday — all from the same pool of hours.",
    },
    {
        question: "What subjects are covered under StudyVault?",
        answer: (
            <>
                StudyVault covers all subjects and courses offered by EduQuest,
                including:
                <ul>
                    <li>SAT, ACT, PSAT preparation</li>
                    <li>AP subjects (Calc, Physics, Chemistry, Bio, CS, History, etc.)</li>
                    <li>IB HL &amp; SL (Math, Science, English, Economics)</li>
                    <li>IGCSE / GCSE subjects</li>
                    <li>IELTS, TOEFL, PTE, Duolingo preparation</li>
                    <li>Online home tuition (CBSE, ICSE, IB)</li>
                    <li>Coding, Business Studies, Languages (English, German, French)</li>
                </ul>
            </>
        ),
    },
    {
        question: "Can I use StudyVault for both online and offline classes?",
        answer:
            "Online and offline classes are priced separately, so you'll purchase either an online or offline StudyVault package. However, within each package you can freely use your hours for any subject, any mentor, and any time slot. If you need to switch between online and offline, please contact our team.",
    },
    {
        question: "How many hours should I purchase for SAT / AP preparation?",
        answer: (
            <>
                It depends on your current level and target score, but as a general
                guide:
                <ul>
                    <li>
                        <strong>SAT (targeting 1400+):</strong> 30–40 hours over 3–4 months
                    </li>
                    <li>
                        <strong>SAT (targeting 1500+):</strong> 40–50 hours over 4–5 months
                    </li>
                    <li>
                        <strong>AP subject (targeting 4–5):</strong> 20–30 hours over 2–3
                        months
                    </li>
                    <li>
                        <strong>IELTS / TOEFL (7.5+/110+):</strong> 20–30 hours over 6–8
                        weeks
                    </li>
                </ul>
                Our mentors will give you a personalised recommendation after an initial
                diagnostic session.
            </>
        ),
    },
    {
        question: "Is there a minimum number of hours I have to buy?",
        answer:
            "No minimum — you can start with just 1 hour. However, for the best value, we recommend purchasing at least 20 hours at a time, which brings the per-hour rate down significantly and gives you more meaningful continuity with your mentor.",
    },
    {
        question: "How do I book or reschedule a session?",
        answer:
            "Once you purchase your StudyVault package, you'll be connected with our scheduling team who will help you book sessions with the right mentor for your subject. Sessions can be booked online via our platform or by contacting us on WhatsApp at +91-9958041888. Rescheduling is straightforward — just give us 24 hours' notice.",
    },
    {
        question: "Can working professionals or adults use StudyVault?",
        answer:
            "Yes — StudyVault is designed for both students and working professionals. Whether you're a student preparing for SAT/AP, or a professional needing IELTS/TOEFL coaching, language training, or subject tutoring, StudyVault accommodates any schedule including early morning, late evening, and weekend sessions.",
    },
];

/* stagger delay classes — one per item index */
const DELAY_CLASSES = [
    styles.delay1,
    styles.delay2,
    styles.delay3,
    styles.delay4,
    styles.delay5,
    styles.delay6,
    styles.delay7,
    styles.delay8,
] as const;

/* ─────────────────────────────────────────
   useReveal hook
───────────────────────────────────────── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, visible };
}

/* ─────────────────────────────────────────
   Single FAQ accordion item
───────────────────────────────────────── */
interface AccordionItemProps {
    faq: FAQItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

function AccordionItem({ faq, index, isOpen, onToggle }: AccordionItemProps) {
    const { ref, visible } = useReveal(0.1);
    const delayClass = DELAY_CLASSES[index] ?? styles.delay8;

    const itemClass = [
        styles.item,
        delayClass,
        visible ? styles.revealed : "",
        isOpen ? styles.open : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div ref={ref} className={itemClass}>
            {/* Question button */}
            <button
                className={styles.question}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span>{faq.question}</span>
                <span className={styles.arrow} aria-hidden="true">
                    ▾
                </span>
            </button>

            {/* Answer — animated via grid-template-rows trick (no max-height hack) */}
            <div className={styles.answerWrap} role="region">
                <div className={styles.answerInner}>
                    <div className={styles.answerContent}>{faq.answer}</div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Main FAQs section
───────────────────────────────────────── */
export default function FAQs() {
    const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    function handleToggle(index: number) {
        setOpenIndex((prev) => (prev === index ? null : index));
    }

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    ref={headerRef}
                    className={[styles.header, headerVisible ? styles.visible : ""]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className={styles.sectionLabel}>FAQs</div>
                    <h2 className={styles.heading}>
                        Frequently Asked <em>Questions</em>
                    </h2>
                    <p className={styles.subText}>
                        Everything you need to know about the StudyVault package before you
                        get started.
                    </p>
                </div>

                {/* ── Accordion list ── */}
                <div className={styles.list}>
                    {FAQ_DATA.map((faq, index) => (
                        <AccordionItem
                            key={faq.question}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}