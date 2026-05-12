import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EduPath — Personalised Study Abroad Roadmap | OmniQuest",
  description:
    "EduPath is your personalised study abroad planning dashboard by OmniQuest. Get a tailored roadmap based on your academic profile, target country, and career goals.",
  alternates: {
    canonical: "https://app.eduquest.org.in/edupath",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function EduPathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
