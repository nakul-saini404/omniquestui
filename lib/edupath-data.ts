import type { Country, Stream, University } from "@/types/edupath";

export const COUNTRY_FLAGS: Record<Country, string> = {
  USA: "🇺🇸",
  UK: "🇬🇧",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  Netherlands: "🇳🇱",
  Singapore: "🇸🇬",
  Japan: "🇯🇵",
  India: "🇮🇳",
};

type UniDB = Partial<Record<Stream | "default", University[]>>;

export const UNI_DB: Record<Country, UniDB> = {
  USA: {
    "Science (PCM)": [
      { name: "MIT", tier: "Reach", req: 95, sat: 1560, deadline: "Jan 1", cost: "$58k/yr" },
      { name: "Carnegie Mellon", tier: "Reach", req: 90, sat: 1510, deadline: "Jan 1", cost: "$57k/yr" },
      { name: "Purdue University", tier: "Target", req: 80, sat: 1390, deadline: "Feb 1", cost: "$28k/yr" },
      { name: "UT Austin", tier: "Target", req: 78, sat: 1370, deadline: "Dec 1", cost: "$25k/yr" },
      { name: "Arizona State Univ.", tier: "Safety", req: 65, sat: 1230, deadline: "Mar 1", cost: "$18k/yr" },
    ],
    "Science (PCB)": [
      { name: "Johns Hopkins", tier: "Reach", req: 95, sat: 1550, deadline: "Jan 2", cost: "$59k/yr" },
      { name: "Duke University", tier: "Reach", req: 92, sat: 1530, deadline: "Jan 2", cost: "$60k/yr" },
      { name: "Emory University", tier: "Target", req: 82, sat: 1420, deadline: "Jan 15", cost: "$55k/yr" },
      { name: "Univ. of Florida", tier: "Target", req: 76, sat: 1360, deadline: "Nov 1", cost: "$22k/yr" },
      { name: "Univ. of Arizona", tier: "Safety", req: 65, sat: 1200, deadline: "Mar 1", cost: "$17k/yr" },
    ],
    Commerce: [
      { name: "Wharton (UPenn)", tier: "Reach", req: 95, sat: 1560, deadline: "Jan 5", cost: "$60k/yr" },
      { name: "NYU Stern", tier: "Reach", req: 88, sat: 1500, deadline: "Jan 15", cost: "$57k/yr" },
      { name: "Univ. of Michigan Ross", tier: "Target", req: 82, sat: 1440, deadline: "Feb 1", cost: "$48k/yr" },
      { name: "Indiana University Kelley", tier: "Target", req: 75, sat: 1370, deadline: "Feb 15", cost: "$37k/yr" },
      { name: "Univ. of Nebraska", tier: "Safety", req: 65, sat: 1200, deadline: "Mar 1", cost: "$22k/yr" },
    ],
    default: [
      { name: "University of Michigan", tier: "Reach", req: 88, sat: 1470, deadline: "Feb 1", cost: "$48k/yr" },
      { name: "Univ. of Wisconsin", tier: "Target", req: 80, sat: 1380, deadline: "Feb 1", cost: "$32k/yr" },
      { name: "Univ. of Washington", tier: "Target", req: 78, sat: 1350, deadline: "Jan 15", cost: "$36k/yr" },
      { name: "Ohio State University", tier: "Safety", req: 70, sat: 1280, deadline: "Feb 1", cost: "$28k/yr" },
      { name: "Arizona State Univ.", tier: "Safety", req: 60, sat: 1200, deadline: "Mar 1", cost: "$18k/yr" },
    ],
  },
  UK: {
    "Science (PCM)": [
      { name: "Imperial College London", tier: "Reach", req: 90, sat: null, deadline: "Jan 15", cost: "£35k/yr" },
      { name: "University of Edinburgh", tier: "Target", req: 80, sat: null, deadline: "Jan 15", cost: "£25k/yr" },
      { name: "University of Manchester", tier: "Target", req: 75, sat: null, deadline: "Jan 15", cost: "£23k/yr" },
      { name: "University of Sheffield", tier: "Safety", req: 65, sat: null, deadline: "Jun 30", cost: "£20k/yr" },
    ],
    default: [
      { name: "University College London", tier: "Reach", req: 88, sat: null, deadline: "Jan 15", cost: "£28k/yr" },
      { name: "King's College London", tier: "Target", req: 80, sat: null, deadline: "Jan 15", cost: "£26k/yr" },
      { name: "Univ. of Exeter", tier: "Target", req: 72, sat: null, deadline: "Jun 30", cost: "£20k/yr" },
      { name: "Coventry University", tier: "Safety", req: 60, sat: null, deadline: "Jun 30", cost: "£15k/yr" },
    ],
  },
  Canada: {
    default: [
      { name: "University of Toronto", tier: "Reach", req: 88, sat: null, deadline: "Nov 1", cost: "C$45k/yr" },
      { name: "UBC Vancouver", tier: "Reach", req: 85, sat: null, deadline: "Jan 15", cost: "C$40k/yr" },
      { name: "McGill University", tier: "Target", req: 80, sat: null, deadline: "Jan 15", cost: "C$30k/yr" },
      { name: "University of Waterloo", tier: "Target", req: 78, sat: null, deadline: "Feb 1", cost: "C$32k/yr" },
      { name: "Dalhousie University", tier: "Safety", req: 65, sat: null, deadline: "Mar 1", cost: "C$18k/yr" },
    ],
  },
  Australia: {
    default: [
      { name: "Univ. of Melbourne", tier: "Reach", req: 85, sat: null, deadline: "Oct 31", cost: "A$40k/yr" },
      { name: "UNSW Sydney", tier: "Reach", req: 82, sat: null, deadline: "Oct 31", cost: "A$38k/yr" },
      { name: "Monash University", tier: "Target", req: 75, sat: null, deadline: "Dec 15", cost: "A$33k/yr" },
      { name: "University of Adelaide", tier: "Safety", req: 65, sat: null, deadline: "Jan 31", cost: "A$25k/yr" },
    ],
  },
  Germany: {
    default: [
      { name: "TU Munich", tier: "Reach", req: 90, sat: null, deadline: "May 31", cost: "€500/sem" },
      { name: "LMU Munich", tier: "Target", req: 80, sat: null, deadline: "May 31", cost: "€500/sem" },
      { name: "Heidelberg University", tier: "Target", req: 78, sat: null, deadline: "May 31", cost: "€500/sem" },
      { name: "RWTH Aachen", tier: "Safety", req: 70, sat: null, deadline: "Jun 15", cost: "€300/sem" },
    ],
  },
  Netherlands: {
    default: [
      { name: "Delft University", tier: "Reach", req: 85, sat: null, deadline: "Apr 1", cost: "€10k/yr" },
      { name: "Univ. of Amsterdam", tier: "Target", req: 78, sat: null, deadline: "Apr 1", cost: "€9k/yr" },
      { name: "Leiden University", tier: "Safety", req: 70, sat: null, deadline: "May 1", cost: "€8.5k/yr" },
    ],
  },
  Singapore: {
    default: [
      { name: "NUS Singapore", tier: "Reach", req: 92, sat: null, deadline: "Mar 1", cost: "S$30k/yr" },
      { name: "NTU Singapore", tier: "Reach", req: 88, sat: null, deadline: "Mar 1", cost: "S$28k/yr" },
      { name: "SMU Singapore", tier: "Target", req: 80, sat: null, deadline: "Mar 31", cost: "S$22k/yr" },
    ],
  },
  India: {
    "Science (PCM)": [
      { name: "IIT Bombay (JEE)", tier: "Reach", req: 95, sat: null, deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr" },
      { name: "IIT Delhi (JEE)", tier: "Reach", req: 92, sat: null, deadline: "Jan (JEE Adv)", cost: "₹2.5L/yr" },
      { name: "BITS Pilani", tier: "Target", req: 85, sat: null, deadline: "May (BITSAT)", cost: "₹5L/yr" },
      { name: "VIT University", tier: "Safety", req: 70, sat: null, deadline: "Feb (VITEEE)", cost: "₹2L/yr" },
    ],
    "Science (PCB)": [
      { name: "AIIMS Delhi", tier: "Reach", req: 95, sat: null, deadline: "Nov (NEET)", cost: "₹1L/yr" },
      { name: "CMC Vellore", tier: "Reach", req: 90, sat: null, deadline: "Apr (NEET)", cost: "₹3L/yr" },
      { name: "Kasturba Medical", tier: "Target", req: 80, sat: null, deadline: "Apr (NEET)", cost: "₹4L/yr" },
    ],
    Commerce: [
      { name: "SRCC Delhi", tier: "Reach", req: 96, sat: null, deadline: "Jun (CUET)", cost: "₹50k/yr" },
      { name: "LSR Delhi", tier: "Target", req: 92, sat: null, deadline: "Jun (CUET)", cost: "₹50k/yr" },
      { name: "Christ University", tier: "Safety", req: 80, sat: null, deadline: "Mar", cost: "₹1.5L/yr" },
    ],
    default: [
      { name: "St. Stephen's College", tier: "Reach", req: 95, sat: null, deadline: "Jun (CUET)", cost: "₹60k/yr" },
      { name: "Presidency University", tier: "Target", req: 85, sat: null, deadline: "Jun (CUET)", cost: "₹70k/yr" },
      { name: "Ashoka University", tier: "Target", req: 80, sat: null, deadline: "Jan", cost: "₹8L/yr" },
    ],
  },
  Japan: {
    default: [
      { name: "University of Tokyo", tier: "Reach", req: 90, sat: null, deadline: "Oct 31", cost: "¥600k/yr" },
      { name: "Waseda University", tier: "Target", req: 80, sat: null, deadline: "Nov 15", cost: "¥1.4M/yr" },
      { name: "Ritsumeikan Univ.", tier: "Safety", req: 70, sat: null, deadline: "Dec 1", cost: "¥1.1M/yr" },
    ],
  },
};

export function getUnisForCountry(country: Country, stream: Stream): University[] {
  const db = UNI_DB[country];
  if (!db) return [];
  return (db[stream] ?? db["default"] ?? []).map((u) => ({ ...u, country }));
}

export function getAllRecommendedUnis(countries: Country[], stream: Stream): University[] {
  return countries.flatMap((c) => getUnisForCountry(c, stream));
}

export function calcChance(uniReq: number, score: number) {
  const diff = score - uniReq;
  if (diff >= 10) return { label: `${Math.min(90, 70 + diff)}%`, cls: "high" as const };
  if (diff >= 0) return { label: `${50 + diff * 2}%`, cls: "medium" as const };
  if (diff >= -10) return { label: `${Math.max(15, 45 + diff * 2)}%`, cls: "medium" as const };
  return { label: `${Math.max(5, 30 + diff * 1.5).toFixed(0)}%`, cls: "low" as const };
}

export function scoreLabel(s: number): string {
  if (s >= 90) return "Excellent";
  if (s >= 80) return "Strong";
  if (s >= 70) return "Good";
  if (s >= 60) return "Average";
  return "Needs work";
}