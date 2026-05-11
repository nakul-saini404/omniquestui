import type { Metadata } from "next";
import {
  preApFaqSchema,
  preApBreadcrumbSchema,
  preApCourseSchema,
  preApOrganizationSchema,
  preApWebPageSchema,
  preApLocalBusinessSchema,
  preApSubjectListSchema,
  preApMetadata
} from "./pre-ap-gurgaonSchema";
import PREAPCOACHING from "./pre-ap-gurgaon";
 
export const metadata: Metadata = preApMetadata;
 
export default function PreApCoachingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApCourseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApOrganizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApWebPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApLocalBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(preApSubjectListSchema) }} />
      <PREAPCOACHING />
    </>
  );
}