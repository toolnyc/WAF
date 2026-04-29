# WAFF Proposal — Horizontal Scroll Presentation Architecture

## Source Documents

- **RFP:** `/Users/pete/Dropbox/_Clients/Join/WAF/WAFF x JOIN Strategies 2026.docx.md`
- **JOIN Proposal Writing (Max & Mac):** `/Users/pete/Dropbox/_Clients/Join/WAF/We Are Family Foundation Proposal Writing.md`
- **Design System:** `/Users/pete/Code/WAF/DESIGN.md`

---

## Tech Stack

- **Next.js 16** (App Router, already scaffolded)
- **React 19** + **TypeScript**
- **Tailwind CSS 4** (already installed)
- **GSAP + ScrollTrigger** (add) — handles horizontal scroll, pinning, and scroll-locked sections
- **Framer Motion** (keep) — used for element-level entrance animations, text reveals, and micro-interactions
- **Lenis** (add) — smooth scroll normalization layer so GSAP scroll calculations are butter-smooth across browsers/trackpads

### Packages to Add

```
npm install gsap lenis
```

---

## Scroll Architecture

The page renders as a single vertically-scrollable document. GSAP ScrollTrigger pins a container and translates it horizontally as the user scrolls vertically. Slides with deep content get extra scroll distance allocated ("scroll padding") so the viewer scrolls through that content vertically before the horizontal translation resumes.

### State Machine

```
                    ┌─────────────────┐
                    │  Vertical Scroll │
                    └────┬────────┬───┘
                         │        │
                  simple slide  deep slide
                         │        │
                         v        v
              ┌──────────────┐  ┌────────────────┐
              │ Horiz Translate│  │ Pinned Vertical │◄──┐
              └──────┬───────┘  └───────┬────────┘    │
                     │                  │              │
                     │           still has content ────┘
                     │                  │
                     │           content exhausted
                     │                  │
                     └──────┬───────────┘
                            │
                            v
                    ┌───────────────┐
                    │ Vertical Scroll│
                    │  (next slide)  │
                    └───────────────┘
```

### How It Works

- The root page is a single `<main>` with total height calculated from all slides' scroll distances
- A pinned `<div>` contains the horizontal track (a flex row of slide panels, each `100vw` wide)
- Each slide declares its own scroll "weight" — simple slides = 1x viewport, deep slides = Nx viewport (based on content height)
- GSAP ScrollTrigger maps the vertical scroll range to `translateX` on the track, pausing horizontal movement during deep-slide ranges
- Lenis wraps the scroll to ensure smooth, consistent inertia

---

## Slide Map

Derived from Max & Mac's proposal structure. Each row = one horizontal panel.

| # | Slide | Scroll Type | Content Summary |
|---|-------|------------|-----------------|
| 0 | **Table of Contents** | Single screen | Interactive section list, clickable to jump. Full-screen. Acts as the "home" of the deck. |
| 1 | **Cover** | Single screen | JOIN x WAFF dual logos, "We Move Us Forward", date, WAFF hero photography background |
| 2 | **"We Will" + Goals** | Deep (3x) | Bold promise statement, then three project goals animate in sequentially as you scroll |
| 3 | **Core Theme** | Deep (4x) | "We Move Us Forward" — each word (WE / MOVE / US / FORWARD) gets its own scroll-triggered reveal with the corresponding strategy text |
| 4 | **Art Direction** | Single screen | Moodboard layout — Hopeful, Global, Emotional, Post-digital, Interconnected keywords with visual references |
| 5 | **Campaign Arc Overview** | Single screen | Three workstreams visualized as one June–September timeline arc. Sets up the "one coherent system" framing. |
| 6 | **WS1: GTL Launch Title** | Single screen | Workstream 1 title card — bold typography, section color accent |
| 7 | **WS1: Strategy + Deliverables** | Deep (5x) | Objectives, then scrolls through the five core deliverables (pre-launch narrative, individual assets, collective announcement, media strategy, network activation) — each as a distinct sub-section |
| 8 | **WS2: Pre-Summit Social Title** | Single screen | Workstream 2 title card |
| 9 | **WS2: Content Formats** | Deep (4x) | Scrolls through the four content formats: Scrapbook Carousels, "What We're Fighting For" interview show, GTL Clipping, Festival Posters — each with a visual mockup area and description |
| 10 | **WS3: Abbey Road Video Title** | Single screen | Workstream 3 title card — elevated visual treatment (dark bg, premium feel) |
| 11 | **WS3: Creative Vision** | Single screen | Styled placeholder — dramatic full-bleed layout ready for content. Copy placeholder referencing the cultural weight of Abbey Road and the donor audience. |
| 12 | **Process** | Deep (2x) | How JOIN works — collaboration model, communication cadence |
| 13 | **Timeline** | Single screen | Visual June–September arc — horizontal timeline showing all three workstreams as parallel/sequential lanes |
| 14 | **Budget** | Single screen | Itemized by workstream + total |
| 15 | **Close** | Single screen | "WE ARE FAMILY." — full-bleed photo, contact info, final emotional beat |

