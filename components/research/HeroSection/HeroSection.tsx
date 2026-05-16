'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

/* ─── Stat data ─── */
const STATS = [
    { count: 500, prefix: '', suffix: '+', label: 'Happy Students' },
    { count: 100, prefix: '', suffix: '%', label: 'Success Ratio' },
    { count: 5, prefix: '$', suffix: 'M+', label: 'In Scholarships' },
    { count: 10, prefix: '', suffix: '+', label: 'Years of Service' },
] as const;

const TAGS = [
    '🔬 STEM Research',
    '💼 Business',
    '🧠 Psychology',
    '⚕️ Medicine',
    '🎨 Arts & Humanities',
    '🌍 Social Sciences',
    '💻 Computer Science',
    '📐 Mathematics',
];

/* ─── Animated counter hook ─── */
function useAnimatedCounter(
    target: number,
    duration = 1800,
    active = false
): number {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!active) return;

        let raf: number;
        const start = performance.now();

        function step(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // expo-out easing
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.floor(ease * target));
            if (progress < 1) raf = requestAnimationFrame(step);
            else setValue(target);
        }

        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [target, duration, active]);

    return value;
}

/* ─── Single stat cell ─── */
interface StatProps {
    count: number;
    prefix: string;
    suffix: string;
    label: string;
    active: boolean;
}

function StatCell({ count, prefix, suffix, label, active }: StatProps) {
    const val = useAnimatedCounter(count, 1800, active);
    return (
        <div className={styles.heroStat}>
            <span className={styles.heroStatVal}>
                {prefix}{val}{suffix}
            </span>
            <span className={styles.heroStatLbl}>{label}</span>
        </div>
    );
}

/* ─── Hero section ─── */
export default function HeroSection() {
    /* Scroll-reveal state */
    const [revealed, setRevealed] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    /* Counter trigger: fires when stat card enters viewport */
    const cardRef = useRef<HTMLDivElement>(null);
    const [countersActive, setCountersActive] = useState(false);

    useEffect(() => {
        const revealObs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setRevealed(true); revealObs.disconnect(); } },
            { threshold: 0.1 }
        );
        const counterObs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setCountersActive(true); counterObs.disconnect(); } },
            { threshold: 0.4 }
        );

        if (sectionRef.current) revealObs.observe(sectionRef.current);
        if (cardRef.current) counterObs.observe(cardRef.current);

        return () => { revealObs.disconnect(); counterObs.disconnect(); };
    }, []);

    return (
        <section id="hero" className={styles.hero} ref={sectionRef}>
            {/* decorative blobs & strip */}
            <div className={styles.blobTopRight} aria-hidden="true" />
            <div className={styles.blobBottomLeft} aria-hidden="true" />
            <div className={styles.heroStrip} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.heroInner}>

                    {/* ── Left column ── */}
                    <div className={styles.heroLeft}>
                        <div className={`${styles.heroBadge} ${revealed ? styles.slideInLeft : ''}`}>
                            <span className={styles.heroBadgeLine} />
                            EduQuest — Research &amp; Academic Excellence
                        </div>

                        <h1 className={`${styles.heroH1} ${revealed ? styles.slideInLeft : ''} ${styles.d1}`}>
                            Research Paper<br />
                            <em>Drafting &amp;</em><br />
                            Publishing
                        </h1>

                        <p className={`${styles.heroSub} ${revealed ? styles.slideInLeft : ''} ${styles.d2}`}>
                            From idea to international publication — end-to-end research mentorship
                            for junior school, middle school, and high school students. Unlock your
                            edge in college admissions.
                        </p>

                        <div className={`${styles.heroBtns} ${revealed ? styles.slideInLeft : ''} ${styles.d3}`}>
                            <a
                                href="/contact-us"
                                className={styles.btnGold}
                            >
                                ▶ Book Free Consultation
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=919958041888&text=Hi%20Team%20EduQuest%20I%20am%20interested%20in%20Research%20Paper%20services"
                                className={styles.btnOutlineGold}
                                target="_blank"
                                rel="noreferrer"
                            >
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* ── Right column — Stats card ── */}
                    <div
                        ref={cardRef}
                        className={`${styles.heroStatCard} ${revealed ? styles.slideInRight : ''} ${styles.d1}`}
                    >
                        <div className={styles.heroStatCardTitle}>
                            Why Students Choose EduQuest Research
                        </div>

                        <div className={styles.heroStats}>
                            {STATS.map((s) => (
                                <StatCell
                                    key={s.label}
                                    count={s.count}
                                    prefix={s.prefix}
                                    suffix={s.suffix}
                                    label={s.label}
                                    active={countersActive}
                                />
                            ))}
                        </div>

                        <div className={styles.heroTags}>
                            {TAGS.map((tag) => (
                                <span key={tag} className={styles.heroTag}>{tag}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}