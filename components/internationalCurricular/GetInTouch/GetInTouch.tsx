'use client';

import { useState } from 'react';
import styles from './GetInTouch.module.css';
import { validateContactForm } from '@/lib/formValidation';

const interests = [
    'IGCSE Biology',
    'IGCSE Chemistry',
    'IGCSE Physics',
    'IGCSE English',
    'IGCSE Mathematics',
    'GCSE English',
    'GCSE Chemistry',
    'GCSE Physics',
    'GCSE Mathematics',
    'Multiple Subjects',
    'General Consultation',
    'Others',
];

const bullets = [
    { icon: '📞', content: <><strong>+91‑9958041888</strong> &nbsp;|&nbsp; +91‑9717738553</> },
    { icon: '✉️', content: <>contact@eduquest.org.in</> },
    { icon: '📍', content: <>1210, Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</> },
    { icon: '🌐', content: <>Online sessions worldwide — any time zone</> },
    { icon: '✅', content: <>Free personalised consultation with expert counsellor</> },
    { icon: '🎓', content: <>20+ years consolidated faculty experience</> },
    { icon: '💰', content: <>$8M+ in scholarships secured for students</> },
];

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    city: string;
    interest: string;
    otherInterest: string;
    message: string;
}

const EMPTY: FormState = {
    firstName: '', lastName: '', email: '',
    mobile: '', city: '', interest: '',
    otherInterest: '', message: '',
};

