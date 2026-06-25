"use client";
import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export default function GlowOrb({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.1, 0.3, 0.1],
        translateY: [0, 100, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "pointer-events-none absolute size-96 rounded-full bg-[#FF9800] blur-[275px]",
        className,
      )}
    />
  );
}
