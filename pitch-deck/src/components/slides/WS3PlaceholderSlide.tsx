
export function WS3PlaceholderSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[1fr_0.82fr] md:items-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-limestone/15 bg-limestone/8 p-7 shadow-2xl">
        <div className="aspect-video rounded-[1.35rem] bg-[radial-gradient(circle_at_50%_38%,rgba(252,250,237,0.24),transparent_22%),linear-gradient(135deg,rgba(0,79,166,0.45),rgba(0,0,0,0.55))]" />
        <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.26em] text-limestone/55">
          <span>Opening ceremony film</span>
          <span>1–3 min</span>
        </div>
      </div>
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-join-blue">Creative vision</p>
        <h2 className="mb-6 font-display text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">Make the room feel the size of the moment.</h2>
        <div className="space-y-4 text-xl leading-8 text-limestone/72">
          <p>Honor Abbey Road’s cultural weight without letting the venue outshine the youth leaders.</p>
          <p>Center the cohort as the emotional heart of the evening and invite generosity toward WAFF and WAFF UK.</p>
          <p>Final deliverable due September 14 for the September 25 fundraiser and Just Peace Summit opening.</p>
        </div>
      </div>
    </div>
  );
}
