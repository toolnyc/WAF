"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AnimatedTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
