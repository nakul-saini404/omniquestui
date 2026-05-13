'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AboutIBSection.module.css';

const programs = [
    {
        age: 'Ages 3–12',
        title: 'IB PYP',
        desc: 'Primary Years Programme — builds curiosity-driven learning through an inquiry approach across six transdisciplinary themes.',
    },
    {
        age: 'Ages 11–16',
        title: 'IB MYP',
        desc: 'Middle Years Programme — encourages students to make connections between studies and the real world; spans five years across seven subject groups.',
    },
    {
        age: 'Ages 16–19',
        title: 'IB Diploma (DP)',
        desc: 'The flagship two-year pre-university programme with six subject groups, Theory of Knowledge (TOK), Extended Essay (EE) and CAS.',
    },
    {
        age: 'Ages 16–19',
        title: 'IB Career (CP)',
        desc: 'Career-related Programme — combines IB DP courses with career-related study, emphasising work-based learning and practical skills.',
    },
];

const highlights = [
    {
        icon: '🌍',
        title: 'Global Recognition',
        desc: 'IB qualifications are accepted by 5,000+ universities in over 150 countries, including top institutions in the US, UK, Canada and beyond.',
    },
    {
        icon: '📊',
        title: 'Rigorous Assessment',
        desc: 'Students are assessed through a combination of internal assessments, extended essays, TOK presentations and external examinations scored 1–7.',
    },
    {
        icon: '🎓',
        title: 'Holistic Development',
        desc: 'The IB Learner Profile develops attributes like open-mindedness, inquiry, risk-taking and caring — skills employers and universities value highly.',
    },
];

export default function AboutIBSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about-ib" ref={sectionRef} className={styles.section}>

            {/* ── Section header ── */}
            <div className={`${styles.sectionHeader} ${visible ? styles.visible : ''}`}>
                <div className={styles.sectionLabel}>More About</div>
                <h2 className={styles.sectionTitle}>IB — International Baccalaureate</h2>
                <p className={styles.sectionSub}>
                    The International Baccalaureate (IB) is a globally recognised educational
                    framework developed in Geneva in 1968. It challenges students academically
                    and personally, preparing them for success in universities worldwide.
                </p>
            </div>

            {/* ── Programme cards ── */}
            <div className={`${styles.ibPrograms} ${visible ? styles.visible : ''}`}>
                {programs.map((prog, i) => (
                    <div
                        key={i}
                        className={styles.progCard}
                        style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                    >
                        <div className={styles.progAge}>{prog.age}</div>
                        <h3 className={styles.progTitle}>{prog.title}</h3>
                        <p className={styles.progDesc}>{prog.desc}</p>
                    </div>
                ))}
            </div>

            {/* ── Highlight cards ── */}
            <div className={`${styles.highlightGrid} ${visible ? styles.visible : ''}`}>
                {highlights.map((h, i) => (
                    <div
                        key={i}
                        className={styles.card}
                        style={{ transitionDelay: `${0.4 + i * 0.1}s` }}
                    >
                        <div className={styles.cardIcon}>{h.icon}</div>
                        <h3 className={styles.cardTitle}>{h.title}</h3>
                        <p className={styles.cardDesc}>{h.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}