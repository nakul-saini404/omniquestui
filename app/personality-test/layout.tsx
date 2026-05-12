import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Personality & Career Test | MBTI Type, Stream & University Match | OmniQuest",
  description:
    "Take the free AI-powered personality test by OmniQuest — discover your MBTI type, get personalised career matches, stream recommendations (Class 8–10), or university + entrance exam roadmaps (Class 11–12+). 18 questions · 5 minutes · instant AI report.",
  keywords: [
    "personality test for students",
    "MBTI personality test India",
    "free personality test for career",
    "personality test for class 10",
    "personality test for class 11",
    "personality test for class 12",
    "career aptitude test India",
    "career test for students India",
    "which stream should I choose",
    "stream recommendation test",
    "Science Commerce Arts test",
    "career guidance test India",
    "AI personality test",
    "MBTI test free",
    "personality type test",
    "university recommendation test",
    "OmniQuest personality test",
    "EduQuest personality test",
    "study abroad personality test",
    "career quiz for students",
  ],
  alternates: {
    canonical: "https://app.eduquest.org.in/personality-test",
  },
  openGraph: {
    title: "Free AI Personality & Career Test | OmniQuest",
    description:
      "18 questions · 5 minutes · Discover your MBTI type, career matches, stream recommendation or university roadmap — powered by AI.",
    url: "https://app.eduquest.org.in/personality-test",
    siteName: "OmniQuest",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://eduquest.org.in/wp-content/uploads/eduquest-og.jpg",
        width: 1200,
        height: 630,
        alt: "OmniQuest AI Personality & Career Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Personality & Career Test | OmniQuest",
    description:
      "Discover your MBTI type, career matches and university roadmap with OmniQuest's free AI personality test.",
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

export default function PersonalityTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
