"use client";
// components/sat_city/SATCityPage.tsx
// Shared shell rendered for every /sat/[city] page.
// Swap city-specific sections via data prop; add/remove optional sections via data.extraSections.

import { useEffect } from "react";
import type { SATCityData } from "@/constants/satCities";

import Navbar from "@/components/eduQuest/Navbar";
import Footer from "@/components/sat/Footer";

// ── Shared components (same across all city pages) ────────────────────────────
import CitySyllabusCoverage from "./CitySyllabusCoverage/CitySyllabusCoverage"; // ← replaces SyllabusCoverage
import ScoreImprovement from "@/components/sat_jaipur/ScoreImprovement/ScoreImprovement";
import RelatedProgrammes from "@/components/sat_gurgaon/RelatedProgrammes/RelatedProgrammes";
import CTAStrip from "@/components/sat_jaipur/CTAStrip/CTAStrip";

// ── City-dynamic components ───────────────────────────────────────────────────
import CityHero from "./CityHero/CityHero";
import CityAbout from "./CityAbout/CityAbout";
import CityTestimonials from "./CityTestimonials/CityTestimonials";
import CityFAQ from "./CityFAQ/CityFAQ";

// ── Optional extra section components ────────────────────────────────────────
import LocalSchoolsSection from "./extras/LocalSchoolsSection";
import CollegeBoardSection from "./extras/CollegeBoardSection";
import VisaInfoSection from "./extras/VisaInfoSection";
import OnlineAdvantageSection from "./extras/OnlineAdvantageSection";
import CityRankSection from "./extras/CityRankSection";
import CityCoachingProgrammes from "./CityCoachingProgrammes/CityCoachingProgrammes";
import CityLongTermProgrammes from "./CityLongTermProgrammes/CityLongTermProgrammes";
import CityFeeStructure from "./CityFeeStructure/CityFeeStructure";

// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  data: SATCityData;
}

export default function SATCityPage({ data }: Props) {
  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          background: "var(--cream2)",
          borderBottom: "1px solid var(--line)",
          padding: "10px 0",
          fontSize: "12px",
          color: "var(--text3)",
        }}
      >
        <div className="container">
          <a href="/" style={{ color: "var(--text3)" }}>Home</a>
          <span style={{ margin: "0 6px" }}>›</span>
          <a href="/sat" style={{ color: "var(--text3)" }}>SAT Coaching</a>
          <span style={{ margin: "0 6px" }}>›</span>
          SAT Coaching in {data.city}
        </div>
      </nav>

      <main>
        {/* ── City-specific sections ── */}
        <CityHero data={data} />
        <CityAbout data={data} />

        {/* ── Shared sections — city-aware ── */}
        <CitySyllabusCoverage data={data} />  {/* ← was <SyllabusCoverage /> */}

        <CityCoachingProgrammes data={data}/>
        <CityLongTermProgrammes data={data} />
<CityFeeStructure data={data} />
        <CityTestimonials data={data} />

        <ScoreImprovement />

        {/* ── Optional extra sections ── */}
        {data.extraSections?.map((section) => {
          switch (section.id) {
            case "LocalSchools":
              return <LocalSchoolsSection key="LocalSchools" data={data} />;
            case "CollegeBoard":
              return <CollegeBoardSection key="CollegeBoard" />;
            case "VisaInfo":
              return <VisaInfoSection key="VisaInfo" data={data} />;
            case "OnlineAdvantage":
              return <OnlineAdvantageSection key="OnlineAdvantage" />;
            case "CityRank":
              return <CityRankSection key="CityRank" data={data} />;
            default:
              return null;
          }
        })}

        <RelatedProgrammes />

        {/* ── City-specific FAQs ── */}
        <CityFAQ data={data} />

        <CTAStrip />
      </main>

      <Footer />
    </>
  );
}