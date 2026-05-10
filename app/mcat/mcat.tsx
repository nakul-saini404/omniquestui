import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import HeroSection from '@/components/mcat/HeroSection/HeroSection';
import ExamStructure from '@/components/mcat/ExamStructure/ExamStructure';
import ScoreStructure from '@/components/mcat/ScoreStructure/ScoreStructure';
import WhyEduQuest from '@/components/mcat/WhyEduQuest/WhyEduQuest';
import CommonPitfalls from '@/components/mcat/CommonPitfalls/CommonPitfalls';
import StudentStories from '@/components/mcat/StudentStories/StudentStories';
import FAQ from '@/components/mcat/FAQ/FAQ';



export default function MCATCOACHING() {
  return (
    <>

      <Navbar />

      <main>
     
        <HeroSection />
        <ExamStructure />
        <ScoreStructure />
        <WhyEduQuest />
        <CommonPitfalls />
        <StudentStories />
        <FAQ />
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
