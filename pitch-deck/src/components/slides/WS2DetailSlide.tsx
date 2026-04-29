import type { CSSProperties } from "react";

const formats = [
  ["Scrapbook carousels", "15–20 multi-slide profiles blending climate action, teen life, photos from home, and prompt-driven written responses."],
  ["What we're fighting for", "A serialized interview show: 5–10 social-first videos with standardized questions, fast hooks, and dual captions."],
  ["GTL clipping", "At least one short clip per GTL from interviews, speeches, webinars, podcasts, or audio-to-text assets."],
  ["Festival posters", "Just Peace Summit static and carousel assets that borrow from music lineup language for LinkedIn and Instagram."],
] as const;

export function WS2DetailSlide() {
  return (
    <div className="grid h-full gap-8 pt-16 md:grid-cols-[0.85fr_1.15fr] md:items-center">
      <div>
        <p className="mb-4 text-sm font-medium text-join-green">Content formats</p>
        <h2 className="mb-6 font-display text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">Platform-native, steady, and human.</h2>
        <p className="max-w-xl text-xl leading-8 text-ink/70">
          LinkedIn, TikTok, and Instagram work together to build awareness, curiosity, and excitement ahead of the Just Peace Summit.
        </p>
      </div>
      <div className="grid gap-px bg-ink/10 md:grid-cols-2">
        {formats.map(([title, copy], index) => (
          <article
            key={title}
            data-step-start={String(index * 0.2)}
            className="deep-step bg-limestone p-4 xl:p-5"
            style={{ "--step-start": String(index * 0.2) } as CSSProperties}
          >
            <div className="mb-4 flex aspect-[4/3] max-h-32 items-center justify-center rounded-sm bg-ink/5 p-4 xl:max-h-40">
              <div className="text-xs font-medium tracking-wide text-ink/40">Mockup area</div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-[-0.04em] xl:text-2xl">{title}</h3>
            <p className="text-sm leading-6 text-ink/68 xl:text-base xl:leading-7">{copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
