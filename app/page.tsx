import { redirect } from "next/navigation";


// In layout.tsx or inside the page component
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