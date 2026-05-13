"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./OurProcess.module.css";

const steps = [
    {
        num: "01",
        title: "Diagnostic Assessment",
        description:
            "Every student begins with a thorough diagnostic to identify knowledge gaps, weak topics and learning style. This shapes a personalised study plan from day one.",
    },
    {
        num: "02",
        title: "Concept-First Teaching",
        description:
            "Tutors ensure deep conceptual understanding before moving to problem-solving. IB examiners reward insight, not rote learning — we build both.",
    },
    {
        num: "03",
        title: "Exam-Style Practice",
        description:
            "Regular past-paper practice under timed conditions with detailed feedback on each answer. Students learn exactly where marks are awarded and lost.",
    },
    {
        num: "04",
        title: "IA & EE Support",
        description:
            "Tutors guide students through every stage of the Internal Assessment and Extended Essay — from topic selection to final draft — maximising these high-value components.",
    },
    {
        num: "05",
        title: "Ongoing Progress Tracking",
        description:
            "Weekly progress reports, regular mock tests and parent updates keep everyone aligned. We adapt the plan as the student grows.",
    },
];

const metrics = [
    { value: "1:1", label: "Private Sessions" },
    { value: "∞", label: "Session Recordings" },
    { value: "7", label: "Subjects Covered" },
    { value: "24/7", label: "Doubt Support" },
];

export default function OurProcess() {
    const [activeStep, setActiveStep] = useState(0);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="how-tutors"
            ref={sectionRef}
            className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
        >
            {/* Decorative background grain */}
            <div className={styles.grain} aria-hidden="true" />

            <div className={styles.inner}>
                {/* ── LEFT COLUMN ── */}
                <div className={styles.left}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Our Process</span>
                        <h2 className={styles.sectionTitle}>
                            How Our Online IB Tutors{" "}
                            <span className={styles.titleAccent}>Help Students</span>
                        </h2>
                        <p className={styles.sectionSub}>
                            From first session to final exam, our tutors follow a structured,
                            student-centred approach that consistently produces results.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className={styles.steps}>
                        {steps.map((step, i) => (
                            <button
                                key={step.num}
                                className={`${styles.step} ${activeStep === i ? styles.stepActive : ""
                                    }`}
                                onClick={() => setActiveStep(i)}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <span className={styles.stepNum}>{step.num}</span>
                                <div className={styles.stepBody}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p
                                        className={`${styles.stepDesc} ${activeStep === i ? styles.stepDescOpen : ""
                                            }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                <span className={styles.stepArrow} aria-hidden="true">
                                    →
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT COLUMN ── */}
                <div className={styles.right}>
                    {/* Personalised Learning Path Card */}
                    <div className={styles.featCard}>
                        <div className={styles.featCardGlow} aria-hidden="true" />
                        <h3 className={styles.featCardTitle}>Personalised Learning Path</h3>
                        <p className={styles.featCardDesc}>
                            Each student gets a custom curriculum mapped to the IB syllabus
                            and their specific exam session, ensuring no topic is left
                            uncovered.
                        </p>
                        <div className={styles.metricsGrid}>
                            {metrics.map((m) => (
                                <div key={m.label} className={styles.metricBox}>
                                    <strong className={styles.metricVal}>{m.value}</strong>
                                    <span className={styles.metricLabel}>{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaIcon}>📞</div>
                        <h3 className={styles.ctaTitle}>Book a Free Demo</h3>
                        <p className={styles.ctaDesc}>
                            Try a free 3-day trial with one of our expert IB tutors. No
                            commitment, no credit card required.
                        </p>
                        <a
                            href="/contact-us"
                            className={styles.ctaBtn}
                        >
                            Request Free Demo →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}