'use client';
import { useState } from 'react';
import styles from './ContactHero.module.css';
import { validateContactForm } from '@/lib/formValidation';

const interests = [
  'Profile Building',
  'UG Admission Counselling',
  'SAT / New Digital SAT',
  'AP', 'Pre-AP', 'ACT Online', 'ACT Classroom',
  'TMUA', 'UCAT', 'LSAT', 'PSAT', 'Others',
];

interface FormState {
  interest: string;
  otherInterest: string;
  name:     string;
  mobile:   string;
  email:    string;
  city:     string;
}

const checks = [
  'Free personalised consultation with expert counsellor',
  'Expert faculty with 20+ years of consolidated experience',
  'Proven track record — SAT 1590–1600, ACT 36',
  '$8M+ in scholarships secured for our students',
  'Guidance for 2,000+ universities worldwide',
];

export default function ContactHero() {
  const [form, setForm]       = useState<FormState>({ interest: '', otherInterest: '', name: '', mobile: '', email: '', city: '' });
  const [done, setDone]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const clearFieldError = (field: string) => {
    setFieldErrors(prev => { const next = { ...prev }; delete next[field]; return next; });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const errors = validateContactForm(form);
    // Validate otherInterest when "Others" is selected
    if (form.interest === 'Others') {
      if (!form.otherInterest.trim()) {
        errors.otherInterest = 'Please specify your interest';
      } else if (form.otherInterest.trim().length < 2) {
        errors.otherInterest = 'Please enter at least 2 characters';
      }
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setLoading(true);

    try {
      const res = await fetch('/api/save-contact-lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          mobile:   form.mobile,
          city:     form.city,
          interest: form.interest === 'Others'
            ? `Others: ${form.otherInterest.trim()}`
            : form.interest,
          pageName: 'Contact Us',
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong');
      }

      setDone(true);
    } catch (err: any) {
      console.error('Contact form error:', err);
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setDone(false);
    setError('');
    setForm({ interest: '', otherInterest: '', name: '', mobile: '', email: '', city: '' });
  };

  return (
    <section className={styles.hero} id="contact">

      {/* Decorative background elements */}
      <div className={styles.bgOrb1} aria-hidden />
      <div className={styles.bgOrb2} aria-hidden />
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgRule}  aria-hidden />

      <div className={styles.inner}>

        {/* ── LEFT COLUMN ── */}
        <div className={styles.left}>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Get Started Today
          </div>

          <h1 className={styles.heading}>
            Your Child Has Potential&nbsp;—<br />
            They Need{' '}
            <span className={styles.headingAccent}>Positioning</span>
          </h1>

          <p className={styles.sub}>
            Without the right strategy, even strong students get rejected.
            With the right system,{' '}
            <strong className={styles.subStrong}>
              Top 50 universities become achievable.
            </strong>
          </p>

          <ul className={styles.checklist}>
            {checks.map(item => (
              <li key={item} className={styles.checkItem}>
                <span className={styles.checkIcon} aria-hidden>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.divider} aria-hidden />

          <div className={styles.contacts}>
            <a href="tel:+919958041888" className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <span>+91‑9958041888</span>
            </a>
            <a href="tel:+919717738553" className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <span>+91‑9717738553</span>
            </a>
            <a href="mailto:contact@eduquest.org.in" className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span>contact@eduquest.org.in</span>
            </a>
            <div className={styles.contactRow}>
              <div className={styles.contactIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</span>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: Form Card ── */}
        <div className={styles.right}>
          <div className={styles.formCard}>

            {/* Card top accent bar */}
            <div className={styles.cardAccentBar} aria-hidden />

            {done ? (
              <div className={styles.success}>
                <div className={styles.successMark}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className={styles.successTitle}>Callback Requested!</h3>
                <p className={styles.successText}>
                  Our team will contact you within 1–2 business days.<br />
                  A confirmation has been sent to{' '}
                  <strong>{form.email}</strong>.
                </p>
                <button className={styles.successBack} onClick={reset}>
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className={styles.formHeader}>
                  <p className={styles.formTitle}>Score Faster. Higher. Better.</p>
                  <p className={styles.formSub}>Get a free callback from our admissions expert</p>
                </div>

                {error && (
                  <div className={styles.errorBox} role="alert">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    {error}
                  </div>
                )}

                <form onSubmit={submit} className={styles.form} noValidate>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="interest">
                      I&apos;m Interested In
                    </label>
                    <div className={styles.selectWrap}>
                      <select
                        id="interest"
                        className={`${styles.select} ${fieldErrors.interest ? styles.inputError : ''}`}
                        required
                        value={form.interest}
                        onChange={e => { setForm({ ...form, interest: e.target.value, otherInterest: '' }); clearFieldError('interest'); clearFieldError('otherInterest'); }}
                      >
                        <option value="">Select a program…</option>
                        {interests.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                      <span className={styles.selectArrow} aria-hidden>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </div>
                    {fieldErrors.interest && <p className={styles.fieldError}>{fieldErrors.interest}</p>}

                    {/* Show text input when "Others" is selected */}
                    {form.interest === 'Others' && (
                      <div className={styles.field} style={{ marginTop: 10 }}>
                        <label className={styles.label} htmlFor="otherInterest">
                          Please Specify
                        </label>
                        <input
                          id="otherInterest"
                          className={`${styles.input} ${fieldErrors.otherInterest ? styles.inputError : ''}`}
                          type="text"
                          required
                          placeholder="E.g. GRE, GMAT, Study in Canada…"
                          value={form.otherInterest}
                          onChange={e => { setForm({ ...form, otherInterest: e.target.value }); clearFieldError('otherInterest'); }}
                        />
                        {fieldErrors.otherInterest && <p className={styles.fieldError}>{fieldErrors.otherInterest}</p>}
                      </div>
                    )}
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        className={`${styles.input} ${fieldErrors.name ? styles.inputError : ''}`}
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => { setForm({ ...form, name: e.target.value }); clearFieldError('name'); }}
                      />
                      {fieldErrors.name && <p className={styles.fieldError}>{fieldErrors.name}</p>}
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="mobile">Mobile</label>
                      <input
                        id="mobile"
                        className={`${styles.input} ${fieldErrors.mobile ? styles.inputError : ''}`}
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={e => { setForm({ ...form, mobile: e.target.value }); clearFieldError('mobile'); }}
                      />
                      {fieldErrors.mobile && <p className={styles.fieldError}>{fieldErrors.mobile}</p>}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      className={`${styles.input} ${fieldErrors.email ? styles.inputError : ''}`}
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => { setForm({ ...form, email: e.target.value }); clearFieldError('email'); }}
                    />
                    {fieldErrors.email && <p className={styles.fieldError}>{fieldErrors.email}</p>}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="city">City</label>
                    <input
                      id="city"
                      className={`${styles.input} ${fieldErrors.city ? styles.inputError : ''}`}
                      type="text"
                      required
                      placeholder="Your city"
                      value={form.city}
                      onChange={e => { setForm({ ...form, city: e.target.value }); clearFieldError('city'); }}
                    />
                    {fieldErrors.city && <p className={styles.fieldError}>{fieldErrors.city}</p>}
                  </div>

                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={loading}
                  >
                    {loading
                      ? <><span className={styles.spinner} aria-hidden />Submitting…</>
                      : <>Request a Callback <span aria-hidden>→</span></>}
                  </button>

                  <p className={styles.privacy}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display:'inline', verticalAlign:'middle', marginRight:4 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    Your information is 100% secure. No spam ever.
                  </p>

                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}