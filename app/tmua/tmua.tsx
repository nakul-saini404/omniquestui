import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/tmua/HeroSection/HeroSection';
import StatsBar from '@/components/tmua/StatsBar/StatsBar';
import AboutSection from '@/components/tmua/AboutSection/AboutSection';
import EligibilitySection from '@/components/tmua/EligibilitySection/EligibilitySection';
import ExamStructureSection from '@/components/tmua/ExamStructureSection/ExamStructureSection';


export default function TMUACOACHING() {
  return (
    <>

      <Navbar />

      <main>
      <HeroSection/>
      <StatsBar/>
      <AboutSection/>
      <EligibilitySection/>
      <ExamStructureSection/>
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
