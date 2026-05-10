import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import Hero from '@/components/toefl/Hero/Hero';
import AboutToefl from '@/components/toefl/AboutToefl/AboutToefl';
import InterestingFacts from '@/components/toefl/InterestingFacts/InterestingFacts';
import WhyToefl from '@/components/toefl/WhyToefl/WhyToefl';
import WhyEduQuest from '@/components/toefl/WhyEduQuest/WhyEduQuest';
import CommonMistakes from '@/components/toefl/CommonMistakes/CommonMistakes';
import ScorePattern from '@/components/toefl/ScorePattern/ScorePattern';
import Roadmap from '@/components/toefl/Roadmap/Roadmap';
import FAQ from '@/components/toefl/FAQ/FAQ';


export default function TOEFLCOACHING() {
  return (
    <>

      <Navbar />

      <main>
       
        <Hero />
        <AboutToefl />
        <InterestingFacts />
        <WhyToefl />
        <WhyEduQuest />
        <CommonMistakes />
        <ScorePattern />
        <Roadmap />
        <CTAStrip />
        <FAQ />
       
      </main>
      <Footer />
    </>
  );
}
