"use client";

import { useEffect, useRef } from "react";
import styles from "./StudyAbroadSection.module.css";

interface Destination {
    flag: string;
    flagCode: string; // ISO 3166-1 alpha-2 for flagcdn
    name: string;
    href?: string;
}

const destinations: Destination[] = [
    { flag: "", flagCode: "us", name: "Study in USA" },
    { flag: "", flagCode: "gb", name: "Study in UK" },
    { flag: "", flagCode: "ca", name: "Study in Canada" },
    { flag: "", flagCode: "au", name: "Study in Australia" },
    { flag: "", flagCode: "de", name: "Study in Germany" },
    { flag: "", flagCode: "sg", name: "Study in Singapore" },
    { flag: "", flagCode: "nz", name: "Study in New Zealand" },
    { flag: "", flagCode: "gb-eng", name: "Study in London" },
];

export default function StudyAbroadSection() {
    const revealRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.in);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <section className={styles.looking} id="looking">
            <div className={styles.container}>
                <div className={styles.lookingGrid}>

                    {/* ── Left: Text ── */}
                    <div
                        className={`${styles.lookingText} ${styles.revealLeft}`}
                        ref={addRef}
                    >
                        <div className={styles.secLabel}>Study Abroad</div>

                        <h2 className={styles.secHeading}>
                            Looking for Top Study Abroad
                            <br />
                            <em>Consultants in India?</em>
                        </h2>

                        <p className={styles.secSub}>
                            Get the complete guidance with EduQuest who provide visa, program,
                            help, guidance, free counseling, and university admissions. Our
                            team of professionals help you find the best universities and
                            programs tailored to your needs.
                        </p>

                        <a
                            href="https://app.eduquest.org.in/contact-us"
                            className={styles.btnGold}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Request a Demo →
                        </a>
                    </div>

                    {/* ── Right: Destination Cards ── */}
                    <div
                        className={`${styles.revealRight} ${styles.d1}`}
                        ref={addRef}
                    >
                        <div className={styles.lookingCountries}>
                            {destinations.map((dest) => (
                                <div
                                    key={dest.flagCode}
                                    className={styles.destCard}
                                    style={{
                                        backgroundImage: `url(https://flagcdn.com/w160/${dest.flagCode}.png)`,
                                    }}
                                >
                                    {/* dark overlay so text stays readable */}
                                    <div className={styles.destOverlay} />

                                    <span className={styles.destEmoji}>{dest.flag}</span>
                                    <span className={styles.destName}>{dest.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}