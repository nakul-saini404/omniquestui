import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import PTEHero from '@/components/pte/PTEHero/PTEHero';
import CommonMistakes from '@/components/pte/CommonMistakes/CommonMistakes';
import Advantages from '@/components/pte/Advantages/Advantages';
import ScoreStructure from '@/components/pte/ScoreStructure/ScoreStructure';
import ExamPattern from '@/components/pte/ExamPattern/ExamPattern';
import ExamDelivery from '@/components/pte/ExamDelivery/ExamDelivery';
import GlobalRecognition from '@/components/pte/GlobalRecognition/GlobalRecognition';
import WhyEduQuest from '@/components/pte/WhyEduQuest/WhyEduQuest';
import StudentStories from '@/components/pte/StudentStories/StudentStories';
import FAQ from '@/components/pte/FAQ/FAQ';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';


export default function PTECOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <PTEHero/>
        <CommonMistakes/>
        <Advantages/>
        <ScoreStructure />
        <ExamPattern />
        <ExamDelivery />
        <GlobalRecognition />
        <WhyEduQuest />
        <StudentStories />
        <CTAStrip />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
