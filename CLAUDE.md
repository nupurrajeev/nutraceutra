# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve production build locally
npm run lint       # ESLint (zero warnings allowed)
```

No test suite is configured.

## Architecture

This is a static marketing website for Nutraceutra (nutraceutra.com), built with React + Vite + Tailwind CSS. It is deployed as a static site via GitHub Pages (see `public/CNAME`).

**Routing**: React Router v6 with a single `<Layout>` wrapper (Navbar + Outlet + Footer). All pages are in `src/pages/` and wrap their content in a Framer Motion `<motion.div>` for page-transition animations via `<AnimatePresence mode="wait">` in `App.jsx`.

**Content**: All website text is centralized in `src/data/content.js`. This is the single source of truth for copy, stats, service descriptions, founder bio, advisory board, patents, publications, and contact info. Pages and sections import named exports from this file. Many fields still contain `[Text — To Be Added]` placeholders — search for `TODO` to find them all.

**Component layers**:
- `src/components/layout/` — Navbar, Footer, Layout shell
- `src/components/sections/` — full-width page sections (Hero, About, Services grid, etc.)
- `src/components/ui/` — reusable primitives (Button, ServiceCard, ScrollReveal, SectionHeading, etc.)

**Scroll animations**: `<ScrollReveal>` wraps any element that should fade/slide in on scroll. It uses variants from `src/hooks/useScrollReveal.js` and accepts a `delay` prop (integer step, not milliseconds).

**Styling**: Tailwind with a custom design system defined in `tailwind.config.js`:
- Colors: `primary` (teal `#0D6E6E`), `secondary` (gold `#C4943D`), `charcoal`, `body-text`, `off-white`
- Fonts: `font-serif` → Playfair Display, `font-sans` → Source Sans 3
- Reusable gradients: `bg-hero-gradient`, `bg-cta-gradient`
- Reusable shadows: `shadow-card`, `shadow-card-hover`, `shadow-gold`
- Utility classes like `section-padding` and `container-max` are defined in `src/index.css`

## Content Editing Guide

All editable content lives in `src/data/content.js`. The key exports are:

| Export | What it controls |
|---|---|
| `siteConfig` | Site name, tagline, URL |
| `pageMeta` | `<title>` and meta description per page |
| `hero` | Hero headline, subheadline, CTA buttons |
| `stats` | Animated stat counters on home page |
| `serviceCards` | Service overview cards (home + services page) |
| `servicesDetail` | Full service descriptions with bullet items |
| `aboutCompany` | About section body and three value pillars |
| `founder` | Founder bio, highlights, photo path, social links |
| `advisoryBoard` | Board member names, roles, credentials, photos |
| `patents` / `publications` / `trademarks` / `books` | Track record page content |
| `contactInfo` | Email, phone, address, social links, Calendly |

**Adding photos**: Set the `photo` field to a path under `public/` (e.g. `"/images/founder.jpg"`) and place the file in `public/images/`. The `initials` field is used as a fallback avatar when `photo` is `null`.

## Deployment

The site deploys to GitHub Pages. The `dist/` folder (output of `npm run build`) is committed and served. `public/CNAME` sets the custom domain to `nutraceutra.com`. `public/404.html` handles client-side routing fallback for direct URL access.
