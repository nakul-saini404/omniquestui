'use client';

import styles from './ReadyToBuild.module.css';

export default function ReadyToBuild() {
    return (
        <section className={styles.ctaSection} id="cta-band">
            <div className={styles.container}>
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaHeading}>
                        Ready to Build a Profile
                        <br />
                        <em>That Changes Everything?</em>
                    </h2>
                    <p className={styles.ctaSub}>
                        Get expert guidance on visa, counseling, program selection, and university admissions
                        from India's top overseas education consultants.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a
                            href="/contact-us"
                            className={styles.btnGold}
                        >
                            ▶ Book Free Consultation
                        </a>
                        <a
                            href="/overseas-education-consultant-studyabroad-consultant"
                            className={styles.btnOutlineGold}
                        >
                            Explore Study Abroad
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}