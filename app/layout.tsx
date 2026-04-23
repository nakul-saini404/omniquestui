import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omniquest.in"),
  title: {
    default: "OmniQuest — Global Education, MBA Admissions & Career Programs | India",
    template: "%s | OmniQuest",
  },
  description: "OmniQuest is India's premier global education platform offering SAT coaching, GMAT prep, MBA admissions consulting, study abroad counselling, and AI & Data Science skill programs — powered by EduQuest, MbaWizards, and Aptech.",
  keywords: ["study abroad consultants India", "SAT coaching Delhi", "GMAT coaching India", "MBA admissions consulting", "study abroad consultants", "OmniQuest", "EduQuest", "MbaWizards", "Aptech", "personality test", "career guidance India", "SAT prep", "GMAT prep", "AI courses India", "data science courses"],
  authors: [{ name: "OmniQuest" }],
  creator: "OmniQuest",
  publisher: "OmniQuest Education Pvt. Ltd.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omniquest.in",
    siteName: "OmniQuest",
    title: "OmniQuest — Global Education, MBA & Career Programs",
    description: "India's most trusted study abroad consultants. SAT coaching, GMAT prep, MBA admissions, AI skills. 10,000+ students placed globally.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OmniQuest — Global Education Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniQuest — Global Education Platform",
    description: "SAT coaching, GMAT prep, MBA admissions, study abroad consulting & AI skills. India's #1.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://omniquest.in" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "OmniQuest",
          "description": "India's premier global education platform",
          "url": "https://omniquest.in",
          "logo": "https://omniquest.in/logo.png",
          "address": { "@type": "PostalAddress", "addressCountry": "IN", "addressLocality": "Delhi" },
          "sameAs": ["https://twitter.com/omniquest", "https://linkedin.com/company/omniquest"],
          "offers": [
            { "@type": "Offer", "name": "SAT Coaching", "description": "SAT preparation for 1500+ score" },
            { "@type": "Offer", "name": "GMAT Coaching", "description": "GMAT prep targeting 720+" },
            { "@type": "Offer", "name": "MBA Admissions Consulting", "description": "Expert MBA admissions guidance" },
            { "@type": "Offer", "name": "Study Abroad Consulting", "description": "End-to-end study abroad support" },
          ]
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
