'use client';

const courses = [
  {
    title: 'SAT / New Digital SAT',
    mode: 'Modes: Online live · Hybrid · Classroom',
    icon: '📐',
    href: 'https://eduquest.org.in/sat/',
  },
  {
    title: 'AP Coaching',
    mode: 'Modes: Online live · Hybrid · Classroom',
    icon: '📝',
    href: 'https://eduquest.org.in/ap-coaching/',
  },
  {
    title: 'ACT Coaching',
    mode: 'Modes: Online live · Hybrid · Classroom',
    icon: '🧮',
    href: 'https://eduquest.org.in/act/',
  },
  {
    title: 'PSAT Coaching',
    mode: '4-year & 5-year integrated programs',
    icon: '🎯',
    href: 'https://eduquest.org.in/sat/',
  },
  {
    title: 'LSAT Coaching',
    mode: 'Modes: Online live · Hybrid · Classroom',
    icon: '⚖️',
    href: 'https://eduquest.org.in/lsat-coaching-india/',
  },
  {
    title: 'UCAT Coaching',
    mode: 'Modes: Online live · Hybrid · Classroom',
    icon: '🏥',
    href: 'https://eduquest.org.in/ucat-exam-2025/',
  },
  {
    title: 'TMUA Coaching',
    mode: 'Cambridge · Warwick · LSE Mathematics',
    icon: '∑',
    href: 'https://eduquest.org.in/tmua/',
  },
  {
    title: 'IELTS / TOEFL / PTE',
    mode: 'All English proficiency exams',
    icon: '📖',
    href: 'https://eduquest.org.in/ielts/',
  },
  {
    title: 'IPMAT Coaching',
    mode: 'IIM Integrated Programme preparation',
    icon: '🧑‍💻',
    href: 'https://eduquest.org.in/ipmat-coaching-and-profile-building-eduquest-2026/',
  },
];

export default function Courses() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --navy: #0a1628;
          --gold: #c9a84c;
          --gold-light: #f0c96e;
          --cream: #f8f4ed;
          --white: #ffffff;
          --muted: #6b7280;
          --border: rgba(201,168,76,0.2);
          --transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .eq-courses-section {
          background: var(--cream);
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .eq-courses-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* Section header */
        .eq-courses-header {
          text-align: center;
          margin-bottom: 48px;
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
        .eq-courses-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: var(--navy);
          margin-bottom: 12px;
        }
        .eq-courses-title em {
          font-style: normal;
          color: var(--gold);
        }
        .eq-courses-desc {
          font-size: 1rem;
          color: var(--muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Grid */
        .eq-courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        /* Card */
        .eq-course-card {
          background: var(--white);
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 28px;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        .eq-course-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          transform: scaleX(0);
          transition: var(--transition);
        }
        .eq-course-card:hover::before { transform: scaleX(1); }
        .eq-course-card:hover {
          border-color: var(--gold);
          box-shadow: 0 8px 30px rgba(201,168,76,0.12);
          transform: translateY(-3px);
        }

        .eq-course-icon {
          font-size: 2rem;
          margin-bottom: 14px;
          display: block;
        }
        .eq-course-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
        }
        .eq-course-mode {
          font-size: 0.75rem;
          color: var(--muted);
          margin-bottom: 20px;
          font-family: 'DM Mono', monospace;
        }

        /* Demo button */
        .eq-btn-demo {
          display: inline-block;
          padding: 9px 20px;
          border: 1.5px solid var(--navy);
          border-radius: 7px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--navy);
          text-decoration: none;
          transition: var(--transition);
          font-family: 'DM Sans', sans-serif;
        }
        .eq-btn-demo:hover {
          background: var(--navy);
          color: var(--white);
        }

        @media (max-width: 768px) {
          .eq-courses-section { padding: 60px 20px; }
          .eq-courses-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 500px) {
          .eq-courses-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="eq-courses-section" id="courses">
        <div className="eq-courses-inner">

          {/* Header */}
          <div className="eq-courses-header">
            <div className="eq-section-tag">Popular Courses</div>
            <h2 className="eq-courses-title">
              SAT · ACT · AP · UCAT · LSAT · <em>And More</em>
            </h2>
            <p className="eq-courses-desc">
              Expert Admission Counselling | Test Series | Comprehensive Test Prep for global universities
            </p>
          </div>

          {/* Cards Grid */}
          <div className="eq-courses-grid">
            {courses.map((course) => (
              <div key={course.title} className="eq-course-card">
                <span className="eq-course-icon">{course.icon}</span>
                <div className="eq-course-title">{course.title}</div>
                <div className="eq-course-mode">{course.mode}</div>
                <a
                  href={course.href}
                  target="_blank"
                  rel="noreferrer"
                  className="eq-btn-demo"
                >
                  Book A Demo
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}