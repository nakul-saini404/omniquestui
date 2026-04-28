import type { Metadata } from "next";
import "./eduQuest.css";



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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}