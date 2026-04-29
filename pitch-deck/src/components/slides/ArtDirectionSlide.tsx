import type { CSSProperties } from "react";

const directions = [
  ["Hopeful", "Warm, bright, optimistic color moments over the foundation's black-and-white emotional foundation."],
  ["Global", "UGC and field imagery from GTLs' homes, environments, and community work."],
  ["Emotional", "Earnest, honest design that preserves teen voice instead of over-polishing it."],
  ["Post-digital", "Scrapbook, lo-fi internet, captions, clips, and tactile layers for Gen Alpha fluency."],
  ["Interconnected", "Lines, rings, woven grids, and systems that come full circle across the campaign."],
] as const;

export function ArtDirectionSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div>
        <p className="mb-5 text-sm font-medium text-join-gold">Art direction</p>
        <h2 className="font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">A unified visual identity before anyone reads the caption.</h2>
      </div>
      <div className="grid grid-cols-2 gap-px bg-ink/10">
        {directions.map(([title, copy], index) => (
          <article
            key={title}
            data-step-start={String(index * 0.19)}
            className={`deep-step p-6 ${index === 4 ? "col-span-2 bg-ink text-limestone" : "bg-limestone"}`}
            style={{ "--step-start": String(index * 0.19) } as CSSProperties}
          >
            <div className="mb-8 flex h-32 items-center justify-center border border-current/10 bg-ink/5">
              <span className="text-xs font-medium tracking-wide text-current/30">Moodboard</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="leading-7 opacity-75">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
