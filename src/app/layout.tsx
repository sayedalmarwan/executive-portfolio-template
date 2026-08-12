import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Marcus Vance | Principal Cloud Architect & Enterprise AI Consultant",
  description: "Official portfolio of Marcus Vance — Principal Cloud Architect, Enterprise AI Strategist, and Systems Engineering Consultant specializing in multi-cloud infrastructure, Kubernetes, and enterprise GenAI integration.",
  keywords: [
    "Cloud Architect",
    "Enterprise AI Consultant",
    "AWS Multi-Cloud",
    "Kubernetes Architect",
    "Generative AI Integration",
    "DevSecOps Advisory",
    "Systems Architecture",
  ],
  authors: [{ name: "Marcus Vance", url: "https://executive-portfolio-template.vercel.app/" }],
  openGraph: {
    title: "Marcus Vance | Principal Cloud Architect & Enterprise AI Consultant",
    description: "Architecting Resilient Cloud Infrastructure, Driving Enterprise AI Transformation & Mentoring Engineering Leaders.",
    type: "website",
    locale: "en_US",
    url: "https://executive-portfolio-template.vercel.app/",
    siteName: "Executive Portfolio Template",
    images: [
      {
        url: "https://executive-portfolio-template.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcus Vance — Principal Cloud Architect & Enterprise AI Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Vance | Principal Cloud Architect & Enterprise AI Consultant",
    description: "Architecting Resilient Cloud Infrastructure, Driving Enterprise AI Transformation & Mentoring Engineering Leaders.",
    images: ["https://executive-portfolio-template.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

