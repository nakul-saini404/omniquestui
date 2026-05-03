'use client';

const stats = [
  { value: '97%',  label: 'Success Ratio' },
  { value: '10K+', label: 'Happy Students' },
  { value: '$8M+', label: 'In Scholarships' },
  { value: '20+',  label: 'Years of Service' },
];

const univBadges = ['Harvard', 'Yale', 'MIT', 'Oxford', 'Stanford', 'LSE', 'Cambridge'];

const transformSteps = [
  { icon: '🎒', label: 'Raw Student',        bg: '#FEF3C7' },
  { icon: '📐', label: 'Structured Profile', bg: '#DBEAFE' },
  { icon: '🎓', label: 'Ivy Admit',          bg: '#D1FAE5' },
];

const T = {
  ink:        '#0A0A14',
  paper:      '#FAFAF7',
  cream:      '#F5F0E8',
  gold:       '#C9973A',
  goldLight:  '#E8B84B',
  slate:      '#2E3A52',
  slateLight: '#4A5568',
  rust:       '#B8432C',
  border:     'rgba(10,10,20,0.1)',
  white:      '#ffffff',
  serif:      '"DM Serif Display", Georgia, serif',
  sans:       '"DM Sans", system-ui, sans-serif',
};

export default function Hero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Nav links ── */
        .eq-nav-link-item { list-style: none; }
        .eq-nav-link-item a {
          text-decoration: none;
          color: ${T.slateLight};
          font-size: 0.9rem;
          font-weight: 500;
          font-family: ${T.sans};
          transition: color 0.2s;
        }
        .eq-nav-link-item a:hover { color: ${T.gold}; }

        .eq-nav-cta-link {
          text-decoration: none;
          background: ${T.gold} !important;
          color: ${T.ink} !important;
          padding: 10px 22px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.85rem;
          font-family: ${T.sans};
          transition: background 0.2s;
          display: inline-block;
        }
        .eq-nav-cta-link:hover { background: ${T.goldLight} !important; }

        /* ── CTA Buttons ── */
        .eq-btn-primary-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: ${T.slate} !important;
          color: #fff !important;
          padding: 15px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          font-family: ${T.sans};
          border: 2px solid ${T.slate};
          transition: all 0.2s;
          text-align: center;
        }
        .eq-btn-primary-link:hover {
          background: ${T.ink} !important;
          border-color: ${T.ink};
          transform: translateY(-1px);
        }

        .eq-btn-secondary-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent !important;
          color: ${T.slate} !important;
          padding: 15px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          font-family: ${T.sans};
          border: 2px solid rgba(10,10,20,0.15);
          transition: all 0.2s;
          text-align: center;
        }
        .eq-btn-secondary-link:hover {
          border-color: ${T.slate};
          color: ${T.slate} !important;
        }

        /* ── Hover helpers ── */
        .eq-univ-badge-pill {
          background: ${T.cream};
          border: 1px solid ${T.border};
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 0.72rem;
          font-weight: 700;
          color: ${T.slate};
          letter-spacing: 0.02em;
          font-family: ${T.sans};
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .eq-univ-badge-pill:hover {
          background: ${T.slate} !important;
          color: #fff !important;
          border-color: ${T.slate} !important;
        }

        /* ── Hero glow ── */
        .eq-hero-section {
          position: relative;
          overflow: hidden;
        }
        .eq-hero-section::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(201,151,58,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .eq-hero-inner {
          max-width:"1560px";
          position: relative;
          z-index: 1;
        }

        #hero-div {
        max-width:"1560px";
        }

        /* ── Layout grid ── */
        .eq-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 56px;
        }

        /* ── Stats grid ── */
        .eq-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        /* ── CTA row ── */
        .eq-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ── Transform steps ── */
        .eq-transform-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ━━━━━━━━━━━━━━━━━━━━━━━━━
           BREAKPOINTS
        ━━━━━━━━━━━━━━━━━━━━━━━━━ */

        /* Tablet (641 – 1024px) */
        @media (max-width: 1024px) {
          .eq-hero-section  { padding: 60px 40px !important; min-height: unset !important; }
          .eq-hero-grid     { gap: 40px; }
          .eq-stats-grid    { grid-template-columns: repeat(2, 1fr); }
        }

        /* Small tablet / large phone (641 – 900px): single-column */
        @media (max-width: 900px) {
          .eq-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .eq-hero-section { padding: 56px 32px !important; }
        }

        /* Mobile (≤ 640px) */
        @media (max-width: 640px) {
          .eq-hero-section  { padding: 36px 16px !important; }
          .eq-hero-grid     { gap: 28px; }

          .eq-cta-row {
            flex-direction: column;
          }
          .eq-btn-primary-link,
          .eq-btn-secondary-link {
            width: 100%;
            font-size: 0.9rem;
            padding: 14px 20px;
          }

          .eq-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }

          .eq-transform-row { gap: 6px; }
          .eq-transform-step-icon {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.1rem !important;
          }
          .eq-transform-step-label { font-size: 0.7rem !important; }
          .eq-transform-arrow { font-size: 0.9rem !important; }

          .eq-univ-badges-wrap { gap: 8px !important; }
          .eq-univ-badge-pill  { font-size: 0.68rem; padding: 3px 8px; }

          .eq-card-pad { padding: 20px 18px !important; }
        }

        /* Very small (≤ 375px) */
        @media (max-width: 375px) {
          .eq-hero-section { padding: 28px 12px !important; }
          .eq-stats-grid   { grid-template-columns: repeat(2, 1fr); gap: 8px; }
        }
      `}} />

      {/* ── HERO ── */}
      <section
        className="eq-hero-section"
        id="home"
        style={{
          minHeight: 'calc(100vh - 180px)',
          padding: '80px',
          background: `linear-gradient(135deg, ${T.paper} 0%, ${T.cream} 100%)`,
          fontFamily: T.sans,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="eq-hero-inner" id="hero-div" style={{ maxWidth: '100%' }}>
          <div className="eq-hero-grid">

            {/* ── LEFT ── */}
            <div>
              {/* Eyebrow pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(201,151,58,0.12)',
                border: '1px solid rgba(201,151,58,0.3)',
                color: '#8B6A1F',
                padding: '6px 14px',
                borderRadius: '100px',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '22px',
                fontFamily: T.sans,
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: '1rem' }}>🏛️</span>
                Narrative Architects for Top University Admissions
              </div>

              {/* H1 */}
              <h1 style={{
                fontFamily: T.serif,
                fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                lineHeight: 1.15,
                color: T.ink,
                marginBottom: '20px',
                fontWeight: 400,
                margin: '0 0 20px',
              }}>
                We Build Students That{' '}
                <em style={{ fontStyle: 'italic', color: T.gold, fontFamily: T.serif }}>
                  Top Universities
                </em>{' '}
                Select
              </h1>

              {/* Sub */}
              <p style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                color: T.slateLight,
                maxWidth: '480px',
                marginBottom: '10px',
                lineHeight: 1.75,
                fontFamily: T.sans,
              }}>
                We design students from Grade 8–12 into strategically structured,
                narrative-driven applicants for Ivy League and top global universities.
              </p>

              {/* Tagline */}
              <p style={{
                fontSize: '0.88rem',
                color: T.rust,
                fontWeight: 600,
                letterSpacing: '0.02em',
                marginBottom: '36px',
                fontFamily: T.sans,
              }}>
                This is not tutoring. This is admissions architecture.
              </p>

              {/* CTAs */}
              <div className="eq-cta-row">
                <a href="/contact-us" className="eq-btn-primary-link">
                  👉 Book Admission Strategy Session
                </a>
                <a href="https://eduquest.org.in/profile-building-programs/" className="eq-btn-secondary-link">
                  Explore How We Build Profiles
                </a>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Transformation Engine card */}
              <div className="eq-card-pad" style={{
                background: T.white,
                borderRadius: '16px',
                padding: '26px 28px',
                boxShadow: '0 4px 40px rgba(0,0,0,0.07)',
                border: `1px solid ${T.border}`,
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: T.slateLight,
                  marginBottom: '16px',
                  fontFamily: T.sans,
                }}>
                  The Transformation Engine
                </div>
                <div className="eq-transform-row">
                  {transformSteps.map((step, i) => (
                    <div key={step.label} style={{ display: 'contents' }}>
                      <div style={{ flex: 1, textAlign: 'center' }}>
                        <div
                          className="eq-transform-step-icon"
                          style={{
                            width: '48px', height: '48px',
                            borderRadius: '50%',
                            margin: '0 auto 8px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.4rem',
                            background: step.bg,
                          }}
                        >
                          {step.icon}
                        </div>
                        <div
                          className="eq-transform-step-label"
                          style={{
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            color: T.ink,
                            fontFamily: T.sans,
                            lineHeight: 1.3,
                          }}
                        >
                          {step.label}
                        </div>
                      </div>
                      {i < transformSteps.length - 1 && (
                        <div
                          className="eq-transform-arrow"
                          style={{ color: T.gold, fontSize: '1.2rem', flexShrink: 0 }}
                        >
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="eq-stats-grid">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: T.white,
                      border: `1px solid ${T.border}`,
                      borderRadius: '12px',
                      padding: '16px 12px',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{
                      fontFamily: T.serif,
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                      color: T.slate,
                      lineHeight: 1,
                      marginBottom: '4px',
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontSize: '0.68rem',
                      color: T.slateLight,
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      fontFamily: T.sans,
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* University badges */}
              <div className="eq-card-pad" style={{
                background: T.white,
                border: `1px solid ${T.border}`,
                borderRadius: '12px',
                padding: '16px 22px',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: '0.67rem',
                  color: T.slateLight,
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  fontFamily: T.sans,
                }}>
                  Students Admitted To
                </span>
                <div
                  className="eq-univ-badges-wrap"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  {univBadges.map((u) => (
                    <span key={u} className="eq-univ-badge-pill">{u}</span>
                  ))}
                </div>
              </div>

            </div>{/* end right */}
          </div>{/* end grid */}
        </div>{/* end inner */}
      </section>
    </>
  );
}