"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhyStudentsFail.module.css";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const reasons = [
    {
        icon: "📚",
        title: "No Concept Clarity",
        description:
            "Students memorise answers without understanding the underlying concept. When exam questions are framed differently, they're unable to apply what they've learnt.",
    },
    {
        icon: "🏫",
        title: "Large Classroom Settings",
        description:
            "In a class of 40+ students, teachers cannot address every doubt. Gaps in understanding are left unresolved and accumulate over time into serious academic deficits.",
    },
    {
        icon: "⏱️",
        title: "Poor Time Management",
        description:
            "Without structured study plans or guided schedules, students waste crucial preparation time. Last-minute cramming rarely leads to meaningful retention or exam success.",
    },
    {
        icon: "😰",
        title: "Exam Stress & Anxiety",
        description:
            "Fear of failure leads to mental blocks during exams. Students who lack a steady mentor to guide them through pressure points often underperform relative to their potential.",
    },
    {
        icon: "🔁",
        title: "Lack of Regular Revision",
        description:
            "Without consistent revision and practice, even well-understood topics fade quickly. Most students only revisit material before exams — by then it is often too late.",
    },
    {
        icon: "🎯",
        title: "No Personalised Attention",
        description:
            "Every student learns at a different pace. A one-size-fits-all approach ignores individual weaknesses, leaving students who need extra support behind the rest of the class.",
    },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function WhyStudentsFail() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.08 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={styles.section}
            id="why-students-fail"
            ref={sectionRef}
            data-visible={visible}
        >
            {/* decorative grid overlay */}
            <div className={styles.grid} aria-hidden="true" />
            {/* decorative glow */}
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.container}>

                {/* ── Heading ── */}
                <div className={styles.head}>
                    <span className={styles.label}>Understanding the Problem</span>
                    <h2 className={styles.heading}>
                        Why Students <em className={styles.em}>Fail</em> to Score High
                    </h2>
                    <p className={styles.subheading}>
                        Most students don't fail because they lack intelligence — they fail
                        because of avoidable, fixable gaps in their learning environment.
                        EduQuest exists to close every one of them.
                    </p>
                </div>

                {/* ── Cards grid ── */}
                <div className={styles.cardsGrid}>
                    {reasons.map((reason, i) => (
                        <div
                            key={reason.title}
                            className={styles.card}
                            style={{ transitionDelay: `${i * 0.07}s` }}
                        >
                            <div className={styles.iconWrap}>{reason.icon}</div>
                            <h4 className={styles.cardTitle}>{reason.title}</h4>
                            <p className={styles.cardText}>{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* ── Bottom CTA strip ── */}
                <div className={styles.cta}>
                    <p className={styles.ctaText}>
                        EduQuest's one-on-one online tuitions address every single cause
                        listed above — with expert tutors, structured plans and proven
                        results since 1995.
                    </p>
                    <a
                        href="/contact-us"
                        className={styles.ctaBtn}
                    >
                        Start Your Free Trial →
                    </a>
                </div>

            </div>
        </section>
    );
}