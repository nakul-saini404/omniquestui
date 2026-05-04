import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import APHero from '@/components/apCoaching/APHero/APHero';
import TrustStrip from '@/components/apCoaching/TrustStrip/TrustStrip';
import WhatIsAP from '@/components/apCoaching/WhatIsAP/WhatIsAP';
import APSubjects from '@/components/apCoaching/APSubjects/APSubjects';


export default function APCOACHING() {
  return (
    <>
     
      <Navbar />
   
      <main>
      <APHero />
      <TrustStrip />
      <WhatIsAP />
      <APSubjects />
      </main>
      <Footer />
    </>
  );
}
