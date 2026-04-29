# R2 Optimization Plan — Parallel Task Agents

## Feedback Summary

### Content
- Focus on Max/Mac's actual proposal substance, not parroting back the RFP
- First slide = hook ("We Move Us Forward"), then TOC as navigation
- "Three Dot Dash season" → "2026 GTL Campaign"
- No "Max/Mac" references → use "Join" with logo
- No "WAFF" / "We Are Family Foundation" text → use logo only

### Functionality
- Scroll too slow/floaty — needs fast acceleration + hard snap (springy, vibrant)
- Implement Sanity CMS for Mac/Max to edit all slide copy easily and clearly
- Breakpoints janky (too late to change flow)
- Contents button and scrollback behavior janky

### Design
- Stronger type hierarchy
- More typographically forward (type IS the design)
- Reference JOIN site for color/typography: https://www.joinstrategies.com/
- **No gradients**
- **No ALL CAPS** except tiny caption fonts — prefer sentence case
- Prefer strong type hierarchy over visual elements like cards
- Swiss/linear/modernist style
- Campaign language ("We Move Us Forward") should use WAFF font (Futura PT)
- Adobe Typekit embed: `<link rel="stylesheet" href="https://use.typekit.net/nhp6oel.css">`

---

## Design Reference Analysis

Reference images provided show these patterns:
- **Heavy type contrast** — massive display vs small body
- **Horizontal rules/grid lines** — structural elements
- **Solid color blocks** — no gradients
- **Sentence case** — not ALL CAPS
- **Text-forward layouts** — typography carries the design, not containers

JOIN site patterns observed:
- Colored keyword highlights inline (green, lime, orange, blue)
- Arrow lists (`→`) instead of cards
- Pill badges for section labels
- Full-bleed solid color section backgrounds
- Uses **Sanity CMS** (`cdn.sanity.io/images/mbcbc8fw/production/`)

---

## Agent Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PARALLEL PHASE 1                         │
├─────────────┬─────────────┬─────────────┬─────────────┬─────┤
│  Content    │   Scroll    │ Typography  │   Design    │ Nav │
│  Agent      │   Agent     │   Agent     │   Agent     │Agent│
└──────┬──────┴──────┬──────┴──────┬──────┴──────┬──────┴──┬──┘
       │             │             │             │         │
       └─────────────┴─────────────┴─────────────┴─────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │         PHASE 2             │
                    │    CMS Integration          │
                    │    (Sanity Studio)          │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │           QA                │
                    │   Integration + Polish      │
                    └─────────────────────────────┘
