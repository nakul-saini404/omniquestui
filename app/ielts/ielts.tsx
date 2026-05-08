import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import HeroSection from '@/components/ielts/HeroSection/HeroSection';
import AboutStrip from '@/components/ielts/AboutStrip/AboutStrip';
import ChooseYourPath from '@/components/ielts/ChooseYourPath/ChooseYourPath';
import WhatMakesUsDifferent from '@/components/ielts/WhatMakesUsDifferent/WhatMakesUsDifferent';
import WhyChooseIELTS from '@/components/ielts/WhyChooseIELTS/WhyChooseIELTS';
import OnlineStudyPackages from '@/components/ielts/OnlineStudyPackages/OnlineStudyPackages';
import LiveBatchTimings from '@/components/ielts/LiveBatchTimings/LiveBatchTimings';
import GetInTouch from '@/components/ielts/GetInTouch/GetInTouch';
import IELTSFaq from '@/components/ielts/IELTSFaq/IELTSFaq';

export default function IELTSCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <AboutStrip />
        <ChooseYourPath />
        <WhyChooseIELTS />
        <WhatMakesUsDifferent />
        <OnlineStudyPackages />
        <LiveBatchTimings />
        <GetInTouch />
        <IELTSFaq />

      </main>
      <Footer />
    </>
  );
}
