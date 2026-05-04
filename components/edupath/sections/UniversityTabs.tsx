"use client";

import { useState } from "react";
import type { Country, Stream } from "@/types/edupath";
import { COUNTRY_FLAGS, getUnisForCountry, calcChance } from "@/lib/edupath-data";

interface Props {
  countries: Country[];
  stream: Stream;
  predictedFinal: number;
}

export default function UniversityTabs({ countries, stream, predictedFinal }: Props) {
  const [activeCountry, setActiveCountry] = useState<Country>(countries[0]);

  const unis = getUnisForCountry(activeCountry, stream);

  return (
    <>
      <div className="ep-tab-bar">
        {countries.map((c) => (
          <button
            key={c}
            className={`ep-tab ${activeCountry === c ? "active" : ""}`}
            onClick={() => setActiveCountry(c)}
          >
            {COUNTRY_FLAGS[c]} {c}
          </button>
        ))}
      </div>

      <div>
        <div className="ep-uni-meta">
          Chance % based on predicted 12th score of{" "}
          <strong style={{ color: "var(--ep-text)" }}>{predictedFinal.toFixed(0)}%</strong>
        </div>

        <div className="ep-uni-list">
          {unis.length === 0 ? (
            <div className="ep-uni-empty">
              No data available for this country/stream combination yet.
            </div>
          ) : (
            unis.map((u, i) => {
              const chance = calcChance(u.req, predictedFinal);
              const satStr = u.sat ? `SAT ${u.sat}+` : "No SAT req.";

              return (
                <div key={i} className="ep-uni-card">
                  <div className="ep-uni-flag">{COUNTRY_FLAGS[activeCountry]}</div>
                  <div className="ep-uni-info">
                    <div className="ep-uni-name">{u.name}</div>
                    <div className="ep-uni-country">
                      {satStr} · Deadline: {u.deadline} · {u.cost}
                    </div>
                  </div>
                  <div className="ep-uni-right">
                    <div className={`ep-uni-chance ${chance.cls}`}>{chance.label}</div>
                    <div className="ep-uni-tier">{u.tier}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}