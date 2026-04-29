"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";

type TOCButtonProps = {
  visible: boolean;
  onClick: () => void;
};

export function TOCButton({ visible, onClick }: TOCButtonProps) {
  return (
    <button
      type="button"
      aria-label="Back to contents"
      onClick={onClick}
      className={cn(
        "fixed right-5 top-5 z-50 flex items-center gap-2 rounded-sm border border-ink/10 bg-limestone/90 px-4 py-2 text-xs font-medium tracking-wide text-ink transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
      )}
    >
      <Menu size={14} strokeWidth={2} />
      Contents
    </button>
  );
}
