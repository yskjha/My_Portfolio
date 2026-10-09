# Yashraj Jha — Software Engineer Portfolio

> Systems & Backend Software Developer Portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Configured for high performance, accessibility, and zero-runtime static deployment.

---

## ⚡ Overview & Positioning

* **Candidate:** Yashraj Jha
* **Role:** Software Engineer – Backend Developer
* **Experience:** ~1 year 9 months (Impact Analytics: Full-time Software Developer & Apprenticeship)
* **Verified Production Highlights:**
  * **40s → 7s** critical SQL query latency reduction (~82.5% improvement)
  * **200+** production tickets delivered across pricing automation tools
  * **0 rollbacks** across 5 major production change requests and 14+ resolved critical bugs

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Systems Blueprint design tokens: `#0D1117` canvas, `#161B22` slate, `#38BDF8` cyan, `#22C55E` emerald)
* **Typography:** `next/font/google` loading `Inter` and `JetBrains Mono` with zero layout shift
* **Icons:** [Lucide React](https://lucide.dev/)
* **SEO & a11y:** Full OpenGraph tags, JSON-LD `Person` structured schema, `robots.txt`, `sitemap.xml`, and WCAG AAA contrast compliance (> 7:1)
* **Architecture:** 100% Server Components by default; client components isolated strictly to interactive micro-actions (`CopyEmailButton`). Zero database, zero CMS, zero backend runtime overhead.

---

## 📁 Repository Structure

```
My_Portfolio/
├── app/
│   ├── globals.css         # Design tokens, resets, accessibility focus rings
│   ├── layout.tsx          # Shared root layout, SEO metadata, JSON-LD schema
│   ├── page.tsx            # Single-page portfolio composition
│   ├── robots.ts           # Dynamic search engine crawler instructions
│   └── sitemap.ts          # XML sitemap configuration
├── components/
│   ├── CopyEmailButton.tsx # 1-click clipboard copy with visual feedback
│   ├── Experience.tsx      # Impact Analytics production timeline & metrics
│   ├── Footer.tsx          # Systems footer with location & direct links
│   ├── Hero.tsx            # Above-the-fold headline & positioning
│   ├── Navbar.tsx          # Sticky 64px header with operational status badge
│   ├── ProjectsShowcase.tsx# Modular architecture showcases & GitHub links
│   ├── SkillsMatrix.tsx    # Categorized skills matrix (Languages, DBs, Cloud, Tools)
│   ├── TelemetryBar.tsx    # 3-column verified production telemetry panel
│   └── Education.tsx       # BITS Pilani credentials and foundational coursework
├── data/
│   ├── education.ts        # Academic background data
│   ├── experience.ts       # Work experience records & verified metrics
│   ├── projects.ts         # Showcase schema (slotted for upcoming backend projects)
│   └── skills.ts           # 5 categorized technical skill domains
├── docs/
│   ├── DESIGN.md           # Systems Blueprint design specification
│   ├── PLAN.md             # Phased implementation roadmap
│   └── PROJECT.md          # Candidate brief & verified facts
├── public/
│   └── Yashraj_Jha_Resume.pdf # Downloadable resume asset
├── next.config.mjs         # Static export configuration
├── package.json            # Scripts & project dependencies
├── tailwind.config.ts      # Custom slate, cyan & emerald tokens
└── tsconfig.json           # Path aliases & compiler options
```

---

## 🚀 Getting Started Locally

### Prerequisites
* Node.js (v18.17+ or v20+ recommended)
* npm (v9+)

### Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Static Export

To generate the optimized static production export:

```bash
npm run build
```

The compiled static site is generated into the `out/` directory with instant static HTML and minimal bundle footprint (< 90 kB total JS).

### Preview the Static Build Locally:

```bash
# Preview via Python's built-in HTTP server:
python3 -m http.server 3000 --directory out

# Or via npx serve:
npx serve out
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the repository on [Vercel](https://vercel.com/).
3. Framework preset will automatically detect Next.js with zero manual configuration needed.

### Option 2: GitHub Pages
1. In repository settings on GitHub, navigate to **Pages**.
2. Select **GitHub Actions** as the source.
3. The static output in `out/` deploys cleanly with standard Next.js static export workflows.

### Option 3: Cloudflare Pages
1. Connect repository in Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `out`

---

## 📄 License & Ownership

© Yashraj Jha. All rights reserved. Metrics and work history verified against production engineering records.
