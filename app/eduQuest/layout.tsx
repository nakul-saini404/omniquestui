import type { Metadata } from "next";
import "./eduQuest.css";

export const metadata: Metadata = {
  title: "EduQuest Elite Admissions",
  description: "Premium Study Abroad Consulting",
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