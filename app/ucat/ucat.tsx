import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import UCATHero from '@/components/ucat/Hero/UCATHero';
import UCATUniversitiesStrip from '@/components/ucat/UCATUniversitiesStrip/UCATUniversitiesStrip';
import UCATFoundation from '@/components/ucat/UCATFoundation/UCATFoundation';
import UcatMajorChanges from '@/components/ucat/UcatMajorChanges/UcatMajorChanges';
import ScoreStrategy from '@/components/ucat/ScoreStrategy/ScoreStrategy';
import PreparationRoadmap from '@/components/ucat/PreparationRoadmap/PreparationRoadmap';
import WhatToAvoid from '@/components/ucat/WhatToAvoid/WhatToAvoid';
import WhyEduQuest from '@/components/ucat/WhyEduQuest/WhyEduQuest';
import StudentVoices from '@/components/ucat/StudentVoices/StudentVoices';
import CommonQuestions from '@/components/ucat/CommonQuestions/CommonQuestions';
import MedicalDreamCTA from '@/components/ucat/MedicalDreamCTA/MedicalDreamCTA';
import UcatMythsFacts from '@/components/ucat/UcatMythsFacts/UcatMythsFacts';
import UcatVersionDates from '@/components/ucat/UcatVersionDates/UcatVersionDates';

export default function UCAT() {
  return (
    <>
     
      <Navbar />
   
      <main>
      
      <UCATHero />
      <UCATUniversitiesStrip />
      <UCATFoundation />
      <UcatMajorChanges />
      <ScoreStrategy />
      <UcatMythsFacts />
      <PreparationRoadmap />
      <WhatToAvoid />
      <WhyEduQuest />
      <UcatVersionDates />
      <StudentVoices />
      <CommonQuestions />
      <MedicalDreamCTA />
    
      </main>
      <Footer />
    </>
  );
}
