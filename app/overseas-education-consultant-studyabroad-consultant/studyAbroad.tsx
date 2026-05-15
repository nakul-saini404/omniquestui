import FAQ from '@/components/abroad/FAQ/FAQ';
import HeroSection from '@/components/abroad/HeroSection/HeroSection';
import LatestInsightsSection from '@/components/abroad/LatestInsightsSection/LatestInsightsSection';
import MustKnowSection from '@/components/abroad/MustKnowSection/MustKnowSection';
import ReadyToBuild from '@/components/abroad/ReadyToBuild/ReadyToBuild';
import StudyAbroadSection from '@/components/abroad/StudyAbroadSection/StudyAbroadSection';
import TestimonialsSection from '@/components/abroad/TestimonialsSection/TestimonialsSection';
import WhoWeAreSection from '@/components/abroad/WhoWeAreSection/WhoWeAreSection';
import WhyEduQuestSection from '@/components/abroad/WhyEduQuestSection/WhyEduQuestSection';
import Footer from '@/components/eduQuest/Footer';
import Navbar from "@/components/eduQuest/Navbar";

export default function StudyAbroad() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StudyAbroadSection />
        <WhoWeAreSection />
        <MustKnowSection />
        <WhyEduQuestSection />
        <LatestInsightsSection />
        <TestimonialsSection />
        <FAQ />
        <ReadyToBuild />
      </main>

      <Footer />
    </>
  );
}
