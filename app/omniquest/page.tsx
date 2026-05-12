import type { Metadata } from "next";
import OmniquestClient from "./OmniquestClient";

export const metadata: Metadata = {
  title: "OmniQuest — India's #1 Global Admissions Strategy Firm | Ivy League & MBA",
  description:
    "OmniQuest is India's premier education intelligence ecosystem — powering Ivy League admissions (EduQuest), MBA strategy (MBA Wizards), and career readiness (Aptech). 10,000+ students. 40+ countries. Book a free strategy session.",
  keywords: [
    "global admissions strategy India",
    "Ivy League admissions consultant India",
    "MBA admissions India",
    "study abroad consultant Gurgaon",
    "OmniQuest EduQuest MBA Wizards",
  ],
  alternates: {
    canonical: "https://app.eduquest.org.in/omniquest",
  },
  openGraph: {
    title: "OmniQuest — India's #1 Global Admissions Strategy Firm",
    description:
      "One unified intelligence system. Three pathways. Global outcomes. EduQuest · MBA Wizards · Aptech.",
    url: "https://app.eduquest.org.in/omniquest",
    siteName: "OmniQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png",
        width: 1200,
        height: 630,
        alt: "OmniQuest — India's Global Admissions Strategy Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniQuest — India's #1 Global Admissions Strategy Firm",
    description:
      "EduQuest · MBA Wizards · Aptech — one system, three pathways, global outcomes.",
    images: ["https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <OmniquestClient />;
}