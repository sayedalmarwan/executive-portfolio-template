"use client";

import React from "react";
import { ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const { personalInfo } = PORTFOLIO_DATA;
  const initials = personalInfo.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "var(--bg-subtle)",
        borderTop: "var(--border)",
        padding: "3rem 0 2rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.75rem",
            paddingBottom: "2rem",
            borderBottom: "var(--border-light)",
            marginBottom: "1.75rem",
          }}
        >
          {/* Brand Logo Monogram */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                padding: "0.2rem 0.6rem",
                background: "var(--accent)",
                border: "1px solid var(--accent-dark)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "0.95rem",
                color: "#FFFFFF",
              }}
            >
              {initials}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--ink)",
                }}
              >
                {personalInfo.name.toUpperCase()}
              </div>
              <div className="mono-label" style={{ fontSize: "0.72rem" }}>
                {personalInfo.title}
              </div>
            </div>
          </a>

          {/* Social Links Buttons */}
          <div style={{ display: "flex", gap: "0.65rem" }}>
            {[
              { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: personalInfo.instagram, icon: <Instagram size={18} />, label: "Instagram" },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                className="btn"
                style={{
                  padding: "0.5rem 0.75rem",
                  background: "var(--bg-card)",
                  color: "var(--ink-muted)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-muted)"; }}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn btn-lime"
            style={{
              padding: "0.5rem 1.15rem",
              fontSize: "0.82rem",
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Copyright & Info Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span className="mono-label" style={{ fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} · ALL RIGHTS RESERVED
          </span>
          <span className="mono-label" style={{ fontSize: "0.75rem" }}>
            CORPORATE TRAINER · LEADERSHIP COACH · FACILITATOR
          </span>
        </div>
      </div>
    </footer>
  );
}
