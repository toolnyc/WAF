import type { CSSProperties } from "react";

const themeWords = [
  ["WE", "An expansive, inclusive collective effort — teenagers, WAFF staff, mentors, donors, and supporters moving together."],
  ["MOVE", "Propulsive and action-oriented. Show the work getting done; do not only describe it."],
  ["US", "A broader global us: multilingual, dual-captioned, connected across local communities and institutional audiences."],
  ["FORWARD", "Future-facing, solutions-oriented messaging that paints an inviting picture of what GTLs are building."],
] as const;

export function ThemeSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-10 pt-12">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-join-lime">Core theme</p>
        <h2 className="max-w-6xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.82] tracking-[-0.07em]">
          We Move Us Forward
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {themeWords.map(([word, description], index) => (
          <article
            key={word}
            data-step-start={String(index * 0.24)}
            className="deep-step min-h-64 rounded-3xl border border-limestone/15 bg-limestone/8 p-5 backdrop-blur"
            style={{ "--step-start": String(index * 0.24) } as CSSProperties}
          >
            <p className="font-display text-6xl leading-none tracking-[-0.06em] text-[var(--accent)]">{word}</p>
            <p className="mt-8 text-lg leading-7 text-limestone/75">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
