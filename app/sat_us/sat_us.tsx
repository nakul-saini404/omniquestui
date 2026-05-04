"use client";
import SatHero from "@/components/sat-us/SatHero/SatHero";
import Footer from "../../components/sat/Footer";

import "../sat/global.css";
import Navbar from "@/components/eduQuest/Navbar";
import CTAStrip from "@/components/sat_mumbai/CTAStrip/CTAStrip";
import SatBasics from "@/components/sat-us/SatBasics/SatBasics";
import USFamiliesSection from "@/components/sat-us/USFamiliesSection/USFamiliesSection";
import UniversityTargeting from "@/components/sat-us/UniversityTargeting/UniversityTargeting";
import SATTestDates from "@/components/sat-us/SATTestDates/SATTestDates";
import USExclusivePathway from "@/components/sat-us/USExclusivePathway/USExclusivePathway";
import OurProcess from "@/components/sat-us/OurProcess/OurProcess";
import Programmes from "@/components/sat-us/Programmes/Programmes";
import ClearingConfusion from "@/components/sat-us/ClearingConfusion/ClearingConfusion";
import StudentStories from "@/components/sat-us/StudentStories/StudentStories";
import FrequentlyAsked from "@/components/sat-us/FrequentlyAsked/FrequentlyAsked";
import SATMultipurpose from "@/components/sat/sat_city/SATMultipurpose/SATMultipurpose";

export default function SATUs() {
  return (
    <>
     
      <Navbar />
  <nav aria-label="Breadcrumb" style={{
        background: "var(--cream2)",
        borderBottom: "1px solid var(--line)",
        padding: "10px 0",
        fontSize: "12px",
        color: "var(--text3)",
      }}>
        <div className="container">
          <a href="/eduQuest" style={{ color: "var(--text3)" }}>Home</a>
          <span style={{ margin: "0 6px" }}>›</span>
          <a href="/sat" style={{ color: "var(--text3)" }}>SAT Coaching</a>
          <span style={{ margin: "0 6px" }}>›</span>
          SAT Coaching in USA
        </div>
      </nav>    
        <main>
        <SatHero/>
        <SatBasics />
        <USFamiliesSection />
        <UniversityTargeting />
        <SATMultipurpose />
        <SATTestDates />
        <USExclusivePathway />
        <OurProcess />
        <Programmes />
        <ClearingConfusion />
        <StudentStories />
        <FrequentlyAsked />
        
         <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
