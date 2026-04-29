import { AnimatedText } from "@/components/ui/AnimatedText";

export function CoverSlide() {
  return (
    <div className="hero-photo relative -mx-8 -my-7 flex h-[calc(100%+3.5rem)] flex-col justify-between overflow-hidden px-8 py-10 md:-mx-14 md:-my-10 md:h-[calc(100%+5rem)] md:px-14 md:py-12">
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,130,8,0.35),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(204,255,102,0.2),transparent_25%)]" />
      <div className="relative z-10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.3em] text-limestone/80">
        <span>JOIN Strategies</span>
        <span className="waff-rings text-right">We Are Family Foundation</span>
      </div>
      <AnimatedText className="relative z-10 max-w-6xl">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-join-lime">2026 Three Dot Dash Season</p>
        <h1 className="font-display text-[clamp(5rem,13vw,12.5rem)] leading-[0.78] tracking-[-0.075em] text-limestone">
          We Move Us Forward
        </h1>
      </AnimatedText>
      <div className="relative z-10 flex flex-col gap-3 text-limestone/70 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-lg leading-7">
          A cohesive June–September campaign proposal centering Global Teen Leaders,
          WAFF’s connective power, and the cultural weight of Abbey Road.
        </p>
        <p className="text-sm font-bold uppercase tracking-[0.24em]">May 2026</p>
      </div>
    </div>
  );
}
