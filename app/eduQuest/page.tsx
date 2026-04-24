'use client';
import { useState } from 'react';
import Navbar from '@/components/eduQuest/Navbar';
import Hero from '@/components/eduQuest/Hero';
import Courses from '@/components/eduQuest/Courses';
import WhyChooseUs from '@/components/eduQuest/WhyChooseUs';
import Process from '@/components/eduQuest/Process';
import StudyAbroad from '@/components/eduQuest/StudyAbroad';
import Testimonials from '@/components/eduQuest/Testimonials';
import Universities from '@/components/eduQuest/Universities';
import SuccessProfiles from '@/components/eduQuest/SuccessProfiles';
import Blog from '@/components/eduQuest/Blog';
import FAQ from '@/components/eduQuest/FAQ';
import Contact from '@/components/eduQuest/Contact';
import Footer from '@/components/eduQuest/Footer';
import FloatingWidgets from '@/components/eduQuest/FloatingWidgets';
import TimelineAndTestimonials from '@/components/eduQuest/Testimonials';
import Calculators from '@/components/eduQuest/Calculators';


export default function Home() {
 
  
  return (
    <>
      <Navbar  />
      <main>
        <Hero />
        <Calculators />
        <Courses />
        <WhyChooseUs />
        <Process />
        <StudyAbroad />
        <TimelineAndTestimonials />
        <Universities />
        <SuccessProfiles />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <FloatingWidgets />
    </>
  );
}