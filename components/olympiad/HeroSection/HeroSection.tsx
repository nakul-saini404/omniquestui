'use client';

import styles from './HeroSection.module.css';

const stats = [
    { num: '10K+', lbl: 'Students Trained' },
    { num: '4', lbl: 'Olympiad Streams' },
    { num: '44', lbl: 'Sample Papers' },
    { num: '97%', lbl: 'Success Ratio' },
    { num: '20+', lbl: 'Years of Excellence' },
];

const tags = [
    '📥 Instant Download',
    '✅ Expert Designed',
    '🏆 All Classes 1–12',
    '📄 PDF Format',
    '🆓 Completely Free',
];

export default function HeroSection() {
    return (
        <>
            {/* ── Hero ── */}
            <div className={styles.hero}>
                <div className={styles.eyebrow}>🏆 Olympiad Practice Resources</div>

                <h1 className={styles.heroH1}>
                    Free <em>Sample Papers</em>
                    <br />
                    for Every Olympiad
                </h1>

                <p className={styles.heroP}>
                    Expert-curated practice papers for ICSO, IEO, IGKO &amp; ISO —
                    class-by-class, mirroring the exact exam pattern. Build confidence
                    before the real test.
                </p>

                <div className={styles.heroCta}>
                    <a href="#download" className={styles.heroBtnP}>
                        📥 Download Free Papers
                    </a>
                    <a href="#what-is-olympiad" className={styles.heroBtnS}>
                        Learn About Olympiads
                    </a>
                </div>

                <div className={styles.heroTags}>
                    {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className={styles.statsBar}>
                {stats.map((s) => (
                    <div key={s.lbl} className={styles.statItem}>
                        <span className={styles.statNum}>{s.num}</span>
                        <span className={styles.statLbl}>{s.lbl}</span>
                    </div>
                ))}
            </div>
        </>
    );
}