import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import ContactHero from '@/components/Contact-us/contacthero/ContactHero';
import Since1995TrustBar from "@/components/Contact-us/Since1995TrustBar/Since1995TrustBar";
import GetInTouch from "@/components/Contact-us/GetInTouch/GetInTouch";
import OurCommitment from '@/components/Contact-us/OurCommitment/OurCommitment';
import OurOffices from '@/components/Contact-us/OurOffices/OurOffices';
import OurProgrammes from '@/components/Contact-us/OurProgrammes/OurProgrammes';
import OurCounsellors from '@/components/Contact-us/OurCounsellors/OurCounsellors';
import EmailDirectory from '@/components/Contact-us/EmailDirectory/EmailDirectory';
import StudentStories from '@/components/Contact-us/StudentStories/StudentStories';
import CommonQuestions from '@/components/Contact-us/CommonQuestions/CommonQuestions';

export default function ContactUs() {
  return (
    <>

      <Navbar />

      <main>
        <ContactHero />
        <Since1995TrustBar />
        <GetInTouch />
        <OurCommitment />
        <OurOffices />
        <OurProgrammes/>
        <OurCounsellors/>
        <EmailDirectory/>
        <StudentStories/>
        <CommonQuestions/>
      </main>
      <Footer />
    </>
  );
}
