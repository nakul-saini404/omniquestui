// components/sat_city/extras/LocalSchoolsSection.tsx
"use client";
import type { SATCityData } from "@/constants/satCities";
import styles from "./extras.module.css";

export default function LocalSchoolsSection({ data }: { data: SATCityData }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-head reveal">
          <p className="label">School Network</p>
          <h2>EduQuest &amp; <em>{data.city}</em> Schools</h2>
          <p>{data.localContext}</p>
        </div>
        <div className={styles.infoBox}>
          <p className={styles.infoText}>
            EduQuest's diagnostic framework is specifically calibrated for CBSE and IB school
            curricula common in {data.city}, ensuring seamless integration with students'
            existing academic workload.
          </p>
          <a href="#contact" className="btn-primary">Talk to a Counsellor</a>
        </div>
      </div>
    </section>
  );
}