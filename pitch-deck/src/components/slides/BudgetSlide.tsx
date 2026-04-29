const rows = [
  ["Workstream 1", "2026 GTL launch", "Individual assets, cohort moment, press support, activation toolkit", "TBD"],
  ["Workstream 2", "Pre-summit social", "Scrapbook carousels, interview show, clipping, festival posters", "TBD"],
  ["Workstream 3", "Abbey Road video", "Creative, production, edit, finishing, delivery by Sept. 14", "TBD"],
  ["Total", "June–September campaign", "Itemized pricing to be finalized in proposal budget pass", "TBD"],
] as const;

export function BudgetSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-8 pt-12">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div>
          <p className="mb-5 text-sm font-medium text-join-orange">Budget</p>
          <h2 className="font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">Itemized by workstream.</h2>
        </div>
        <p className="max-w-xl text-xl leading-8 text-ink/68">
          Pricing rows are structured for the final budget pass once scope decisions and deliverable counts are locked.
        </p>
      </div>
      <div className="overflow-hidden border border-ink/12 bg-limestone">
        {rows.map(([kicker, title, scope, fee]) => (
          <div key={title} className="grid gap-4 border-b border-ink/10 p-5 last:border-b-0 md:grid-cols-[0.55fr_0.9fr_1.4fr_0.35fr] md:items-center">
            <p className="text-xs font-medium tracking-wide text-ink/45">{kicker}</p>
            <h3 className="text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="leading-7 text-ink/65">{scope}</p>
            <p className="text-right text-xl font-bold">{fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
