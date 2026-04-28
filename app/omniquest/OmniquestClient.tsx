"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/chatbot/Chatbot";
import HeroSection from "@/components/omniquest/HeroSection/HeroSection";
import PathwaysSection from "@/components/omniquest/PathwaysSection/PathwaysSection";
import ResultsSection from "@/components/omniquest/ResultsSection/ResultsSection";
import What from "@/components/omniquest/WhatSection/WhatSection";
import SystemArchitectureSection from "@/components/omniquest/Systemarchitecturesection/Systemarchitecturesection";
import SystemPhilosophySection from "@/components/omniquest/Systemphilosophysection/Systemphilosophysection";
import FinalCtaSection from "@/components/omniquest/FinalCtaSection/FinalCtaSection";
import DecisionCtaSection from "@/components/omniquest/DecisionCtaSection/DecisionCtaSection";
import FooterSection from "@/components/omniquest/FooterSection/FooterSection";

export default function OmniquestClient() {
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
        <HeroSection />
        <What />
        {/* <SystemArchitectureSection /> */}
        <PathwaysSection />
        <SystemPhilosophySection />
        <ResultsSection />
        <DecisionCtaSection />
        <FinalCtaSection />
        <FooterSection />
      </main>
      <Chatbot />
    </>
  );
}