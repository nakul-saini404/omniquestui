'use client';
import { useState } from 'react';

const interests = [
  'Profile Building',
  'UG Admission Counselling',
  'SAT / New Digital SAT',
  'AP', 'Pre-AP', 'ACT Online', 'ACT Classroom',
  'TMUA', 'UCAT', 'LSAT', 'PSAT', 'Others',
];

export default function Contact() {
  const [form, setForm] = useState({ interest: '', name: '', mobile: '', email: '', city: '' });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <>
      <style>{`
       
      `}</style>

       <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Section ── */
        .ct-section {
          background: linear-gradient(135deg, #0a1628 0%, #1a3460 50%, #112240 100%);
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Decorative radial glow */
        .ct-section::before {
          content: '';
          position: absolute;
          top: -80px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%);
          pointer-events: none;
        }

        /* Subtle dot-grid texture */
        .ct-section::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
        }

        .ct-inner {
          max-width: 1320px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 60px;
          align-items: center;
        }

        /* ════════════════════════
           LEFT — INFO COLUMN
        ════════════════════════ */
        .ct-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 6px 16px; border-radius: 100px;
          font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #c9a84c; margin-bottom: 20px;
          display: inline-block;
        }

        .ct-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900; line-height: 1.15;
          color: #ffffff; margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .ct-heading em { font-style: normal; color: #c9a84c; }

        .ct-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.7; margin-bottom: 32px;
        }

        /* Trust checklist */
        .ct-checklist {
          list-style: none; padding: 0; margin: 0 0 36px 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .ct-checklist li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.88rem; color: rgba(255,255,255,0.8); line-height: 1.5;
        }
        .ct-check {
          color: #c9a84c; font-weight: 700; font-size: 0.9rem;
          flex-shrink: 0; margin-top: 1px;
        }

        /* Contact info links */
        .ct-contacts { display: flex; flex-direction: column; gap: 10px; }
        .ct-contact-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.85rem; text-decoration: none;
          color: rgba(255,255,255,0.65);
          transition: color 0.25s;
        }
        .ct-contact-row:hover { color: #c9a84c; }
        .ct-contact-icon {
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; flex-shrink: 0;
          transition: background 0.25s, border-color 0.25s;
        }
        .ct-contact-row:hover .ct-contact-icon {
          background: rgba(201,168,76,0.15);
          border-color: rgba(201,168,76,0.3);
        }

        /* ════════════════════════
           RIGHT — FORM CARD
        ════════════════════════ */
        .ct-form-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
        }

        .ct-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 700;
          color: #0a1628; margin-bottom: 4px;
        }
        .ct-form-sub {
          font-size: 0.8rem; color: #6b7280; margin-bottom: 22px;
        }

        /* Form fields */
        .ct-field { margin-bottom: 14px; }
        .ct-field label {
          display: block;
          font-size: 0.72rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
          color: #0a1628; margin-bottom: 5px;
        }
        .ct-field input,
        .ct-field select {
          width: 100%;
          padding: 10px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.88rem; color: #1a1a2e;
          background: #ffffff;
          transition: border-color 0.25s, box-shadow 0.25s;
          outline: none;
          box-sizing: border-box;
        }
        .ct-field input:focus,
        .ct-field select:focus {
          border-color: #c9a84c;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }

        /* Submit button */
        .ct-submit {
          width: 100%;
          padding: 13px;
          background: #0a1628; color: #ffffff;
          border: none; border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem; font-weight: 700;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          margin-top: 4px;
        }
        .ct-submit:hover {
          background: #c9a84c;
          color: #0a1628;
          transform: translateY(-1px);
        }

        .ct-privacy {
          font-size: 0.7rem; color: #9ca3af;
          text-align: center; margin-top: 10px;
        }

        /* Success state */
        .ct-success {
          text-align: center; padding: 40px 0;
        }
        .ct-success-icon { font-size: 3.5rem; margin-bottom: 12px; }
        .ct-success h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem; font-weight: 700;
          color: #0a1628; margin-bottom: 6px;
        }
        .ct-success p { font-size: 0.85rem; color: #6b7280; margin-bottom: 16px; }
        .ct-success-back {
          font-size: 0.82rem; color: #c9a84c;
          font-weight: 600; background: none;
          border: none; cursor: pointer;
          text-decoration: underline;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ct-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ct-form-card { max-width: 520px; }
        }
        @media (max-width: 640px) {
          .ct-section { padding: 56px 20px; }
          .ct-form-card { padding: 28px 20px; }
          .ct-heading { font-size: clamp(1.7rem, 6vw, 2.4rem); }
        }
          `
        }}
      />

      <section className="ct-section" id="contact">
        <div className="ct-inner">

          {/* ── LEFT: Info ── */}
          <div>
            <div className="ct-badge">★ Get Started Today</div>

            <h2 className="ct-heading">
              Your Child Has Potential —<br />
              They Need <em>Positioning</em>
            </h2>

            <p className="ct-sub">
              Without the right strategy, even strong students get rejected.
              With the right system, <strong style={{ color: '#ffffff' }}>Top 50 universities become achievable.</strong>
            </p>

            <ul className="ct-checklist">
              {[
                'Free personalised consultation with expert counsellor',
                'Expert faculty with 20+ years of consolidated experience',
                'Proven track record — SAT 1590–1600, ACT 36',
                '$8M+ in scholarships secured for our students',
                'Guidance for 2,000+ universities worldwide',
              ].map((item) => (
                <li key={item}>
                  <span className="ct-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="ct-contacts">
              <a href="tel:+919958041888" className="ct-contact-row">
                <div className="ct-contact-icon">📞</div>
                <span>+91-9958041888</span>
              </a>
              <a href="tel:+919717738553" className="ct-contact-row">
                <div className="ct-contact-icon">📞</div>
                <span>+91-9717738553</span>
              </a>
              <a href="mailto:contact@eduquest.org.in" className="ct-contact-row">
                <div className="ct-contact-icon">✉</div>
                <span>contact@eduquest.org.in</span>
              </a>
              <div className="ct-contact-row">
                <div className="ct-contact-icon">📍</div>
                <span>1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div className="ct-form-card">
            {done ? (
              <div className="ct-success">
                <div className="ct-success-icon">✅</div>
                <h3>Callback Requested!</h3>
                <p>Our team will contact you within 1–2 business days.</p>
                <button className="ct-success-back" onClick={() => setDone(false)}>
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="ct-form-title">Score Faster. Higher. Better.</div>
                <div className="ct-form-sub">Get a free callback from our admissions expert</div>

                <form onSubmit={submit}>
                  <div className="ct-field">
                    <label>I&apos;m Interested In</label>
                    <select
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    >
                      <option value="">Select a program...</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>

                  <div className="ct-field">
                    <label>Full Name</label>
                    <input
                      type="text" required placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="ct-field">
                    <label>Mobile</label>
                    <input
                      type="tel" required placeholder="+91 XXXXX XXXXX"
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    />
                  </div>

                  <div className="ct-field">
                    <label>Email</label>
                    <input
                      type="email" required placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="ct-field">
                    <label>City</label>
                    <input
                      type="text" required placeholder="Your city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="ct-submit">
                    Request A Callback →
                  </button>
                  <p className="ct-privacy">🔒 Your information is 100% secure. No spam ever.</p>
                </form>
              </>
            )}
          </div>

        </div>
      </section>
    </>
  );
}