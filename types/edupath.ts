export type Country =
  | "USA"
  | "UK"
  | "Canada"
  | "Australia"
  | "Germany"
  | "Netherlands"
  | "Singapore"
  | "Japan"
  | "India";

export type Grade = 8 | 9 | 10 | 11 | 12;

export type Stream =
  | "Science (PCM)"
  | "Science (PCB)"
  | "Commerce"
  | "Humanities"
  | "Undecided";

export interface StudentData {
  name: string;
  email: string;       // ← new
  phone: string;       // ← new
  grade: Grade;
  score: number;
  stream: Stream;
  field: string;
  countries: Country[];
}

export interface University {
  name: string;
  tier: "Reach" | "Target" | "Safety";
  req: number;
  sat: number | null;
  deadline: string;
  cost: string;
  country?: Country;
}

export interface ChanceResult {
  label: string;
  cls: "high" | "medium" | "low";
}

export interface ActionItem {
  icon: string;
  title: string;
  desc: string;
  urgency: "urgent-red" | "urgent-yellow" | "urgent-blue";
  urgLabel: string;
}

export interface TimelineItem {
  month: number;
  title: string;
  desc: string;
  done: boolean;
}

export interface SubmitLeadPayload {
  studentData: StudentData;
  aiInsight: string;
  predictedFinal: number;
  satEst: number;
  uniCount: number;
}