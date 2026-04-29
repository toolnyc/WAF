
const timeline = [
  ["June", "Onboarding, shared landscape, GTL material gathering, interviews, asset audit"],
  ["July", "GTL launch system, individual assets, cohort announcement, press release support"],
  ["July–September", "Pre-Summit social drumbeat across priority channels"],
  ["September 14", "Abbey Road opening ceremony video final deliverable due"],
  ["September 25", "WAFF fundraiser and Just Peace Summit opening at Abbey Road Studios"],
] as const;

export function TimelineSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-12 pt-12">
      <div className="max-w-5xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-join-blue">Timeline</p>
        <h2 className="font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">A single production arc from material gathering to Abbey Road.</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-5">
        {timeline.map(([date, copy], index) => (
          <article key={date} className="relative rounded-3xl border border-ink/10 bg-white/65 p-5 shadow-sm">
            <p className="mb-14 text-sm font-black uppercase tracking-[0.22em] text-join-blue">{date}</p>
            <p className="text-lg font-semibold leading-7 tracking-[-0.03em]">{copy}</p>
            <span className="absolute right-5 top-5 font-display text-5xl leading-none text-ink/10">{index + 1}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
