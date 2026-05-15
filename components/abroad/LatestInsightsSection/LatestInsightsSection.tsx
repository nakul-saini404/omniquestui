"use client";

import { useEffect, useRef } from "react";
import styles from "./LatestInsightsSection.module.css";

interface BlogPost {
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    href: string;
    delay: string;
}

const posts: BlogPost[] = [
    {
        tag: "Study Abroad",
        title: "How to Choose the Right Country for Your Overseas Education",
        excerpt:
            "Selecting the right country is one of the most critical decisions in your study abroad journey. Learn how to evaluate countries based on course availability, cost of living, post-study work options, and PR pathways.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.08s",
    },
    {
        tag: "Scholarships",
        title: "Top Scholarships for Indian Students Studying Abroad in 2025–26",
        excerpt:
            "A comprehensive guide to the best scholarships available for Indian students across the US, UK, Canada, Australia, and Europe — including government-funded and university-specific awards worth up to 60% of tuition fees.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.16s",
    },
    {
        tag: "Visa Guide",
        title: "Student Visa File Preparation: A Step-by-Step Guide",
        excerpt:
            "Preparing a student visa file is one of the most detail-intensive steps in studying abroad. This guide walks you through the documentation checklist, embassy requirements, and the most common mistakes applicants make.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.24s",
    },
    {
        tag: "Profile Building",
        title:
            "Building a Strong Profile for Class 9–12 Students Targeting Top Global Universities",
        excerpt:
            "Starting early is the single biggest advantage you can give yourself. Learn how students in Class 9 through 12 can build compelling academic and extracurricular profiles that international admissions committees notice.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.08s",
    },
    {
        tag: "Test Prep",
        title: "SAT vs ACT vs IELTS: Which Test Do You Actually Need?",
        excerpt:
            "Confused about which standardized tests to take for your target universities? This breakdown compares the SAT, ACT, IELTS, and TOEFL — and explains which combination makes sense based on your destination country and program type.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.16s",
    },
    {
        tag: "Admissions",
        title: "How to Write a Statement of Purpose That Gets You Admitted",
        excerpt:
            "Your SOP is the most personal document in your application. This guide covers structure, tone, storytelling techniques, and the critical mistakes that cause even high-scoring students to get rejected from their dream universities.",
        date: "EduQuest Editorial",
        href: "https://eduquest.org.in/blog",
        delay: "0.24s",
    },
];

export default function LatestInsightsSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);
        cardRefs.current.forEach((el) => { if (el) observer.observe(el); });

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.blogs} id="blogs">
            <div className={styles.container}>

                {/* ── Header ── */}
                <div
                    className={`${styles.blogsHeader} ${styles.revealUp}`}
                    ref={headerRef}
                >
                    <div className={styles.secLabel}>Latest Insights</div>
                    <h2 className={styles.secHeading}>
                        Resources &amp; <em>Blog Posts</em>
                    </h2>
                    <p className={`${styles.secSub} ${styles.center}`}>
                        Stay informed with expert advice on study abroad, university
                        admissions, visas, and career planning.
                    </p>
                </div>

                {/* ── Cards Grid ── */}
                <div className={styles.blogsGrid}>
                    {posts.map((post, i) => (
                        <div
                            key={post.title}
                            className={`${styles.blogCard} ${styles.revealUp}`}
                            style={{ transitionDelay: post.delay }}
                            ref={(el) => { cardRefs.current[i] = el; }}
                        >
                            {/* Tag */}
                            <div className={styles.blogTagBar}>
                                <span className={styles.blogTag}>{post.tag}</span>
                            </div>

                            {/* Body */}
                            <div className={styles.blogBody}>
                                <div className={styles.blogTitle}>{post.title}</div>
                                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                            </div>

                            {/* Footer */}
                            <div className={styles.blogFooter}>
                                <span className={styles.blogDate}>{post.date}</span>
                                <a
                                    href={post.href}
                                    className={styles.blogBtn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div
                    className={`${styles.blogsCta} ${styles.revealUp}`}
                    style={{ transitionDelay: "0.2s" }}
                    ref={ctaRef}
                >
                    <a
                        href="https://eduquest.org.in/blog"
                        className={styles.btnGold}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Blogs →
                    </a>
                </div>

            </div>
        </section>
    );
}