"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

type ImpactNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function ImpactNumber({ value, prefix = "", suffix = "", duration = 1.2 }: ImpactNumberProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [duration, value]);

  return (
    <span>
      {prefix}
      {new Intl.NumberFormat("en-US").format(display)}
      {suffix}
    </span>
  );
}
