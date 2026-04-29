import { ImpactNumber } from "@/components/ui/ImpactNumber";

const lanes = [
  ["June", "Onboarding + material gathering", "Shared development landscape, GTL inputs, asset audit"],
  ["July", "2026 GTL Launch", "Individual assets, cohort announcement, press support"],
  ["July–Sept", "Pre-Summit Social", "Weekly drumbeat across LinkedIn, Instagram, TikTok"],
  ["Sept", "Abbey Road Video", "Final video due Sept. 14; event Sept. 25"],
] as const;

export function ArcOverviewSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-10 pt-12">
      <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
        <h2 className="max-w-5xl font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">
          Three workstreams. One June–September campaign system.
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-white/60 p-4"><p className="text-4xl font-bold"><ImpactNumber value={24} suffix="–30" /></p><p className="text-xs uppercase tracking-[0.2em] text-ink/55">GTLs</p></div>
          <div className="rounded-2xl bg-white/60 p-4"><p className="text-4xl font-bold"><ImpactNumber value={400} suffix="+" /></p><p className="text-xs uppercase tracking-[0.2em] text-ink/55">Alumni</p></div>
          <div className="rounded-2xl bg-white/60 p-4"><p className="text-4xl font-bold"><ImpactNumber value={75} suffix="+" /></p><p className="text-xs uppercase tracking-[0.2em] text-ink/55">Countries</p></div>
        </div>
      </div>
      <div className="relative grid gap-4 md:grid-cols-4">
        <div className="absolute left-[8%] right-[8%] top-10 hidden h-1 rounded-full bg-gradient-to-r from-join-orange via-join-green to-join-blue md:block" />
        {lanes.map(([date, title, copy]) => (
          <article key={title} className="relative rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-sm">
            <p className="mb-8 inline-flex rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-limestone">{date}</p>
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="leading-7 text-ink/65">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
