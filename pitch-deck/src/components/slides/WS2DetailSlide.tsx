import type { CSSProperties } from "react";

const formats = [
  ["Scrapbook carousels", "15–20 multi-slide profiles blending climate action, teen life, photos from home, and prompt-driven written responses."],
  ["What We’re Fighting For", "A serialized interview show: 5–10 social-first videos with standardized questions, fast hooks, and dual captions."],
  ["GTL clipping", "At least one short clip per GTL from interviews, speeches, webinars, podcasts, or audio-to-text assets."],
  ["Festival posters", "Just Peace Summit static and carousel assets that borrow from music lineup language for LinkedIn and Instagram."],
] as const;

export function WS2DetailSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[0.85fr_1.15fr] md:items-center">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-join-green">Content formats</p>
        <h2 className="mb-6 font-display text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">Platform-native, steady, and human.</h2>
        <p className="max-w-xl text-xl leading-8 text-ink/70">
          LinkedIn, TikTok, and Instagram work together to build awareness, curiosity, and excitement ahead of the Just Peace Summit.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {formats.map(([title, copy], index) => (
          <article
            key={title}
            data-step-start={String(index * 0.25)}
            className="deep-step rounded-3xl border border-ink/10 bg-white/65 p-5 shadow-sm"
            style={{ "--step-start": String(index * 0.25) } as CSSProperties}
          >
            <div className="mb-5 aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,rgba(59,181,74,0.22),rgba(36,31,33,0.08)),radial-gradient(circle_at_70%_25%,rgba(204,255,102,0.65),transparent_20%)] p-4">
              <div className="h-full rounded-xl border border-ink/12 bg-limestone/70 p-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/55">Mockup area</div>
            </div>
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
            <p className="leading-7 text-ink/68">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
