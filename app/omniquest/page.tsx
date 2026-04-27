"use client";
import { useEffect }           from "react";

import Navbar                  from "@/components/Navbar";
import Chatbot                 from "@/components/chatbot/Chatbot";
import HeroSection from "@/components/omniquest/HeroSection/HeroSection";

import PsychometricSection     from "@/components/omniquest/PsychometricSection/PsychometricSection";
import CareerAdvisorSection    from "@/components/omniquest/CareerAdvisorSection/CareerAdvisorSection";
import PathwaysSection         from "@/components/omniquest/PathwaysSection/PathwaysSection";
import ResultsSection          from "@/components/omniquest/ResultsSection/ResultsSection";
import What from "@/components/omniquest/WhatSection/WhatSection";
import SystemArchitectureSection from "@/components/omniquest/Systemarchitecturesection/Systemarchitecturesection";
import SystemPhilosophySection from "@/components/omniquest/Systemphilosophysection/Systemphilosophysection";
import FinalCtaSection from "@/components/omniquest/FinalCtaSection/FinalCtaSection";
import DecisionCtaSection from "@/components/omniquest/DecisionCtaSection/DecisionCtaSection";
import FooterSection from "@/components/omniquest/FooterSection/FooterSection";

export default function Home() {
  // ── Intersection Observer: powers the `.reveal` animation on every section ──
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Psychometric gate / form */}
        {/* <PsychometricSection /> */}

        {/* 3. AI Career Advisor CTA */}
        {/* <CareerAdvisorSection /> */}

        {/* 4. Strategy Consulting Model */}
        <What/>
        <SystemArchitectureSection/>

        {/* 5. Three Pathways / Divisions */}
        <PathwaysSection />

        {/* 6. Why Us — numbered grid */}
        <SystemPhilosophySection />

        {/* 7. Results & metrics */}
        <ResultsSection />

        {/* 8. Global Map */}
        <DecisionCtaSection />

        {/* 9. Blog / Strategic Insights */}
        {/* <BlogSection /> */}

        {/* 10. Final CTA */}
        <FinalCtaSection />

        {/* 11. Footer */}
        <FooterSection />
      </main>

      <Chatbot />
    </>
  );
}