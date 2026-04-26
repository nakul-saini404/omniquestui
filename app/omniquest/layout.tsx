import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmniQuest — India's Premium Global Admissions Strategy Firm",
  description:
    "A premium admissions and career strategy consultancy helping students secure Ivy League, top global universities, and elite careers through psychometric intelligence and structured profile architecture.",
  alternates: { canonical: "https://omniquest.in/omniquest" },
};

export default function OmniQuestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}