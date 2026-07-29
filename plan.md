# Amaze PMS Redesign - Implementation Plan

## Overview
Redesign [amazepms.com](https://www.amazepms.com) into a premium, modern, interactive website using **Next.js 16 + React 19 + TypeScript + Tailwind CSS 4**. The original site is a property management company offering Security, Housekeeping, Technical, Landscaping, Pest Control, Parking, and Help Desk services.

---

## Phase 0: Content Audit

Before writing any code, audit the live site to extract accurate business content into `src/lib/constants.ts`:

- **Company info:** full name, tagline, phone, email, address, founding year, group name, founder
- **Services list:** all 7 service titles and their descriptions
- **Stats:** workforce count (15000+), clients (200+), area managed (20M+ Sq.ft), PAN INDIA presence
- **Why Choose Us:** all 12+ unique selling points from the original site
- **Nav & Footer links:** match the original site structure exactly
- **Presence locations:** Telangana, Andhra Pradesh, Karnataka, Tamilnadu, Odisha

Having accurate source data prevents mismatches between the redesign and the actual business info.

---

## Phase 1: Project Foundation & Architecture

### 1.1 Dependencies Installation
- **Animation:** `framer-motion`, `lenis` (smooth scroll) — GSAP dropped (bundle overlap; Framer Motion + Lenis suffice)
- **UI Helpers:** `@tabler/icons-react` (icon set), `clsx` + `tailwind-merge` (cn utility)
- **Fonts:** Inter or Poppins via next/font (alongside existing Geist)

### 1.2 Folder Structure Refinement
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animations/     # ScrollTrigger, FadeIn, Parallax wrappers
│   ├── sections/       # Hero, About, Services, Stats, Contact, Footer
│   └── ui/             # Button, Card, Badge, Container, GlassCard
├── hooks/              # useSmoothScroll, useInView, useMousePosition
└── lib/
    ├── constants.ts    # Company info, services data, stats
    └── utils.ts        # cn() classname utility
```

### 1.3 Global Styles & Theme
- Define CSS custom properties in `globals.css` for colors, glassmorphism, shadows
- Set up dark/light theme tokens using Tailwind v4 `@theme` directive
- Base reset: smooth scroll behavior, font smoothing

### 1.4 Layout & Metadata
- Update `layout.tsx` metadata (title: "Amaze PMS - Premium Property Management Solutions")
- Integrate Lenis smooth scroll provider at the layout level
- Add SEO meta tags

---

## Phase 2: UI Component Library

### 2.1 Utility Components
| Component | Purpose |
|-----------|---------|
| `Container` | Max-width centered wrapper |
| `SectionWrapper` | Consistent section padding with optional ID, bg variant |
| `GlassCard` | Glassmorphism card with backdrop-blur |
| `SectionHeading` | Reusable heading with accent decoration |
| `Button` | Primary/secondary/outline variants with hover micro-interactions |
| `Badge` | Tag/chip for stats and labels |
| `AnimatedCounter` | Number counter for stats section |
| `Loader` | Full-screen initial loading / splash animation |

### 2.2 Animation Components
| Component | Tech | Purpose |
|-----------|------|---------|
| `FadeIn` | Framer Motion | Staggered fade-up on scroll |
| `ScaleIn` | Framer Motion | Scale entrance effect |
| `ParallaxSection` | Framer Motion | Background parallax scroll |
| `RevealOnScroll` | IntersectionObserver | Trigger animations when in viewport |
| `TextReveal` | Framer Motion | Character/word level entrance |

---

## Phase 3: Sections Implementation

### 3.1 Navigation (Sticky Header)
- Transparent → solid on scroll with backdrop-blur glass effect
- Logo + nav links: Home, About, Services, Trusted Partners, Careers, Contact
- Mobile hamburger with full-screen overlay menu
- Active section highlight on scroll (IntersectionObserver)

### 3.2 Hero Section
- Full-viewport, bold typography headline
- Animated gradient/subtle particle background
- CTA buttons: "Explore Services", "Get in Touch"
- Floating decorative elements with parallax
- Slogan: *"A one stop solutions for all your property management needs"*

### 3.3 Trusted Partners / Stats Bar
- Marquee-style logo carousel of client logos
- Stats: 15000+ Workforce, 200+ Clients, 20M+ Sq.ft Managed, PAN INDIA Presence
- Animated counters on scroll

### 3.4 About Us
- Split layout: image/graphic left, content right
- About the company (ACTION Group, founded 2001, 15000+ professionals)
- Vision/Mission statement
- "Get Started" CTA link

### 3.5 Services Section
- Grid of service cards: Security, Housekeeping, Technical, Landscaping, Pest Control, Parking, Help Desk
- Each card: icon, title, short description, hover expansion effect
- "View All Services" link

### 3.6 Why Choose Us (Benefits)
- Timeline/list of 12+ unique selling points (Inhouse services, Training, Audits, AMC, Staff Welfare etc.)
- Alternating layout with icons
- Icons with hover glow effect

### 3.7 CTA / Contact Strip
- Bold banner: "Call Us For Our Services" with phone number
- Gradient background with subtle animation
- Glassmorphism contact form (name, email, phone, message)

### 3.8 Footer
- Multi-column: Company Info, Menu, Quick Links, Our Presence, Contact
- Social links placeholder
- Copyright notice
- Back-to-top button

### 3.9 Additional Pages (Optional)
- **/careers** — Career listings and application CTA (separate page)
- **/recruitments** — Recruitment process, openings, and form (separate page)
- **/gallery** — Image gallery showcasing projects and operations (separate page)

> **Note:** These pages are optional — implement only if time permits after the core Home page and all required sections are complete. The 48-hour deadline makes the Home page the priority.

---

## Phase 4: Animations & Interactions

### 4.1 Scroll Animations
- **Lenis** smooth scroll with easing
- **Framer Motion `useInView`** staggered reveals for all sections
- **Parallax** on hero background and decorative elements
- **Progress bar** or scroll indicator

### 4.2 Micro Interactions
- Button hover: scale + shadow lift
- Card hover: translateY + glow border
- Nav link underline slide effect
- Service card: icon rotate + detail expansion on hover
- Stat counter animation on scroll enter

### 4.3 Page Load Animation
- `Loader` component: full-screen branded splash with fade-out → main content reveal
- **Must stay short (≤500ms)** to avoid hurting the 90+ Lighthouse Performance target (Phase 7.2)
- Sequential staggered entrance of sections
- Navbar entrance delay

---

## Phase 5: Responsive Design

### 5.1 Breakpoints
- Mobile-first approach
- Tailwind breakpoints: sm (640), md (768), lg (1024), xl (1280), 2xl (1536)

### 5.2 Adaptations
- Hero: stack text & CTA vertically on mobile
- Services: 1-col → 2-col → 3-col grid
- About: stack image & text on mobile
- Footer: collapse columns to accordion on mobile
- Navigation: hamburger menu on mobile

---

## Phase 6: Performance Optimization

### 6.1 Images & Assets
- Use `next/image` for all images with lazy loading
- Convert graphics to WebP format
- Optimize hero background (low-res placeholder, high-res on load)

### 6.2 Code Splitting
- Lazy-load heavy animation components with `next/dynamic`
- Defer non-critical JavaScript
- Use `React.lazy` for below-the-fold sections

### 6.3 Bundle Optimization
- Tree-shake unused Tailwind classes
- Minimize third-party dependencies
- Dynamic import for heavy animation components (framer-motion used throughout)

---

## Phase 7: Polish & Deployment

### 7.1 Cross-browser Testing
- Chrome, Firefox, Safari, Edge
- Test on mobile viewports (iOS Safari, Chrome Android)

### 7.2 Lighthouse Audit
- Target: 90+ Performance, 90+ Accessibility, 100 SEO

### 7.3 README & Documentation
- Setup instructions
- Tech stack overview
- Project structure explanation
- Available scripts
- **Assets Used:** document the source of all images and icons used (hero bg, icons from @tabler/icons-react, project photos if any)

### 7.4 Deployment
- Deploy on Vercel (automatic from GitHub)
- Connect custom domain if available
- Enable HTTPS

### 7.5 Submission Deliverables
- GitHub repository URL
- Live Vercel deployment URL
- README with setup instructions
- Updated Resume & other details