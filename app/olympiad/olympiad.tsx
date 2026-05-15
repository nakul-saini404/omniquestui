import Footer from '@/components/eduQuest/Footer';

import Navbar from "@/components/eduQuest/Navbar";
import HeroSection from '@/components/olympiad/HeroSection/HeroSection';
import WhatIsOlympiad from '@/components/olympiad/WhatIsOlympiad/WhatIsOlympiad';
import DeepDive from '@/components/olympiad/DeepDive/DeepDive';
import ComparisonAndDownload from '@/components/olympiad/ComparisonAndDownload/ComparisonAndDownload';
import WhyEduQuest from '@/components/olympiad/WhyEduQuest/WhyEduQuest';
import SimpleProcess from '@/components/olympiad/SimpleProcess/SimpleProcess';
import StudentStories from '@/components/olympiad/StudentStories/StudentStories';
import CommonQuestions from '@/components/olympiad/CommonQuestions/CommonQuestions';
import CtaStrip from '@/components/olympiad/CtaStrip/CtaStrip';
import OlympiadSection from '@/components/olympiad/OlympiadSection/OlympiadSection';

export default function Olympiad() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <WhatIsOlympiad />
        <OlympiadSection />
        <DeepDive />
        <ComparisonAndDownload />
        <SimpleProcess />
        <WhyEduQuest />
        <StudentStories />
        <CommonQuestions />
        <CtaStrip />

      </main>
      <Footer />
    </>
  );
}
