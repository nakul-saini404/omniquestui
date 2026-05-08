'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GetInTouch.module.css';

/* ── Data ── */
const interests = [
  'IELTS Academic — Champion Pack',
  'IELTS Academic — Self Preparation',
  'IELTS Academic — Marathon',
  'IELTS General — Champion Pack',
  'IELTS General — Self Preparation',
  'IELTS General — Marathon',
  'PTE Coaching',
  'TOEFL Coaching',
  'Others',
];

const contactDetails = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Main Office',
    value: 'Office No. 1212 & 1212A, Galleria Boulevard,\nDLF Phase-IV, Gurgaon, Haryana – 122001',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91-9958041888  |  +91-9717738553',
    href: 'tel:+919958041888',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'contact@eduquest.org.in',
    href: 'mailto:contact@eduquest.org.in',
  },
];

/* ── Form State ── */
interface FormState {
  interest: string;
  name:     string;
  mobile:   string;
  email:    string;
  city:     string;
  message:  string;
}

const emptyForm: FormState = {
  interest: '',
  name:     '',
  mobile:   '',
  email:    '',
  city:     '',
  message:  '',
};

/* ── Main Component ── */
export default function GetInTouch() {
  const [form, setForm]       = useState<FormState>(emptyForm);
  const [done, setDone]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  /* scroll-in animation */
  const leftRef  = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && mounted) {
            entry.target.classList.add(styles.fadeVisible);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => {
      mounted = false;
      obs.disconnect();
    };
  }, []);

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
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
          interest: form.interest,
          message:  form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong');

      setDone(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      console.error('Contact form error:', err);
      setError(msg || 'Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setDone(false);
    setError('');
    setForm(emptyForm);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── LEFT: Info ── */}
          <div className={styles.info} ref={leftRef}>
            <div className={styles.sectionLabel}>Get In Touch</div>
            <h2 className={styles.heading}>Start Your IELTS Journey Today</h2>
            <p className={styles.sub}>
              Fill in your details and our team will reach out within 24 hours to
              schedule your free 3-day trial or strategy session.
            </p>

            <div className={styles.details}>
              {contactDetails.map((d, i) => (
                <div key={i} className={styles.detailRow}>
                  <div className={styles.detailIcon}>{d.icon}</div>
                  <div className={styles.detailText}>
                    <strong>{d.label}</strong>
                    {d.href ? (
                      <a href={d.href} className={styles.detailLink}>
                        {d.value}
                      </a>
                    ) : (
                      <span style={{ whiteSpace: 'pre-line' }}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.alsoAvailable}>
              <p>
                <strong>Also Available:</strong>{' '}
                IELTS Academic &nbsp;|&nbsp; IELTS General &nbsp;|&nbsp; PTE &nbsp;|&nbsp; TOEFL &nbsp;|&nbsp; Duolingo
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            className={styles.formCard}
            ref={rightRef}
            style={{ transitionDelay: '0.15s' }}
          >
            {done ? (
              /* ── Success State ── */
              <div className={styles.success}>
                <div className={styles.successMark}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Callback Requested!</h3>
                <p className={styles.successText}>
                  Our team will contact you within 24 hours.<br />
                  A confirmation has been sent to <strong>{form.email}</strong>.
                </p>
                <button className={styles.successBack} onClick={reset}>
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Book a Free Demo Class</h3>

                {error && (
                  <div className={styles.errorBox} role="alert">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                <form onSubmit={submit} className={styles.form} noValidate>

                  {/* Interest */}
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="gi-interest">I&apos;m Interested In</label>
                    <div className={styles.selectWrap}>
                      <select
                        id="gi-interest"
                        className={styles.select}
                        required
                        value={form.interest}
                        onChange={set('interest')}
                      >
                        <option value="">Select a package…</option>
                        {interests.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <span className={styles.selectArrow} aria-hidden>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Name + Mobile */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="gi-name">Full Name</label>
                      <input
                        id="gi-name"
                        className={styles.input}
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={set('name')}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="gi-mobile">Mobile Number</label>
                      <input
                        id="gi-mobile"
                        className={styles.input}
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={set('mobile')}
                      />
                    </div>
                  </div>

                  {/* Email + City */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="gi-email">Email Address</label>
                      <input
                        id="gi-email"
                        className={styles.input}
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={set('email')}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="gi-city">City</label>
                      <input
                        id="gi-city"
                        className={styles.input}
                        type="text"
                        required
                        placeholder="Your city"
                        value={form.city}
                        onChange={set('city')}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="gi-message">Message (Optional)</label>
                    <textarea
                      id="gi-message"
                      className={styles.textarea}
                      placeholder="Tell us your current band score target, preferred batch timing, or any questions..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                    {loading ? (
                      <><span className={styles.spinner} aria-hidden /> Submitting…</>
                    ) : (
                      <>Request a Callback →</>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    🔒 Your information is 100% secure. Response within 24 hours.
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