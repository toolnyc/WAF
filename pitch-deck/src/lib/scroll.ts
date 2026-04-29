export type ScrollPlanSlide = {
  id: string;
  label: string;
  scrollWeight: number;
};

export type ScrollPlan = {
  slides: ScrollPlanSlide[];
  starts: number[];
  totalWeight: number;
  scrollUnits: number;
};

export type ScrollState = {
  segmentIndex: number;
  xIndex: number;
  localUnits: number;
  deepProgress: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function buildScrollPlan(slides: ScrollPlanSlide[]): ScrollPlan {
  const starts: number[] = [];
  let totalWeight = 0;

  slides.forEach((slide) => {
    starts.push(totalWeight);
    totalWeight += Math.max(1, slide.scrollWeight);
  });

  return {
    slides,
    starts,
    totalWeight,
    scrollUnits: totalWeight,
  };
}

export function getScrollState(positionUnits: number, plan: ScrollPlan): ScrollState {
  const lastIndex = plan.slides.length - 1;
  const clampedPosition = clamp(positionUnits, 0, plan.scrollUnits);
  let segmentIndex = lastIndex;

  for (let index = 0; index < lastIndex; index += 1) {
    if (clampedPosition >= plan.starts[index] && clampedPosition < plan.starts[index + 1]) {
      segmentIndex = index;
      break;
    }
  }

  if (clampedPosition >= plan.starts[lastIndex]) {
    segmentIndex = lastIndex;
  }

  const slide = plan.slides[segmentIndex];
  const localUnits = clampedPosition - plan.starts[segmentIndex];
  const weight = Math.max(1, slide.scrollWeight);
  // Hold phase = 80% of weight, transition phase = 20%
  const holdUnits = weight * 0.8;
  const transitionUnits = weight * 0.2;

  if (segmentIndex === lastIndex) {
    return {
      segmentIndex,
      xIndex: lastIndex,
      localUnits,
      deepProgress: 1,
    };
  }

  // Stay on slide during hold phase (xIndex stays at segmentIndex)
  // Then transition to next slide during transition phase
  const transitionProgress = clamp((localUnits - holdUnits) / transitionUnits, 0, 1);
  // Deep progress fills during hold phase
  const deepProgress = clamp(localUnits / holdUnits, 0, 1);

  return {
    segmentIndex,
    xIndex: segmentIndex + transitionProgress,
    localUnits,
    deepProgress,
  };
}

export function getSlideScrollTop(index: number, plan: ScrollPlan, viewportHeight: number, start = 0) {
  return start + (plan.starts[index] ?? 0) * viewportHeight;
}
