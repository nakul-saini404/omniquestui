import Footer from '@/components/eduQuest/Footer';

import Navbar from "@/components/eduQuest/Navbar";
import AboutIBSection from '@/components/ib/AboutIBSection/AboutIBSection';
import HeroSection from '@/components/ib/HeroSection/HeroSection';
import OurAdvantageSection from '@/components/ib/OurAdvantageSection/OurAdvantageSection';
import OurProcess from '@/components/ib/OurProcess/OurProcess';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import Subjects from '@/components/ib/Subjects/Subjects';
import OurEdge from '@/components/ib/OurEdge/OurEdge';
import HardTruth from '@/components/ib/HardTruth/HardTruth';
import FAQ from '@/components/ib/FAQ/FAQ';

export default function IB() {
  return (
    <>

      <Navbar />

      <main>

        <HeroSection />
        <AboutIBSection />
        <OurAdvantageSection />
        <OurProcess />
        <Subjects />
        <OurEdge />
        <HardTruth />
        <FAQ />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
