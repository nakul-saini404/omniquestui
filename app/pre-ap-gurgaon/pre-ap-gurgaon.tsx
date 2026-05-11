import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import FinalCTA from '@/components/sat/FinalCTA';
import PreApHero from '@/components/pre-ap-gurgaon/PreApHero/PreApHero';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import FoundationFirst from '@/components/pre-ap-gurgaon/Foundationfirst/Foundationfirst';
import WhyItMatters from '@/components/pre-ap-gurgaon/WhyItMatters/WhyItMatters';
import PreApSections from '@/components/pre-ap-gurgaon/PreApSections/PreApSections';
import StructuredTracks from '@/components/pre-ap-gurgaon/StructuredTracks/StructuredTracks';
import OurProcess from '@/components/pre-ap-gurgaon/OurProcess/OurProcess';
import WhyChooseUs from '@/components/pre-ap-gurgaon/WhyChooseUs/WhyChooseUs';
import StudentVoices from '@/components/pre-ap-gurgaon/StudentVoices/StudentVoices';
import OurAchievers from '@/components/pre-ap-gurgaon/OurAchievers/OurAchievers';
import FAQ from '@/components/pre-ap-gurgaon/FAQ/FAQ';
import BlogsCarousel from '@/components/pre-ap-gurgaon/BlogsCarousel/BlogsCarousel';


export default function PREAPCOACHING() {
  return (
    <>

      <Navbar />

      <main>
        <PreApHero />
        <FoundationFirst />
        <WhyItMatters />
        <PreApSections />
        <StructuredTracks />
        <OurAchievers />
        <OurProcess />
        <WhyChooseUs />
        <BlogsCarousel/>
        <StudentVoices />
        <FAQ />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}
