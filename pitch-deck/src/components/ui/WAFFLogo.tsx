import Image from "next/image";
import { cn } from "@/lib/cn";

type WAFFLogoProps = {
  className?: string;
  height?: number;
};

export function WAFFLogo({ className, height = 24 }: WAFFLogoProps) {
  return (
    <Image
      src="/waff-logo.png"
      alt="We Are Family Foundation"
      width={Math.round(height * 4)}
      height={height}
      className={cn("h-auto", className)}
      priority
    />
  );
}
