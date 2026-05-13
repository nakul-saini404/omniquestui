'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

const badges = [
    { icon: '📡', label: 'Live Interactive Classes' },
    { icon: '🏫', label: 'CBSE · ICSE · IB · IGCSE' },
    { icon: '🎯', label: 'Grades 6–12' },
    { icon: '🌍', label: 'Learn From Anywhere' },
    { icon: '🏆', label: '10,000+ Students' },
];

export default function HeroSection() {
    const block1Ref = useRef<HTMLDivElement>(null);
    const block2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = [block1Ref.current, block2Ref.current].filter(
            Boolean
        ) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.07 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.hero} >
            {/* Block 1 – label + heading + sub */}
            <div className={styles.reveal} ref={block1Ref}>
                <div className={styles.heroLabel}>
                    <span className={styles.heroLabelLine} aria-hidden="true" />
                    Online Tuition Classes · India
                    <span className={styles.heroLabelLine} aria-hidden="true" />
                </div>

                <h1 className={styles.heroH1}>
                    Learn <em>smarter</em>.<br />
                    Score <em>higher</em>.<br />
                    From anywhere.
                </h1>

                <p className={styles.heroSub}>
                    India&apos;s most trusted online tuition platform for Grades 6–12.
                    Live classes, expert tutors, personalised attention — CBSE, ICSE, IB
                    &amp; IGCSE.
                </p>
            </div>

            {/* Block 2 – badges + CTA */}
            <div className={`${styles.reveal} ${styles.revealD1}`} ref={block2Ref}>
                <div className={styles.heroBadges}>
                    {badges.map(({ icon, label }) => (
                        <span key={label} className={styles.badge}>
                            {icon}&nbsp;{label}
                        </span>
                    ))}
                </div>

                <div className={styles.heroCtaRow}>
                    <a href="/contact" className={styles.btnPrimary}>
                        Enrol Now
                    </a>
                    <a href="#features" className={styles.btnOutline}>
                        Explore Features
                    </a>
                </div>
            </div>
        </section>
    );
}