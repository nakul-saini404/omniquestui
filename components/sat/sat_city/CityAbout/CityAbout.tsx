"use client";
// components/sat_city/CityAbout/CityAbout.tsx

import styles from "./CityAbout.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

const TRUST_PILLS = [
  {
    icon: "🎯",
    title: "Academic Positioning",
    desc: "We integrate SAT performance into a broader strategy that strengthens your academic narrative for top university applications.",
  },
  {
    icon: "📊",
    title: "Profile Strength",
    desc: "Your SAT score becomes a component of a comprehensive profile designed to stand out in competitive admissions environments.",
  },
  {
    icon: "🗺️",
    title: "University Targeting Strategy",
    desc: "We align your score goals with your specific target universities to ensure your SAT preparation in Delhi is purposeful and directed.",
  },
  // {
  //   icon: "🗺️",
  //   title: "US Admissions Strategy Alignment",
  //   desc: "Your SAT score is positioned as part of a broader profile strategy — not prepared for in isolation.",
  // },
];

export default function CityAbout({ data }: Props) {
  return (
    <section className={styles.about}>
      <div className={styles.grid}>
        <div>
          <div className={styles.label}>About EduQuest in {data.city}</div>
          <h2 className={styles.h2}>
            Why {data.city} Students
            <br />
            Choose <em>EduQuest</em>
          </h2>
          <blockquote className={styles.quote}>
            {data.localContext}
          </blockquote>
          <div className={styles.paras}>
            {data.about.paragraphs.map((para, i) => (
              <p key={i} className={styles.para}>{para}</p>
            ))}
          </div>
        </div>

        <div className={styles.pills}>
          {TRUST_PILLS.map((p) => (
            <div key={p.title} className={styles.pill}>
              <div className={styles.pillIcon}>{p.icon}</div>
              <div>
                <div className={styles.pillTitle}>{p.title}</div>
                <div className={styles.pillDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}