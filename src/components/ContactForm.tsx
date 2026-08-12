"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Instagram, MapPin, Send, CheckCircle, AlertCircle, Loader2, Phone } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { submitContactForm } from "@/lib/firebase";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ContactForm() {
  const { personalInfo } = PORTFOLIO_DATA;
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });
  const rightRef = useScrollReveal<HTMLDivElement>({ rootMargin: "0px 0px -40px 0px" });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setFeedbackMessage("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setStatus("success");
        setFeedbackMessage("Thank you! Your message has been received and logged.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMessage("An error occurred. Please email directly.");
      }
    } catch {
      setStatus("error");
      setFeedbackMessage("Failed to send. Please reach out via WhatsApp or email.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-card)",
    border: "var(--border)",
    borderRadius: "var(--radius-sm)",
    padding: "0.8rem 1rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--ink)",
    outline: "none",
    boxShadow: "var(--shadow)",
    transition: "var(--transition)",
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">
            Initiate a{" "}
            <span
              style={{
                background: "var(--accent-light)",
                padding: "0 0.2em",
                borderRadius: "var(--radius-xs)",
                borderBottom: "2px solid var(--accent-border)",
              }}
            >
              Transformative Engagement
            </span>
          </h2>
          <p className="section-subtitle">
            Open for cloud architecture engagements, enterprise AI advisory, systems modernization, and technical leadership coaching globally.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info */}
          <div ref={leftRef} className="reveal-left">
            <p style={{ fontSize: "1.02rem", color: "var(--ink-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
              Directly reach out via email, phone, or WhatsApp to schedule a preliminary consultation or design a custom corporate workshop.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                {
                  icon: <Mail size={18} color="var(--accent-dark)" />,
                  label: "Email Direct",
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: <Phone size={18} color="var(--accent-dark)" />,
                  label: "Primary Advisory Line",
                  value: personalInfo.phoneUAE,
                  href: `tel:${personalInfo.phoneUAE}`,
                },
                {
                  icon: <Phone size={18} color="var(--accent-dark)" />,
                  label: "Direct Mobile / WhatsApp",
                  value: personalInfo.phoneIndia,
                  href: `tel:${personalInfo.phoneIndia}`,
                },
                {
                  icon: <Linkedin size={18} color="var(--accent-dark)" />,
                  label: "LinkedIn Profile",
                  value: "linkedin.com",
                  href: personalInfo.linkedin,
                },
                {
                  icon: <Instagram size={18} color="var(--accent-dark)" />,
                  label: "Instagram Profile",
                  value: "instagram.com",
                  href: personalInfo.instagram,
                },
                {
                  icon: <MapPin size={18} color="var(--accent-dark)" />,
                  label: "Primary Base Hubs",
                  value: personalInfo.location,
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="neo-card"
                  style={{
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--accent-light)",
                      border: "var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="mono-label" style={{ fontSize: "0.7rem" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--ink)",
                          textDecoration: "none",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "var(--ink)",
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Refined Form Card */}
          <div
            ref={rightRef}
            className="neo-card contact-card reveal-right"
            style={{
              padding: "2.5rem",
              background: "var(--bg-card)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "var(--ink)",
                marginBottom: "1.5rem",
              }}
            >
              Send Direct Message
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.25rem" }} className="form-row">
                <div>
                  <label htmlFor="name" className="mono-label" style={{ display: "block", marginBottom: "0.4rem" }}>
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mono-label" style={{ display: "block", marginBottom: "0.4rem" }}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="subject" className="mono-label" style={{ display: "block", marginBottom: "0.4rem" }}>
                  Subject / Organization
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Leadership Workshop Inquiry"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                />
              </div>

              <div style={{ marginBottom: "1.75rem" }}>
                <label htmlFor="message" className="mono-label" style={{ display: "block", marginBottom: "0.4rem" }}>
                  Message & Engagement Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your training objective, target audience size, and preferred location/dates..."
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = ""; }}
                />
              </div>

              {/* Feedback status */}
              {status !== "idle" && status !== "submitting" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "1.5rem",
                    padding: "0.85rem 1rem",
                    border: "var(--border-accent)",
                    borderRadius: "var(--radius-sm)",
                    background: status === "success" ? "var(--accent-light)" : "#FDF2F2",
                    color: status === "success" ? "var(--accent-dark)" : "#9B1C1C",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  {status === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-accent"
                style={{ width: "100%", justifyContent: "center", gap: "0.6rem" }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="spinning-icon" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
