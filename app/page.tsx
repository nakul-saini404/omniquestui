import { redirect } from "next/navigation";


// In layout.tsx or inside the page component

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Study Abroad Consultants in India for Ivy League & Top US, UK Universities | EduQuest",
  description: "Get expert guidance from EduQuest, one of the best study abroad consultants in India. Secure admission to Ivy League & top US/UK universities with SAT, profile building & application support.",
  alternates: {
    canonical: "https://eduquest.org.in/",
  },
  openGraph: {
    title: "Best Study Abroad Consultants in India for Ivy League & Top US, UK Universities | EduQuest",
    description: "Get expert guidance from EduQuest, one of the best study abroad consultants in India. Secure admission to Ivy League & top US/UK universities with SAT, profile building & application support.",
    url: "https://eduquest.org.in/",
    siteName: "SAT ACT AP Admission consultants",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Study Abroad Consultants in India for Ivy League & Top US, UK Universities | EduQuest",
    description: "Get expert guidance from EduQuest, one of the best study abroad consultants in India. Secure admission to Ivy League & top US/UK universities with SAT, profile building & application support.",
    images: [""],
  },
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "EduQuest",
      "url": "https://eduquest.org.in",
      "logo": "https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png",
      "description": "India's most strategic study abroad admissions consultancy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1210 Galleria Boulevard, DLF Phase IV",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122009",
        "addressCountry": "IN"
      },
      "telephone": "+91-9958041888",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10000"
      }
    })
  }}
/>

export default function RootPage() {
  redirect("/omniquest");
}