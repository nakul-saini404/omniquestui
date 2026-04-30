"use client";
import Hero from "@/components/sat_jaipur/Hero/Hero";
import Footer from "../../components/sat/Footer";
import "./global.css";
import Navbar from "@/components/eduQuest/Navbar";
import AboutEduQuest from "@/components/sat_jaipur/AboutEduQuest/AboutEduQuest";
import SyllabusCoverage from "@/components/sat_jaipur/SyllabusCoverage/SyllabusCoverage";
import CoachingProgrammes from "@/components/sat_jaipur/CoachingProgrammes/CoachingProgrammes";
import FeeStructure from "@/components/sat_jaipur/FeeStructure/FeeStructure";
import StudentTestimonials from "@/components/sat_jaipur/StudentTestimonials/StudentTestimonials";
import ScoreImprovement from "@/components/sat_jaipur/ScoreImprovement/ScoreImprovement";
import RelatedProgrammes from "@/components/sat_gurgaon/RelatedProgrammes/RelatedProgrammes";
import FrequentlyAskedQuestions from "@/components/sat_jaipur/FAQ/FAQ";
import CTAStrip from "@/components/sat_jaipur/CTAStrip/CTAStrip";
import LongTermProgrammes from "@/components/sat_jaipur/LongTermProgrammes/LongTermProgrammes";


export default function SATJaipur() {
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
          SAT Coaching in Jaipur
        </div>
      </nav>    
        <main>
        <Hero />
        <AboutEduQuest />
        <SyllabusCoverage />
        <CoachingProgrammes />
        <FeeStructure />
        <LongTermProgrammes />
        <StudentTestimonials />
        <ScoreImprovement />
        <RelatedProgrammes />
        <FrequentlyAskedQuestions />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
