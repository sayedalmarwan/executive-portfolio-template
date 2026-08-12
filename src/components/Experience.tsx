"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "3rem" }}>
          <div className="section-label">Career History & Leadership</div>
          <h2 className="section-title">
            Track Record of{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Facilitation Impact
            </span>
          </h2>
          <p className="section-subtitle">
            Over 15+ years of progressive leadership spanning corporate training, HR administration, language coaching, and institutional development.
          </p>
        </div>

        {/* Vertical Row Index */}
        <div ref={listRef} className="reveal reveal-stagger" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {experiences.map((exp) => {
            const isOpen = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="neo-card"
                style={{
                  overflow: "hidden",
                  background: "var(--bg-card)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow)",
                }}
              >
                {/* Row Header Button */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : exp.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    background: isOpen ? "var(--accent-light)" : "var(--bg-card)",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.35rem 1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "1.5rem",
                    alignItems: "center",
                    textAlign: "left",
                    transition: "var(--transition)",
                    borderLeft: isOpen ? "3px solid var(--accent)" : "3px solid transparent",
                  }}
                  className="exp-row-btn"
                >
                  {/* Role + Company */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: isOpen ? "var(--accent-dark)" : "var(--ink)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 600, color: "var(--ink-muted)" }}>
                      @ {exp.company}
                    </span>
                  </div>

                  {/* Date, Location & Toggle */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
                    <time className="mono-label" dateTime={exp.period}>{exp.period}</time>
                    <span className="mono-tag">{exp.location}</span>
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "var(--radius-sm)",
                        background: isOpen ? "var(--accent)" : "var(--bg-subtle)",
                        border: "var(--border)",
                        color: isOpen ? "#FFFFFF" : "var(--ink-muted)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease, background 0.2s ease",
                      }}
                    >
                      +
                    </div>
                  </div>
                </button>

                {/* Expandable Detail Panel */}
                {isOpen && (
                  <div
                    style={{
                      padding: "1.75rem 1.5rem",
                      background: "var(--bg-card)",
                      borderTop: "var(--border)",
                    }}
                  >
                    <p style={{ fontSize: "1rem", color: "var(--ink-muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                      {exp.description}
                    </p>

                    <h4 className="mono-label" style={{ color: "var(--ink)", marginBottom: "0.85rem" }}>
                      Key Leadership & Facilitation Deliverables:
                    </h4>

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "0.85rem",
                            fontSize: "0.95rem",
                            color: "var(--ink-muted)",
                            lineHeight: 1.55,
                          }}
                        >
                          <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontWeight: 700, flexShrink: 0 }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.skillsTrained && exp.skillsTrained.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", paddingTop: "1rem", borderTop: "var(--border-light)" }}>
                        {exp.skillsTrained.map((skill) => (
                          <span key={skill} className="mono-tag">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
