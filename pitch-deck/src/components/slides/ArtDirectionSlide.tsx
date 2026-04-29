
const directions = [
  ["Hopeful", "Warm, bright, optimistic color moments over WAFF’s black-and-white emotional foundation."],
  ["Global", "UGC and field imagery from GTLs’ homes, environments, and community work."],
  ["Emotional", "Earnest, honest design that preserves teen voice instead of over-polishing it."],
  ["Post-digital", "Scrapbook, lo-fi internet, captions, clips, and tactile layers for Gen Alpha fluency."],
  ["Interconnected", "Lines, rings, woven grids, and systems that come full circle across the campaign."],
] as const;

export function ArtDirectionSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-join-gold">Art direction</p>
        <h2 className="font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">A unified visual identity before anyone reads the caption.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {directions.map(([title, copy], index) => (
          <article key={title} className={index === 4 ? "col-span-2 rounded-3xl bg-ink p-6 text-limestone" : "photo-card rounded-3xl border border-ink/10 bg-white/60 p-6"}>
            <div className="mb-8 h-32 rounded-2xl border border-current/10 bg-[radial-gradient(circle_at_30%_20%,var(--accent),transparent_22%),linear-gradient(135deg,rgba(36,31,33,0.12),transparent)]" />
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="leading-7 opacity-75">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
