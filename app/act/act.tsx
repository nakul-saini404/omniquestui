import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/act/Herosection/HeroSection';
import WhyACT from '@/components/act/WhyACT/WhyACT';
import WhatsIncluded from '@/components/act/WhatsIncluded/WhatsIncluded';
import OurApproach from '@/components/act/OurApproach/OurApproach';
import ACTSections from '@/components/act/ACTSections/ACTSections';
import SATvsACT from '@/components/act/SATvsACT/SATvsACT';
import StudentSuccess from '@/components/act/StudentSuccess/StudentSuccess';
import FAQ from '@/components/act/FAQ/FAQ';
import ACTTestDates from '@/components/act/ACTTestDates/ACTTestDates';


export default function ACTCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        < HeroSection />
        < WhyACT />
        < WhatsIncluded />
        < OurApproach />
        < ACTSections />
        < ACTTestDates />
        < SATvsACT />
        < StudentSuccess />
        <CTAStrip />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
