import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import Hero from '@/components/toefl/Hero/Hero';


export default function TOEFLCOACHING() {
  return (
    <>

      <Navbar />

      <main>
       
        <Hero />
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
