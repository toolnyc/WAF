import { AnimatedText } from "@/components/ui/AnimatedText";
import { JoinLogo } from "@/components/ui/JoinLogo";
import { WAFFLogo } from "@/components/ui/WAFFLogo";

export function CoverSlide() {
  return (
    <div className="relative -mx-8 -my-7 flex h-[calc(100%+3.5rem)] flex-col justify-between overflow-hidden bg-join-orange px-8 py-10 md:-mx-14 md:-my-10 md:h-[calc(100%+5rem)] md:px-14 md:py-12">
      <div className="relative z-10 flex items-center justify-between">
        <JoinLogo height={20} className="opacity-90" />
        <WAFFLogo height={28} className="opacity-90" />
      </div>
      <AnimatedText className="relative z-10 max-w-6xl">
        <p className="mb-5 text-sm font-medium tracking-wide text-ink/70">2026 GTL Campaign</p>
        <h1 className="font-[var(--font-waff-primary)] text-[clamp(5rem,13vw,12.5rem)] font-extrabold leading-[0.78] tracking-[-0.04em] text-ink">
          We Move Us <em className="not-italic" style={{ fontStyle: "italic" }}>Forward</em>
        </h1>
      </AnimatedText>
      <div className="relative z-10 flex flex-col gap-3 text-ink/70 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-lg leading-7">
          A cohesive June–September campaign centering Global Teen Leaders,
          their connective power, and the cultural weight of Abbey Road.
        </p>
        <p className="text-sm font-medium tracking-wide">May 2026</p>
      </div>
    </div>
  );
}
