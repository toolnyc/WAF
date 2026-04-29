import Image from "next/image";
import { cn } from "@/lib/cn";

type JoinLogoProps = {
  className?: string;
  height?: number;
};

export function JoinLogo({ className, height = 24 }: JoinLogoProps) {
  return (
    <Image
      src="/join-logo.png"
      alt="Join Strategies"
      width={Math.round(height * 3.2)}
      height={height}
      className={cn("h-auto", className)}
      priority
    />
  );
}