```

---

## Agent 1: Content Revision

**Scope:** All slide copy and terminology  
**Files:** `pitch-deck/src/lib/slides.ts`, all `pitch-deck/src/components/slides/*Slide.tsx`

### Tasks

| Task | Details |
|------|---------|
| Slide order | Move hook slide ("We Move Us Forward") to position 0, TOC becomes slide 1 |
| Terminology | Global replace "Three Dot Dash season" → "2026 GTL Campaign" |
| Branding | Remove all "Max"/"Mac" references → use "Join" with logo component |
| Branding | Remove all spelled-out "WAFF"/"We Are Family Foundation" → logo component only |
| Copy rewrite | Rewrite slide copy from proposal source doc, not RFP language |
| Logos | Import logos from Dropbox folder, create `<JoinLogo>` and `<WAFFLogo>` components |

### Logo Paths
- JOIN: `/Users/pete/Dropbox/_Clients/Join/WAF/join-logo@2x-8.png`
- WAFF: `/Users/pete/Dropbox/_Clients/Join/WAF/waff-logo@2x-8.png`

---

## Agent 2: Scroll Physics

**Scope:** Scroll feel, easing, snap behavior  
**Files:** `pitch-deck/src/components/deck/DeckShell.tsx`, `pitch-deck/src/lib/scroll.ts`

### Current Values (too floaty)
```js
lerp: 0.08
wheelMultiplier: 0.85
scrub: 0.85
```

### Target Values (springy, snappy)
```js
lerp: 0.12-0.15        // faster response
wheelMultiplier: 1.1   // more travel per scroll
scrub: 0.3-0.5         // tighter coupling to scroll position
```

### Easing Updates
- Replace current easing with spring-like behavior: fast acceleration, hard deceleration
- `scrollToSlide()` should use spring easing with slight overshoot then settle
- Consider: `cubic-bezier(0.34, 1.56, 0.64, 1)` or custom spring physics

### Target Feel
Things should **snap into place**, not drift. Fast in, hard stop. Vibrant, not floaty.

---

## Agent 3: Typography System

**Scope:** Font integration, hierarchy, case conventions  
**Files:** `pitch-deck/src/app/globals.css`, `pitch-deck/src/styles/fonts.ts`, `pitch-deck/src/app/layout.tsx`, all slide components

### Font Stack

| Layer | Font | Usage |
|-------|------|-------|
| JOIN display | IvyPresto Headline | Proposal headlines, section titles |
| JOIN body | Graphik | Body copy, UI elements |
| WAFF campaign | **Futura PT** (Typekit) | "We Move Us Forward", campaign-specific language |

### Typekit Integration
Add to `layout.tsx` `<head>`:
```html
<link rel="stylesheet" href="https://use.typekit.net/nhp6oel.css">
```

Add CSS variable:
```css
--font-waff-primary: "futura-pt", "Futura PT", sans-serif;
```

### Case Rules
- **Remove ALL CAPS** from all text except tiny captions (< 12px, tracking-wide)
- Convert to **sentence case** everywhere
- Strong size contrast: e.g., 10rem headline / 1.125rem body

### Hierarchy Pattern (from JOIN site)
- Massive display type for key statements
- Colored inline keyword highlights
- Clean sans-serif body at readable size

---

## Agent 4: Design System

**Scope:** Visual language, cards, gradients, Swiss/modernist aesthetic  
**Files:** All `*Slide.tsx`, `pitch-deck/src/app/globals.css`, `pitch-deck/src/components/deck/Slide.tsx`

### Remove
- [ ] All gradients (cover slide radial gradients, card background gradients)
- [ ] Rounded cards with borders → replace with flat sections or ruled lines
- [ ] `backdrop-blur` effects
- [ ] Decorative visual elements that compete with type

### Add
- [ ] Horizontal rules as structural elements (like Art and Literature ref)
- [ ] Full-bleed solid color sections (like JOIN site green/blue/black sections)
- [ ] Arrow lists (`→`) for enumerated content instead of cards
- [ ] Inline colored keyword highlights (green, lime, orange, blue on key words)

### Layout Principles
- Grid-based, Swiss alignment
- Type hierarchy carries the layout (type IS the design)
- Generous whitespace over containers/boxes
- High contrast: dark type on light bg, or reversed

### Color Usage (from JOIN site)
- Solid accent colors, never gradients
- Section backgrounds: limestone (default), green, blue, warmBlack
- Pill badges for section labels (lime bg, black text)

---

## Agent 5: Navigation Polish

**Scope:** Contents button, scrollback behavior  
**Files:** `pitch-deck/src/components/deck/TOCButton.tsx`, `pitch-deck/src/components/deck/DeckShell.tsx`

### TOCButton Issues
- Visibility threshold (`activeIndex > 0`) may need debounce or hysteresis
- Animation timing feels off

### Fixes
- Add debounce to visibility toggle (prevent flicker)
- Match scrollback animation to new spring easing from Agent 2
- Consider: add section kicker text or minimal progress indicator

---

## Agent 6: CMS Integration (Sanity)

**Scope:** Easy copy editing for Mac/Max without code access  
**New files:** `pitch-deck/sanity/` schema, environment config, content fetching

### Decision: New Sanity Project
- Create dedicated free-tier Sanity project for WAFF deck
- Mac/Max get Sanity Studio dashboard for visual editing
- Content fetched at build time via `@sanity/client`


### Setup Steps
1. `npm create sanity@latest` in project root
2. Configure schema for slide content
3. Add `SANITY_PROJECT_ID` and `SANITY_DATASET` to env
4. Create content fetching utility
5. Update slides to pull content from Sanity
6. Deploy Sanity Studio (free hosting included)
7. Invite Mac/Max as editors

---

## Execution Order

| Phase | Agents | Parallelizable | Est. Time |
|-------|--------|----------------|-----------|
| 1 | Content, Scroll, Typography, Design, Navigation | Yes (all parallel) | ~45 min |
| 2 | CMS Integration | Serial (after Phase 1) | ~25 min |
| 3 | QA + Polish | Serial | ~15 min |

---

## Assets Reference

| Asset | Path |
|-------|------|
| JOIN logo | `/Users/pete/Dropbox/_Clients/Join/WAF/join-logo@2x-8.png` |
| WAFF logo | `/Users/pete/Dropbox/_Clients/Join/WAF/waff-logo@2x-8.png` |
| Typekit embed | `https://use.typekit.net/nhp6oel.css` |
| Proposal source | `/Users/pete/Dropbox/_Clients/Join/WAF/We Are Family Foundation Proposal Writing.md` |
| Design guidelines | `/Users/pete/Code/WAF/DESIGN.md` |

---

## Verification Checklist

After all agents complete:

- [ ] Hook slide ("We Move Us Forward") is first
- [ ] No "Three Dot Dash season" text remains
- [ ] No "Max"/"Mac" text — only Join logo
- [ ] No "WAFF"/"We Are Family Foundation" text — only WAFF logo
- [ ] Scroll feels springy with hard snap
- [ ] No gradients anywhere
- [ ] No ALL CAPS except tiny captions
- [ ] Type hierarchy is strong and Swiss-feeling
- [ ] Futura PT loads and applies to campaign language
- [ ] TOCButton behavior is smooth
- [ ] Sanity Studio is accessible for Mac/Max
- [ ] All breakpoints function without jank
