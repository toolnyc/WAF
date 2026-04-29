import type { ComponentType } from "react";
import { ArcOverviewSlide } from "@/components/slides/ArcOverviewSlide";
import { ArtDirectionSlide } from "@/components/slides/ArtDirectionSlide";
import { BudgetSlide } from "@/components/slides/BudgetSlide";
import { CloseSlide } from "@/components/slides/CloseSlide";
import { CoverSlide } from "@/components/slides/CoverSlide";
import { GoalsSlide } from "@/components/slides/GoalsSlide";
import { ProcessSlide } from "@/components/slides/ProcessSlide";
import { ThemeSlide } from "@/components/slides/ThemeSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { TOCSlide } from "@/components/slides/TOCSlide";
import { WS1DetailSlide } from "@/components/slides/WS1DetailSlide";
import { WS1TitleSlide } from "@/components/slides/WS1TitleSlide";
import { WS2DetailSlide } from "@/components/slides/WS2DetailSlide";
import { WS2TitleSlide } from "@/components/slides/WS2TitleSlide";
import { WS3PlaceholderSlide } from "@/components/slides/WS3PlaceholderSlide";
import { WS3TitleSlide } from "@/components/slides/WS3TitleSlide";

export type SlideComponentProps = {
  id: string;
  index: number;
  activeIndex: number;
  scrollToSlide: (id: string) => void;
};

export type DeckSlide = {
  id: string;
  label: string;
  kicker: string;
  scrollWeight: number;
  accent: string;
  theme: "light" | "dark" | "color";
  component: ComponentType<SlideComponentProps>;
};

export const slideRegistry: DeckSlide[] = [
  { id: "cover", label: "We Move Us Forward", kicker: "Cover", scrollWeight: 2, accent: "#CCFF66", theme: "color", component: CoverSlide },
  { id: "contents", label: "Table of Contents", kicker: "Home", scrollWeight: 12, accent: "#241F21", theme: "light", component: TOCSlide },
  { id: "goals", label: "We Will + Goals", kicker: "Intro", scrollWeight: 6, accent: "#FF8208", theme: "light", component: GoalsSlide },
  { id: "theme", label: "Core Theme", kicker: "Creative Northstar", scrollWeight: 8, accent: "#CCFF66", theme: "dark", component: ThemeSlide },
  { id: "art-direction", label: "Art Direction", kicker: "Look + Feel", scrollWeight: 10, accent: "#F2C740", theme: "light", component: ArtDirectionSlide },
  { id: "arc", label: "Campaign Arc Overview", kicker: "June–September", scrollWeight: 8, accent: "#004FA6", theme: "light", component: ArcOverviewSlide },
  { id: "ws1-title", label: "2026 GTL Launch", kicker: "Workstream 1", scrollWeight: 4, accent: "#FF8208", theme: "color", component: WS1TitleSlide },
  { id: "ws1-detail", label: "GTL Launch Strategy", kicker: "Workstream 1", scrollWeight: 14, accent: "#FF8208", theme: "light", component: WS1DetailSlide },
  { id: "ws2-title", label: "Pre-Summit Social", kicker: "Workstream 2", scrollWeight: 4, accent: "#3BB54A", theme: "color", component: WS2TitleSlide },
  { id: "ws2-detail", label: "Content Formats", kicker: "Workstream 2", scrollWeight: 12, accent: "#3BB54A", theme: "light", component: WS2DetailSlide },
  { id: "ws3-title", label: "Abbey Road Video", kicker: "Workstream 3", scrollWeight: 2, accent: "#004FA6", theme: "dark", component: WS3TitleSlide },
  { id: "ws3-vision", label: "Creative Vision", kicker: "Workstream 3", scrollWeight: 2, accent: "#004FA6", theme: "dark", component: WS3PlaceholderSlide },
  { id: "process", label: "Process", kicker: "How We Work", scrollWeight: 5, accent: "#F2C740", theme: "light", component: ProcessSlide },
  { id: "timeline", label: "Timeline", kicker: "Pacing", scrollWeight: 10, accent: "#004FA6", theme: "light", component: TimelineSlide },
  { id: "budget", label: "Budget", kicker: "Investment", scrollWeight: 2, accent: "#FF8208", theme: "light", component: BudgetSlide },
  { id: "close", label: "WE ARE FAMILY.", kicker: "Close", scrollWeight: 2, accent: "#CCFF66", theme: "dark", component: CloseSlide },
];
