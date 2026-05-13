'use client';

import styles from './CtaStrip.module.css';

export default function CtaStrip() {
    return (
        <div className={styles.outerSection}>
            <div className={styles.wrapper}>
                <div className={styles.ctaStrip}>

                    {/* Text */}
                    <div className={styles.ctaText}>
                        <h3>
                            Ready for <em>Expert Olympiad Coaching?</em>
                        </h3>
                        <p>
                            Join EduQuest's structured program — AI diagnostics, expert faculty,
                            and a proven system to win at every Olympiad.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className={styles.ctaBtns}>
                        <a
                            href="/contact-us"
                            className={styles.btnPrimary}
                        >
                            ▶ Book Free Consultation
                        </a>
                        <a
                            href="/olympiad"
                            className={styles.btnOutline}
                        >
                            Explore Olympiad Program
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}