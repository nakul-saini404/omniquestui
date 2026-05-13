import Footer from '@/components/eduQuest/Footer';

import Navbar from "@/components/eduQuest/Navbar";
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/online_tution_india/HeroSection/HeroSection';
import OnlineTuitionSection from '@/components/online_tution_india/OnlineTuitionSection/OnlineTuitionSection';
import CompareSection from '@/components/online_tution_india/CompareSection/CompareSection';
import FeaturesSection from '@/components/online_tution_india/FeaturesSection/FeaturesSection';
import BestOnlineTuitionSection from '@/components/online_tution_india/BestOnlineTuitionSection/BestOnlineTuitionSection';
import PopularTopics from '@/components/online_tution_india/PopularTopics/PopularTopics';
import SpecialEnglishClasses from '@/components/online_tution_india/SpecialEnglishClasses/SpecialEnglishClasses';
import WhyEduQuest from '@/components/online_tution_india/WhyEduQuest/WhyEduQuest';

export default function ONLINETUITIONINDIA() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <OnlineTuitionSection />
        <CompareSection />
        <FeaturesSection />
        <BestOnlineTuitionSection />
        <PopularTopics />
        <SpecialEnglishClasses />
        <WhyEduQuest />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
