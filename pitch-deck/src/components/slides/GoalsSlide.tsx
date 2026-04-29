import type { CSSProperties } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const goals = [
  "Center Global Teen Leader stories in their own words so donors, policymakers, and young changemakers understand the stakes.",
  "Focus philanthropic attention on the critical role the foundation plays in preparing GTLs for long-term success.",
  "Help GTLs build communications and thought-leadership skills that serve them during the campaign and beyond.",
];

export function GoalsSlide() {
  return (
    <div className="grid h-full gap-10 pt-16 md:grid-cols-[0.95fr_1.1fr] md:items-center">
      <SectionLabel eyebrow="We will">
        Create a compelling public narrative around the 17th Global Teen Leaders cohort.
      </SectionLabel>
      <div className="space-y-5">
        <p className="max-w-2xl text-xl leading-8 text-ink/70">
          One three-month campaign weaves the cohort launch, social content, and Abbey Road video into a cohesive story about an intrepid, intergenerational fight to advance climate solutions.
        </p>
        <div className="space-y-3">
          {goals.map((goal, index) => (
            <article
              key={goal}
              data-step-start={String(index * 0.32)}
              className="deep-step border-l-2 border-join-orange py-3 pl-5"
              style={{ "--step-start": String(index * 0.32) } as CSSProperties}
            >
              <p className="mb-2 text-sm font-medium text-join-orange">Goal {index + 1}</p>
              <p className="text-2xl font-semibold leading-snug tracking-[-0.03em]">{goal}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
