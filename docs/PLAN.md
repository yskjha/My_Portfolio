# Portfolio Implementation Plan: Yashraj Jha

**Document Version:** 4.0 (All Phases 1–8 Completed)  
**Target File:** `docs/PLAN.md`  
**Status:** Implementation Complete & Production Build Verified  
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React  

---

## Architecture & Technology Choices

* **Framework:** Next.js (App Router) — server-side generation, instant static rendering (`output: 'export'`), robust image optimization, and first-class SEO metadata.
* **Language & Styling:** TypeScript for strict type safety, Tailwind CSS for token adherence matching **Concept 1: Systems Blueprint** (`#0D1117` canvas, `#161B22` slate panels, `#30363D` borders, `#38BDF8` cyan & `#22C55E` emerald accents).
* **Typography:** `next/font/google` loading `Inter` and `JetBrains Mono` with variable fonts and zero layout shift.
* **Icons:** `lucide-react` (clean, lightweight, accessible SVGs).
* **Architecture Constraint:** Zero backend, zero database, zero CMS, zero auth. Pure static client-side performance deployable on Vercel, GitHub Pages, or Cloudflare Pages.

---

## Phased Implementation Roadmap

### Phase 1: Foundation & Project Setup [COMPLETED]
* **Goal:** Initialize Next.js App Router workspace with TypeScript, Tailwind CSS, and essential dependencies.
* **Status:** Complete. Static export configured in `next.config.mjs`, custom tokens configured in `tailwind.config.ts`.

---

### Phase 2: Design Tokens, Global CSS & Shared Layout [COMPLETED]
* **Goal:** Establish global typography, root CSS custom properties, and base layout.
* **Status:** Complete. `app/layout.tsx`, `app/globals.css`, `components/Navbar.tsx`, and `components/Footer.tsx` verified and compiled.

---

### Phase 3: Hero Section & Production Telemetry [COMPLETED]
* **Goal:** Build the above-the-fold experience delivering immediate credibility.
* **Status:** Complete. Verified metrics (`40s → 7s`, `200+ tickets`, `0 rollbacks`) and 1-click clipboard copy (`yskjhajobs@gmail.com`) implemented in `components/Hero.tsx`, `components/TelemetryBar.tsx`, and `components/CopyEmailButton.tsx`.

---

### Phase 4: Production Experience & Skills Matrix [COMPLETED]
* **Goal:** Detail verified experience at Impact Analytics and structured technical competencies.
* **Status:** Complete. Content separated in `data/experience.ts` and `data/skills.ts`. Rendered via `components/Experience.tsx` and `components/SkillsMatrix.tsx`.

---

### Phase 5: Modular Projects Showcase & Education [COMPLETED]
* **Goal:** Provide an architectural project showcase ready for upcoming backend projects, alongside verified education credentials.
* **Status:** Complete.
  * `data/projects.ts` & `components/ProjectsShowcase.tsx`: Architectural showcase cards ready for upcoming backend projects, featuring direct GitHub link.
  * `data/education.ts` & `components/Education.tsx`: Verified BITS Pilani Hyderabad Campus B.E. Civil Engineering (2020–2024), core CS coursework, DPS, and Podar International credentials.

---

### Phase 6: Contact & Interaction Layer [COMPLETED]
* **Goal:** Streamline recruiter and client inquiry conversion.
* **Status:** Complete.
  * `components/ContactSection.tsx`: Direct mailto trigger and one-click copy button for `yskjhajobs@gmail.com`.
  * Verified external links to LinkedIn (`linkedin.com/in/yskjha`) and GitHub (`github.com/yskjha`).
  * Direct resume download link to `/Yashraj_Jha_Resume.pdf`.
  * Phone number strictly excluded from public web markup.

---

### Phase 7: SEO, OpenGraph & Accessibility Audit [COMPLETED]
* **Goal:** Maximize discoverability and achieve 100% accessibility compliance.
* **Status:** Complete.
  * `app/robots.ts` & `app/sitemap.ts`: Dynamic XML sitemap and search engine crawler instructions.
  * `app/layout.tsx`: OpenGraph metadata, Twitter cards, canonical link, and JSON-LD `Person` schema markup.
  * Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) with accessible focus rings and skip link.

---

### Phase 8: Cross-Device QA, Build Verification & Deployment [COMPLETED]
* **Goal:** Verify production static bundle and provide zero-friction deployment guide.
* **Status:** Complete.
  * `next build` static export succeeded with zero errors (all 6 static pages generated).
  * `README.md` created with local setup and multi-platform deployment instructions (Vercel, GitHub Pages, Cloudflare Pages).
