// components/sat_city/CityCoachingProgrammes/CityCoachingProgrammes.tsx
// City-aware version of CoachingProgrammes.
// Replaces all hardcoded "Jaipur" references with data.city / data.slug.

import type { SATCityData } from "@/constants/satCities";
import styles from "./CityCoachingProgrammes.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Props {
  data: SATCityData;
}

interface Course {
  type: string;
  title: string;
  popular: boolean;
  features: string[];
  btnLabel: string;
  /** href is a function so we can inject the city slug */
  btnHref: (slug: string) => string;
  btnVariant: "primary" | "outline";
}

// ─── Static course definitions ────────────────────────────────────────────────
// btnHref receives the city slug so each city gets its own product URL.

const COURSES: Course[] = [
  {
    type: "Online Live",
    title: "Group Course",
    popular: false,
    features: [
      "Online Live Group Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Study Materials Provided",
      "AI-based Test Generation",
      "Diagnostic Test Framework",
    ],
    btnLabel: "Enquire Now →",
    btnHref: (_slug) =>
      "https://eduquest.org.in/contact-us/",
    btnVariant: "outline",
  },
  {
    type: "Personalized",
    title: "One-on-One",
    popular: true,
    features: [
      "Personal 1:1 Sessions",
      "100+ Hours Guaranteed",
      "Unlimited Retakes",
      "Personalized Roadmap",
      "Section-wise Strategy",
      "Score-till-goal Programme",
    ],
    btnLabel: "Book Free Diagnostic →",
    btnHref: (slug) =>
      `https://test.eduquest.org.in/sat-score-calculator/`,
    btnVariant: "primary",
  },
  {
    type: "Hybrid",
    title: "One-on-One Hybrid",
    popular: false,
    features: [
      "Online + Classroom Sessions",
      "100+ Hours Minimum",
      "Unlimited Doubt Clearing",
      "Profile Building Advice",
      "University Counselling",
      "Application Writing Support",
    ],
    btnLabel: "Enquire Now →",
    btnHref: (slug) =>
      `https://eduquest.org.in/contact-us/`,
    btnVariant: "outline",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function CityCoachingProgrammes({ data }: Props) {


  const { city, slug } = data;

  return (
    <section id="courses" className={styles.section}>
      <div className="container" style={{maxWidth:"1200px"}}>
        {/* ── Label ── */}
        <div className={styles.sectionLabel}>Course</div>

        {/* ── Heading — city-aware ── */}
        <h2 className={styles.heading}>
          SAT Coaching <em>Programmes</em> in {city}
        </h2>

        {/* ── Subtext ── */}
        <p className={styles.sectionSub}>
          Flexible formats for every student — online, offline, and hybrid.
          All courses include unlimited doubt-clearing and study materials.
        </p>

        {/* ── Cards ── */}
        <div className={styles.coursesGrid}>
          {COURSES.map((course) => (
            <div
              key={course.title}
              className={`${styles.courseCard} ${
                course.popular ? styles.popular : ""
              }`}
            >
              {course.popular && (
                <div className={styles.popularBadge}>★ Most Popular</div>
              )}

              <div className={styles.courseType}>{course.type}</div>
              <h3 className={styles.courseTitle}>{course.title}</h3>

              <ul className={styles.courseFeatures}>
                {course.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a
                href={course.btnHref(slug)}
                className={`${styles.btn} ${
                  course.btnVariant === "primary"
                    ? styles.btnPrimary
                    : styles.btnGhostLight
                }`}
              >
                {course.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}