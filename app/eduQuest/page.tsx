// import { useState } from 'react';
import Navbar from '@/components/eduQuest/Navbar';
import Hero from '@/components/eduQuest/Hero';
// import Courses from '@/components/eduQuest/Courses';
// import WhyChooseUs from '@/components/eduQuest/WhyChooseUs';
// import Process from '@/components/eduQuest/Process';
// import StudyAbroad from '@/components/eduQuest/StudyAbroad';
// import Testimonials from '@/components/eduQuest/Testimonials';
// import Universities from '@/components/eduQuest/Universities';
// import SuccessProfiles from '@/components/eduQuest/SuccessProfiles';
// import Blog from '@/components/eduQuest/Blog';
// import FAQ from '@/components/eduQuest/FAQ';
import Contact from '@/components/eduQuest/Contact';
import Footer from '@/components/eduQuest/Footer';
import FloatingWidgets from '@/components/eduQuest/FloatingWidgets';
// import TimelineAndTestimonials from '@/components/eduQuest/Testimonials';
// import Calculators from '@/components/eduQuest/Calculators';
import Problem from '@/components/eduQuest/Problem';
import AdmissionsTimeline from '@/components/eduQuest/AdmissionsTimeline';
// import FindYourStartingPoint from '@/components/eduQuest/FindYourStartingPoint';
import NarrativeArchitectureModel from '@/components/eduQuest/NarrativeArchitectureModel';
import TestPrep from '@/components/eduQuest/TestPrep';
import WhatChanges from '@/components/eduQuest/WhatChanges';
import { TestimonialsSection } from '@/components/eduQuest/Testimonials';

import JsonLd   from "@/components/JsonLd/JsonLd";
import { EDUQUEST_FAQ }      from "@/app/data/faq";
import { buildFAQSchema } from "@/lib/schemas/faqSchema";


export default function Home() {
   const faqSchema = buildFAQSchema(EDUQUEST_FAQ);
 
  
  return (
    <>
        <JsonLd data={faqSchema} />
    
      <Navbar  />
      <main>
        <Hero />
        <Problem />
        <AdmissionsTimeline />
        {/* <FindYourStartingPoint /> */}
        <NarrativeArchitectureModel />
        <TestPrep />
        <WhatChanges />
        <TestimonialsSection />
        {/* <Calculators />
        <WhyChooseUs />
        <Courses />
        <Process />
        <StudyAbroad />
        <TimelineAndTestimonials />
        <Universities />
        <SuccessProfiles />
        <Blog />
        <FAQ /> */}
        <Contact />
      </main>
      <Footer />

      <FloatingWidgets />
    </>
  );
}