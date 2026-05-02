"use client";
// components/sat_city/CitySeoBlocks/CitySeoBlocks.tsx

import styles from "./CitySeoBlocks.module.css";
import type { SATCityData } from "@/constants/satCities";

interface Props {
  data: SATCityData;
}

function getBlocks(data: SATCityData) {
  const { city, hero, about } = data;

  const hasOffline =
    city === "Gurgaon" ||
    city === "Delhi / NCR" ||
    city === "Noida" ||
    city === "Bangalore";

  const modeLabel = hasOffline
    ? "Online & Offline"
    : "Online Live & 1-on-1";

  return [
    {
      icon: "🖥️",
      title: `Digital SAT Coaching in ${city}: ${modeLabel}`,
      body: about.paragraphs[0],
    },
    {
      icon: "🎯",
      title: "Our Strategic SAT Preparation Approach",
      body: `We combine diagnostics, personalised strategy, and performance tracking to ensure that preparation is efficient, focused, and outcome-driven. Every element of our SAT classes for ${city} students is connected to your admissions goals — from baseline to target score.`,
    },
    {
      icon: "📈",
      title: "SAT Score vs Admissions Outcome",
      body: `A high SAT score alone does not guarantee admission to top universities. It must align with your overall profile, narrative, and university strategy. EduQuest bridges this gap by treating your SAT as part of a larger positioning plan — helping ${city} students compete globally.`,
    },
    {
      icon: "🏫",
      title: `Who Should Start SAT Prep in ${city}`,
      body: `Students from Grades 8–12 in ${city} aiming for top US, UK, and global universities should begin SAT prep early. EduQuest offers 1-year, 2-year, and multi-year integrated programmes combining SAT, PSAT, AP, and university admissions counselling. ${data.localContext}`,
    },
  ];
}

export default function CitySeoBlocks({ data }: Props) {
  const { city } = data;
  const blocks = getBlocks(data);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div className="label">Why EduQuest</div>
          <h2 className={styles.heading}>
            SAT Coaching in {city} —<br />
            What Makes EduQuest Different
          </h2>
          <p className={styles.intro}>
            EduQuest is not a traditional SAT coaching institute. We focus on
            building academic positioning aligned with top university
            expectations — not just score improvement.
          </p>
        </div>

        <div className={styles.grid}>
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={styles.card}
              data-num={String(i + 1).padStart(2, "0")}
            >
              <div className={styles.icon}>{b.icon}</div>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.desc}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}