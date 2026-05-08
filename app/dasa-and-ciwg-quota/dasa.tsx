import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import HeroSection from '@/components/dasa/HeroSection/HeroSection';
import EligibilitySection from '@/components/dasa/EligibilitySection/EligibilitySection';


export default function DasaCOACHING() {
  return (
    <>

      <Navbar />

      <main>
    <HeroSection/>
    <EligibilitySection/>

      </main>
      <Footer />
    </>
  );
}
