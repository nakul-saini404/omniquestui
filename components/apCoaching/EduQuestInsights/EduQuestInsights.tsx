"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./EduQuestInsights.module.css";

/* ─── Types ─────────────────────────────────────────────── */
interface BlogPost {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  emoji: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const POSTS: BlogPost[] = [
  {
    id: 1,
    tag: "AP Exam",
    title: "$254,000 Scholarship with SAT 1500: Ayaan's Complete Success Guide",
    excerpt:
      "What separates a good student from a scholarship winner who secures over $390,000 in total awards? For Ayaan Pervez, the answer lies in strategic preparation.",
    date: "July 28, 2025",
    href: "https://eduquest.org.in/254000-scholarship-with-sat-1500-ayaans-complete-success-guide/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2025/07/Ayaan-Pervez-300x158.jpg",
    imgAlt: "$254,000 Scholarship with SAT 1500",
    emoji: "🏆",
  },
  {
    id: 2,
    tag: "AP Exam",
    title: "AP Exam Planning: Complete Guide for 8th–12th Students",
    excerpt:
      "Feeling overwhelmed by the thought of planning your AP courses throughout high school? This comprehensive guide helps students and parents map a winning AP journey.",
    date: "July 2, 2025",
    href: "https://eduquest.org.in/ap-exam-planning-complete-guide-for-8th-12th-students/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2025/08/AP-Exam-Planning-300x158.jpg",
    imgAlt: "AP Exam Planning",
    emoji: "📅",
  },
  {
    id: 3,
    tag: "AP Exam",
    title: "How to Prepare for AP Exams in Just 3 Months",
    excerpt:
      "Staring at your AP exam dates wondering how you'll score that coveted 5? A proven 3-month preparation roadmap used by EduQuest's top-scoring students.",
    date: "June 12, 2025",
    href: "https://eduquest.org.in/how-to-prepare-for-ap-exams-in-just-3-months/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2025/06/How-to-Prepare-for-AP-Exams-300x158.jpg",
    imgAlt: "How to Prepare for AP Exams in 3 Months",
    emoji: "⏱",
  },
  {
    id: 4,
    tag: "AP Exam",
    title: "Why AP Exam Scores Are Essential for Top Universities",
    excerpt:
      "Prestigious universities have significantly shifted how they evaluate student applications. AP exam scores, once supplementary, have become central to admissions decisions.",
    date: "June 11, 2025",
    href: "https://eduquest.org.in/why-ap-exam-scores-are-essential-for-top-universities/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2025/06/AP-Exam-Scores-300x158.jpg",
    imgAlt: "Why AP Exam Scores Are Essential",
    emoji: "🎓",
  },
  {
    id: 5,
    tag: "Pre-AP",
    title: "The Impact of Pre-AP Courses on Student Success for Grades 6 to 8",
    excerpt:
      "Building a strong academic foundation early is crucial for students aiming to excel in AP. Discover how Pre-AP courses shape future academic champions.",
    date: "June 3, 2025",
    href: "https://eduquest.org.in/the-impact-of-pre-ap-courses-on-student-success/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2025/06/The-Impact-of-Pre-AP-Courses-for-6th-to-8th-Graders-300x158.jpg",
    imgAlt: "Impact of Pre-AP Courses",
    emoji: "📚",
  },
  {
    id: 6,
    tag: "AP Exam",
    title: "AP Registration for AP Exams: Get to Know About the Process",
    excerpt:
      "Everything students need to know about registering for AP exams — from eligibility and deadlines to fees and score reporting at top global universities.",
    date: "February 11, 2021",
    href: "https://eduquest.org.in/ap-registration-for-ap-exams-get-to-know-about-the-process-right-here/",
    imgSrc:
      "https://eduquest.org.in/wp-content/uploads/2021/02/AP-Exam-300x138.jpg",
    imgAlt: "AP Registration Process",
    emoji: "📝",
  },
];

/* ─── Sub-components ─────────────────────────────────────── */
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger by index
          setTimeout(() => setVisible(true), index * 90);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <a
      ref={cardRef}
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${visible ? styles.cardVisible : ""}`}
      aria-label={post.title}
    >
      {/* Thumbnail */}
      <div className={styles.cardThumb}>
        {!imgFailed ? (
          <img
            src={post.imgSrc}
            alt={post.imgAlt}
            className={styles.cardImg}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className={styles.cardImgPlaceholder} aria-hidden>
            <span>{post.emoji}</span>
          </div>
        )}
        <span className={styles.cardTag}>{post.tag}</span>
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <div className={styles.cardFooter}>
          <time className={styles.cardDate}>{post.date}</time>
          <span className={styles.cardReadMore}>
            Read More
            <svg
              className={styles.cardArrow}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover glow border */}
      <div className={styles.cardGlow} aria-hidden />
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function EduQuestInsights() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="insights-heading">
      {/* Ambient background shapes */}
      <div className={styles.bgGlow1} aria-hidden />
      <div className={styles.bgGlow2} aria-hidden />
      <div className={styles.bgGrid} aria-hidden />

      <div className={styles.container}>
        {/* Section header */}
        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}
        >
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} aria-hidden />
            <span className={styles.sectionLabelText}>EduQuest Insights</span>
          </div>

          <h2 id="insights-heading" className={styles.heading}>
            Latest from Our{" "}
            <span className={styles.headingAccent}>AP Blog</span>
          </h2>

          <p className={styles.subheading}>
            Expert guidance, success stories, and strategies from EduQuest's AP
            coaching team.
          </p>
        </div>

        {/* Cards grid */}
        <div className={styles.grid}>
          {POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className={styles.ctaRow}>
          <a
            href="https://eduquest.org.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            View All Blog Posts
            <svg viewBox="0 0 16 16" fill="none" aria-hidden className={styles.ctaBtnArrow}>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}