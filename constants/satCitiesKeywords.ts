
import type { SATCityData } from "./satCities";

// ── 1. Global base — injected into every city ─────────────────────────────────
const GLOBAL_BASE: string[] = [
  // Exam core
  "Digital SAT 2026", "SAT exam 2026", "SAT exam pattern 2026",
  "SAT registration 2026", "SAT test date 2026", "SAT score 2026",
  "Bluebook SAT", "College Board SAT", "SAT adaptive test",
  "SAT Reading Writing", "SAT Math", "SAT 400-1600",
  // Score targets
  "SAT score 1570", "SAT score 1550", "SAT score 1600",
  "SAT 1570 coaching", "how to score 1570 SAT",
  // Preparation
  "SAT online coaching", "SAT preparation", "SAT coaching India",
  "best SAT coaching", "SAT mock test", "SAT practice test",
  "SAT diagnostic test", "SAT study material", "SAT crash course",
  "SAT 1-on-1 coaching", "SAT group coaching", "SAT hybrid coaching",
  "SAT score improvement",
  // EduQuest brand
  "EduQuest SAT", "EduQuest coaching", "EduQuest SAT 2026",
  // Admissions
  "US university admissions", "study in USA from India",
  "study abroad coaching India", "international university admissions",
  "US college application India",
];

// ── 2. Country / region extras ────────────────────────────────────────────────
const INDIA_EXTRAS: string[] = [
  "SAT coaching CBSE students", "SAT coaching IB students",
  "SAT coaching ICSE students", "SAT for Indian students",
  "Digital SAT India", "SAT exam centres India",
  "SAT coaching after 10th", "SAT coaching Grade 11",
  "SAT vs JEE", "SAT alongside IB",
  "merit scholarship USA India",
];

const UAE_EXTRAS: string[] = [
  "SAT coaching Dubai", "SAT coaching Abu Dhabi", "SAT coaching Sharjah",
  "SAT coaching UAE Indian students", "Digital SAT UAE",
  "SAT exam centre Dubai", "GEMS school SAT coaching",
  "DPS Dubai SAT coaching", "merit scholarship USA UAE",
];

const UK_EXTRAS: string[] = [
  "SAT coaching UK Indian students", "SAT alongside A-levels",
  "SAT coaching London", "Digital SAT UK test centres",
  "SAT UK university admissions", "SAT for British curriculum students",
];

const US_EXTRAS: string[] = [
  "SAT coaching Indian-American students", "PSAT NMSQT coaching",
  "SAT coaching New Jersey", "SAT coaching California",
  "SAT coaching Texas", "SAT coaching New York",
  "National Merit SAT", "SAT test optional universities",
];

const SINGAPORE_EXTRAS: string[] = [
  "SAT coaching Singapore American School", "SAT coaching GIIS Singapore",
  "SAT coaching UWC Singapore", "Digital SAT Singapore test centres",
  "SAT IB diploma Singapore",
];

const SAUDI_EXTRAS: string[] = [
  "SAT coaching Riyadh", "SAT coaching Jeddah", "SAT coaching Dammam",
  "Digital SAT Saudi Arabia", "Indian school Riyadh SAT", "SAT KSA",
];

// ── 3. Section-specific long-tails (injected for all cities) ──────────────────
const SECTION_EXTRAS: string[] = [
  // Format / adaptive
  "SAT Module 1 Module 2", "SAT adaptive module hard",
  "SAT Bluebook interface practice", "what is Digital SAT",
  "Digital SAT vs paper SAT", "SAT 2 hours 14 minutes",
  // Sections
  "SAT verbal reasoning tips", "SAT math no calculator",
  "SAT reading comprehension", "SAT evidence based questions",
  "SAT algebra geometry", "SAT advanced math",
  // Coaching process
  "SAT diagnostic framework", "SAT skill cluster targeting",
  "SAT doubt clearing sessions", "SAT batch size 12",
  "SAT 100 hours coaching", "SAT personalised roadmap",
  // Long-tail informational
  "how to prepare for SAT 2026", "SAT preparation timeline",
  "when to start SAT coaching", "SAT coaching Grade 10",
  "is SAT hard for Indian students", "SAT coaching fee India",
  "free SAT diagnostic test", "SAT score calculator",
];

// ── Main export ───────────────────────────────────────────────────────────────

export function buildCityKeywords(data: SATCityData): string[] {
  const { countryCode, keywords } = data;

  let regionExtras: string[] = [];
  if (countryCode === "IN") regionExtras = INDIA_EXTRAS;
  else if (countryCode === "AE") regionExtras = UAE_EXTRAS;
  else if (countryCode === "GB") regionExtras = UK_EXTRAS;
  else if (countryCode === "US") regionExtras = US_EXTRAS;
  else if (countryCode === "SG") regionExtras = SINGAPORE_EXTRAS;
  else if (countryCode === "SA") regionExtras = SAUDI_EXTRAS;

  // Deduplicated merge: city-specific first (highest relevance),
  // then global base, region extras, section extras
  return Array.from(
    new Set([
      ...keywords,
      ...GLOBAL_BASE,
      ...regionExtras,
      ...SECTION_EXTRAS,
    ])
  );
}