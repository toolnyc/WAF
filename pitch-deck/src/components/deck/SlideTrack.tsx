import { forwardRef, type ReactNode } from "react";

type SlideTrackProps = {
  children: ReactNode;
};

export const SlideTrack = forwardRef<HTMLDivElement, SlideTrackProps>(function SlideTrack(
  { children },
  ref,
) {
  return (
    <div ref={ref} className="flex h-screen w-max will-change-transform">
      {children}
    </div>
  );
});
