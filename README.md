# Next.js 14 Executive Portfolio Template

This is a sanitized architectural template based on a production website built for a freelance client.

It provides a high-performance, editorial portfolio architecture designed for executive trainers, consultants, leadership coaches, and enterprise professionals.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router Architecture)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling Architecture**: Vanilla CSS with central design tokens, responsive CSS custom properties (`src/app/globals.css`), and component-scoped styling
- **Database / Backend**: [Firebase Firestore](https://firebase.google.com/) (`src/lib/firebase.ts`) for real-time contact form submission with local fallback demo mode
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: [Vercel](https://vercel.com/)

---

## ✨ Key Features & Architecture

- **Centralized Data Model**: All portfolio copy, personal info, services, programs, work experience, education, and stats are decoupled into `/src/data/portfolioData.ts` for single-point editing.
- **Modern Executive Design System**: Clean typography scale, warm alabaster canvas, subtle ambient shadows, status pills, and interactive hover feedback.
- **Real-Time Contact Submissions**: Integrated with Firebase Firestore with zero-config fallback to local demo mode for immediate local development.
- **Smooth Scroll Animations**: Light-weight custom scroll-reveal hooks (`useScrollReveal`) for section reveal transitions.
- **Full SEO & OpenGraph Optimization**: Built-in dynamic Next.js Metadata, Viewport configs, dynamic OpenGraph headers, and structured markup in `src/app/layout.tsx`.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile with glassmorphism navbar and mobile slide-out drawer.

---

## 📂 Project Directory Structure

```
portfolio-template/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system tokens, utilities & CSS variables
│   │   ├── layout.tsx           # Root Next.js HTML & Metadata wrapper
│   │   └── page.tsx             # Main single-page application entry point
│   ├── components/              # Modular component architecture
│   │   ├── Navbar.tsx           # Fixed glass header bar, brand monogram badge, drawer
│   │   ├── Hero.tsx             # H1 headline, status badge, 2x2 stats matrix
│   │   ├── About.tsx            # Facilitation philosophy, pull-quote, core pillars
│   │   ├── Experience.tsx       # Interactive experience timeline and achievements
│   │   ├── Education.tsx        # Academic background & professional certifications
│   │   ├── Skills.tsx           # Competency matrix bento grid with category tabs
│   │   ├── Projects.tsx         # Featured initiatives with filter tabs
│   │   ├── Services.tsx         # Corporate service offerings grid
│   │   ├── ContactForm.tsx      # Contact form & direct communication channels
│   │   └── Footer.tsx           # Footer navigation, social links, back-to-top trigger
│   ├── data/
│   │   └── portfolioData.ts     # CENTRAL DATA SOURCE — All site content & bio
│   └── lib/
│       ├── firebase.ts          # Firestore submission logic with graceful fallback
│       └── useScrollReveal.ts   # Scroll reveal animation hook
├── public/
│   ├── images/                  # Public asset images & placeholders
│   └── og-image.jpg             # OpenGraph social share banner
├── .gitignore                   # Excludes node_modules, build outputs, and env files
├── next.config.js               # Next.js configuration
├── package.json                 # Node dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### 2. Installation
```bash
git clone https://github.com/sayedalmarwan/nextjs-executive-portfolio-template.git
cd nextjs-executive-portfolio-template
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📝 Customizing Site Content

To customize text, contact info, experience items, services, or statistics:
1. Open `src/data/portfolioData.ts`.
2. Update `PORTFOLIO_DATA` object with your details.
3. Save the file — the application UI updates automatically!

---

## 🌐 Deployment

The easiest way to deploy this Next.js project live is using **Vercel**:

1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. (Optional) Set up Environment Variables in Vercel settings for Firebase Firestore:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
4. Click **Deploy**.

---

## 📄 License

MIT License — free to use for personal and commercial portfolio projects.
