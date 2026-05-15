"use client";

import { useEffect, useRef } from "react";
import styles from "./CtaBand.module.css";

export default function CtaBand() {
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = innerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.ctaBand} id="cta-band">
            <div className={styles.container}>
                <div ref={innerRef} className={`${styles.ctaBandInner} ${styles.revealUp}`}>

                    <h2 className={styles.ctaBandH}>
                        Ready to Build a Profile
                        <br />
                        <em>That Changes Everything?</em>
                    </h2>

                    <p className={styles.ctaBandSub}>
                        Get trained in Data Science, Analytics &amp; Web Dev to crack top
                        university admissions.
                    </p>

                    <div className={styles.ctaBandBtns}>
                        <a
                            href="/contact-us"
                            className={styles.btnGold}
                        >
                            ▶ Book Free Consultation
                        </a>
                        <a
                            href="/eduquest-aptech"
                            className={styles.btnOutline}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore Programme
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}