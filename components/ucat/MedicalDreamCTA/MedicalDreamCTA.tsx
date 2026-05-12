"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./MedicalDreamCTA.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
interface FormState {
  name: string;
  mobile: string;
  email: string;
  city: string;
  interest: string;
}

/* ── Static data ────────────────────────────────────────────────── */
const cities = [
  "Delhi / NCR",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Other",
];

const interests = [
  "UCAT Coaching Only",
  "UCAT + University Application",
  "UCAT + MMI Interview Prep",
  "Full Medical Abroad Package",
  "Free Counselling Session",
];

const trustItems = [
  { icon: "🔒", label: "100% Secure" },
  { icon: "📵", label: "No Spam" },
  { icon: "⚡", label: "Reply within 24 hrs" },
  { icon: "📖", label: "Free Guide on Confirmation" },
];

/* ── Scroll-reveal hook ─────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── Main Component ─────────────────────────────────────────────── */
const MedicalDreamCTA: React.FC = () => {
  const { ref: innerRef, inView } = useInView(0.1);

  /* ── Form state — identical shape to provided Contact.tsx ─────── */
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    email: "",
    city: "",
    interest: "",
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ── Submit — same API call as Contact.tsx ────────────────────── */
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/save-contact-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          mobile:   form.mobile,
          city:     form.city,
          interest: form.interest,
          pageName: "UCAT Coaching",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setDone(true);
    } catch (err: unknown) {
      console.error("CTA form error:", err);
      setError(
        "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setDone(false);
    setError("");
    setForm({ name: "", mobile: "", email: "", city: "", interest: "" });
  };

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section className={styles.ctaSection} id="enroll">
      {/* Decorative ghost watermark — CSS ::before handles it */}

      <div
        ref={innerRef}
        className={`${styles.ctaInner} ${inView ? styles.innerVisible : ""}`}
      >
        {/* Tag */}
        <span className={styles.sectionTag}>Limited Seats · 2026 Batch</span>

        {/* Heading */}
        <h2 className={styles.ctaHeading}>Your Medical Dream Starts Here</h2>

        {/* Sub */}
        <p className={styles.ctaSub}>
          Get expert UCAT coaching, full university application support &amp;
          MMI interview training — all under one roof. Join 10,000+ students
          who chose EduQuest.
        </p>

        {/* Form block */}
        <div
          className={`${styles.formBlock} ${inView ? styles.formBlockVisible : ""}`}
        >
          {done ? (
            /* ── Success state ── */
            <div className={styles.successState}>
              <div className={styles.successIcon}>✅</div>
              <h3 className={styles.successHeading}>Callback Requested!</h3>
              <p className={styles.successText}>
                Our team will contact you within 24 hours.
                <br />
                A confirmation has been sent to{" "}
                <strong>{form.email}</strong>.
              </p>
              <button className={styles.successBack} onClick={reset}>
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              {/* Error banner */}
              {error && (
                <div className={styles.errorBanner}>⚠️ {error}</div>
              )}

              {/* 2-col grid: name + mobile, email + city */}
              <div className={styles.formGrid}>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={set("name")}
                />
                <input
                  className={styles.formInput}
                  type="tel"
                  placeholder="Mobile number"
                  required
                  value={form.mobile}
                  onChange={set("mobile")}
                />
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={set("email")}
                />
                <select
                  className={`${styles.formInput} ${styles.formSelect}`}
                  required
                  value={form.city}
                  onChange={set("city")}
                >
                  <option value="" disabled>
                    Your city
                  </option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full-width interest select */}
              <select
                className={`${styles.formInput} ${styles.formSelect} ${styles.fullInput}`}
                required
                value={form.interest}
                onChange={set("interest")}
              >
                <option value="" disabled>
                  I&apos;m interested in…
                </option>
                {interests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              {/* Submit */}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "⏳ Submitting…" : "🚀 Request Callback Now"}
              </button>

              {/* Trust row */}
              <div className={styles.trustRow}>
                {trustItems.map((t) => (
                  <div key={t.label} className={styles.trustItem}>
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default MedicalDreamCTA;