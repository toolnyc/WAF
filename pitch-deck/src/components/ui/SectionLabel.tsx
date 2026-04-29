import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  eyebrow: string;
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ eyebrow, children, className }: SectionLabelProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">{eyebrow}</p>
      <div className="max-w-4xl text-balance font-display text-5xl leading-[0.96] tracking-[-0.04em] md:text-7xl">
        {children}
      </div>
    </div>
  );
}
