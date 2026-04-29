import type { CSSProperties } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import type { SlideComponentProps } from "@/lib/slides";

const themeWords = [
  ["We", "An expansive, inclusive collective effort — teenagers, staff, mentors, donors, and supporters moving together."],
  ["Move", "Propulsive and action-oriented. Show the work getting done; do not only describe it."],
  ["Us", "A broader global us: multilingual, dual-captioned, connected across local communities and institutional audiences."],
  ["Forward", "Future-facing, solutions-oriented messaging that paints an inviting picture of what GTLs are building.", true],
] as const;

export function ThemeSlide({ index, activeIndex }: SlideComponentProps) {
  const isActive = index === activeIndex;

  return (
    <div className="flex h-full flex-col justify-center gap-10 pt-12">
      <AnimatedText active={isActive} delay={0.1}>
        <p className="mb-5 text-sm font-medium tracking-wide text-join-lime">Core theme</p>
        <h2 className="max-w-6xl font-[var(--font-waff-primary)] text-[clamp(4rem,11vw,10rem)] font-extrabold leading-[0.82] tracking-[-0.04em]">
          We Move Us <em className="not-italic" style={{ fontStyle: "italic" }}>Forward</em>
        </h2>
      </AnimatedText>
      <div className="grid gap-px bg-limestone/20 md:grid-cols-4">
        {themeWords.map(([word, description, isItalic], idx) => (
          <article
            key={word}
            data-step-start={String(idx * 0.2)}
            className="deep-step min-h-64 bg-ink p-6"
            style={{ "--step-start": String(idx * 0.2) } as CSSProperties}
          >
            <p className={`font-[var(--font-waff-primary)] text-6xl font-extrabold leading-none tracking-[-0.02em] text-[var(--accent)] ${isItalic ? "italic" : ""}`}>{word}</p>
            <p className="mt-8 text-lg leading-7 text-limestone/75">{description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
