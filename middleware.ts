// middleware.ts  (place in project root, next to next.config.ts)
// ─────────────────────────────────────────────────────────────────────────────
// 301 REDIRECT MAP — Legacy URL → Canonical URL
//
// Purpose: Preserve 100% of link equity and rankings from old WordPress URLs
// when migrating to the new Next.js /sat/[city]/ structure.
//
// SEO Rule: Every old URL that had backlinks or rankings MUST have a 301 here.
// A 404 on an old URL = permanent ranking loss for that page.
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ── Full redirect map: old path → new canonical path ─────────────────────────
const REDIRECT_MAP: Record<string, string> = {
  // ── SAT city pages (WordPress hyphen format → Next.js slug format) ─────────
  "/sat-coaching-classes-delhi":      "/sat/delhi/",
  "/sat-coaching-classes-mumbai":     "/sat/mumbai/",
  "/sat-coaching-classes-gurgaon":    "/sat/gurgaon/",
  "/sat-coaching-classes-jaipur":     "/sat/jaipur/",
  "/sat-coaching-classes-bangalore":  "/sat/bangalore/",
  "/sat-coaching-classes-chennai":    "/sat/chennai/",
  "/sat-coaching-classes-hyderabad":  "/sat/hyderabad/",
  "/sat-coaching-classes-pune":       "/sat/pune/",
  "/sat-coaching-classes-chandigarh": "/sat/chandigarh/",
  "/sat-coaching-classes-noida":      "/sat/noida/",
  "/sat-coaching-classes-lucknow":    "/sat/lucknow/",
  "/sat-coaching-classes-kolkata":    "/sat/kolkata/",
  "/sat-coaching-classes-indore":     "/sat/indore/",
  "/sat-coaching-classes-ahmedabad":  "/sat/ahmedabad/",
  "/sat-coaching-classes-dehradun":   "/sat/dehradun/",
  "/sat-coaching-classes-uae":        "/sat/uae/",
  "/sat-coaching-classes-uk":         "/sat/uk/",
  "/sat-coaching-classes-us":         "/sat/us/",
  "/sat-coaching-classes-singapore":  "/sat/singapore/",
  "/sat-coaching-classes-saudi-arabia": "/sat/saudi-arabia/",
  "/sat-coaching-classes-nigeria":    "/sat/nigeria/",
  "/sat-coaching-classes-mauritius":  "/sat/mauritius/",
  "/sat-coaching-classes-nepal":      "/sat/nepal/",
  "/sat-coaching-classes-sharjah":    "/sat/sharjah/",

  // ── Legacy underscore/alternative formats (common WordPress variations) ─────
  "/sat_delhi":     "/sat/delhi/",
  "/sat_mumbai":    "/sat/mumbai/",
  "/sat_gurgaon":   "/sat/gurgaon/",
  "/sat_jaipur":    "/sat/jaipur/",
  "/sat_bangalore": "/sat/bangalore/",

  // ── Old flat SAT page (if it existed as /sat-coaching/) ───────────────────
  "/sat-coaching":          "/sat/",
  "/sat-coaching/":         "/sat/",
  "/sat-prep":              "/sat/",
  "/sat-preparation":       "/sat/",
  "/sat-preparation-india": "/sat/",

  // ── Old Delhi-specific variants (common with high-traffic WordPress pages) ──
  "/sat-coaching-delhi":           "/sat/delhi/",
  "/sat-preparation-delhi":        "/sat/delhi/",
  "/best-sat-coaching-delhi":      "/sat/delhi/",
  "/sat-coaching-delhi-ncr":       "/sat/delhi/",
  "/sat-coaching-gurgaon":         "/sat/gurgaon/",
  "/sat-coaching-noida":           "/sat/noida/",

  // ── Redirect old contact/about if paths changed ───────────────────────────
  // Uncomment and fill in if your WordPress used different slugs:
  // "/about-us": "/about/",
  // "/contact-us": "/contact/",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip trailing slash for lookup (we'll add it back in the destination)
  const normalised = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;

  const destination = REDIRECT_MAP[normalised] ?? REDIRECT_MAP[pathname];

  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    // 308 is used instead of 301 because Next.js middleware uses HTTP/2 where
    // 301 sometimes gets cached incorrectly. 308 = permanent redirect, method preserved.
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}

// ── Only run middleware on paths that could match old URLs ────────────────────
// This keeps middleware performance impact minimal
export const config = {
  matcher: [
    "/sat-coaching-classes-:path*",
    "/sat-coaching:path*",
    "/sat-prep:path*",
    "/sat-preparation:path*",
    "/best-sat-coaching:path*",
    "/sat_:path*",
  ],
};