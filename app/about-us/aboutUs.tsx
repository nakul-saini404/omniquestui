import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/aboutUs/HeroSection/HeroSection';
import OurFoundation from '@/components/aboutUs/OurFoundation/OurFoundation';
import WhatWeOffer from '@/components/aboutUs/WhatWeOffer/WhatWeOffer';
import MeetOurLeaders from '@/components/aboutUs/MeetOurLeaders/MeetOurLeaders';
import OurPedagogy from '@/components/aboutUs/OurPedagogy/OurPedagogy';


export default function AboutUSCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <HeroSection />
        <OurFoundation />
        <WhatWeOffer />
        <MeetOurLeaders />
        <OurPedagogy />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
