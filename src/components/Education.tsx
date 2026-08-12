"use client";

import React from "react";
import { GraduationCap, ShieldCheck, Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="section-padding">
      <div className="container">

        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Academics & Credentials</div>
          <h2 className="section-title">
            Education & International{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Certifications
            </span>
          </h2>
          <p className="section-subtitle">
            Master's degree in Psychology combined with TCI Germany Diploma and Outbound Facilitation credentials.
          </p>
        </div>

        {/* Academic Degrees */}
        <div style={{ marginBottom: "4rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--ink)",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "var(--border)",
            }}
          >
            Academic Degrees
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
            {education.map((item) => (
              <div key={item.id} className="neo-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "var(--radius-sm)",
                      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-warm) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      marginBottom: "1.5rem",
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--ink)",
                      marginBottom: "0.4rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.degree}
                  </h4>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--accent)", fontWeight: 700, marginBottom: "1rem" }}>
                    {item.institution}
                  </div>
                  <p style={{ color: "var(--ink-muted)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                    {item.details}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "1rem",
                    borderTop: "var(--border-light)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Calendar size={14} color="var(--accent)" />
                    <time className="mono-label" dateTime={item.period}>{item.period}</time>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <MapPin size={13} color="var(--ink-faint)" />
                    <span className="mono-label">{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem",
              borderBottom: "var(--border)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "var(--ink)",
                margin: 0,
              }}
            >
              Licenses & Global Certifications
            </h3>
            <img
              src="/images/tci-certified-badge.jpeg"
              alt="TCI diploma-holder by Ruth Cohn Institute for TCI-International"
              style={{ height: "42px", objectFit: "contain", borderRadius: "4px", border: "1px solid #E4DDD4" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {certifications.map((cert) => (
              <div key={cert.id} className="neo-card" style={{ padding: "1.75rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.25rem 0.7rem",
                    background: "var(--accent-light)",
                    border: "var(--border-accent)",
                    borderRadius: "var(--radius-full)",
                    marginBottom: "1.1rem",
                  }}
                >
                  <ShieldCheck size={13} color="var(--accent)" />
                  <span className="mono-label" style={{ color: "#92600A", fontSize: "0.68rem" }}>{cert.date}</span>
                </div>

                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, color: "var(--ink)", marginBottom: "0.35rem", lineHeight: 1.25 }}>
                  {cert.title}
                </h4>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 700, color: "var(--accent)", marginBottom: "0.75rem" }}>
                  {cert.issuer}
                </div>
                <p style={{ color: "var(--ink-muted)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {cert.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
