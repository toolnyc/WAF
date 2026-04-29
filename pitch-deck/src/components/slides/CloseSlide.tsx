import { JoinLogo } from "@/components/ui/JoinLogo";

export function CloseSlide() {
  return (
    <div className="relative -mx-8 -my-7 flex h-[calc(100%+3.5rem)] flex-col justify-between overflow-hidden bg-join-green px-8 py-10 md:-mx-14 md:-my-10 md:h-[calc(100%+5rem)] md:px-14 md:py-12">
      <div className="relative z-10 pt-16">
        <p className="mb-5 text-sm font-medium tracking-wide text-ink/70">Final beat</p>
        <h2 className="font-[var(--font-waff-primary)] text-[clamp(5rem,15vw,14rem)] font-extrabold leading-[0.76] tracking-[-0.04em] text-ink">We are family.</h2>
      </div>
      <div className="relative z-10 flex flex-col gap-4 text-ink/70 md:flex-row md:items-end md:justify-between">
        <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.04em]">
          What started as a song became a global movement. This season makes the next generation visible.
        </p>
        <JoinLogo height={24} className="opacity-80" />
      </div>
    </div>
  );
}
