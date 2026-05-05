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
  email: string;
  phone: string;
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
  /** Whether SAT is required, recommended, optional, or not used */
  satRequired: "Yes" | "Recommended" | "Optional" | "No";
  deadline: string;
  cost: string;
  country?: Country;
  /** Short description of how applications are evaluated */
  admissionMode: string;
  /** What score/profile is needed to win scholarship money */
  scholarshipStrength: string;
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