'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './GetInTouch.module.css';

const interests = [
  'DASA/CIWG — IIIT Hyderabad Admission',
  'ISA — BITS Pilani Admission',
  'SAT Coaching for DASA/ISA',
  'SAT Coaching (General)',
  'AP Coaching',
  'Profile Building',
  'Others',
];

interface FormState {
  interest: string;
  name:     string;
  mobile:   string;
  email:    string;
  city:     string;
  message:  string;
}

const contactDetails = [
  {
    icon: '📍',
    label: 'Main Office',
    value: '1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009',
    href: undefined,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91-9958041888  |  +91-9717738553',
    href: 'tel:+919958041888',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'contact@eduquest.org.in',
    href: 'mailto:contact@eduquest.org.in',
  },
];

export default function GetInTouch() {
  const [form, setForm]       = useState<FormState>({ interest: '', name: '', mobile: '', email: '', city: '', message: '' });
  const [done, setDone]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const infoRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  /* ── Scroll-in observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

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
      setError(msg + '. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setDone(false);
    setError('');
    setForm({ interest: '', name: '', mobile: '', email: '', city: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.contactGrid}>

          {/* ── LEFT: Info ── */}
          <div
            className={`${styles.contactInfo} ${styles.fadeUp}`}
            ref={infoRef}
          >
            <div className={styles.sectionLabel}>Get In Touch</div>
            <h2 id="contact-heading">
              Book Your Free DASA / CIWG Consultation
            </h2>
            <p>
              Our counsellors will confirm your eligibility, assess your current
              SAT level, and map out the fastest path to IIIT Hyderabad or BITS
              Pilani — at no cost.
            </p>

            <div className={styles.contactDetails}>
              {contactDetails.map((d) => (
                <div className={styles.contactDetail} key={d.label}>
                  <div className={styles.contactDetailIcon}>{d.icon}</div>
                  <div className={styles.contactDetailText}>
                    <strong>{d.label}</strong>
                    {d.href ? (
                      <a href={d.href}><span>{d.value}</span></a>
                    ) : (
                      <span>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.contactAlso}>
              <strong>Also Available:</strong> SAT Coaching &nbsp;|&nbsp; AP
              Coaching &nbsp;|&nbsp; ACT &nbsp;|&nbsp; Profile Building
              &nbsp;|&nbsp; Study Abroad Counselling
            </div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div
            className={`${styles.formCard} ${styles.fadeUp}`}
            style={{ transitionDelay: '0.15s' }}
            ref={cardRef}
          >
            {done ? (
              /* ── Success state ── */
              <div className={styles.success}>
                <div className={styles.successMark}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Request Submitted!</h3>
                <p className={styles.successText}>
                  We&apos;ll call you within 24 hours.
                  {form.email && (
                    <> A confirmation has been sent to{' '}
                      <strong>{form.email}</strong>.
                    </>
                  )}
                </p>
                <button className={styles.successBack} onClick={reset}>
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3>Request a Free Callback</h3>

                {error && (
                  <div className={styles.errorBox} role="alert">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                <form onSubmit={submit} noValidate>

                  <div className={styles.formGroup}>
                    <label htmlFor="f-interest">I&apos;m Interested In</label>
                    <select
                      id="f-interest"
                      required
                      value={form.interest}
                      onChange={set('interest')}
                    >
                      <option value="">Select a service…</option>
                      {interests.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="f-name">Full Name</label>
                      <input
                        id="f-name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={set('name')}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="f-mobile">Mobile Number</label>
                      <input
                        id="f-mobile"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={form.mobile}
                        onChange={set('mobile')}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="f-email">Email Address</label>
                      <input
                        id="f-email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={set('email')}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="f-city">City</label>
                      <input
                        id="f-city"
                        type="text"
                        placeholder="Your city"
                        required
                        value={form.city}
                        onChange={set('city')}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="f-msg">Message (Optional)</label>
                    <textarea
                      id="f-msg"
                      placeholder="Tell us your eligibility category (NRI/OCI/CIWG), target institute, and current SAT score if any…"
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.formSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <><span className={styles.spinner} aria-hidden />Submitting…</>
                    ) : (
                      <>Request a Callback →</>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    🔒 Your information is 100% secure. We respond within 24 hours.
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