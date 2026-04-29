import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { SlideComponentProps } from "@/lib/slides";
import { JoinLogo } from "@/components/ui/JoinLogo";
import { WAFFLogo } from "@/components/ui/WAFFLogo";

const tocItems = [
  { id: "goals", label: "We Will + Goals", kicker: "Intro" },
  { id: "theme", label: "Core Theme", kicker: "Creative" },
  { id: "art-direction", label: "Art Direction", kicker: "Look + Feel" },
  { id: "arc", label: "Campaign Arc", kicker: "Overview" },
  { id: "ws1-title", label: "2026 GTL Launch", kicker: "Workstream 1" },
  { id: "ws2-title", label: "Pre-Summit Social", kicker: "Workstream 2" },
  { id: "ws3-title", label: "Abbey Road Video", kicker: "Workstream 3" },
  { id: "process", label: "Process", kicker: "How We Work" },
  { id: "timeline", label: "Timeline", kicker: "Pacing" },
  { id: "budget", label: "Budget", kicker: "Investment" },
] as const;

export function TOCSlide({ scrollToSlide }: SlideComponentProps) {
  return (
    <div className="deck-grid flex h-full flex-col justify-center gap-12 px-4 md:px-0">
      <div className="flex items-center gap-3">
        <JoinLogo height={18} />
        <span className="text-ink/40">×</span>
        <WAFFLogo height={22} />
      </div>

      <nav className="flex flex-col items-start gap-1">
        {tocItems.map(({ id, label, kicker }, index) => (
          <button
            key={id}
            type="button"
            data-step-start={String(index * 0.08)}
            onClick={() => scrollToSlide(id)}
            className="deep-step group flex items-baseline gap-4 py-1 text-left transition-colors hover:text-join-orange"
            style={{ "--step-start": String(index * 0.08) } as CSSProperties}
          >
            <span className="w-24 shrink-0 text-xs font-medium tracking-wide text-ink/40 transition-colors group-hover:text-join-orange/60">
              {kicker}
            </span>
            <span className="font-display text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              {label}
            </span>
            <ArrowRight size={20} className="shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
          </button>
        ))}
      </nav>
    </div>
  );
}
