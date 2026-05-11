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

export type FieldOfStudy =
  | "Computer Science / AI / Data Science"
  | "Engineering (Mechanical / Civil / EE)"
  | "Medicine / Pre-Med"
  | "Business / Economics"
  | "Law / Political Science"
  | "Design / Architecture"
  | "Life Sciences / Biotech"
  | "Liberal Arts / Humanities"
  | "Media / Communications"
  | "Not decided yet";

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
  satRequired: "Yes" | "Recommended" | "Optional" | "No";
  deadline: string;
  cost: string;
  country?: Country;
  admissionMode: string;
  scholarshipStrength: string;
  indianStudentTip?: string;
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

// ── Field + Country specific data types ──────────────────────────────────────

export interface FieldExamInfo {
  examName: string;
  icon: string;
  status: "Mandatory" | "Recommended" | "Optional" | "Not Required";
  targetScore: string;
  note: string;
  registrationWindow: string;
  examDate: string;
}

export interface FieldSubjectInfo {
  subject: string;
  importance: "Required" | "Strongly Recommended" | "Helpful";
  note: string;
}

export interface FieldTimelineEvent {
  month: string;
  year: number;
  title: string;
  description: string;
  type: "exam" | "open" | "deadline" | "result" | "visa" | "travel" | "prep";
  urgent: boolean;
}

export interface FieldCountryData {
  country: Country;
  field: string;
  satNeeded: boolean;
  satNote: string;
  exams: FieldExamInfo[];
  subjects: FieldSubjectInfo[];
  timeline: FieldTimelineEvent[];
  topColleges: string[];
  abroadNote: string;
}