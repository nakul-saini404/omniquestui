import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import HeroSection from '@/components/dasa/HeroSection/HeroSection';
import EligibilitySection from '@/components/dasa/EligibilitySection/EligibilitySection';
import AdmissionRoutes from '@/components/dasa/AdmissionRoutes/AdmissionRoutes';
import KeyDetails from '@/components/dasa/KeyDetails/KeyDetails';
import ISAvsDASA from '@/components/dasa/ISAvsDASA/ISAvsDASA';
import CIWGClarification from '@/components/dasa/CIWGClarification/CIWGClarification';
import ScoreStrategy from '@/components/dasa/ScoreStrategy/ScoreStrategy';
import WhyEduQuest from '@/components/dasa/WhyEduQuest/WhyEduQuest';
import ProcessTimeline from '@/components/dasa/ProcessTimeline/ProcessTimeline';
import WhyStudentsFail from '@/components/dasa/WhyStudentsFail/WhyStudentsFail';
import FAQ from '@/components/dasa/FAQ/FAQ';
import GetInTouch from '@/components/dasa/GetInTouch/GetInTouch';


export default function DasaCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <EligibilitySection />
        <AdmissionRoutes />
        <WhyStudentsFail />
        <KeyDetails />
        <ISAvsDASA />
        <CIWGClarification />
        <ScoreStrategy />
        <WhyEduQuest />
        <ProcessTimeline />
        <FAQ />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
