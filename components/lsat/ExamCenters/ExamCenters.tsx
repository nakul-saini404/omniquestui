"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExamCenters.module.css";

/* ── Types ── */
interface Center {
  city: string;
  venue: string;
  address: string;
  type: "Prometric" | "University" | "Testing Partner";
}

interface Country {
  name: string;
  flag: string;
  region: string;
  note?: string;
  centers: Center[];
}

/* ── Data — sourced from Prometric / LSAC official listings ── */
const countries: Country[] = [
  {
    name: "India",
    flag: "🇮🇳",
    region: "Asia Pacific",
    centers: [
      { city: "New Delhi", venue: "Prometric Testing Center – Gurgaon", address: "DLF Cyber City, Phase II, Gurgaon, Haryana 122002", type: "Prometric" },
      { city: "Mumbai",    venue: "Prometric Testing Center – Mumbai",  address: "Express Towers, Nariman Point, Mumbai 400021",    type: "Prometric" },
      { city: "Bangalore", venue: "Alliance University",                address: "19th Cross, 7th Main, BTM 2nd Stage, Bengaluru 560076", type: "University" },
      { city: "Chennai",   venue: "Prometric Testing Center – Chennai", address: "Anna Salai, Teynampet, Chennai 600018",           type: "Prometric" },
      { city: "Hyderabad", venue: "Prometric Testing Center – Hyderabad", address: "Banjara Hills, Hyderabad 500034",              type: "Prometric" },
      { city: "Kolkata",   venue: "Prometric Testing Center – Kolkata", address: "Park Street, Kolkata 700016",                    type: "Prometric" },
      { city: "Ahmedabad", venue: "LJ Institute – SG Highway Campus",  address: "SG Highway, Sanand–Sarkhej Circle, Ahmedabad 382210", type: "University" },
    ],
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    region: "Asia Pacific",
    centers: [
      { city: "Sydney",    venue: "ITIC Pty Ltd",      address: "Level 3, 321 Pitt St, Sydney NSW 2000",          type: "Testing Partner" },
      { city: "Melbourne", venue: "ITFutures",          address: "Suite 5, Level 1, 424 St Kilda Rd, Melbourne VIC 3004", type: "Testing Partner" },
      { city: "Perth",     venue: "Prometric – Perth",  address: "Level 2, 111 St Georges Terrace, Perth WA 6000", type: "Prometric" },
    ],
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    centers: [
      { city: "London",    venue: "Pearson Professional Centers – London", address: "6th Floor, 190 High Holborn, London WC1V 7BH",   type: "Prometric" },
      { city: "Manchester", venue: "Pearson Professional Centers – Manchester", address: "1 Piccadilly Place, Manchester M1 3BN", type: "Prometric" },
      { city: "Edinburgh", venue: "Pearson Professional Centers – Edinburgh", address: "58 Morrison St, Edinburgh EH3 8BP",         type: "Prometric" },
    ],
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    centers: [
      { city: "Berlin",  venue: "Prometric Testing Center – Berlin",  address: "Kurfürstendamm 196, 10707 Berlin",          type: "Prometric" },
      { city: "Hamburg", venue: "Prometric Testing Center – Hamburg", address: "Stephansplatz 10, 20354 Hamburg",           type: "Prometric" },
      { city: "Munich",  venue: "Prometric Testing Center – Munich",  address: "Maximilianstrasse 35, 80539 München",       type: "Prometric" },
    ],
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    centers: [
      { city: "Toronto",   venue: "Prometric – Toronto Downtown", address: "1 Dundas St W, Suite 2500, Toronto ON M5G 1Z3", type: "Prometric" },
      { city: "Vancouver", venue: "Prometric – Vancouver",        address: "808 Nelson St, Suite 1060, Vancouver BC V6Z 2H2", type: "Prometric" },
      { city: "Montreal",  venue: "Prometric – Montreal",         address: "1000 De La Gauchetière W, Montreal QC H3B 4W5",  type: "Prometric" },
      { city: "Calgary",   venue: "Prometric – Calgary",          address: "255 5 Ave SW, Suite 200, Calgary AB T2P 3G6",    type: "Prometric" },
    ],
  },
  {
    name: "China",
    flag: "🇨🇳",
    region: "Asia Pacific",
    note: "Remote-only testing for Mainland China (2024–2025 cycle).",
    centers: [
      { city: "Beijing",  venue: "Raycom InfoTech Park", address: "Unit 407, Tower A, No. 2 Kexueyuan Nanlu, Haidian, Beijing 100190", type: "Prometric" },
      { city: "Shanghai", venue: "Prometric – Shanghai", address: "688 Yan'an Rd E, Huangpu District, Shanghai 200001",                type: "Prometric" },
      { city: "Chengdu",  venue: "Prometric – Chengdu",  address: "No. 1 South Renmin Rd, Chengdu, Sichuan 610000",                   type: "Prometric" },
      { city: "Wuhan",    venue: "Prometric – Wuhan",    address: "269 Lumo Rd, Wuchang District, Wuhan 430070",                      type: "Prometric" },
    ],
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia Pacific",
    centers: [
      { city: "Tokyo", venue: "Prometric – Tokyo Shinjuku",  address: "Shinjuku NS Building, 2-4-1 Nishi-Shinjuku, Tokyo 163-0820", type: "Prometric" },
      { city: "Osaka", venue: "Prometric – Osaka Umeda",     address: "Grand Front Osaka Tower B, 3-1 Ofukacho, Kita-ku, Osaka 530-0011", type: "Prometric" },
    ],
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    region: "Asia Pacific",
    centers: [
      { city: "Singapore", venue: "Prometric – Singapore", address: "1 Harbourfront Ave, #14-07 Keppel Bay Tower, Singapore 098632", type: "Prometric" },
    ],
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    region: "Asia Pacific",
    centers: [
      { city: "Seoul", venue: "Prometric – Seoul Mapo", address: "Mapo-daero 122, Mapo-gu, Seoul 04213", type: "Prometric" },
    ],
  },
  {
    name: "Pakistan",
    flag: "🇵🇰",
    region: "Asia Pacific",
    centers: [
      { city: "Islamabad", venue: "Prometric – Islamabad", address: "Fazl-ul-Haq Rd, Blue Area, Islamabad 44000", type: "Prometric" },
      { city: "Karachi",   venue: "Prometric – Karachi",   address: "Plot 32-C, Lane 5, Zamzama Commercial, DHA Phase 5, Karachi 75500", type: "Prometric" },
      { city: "Lahore",    venue: "Prometric – Lahore",    address: "3rd Floor, Hafeez Center, Gulberg III, Lahore 54000", type: "Prometric" },
    ],
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    region: "Middle East & Africa",
    centers: [
      { city: "Dubai",     venue: "Prometric – Dubai",     address: "Office 301, API World Tower, Sheikh Zayed Rd, Dubai", type: "Prometric" },
      { city: "Abu Dhabi", venue: "Prometric – Abu Dhabi", address: "Al Muhairy Centre, Zayed the First St, Abu Dhabi",    type: "Prometric" },
    ],
  },
  {
    name: "France",
    flag: "🇫🇷",
    region: "Europe",
    centers: [
      { city: "Paris", venue: "Prometric – Paris", address: "8 Rue de l'Hôtel de Ville, 75004 Paris", type: "Prometric" },
    ],
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    region: "Latin America",
    centers: [
      { city: "São Paulo",       venue: "Assoc. Alumni – Vila Nova Conceição", address: "Rua Afonso Braz 518, São Paulo 04511-001",          type: "Testing Partner" },
      { city: "Rio de Janeiro",  venue: "IBEU",                                address: "Av. N.S de Copacabana 690/903, Rio 22050-001",       type: "Testing Partner" },
      { city: "Brasília",        venue: "Casa Thomas Jefferson",                address: "EQSW 301/302 – Lote 02, Brasília 70673-150",        type: "Testing Partner" },
    ],
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia Pacific",
    centers: [
      { city: "Kuala Lumpur", venue: "Prometric – Kuala Lumpur", address: "Menara Maxis, KLCC, Kuala Lumpur 50088", type: "Prometric" },
    ],
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Asia Pacific",
    centers: [
      { city: "Auckland", venue: "Prometric – Auckland", address: "Level 3, 8 Whitaker Place, Grafton, Auckland 1023", type: "Prometric" },
    ],
  },
];

