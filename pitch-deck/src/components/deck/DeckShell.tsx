"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Slide } from "@/components/deck/Slide";
import { SlideTrack } from "@/components/deck/SlideTrack";
import { TOCButton } from "@/components/deck/TOCButton";
import { buildScrollPlan, getScrollState, getSlideScrollTop } from "@/lib/scroll";
import { slideRegistry } from "@/lib/slides";

const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const STEP_REVEAL_SPAN = 0.3;

function applyDeepProgress(slide: HTMLElement, progress: number) {
  const safeProgress = clamp(progress);
  slide.style.setProperty("--deep-progress", String(safeProgress));

  const meter = slide.querySelector<HTMLElement>("[data-deep-meter]");
  if (meter) {
    meter.style.width = `${safeProgress * 100}%`;
  }

  slide.querySelectorAll<HTMLElement>("[data-step-start]").forEach((step) => {
    const start = Number(step.dataset.stepStart ?? 0);
    const reveal = clamp((safeProgress - start) / STEP_REVEAL_SPAN);
    step.style.setProperty("--step-reveal", String(reveal));
  });
}

export function DeckShell() {
  const shellRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<ReturnType<typeof ScrollTrigger.create> | null>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const plan = useMemo(() => buildScrollPlan(slideRegistry), []);

  const scrollToSlide = useCallback(
    (id: string, instant = false) => {
      const index = slideRegistry.findIndex((slide) => slide.id === id);
      if (index < 0 || index >= slideRegistry.length) return;

      const start = triggerRef.current?.start ?? 0;
      const target = getSlideScrollTop(index, plan, window.innerHeight, start);

      if (instant) {
        window.scrollTo({ top: target, behavior: "instant" });
      } else {
        gsap.to(window, {
          scrollTo: { y: target, autoKill: false },
          duration: 0.5,
          ease: "power2.out",
        });
      }
    },
    [plan],
  );

  useEffect(() => {
    if (!shellRef.current || !pinRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const shell = shellRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    const slides = Array.from(track.querySelectorAll<HTMLElement>("[data-slide-panel]"));

    const updateTrack = (progress: number) => {
      const state = getScrollState(progress * plan.scrollUnits, plan);
      const x = -state.xIndex * window.innerWidth;
      gsap.set(track, { x, force3D: true });

      slides.forEach((slide, index) => {
        const weight = Number(slide.dataset.scrollWeight ?? 1);
        let deepProgress = index < state.segmentIndex ? 1 : 0;

        if (index === state.segmentIndex) {
          deepProgress = weight > 1 ? state.deepProgress : 1;
        }

        if (index < Math.floor(state.xIndex)) {
          deepProgress = 1;
        }

        applyDeepProgress(slide, deepProgress);
      });

      const nextActiveIndex = clamp(Math.round(state.xIndex), 0, slideRegistry.length - 1);
      if (activeIndexRef.current !== nextActiveIndex) {
        activeIndexRef.current = nextActiveIndex;
        setActiveIndex(nextActiveIndex);
      }
    };

    updateTrack(0);

    const trigger = ScrollTrigger.create({
      trigger: shell,
      pin,
      start: "top top",
      end: () => `+=${plan.scrollUnits * window.innerHeight * 0.2}`,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => updateTrack(self.progress),
      onRefresh: (self) => updateTrack(self.progress),
    });

    triggerRef.current = trigger;
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      trigger.kill();
      triggerRef.current = null;
    };
  }, [plan]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-limestone text-ink">
      <section ref={shellRef} className="relative min-h-screen">
        <div ref={pinRef} className="h-screen w-screen overflow-hidden">
          <SlideTrack ref={trackRef}>
            {slideRegistry.map((slide, index) => {
              const SlideContent = slide.component;
              return (
                <Slide key={slide.id} slide={slide} index={index}>
                  <SlideContent
                    id={slide.id}
                    index={index}
                    activeIndex={activeIndex}
                    scrollToSlide={scrollToSlide}
                  />
                </Slide>
              );
            })}
          </SlideTrack>
        </div>
      </section>
      <TOCButton visible={activeIndex > 1} onClick={() => scrollToSlide("contents", true)} />
    </main>
  );
}
