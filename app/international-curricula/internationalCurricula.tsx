import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import Hero from '@/components/internationalCurricular/Hero/Hero';
import CurriculaOverview from '@/components/internationalCurricular/CurriculaOverview/CurriculaOverview';
import ProgramOverview from '@/components/internationalCurricular/ProgramOverview/ProgramOverview';
import SubjectExplorer from '@/components/internationalCurricular/SubjectExplorer/SubjectExplorer';
import ExamPreparation from '@/components/internationalCurricular/ExamPreparation/ExamPreparation';
import ExpertFaculty from '@/components/internationalCurricular/ExpertFaculty/ExpertFaculty';
import WhyChooseUs from '@/components/internationalCurricular/WhyChooseUs/WhyChooseUs';
import FrequentlyAskedQuestions from '@/components/internationalCurricular/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import GetInTouch from '@/components/internationalCurricular/GetInTouch/GetInTouch';

export default function InternationalCurricular() {
  return (
    <>

      <Navbar />
      <main>
        <Hero />
        <CurriculaOverview />
        <ProgramOverview />
        <SubjectExplorer />
        <ExamPreparation />
        <ExpertFaculty />
        <WhyChooseUs />
        <FrequentlyAskedQuestions />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
