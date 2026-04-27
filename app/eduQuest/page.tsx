// import { useState } from 'react';
import type { Metadata } from "next";
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


export const metadata: Metadata = {
  title: "EduQuest — Best Study Abroad & SAT Coaching in India | Top US, UK & Canada Admits",
  description:
    "EduQuest is India's most strategic study abroad consultancy. Expert SAT, ACT, AP coaching + elite profile building for Ivy League, Oxford, Cambridge & Top 50 universities. 10K+ students. $8M+ scholarships. Gurgaon & Online.",
  keywords: [
    "study abroad consultant India",
    "SAT coaching Gurgaon",
    "Ivy League admissions India",
    "profile building for US universities",
    "best study abroad consultant Delhi NCR",
    "AP coaching India",
    "EduQuest Gurgaon",
  ],
  alternates: {
    canonical: "https://eduquest.org.in",
    // This page should ideally live at eduquest.org.in, not the Vercel subdomain
  },
  openGraph: {
    title: "EduQuest — Best Study Abroad & SAT Coaching in India",
    description:
      "Profile-first admissions strategy for Ivy League & Top 50 universities. SAT · ACT · AP coaching. Limited intake of 15–20 students. $8M+ scholarships won.",
    url: "https://omniquestui.vercel.app/eduQuest",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png",
        width: 1200,
        height: 630,
        alt: "EduQuest Study Abroad Consultancy India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduQuest — Best Study Abroad & SAT Coaching in India",
    description:
      "Profile-first Ivy League admissions strategy. SAT · AP coaching. 10K+ students. $8M+ scholarships.",
    images: ["https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
 
  
  return (
    <>
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