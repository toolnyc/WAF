import { ArrowRight } from "lucide-react";
import type { SlideComponentProps } from "@/lib/slides";

const tocGroups = [
  {
    label: "Intro",
    items: [
      ["cover", "Cover"],
      ["goals", "We Will + Goals"],
      ["theme", "Core Theme"],
      ["art-direction", "Art Direction"],
      ["arc", "Campaign Arc"],
    ],
  },
  { label: "Workstream 1", items: [["ws1-title", "2026 GTL Launch"], ["ws1-detail", "Strategy + Deliverables"]] },
  { label: "Workstream 2", items: [["ws2-title", "Pre-Summit Social"], ["ws2-detail", "Content Formats"]] },
  { label: "Workstream 3", items: [["ws3-title", "Abbey Road Video"], ["ws3-vision", "Creative Vision"]] },
  { label: "Close", items: [["process", "Process"], ["timeline", "Timeline"], ["budget", "Budget"], ["close", "WE ARE FAMILY."]] },
] as const;

export function TOCSlide({ scrollToSlide }: SlideComponentProps) {
  return (
    <div className="deck-grid flex h-full flex-col justify-between pt-16">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:items-end">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-join-orange">JOIN Strategies × WAFF</p>
          <h1 className="max-w-3xl font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">
            Proposal contents
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-ink/70">
          A horizontal proposal system for the 2026 Three Dot Dash season: GTL launch,
          pre-Summit social, and the Abbey Road opening ceremony video.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {tocGroups.map((group) => (
          <div key={group.label} className="rounded-2xl border border-ink/12 bg-white/45 p-4 shadow-sm">
            <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-ink/45">{group.label}</p>
            <div className="space-y-2">
              {group.items.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSlide(id)}
                  className="group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold leading-tight text-ink transition hover:bg-ink hover:text-limestone"
                >
                  <span>{label}</span>
                  <ArrowRight size={15} className="shrink-0 transition group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
