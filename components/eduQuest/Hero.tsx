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

const testPills = ['SAT', 'PSAT', 'ACT', 'UCAT', 'TMUA', 'ESAT'];

export default function Hero() {
  const [form, setForm] = useState({ interest: '', name: '', mobile: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const scrollToEnroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('enroll');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --navy:       #0a1628;
          --navy-mid:   #112240;
          --dark-2:     #0d1e38;
          --gold:       #C9A84C;
          --gold-light: #E8C97A;
          --gold-dim:   #8A6C2A;
          --white:      #ffffff;
          --white-dim:  rgba(255,255,255,0.75);
          --white-faint:rgba(255,255,255,0.06);
          --border:     1px solid rgba(201,168,76,0.18);
          --border-s:   1px solid rgba(201,168,76,0.4);
          --serif:      'Cormorant Garamond', serif;
          --sans:       'DM Sans', sans-serif;
          --ease:       cubic-bezier(0.4,0,0.2,1);
        }

        .aq-hero {
          background: linear-gradient(135deg, var(--navy) 0%, #1a3460 50%, var(--navy-mid) 100%);
          color: var(--white);
          padding: 100px 5% 80px;
          position: relative;
          overflow: hidden;
          font-family: var(--sans);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .aq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
          pointer-events: none;
        }
        .aq-hero-pattern { display: none; }
        .aq-hero-bottomline {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
        }
        .aq-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 72px;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .aq-eyebrow {
          display: flex; align-items: center; gap: 14px; margin-bottom: 36px;
        }
        .aq-eyebrow-line { width: 28px; height: 1px; background: var(--gold); flex-shrink: 0; }
        .aq-eyebrow span {
          font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--gold); font-weight: 400;
        }
        .aq-hero h1 {
          font-family: var(--serif);
          font-size: clamp(48px, 6vw, 86px);
          font-weight: 300; line-height: 1.05; letter-spacing: -0.015em;
          color: var(--white); margin-bottom: 12px;
        }
        .aq-hero h1 em { font-style: italic; color: var(--gold); }
        .aq-hero-sub {
          font-size: 15px; color: var(--white-dim); max-width: 560px;
          line-height: 1.85; margin-bottom: 28px; font-weight: 300;
        }
        .aq-hero-sub strong { color: var(--white); font-weight: 400; }
        .aq-test-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 40px; }
        .aq-pill {
          padding: 5px 14px; border: var(--border);
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--white-dim); background: var(--white-faint); font-family: var(--sans);
        }
        .aq-trust { display: flex; flex-wrap: wrap; gap: 12px 20px; margin-bottom: 44px; }
        .aq-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: var(--white-dim); font-weight: 300;
        }
        .aq-trust-check { color: var(--gold); font-size: 12px; flex-shrink: 0; }
        .aq-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .aq-btn-gold {
          background: var(--gold); color: var(--dark);
          padding: 14px 32px; font-family: var(--sans);
          font-size: 11px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.25s var(--ease), transform 0.25s var(--ease);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .aq-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }
        .aq-btn-ghost {
          background: transparent; color: var(--white);
          padding: 13px 31px; font-family: var(--sans);
          font-size: 11px; font-weight: 400; letter-spacing: 0.14em; text-transform: uppercase;
          text-decoration: none; border: 1px solid rgba(245,242,235,0.22); cursor: pointer;
          transition: border-color 0.25s var(--ease), color 0.25s var(--ease);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .aq-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
        .aq-scarcity {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; color: rgba(245,242,235,0.4); letter-spacing: 0.05em;
          padding-top: 20px; border-top: var(--border); margin-top: 16px;
        }
        .aq-scarcity strong { color: #f87171; font-weight: 500; }

        /* Form Card — white, matching original tsx */
        .aq-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
          position: relative; overflow: hidden;
        }
        .aq-form-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold-dim), var(--gold), var(--gold-dim));
        }
        .aq-form-title {
          font-family: var(--serif); font-size: 26px; font-weight: 700;
          color: var(--navy); margin-bottom: 4px; line-height: 1.2;
        }
        .aq-form-title em { color: var(--gold); font-style: italic; }
        .aq-form-sub {
          font-size: 12px; color: #6b7280; margin-bottom: 24px; letter-spacing: 0.03em;
        }
        .aq-field { margin-bottom: 14px; }
        .aq-field label {
          display: block; font-size: 10px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--navy); margin-bottom: 5px;
        }
        .aq-field input, .aq-field select {
          width: 100%; padding: 10px 14px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #1a1a2e; font-family: var(--sans); font-size: 14px; font-weight: 400;
          outline: none; transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease);
          -webkit-appearance: none; appearance: none; border-radius: 7px;
        }
        .aq-field input::placeholder { color: #9ca3af; }
        .aq-field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23374151'/%3E%3C/svg%3E");
          background-color: #ffffff;
          background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; cursor: pointer;
        }
        .aq-field select option { background: #ffffff; color: #1a1a2e; }
        .aq-field input:focus, .aq-field select:focus {
          border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }
        .aq-submit {
          width: 100%; padding: 13px; background: var(--navy); color: #ffffff;
          border: none; font-family: var(--sans); font-size: 15px; font-weight: 700;
          cursor: pointer; margin-top: 6px;
          transition: background 0.25s var(--ease); border-radius: 8px;
        }
        .aq-submit:hover { background: var(--gold); color: var(--navy); }
        .aq-form-privacy {
          font-size: 11px; color: #9ca3af;
          text-align: center; margin-top: 10px;
        }
        .aq-success { text-align: center; padding: 40px 0; }
        .aq-success-icon { font-size: 44px; margin-bottom: 14px; display: block; color: #16a34a; }
        .aq-success-title {
          font-family: var(--serif); font-size: 24px; font-weight: 700;
          color: var(--navy); margin-bottom: 8px;
        }
        .aq-success-sub { font-size: 13px; color: #6b7280; line-height: 1.6; }

        /* Stats */
        .aq-stats-bar {
          background: var(--navy-mid);
          border-top: 1px solid rgba(201,168,76,0.15);
          font-family: var(--sans); position: relative; z-index: 1;
        }
        .aq-stats-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .aq-stat-box {
          padding: 32px 28px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .aq-stat-box:last-child { border-right: none; }
        .aq-stat-num {
          font-family: var(--serif); font-size: 42px; font-weight: 900;
          color: var(--gold); line-height: 1;
        }
        .aq-stat-label {
          font-size: 10px; color: rgba(255,255,255,0.55); margin-top: 6px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        /* Animations */
        @keyframes aqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .aq-fade-1 { animation: aqFadeUp 0.7s var(--ease) both; }
        .aq-fade-2 { animation: aqFadeUp 0.7s 0.1s var(--ease) both; }
        .aq-fade-3 { animation: aqFadeUp 0.7s 0.2s var(--ease) both; }
        .aq-fade-4 { animation: aqFadeUp 0.7s 0.3s var(--ease) both; }
        .aq-fade-5 { animation: aqFadeUp 0.7s 0.4s var(--ease) both; }

        @media (max-width: 1050px) {
          .aq-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .aq-form-card { max-width: 520px; }
          .aq-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .aq-hero { padding: 80px 5% 60px; min-height: auto; }
          .aq-hero h1 { font-size: clamp(40px, 10vw, 60px); }
          .aq-stats-inner { grid-template-columns: repeat(2, 1fr); }
        }
      `}} />

      <section className="aq-hero" id="home">
        <div className="aq-hero-pattern" />

        <div className="aq-hero-inner">

          {/* LEFT */}
          <div className="aq-hero-left">
            <div className="aq-eyebrow aq-fade-1">
              <div className="aq-eyebrow-line" />
              <span>Elite Admissions Program — 2027</span>
            </div>

            <h1 className="aq-fade-2">
              We Build Students<br />
              That Top Universities<br />
              <em>Select.</em>
            </h1>

            <p className="aq-hero-sub aq-fade-3">
              We build <strong>Top 1% global applicant profiles</strong> for ambitious students
              targeting Top 50 universities — through a structured, end-to-end admissions system
              spanning 12–18 months.
            </p>

            <div className="aq-test-pills aq-fade-3">
              {testPills.map(pill => (
                <span key={pill} className="aq-pill">{pill}</span>
              ))}
            </div>

            <div className="aq-trust aq-fade-4">
              {trustItems.map(item => (
                <div key={item} className="aq-trust-item">
                  <span className="aq-trust-check">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="aq-ctas aq-fade-4">
              <a href="#enroll" className="aq-btn-gold" onClick={scrollToEnroll}>
                Apply for a Private Strategy Session
              </a>
              <a
                href="https://eduquest.org.in/free-download/"
                target="_blank"
                rel="noreferrer"
                className="aq-btn-ghost"
              >
                Free Guide Book
              </a>
            </div>

            <div className="aq-scarcity aq-fade-5">
              <span>⚠</span>
              <span>Only <strong>15–20 students</strong> selected per intake cycle. Application required.</span>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="aq-form-card aq-fade-3" id="enroll">
            <div className="aq-form-title">
              Score Faster.<br /><em>Higher. Better.</em>
            </div>
            <div className="aq-form-sub">Get a free callback from our admissions expert</div>

            {submitted ? (
              <div className="aq-success">
                <span className="aq-success-icon">✓</span>
                <div className="aq-success-title">Callback Requested</div>
                <p className="aq-success-sub">
                  Our team will contact you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="aq-field">
                  <label>I'm Interested In</label>
                  <select
                    required
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                  >
                    <option value="">Select a program...</option>
                    {interests.map(i => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="aq-field">
                  <label>Full Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="aq-field">
                  <label>Mobile</label>
                  <input
                    type="tel" required placeholder="+91 XXXXX XXXXX"
                    value={form.mobile}
                    onChange={e => setForm({ ...form, mobile: e.target.value })}
                  />
                </div>
                <div className="aq-field">
                  <label>Email</label>
                  <input
                    type="email" required placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="aq-field">
                  <label>City</label>
                  <input
                    type="text" required placeholder="Your city"
                    value={form.city}
                    onChange={e => setForm({ ...form, city: e.target.value })}
                  />
                </div>
                <button type="submit" className="aq-submit">
                  Request A Callback →
                </button>
                <div className="aq-form-privacy">
                  🔒 Your information is 100% secure. No spam ever.
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="aq-hero-bottomline" />
      </section>

      {/* STATS BAR */}
      <div className="aq-stats-bar">
        <div className="aq-stats-inner">
          {stats.map(s => (
            <div key={s.label} className="aq-stat-box">
              <div className="aq-stat-num">{s.value}</div>
              <div className="aq-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}