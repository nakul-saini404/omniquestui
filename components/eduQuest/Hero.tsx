'use client';
import { useState } from 'react';

const interests = [
  'Profile Building',
  'UG Admission Counselling',
  'SAT / New Digital SAT',
  'AP Coaching',
  'Pre-AP',
  'ACT Online',
  'ACT Classroom',
  'TMUA',
  'UCAT',
  'LSAT',
  'PSAT',
  'Others',
];

const trustItems = [
  'Profile-first strategy',
  'Limited student intake',
  'End-to-end support',
  'Guaranteed scholarship guidance',
];

const stats = [
  { value: '98%', label: 'Success Ratio' },
  { value: '10K+', label: 'Happy Students' },
  { value: '$8M+', label: 'In Scholarships Awarded' },
  { value: '15+', label: 'Years of Service' },
];

export default function Hero() {
  const [form, setForm] = useState({ interest: '', name: '', mobile: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ── STYLES ─────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --navy: #0a1628;
          --navy-mid: #112240;
          --gold: #c9a84c;
          --gold-light: #f0c96e;
          --white: #ffffff;
          --transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        #hero {
          min-height: auto;
        }

        .eq-hero {
          background: linear-gradient(135deg, var(--navy) 0%, #1a3460 50%, var(--navy-mid) 100%);
          color: var(--white);
          padding: 80px 24px 60px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
        }

        .eq-hero-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* Badge */
        .eq-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .eq-hero-badge::before { content: '★'; }

        /* Heading */
        .eq-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          color: var(--white);
        }
        .eq-hero h1 em {
          font-style: normal;
          color: var(--gold);
        }

        /* Sub */
        .eq-hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.8);
          max-width: 580px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .eq-hero-sub strong { color: var(--white); }

        /* Trust items */
        .eq-hero-trust {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .eq-hero-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
        }
        .eq-hero-trust-item::before {
          content: '✓';
          color: var(--gold);
          font-weight: 700;
          font-size: 0.9rem;
        }

        /* CTA buttons */
        .eq-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .eq-btn-gold {
          background: var(--gold);
          color: var(--navy);
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          font-family: 'DM Sans', sans-serif;
        }
        .eq-btn-gold:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.4);
        }
        .eq-btn-outline-white {
          background: transparent;
          color: var(--white);
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.4);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-btn-outline-white:hover {
          border-color: var(--white);
          background: rgba(255,255,255,0.08);
        }

        /* Scarcity */
        .eq-hero-scarcity {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
        }
        .eq-hero-scarcity span { color: #f87171; font-weight: 600; }

        /* ── FORM CARD ── */
        .eq-form-card {
          background: var(--white);
          border-radius: 16px;
          padding: 32px 28px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.3);
        }
        .eq-form-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .eq-form-card-sub {
          font-size: 0.8rem;
          color: #6b7280;
          margin-bottom: 20px;
        }
        .eq-form-group { margin-bottom: 14px; }
        .eq-form-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 5px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .eq-form-group input,
        .eq-form-group select {
          width: 100%;
          padding: 10px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem;
          color: #1a1a2e;
          transition: var(--transition);
          background: var(--white);
          outline: none;
        }
        .eq-form-group input:focus,
        .eq-form-group select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }
        .eq-btn-submit {
          width: 100%;
          padding: 13px;
          background: var(--navy);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          margin-top: 4px;
        }
        .eq-btn-submit:hover { background: var(--gold); color: var(--navy); }
        .eq-btn-submit.success { background: #16a34a; color: var(--white); }
        .eq-form-privacy {
          font-size: 0.7rem;
          color: #6b7280;
          text-align: center;
          margin-top: 10px;
        }

        /* ── STATS BAR ── */
        .eq-stats-bar {
          background: #112240;
          padding: 28px 24px;
          font-family: 'DM Sans', sans-serif;
        }
        .eq-stats-inner {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: center;
        }
        .eq-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--gold);
          line-height: 1;
        }
        .eq-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
          margin-top: 4px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .eq-hero-inner {
            grid-template-columns: 1fr;
          }
          .eq-form-card { max-width: 480px; }
          .eq-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .eq-hero { padding: 50px 20px 40px; }
          .eq-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="eq-hero" id="home" style={{minHeight:"auto"}}>
        <div className="eq-hero-inner">

          {/* LEFT — Content */}
          <div className="eq-hero-left">
            <div className="eq-hero-badge">Elite Admissions Program 2027</div>

            <h1>
              Best Study Abroad Consultants in India for{' '}
              <em>Top US, UK &amp; Canada</em> Universities
            </h1>

            <p className="eq-hero-sub">
              We build <strong>Top 1% global applicant profiles</strong> for ambitious students
              targeting Top 50 universities — through a structured, end-to-end admissions system
              spanning 12–18 months.
            </p>

            <div className="eq-hero-trust">
              {trustItems.map((item) => (
                <div key={item} className="eq-hero-trust-item">{item}</div>
              ))}
            </div>

            <div className="eq-hero-ctas">
              <a href="#enroll" className="eq-btn-gold">
                Apply for Elite Program 2027 →
              </a>
              <a
                href="https://eduquest.org.in/free-download/"
                target="_blank"
                rel="noreferrer"
                className="eq-btn-outline-white"
              >
                Free Guide Book
              </a>
            </div>

            <div className="eq-hero-scarcity">
              ⚠️ <span>Only 15–20 students</span> selected per intake cycle. Application required.
            </div>
          </div>

          {/* RIGHT — Lead Form Card */}
          <div className="eq-form-card" id="enroll">
            <div className="eq-form-card-title">Score Faster. Higher. Better.</div>
            <div className="eq-form-card-sub">Get a free callback from our admissions expert</div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#0a1628', marginBottom: 8 }}>
                  Callback Requested!
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                  Our team will contact you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="eq-form-group">
                  <label>I'm Interested In</label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  >
                    <option value="">Select a program...</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <div className="eq-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="eq-form-group">
                  <label>Mobile</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  />
                </div>

                <div className="eq-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="eq-form-group">
                  <label>City</label>
                  <input
                    type="text"
                    required
                    placeholder="Your city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>

                <button type="submit" className="eq-btn-submit">
                  Request A Callback →
                </button>
                <div className="eq-form-privacy">
                  🔒 Your information is 100% secure. No spam ever.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────── */}
      <div className="eq-stats-bar">
        <div className="eq-stats-inner">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="eq-stat-num">{s.value}</div>
              <div className="eq-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}