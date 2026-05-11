import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroLSAT from '@/components/lsat/HeroLSAT/HeroLSAT';
import ScoreBreakdown from '@/components/lsat/ScoreBreakdown/ScoreBreakdown';
import AboutLSAT from '@/components/lsat/AboutLSAT/AboutLSAT';
import WhyEduQuest from '@/components/lsat/WhyEduQuest/WhyEduQuest';
import Curriculum from '@/components/lsat/Curriculum/Curriculum';
import YourJourney from '@/components/lsat/YourJourney/YourJourney';
import StudentStories from '@/components/lsat/StudentStories/StudentStories';
import FAQ from '@/components/lsat/FAQ/FAQ';



export default function LSATCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroLSAT />
        <AboutLSAT />
        <ScoreBreakdown />
        <WhyEduQuest />
        <Curriculum />
        <YourJourney />
        <StudentStories />
        <FAQ />
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
