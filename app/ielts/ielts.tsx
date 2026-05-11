import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import HeroSection from '@/components/ielts/HeroSection/HeroSection';
import AboutStrip from '@/components/ielts/AboutStrip/AboutStrip';
import WhatMakesUsDifferent from '@/components/ielts/WhatMakesUsDifferent/WhatMakesUsDifferent';
import WhyChooseIELTS from '@/components/ielts/WhyChooseIELTS/WhyChooseIELTS';
import GetInTouch from '@/components/ielts/GetInTouch/GetInTouch';
import IELTSFaq from '@/components/ielts/IELTSFaq/IELTSFaq';
import WhyStudentsScoreLow from '@/components/ielts/WhyStudentsScoreLow/WhyStudentsScoreLow';
import ScoreComparison from '@/components/ielts/ScoreComparison/ScoreComparison';

export default function IELTSCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <AboutStrip />
        <WhyStudentsScoreLow />
        <WhyChooseIELTS />
        <ScoreComparison />
        <WhatMakesUsDifferent />
        <GetInTouch />
        <IELTSFaq />

      </main>
      <Footer />
    </>
  );
}
