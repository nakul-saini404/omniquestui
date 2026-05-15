import AdmitList from '@/components/aptech/AdmitList/AdmitList';
import CapstoneSection from '@/components/aptech/CapstoneSection/CapstoneSection';
import CtaBand from '@/components/aptech/CtaBand/CtaBand';
import FaqSection from '@/components/aptech/FaqSection/FaqSection';
import HeroSection from '@/components/aptech/HeroSection/HeroSection';
import ProgramAreas from '@/components/aptech/ProgramAreas/ProgramAreas';
import RoadmapSection from '@/components/aptech/RoadmapSection/RoadmapSection';
import TechnicalSpecs from '@/components/aptech/TechnicalSpecs/TechnicalSpecs';
import WhyEduQuest from '@/components/aptech/WhyEduQuest/WhyEduQuest';
import Footer from '@/components/eduQuest/Footer';
import Navbar from "@/components/eduQuest/Navbar";

export default function Eduaptech() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AdmitList />
        <CapstoneSection />
        <ProgramAreas />
        <RoadmapSection />
        <TechnicalSpecs />
        <WhyEduQuest />
        <FaqSection />
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