const regions = ["All Regions", "Asia Pacific", "Europe", "North America", "Middle East & Africa", "Latin America"];

const typeColor: Record<Center["type"], string> = {
  "Prometric":      styles.badgePrometric,
  "University":     styles.badgeUniversity,
  "Testing Partner": styles.badgePartner,
};

/* ── Component ── */
export default function ExamCenters() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("All Regions");
  const [search, setSearch] = useState<string>("");
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.in); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    if (headerRef.current) io.observe(headerRef.current);
    if (bodyRef.current)   io.observe(bodyRef.current);
    return () => io.disconnect();
  }, []);

  const filteredCountries = countries.filter((c) => {
    const matchRegion  = regionFilter === "All Regions" || c.region === regionFilter;
    const matchSearch  = c.name.toLowerCase().includes(search.toLowerCase());
    return matchRegion && matchSearch;
  });

  const active = countries.find((c) => c.name === selectedCountry) ?? null;

  return (
    <section className={styles.section} id="exam-centers">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={`${styles.reveal} ${styles.headerWrap}`} ref={headerRef}>
          <div className={styles.secLabel}>LSAT Test Centers</div>
          <h2 className={styles.heading}>
            Find an <em>Exam Center</em> Near You
          </h2>
          <p className={styles.sub}>
            LSAT is administered at Prometric digital testing centers worldwide. Select your country to view available test centers.
          </p>
        </div>

        {/* ── Controls ── */}
        <div className={`${styles.controls} ${styles.reveal}`} ref={bodyRef}>

          {/* Search */}
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search country…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setSelectedCountry(""); }}
            />
          </div>

          {/* Region filter pills */}
          <div className={styles.pills}>
            {regions.map((r) => (
              <button
                key={r}
                className={`${styles.pill} ${regionFilter === r ? styles.pillActive : ""}`}
                onClick={() => { setRegionFilter(r); setSelectedCountry(""); }}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Country dropdown grid */}
          <div className={styles.countryGrid}>
            {filteredCountries.map((c) => (
              <button
                key={c.name}
                className={`${styles.countryBtn} ${selectedCountry === c.name ? styles.countryBtnActive : ""}`}
                onClick={() => setSelectedCountry(selectedCountry === c.name ? "" : c.name)}
              >
                <span className={styles.countryFlag}>{c.flag}</span>
                <span className={styles.countryName}>{c.name}</span>
                <span className={styles.countryCount}>{c.centers.length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Centers panel ── */}
        {active && (
          <div className={styles.centersPanel}>

            {/* Panel header */}
            <div className={styles.panelHead}>
              <div className={styles.panelTitle}>
                <span className={styles.panelFlag}>{active.flag}</span>
                <div>
                  <h3 className={styles.panelCountry}>{active.name}</h3>
                  <span className={styles.panelRegion}>{active.region}</span>
                </div>
              </div>
              <span className={styles.panelTotal}>{active.centers.length} center{active.centers.length !== 1 ? "s" : ""}</span>
            </div>

            {/* Notice if any */}
            {active.note && (
              <div className={styles.panelNotice}>
                <span>⚠️</span> {active.note}
              </div>
            )}

            {/* Center cards */}
            <div className={styles.centerGrid}>
              {active.centers.map((ctr, i) => (
                <div key={i} className={styles.centerCard}>
                  <div className={styles.centerTop}>
                    <div className={styles.cityDot} aria-hidden="true" />
                    <span className={styles.cityName}>{ctr.city}</span>
                    <span className={`${styles.typeBadge} ${typeColor[ctr.type]}`}>{ctr.type}</span>
                  </div>
                  <div className={styles.venueName}>{ctr.venue}</div>
                  <div className={styles.venueAddr}>📍 {ctr.address}</div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Empty state */}
        {!active && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🌍</div>
            <p>Select a country above to view its LSAT test centers.</p>
          </div>
        )}

        {/* ── Source note ── */}
        <p className={styles.sourceNote}>
          Centers administered via <strong>Prometric</strong> digital testing network on behalf of LSAC. Seat availability varies by administration.{" "}
          <a href="https://tcs.lsac.org/SearchCenter.aspx" target="_blank" rel="noreferrer" className={styles.sourceLink}>
            Search all centers on LSAC →
          </a>
        </p>

      </div>
    </section>
  );
}