**Total: 16 horizontal panels, ~28 viewport-heights of scroll distance**

---

## Navigation

1. **Table of Contents (Slide 0):** Full-screen section list at the start. Each section is clickable and triggers a smooth GSAP scroll-to animation. Sections grouped by: Intro / Workstream 1 / Workstream 2 / Workstream 3 / Process & Timeline / Budget.
2. **Persistent TOC Button:** A small fixed-position button (top-left or top-right) that, when clicked, smoothly scrolls back to the TOC slide. Visually minimal — just a small icon or "Contents" label. Fades in after leaving the TOC slide.
3. **No dot nav or progress bar** — the TOC serves as the structural anchor.

---

## File Structure

```
src/
  app/
    layout.tsx              — root layout, font loading, global styles
    page.tsx                — main page, imports DeckShell
    globals.css             — Tailwind base + custom CSS variables (design tokens)
  components/
    deck/
      DeckShell.tsx         — master scroll container, GSAP setup, Lenis init
      Slide.tsx             — generic slide wrapper (handles viewport sizing, scroll weight)
      SlideTrack.tsx        — horizontal flex track that gets translateX'd
      TOCButton.tsx         — persistent "back to contents" button
    slides/
      TOCSlide.tsx          — table of contents
      CoverSlide.tsx        — cover
      GoalsSlide.tsx        — "We Will" + goals (deep)
      ThemeSlide.tsx        — "We Move Us Forward" (deep)
      ArtDirectionSlide.tsx — moodboard
      ArcOverviewSlide.tsx  — campaign arc overview
      WS1TitleSlide.tsx     — WS1 title card
      WS1DetailSlide.tsx    — WS1 deliverables (deep)
      WS2TitleSlide.tsx     — WS2 title card
      WS2DetailSlide.tsx    — WS2 content formats (deep)
      WS3TitleSlide.tsx     — WS3 title card
      WS3PlaceholderSlide.tsx — WS3 placeholder
      ProcessSlide.tsx      — process (deep)
      TimelineSlide.tsx     — timeline
      BudgetSlide.tsx       — budget
      CloseSlide.tsx        — closing
    ui/
      AnimatedText.tsx      — reusable scroll-triggered text reveal (fade-up, split-line, etc.)
      SectionLabel.tsx      — workstream/section label component
      ImpactNumber.tsx      — animated counter for stats
  lib/
    scroll.ts               — GSAP/Lenis setup helpers, scroll-to utilities
    slides.ts               — slide registry (id, label, scrollWeight, component)
    cn.ts                   — clsx + tailwind-merge utility
  styles/
    fonts.ts                — font declarations (IvyPresto, Graphik, Futura PT)
```

---

## Key Implementation Details

### GSAP + Lenis Integration

```ts
// Conceptual setup in DeckShell.tsx
const lenis = new Lenis({ smooth: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));

// Horizontal scroll trigger
ScrollTrigger.create({
  trigger: trackRef.current,
  pin: true,
  scrub: 1,
  end: () => `+=${totalScrollDistance}`,
  onUpdate: (self) => {
    // Map self.progress to translateX, accounting for deep-slide ranges
  }
});
```

### Deep Slide Scroll Locking

Each slide declares a `scrollWeight` (1 = single screen, N = N screens). The total scroll document height is the sum of all weights * viewport height. During GSAP's `onUpdate`, the progress value maps through a piecewise function: within a deep slide's scroll range, horizontal position is frozen while a CSS `translateY` (or clip/reveal) handles vertical content within that panel.

### Animation Patterns

- **Text reveals:** Framer Motion `variants` triggered by GSAP ScrollTrigger callbacks (`onEnter`, `onLeaveBack`)
- **Number counters:** `ImpactNumber` component uses Framer Motion's `useMotionValue` + `animate` for smooth counting
- **Slide transitions:** Subtle opacity + scale shifts on the incoming slide via GSAP scrub
- **Deep slide content:** Staggered fade-up of content blocks as you scroll through the pinned section

### Design Token Integration

All colors, fonts, spacing, and radii from `DESIGN.md` mapped to CSS custom properties in `globals.css` and consumed via Tailwind theme extension — e.g., `bg-limestone`, `text-ink`, `font-display`, `font-body`.

---
