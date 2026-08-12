"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useScrollReveal } from "@/lib/useScrollReveal";

const proficiencyLabel = (level: number): string => {
  if (level >= 96) return "Expert";
  if (level >= 90) return "Advanced";
  if (level >= 80) return "Proficient";
  return "Competent";
};

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const headerRef = useScrollReveal();
  const tabsRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -30px 0px" });
  const panelRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -20px 0px" });

  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "3rem" }}>
          <div className="section-label">Competencies & Methodology</div>
          <h2 className="section-title">
            Domain Mastery &{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Facilitation Capabilities
            </span>
          </h2>
          <p className="section-subtitle">
            A structured breakdown of core training programs, leadership frameworks, and behavioral coaching competencies.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div ref={tabsRef} className="reveal" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {skillCategories.map((cat, idx) => {
            const isSelected = selectedCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setSelectedCategoryIndex(idx)}
                className="btn"
                style={{
                  background: isSelected ? "var(--accent)" : "var(--bg-card)",
                  color: isSelected ? "#FFFFFF" : "var(--ink-muted)",
                  border: isSelected ? "1px solid var(--accent-dark)" : "var(--border)",
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: "0.88rem",
                  boxShadow: isSelected ? "var(--shadow-md)" : "var(--shadow)",
                  transform: isSelected ? "translateY(-1px)" : "none",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", opacity: 0.7 }}>0{idx + 1}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skill Category Panel */}
        <div ref={panelRef} className="neo-card reveal-scale" style={{ padding: "2.5rem", background: "var(--bg-card)" }}>
          <div style={{ marginBottom: "2rem", paddingBottom: "1.25rem", borderBottom: "var(--border)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)", marginBottom: "0.35rem" }}>
              {skillCategories[selectedCategoryIndex].title}
            </h3>
            <p style={{ color: "var(--ink-muted)", fontSize: "0.98rem" }}>
              {skillCategories[selectedCategoryIndex].description}
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
            className="skills-grid"
          >
            {skillCategories[selectedCategoryIndex].skills.map((skill) => {
              const prof = proficiencyLabel(skill.level);
              return (
                <div
                  key={skill.name}
                  style={{
                    padding: "1rem 1.25rem",
                    background: "var(--bg-subtle)",
                    border: "var(--border)",
                    borderRadius: "var(--radius-sm)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent-border)"; (e.currentTarget as HTMLDivElement).style.background = "var(--accent-light)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ""; (e.currentTarget as HTMLDivElement).style.background = "var(--bg-subtle)"; }}
                >
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.3rem" }}>
                      {skill.name}
                    </div>
                    <span className="mono-tag">{skill.tag}</span>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--accent-dark)",
                      background: "var(--accent-light)",
                      border: "var(--border-accent)",
                      borderRadius: "var(--radius-full)",
                      padding: "0.2rem 0.65rem",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {prof}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
