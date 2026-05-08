import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/ipmat-coaching/HeroSection/HeroSection';
import WhyChooseSection from '@/components/ipmat-coaching/WhyChooseSection/WhyChooseSection';
import PhilosophySection from '@/components/ipmat-coaching/PhilosophySection/PhilosophySection';
import CurriculumSection from '@/components/ipmat-coaching/CurriculumSection/CurriculumSection';
import SpikeSection from '@/components/ipmat-coaching/SpikeSection/SpikeSection';
import ImportantDatesSection from '@/components/ipmat-coaching/ImportantDatesSection/ImportantDatesSection';
import RoadmapSection from '@/components/ipmat-coaching/RoadmapSection/RoadmapSection';
import StudentSuccess from '@/components/ipmat-coaching/StudentSuccess/StudentSuccess';
import GetStartedToday from '@/components/ipmat-coaching/GetStartedToday/GetStartedToday';
import FAQ from '@/components/ipmat-coaching/FAQ/FAQ';

export default function IPMATCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <PhilosophySection />
        <CurriculumSection />
        <SpikeSection />
        <ImportantDatesSection />
        <RoadmapSection />
        <StudentSuccess />
        <GetStartedToday />
        <CTAStrip />
        <FAQ/>

      </main>
      <Footer />
    </>
  );
}
