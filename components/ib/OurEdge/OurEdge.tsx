"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OurEdge.module.css";

/* ─── Types ─── */
interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface Metric {
    value: string;
    label: string;
}

interface Testimonial {
    quote: string;
    author: string;
}

/* ─── Data ─── */
const features: Feature[] = [
    {
        icon: "🏅",
        title: "IB-Certified, Exam-Experienced Tutors",
        description:
            "Our tutors are not just subject experts — they are IB-certified with deep knowledge of marking schemes, grade boundaries and what examiners reward. Many are former IB examiners themselves.",
    },
    {
        icon: "📹",
        title: "Session Recordings — Revise Anytime",
        description:
            "Every class is recorded and stored. Students can revisit difficult explanations as many times as needed, reinforcing understanding between sessions.",
    },
    {
        icon: "🌐",
        title: "Connect Anytime, Anywhere",
        description:
            "Fully online and platform-independent. Whether you're in Delhi, Dubai or New Zealand — your tutor is just a click away, with no travel time wasted.",
    },
    {
        icon: "📊",
        title: "Data-Driven Progress Reports",
        description:
            "Regular assessments and detailed progress reports keep students, parents and tutors aligned. We identify slip areas before they become exam-day problems.",
    },
    {
        icon: "🤝",
        title: "Parent Communication & Transparency",
        description:
            "Parents receive regular updates on progress, attendance and performance. We treat IB coaching as a three-way partnership: tutor, student, parent.",
    },
    {
        icon: "💡",
        title: "Affordable & Transparent Pricing",
        description:
            "Clear, upfront pricing with no hidden fees. We offer regular, intensive and crash-course plans to suit different timelines and budgets without compromising quality.",
    },
];

const metrics: Metric[] = [
    { value: "5000+", label: "Students Coached" },
    { value: "95%", label: "Score Improvement Rate" },
    { value: "10+", label: "Years in IB Coaching" },
    { value: "150+", label: "Countries Served" },
];

const testimonials: Testimonial[] = [
    {
        quote:
            "My IB Chemistry score went from a 4 to a 7 in just three months. The tutor knew exactly what the examiners were looking for and made every session count.",
        author: "IB Diploma Student, Delhi",
    },
    {
        quote:
            "The session recordings were a lifesaver before exams. I could rewatch the difficult topics and feel genuinely prepared on exam day.",
        author: "IB Math HL Student, Bangalore",
    },
];

/* ─── Component ─── */
export default function OurEdge() {
    const [visible, setVisible] = useState(false);
    const [activeFeature, setActiveFeature] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="why-eduquest"
            ref={sectionRef}
            className={`${styles.section} ${visible ? styles.sectionVisible : ""}`}
        >
            <div className={styles.inner}>
                {/* ══════════ LEFT COLUMN ══════════ */}
                <div className={styles.left}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>Our Edge</span>
                        <h2 className={styles.sectionTitle}>
                            Why Choose{" "}
                            <span className={styles.titleAccent}>EduQuest?</span>
                        </h2>
                        <p className={styles.sectionSub}>
                            More than 10 years of transforming IB students into confident,
                            high-scoring graduates. Here's what sets us apart from the rest.
                        </p>
                    </div>

                    <div className={styles.features}>
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className={`${styles.featureRow} ${activeFeature === i ? styles.featureRowActive : ""
                                    }`}
                                style={{ animationDelay: `${i * 0.07}s` }}
                                onMouseEnter={() => setActiveFeature(i)}
                                onMouseLeave={() => setActiveFeature(null)}
                            >
                                <div className={styles.featIcon}>{f.icon}</div>
                                <div className={styles.featText}>
                                    <h4 className={styles.featTitle}>{f.title}</h4>
                                    <p className={styles.featDesc}>{f.description}</p>
                                </div>
                                <span className={styles.featChevron} aria-hidden="true">
                                    ›
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════ RIGHT COLUMN ══════════ */}
                <div className={styles.right}>
                    {/* Trust card */}
                    <div className={styles.trustCard}>
                        <div className={styles.trustCardGlow} aria-hidden="true" />
                        <h3 className={styles.trustCardTitle}>
                            Trusted by Students Across India&nbsp;&amp;&nbsp;Globally
                        </h3>
                        <p className={styles.trustCardDesc}>
                            EduQuest has been a leading IB coaching provider for over a
                            decade, helping thousands of students across the globe achieve
                            their target scores and gain admission to their dream universities.
                        </p>
                        <div className={styles.metricsGrid}>
                            {metrics.map((m, i) => (
                                <div
                                    key={m.label}
                                    className={styles.metricBox}
                                    style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                                >
                                    <strong className={styles.metricVal}>{m.value}</strong>
                                    <span className={styles.metricLabel}>{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.testimonialCard}>
                            <span className={styles.quoteIcon} aria-hidden="true">
                                "
                            </span>
                            <blockquote className={styles.quote}>{t.quote}</blockquote>
                            <div className={styles.quoteAuthor}>— {t.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}