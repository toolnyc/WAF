# Pitch Deck App — Agent Overlay

This directory contains the Next.js proposal/deck app. Root project context lives in `/AGENTS.md`; do not duplicate WAFF strategy, source docs, people, or design-system guidance here.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4

## Commands

- `npm run dev` — local development server.
- `npm run lint` — lint validation.
- `npm run build` — production build validation.

## Working Rules

- Prefer existing component, animation, and styling patterns in `src/**`.
- Check installed package versions before using framework or library features.
- Only inspect specific Next.js package docs when a task directly involves an unfamiliar Next.js 16 API or convention.
- Never broadly search or read generated/dependency artifacts.

## Exclusions

Avoid these paths unless explicitly requested:

- `node_modules/**`
- `.next/**`
- `tsconfig.tsbuildinfo`
- `next-env.d.ts`
