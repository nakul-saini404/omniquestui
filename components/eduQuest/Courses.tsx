'use client';

import { useEffect, useRef, useState } from 'react';

const courses = [
  { title: 'SAT/New Digital SAT Coaching', href: 'https://eduquest.org.in/sat/' },
   {
    title: 'SSAT Exams',
    href: 'https://eduquest.org.in/ipmat-coaching-and-profile-building-eduquest-2026/',
  },
  { title: 'AP Coaching', href: 'https://eduquest.org.in/ap-coaching/' },
  { title: 'ACT Coaching', href: 'https://eduquest.org.in/act/' },
  { title: 'PSAT Coaching', href: 'https://eduquest.org.in/sat/' },
  { title: 'LSAT Coaching', href: 'https://eduquest.org.in/lsat-coaching-india/' },
  { title: 'UCAT Coaching', href: 'https://eduquest.org.in/ucat-exam-2025/' },
  { title: 'TMUA Coaching', href: 'https://eduquest.org.in/tmua/' },
  { title: 'IELTS / TOEFL / PTE', href: 'https://eduquest.org.in/ielts/' },
  {
    title: 'IPMAT Coaching',
    href: 'https://eduquest.org.in/ipmat-coaching-and-profile-building-eduquest-2026/',
  },
  
];

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Change course name every 3.5s, fade out 400ms before swap
    intervalRef.current = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % courses.length);
        setIsChanging(false);
      }, 1000);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const currentCourse = courses[currentIndex];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

            :root {
              --navy: #0a1628;
              --gold: #c9a84c;
              --gold-light: #f0c96e;
              --cream: #f8f4ed;
              --white: #ffffff;
              --muted: #6b7280;
            }

            .eq-section {
              background: var(--cream);
              padding: 80px 24px;
              font-family: 'DM Sans', sans-serif;
            }

            .eq-inner {
              max-width: 1400px;
              margin: 0 auto;
            }

            .eq-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 40px;
              flex-wrap: wrap;
            }

            /* ── Left column — fully static, no animation ── */
            .eq-left {
              flex: 1 1 280px;
            }

            .eq-section-tag {
              display: inline-block;
              font-size: 0.72rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: var(--gold);
              margin-bottom: 12px;
              padding: 4px 12px;
              background: rgba(201,168,76,0.1);
              border-radius: 4px;
            }

            /* Static heading — no animation class, no keyframe reference */
            .eq-title {
              font-family: 'Playfair Display', serif;
              font-size: clamp(1.8rem, 3vw, 2.4rem);
              font-weight: 800;
              line-height: 1.2;
              color: var(--navy);
              margin-bottom: 12px;
            }

            .eq-title em {
              font-style: normal;
              color: var(--gold);
            }

            .eq-desc {
              font-size: 1rem;
              color: var(--muted);
              max-width: 420px;
              line-height: 1.6;
            }

            .eq-desc strong {
              color: var(--navy);
              font-weight: 600;
            }

            /* ── Right panel ── */
            .eq-right-panel {
              flex: 0 0 auto;
              display: flex;
              align-items: center;
              gap: 20px;
              background: var(--white);
              border: 1px solid #e2e8f0;
              border-radius: 16px;
              padding: 24px 32px;
              min-width: 400px;
              box-shadow: 0 4px 20px rgba(10,22,40,0.06);
            }

            .eq-panel-label {
              font-size: 0.8rem;
              color: var(--muted);
              font-family: 'DM Mono', monospace;
              line-height: 1.5;
              white-space: nowrap;
            }

            .eq-panel-label span {
              display: block;
              font-size: 0.88rem;
              color: var(--gold);
              font-weight: 600;
              font-family: 'DM Sans', sans-serif;
              margin-bottom: 2px;
            }

            .eq-panel-divider {
              width: 1px;
              height: 44px;
              background: #e2e8f0;
              flex-shrink: 0;
            }

            .eq-course-slot {
              display: flex;
              flex-direction: column;
              gap: 6px;
              min-width: 160px;
            }

            .eq-explore-label {
              font-size: 0.66rem;
              font-weight: 700;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              color: var(--muted);
              font-family: 'DM Mono', monospace;
            }

            /*
             * Course link:
             * — slow gentle blink (3s cycle) while visible
             * — fade+slide out/in when changing
             * — hover pauses animation and shows gold underline
             */
            .eq-course-link {
              font-family: 'Playfair Display', serif;
              font-size: 1.1rem;
              font-weight: 700;
              color: var(--navy);
              text-decoration: none;
              display: inline-block;
              position: relative;
              white-space: nowrap;
              cursor: pointer;
              transition: color 0.2s ease;
            }

            .eq-course-link::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              right: 0;
              height: 2px;
              background: var(--gold);
              border-radius: 2px;
              transform: scaleX(0);
              transition: transform 0.25s ease;
            }

            .eq-course-link:hover {
              color: var(--gold);
              animation-play-state: paused !important;
            }

            .eq-course-link:hover::after {
              transform: scaleX(1);
            }

            /* Slow blink: visible 2.6s, invisible 0.4s out of every 3s */
            .eq-course-link.blinking {
              animation: eq-blink 3s ease-in-out infinite;
            }

            /* Fade-out before swap */
            .eq-course-link.fading-out {
              animation: eq-fade-out 0.4s ease-out forwards;
            }

            /* Slide-up fade-in after swap */
            .eq-course-link.fading-in {
              animation: eq-fade-in 0.4s ease-out forwards;
            }

            @keyframes eq-blink {
              0%, 80%, 100% { opacity: 1; }
              90%            { opacity: 0.15; }
            }

            @keyframes eq-fade-out {
              from { opacity: 1; transform: translateY(0);   }
              to   { opacity: 0; transform: translateY(-6px); }
            }

            @keyframes eq-fade-in {
              from { opacity: 0; transform: translateY(8px); }
              to   { opacity: 1; transform: translateY(0);   }
            }

            /* ── Responsive ── */
            @media (max-width: 768px) {
              .eq-section    { padding: 60px 20px; }
              .eq-header      { flex-direction: column; align-items: flex-start; }
              .eq-right-panel { min-width: unset; width: 100%; box-sizing: border-box; }
            }

            @media (max-width: 480px) {
              .eq-right-panel   { flex-direction: column; align-items: flex-start; gap: 14px; }
              .eq-panel-divider { width: 100%; height: 1px; }
            }
          `,
        }}
      />

      <section className="eq-section" id="courses">
        <div className="eq-inner">
          <div className="eq-header">

            {/* ── Left: completely static, zero animation ── */}
            <div className="eq-left">
              <div className="eq-section-tag">Popular Courses</div>
              <h2 className="eq-title">
                SAT · ACT · AP · UCAT · LSAT · <em>And More</em>
              </h2>
              <p className="eq-desc">
                Expert Admission Counselling | Test Series |{' '}
                <strong>Comprehensive Test Prep for global universities</strong>
              </p>
            </div>

            {/* ── Right: animated course name only ── */}
            <div className="eq-right-panel">

              <div className="eq-panel-label">
                <span>Comprehensive Test Prep</span>
                for global universities
              </div>

              <div className="eq-panel-divider" />

              <div className="eq-course-slot">
                <div className="eq-explore-label">Explore Course</div>

                {/*
                  isChanging=true  → fading-out (then name swaps) → fading-in
                  isChanging=false → blinking (slow gentle pulse)
                */}
                <a
                  href={currentCourse.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`eq-course-link ${
                    isChanging ? 'fading-out' : 'blinking'
                  }`}
                >
                  {currentCourse.title}
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}