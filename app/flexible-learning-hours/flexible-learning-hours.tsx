
import Footer from '@/components/eduQuest/Footer';
import Navbar from "@/components/eduQuest/Navbar";
import Benefits from '@/components/flexiHours/Benefits/Benefits';
import BonusPerks from '@/components/flexiHours/BonusPerks/BonusPerks';
import FAQs from '@/components/flexiHours/FAQs/FAQs';
import HeroSection from '@/components/flexiHours/HeroSection/HeroSection';
import ProcessSection from '@/components/flexiHours/ProcessSection/ProcessSection';
import SmartHabits from '@/components/flexiHours/SmartHabits/SmartHabits';
import SmartPricing from '@/components/flexiHours/SmartPricing/SmartPricing';
import WhyStudyVault from '@/components/flexiHours/WhyStudyVault/WhyStudyVault';
import CTAStrip from '@/components/sat_mumbai/CTAStrip/CTAStrip';


export default function FlexibleLearningHours() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <WhyStudyVault />
        <SmartPricing />
        <ProcessSection />
        <Benefits />
        <BonusPerks />
        <SmartHabits />
        <FAQs />
        <CTAStrip />
      </main>

      <Footer />
    </>
  );
}
