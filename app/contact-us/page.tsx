import type { Metadata } from "next";
import { contactPageSchema, breadcrumbSchema, localBusinessGurgaonSchema, organizationSchema, localBusinessDelhiSchema } from "./contactSchemas";
import ContactUs from "./contact-us";

export const metadata: Metadata = {
  title: "Contact EduQuest | Book a Free Counselling Session | Delhi & Gurgaon",
  description:
    "Get in touch with EduQuest — India's leading coaching institute for SAT, UCAT, GRE & more. Book a free counselling session, ask us anything, or visit our Delhi & Gurgaon centres.",
  keywords: [
    // ── Core contact terms ───────────────────────────────────────
    "contact EduQuest",
    "EduQuest contact number",
    "EduQuest email",
    "EduQuest enquiry",
    "EduQuest admissions",
    "EduQuest helpline",
    "EduQuest support",
 
    // ── Counselling & consultation ───────────────────────────────
    "free counselling session EduQuest",
    "book counselling EduQuest",
    "study abroad counselling India",
    "UK medical school counselling India",
    "Australia medical school counselling India",
    "UCAT counselling India",
    "SAT counselling India",
    "GRE counselling India",
    "overseas education counselling Delhi",
    "overseas education counselling Gurgaon",
 
    // ── Location ─────────────────────────────────────────────────
    "EduQuest Delhi",
    "EduQuest Gurgaon",
    "EduQuest office Delhi",
    "EduQuest office Gurgaon",
    "EduQuest coaching centre Delhi",
    "EduQuest coaching centre Gurgaon",
    "coaching institute Gurgaon",
    "coaching institute Delhi",
    "test prep institute Delhi NCR",
 
    // ── Brand + services ─────────────────────────────────────────
    "EduQuest India",
    "EduQuest coaching",
    "EduQuest UCAT coaching",
    "EduQuest SAT coaching",
    "EduQuest GRE coaching",
    "EduQuest MBBS abroad",
    "EduQuest study abroad",
 
    // ── Long-tail / informational ────────────────────────────────
    "how to contact EduQuest",
    "EduQuest phone number",
    "EduQuest address",
    "EduQuest online enquiry",
    "talk to EduQuest counsellor",
    "reach EduQuest",
  ],
 
  alternates: {
    canonical: "https://eduquest.org.in/contact-us/",
    languages: {
      "x-default": "https://eduquest.org.in/contact-us/",
      en: "https://eduquest.org.in/contact-us/",
      "en-IN": "https://eduquest.org.in/contact-us/",
    },
  },
 
  openGraph: {
    title: "Contact EduQuest | Book a Free Counselling Session",
    description:
      "Reach EduQuest's expert counsellors for SAT, UCAT, GRE & study-abroad guidance. Visit our Delhi or Gurgaon centre, or connect online.",
    url: "https://eduquest.org.in/contact-us/",
    siteName: "EduQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact EduQuest — Free Counselling Session",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Contact EduQuest | Free Counselling | Delhi & Gurgaon",
    description:
      "Book a free counselling session with EduQuest for SAT, UCAT, GRE & MBBS abroad. Centres in Delhi & Gurgaon. Online enquiries welcome.",
    images: ["https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function UCATPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessGurgaonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessDelhiSchema) }}
      />
      <ContactUs />
  
    </>
  );
}