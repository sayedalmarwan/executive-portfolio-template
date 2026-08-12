"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const { personalInfo, philosophy } = PORTFOLIO_DATA;
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });
  const rightRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="about" className="section-padding">
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "3rem" }}>
          <div className="section-label">About & Facilitation Philosophy</div>
          <h2 className="section-title">
            Human Connection &{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Action-Oriented
            </span>{" "}
            Learning
          </h2>
        </div>

        {/* Two-Column Matrix */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
          className="about-grid"
        >
          {/* Left: Narrative + Warm Quote Block */}
          <div ref={leftRef} className="reveal-left">
            <div
              className="neo-card"
              style={{
                background: "linear-gradient(135deg, var(--accent-light) 0%, #FBF0DC 100%)",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "var(--radius)",
                padding: "1.75rem 2rem",
                marginBottom: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                &ldquo;{philosophy.quotes[0].quote}&rdquo;
              </p>
              <div className="mono-label" style={{ color: "var(--accent-dark)" }}>
                — {philosophy.quotes[0].author} · {philosophy.quotes[0].title}
              </div>
            </div>

            <p style={{ marginBottom: "1.25rem", fontSize: "1.02rem", color: "var(--ink-muted)", fontWeight: 400 }}>
              {personalInfo.bioParagraph1}
            </p>
            <p style={{ marginBottom: "1.75rem", fontSize: "1.02rem", color: "var(--ink-muted)", fontWeight: 400 }}>
              {personalInfo.bioParagraph2}
            </p>

            {/* Authentic Workshop Photo Card */}
            <div
              className="neo-card"
              style={{
                overflow: "hidden",
                background: "var(--bg-card)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image
                  src={personalInfo.presentingImage}
                  alt={`${personalInfo.name} facilitating Workshop`}
                  fill
                  sizes="(max-width: 850px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div className="mono-label" style={{ fontSize: "0.7rem", color: "var(--accent-dark)" }}>CLOUD ARCHITECTURE IN ACTION</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 600, color: "var(--ink)" }}>
                    Enterprise Multi-Cloud Infrastructure & Distributed Systems Blueprint
                  </div>
                </div>
                <Image
                  src={personalInfo.tciBadge}
                  alt="Certified Facilitator Badge"
                  width={36}
                  height={36}
                  style={{ objectFit: "contain", borderRadius: "4px", border: "1px solid #E4DDD4", height: "36px", width: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div ref={rightRef} className="reveal-right">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "var(--ink)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Four Core Pillars
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {philosophy.pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="neo-card"
                  style={{
                    padding: "1.35rem 1.5rem",
                    display: "flex",
                    gap: "1.15rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "var(--radius-sm)",
                      background: i % 2 === 0 ? "var(--accent-light)" : "var(--bg-subtle)",
                      border: "var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      color: "var(--accent-dark)",
                      flexShrink: 0,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--ink-muted)", lineHeight: 1.55 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
