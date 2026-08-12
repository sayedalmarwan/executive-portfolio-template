"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Mail, Phone, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
  const { personalInfo } = PORTFOLIO_DATA;
  const cardRef = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "4rem",
            alignItems: "center",
            paddingTop: "3.5rem",
            paddingBottom: "4.5rem",
          }}
          className="hero-grid"
        >
          {/* ── LEFT: Headline Anchor ── */}
          <div>
            {/* Status Availability Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.95rem",
                background: "var(--accent-light)",
                border: "var(--border-accent)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                color: "#92600A",
                marginBottom: "1.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <ShieldCheck size={14} color="#C58B39" />
              <span>{personalInfo.status}</span>
            </div>

            {/* H1 Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5.2vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                color: "var(--ink)",
                marginBottom: "1.5rem",
              }}
            >
              Empowering Teams,{" "}
              <span
                style={{
                  background: "var(--accent-light)",
                  padding: "0.05em 0.25em",
                  borderRadius: "var(--radius-xs)",
                  borderBottom: "2px solid var(--accent-border)",
                  display: "inline",
                }}
              >
                Fostering Leadership
              </span>{" "}
              Across Global Markets
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.1rem",
                color: "var(--ink-muted)",
                lineHeight: 1.65,
                maxWidth: "600px",
                marginBottom: "2.25rem",
                fontWeight: 400,
              }}
            >
              {personalInfo.tagline}. Over 15+ years of experience blending Theme-Centered Interaction (TCI Germany), MSc Psychology, and Outbound Facilitation across UAE, Uzbekistan, and India.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.75rem" }}>
              <a href="#contact" className="btn btn-accent">
                Book Training Engagement <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn btn-lime">
                Explore Programs
              </a>
            </div>

            {/* Direct Connection Strip */}
            <div
              style={{
                borderTop: "var(--border-light)",
                paddingTop: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <span className="mono-label">Direct Contact:</span>
              <div style={{ display: "flex", gap: "0.65rem" }}>
                {[
                  { href: personalInfo.linkedin, icon: <Linkedin size={17} />, label: "LinkedIn" },
                  { href: personalInfo.instagram, icon: <Instagram size={17} />, label: "Instagram" },
                  { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />, label: "Email" },
                  { href: `tel:${personalInfo.phoneUAE}`, icon: <Phone size={17} />, label: "UAE Call" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={item.label}
                    className="btn"
                    style={{ padding: "0.5rem 0.65rem", color: "var(--ink-muted)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-muted)"; }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Credential Block ── */}
          <aside
            ref={cardRef as React.RefObject<HTMLElement>}
            className="neo-card reveal-scale"
            style={{ overflow: "hidden" }}
          >
            {/* Executive Profile Portrait Header */}
            <div
              style={{
                position: "relative",
                height: "280px",
                overflow: "hidden",
                borderBottom: "var(--border)",
              }}
            >
              <Image
                src={personalInfo.heroImage}
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 20%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(20,20,20,0.85) 0%, transparent 100%)",
                  padding: "1.5rem 1.25rem 1rem 1.25rem",
                  color: "#FFFFFF",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {personalInfo.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent-light)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginTop: "0.15rem",
                  }}
                >
                  {personalInfo.title}
                </div>
              </div>
            </div>

            {/* 2×2 Stats Matrix */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "1.25rem 1rem",
                    borderBottom: i < 2 ? "var(--border)" : "none",
                    borderRight: i % 2 === 0 ? "var(--border)" : "none",
                    textAlign: "center",
                    background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="mono-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Key Credential Rows */}
            {[
              { label: "Qualification", value: "MSc Psychology" },
              { label: "Methodology", value: "TCI Germany" },
              { label: "Primary Hubs", value: "Dubai & Kerala" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.85rem 1.25rem",
                  borderTop: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <span className="mono-label">{row.label}</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </div>

    </section>
  );
}
