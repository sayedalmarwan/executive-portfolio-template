"use client";

import React from "react";
import { ArrowRight, Users, MessageSquare, Compass, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Services() {
  const { services } = PORTFOLIO_DATA;
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users size={22} color="var(--accent-dark)" />,
    MessageSquare: <MessageSquare size={22} color="var(--accent-dark)" />,
    Compass: <Compass size={22} color="var(--accent-dark)" />,
    Award: <Award size={22} color="var(--accent-dark)" />,
  };

  return (
    <section id="services" className="section-padding" style={{ background: "var(--bg-subtle)" }}>
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Programs & Offerings</div>
          <h2 className="section-title">
            Corporate Training &{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Coaching Modules
            </span>
          </h2>
          <p className="section-subtitle">
            High-availability cloud architecture, enterprise AI pipelines, Kubernetes orchestration, and technical leadership advisory.
          </p>
        </div>

        {/* 2x2 Bento Matrix Grid */}
        <div
          ref={cardsRef}
          className="reveal reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {services.map((srv, idx) => (
            <div
              key={srv.id}
              className="neo-card"
              style={{
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "var(--bg-card)",
              }}
            >
              <div>
                {/* Header Strip */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent-light)",
                      border: "var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {iconMap[srv.iconName]}
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--accent-border)",
                      lineHeight: 1,
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <div className="mono-label" style={{ color: "var(--accent-dark)", marginBottom: "0.4rem", fontWeight: 700 }}>
                  {srv.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "var(--ink)",
                    marginBottom: "0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {srv.title}
                </h3>

                <p style={{ color: "var(--ink-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                  {srv.description}
                </p>
              </div>

              <div>
                <h4 className="mono-label" style={{ marginBottom: "0.75rem", color: "var(--ink)" }}>
                  Key Program Deliverables:
                </h4>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem 0", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {srv.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        fontSize: "0.9rem",
                        color: "var(--ink-muted)",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: "var(--accent)",
                        }}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }}>
                  Book Program <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
