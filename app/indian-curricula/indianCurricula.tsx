import Footer from '@/components/eduQuest/Footer';

import "../sat_delhi/globals.css";
import Navbar from "@/components/eduQuest/Navbar";
import EduQuestAdvantage from '@/components/IndianCurricula/EduQuestAdvantage/EduQuestAdvantage';


export default function IndianCurricula() {
  return (
    <>

      <Navbar />
      <main>
        <EduQuestAdvantage />
      </main>
      <Footer />
    </>
  );
}
