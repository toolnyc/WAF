import type { CSSProperties } from "react";

const deliverables = [
  ["Pre-launch narrative + content engine", "Use alumni proof points and “where are they now?” stories to build credibility and anticipation before launch."],
  ["Individual GTL launch assets", "24–30 personalized assets with shared visual language, platform copy, talking points, and peer-to-peer shareability."],
  ["Collective cohort announcement", "A launch moment with an I → We → what we’re building together emotional arc, including video and short-form cutdowns."],
  ["Media + thought leadership", "Press release, philanthropy op-ed opportunities, targeted outreach, and a messaging framework for funders and partners."],
  ["Network activation toolkit", "Champions lists, amplification language, coordination hubs, and storytelling training that turn GTLs into active launch participants."],
] as const;

export function WS1DetailSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-join-orange">Strategy</p>
        <h2 className="mb-8 font-display text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">Individuality inside a shared launch system.</h2>
        <ul className="space-y-3 text-lg leading-7 text-ink/70">
          <li>Establish each GTL as credible and investable.</li>
          <li>Position WAFF as the network powering long-term impact.</li>
          <li>Create a high-visibility, shareable global moment.</li>
          <li>Translate inspiration into media and philanthropic engagement.</li>
        </ul>
      </div>
      <div className="space-y-3">
        {deliverables.map(([title, copy], index) => (
          <article
            key={title}
            data-step-start={String(index * 0.19)}
            className="deep-step grid gap-4 rounded-2xl border border-ink/10 bg-white/65 p-5 shadow-sm md:grid-cols-[4rem_1fr]"
            style={{ "--step-start": String(index * 0.19) } as CSSProperties}
          >
            <p className="font-display text-5xl leading-none tracking-[-0.05em] text-join-orange">{index + 1}</p>
            <div>
              <h3 className="mb-2 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
              <p className="leading-7 text-ink/68">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
