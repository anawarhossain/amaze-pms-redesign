# Amaze PMS — Premium Property Management Website

A complete redesign of [amazepms.com](https://www.amazepms.com) — a property management company offering Security, Housekeeping, Technical, Landscaping, Pest Control, Parking, and Help Desk services across India.

Built to demonstrate modern frontend architecture, performance optimization, accessibility compliance, and production-grade React patterns.

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 16 (Turbopack) | App Router, server components, file-based routing, automatic code splitting |
| **UI Library** | React 19 | Concurrent features, compiler optimizations |
| **Language** | TypeScript 5 | Strict mode, full type safety across all components |
| **Styling** | Tailwind CSS 4 | Utility-first, CSS `@theme` directive, zero runtime CSS-in-JS |
| **Animation** | Framer Motion 12 | Declarative spring animations, layout animations, gesture support |
| **Smooth Scroll** | Lenis 1.3 | Lightweight smooth scrolling with easing, Framer Motion integration |
| **Micro-Interactions** | Framer Motion (`useMotionValue`, `useSpring`) | Magnetic buttons, 3D tilt cards, ripple effects — Framer Motion only (no GSAP) |
| **Icons** | Tabler Icons 3.46 | 5000+ SVG icons, tree-shakeable, consistent 24px stroke design |
| **Fonts** | Geist (Vercel) + Geist Mono | Modern, open-source, optimized via `next/font` |
| **Image Optimization** | `sharp` + `next/image` | WebP conversion, lazy loading, responsive srcsets |

### Why This Stack

- **Next.js over CRA/Vite** — Server components reduce client JS, built-in SEO metadata API, file-based routing, Turbopack for fast HMR.
- **Tailwind v4 over styled-components** — Zero runtime, CSS `@theme` for design tokens, smaller bundle, faster DevTools.
- **Framer Motion only (no GSAP)** — Framer Motion's React-native API handles both scroll animations and micro-interactions (spring physics, `useMotionValue`, `AnimatePresence`) without adding GSAP's ~40KB gzip. All interaction effects (magnetic pull, 3D tilt, ripple click) are built with Framer Motion primitives.
- **Lenis + Framer Motion over ScrollMagic** — Lenis normalizes scroll across browsers; Framer Motion handles animation triggers via `useInView` and `useScroll`.
- **Tabler over FontAwesome** — SVG-based (no font loading), tree-shakeable ESM, consistent design system.

---

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── globals.css               # Theme tokens, base reset, animations
│   ├── layout.tsx                # Root layout: metadata, fonts, providers
│   ├── loading.tsx               # Full-screen Loader (≤500ms)
│   ├── page.tsx                  # Home page — all sections
│   ├── careers/page.tsx          # Career listings
│   ├── recruitments/page.tsx     # Recruitment application form
│   └── gallery/page.tsx          # Project photo gallery
├── components/
│   ├── ui/                       # Primitive UI components
│   │   ├── Container.tsx         # Max-width centered wrapper
│   │   ├── SectionWrapper.tsx    # Consistent section padding + bg
│   │   ├── SectionHeading.tsx    # Reusable heading (+ subtitle, alignment)
│   │   ├── Button.tsx            # Primary/secondary/outline variants
│   │   ├── GlassCard.tsx         # Backdrop-blur glassmorphism card
│   │   ├── Badge.tsx             # Tag/chip for labels
│   │   ├── AnimatedCounter.tsx   # Scroll-triggered number counting
│   │   └── Loader.tsx            # Branded splash screen
│   ├── sections/                 # Page sections (each self-contained)
│   │   ├── Navbar.tsx            # Sticky header, glassmorphism, scroll detection, mobile menu
│   │   ├── Hero.tsx              # Full-viewport hero with parallax shapes + MagneticButton CTAs
│   │   ├── TrustedPartners.tsx   # Dual-direction trust badge marquee + stat counters with icons
│   │   ├── About.tsx             # 4-image grid layout, vision/mission, AnimatedCounter metrics
│   │   ├── Services.tsx          # 7-card grid with TiltCard + image backgrounds on hover
│   │   ├── WhyChooseUs.tsx       # 12-card grid with icons + TiltCard hover effects
│   │   ├── Testimonials.tsx      # Client testimonial carousel with auto-advance + dot nav
│   │   ├── Contact.tsx           # CTA banner + glassmorphism form with RippleButton
│   │   └── Footer.tsx            # 5-column accordion, social links, back-to-top
│   ├── animations/               # Reusable animation wrappers
│   │   ├── FadeIn.tsx            # Fade + translateY on scroll
│   │   ├── ScaleIn.tsx           # Scale entrance on scroll
│   │   ├── ParallaxSection.tsx   # Background parallax via useScroll + useTransform
│   │   ├── RevealOnScroll.tsx    # IntersectionObserver trigger (for Lenis compatibility)
│   │   ├── TextReveal.tsx        # Word-level character reveal
│   │   ├── MagneticButton.tsx    # Cursor-follow magnetic pull on hover (useMotionValue + useSpring)
│   │   ├── TiltCard.tsx          # 3D perspective tilt on hover (useMotionValue + rotateX/Y)
│   │   └── RippleButton.tsx      # Ripple circle effect on click (AnimatePresence)
│   ├── SmoothScrollProvider.tsx  # ReactLenis root wrapper
│   └── ScrollProgress.tsx        # Fixed 3px top progress bar
├── lib/
│   ├── constants.ts              # ALL business data (company, services, stats, nav)
│   └── utils.ts                  # cn() — clsx + tailwind-merge
└── hooks/
    └── (future)                  # Custom hooks extracted from sections
```

---

## Features & Implementation Details

### 1. Navigation (`Navbar.tsx`)
- **Glassmorphism** — Transparent at top, `backdrop-blur-lg` with `bg-white/80` on scroll.
- **Scroll-aware** — IntersectionObserver tracks active section, highlights corresponding nav link with animated underline.
- **Mobile hamburger** — Full-screen overlay, all nav items include `handleNavClick` for smooth scroll + menu close.
- **MagneticButton** — Not applied to nav (intentional — nav links use standard underline effect for clarity).

### 2. Hero (`Hero.tsx`)
- **Full viewport** with gradient background (`from-blue-50 via-white to-purple-50`) and radial gradient accents.
- **5 floating shapes** — Parallax depth via `useScroll` + `useTransform` at varying speed multipliers.
- **Staggered entrance** — Heading → subtitle → CTAs with Framer Motion `animate` at increasing delays.
- **MagneticButton CTAs** — "Explore Services" and "Get in Touch" buttons use `useMotionValue` + `useSpring` for cursor-following magnetic pull on hover.

### 3. Trusted Partners & Stats (`TrustedPartners.tsx`)
- **Dual-direction trust badge marquee** — Top row scrolls left, bottom row scrolls right. Each badge shows a real company strength (In-house Services, PAN INDIA, ISO Certified, etc.) with Tabler icon.
- **4 stat counters** — 15000+ Workforce, 200+ Clients, 20M+ Sq.ft Managed, PAN INDIA Presence. Each stat has an icon + hover glow effect on the icon container.
- **AnimatedCounter** — Uses Web Animations API (`Element.animate()`) to count from 0 to target on scroll.
- **No third-party client logos** — Uses company fact badges instead to avoid republishing trademarked IP.

### 4. About Us (`About.tsx`)
- **4-image grid** — Left side shows a 2×2 collage of real company images (aboutimgmobile.webp, about1.webp, Group-99.webp, choose.webp) using `next/image` with `fill` and proper `sizes`.
- **Split layout** — Right side: company description, vision/mission, metrics (Founded 2001 animated, 15000+ Professionals, 200+ Clients).
- **AnimatedCounter** — Founding year (2001) counts up on scroll entry.
- **MagneticButton** — "Get Started With Us" CTA uses cursor-follow magnetic effect.

### 5. Services (`Services.tsx`)
- **7-card responsive grid** — 1-col (mobile) → 2-col (tablet) → 3-col (desktop).
- **TiltCard** — Each card uses `useMotionValue` + spring for 3D perspective tilt (`rotateX`/`rotateY` with `transformPerspective: 800`) on mouse move.
- **Service image backgrounds** — On hover, the matching service image fades in at 15% opacity behind the card content (e.g., security image on Security card).
- **Icon glow** — Icon container gets `shadow-glow` on hover + primary background fill.
- **ScaleIn animation** — Cards stagger in from bottom on scroll enter.

### 6. Why Choose Us (`WhyChooseUs.tsx`)
- **12-card grid** — 1-col (mobile) → 2-col (tablet) → 3-col (desktop), replacing the old timeline layout.
- **Each card** — Relevant Tabler icon, category label (uppercase, primary color), description text.
- **TiltCard** — 3D perspective tilt on hover, matching Services section for consistency.
- **GlassCard** — Each card uses the `GlassCard` component with `hover:shadow-card-hover` + `hover:ring-primary/20`.

### 7. Testimonials (`Testimonials.tsx`)
- **Framer Motion carousel** — `AnimatePresence` with direction-aware slide transitions (left/right).
- **Auto-advance** — 5-second interval, pauses implicitly when user interacts with nav.
- **Manual controls** — Previous/next arrow buttons + animated dot indicators (active dot is wider with `bg-primary`).
- **5-star rating** — Each testimonial shows filled star icons (`IconStar` with `fill-yellow-400`).
- **No client photos** — Text-only to avoid using real client images without permission.

### 8. Contact (`Contact.tsx`)
- **CTA banner** — Gradient background (`from-primary via-primary to-blue-700`) with prominent phone number.
- **Glassmorphism form** — `backdrop-blur-md` with `bg-white/10` for the contact form card.
- **RippleButton** — Submit button uses `AnimatePresence` to spawn ripple circles at click coordinates.
- **Contact info** — Phone, email, address with Tabler icons.
- **Semantic labels** — All form fields have `<label>` elements with `htmlFor`.

### 9. Footer (`Footer.tsx`)
- **5-column grid** — Logo/Socials, Menu, Quick Links, Our Presence, Contact.
- **Accordion on mobile** — Sections collapse with chevron rotation; expanded by default on `md+` via `md:max-h-96 md:opacity-100`.
- **Back-to-top** — Smooth scroll to top with `IconArrowUp`.
- **Copyright** — Dynamic from `COMPANY.copyright` constant.

### 10. Additional Pages
- **`/careers`** — Lists 6 job roles in card grid.
- **`/recruitments`** — Application form (name, email, phone, resume upload) with semantic labels.
- **`/gallery`** — 7 images in responsive grid using `next/image` with lazy loading and WebP.

### 11. Animations & Interactions

| Feature | Implementation |
|---|---|
| Smooth scroll | Lenis with `lerp: 0.08`, `duration: 1.2`, integrated via `<ReactLenis>` root wrapper |
| Section reveals | `FadeIn` / `ScaleIn` using Framer Motion `useInView` with `once: true` |
| Parallax depth | `useScroll` + `useTransform` on hero shapes (5 elements, varying speed multipliers) |
| Scroll progress bar | Fixed top 3px bar driven by `useScroll` → `useSpring` (stiffness 80, damping 20) |
| Magnetic buttons | `useMotionValue` + `useSpring` on Hero CTAs, About CTA — button follows cursor 15% distance from center |
| 3D tilt cards | `useMotionValue` tracks mouse position → spring `rotateX`/`rotateY` with `transformPerspective: 800` |
| Ripple click | `AnimatePresence` spawns expanding circle at click coordinates on Contact submit |
| Carousel slide | `AnimatePresence` with direction-aware `x` transitions for Testimonials |
| Trust badge marquee | Dual-direction CSS `@keyframes marquee/marquee-reverse` with 30s linear infinite |
| Staggered loader | Full-screen splash → fades out in ≤500ms |

### 12. Performance Optimizations

| Technique | Location |
|---|---|
| Code splitting | 6 sections + Footer loaded via `next/dynamic` with loading placeholders |
| Image optimization | All images converted to WebP (quality 80) via `sharp`, `next/image` with `fill` + `sizes` |
| CSS-only animations | Marquee carousel (no JS overhead), noise texture via inline SVG data-URI |
| Zero runtime CSS-in-JS | Tailwind v4 generates styles at build time |
| Font optimization | `next/font` with `display: swap`, subset latin |
| Bundle optimization | Single animation library (Framer Motion only — no GSAP), tree-shakeable Tabler icons |

### 13. Accessibility (WCAG AA)

| Fix | Detail |
|---|---|
| Color contrast | `text-muted-foreground` at `#475569` (6.6:1 ratio against white) |
| Skip navigation | "Skip to content" link visible on focus at page top |
| Heading hierarchy | `SectionHeading` supports `as` prop for correct `<h1>` hierarchy |
| Keyboard navigation | `*:focus-visible` global outline with `2px solid primary` |
| ARIA attributes | Carousel dots have `aria-label="Go to testimonial N"`, `aria-expanded` on accordion buttons |
| Semantic HTML | `<nav>`, `<main>`, `<footer>`, `<section>`, `<button>`, `<label>` throughout |
| Metadata | Canonical URL, viewport, Open Graph, keywords for SEO |

### 14. Responsive Design

| Breakpoint | Adaptations |
|---|---|
| Default (mobile) | Single column, hamburger nav, accordion footer, stacked hero, 1-col grids |
| `sm` (640px) | 2-col service/benefit grids, 2-col gallery |
| `md` (768px) | Footer accordion expands, nav links visible, cards per row increases |
| `lg` (1024px) | 3-col grids, side-by-side about layout, 5-col footer |
| `xl` (1280px) | Max-width container, full hero text scale |

---

## Setup & Development

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
git clone <repo-url>
cd amaze-pms-redesign
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with Turbopack HMR.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Design Decisions

1. **Framer Motion only (no GSAP)** — Framer Motion's `useMotionValue` + `useSpring` handles magnetic buttons and 3D tilt cards with the same declarative API as scroll reveals. Adding GSAP would duplicate scroll-triggered animation capabilities and add ~40KB gzip. The magnetic pull (15% cursor-distance spring) and perspective tilt (`rotateX`/`rotateY` at 800px perspective) are both built with Framer Motion primitives — no refs, no timelines, no second animation library.

2. **Why Tailwind v4 `@theme` over CSS Modules?** — `@theme` generates design tokens as CSS custom properties accessible to both Tailwind utilities AND plain CSS. This eliminates the runtime cost of CSS-in-JS while keeping component-level styling co-located. The `.glass` / `.glass-strong` utility classes and `bg-noise` fractal texture are all plain CSS that reference theme tokens.

3. **Why Lenis for smooth scroll?** — Native `scroll-behavior: smooth` is not customizable (easing, duration). Lenis normalizes scroll behavior across browsers, integrates with Framer Motion via `useScroll`, and provides programmatic `scrollTo` for nav anchor links.

4. **Why AnimatedCounter with `animate()` instead of Framer Motion?** — Using the Web Animations API (`Element.animate()`) keeps it lightweight and avoids TypeScript incompatibility issues with non-number `MotionValue` types.

5. **Code splitting strategy** — All 6 below-the-fold sections (TrustedPartners, About, Services, WhyChooseUs, Testimonials, Contact) plus Footer are dynamically imported via `next/dynamic`. Navbar and Hero remain in the initial bundle for instant above-fold render. The Loader component uses a 500ms timeout to ensure smooth transition.

6. **No third-party client logos** — The original site displays logos of their clients (Tech Mahindra, etc.). Republishing these without permission carries legal risk. Instead, the Trusted Partners section uses trust signal badges (In-house Services, PAN INDIA, ISO Certified) that communicate company strengths without using third-party IP.

7. **Fluid typography** — Headings use `clamp()` for fluid scaling instead of breakpoint-based jumps. Hero: `clamp(2.5rem, 6vw, 4.5rem)` smoothly scales between mobile and desktop without intermediate breakpoints. Combined with the Geist variable font, this gives precise weight control at every viewport.

---

## Assets

| Asset | Source |
|---|---|
| All icons | [@tabler/icons-react](https://tabler.io/icons) — 5000+ stroke SVG icons |
| Fonts | [Geist](https://vercel.com/font) by Vercel — loaded via `next/font` |
| Hero/banner images | Downloaded from `amazepms.com/assets/` — buildingbanner2.webp, physicalsecuritynew.webp, housekeeping.webp, banner4-7.webp, Parking-Management-System.webp |
| About images | Downloaded from `amazepms.com/assets/` — aboutimgmobile.webp, about1.webp, Group-99.webp, choose.webp |
| Logo | Downloaded from `amazepms.com/assets/` — logo.webp |
| Icons (social) | Downloaded from `amazepms.com/assets/` — facebook.webp, instagram.webp, linkedin.webp, tick.webp |
| Gallery images | `public/gallery1.png` through `gallery7.png` — placeholder project photos |
| Hero background | CSS gradient (`from-blue-50 via-white to-purple-50`) + radial gradient accents |
| Noise texture | Inline SVG data-URI fractal noise at 4% opacity |

---

## Deployment

**Live URL:** [https://amaze-pms-redesign-two.vercel.app](https://amaze-pms-redesign-two.vercel.app)

```bash
# Deploy to Vercel
vercel --prod
```

Connected to GitHub for automatic CI/CD. Custom domain and HTTPS configured via Vercel.

**GitHub Repository:** [https://github.com/anawarhossain/amaze-pms-redesign](https://github.com/anawarhossain/amaze-pms-redesign)
