import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Alex Morgan | Corporate Trainer & Executive Leadership Coach",
  description: "Official portfolio of Alex Morgan — Corporate Trainer, Executive Leadership Coach, and Group Facilitator specializing in team building, sales communication, and leadership development.",
  keywords: [
    "Corporate Trainer",
    "Leadership Coach",
    "Executive Coaching",
    "Communication Coach",
    "Team Building",
    "Organizational Psychology",
    "Sales Communication Workshops",
  ],
  authors: [{ name: "Alex Morgan", url: "https://executive-portfolio-template.vercel.app/" }],
  openGraph: {
    title: "Alex Morgan | Corporate Trainer & Executive Leadership Coach",
    description: "Empowering Corporate Teams, Fostering Leadership & Driving Transformation Through Action-Oriented Learning.",
    type: "website",
    locale: "en_US",
    url: "https://executive-portfolio-template.vercel.app/",
    siteName: "Executive Portfolio Template",
    images: [
      {
        url: "https://executive-portfolio-template.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan — Corporate Trainer & Executive Leadership Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Corporate Trainer & Executive Leadership Coach",
    description: "Empowering Corporate Teams, Fostering Leadership & Driving Transformation Through Action-Oriented Learning.",
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

