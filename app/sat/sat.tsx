"use client";

import Nav from "../../components/sat/Nav";
import Breadcrumb from "../../components/sat/Breadcrumb";
import Hero from "../../components/sat/Hero";
import WhatIsSAT from "../../components/sat/WhatIsSAT";
import PatternSection from "../../components/sat/PatternSection";
import Scoring from "../../components/sat/Scoring";
import WhyRejected from "../../components/sat/WhyRejected";
import Timeline from "../../components/sat/Timeline";
import Strategy from "../../components/sat/Strategy";
import HowWeBuild from "../../components/sat/HowWeBuild";
import Results from "../../components/sat/Results";
import FAQ from "../../components/sat/FAQ";
import FinalCTA from "../../components/sat/FinalCTA";
import Footer from "../../components/sat/Footer";

import "./global.css";
import Navbar from "@/components/eduQuest/Navbar";

export default function SAT() {
  return (
    <>
     
      <Navbar />
      <Breadcrumb />
      <main>
        <Hero />
        <WhatIsSAT />
        <PatternSection />
        <Scoring />
        <WhyRejected />
        <Timeline />
        <Strategy />
        <HowWeBuild />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
