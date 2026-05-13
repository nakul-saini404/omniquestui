'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

const stats = [
    { num: '5000+', label: 'Students Coached' },
    { num: '95%', label: 'Score Improvement' },
    { num: '10+', label: 'Years Experience' },
    { num: 'IB®', label: 'Certified Workforce' },
];

export default function HeroSection() {
    const [visible, setVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Trigger entrance animations on mount
        const timer = setTimeout(() => setVisible(true), 80);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" ref={heroRef} className={styles.hero}>
            {/* Decorative radial glow overlay */}
            <div className={styles.heroBefore} aria-hidden="true" />

            {/* Giant watermark "IB" */}
            <span className={styles.heroWatermark} aria-hidden="true">IB</span>

            <div className={`${styles.heroInner} ${visible ? styles.visible : ''}`}>

                {/* Badge */}
                <div className={styles.heroBadge}>
                    <span className={styles.badgeStar}>★</span>
                    IB Certified Tutors&nbsp;&nbsp;·&nbsp;&nbsp;Online 1-to-1 Coaching
                </div>

                {/* Headline */}
                <h1 className={styles.heroHeading}>
                    Master the{' '}
                    <span className={styles.headingAccent}>IB Diploma</span>
                    <br />
                    with Expert Online Tutors
                </h1>

                {/* Sub-text */}
                <p className={styles.heroSub}>
                    EduQuest™ offers premium online IB tutoring for Chemistry, Physics,
                    Mathematics, Biology, English &amp; MYP — personalized, one-on-one,
                    anytime anywhere. Trusted by students across India and globally.
                </p>

                {/* CTA buttons */}
                <div className={styles.heroBtns}>
                    <a
                        href="/contact-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btnPrimary}
                    >
                        Register Now
                    </a>
                    <a href="#subjects" className={styles.btnSecondary}>
                        Explore Subjects →
                    </a>
                </div>

                {/* Stats strip */}
                <div className={styles.heroStats}>
                    {stats.map((s, i) => (
                        <div key={i} className={styles.stat}>
                            <span className={styles.statNum}>{s.num}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}