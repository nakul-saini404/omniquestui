import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import TuitionHero from '@/components/home-tution/TuitionHero/TuitionHero';
import PersonalizedTuitions from '@/components/home-tution/PersonalizedTuitions/PersonalizedTuitions';
import StudentCarousel from '@/components/home-tution/StudentCarousel/StudentCarousel';
import WhyItWorks from '@/components/home-tution/WhyItWorks/WhyItWorks';
import SchoolTuitionsClasses from '@/components/home-tution/SchoolTuitionsClasses/SchoolTuitionsClasses';
import EduQuestResults from '@/components/home-tution/EduQuestResults/EduQuestResults';
import EduQuestAbout from '@/components/home-tution/EduQuestAbout/EduQuestAbout';
import EduQuestFAQ from '@/components/home-tution/EduQuestFAQ/EduQuestFAQ';
import WhyStudentsFail from '@/components/home-tution/WhyStudentsFail/WhyStudentsFail';

export default function ONLINETUITION() {
  return (
    <>

      <Navbar />

      <main>
        < TuitionHero />
        < PersonalizedTuitions />
        <StudentCarousel />
        <WhyItWorks />
        <SchoolTuitionsClasses />
        <EduQuestResults />
        <WhyStudentsFail />
        <EduQuestAbout />
        <EduQuestFAQ />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
