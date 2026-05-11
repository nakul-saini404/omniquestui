import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import APHero from '@/components/apCoaching/APHero/APHero';
import TrustStrip from '@/components/apCoaching/TrustStrip/TrustStrip';
import WhatIsAP from '@/components/apCoaching/WhatIsAP/WhatIsAP';
import APSubjects from '@/components/apCoaching/APSubjects/APSubjects';
import ExamFormat2026 from '@/components/apCoaching/ExamFormat2026/ExamFormat2026';
import EduQuestAdvantage from '@/components/apCoaching/EduQuestAdvantage/EduQuestAdvantage';
import ScholarshipImpact from '@/components/apCoaching/ScholarshipImpact/ScholarshipImpact';
import PreAP from '@/components/apCoaching/PreAP/PreAP';
import OurAchievers from '@/components/apCoaching/OurAchievers/OurAchievers';
import HowItWorks from '@/components/apCoaching/HowItWorks/HowItWorks';
import APExamCalendar from '@/components/apCoaching/APExamCalendar/APExamCalendar';
import StudentStories from '@/components/apCoaching/StudentStories/StudentStories';
import FAQ from '@/components/apCoaching/FAQ/FAQ';
import WhyStudentsFail from '@/components/apCoaching/WhyStudentsFail/WhyStudentsFail';
import EduQuestInsights from '@/components/apCoaching/EduQuestInsights/EduQuestInsights';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import APCreditsSection from '@/components/apCoaching/APCreditsSection/APCreditsSection';


export default function APCOACHING() {
  return (
    <>
     
      <Navbar />
   
      <main>
      <APHero />
      <TrustStrip />
      <WhatIsAP />
      <APSubjects />
      <WhyStudentsFail />
      <ExamFormat2026 />
      <EduQuestAdvantage />
      <ScholarshipImpact />
      <APCreditsSection />
      <PreAP />
      <OurAchievers />
      <HowItWorks />
      <APExamCalendar />
      <StudentStories />
      <FAQ />
      <EduQuestInsights/>
        {/* <FinalCTA /> */}
        <CTAStrip/>
      </main>
      <Footer />
    </>
  );
}
