import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/tmua/HeroSection/HeroSection';
import StatsBar from '@/components/tmua/StatsBar/StatsBar';
import AboutSection from '@/components/tmua/AboutSection/AboutSection';
import EligibilitySection from '@/components/tmua/EligibilitySection/EligibilitySection';
import ExamStructureSection from '@/components/tmua/ExamStructureSection/ExamStructureSection';
import ScheduleSection from '@/components/tmua/ScheduleSection/ScheduleSection';
import ProcessSection from '@/components/tmua/ProcessSection/ProcessSection';
import Advantage from '@/components/tmua/Advantage/Advantage';
import CommonMistakes from '@/components/tmua/CommonMistakes/CommonMistakes';
import Practice from '@/components/tmua/Practice/Practice';
import Preparation from '@/components/tmua/Preparation/Preparation';
import WhyUs from '@/components/tmua/WhyUs/WhyUs';
import SuccessStories from '@/components/tmua/SuccessStories/SuccessStories';
import FAQs from '@/components/tmua/FAQs/FAQs';


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
      <ScheduleSection/>
      <ProcessSection/>
      <Advantage/>
      <CommonMistakes/>
      <Practice/>
      <Preparation/>
      <WhyUs/>
      <SuccessStories/>
      <FAQs/>
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
