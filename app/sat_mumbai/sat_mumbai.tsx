"use client";

import Hero from "../../components/sat_mumbai/Hero/Hero";
import Footer from "../../components/sat/Footer";

import "./global.css";
import Navbar from "@/components/eduQuest/Navbar";
import FeaturedSnippet from "@/components/sat_mumbai/Featuredsnippet/Featuredsnippet";
import SatPattern from "@/components/sat_mumbai/Satpattern/Satpattern";
import RootCause from "@/components/sat_mumbai/Rootcause/Rootcause";
import Roadmap from "@/components/sat_mumbai/Roadmap/Roadmap";
import SatStrategy from "@/components/sat_mumbai/Satstrategy/Satstrategy";
import OurSystem from "@/components/sat_mumbai/Oursystem/Oursystem";
import WhatChanges from "@/components/sat_mumbai/Whatchanges/WhatChanges";
import RelatedResources from "@/components/sat_mumbai/RelatedResources/RelatedResources";
import FAQ from "@/components/sat_mumbai/Faq/FAQ";
import TrustedAuthority from "@/components/sat_mumbai/TrustedAuthority/TrustedAuthority";
import CTAStrip from "@/components/sat_mumbai/CTAStrip/CTAStrip";

export default function SATMumbai() {
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
          SAT Coaching in Mumbai
        </div>
      </nav>    
        <main>
        <Hero />
        <FeaturedSnippet />
        <SatPattern />
        <RootCause />
        <Roadmap />
        <SatStrategy />
        <OurSystem />
        <TrustedAuthority />
        <WhatChanges />
        <RelatedResources />
        <FAQ />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
