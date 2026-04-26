"use client";
import { useEffect }           from "react";

import Navbar                  from "@/components/Navbar";
import Chatbot                 from "@/components/chatbot/Chatbot";
import HeroSection from "@/components/omniquest/HeroSection/HeroSection";

import PsychometricSection     from "@/components/omniquest/PsychometricSection/PsychometricSection";
import CareerAdvisorSection    from "@/components/omniquest/CareerAdvisorSection/CareerAdvisorSection";
import ConsultingModelSection  from "@/components/omniquest/ConsultingModelSection/ConsultingModelSection";
import PathwaysSection         from "@/components/omniquest/PathwaysSection/PathwaysSection";
import WhyUsSection            from "@/components/omniquest/WhyUsSection/WhyUsSection";
import ResultsSection          from "@/components/omniquest/ResultsSection/ResultsSection";
import GlobalMapSection        from "@/components/omniquest/GlobalMapSection/GlobalMapSection";
import BlogSection             from "@/components/omniquest/BlogSection/BlogSection";
import CtaSection              from "@/components/omniquest/CtaSection/CtaSection";
import Footer                  from "@/components/omniquest/Footer/Footer";

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
        <PsychometricSection />

        {/* 3. AI Career Advisor CTA */}
        <CareerAdvisorSection />

        {/* 4. Strategy Consulting Model */}
        <ConsultingModelSection />

        {/* 5. Three Pathways / Divisions */}
        <PathwaysSection />

        {/* 6. Why Us — numbered grid */}
        <WhyUsSection />

        {/* 7. Results & metrics */}
        <ResultsSection />

        {/* 8. Global Map */}
        <GlobalMapSection />

        {/* 9. Blog / Strategic Insights */}
        <BlogSection />

        {/* 10. Final CTA */}
        <CtaSection />

        {/* 11. Footer */}
        <Footer />
      </main>

      <Chatbot />
    </>
  );
}