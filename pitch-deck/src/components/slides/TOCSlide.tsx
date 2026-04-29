import { ArrowRight } from "lucide-react";
import type { SlideComponentProps } from "@/lib/slides";
import { JoinLogo } from "@/components/ui/JoinLogo";
import { WAFFLogo } from "@/components/ui/WAFFLogo";

const tocGroups = [
  {
    label: "Intro",
    items: [
      ["cover", "Cover"],
      ["goals", "We will + Goals"],
      ["theme", "Core theme"],
      ["art-direction", "Art direction"],
      ["arc", "Campaign arc"],
    ],
  },
  { label: "Workstream 1", items: [["ws1-title", "2026 GTL launch"], ["ws1-detail", "Strategy + deliverables"]] },
  { label: "Workstream 2", items: [["ws2-title", "Pre-summit social"], ["ws2-detail", "Content formats"]] },
  { label: "Workstream 3", items: [["ws3-title", "Abbey Road video"], ["ws3-vision", "Creative vision"]] },
  { label: "Close", items: [["process", "Process"], ["timeline", "Timeline"], ["budget", "Budget"], ["close", "We are family"]] },
] as const;

export function TOCSlide({ scrollToSlide }: SlideComponentProps) {
  return (
    <div className="deck-grid flex h-full flex-col justify-between pt-16">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.4fr] md:items-end">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <JoinLogo height={18} />
            <span className="text-ink/40">×</span>
            <WAFFLogo height={22} />
          </div>
          <h1 className="max-w-3xl font-display text-6xl leading-[0.92] tracking-[-0.055em] md:text-8xl">
            Proposal contents
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-ink/70">
          A horizontal proposal for the 2026 GTL campaign: cohort launch,
          pre-summit social, and the Abbey Road opening ceremony video.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {tocGroups.map((group) => (
          <div key={group.label} className="border-t border-ink/12 pt-4">
            <p className="mb-4 text-[0.65rem] font-medium tracking-wide text-ink/45">{group.label}</p>
            <div className="space-y-1">
              {group.items.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSlide(id)}
                  className="group flex w-full items-center justify-between gap-3 py-2 text-left text-sm font-medium leading-tight text-ink transition hover:text-join-orange"
                >
                  <span>{label}</span>
                  <ArrowRight size={14} className="shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
