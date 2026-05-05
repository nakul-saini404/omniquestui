"use client"
import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./BlogsCarousel.module.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  href: string;
  thumbnail: string;
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "$254,000 Scholarship with SAT 1500 : Ayaan's Complete Success Guide",
    excerpt:
      "What separates a good student from a scholarship winner who secures over $390,000 in total awards? For Ayaan Pervez, the answer lies in strategic preparation.",
    category: "AP Exam",
    date: "July 28, 2025",
    href: "https://eduquest.org.in/254000-scholarship-with-sat-1500-ayaans-complete-success-guide/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2025/07/Ayaan-Pervez-300x158.jpg",
  },
  {
    id: 2,
    title: "AP Exam Planning : Complete Guide for 8th-12th Students",
    excerpt:
      "Are you feeling overwhelmed by the thought of planning your AP courses throughout high school? You're not alone — many students and parents find the process daunting.",
    category: "AP Exam",
    date: "July 2, 2025",
    href: "https://eduquest.org.in/ap-exam-planning-complete-guide-for-8th-12th-students/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2025/08/AP-Exam-Planning-300x158.jpg",
  },
  {
    id: 3,
    title: "How to Prepare for AP Exams in Just 3 Months",
    excerpt:
      "Are you staring at your AP exam dates, wondering how you'll score that coveted 5? As someone who's seen students transform their scores in just 3 months, here's how.",
    category: "AP Exam",
    date: "June 12, 2025",
    href: "https://eduquest.org.in/how-to-prepare-for-ap-exams-in-just-3-months/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2025/06/How-to-Prepare-for-AP-Exams-300x158.jpg",
  },
  {
    id: 4,
    title: "Why AP Exam Scores Are Essential for Top Universities",
    excerpt:
      "In recent years, we've witnessed a remarkable shift in how prestigious universities evaluate applications. AP exam scores, once supplementary, have become essential.",
    category: "AP Exam",
    date: "June 11, 2025",
    href: "https://eduquest.org.in/why-ap-exam-scores-are-essential-for-top-universities/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2025/06/AP-Exam-Scores-300x158.jpg",
  },
  {
    id: 5,
    title: "The Impact of Pre-AP Courses on Student Success for Grades 6 to 8",
    excerpt:
      "In today's competitive academic landscape, building a strong foundation early is crucial for students aiming to excel in AP and beyond.",
    category: "AP Exam",
    date: "June 3, 2025",
    href: "https://eduquest.org.in/the-impact-of-pre-ap-courses-on-student-success/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2025/06/The-Impact-of-Pre-AP-Courses-for-6th-to-8th-Graders-300x158.jpg",
  },
  {
    id: 6,
    title: "AP Registration for AP Exams: Get to Know About the Process Right Here!",
    excerpt:
      "AP tests are a short form of the Advanced Placement tests that students take on specific subjects. Usually, the AP exams are held in the month of May every year.",
    category: "AP Exam",
    date: "February 11, 2021",
    href: "https://eduquest.org.in/ap-registration-for-ap-exams-get-to-know-about-the-process-right-here/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2021/02/AP-Exam-300x138.jpg",
  },
  {
    id: 7,
    title: "Statistics",
    excerpt:
      "Statistics covers key concepts of probability, statistical inference, and data analysis — an essential for students targeting top STEM programmes worldwide.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/statistics/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/Statistics-300x300.jpg",
  },
  {
    id: 8,
    title: "Microeconomics",
    excerpt:
      "You will have 2 hours and 10 minutes to complete the AP Microeconomics exam. This course teaches principles that apply to individual decision-makers.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/microeconomics/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/principles_of_microeconomics-300x300.jpg",
  },
  {
    id: 9,
    title: "World History",
    excerpt:
      "Doing well on the AP World History exam relies on your ability to understand patterns in history and apply them to unseen questions with confidence.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/world-history/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/World-History-300x300.jpg",
  },
  {
    id: 10,
    title: "Biology",
    excerpt:
      "It's one of the hardest AP exams out there. You need to memorize facts and concepts, but also think critically and apply knowledge in novel situations.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/biology/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/Biology-300x300.jpg",
  },
  {
    id: 11,
    title: "English Literature and Composition",
    excerpt:
      "This exam will examine your ability to think critically and analyse literary excerpts. The three-hour test consists of a multiple-choice portion and free-response.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/english-literature-and-composition/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/english-11-honors-300x300.jpg",
  },
  {
    id: 12,
    title: "Computer Science",
    excerpt:
      "AP Computer Science A is one of the most in-demand AP subjects globally — and one of the highest-value for college credits at top universities.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/computer-science/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/download0.png",
  },
  {
    id: 13,
    title: "Physics B & C",
    excerpt:
      "The Advanced Physics exam covers Newtonian dynamics, circular motion, universal gravitation and much more — a cornerstone of STEM-focused AP journeys.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/physics-b-c/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/images0.png",
  },
  {
    id: 14,
    title: "Calculus",
    excerpt:
      "This placement course matches Advanced JEE difficulty level. Perfect for students targeting STEM degrees at global universities who want maximum college credit.",
    category: "AP Exam",
    date: "November 9, 2018",
    href: "https://eduquest.org.in/calculus/",
    thumbnail:
      "https://eduquest.org.in/wp-content/uploads/2020/11/calculus_orig-300x300.jpg",
  },
];

const CARDS_VISIBLE = 3; // cards visible at a time

export default function BlogsCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = blogs.length;
  const maxIndex = total - CARDS_VISIBLE;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const prev = () => {
    setAutoplay(false);
    goTo(current - 1);
  };

  const next = useCallback(() => {
    goTo(current >= maxIndex ? 0 : current + 1);
  }, [current, maxIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, next]);

  // Drag / swipe
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
    setAutoplay(false);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging) return;
    setDragging(false);
    const delta = dragStartX - e.clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goTo(current + 1) : goTo(current - 1);
    }
  };

  const translateX = -(current * (100 / CARDS_VISIBLE));

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.eyebrow}>Resources &amp; Insights</span>
        <h2 className={styles.heading}>
          AP Exam <em>Blog</em>
        </h2>
        <p className={styles.sub}>
          Expert guides, student success stories and strategic tips to help
          you ace every AP exam.
        </p>
      </div>

      {/* Carousel wrapper */}
      <div className={styles.carouselOuter}>
        {/* Prev */}
        <button
          className={`${styles.navBtn} ${styles.navPrev}`}
          onClick={prev}
          aria-label="Previous"
          disabled={current === 0}
        >
          ‹
        </button>

        {/* Track */}
        <div className={styles.viewport}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(${translateX}%)` }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {blogs.map((post, i) => (
              <div
                key={post.id}
                className={`${styles.slide} ${
                  i >= current && i < current + CARDS_VISIBLE
                    ? styles.active
                    : ""
                }`}
              >
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  draggable={false}
                >
                  {/* Image */}
                  <div className={styles.imageWrap}>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className={styles.image}
                      draggable={false}
                    />
                    <span className={styles.badge}>{post.category}</span>
                  </div>

                  {/* Body */}
                  <div className={styles.body}>
                    <time className={styles.date}>{post.date}</time>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Article <span className={styles.arrow}>→</span>
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          className={`${styles.navBtn} ${styles.navNext}`}
          onClick={() => { setAutoplay(false); goTo(current + 1); }}
          aria-label="Next"
          disabled={current >= maxIndex}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => { setAutoplay(false); goTo(i); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${((current + 1) / (maxIndex + 1)) * 100}%` }}
        />
      </div>
    </section>
  );
}