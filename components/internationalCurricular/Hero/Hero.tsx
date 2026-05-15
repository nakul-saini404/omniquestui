'use client';

import styles from './Hero.module.css';

const stats = [
    { num: '10K+', label: 'Happy Students' },
    { num: '97%', label: 'Success Ratio' },
    { num: '$8M+', label: 'Scholarships Won' },
    { num: '20+', label: 'Years of Service' },
];

export default function Hero() {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.heroBadge}>
                🌍 International Curricular · IGCSE · GCSE · O-Level
            </div>

            <h1 className={styles.heroTitle}>
                Master International Curricular
                <br />
                <em>with India&apos;s Best Mentors</em>
            </h1>

            <p className={styles.heroDesc}>
                EduQuest™ offers premium IGCSE &amp; GCSE online tutoring across all subjects — Biology,
                Chemistry, Physics, Mathematics &amp; English. Expert-led, concept-first, results-driven.
            </p>

            <div className={styles.heroBtns}>
                <a href="/contact-us" className={styles.btnPrimary}>
                    📞 Book Free Demo
                </a>
                <a href="#subjects" className={styles.btnOutline}>
                    Explore Subjects ↓
                </a>
            </div>

            <div className={styles.heroStats}>
                {stats.map((stat) => (
                    <div key={stat.label} className={styles.stat}>
                        <div className={styles.statNum}>{stat.num}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}