# WAF — We Are Family Foundation — Agent Instructions

## Project

RFP response for We Are Family Foundation, a global youth empowerment nonprofit founded by Nile Rodgers. JOIN Strategies is responding as a team: Mac Concordia and Max Goldberg lead the client relationship and narrative strategy; Pete Wallace leads visual articulation, proposal experience design, and production design.

## Status

**Lead phase / RFP response** — WAFF issued an RFP for a defined 2026 Three Dot Dash season scope. JOIN is responding with a visually polished proposal site/deck that demonstrates creative vision, cultural fluency, and care for the Global Teen Leaders. Win leads to a defined June-September campaign and potential longer-term design partnership.

## Scope

The RFP covers three interconnected workstreams:

1. **2026 GTL Launch** — individual launch assets for 24-30 Global Teen Leaders, collective cohort announcement, press release support, amplification ideas.
2. **Pre-Summit Social Content** — July-September awareness and excitement campaign across WAFF social channels.
3. **Abbey Road Opening Ceremony Video** — 1-3 minute video for the September 25, 2026 fundraiser and Just Peace Summit opening ceremony at Abbey Road Studios.

This project is not a website rebuild. Max and Mac are developing the narrative infrastructure and campaign strategy. Pete's role is to make that strategy visually clear, emotionally resonant, premium, and easy for WAFF to understand.

## Proposal Context

- Proposal due to WAFF: **Friday, May 1**.
- RFP asks for: creative approach, process, timeline, budget, and questions.
- Core campaign concept from JOIN copy: **"We Move Us Forward"**.
- Treat the concept as a unifying proposal/campaign spine, not a replacement brand for WAFF, Three Dot Dash, or Just Peace Summit.
- Proposal should make the three workstreams feel like one coherent June-September campaign system.
- Abbey Road carries special cultural and donor-facing weight; give that workstream elevated visual emphasis.

## Source Docs

- RFP: `/Users/pete/Dropbox/_Clients/Join/WAF/WAFF x JOIN Strategies 2026.docx.md`
- JOIN draft response/copy: `/Users/pete/Dropbox/_Clients/Join/WAF/We Are Family Foundation Proposal Writing.md`

## Repo Map

- `pitch-deck/` — Next.js proposal/deck application.
- `DESIGN.md` — WAFF/JOIN visual identity and design-system reference. Read this when doing visual, layout, or brand-sensitive work.
- `R2-OPTIMIZATION-PLAN.md` — optimization planning notes.

## Key People

- **Pete Wallace** — Designer / visual proposal lead
- **Mac Concordia** & **Max Goldberg** — Co-Founders, JOIN Strategies (direct contacts)
- **Jess Teutonico** — Executive Director, WAFF
- **Nancy Hunt** — President & Co-Founder, WAFF
- **Nile Rodgers** — Chairman & Co-Founder, WAFF

## Notes

- WAFF is a ~$2M/year org with a 9-person team. Expect nonprofit pricing.
- Board has entertainment-industry taste (CAA, Rockefeller, etc.) — quality bar is high.
- Brand system is likely thin. May need to systematize early.
- Materials may be used at UN, WEF, on national TV — portfolio-worthy work.
- Design should clarify and elevate JOIN's response, not over-author the strategy.

## Agent Performance

- Avoid broad scans of generated or dependency directories.
- Exclude `pitch-deck/node_modules/**`, `pitch-deck/.next/**`, `pitch-deck/tsconfig.tsbuildinfo`, `pitch-deck/next-env.d.ts`, and `.git-backups/**` unless the user explicitly asks to inspect them.
- Use targeted searches in `pitch-deck/src/**` and config files before expanding scope.

## Validation

- For code changes inside `pitch-deck/`, run validation from `pitch-deck/`.
- Default checks: `npm run lint`; run `npm run build` when implementation changes affect app behavior, routing, rendering, or production output.
- For instruction-only changes, review diffs and skip app build unless requested.
