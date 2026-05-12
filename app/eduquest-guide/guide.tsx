import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import ProfileBuildingHero from '@/components/profile-building/ProfileBuildingHero/ProfileBuildingHero';
import WhatWeDo from '@/components/profile-building/WhatWeDo/WhatWeDo';
import WhatWeBuild from '@/components/profile-building/WhatWeBuild/WhatWeBuild';
import YourJourney from '@/components/profile-building/YourJourney/YourJourney';
import GradeByGrade from '@/components/profile-building/GradeByGrade/GradeByGrade';
import ProfileChecklist from '@/components/profile-building/ProfileChecklist/ProfileChecklist';
import RealityCheck from '@/components/profile-building/RealityCheck/RealityCheck';
import WhyEduQuest from '@/components/profile-building/WhyEduQuest/WhyEduQuest';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';


export default function GUIDECOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <ProfileBuildingHero />
        <WhatWeDo />
        <WhatWeBuild />
        <YourJourney />
        <GradeByGrade />
        <ProfileChecklist />
        <RealityCheck />
        <WhyEduQuest />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