export default function GetInTouch() {
    const [form, setForm] = useState<FormState>(EMPTY);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const set = (key: keyof FormState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [key]: e.target.value }));
        setFieldErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Re-use shared validation (expects { name, mobile, email, city, interest })
        const base = validateContactForm({
            name: `${form.firstName} ${form.lastName}`.trim(),
            mobile: form.mobile,
            email: form.email,
            city: form.city,
            interest: form.interest,
        });

        // Split name back into first / last errors
        const errors: Record<string, string> = {};
        if (base.name) {
            if (!form.firstName.trim()) errors.firstName = 'First name is required';
            if (!form.lastName.trim()) errors.lastName = 'Last name is required';
        }
        if (base.mobile) errors.mobile = base.mobile;
        if (base.email) errors.email = base.email;
        if (base.city) errors.city = base.city;
        if (base.interest) errors.interest = base.interest;

        if (form.interest === 'Others') {
            if (!form.otherInterest.trim()) errors.otherInterest = 'Please specify your interest';
            else if (form.otherInterest.trim().length < 2) errors.otherInterest = 'Please enter at least 2 characters';
        }

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setFieldErrors({});
        setLoading(true);

        try {
            const res = await fetch('/api/save-contact-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${form.firstName.trim()} ${form.lastName.trim()}`,
                    email: form.email,
                    mobile: form.mobile,
                    city: form.city,
                    interest: form.interest === 'Others'
                        ? `Others: ${form.otherInterest.trim()}`
                        : form.interest,
                    message: form.message.trim() || undefined,
                    pageName: 'International Curricula – Get In Touch',
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Something went wrong');

            setDone(true);
        } catch (err: unknown) {
            console.error('GetInTouch form error:', err);
            setError('Something went wrong. Please try again or call us directly.');
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setDone(false);
        setError('');
        setForm(EMPTY);
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.grid}>

                    {/* ── LEFT: Info ── */}
                    <div className={styles.info}>
                        <span className={styles.sectionLabel}>Get In Touch</span>
                        <h2 className={styles.heading}>
                            Start Your Free Demo Session{' '}
                            <em className={styles.headingAccent}>Today</em>
                        </h2>
                        <p className={styles.sub}>
                            Book a free 30-minute consultation with one of our IGCSE/GCSE subject
                            experts. No commitment — just a personalised session to understand your
                            needs and learning goals.
                        </p>

                        <ul className={styles.bullets}>
                            {bullets.map((b, i) => (
                                <li key={i} className={styles.bullet}>
                                    <span className={styles.bulletIcon} aria-hidden>{b.icon}</span>
                                    <span className={styles.bulletText}>{b.content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── RIGHT: Form Card ── */}
                    <div className={styles.formCard}>
                        <div className={styles.cardAccentBar} aria-hidden />

                        {done ? (
                            <div className={styles.success}>
                                <div className={styles.successMark}>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className={styles.successTitle}>Callback Requested!</h3>
                                <p className={styles.successText}>
                                    Our team will contact you within 1–2 business days.<br />
                                    A confirmation has been sent to <strong>{form.email}</strong>.
                                </p>
                                <button className={styles.successBack} onClick={reset}>
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formHeader}>
                                    <h3 className={styles.formTitle}>Request A Free Callback</h3>
                                    <p className={styles.formSub}>Fill in your details and we'll reach out shortly</p>
                                </div>

                                {error && (
                                    <div className={styles.errorBox} role="alert">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={submit} className={styles.form} noValidate>

                                    {/* First Name / Last Name */}
                                    <div className={styles.fieldRow}>
                                        <div className={styles.field}>
                                            <label className={styles.label} htmlFor="git-firstName">First Name</label>
                                            <input
                                                id="git-firstName"
                                                className={`${styles.input} ${fieldErrors.firstName ? styles.inputError : ''}`}
                                                type="text" required placeholder="Your first name"
                                                value={form.firstName} onChange={set('firstName')}
                                            />
                                            {fieldErrors.firstName && <p className={styles.fieldError}>{fieldErrors.firstName}</p>}
                                        </div>
                                        <div className={styles.field}>
                                            <label className={styles.label} htmlFor="git-lastName">Last Name</label>
                                            <input
                                                id="git-lastName"
                                                className={`${styles.input} ${fieldErrors.lastName ? styles.inputError : ''}`}
                                                type="text" required placeholder="Your last name"
                                                value={form.lastName} onChange={set('lastName')}
                                            />
                                            {fieldErrors.lastName && <p className={styles.fieldError}>{fieldErrors.lastName}</p>}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor="git-email">Email</label>
                                        <input
                                            id="git-email"
                                            className={`${styles.input} ${fieldErrors.email ? styles.inputError : ''}`}
                                            type="email" required placeholder="your@email.com"
                                            value={form.email} onChange={set('email')}
                                        />
                                        {fieldErrors.email && <p className={styles.fieldError}>{fieldErrors.email}</p>}
                                    </div>

                                    {/* Mobile / City */}
                                    <div className={styles.fieldRow}>
                                        <div className={styles.field}>
                                            <label className={styles.label} htmlFor="git-mobile">Mobile</label>
                                            <input
                                                id="git-mobile"
                                                className={`${styles.input} ${fieldErrors.mobile ? styles.inputError : ''}`}
                                                type="tel" required placeholder="+91‑XXXXXXXXXX"
                                                value={form.mobile} onChange={set('mobile')}
                                            />
                                            {fieldErrors.mobile && <p className={styles.fieldError}>{fieldErrors.mobile}</p>}
                                        </div>
                                        <div className={styles.field}>
                                            <label className={styles.label} htmlFor="git-city">City</label>
                                            <input
                                                id="git-city"
                                                className={`${styles.input} ${fieldErrors.city ? styles.inputError : ''}`}
                                                type="text" required placeholder="Your city"
                                                value={form.city} onChange={set('city')}
                                            />
                                            {fieldErrors.city && <p className={styles.fieldError}>{fieldErrors.city}</p>}
                                        </div>
                                    </div>

                                    {/* Interest Select */}
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor="git-interest">I'm Interested In</label>
                                        <div className={styles.selectWrap}>
                                            <select
                                                id="git-interest"
                                                className={`${styles.select} ${fieldErrors.interest ? styles.inputError : ''}`}
                                                required value={form.interest}
                                                onChange={e => {
                                                    setForm(prev => ({ ...prev, interest: e.target.value, otherInterest: '' }));
                                                    setFieldErrors(prev => { const n = { ...prev }; delete n.interest; delete n.otherInterest; return n; });
                                                }}
                                            >
                                                <option value="">Select a subject / program…</option>
                                                {interests.map(i => <option key={i} value={i}>{i}</option>)}
                                            </select>
                                            <span className={styles.selectArrow} aria-hidden>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </div>
                                        {fieldErrors.interest && <p className={styles.fieldError}>{fieldErrors.interest}</p>}

                                        {/* Others free-text */}
                                        {form.interest === 'Others' && (
                                            <div className={styles.field} style={{ marginTop: 10 }}>
                                                <label className={styles.label} htmlFor="git-otherInterest">Please Specify</label>
                                                <input
                                                    id="git-otherInterest"
                                                    className={`${styles.input} ${fieldErrors.otherInterest ? styles.inputError : ''}`}
                                                    type="text" required placeholder="E.g. IB, A-Level, CBSE coaching…"
                                                    value={form.otherInterest}
                                                    onChange={e => {
                                                        setForm(prev => ({ ...prev, otherInterest: e.target.value }));
                                                        setFieldErrors(prev => { const n = { ...prev }; delete n.otherInterest; return n; });
                                                    }}
                                                />
                                                {fieldErrors.otherInterest && <p className={styles.fieldError}>{fieldErrors.otherInterest}</p>}
                                            </div>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor="git-message">
                                            Message <span className={styles.optional}>(optional)</span>
                                        </label>
                                        <textarea
                                            id="git-message"
                                            className={styles.textarea}
                                            placeholder="Tell us about your goals, current level, or any questions…"
                                            value={form.message} onChange={set('message')}
                                        />
                                    </div>

                                    <button type="submit" className={styles.submit} disabled={loading}>
                                        {loading
                                            ? <><span className={styles.spinner} aria-hidden />Submitting…</>
                                            : <>🚀 Request A Callback</>}
                                    </button>

                                    <p className={styles.privacy}>
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }}>
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                                        </svg>
                                        Your information is 100% secure. No spam, ever.
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