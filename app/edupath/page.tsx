"use client";
import "@/styles/edupath.css";

import { useState } from "react";
import OnboardingForm from "@/components/edupath/OnboardingForm";
import Dashboard from "@/components/edupath/Dashboard";
import type { StudentData } from "@/types/edupath";

export default function EduPathPage() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  const handleReset = () => setStudentData(null);

  return studentData ? (
    <Dashboard data={studentData} onReset={handleReset} />
  ) : (
    <OnboardingForm onSubmit={setStudentData} />
  );
}