import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";

import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';
import Hero from '@/components/ssat/Hero/Hero';
import AboutExam from '@/components/ssat/AboutExam/AboutExam';
import WhyItMatters from '@/components/ssat/WhyItMatters/WhyItMatters';
import ExamStructure from '@/components/ssat/ExamStructure/ExamStructure';
import ScoreStructure from '@/components/ssat/ScoreStructure/ScoreStructure';
import TestDates from '@/components/ssat/TestDates/TestDates';
import RootCauseAnalysis from '@/components/ssat/RootCauseAnalysis/RootCauseAnalysis';
import WhyEduQuest from '@/components/ssat/WhyEduQuest/WhyEduQuest';
import StudentResults from '@/components/ssat/StudentResults/StudentResults';
import FAQ from '@/components/ssat/FAQ/FAQ';



export default function SSATCOACHING() {
  return (
    <>

      <Navbar />

      <main>
      
        <Hero />
        <AboutExam />
        <WhyItMatters />
        <ExamStructure />
        <ScoreStructure />
        <TestDates />
        <RootCauseAnalysis />
        <WhyEduQuest />
        <StudentResults />
        <FAQ />
        <CTAStrip />
       
      </main>
      <Footer />
    </>
  );
}
