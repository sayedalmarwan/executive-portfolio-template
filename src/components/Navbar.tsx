"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Programs", href: "#programs" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { personalInfo } = PORTFOLIO_DATA;
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ") || nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const initials = nameParts.map((n) => n[0]).join("").toUpperCase().slice(0, 2);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = ["hero", "about", "experience", "education", "skills", "programs", "services", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(251, 249, 245, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #E4DDD4" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        transition: "var(--transition)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* Brand Wordmark with Accent Badge */}
        <a
          href="#hero"
          style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}
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
              letterSpacing: "0.02em",
            }}
          >
            {initials}
          </div>
          <span
            className="navbar-brand-name"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            {firstName}{" "}
            {lastName && <span style={{ color: "var(--accent)" }}>{lastName}</span>}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} className="desktop-nav">
          <ul style={{ display: "flex", listStyle: "none", gap: "0.25rem", margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      display: "inline-block",
                      padding: "0.4rem 0.85rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--accent-dark)" : "var(--ink-muted)",
                      background: isActive ? "var(--accent-light)" : "transparent",
                      border: isActive ? "var(--border-accent)" : "1px solid transparent",
                      borderRadius: "var(--radius-sm)",
                      transition: "var(--transition)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--ink)";
                        e.currentTarget.style.background = "var(--bg-subtle)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--ink-muted)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#contact" className="btn btn-accent" style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}>
            Book Workshop <ArrowUpRight size={15} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            display: "none",
            background: "var(--bg-card)",
            border: "var(--border)",
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--shadow)",
            color: "var(--ink)",
            cursor: "pointer",
            padding: "0.4rem 0.55rem",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--bg-card)",
            borderTop: "var(--border)",
            borderBottom: "var(--border)",
            padding: "1.5rem 1.25rem",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    background: "var(--bg-subtle)",
                    border: "var(--border)",
                    borderRadius: "var(--radius-sm)",
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-accent" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMobileOpen(false)}>
            Book Workshop
          </a>
        </div>
      )}

    </header>
  );
}
