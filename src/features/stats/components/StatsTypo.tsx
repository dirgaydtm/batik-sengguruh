"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

interface StatsTypoProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function StatsTypo({ title, subtitle, className }: StatsTypoProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full max-w-6xl px-5 text-center z-10",
        className,
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#382F2C] mb-6 max-w-3xl"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-lg md:text-xl text-[#786C68] max-w-2xl font-medium"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
