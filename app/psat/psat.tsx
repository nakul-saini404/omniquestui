import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import Hero from '@/components/psat/Hero/Hero';
import AboutExam from '@/components/psat/AboutExam/AboutExam';
import ScoreBreakdown from '@/components/psat/ScoreBreakdown/ScoreBreakdown';
import OurMethodology from '@/components/psat/OurMethodology/OurMethodology';
import WhyStartNow from '@/components/psat/WhyStartNow/WhyStartNow';
import WhatYoullLearn from '@/components/psat/WhatYoullLearn/WhatYoullLearn';
import StrategicRoadmap from '@/components/psat/StrategicRoadmap/StrategicRoadmap';
import ProvenResults from '@/components/psat/ProvenResults/ProvenResults';
import FAQ from '@/components/psat/FAQ/FAQ';



export default function PSATCOACHING() {
  return (
    <>

      <Navbar />

      <main>
     
        <Hero />
        <AboutExam/>
        <ScoreBreakdown/>
        <OurMethodology/>
        <WhyStartNow/>
        <WhatYoullLearn/>
        <StrategicRoadmap/>
        <ProvenResults/>
        <CTAStrip />
        <FAQ />
       
      </main>
      <Footer />
    </>
  );
}
