
export function WS3TitleSlide() {
  return (
    <div className="hero-photo relative -mx-8 -my-7 flex h-[calc(100%+3.5rem)] flex-col justify-between overflow-hidden px-8 py-10 md:-mx-14 md:-my-10 md:h-[calc(100%+5rem)] md:px-14 md:py-12">
      <div className="absolute inset-0 bg-black/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(0,79,166,0.55),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative z-10 max-w-6xl pt-16">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-join-blue">Workstream 3</p>
        <h2 className="font-display text-[clamp(5rem,12vw,11rem)] leading-[0.82] tracking-[-0.075em] text-limestone">
          Abbey Road Opening Ceremony Video
        </h2>
      </div>
      <p className="relative z-10 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-limestone/85">
        A 1–3 minute donor-facing film worthy of the room: artists, CEOs, founders, philanthropists, and this year’s GTLs stepping into the spotlight.
      </p>
    </div>
  );
}
