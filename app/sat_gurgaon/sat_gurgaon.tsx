"use client";

import Hero from "@/components/sat_gurgaon/Hero/Hero";
import Footer from "../../components/sat/Footer";
import "./global.css";
import Navbar from "@/components/eduQuest/Navbar";
import EduQuestDifference from "@/components/sat_gurgaon/EduQuestDifference/EduQuestDifference";
import HowWePrepareYou from "@/components/sat_gurgaon/HowWePrepareYou/HowWePrepareYou";
import WhyEduQuest from "@/components/sat_gurgaon/WhyEduQuest/WhyEduQuest";
import SyllabusCoverage from "@/components/sat_gurgaon/SyllabusCoverage/SyllabusCoverage";
import StudentTestimonials from "@/components/sat_gurgaon/StudentTestimonials/StudentTestimonials";
import ScoreImprovement from "@/components/sat_gurgaon/ScoreImprovement/ScoreImprovement";
import RelatedProgrammes from "@/components/sat_gurgaon/RelatedProgrammes/RelatedProgrammes";
import FrequentlyAskedQuestions from "@/components/sat_gurgaon/FAQ/FAQ";
import SatStructure from "@/components/sat-delhi/SatStructure";
import Pricing from "@/components/sat_gurgaon/Pricing/Pricing";
import FinalCta from "@/components/sat-delhi/FinalCta";
import DiagnosticCta from "@/components/sat-delhi/DiagnosticCta";

export default function SATGurgaon() {
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
          SAT Coaching in Gurgaon
        </div>
      </nav>    
        <main>
        <Hero/>
        <SatStructure />
        <EduQuestDifference/>
        <DiagnosticCta/>
        <HowWePrepareYou/>
        <WhyEduQuest/>
        <SyllabusCoverage/>
        <Pricing/>
        <StudentTestimonials/>
        <ScoreImprovement/>
        <RelatedProgrammes/>
        <FrequentlyAskedQuestions/>
        <FinalCta/>
      </main>
      <Footer />
    </>
  );
}
