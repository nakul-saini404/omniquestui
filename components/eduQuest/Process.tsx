'use client';

const steps = [
  {
    num: '01',
    title: 'Profile Evaluation & Benchmarking',
    desc: 'Understand exactly where the student stands vs. Top 50 expectations. Gap analysis across academics, activities, and narrative strength.',
    tags: ['Diagnostic', 'Benchmarking', 'Roadmap'],
  },
  {
    num: '02',
    title: 'Strategic Profile Building',
    desc: 'Passion projects, research initiatives, leadership roles, competitions — we co-build your narrative over 12–18 months.',
    tags: ['Research Paper', 'Leadership', 'Competitions'],
  },
  {
    num: '03',
    title: 'University Strategy & Shortlisting',
    desc: 'Smart US, UK, Canada targeting. Balance of reach, match, and safety schools based on your profile, not just rankings.',
    tags: ['US', 'UK', 'Canada'],
  },
  {
    num: '04',
    title: 'Application Execution',
    desc: 'Essays, SOPs, LOR guidance, interview preparation — executed to the highest standard with senior mentors.',
    tags: ['Essays', 'SOPs', 'LORs', 'Interviews'],
  },
  {
    num: '05',
    title: 'Admit to Visa Support',
    desc: 'Complete guidance from offer acceptance through scholarship negotiation, visa documentation, and pre-departure support.',
    tags: ['Scholarships', 'Visa', 'Post-Landing'],
  },
];

export default function Process() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        .eq-system-section {
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-system-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* ── LEFT COLUMN ── */
        .eq-system-left {}
        .eq-system-tag {
          display: inline-block;
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c9a84c; margin-bottom: 12px;
          padding: 4px 12px; background: rgba(201,168,76,0.1); border-radius: 4px;
        }
        .eq-system-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800; line-height: 1.2;
          color: #0a1628; margin-bottom: 16px;
        }
        .eq-system-title em { font-style: normal; color: #c9a84c; }
        .eq-system-desc {
          font-size: 1.05rem; color: #6b7280;
          max-width: 620px; line-height: 1.7; margin-bottom: 32px;
        }
        .eq-system-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #c9a84c; color: #0a1628;
          padding: 14px 28px; border-radius: 8px;
          font-weight: 700; font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          font-family: 'DM Sans', sans-serif;
        }
        .eq-system-cta:hover {
          background: #f0c96e; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.4);
        }

        /* ── RIGHT COLUMN — Steps ── */
        .eq-system-steps {
          display: flex; flex-direction: column; gap: 0;
        }

        .eq-system-step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          position: relative;
        }

        /* Vertical connector line */
        .eq-system-step::before {
          content: '';
          position: absolute;
          left: 39px; top: 60px; bottom: -20px;
          width: 2px;
          background: linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.1));
        }
        .eq-system-step:last-child::before { display: none; }

        /* Circle number */
        .eq-step-num-col {
          display: flex; flex-direction: column; align-items: center;
        }
        .eq-step-circle {
          width: 44px; height: 44px; border-radius: 50%;
          background: #0a1628; border: 2px solid #c9a84c;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Mono', monospace; font-size: 0.85rem; font-weight: 700;
          color: #c9a84c; flex-shrink: 0; margin-top: 6px;
        }

        /* Step body */
        .eq-step-body { padding: 8px 0 40px 24px; }
        .eq-step-body h4 {
          font-size: 1.05rem; font-weight: 700; color: #0a1628; margin-bottom: 8px;
        }
        .eq-step-body p {
          font-size: 0.88rem; color: #6b7280; line-height: 1.6; margin-bottom: 0;
        }

        /* Tags */
        .eq-step-tags {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px;
        }
        .eq-step-tag {
          font-size: 0.72rem; padding: 3px 10px; border-radius: 100px;
          background: rgba(201,168,76,0.1); color: #c9a84c; font-weight: 600;
          font-family: 'DM Sans', sans-serif;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .eq-system-inner { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 640px) {
          .eq-system-section { padding: 60px 20px; }
          .eq-system-step { grid-template-columns: 60px 1fr; }
          .eq-system-step::before { left: 29px; }
          .eq-step-circle { width: 36px; height: 36px; font-size: 0.75rem; }
        }
      `}</style>

      <section className="eq-system-section" id="admissions-system">
        <div className="eq-system-inner">

          {/* LEFT — Text */}
          <div className="eq-system-left">
            <div className="eq-system-tag">Our System</div>
            <h2 className="eq-system-title">
              The EduQuest <em>5-Step</em> Admissions System
            </h2>
            <p className="eq-system-desc">
              A structured, 12–18 month program built to convert potential into Top 50 university admits.
            </p>
            <a href="#enroll" className="eq-system-cta">
              Apply for Elite Program 2027 →
            </a>
          </div>

          {/* RIGHT — Steps */}
          <div className="eq-system-steps">
            {steps.map((step) => (
              <div key={step.num} className="eq-system-step">
                <div className="eq-step-num-col">
                  <div className="eq-step-circle">{step.num}</div>
                </div>
                <div className="eq-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <div className="eq-step-tags">
                    {step.tags.map((tag) => (
                      <span key={tag} className="eq-step-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}