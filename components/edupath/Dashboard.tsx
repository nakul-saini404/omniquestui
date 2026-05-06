"use client";

import { useEffect, useState } from "react";
import type { StudentData } from "@/types/edupath";
import { getAllRecommendedUnis, scoreLabel, COUNTRY_FLAGS } from "@/lib/edupath-data";
import { HeroSection, StatsRow, AIInsight } from "./sections/HeroSection";
import { ScoreSection, TimelineSection } from "./sections/ScoreSection";
import UniversityTabs from "./sections/UniversityTabs";
import { ActionItems, ReadinessProgress } from "./sections/ActionItems";
import ExamGuide from "./sections/ExamGuide";

interface Props {
  data: StudentData;
  onReset: () => void;
}

export default function Dashboard({ data, onReset }: Props) {
  const { name, grade, score, stream, field, countries } = data;

  const predictedFinal = Math.min(100, score + (12 - grade) * 0.8);
  const satEst = Math.round(800 + (score / 100) * 700);
  const uniCount = getAllRecommendedUnis(countries, stream).length;

  const [aiInsight, setAiInsight] = useState<string>("");
  const [insightLoading, setInsightLoading] = useState(true);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const res = await fetch("/api/edupath/insight", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentData: data, predictedFinal, satEst }),
        });
        const json = await res.json();
        const insight: string =
          json.insight ||
          `Based on your Grade ${grade} profile with ${score}% in ${stream}, you're ${scoreLabel(score).toLowerCase()} positioned for ${countries[0]} applications. Focus on maintaining consistency and start your application documents early.`;
        setAiInsight(insight);

        await fetch("/api/edupath/submit-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentData: data,
            aiInsight: insight,
            predictedFinal,
            satEst,
            uniCount,
          }),
        });
      } catch {
        setAiInsight(
          `Based on your Grade ${grade} profile with ${score}% in ${stream}, you're ${scoreLabel(score).toLowerCase()} positioned for ${countries[0]} applications. Focus on consistency and start your documents early.`
        );
      } finally {
        setInsightLoading(false);
      }
    };

    fetchInsight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ep-dashboard">
      {/* TOP NAV */}
      <nav className="ep-topnav">
        <a href="/eduQuest">
          <div className="ep-nav-logo">
            Edu<span>Path</span>
          </div>
        </a>
        <div className="ep-nav-student">
          <div className="ep-avatar">{name.charAt(0).toUpperCase()}</div>
          <div className="ep-nav-info">
            <div className="ep-nav-name">{name}</div>
            <div className="ep-nav-grade">
              Grade {grade} · {stream}
            </div>
          </div>
        </div>
        <button className="ep-btn-reset" onClick={onReset}>
          ← Edit Profile
        </button>
      </nav>

      <div className="ep-main">
        <HeroSection data={data} predictedFinal={predictedFinal} />
        <StatsRow
          score={score}
          predictedFinal={predictedFinal}
          satEst={satEst}
          uniCount={uniCount}
          countries={countries}
        />
        <AIInsight text={aiInsight} loading={insightLoading} />

        <div className="ep-grid-2 ep-mb">
          <ScoreSection
            score={score}
            predictedFinal={predictedFinal}
            satEst={satEst}
            countries={countries}
          />
          {/*
            UPDATED: now passes stream so getCountryAdmissionTimeline
            inside TimelineSection can filter timeline by stream correctly.
            Also passes career (field) for the personalised career pill.
          */}
          <TimelineSection
            grade={grade}
            countries={countries}
            career={field}
            stream={stream}
          />
        </div>

        {/* ── EXAM / SCHOLARSHIP / VISA GUIDE ── */}
        <div className="ep-sec-heading">
          Exams, Scholarships &amp; Visa
          <div className="ep-heading-line" />
        </div>

        <ExamGuide countries={countries} stream={stream} grade={grade} career={field} />

        {/* ── UNIVERSITIES ── */}
        <div className="ep-sec-heading">
          Recommended Universities
          <div className="ep-heading-line" />
        </div>

        <div className="ep-section-card ep-mb">
          <UniversityTabs
            countries={countries}
            stream={stream}
            predictedFinal={predictedFinal}
            grade={grade}
          />
        </div>

        <div className="ep-grid-2 ep-mb">
          <ActionItems grade={grade} score={score} countries={countries} stream={stream} field={field} />
          <ReadinessProgress grade={grade} score={score} />
        </div>
      </div>
    </div>
  );
}