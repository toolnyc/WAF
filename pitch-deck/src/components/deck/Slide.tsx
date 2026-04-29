import type { CSSProperties, ReactNode } from "react";
import type { DeckSlide } from "@/lib/slides";
import { cn } from "@/lib/cn";

type SlideProps = {
  slide: DeckSlide;
  index: number;
  children: ReactNode;
};

export function Slide({ slide, index, children }: SlideProps) {
  const isDark = slide.theme === "dark";

  return (
    <section
      id={slide.id}
      data-slide-panel
      data-slide-index={index}
      data-scroll-weight={slide.scrollWeight}
      className={cn(
        "deck-slide relative h-screen w-screen shrink-0 overflow-hidden px-8 py-7 md:px-14 md:py-10",
        isDark ? "bg-ink text-limestone" : "bg-limestone text-ink",
        slide.theme === "color" && "bg-[var(--accent)] text-ink",
      )}
      style={{ "--accent": slide.accent } as CSSProperties}
      aria-label={slide.label}
    >
      <div className="pointer-events-none absolute inset-x-8 top-5 z-30 flex items-center justify-between text-[0.66rem] font-medium tracking-wide opacity-60 md:inset-x-14">
        <span>{slide.kicker}</span>
        <span>{String(index).padStart(2, "0")}</span>
      </div>
      {slide.scrollWeight > 1 ? (
        <div className="pointer-events-none absolute bottom-6 left-8 right-8 z-30 h-px bg-current/15 md:left-14 md:right-14">
          <div data-deep-meter className="h-px w-0 bg-[var(--accent)]" />
        </div>
      ) : null}
      {children}
    </section>
  );
}
