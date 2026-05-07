'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './SuccessStories.module.css';

const testimonials = [
  {
    quote: "Thanks to EduQuest, I achieved a TMUA score of 7.9 which significantly strengthened my Cambridge application. Their logical reasoning drills and mock tests made all the difference. The structured approach was exactly what I needed.",
    score: "🏆 TMUA Score: 7.9",
    name: "Riya Sharma",
    university: "University of Cambridge — Computer Science",
  },
  {
    quote: "EduQuest's detailed topic-wise practice questions and mentoring helped me secure a TMUA score of 7.3. Warwick gave me a reduced offer because of it — that alone made every hour of preparation worth it.",
    score: "🏆 TMUA Score: 7.3",
    name: "Arjun Mehta",
    university: "University of Warwick — Mathematics",
  },
  {
    quote: "Even though TMUA wasn't mandatory for LSE, including my 7.1 score helped me stand out. The EduQuest faculty reviewed every mock I attempted and gave actionable insights that genuinely moved my score upward.",
    score: "🏆 TMUA Score: 7.1",
    name: "Zoya Khalid",
    university: "London School of Economics — Economics",
  },
  {
    quote: "With EduQuest's flexible weekend schedule and feedback-led preparation, I cracked TMUA with 6.9. The structured revision calendar was my favorite part — it made a daunting syllabus feel very manageable.",
    score: "🏆 TMUA Score: 6.9",
    name: "Ankit Verma",
    university: "Durham University — Computer Science",
  },
  {
    quote: "As an IB student, I was unsure if I could handle TMUA. EduQuest mapped my IB syllabus with TMUA topics and built my confidence from scratch. I ended up genuinely enjoying the mathematical challenge.",
    score: "🏆 TMUA Score: 6.7",
    name: "Ishita Das",
    university: "Lancaster University — Data Science",
  },
  {
    quote: "The pace and personalisation of EduQuest sessions were unmatched. I scored 7.5 in TMUA and received a departmental scholarship offer — something I would not have achieved without their focused, expert preparation.",
    score: "🏆 TMUA Score: 7.5",
    name: "Meher Kaul",
    university: "University of Sheffield — Computer Science",
  },
  {
    quote: "My TMUA score of 7.0 gave me an edge in the application process, especially in interviews. EduQuest's strategy classes trained me to articulate mathematical reasoning clearly — a skill that carried directly into my Cambridge interview.",
    score: "🏆 TMUA Score: 7.0",
    name: "Devansh Chopra",
    university: "University of Southampton — Engineering",
  },
  {
    quote: "EduQuest's intensive mocks and paper-by-paper reviews helped me raise my TMUA score from 6.1 to 7.2. I am grateful for their dedicated faculty who never gave up on me even during the most difficult weeks of preparation.",
    score: "📈 Score: 6.1 → 7.2",
    name: "Siddharth Jain",
    university: "King's College London — Data Analytics",
  },
  {
    quote: "The personalized tracker and daily TMUA challenges from EduQuest kept me consistent throughout. I recommend their program to anyone who wants structured, proven preparation — it is genuinely unlike anything else.",
    score: "🏆 TMUA Score: 6.8",
    name: "Anirudh Sen",
    university: "University of Bath — Computer Science",
  },
];

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return perView;
}

export default function SuccessStories() {
  const perView = usePerView();
  const totalSlides = Math.ceil(testimonials.length / perView);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(current + 1), 5200);
  }, [current, goTo]);

  useEffect(() => {
    // Reset to page 0 when perView changes to avoid out-of-bound index
    setCurrent(0);
  }, [perView]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides]);

  function handlePrev() {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(current - 1);
    resetTimer();
  }

  function handleNext() {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(current + 1);
    resetTimer();
  }

  // Slice visible testimonials for current page
  const visibleCards = testimonials.slice(
    current * perView,
    current * perView + perView
  );

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>Success Stories</span>
        <h2 className={styles.sectionTitle}>
          TMUA Success Stories from EduQuest
        </h2>
        <p className={styles.sectionSub}>
          Real students, real scores, real universities. TMUA is not just a test
          — it is an opportunity to show you are truly university-ready.
        </p>

        {/* Cards Grid */}
        <div
          className={styles.cardsGrid}
          style={{ '--per-view': perView } as React.CSSProperties}
        >
          {visibleCards.map((t, i) => (
            <div key={`${current}-${i}`} className={styles.tCard}>
              <div className={styles.tQuote}>&ldquo;</div>
              <p className={styles.tText}>{t.quote}</p>
              <span className={styles.tScore}>{t.score}</span>
              <div className={styles.tAuthor}>
                <div className={styles.tName}>{t.name}</div>
                <div className={styles.tUni}>{t.university}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button className={styles.carouselBtn} onClick={handlePrev} aria-label="Previous">
            ←
          </button>

          <div className={styles.dots}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => {
                  if (timerRef.current) clearInterval(timerRef.current);
                  goTo(i);
                  resetTimer();
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button className={styles.carouselBtn} onClick={handleNext} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
}