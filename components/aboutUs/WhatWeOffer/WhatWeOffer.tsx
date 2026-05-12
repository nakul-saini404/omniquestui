"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhatWeOffer.module.css";

interface OfferCard {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    delay?: string;
}

const offerCards: OfferCard[] = [
    {
        icon: "📐",
        title: "SAT & Digital SAT Coaching",
        description:
            "Comprehensive SAT preparation through our Diagnostic Test Framework — personalised modules for Math and ERW, adaptive practice tests, and super-score strategy. Top scores: 1590–1600.",
        tags: ["SAT", "PSAT", "Digital SAT", "DASA/ISA"],
    },
    {
        icon: "📊",
        title: "AP & Pre-AP Coaching",
        description:
            "Subject-specific AP coaching across 20+ courses — taught by researchers and subject specialists. Pre-AP preparation from Class 9 onwards to build the academic foundation for selective admissions.",
        tags: ["AP", "Pre-AP", "IB"],
        delay: "0.07s",
    },
    {
        icon: "🎓",
        title: "ACT, TMUA & UCAT",
        description:
            "Specialist coaching for ACT (online and classroom), TMUA for Cambridge Mathematics applicants, and UCAT for medical admissions — covering UK and US pathways comprehensively.",
        tags: ["ACT", "TMUA", "UCAT", "LSAT"],
        delay: "0.14s",
    },
    {
        icon: "🌍",
        title: "Study Abroad & UG Counselling",
        description:
            "End-to-end guidance for 2,000+ universities worldwide — from university selection and essay crafting to application submission, financial aid, and visa support for US, UK, Canada, and Europe.",
        tags: ["US", "UK", "Canada", "Europe"],
        delay: "0.07s",
    },
    {
        icon: "🏫",
        title: "DASA / CIWG & ISA Admissions",
        description:
            "Specialised support for NRI, OCI, PIO, and CIWG students applying to IIIT Hyderabad (DASA) and BITS Pilani (ISA) using SAT scores — from eligibility check to seat acceptance.",
        tags: ["DASA", "CIWG", "ISA", "IIIT-H"],
        delay: "0.14s",
    },
    {
        icon: "📚",
        title: "Online Tuition & IB / IGCSE",
        description:
            "Live online tuition for IB, IGCSE, GCSE, Indian and international curricula — Math, Physics, Chemistry, Biology, English. Olympiad preparation and flexible learning hours available.",
        tags: ["IB", "IGCSE", "GCSE", "Olympiad"],
        delay: "0.21s",
    },
];

export default function WhatWeOffer() {
    const fadeRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.offerSection} id="what-we-offer">
            <div className={styles.container}>

                {/* ── Section Header ── */}
                <div
                    className={`${styles.sectionHead} ${styles.fadeUp}`}
                    ref={(el) => { fadeRefs.current[0] = el; }}
                >
                    <div className={styles.sectionLabel}>What We Offer</div>
                    <h2>A Complete UG Study Abroad Academy</h2>
                    <p>
                        From profile architecture to exam preparation — every service a
                        student needs, under one roof.
                    </p>
                </div>

                {/* ── Spotlight: Profile Building ── */}
                <div
                    className={`${styles.offerSpotlight} ${styles.fadeUp}`}
                    ref={(el) => { fadeRefs.current[1] = el; }}
                >
                    {/* Text */}
                    <div className={styles.offerSpotlightText}>
                        <div className={styles.offerSpotlightBadge}>
                            Our Primary Expertise
                        </div>
                        <h3>
                            Profile Building &amp;<br />
                            <em>Admissions Positioning</em>
                        </h3>
                        <p className={styles.offerSpotlightTagline}>
                            &ldquo;Builds academically strong students into{" "}
                            <strong>strategically positioned applicants</strong> for the
                            world&apos;s most selective universities. We architect positioning
                            — aligning academics, narrative, and profile into a coherent
                            admissions identity.&rdquo;
                        </p>
                        <p className={styles.offerSpotlightDesc}>
                            Most students apply with strong grades and test scores. But the
                            world&apos;s top universities aren&apos;t selecting on academics
                            alone — they&apos;re selecting on{" "}
                            <em>story, strategy, and positioning</em>. EduQuest builds the
                            full picture: activities, research, essays, recommendations, and
                            the narrative thread that ties it all together into a compelling
                            case for admission.
                        </p>
                        <a
                            href="https://eduquest.org.in/profile-building-programs/"
                            className={styles.offerSpotlightLink}
                        >
                            Explore Profile Building →
                        </a>
                    </div>

                    {/* Visual panel with real image */}
                    <div className={styles.offerSpotlightVisual}>
                        <div className={styles.spotlightGlow} />
                        <div className={styles.spotlightImageWrap}>
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                                alt="Students working on university applications"
                                fill
                                className={styles.spotlightImage}
                                sizes="(max-width: 960px) 100vw, 45vw"
                            />
                            <div className={styles.spotlightImageOverlay} />
                        </div>
                        {/* Floating badge over image */}
                        <div className={styles.spotlightBadgeFloat}>
                            <span className={styles.spotlightBadgeIcon}>🎯</span>
                            <div>
                                <div className={styles.spotlightBadgeTitle}>
                                    Profile Building
                                </div>
                                <div className={styles.spotlightBadgeSub}>
                                    Our flagship service
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Sub-offer Cards Grid ── */}
                <div className={styles.offerGrid}>
                    {offerCards.map((card, i) => (
                        <div
                            key={card.title}
                            className={`${styles.offerCard} ${styles.fadeUp}`}
                            style={card.delay ? { transitionDelay: card.delay } : undefined}
                            ref={(el) => { fadeRefs.current[i + 2] = el; }}
                        >
                            <div className={styles.offerCardIcon}>{card.icon}</div>
                            <h4>{card.title}</h4>
                            <p>{card.description}</p>
                            <div className={styles.offerCardTags}>
                                {card.tags.map((tag) => (
                                    <span key={tag} className={styles.offerTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}