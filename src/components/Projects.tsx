"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const ALL_CATEGORIES = "All Programs";

export default function Projects() {
  const { programs } = PORTFOLIO_DATA;
  const categories = [ALL_CATEGORIES, ...Array.from(new Set(programs.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

  const filtered = activeCategory === ALL_CATEGORIES
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="section-padding">
      <div className="container">

        {/* Section Header & Filter Tabs */}
        <div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem", marginBottom: "3rem" }}
        >
          <div>
            <div className="section-label">Workshops & Initiatives Index</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Featured Programs{" "}
              <span
                style={{
                  background: "var(--accent-light)",
                  padding: "0 0.2em",
                  borderRadius: "var(--radius-xs)",
                  borderBottom: "2px solid var(--accent-border)",
                }}
              >
                Index
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="btn"
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.82rem",
                    background: isActive ? "var(--accent)" : "var(--bg-card)",
                    color: isActive ? "#FFFFFF" : "var(--ink-muted)",
                    border: isActive ? "1px solid var(--accent-dark)" : "var(--border)",
                    fontWeight: isActive ? 700 : 500,
                    boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow)",
                    transform: isActive ? "translateY(-1px)" : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Spreadsheet Row Index */}
        <ul className="row-index">
          {filtered.map((prog, i) => (
            <li
              key={prog.id}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr auto",
                gap: "2rem",
                alignItems: "start",
                padding: "2rem 1.25rem",
              }}
              className="prog-row"
            >
              {/* Index Indicator */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--accent)",
                  paddingTop: "0.3rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Semantic Content */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--ink)",
                    letterSpacing: "-0.018em",
                    marginBottom: "0.45rem",
                  }}
                >
                  {prog.title}
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: "1rem", maxWidth: "640px" }}>
                  {prog.summary}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {prog.tags.map((tag) => (
                    <span key={tag} className="mono-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Category, Metrics & CTA */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span
                  className="mono-label"
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.7rem",
                    background: "var(--accent-light)",
                    border: "var(--border-accent)",
                    borderRadius: "var(--radius-full)",
                    color: "#92600A",
                    marginBottom: "0.5rem",
                  }}
                >
                  {prog.category}
                </span>
                <time className="mono-label" style={{ display: "block", marginBottom: "0.85rem" }}>
                  {prog.metrics}
                </time>
                <a
                  href="#contact"
                  className="btn btn-lime"
                  style={{ padding: "0.4rem 0.85rem", fontSize: "0.78rem" }}
                >
                  Enquire <ArrowUpRight size={13} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @media (max-width: 750px) {
          :global(.prog-row) {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          :global(.prog-row > div:last-child) {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
