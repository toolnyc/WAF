import type { CSSProperties } from "react";

const phases = [
  ["Shared development landscape", "Align on audience, proof points, GTL inputs, WAFF brand assets, approvals, and what each workstream must accomplish."],
  ["Tight collaboration cadence", "Weekly working sessions, async review windows, decision logs, and clear production checkpoints from June through September."],
] as const;

export function ProcessSlide() {
  return (
    <div className="grid h-full gap-10 pt-16 md:grid-cols-[0.85fr_1.15fr] md:items-center">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-join-gold">Process</p>
        <h2 className="font-display text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">A small-team process with senior attention.</h2>
      </div>
      <div className="space-y-5">
        {phases.map(([title, copy], index) => (
          <article
            key={title}
            data-step-start={String(index * 0.45)}
            className="deep-step rounded-3xl border border-ink/10 bg-white/65 p-7 shadow-sm"
            style={{ "--step-start": String(index * 0.45) } as CSSProperties}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-join-gold">0{index + 1}</p>
            <h3 className="mb-4 text-4xl font-bold tracking-[-0.05em]">{title}</h3>
            <p className="text-xl leading-8 text-ink/68">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
