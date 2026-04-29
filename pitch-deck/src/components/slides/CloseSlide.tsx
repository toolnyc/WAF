
export function CloseSlide() {
  return (
    <div className="hero-photo relative -mx-8 -my-7 flex h-[calc(100%+3.5rem)] flex-col justify-between overflow-hidden px-8 py-10 md:-mx-14 md:-my-10 md:h-[calc(100%+5rem)] md:px-14 md:py-12">
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(204,255,102,0.23),transparent_25%),radial-gradient(circle_at_80%_75%,rgba(255,130,8,0.22),transparent_24%)]" />
      <div className="relative z-10 pt-16">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-join-lime">Final beat</p>
        <h2 className="font-display text-[clamp(5rem,15vw,14rem)] leading-[0.76] tracking-[-0.08em] text-limestone">WE ARE FAMILY.</h2>
      </div>
      <div className="relative z-10 flex flex-col gap-4 text-limestone/75 md:flex-row md:items-end md:justify-between">
        <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.04em]">
          What started as a song became a global movement. This season makes the next generation visible.
        </p>
        <p className="text-sm font-bold uppercase tracking-[0.22em]">Mac Concordia + Max Goldberg · JOIN Strategies</p>
      </div>
    </div>
  );
}
