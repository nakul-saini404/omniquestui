'use client';

const diffItems = [
  {
    icon: '🎯',
    title: 'Profile-First Strategy',
    desc: 'We build differentiated student profiles over 12–18 months, not just polish applications at the last minute.',
  },
  {
    icon: '🔬',
    title: 'Research & Depth',
    desc: 'Passion projects, research papers, leadership roles — we help you build meaningful, verifiable accomplishments.',
  },
  {
    icon: '📊',
    title: 'Data-Driven University Strategy',
    desc: 'Smart shortlisting for US, UK & Canada — targeting universities where your profile gives you a real edge.',
  },
  {
    icon: '🏆',
    title: 'Limited Intake for Deep Results',
    desc: 'Only 15–20 students per cycle. Every student gets senior-level attention, not a junior coordinator.',
  },
];

const vsRows = [
  { bad: 'Application-focused only',  good: 'Profile-first strategy' },
  { bad: 'Last-minute guidance',       good: '12–18 month roadmap' },
  { bad: 'High student volumes',       good: 'Limited intake (15–20)' },
  { bad: 'Generic templates',          good: 'Personalised narrative' },
  { bad: 'No scholarship strategy',    good: 'Scholarship optimisation' },
  { bad: 'No post-admit support',      good: 'Admit-to-visa support' },
];

export default function WhyEduQuest() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Section ── */
        .eq-auth-section {
          background: #ffffff;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .eq-auth-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* ── Two-column layout ── */
        .eq-auth-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        /* ────────────────────────
           LEFT COLUMN
        ──────────────────────── */
        .eq-auth-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a84c;
          padding: 4px 12px;
          background: rgba(201, 168, 76, 0.1);
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .eq-auth-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: #0a1628;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .eq-auth-title em {
          font-style: normal;
          color: #c9a84c;
        }

        .eq-auth-desc {
          font-size: 1.05rem;
          color: #6b7280;
          max-width: 620px;
          line-height: 1.7;
          margin: 0;
        }

        .eq-auth-desc strong {
          color: #0a1628;
          font-weight: 600;
        }

        /* Diff items list */
        .eq-auth-diff {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .eq-diff-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .eq-diff-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 10px;
          background: rgba(201, 168, 76, 0.12);
          border: 1px solid rgba(201, 168, 76, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .eq-diff-content h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0a1628;
          margin: 0 0 3px 0;
        }

        .eq-diff-content p {
          font-size: 0.85rem;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        /* ────────────────────────
           RIGHT COLUMN — VS Card
        ──────────────────────── */
        .eq-auth-visual {
          background: #0a1628;
          border-radius: 16px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
        }

        /* decorative circle */
        .eq-auth-visual::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(201, 168, 76, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.1);
          pointer-events: none;
        }

        .eq-auth-visual-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        /* VS table */
        .eq-vs-table {
          position: relative;
          z-index: 1;
        }

        .eq-vs-header-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 8px;
        }

        .eq-vs-col-header {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 700;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .eq-vs-col-header.bad  { color: #f87171; }
        .eq-vs-col-header.good { color: #c9a84c; }

        .eq-vs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 0;
        }

        .eq-vs-cell {
          font-size: 0.82rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          line-height: 1.4;
        }

        .eq-vs-cell.bad  { color: rgba(255, 255, 255, 0.45); }
        .eq-vs-cell.good { color: rgba(255, 255, 255, 0.85); }
        .eq-vs-cell.good::before { content: '✓ '; color: #c9a84c; }

        /* ────────────────────────
           RESPONSIVE
        ──────────────────────── */

        /* Tablet */
        @media (max-width: 1024px) {
          .eq-auth-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .eq-auth-desc {
            max-width: 100%;
          }
        }

        /* Phablet */
        @media (max-width: 640px) {
          .eq-auth-section {
            padding: 56px 20px;
          }
          .eq-auth-visual {
            padding: 28px 20px;
          }
          .eq-auth-visual-title {
            font-size: 1.15rem;
            margin-bottom: 18px;
          }
          .eq-vs-cell {
            font-size: 0.78rem;
          }
          .eq-diff-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            font-size: 1rem;
          }
          .eq-diff-content h4 {
            font-size: 0.9rem;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .eq-vs-header-row,
          .eq-vs-row {
            gap: 10px;
          }
          .eq-vs-cell,
          .eq-vs-col-header {
            font-size: 0.74rem;
          }
        }
      `}</style>

      <section className="eq-auth-section" id="why-eduquest">
        <div className="eq-auth-inner">
          <div className="eq-auth-grid">

            {/* ── LEFT: Text + Diff Items ── */}
            <div>
              <div className="eq-auth-tag">Why EduQuest</div>
              <h2 className="eq-auth-title">
                India's Most Strategic Study Abroad{' '}
                <em>Admissions Partner</em>
              </h2>
              <p className="eq-auth-desc">
                Most consultants focus on applications. We focus on{' '}
                <strong>building the student who deserves to get in.</strong>{' '}
                Our approach combines long-term profile strategy with global
                admissions positioning.
              </p>

              <div className="eq-auth-diff">
                {diffItems.map((item) => (
                  <div className="eq-diff-item" key={item.title}>
                    <div className="eq-diff-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className="eq-diff-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: VS Comparison Card ── */}
            <div className="eq-auth-visual">
              <div className="eq-auth-visual-title">
                EduQuest vs Typical Consultants
              </div>

              <div className="eq-vs-table">
                {/* Column headers */}
                <div className="eq-vs-header-row">
                  <div className="eq-vs-col-header bad">❌ Typical Consultants</div>
                  <div className="eq-vs-col-header good">✅ EduQuest</div>
                </div>

                {/* Data rows */}
                {vsRows.map((row) => (
                  <div className="eq-vs-row" key={row.bad}>
                    <div className="eq-vs-cell bad">{row.bad}</div>
                    <div className="eq-vs-cell good">{row.good}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}