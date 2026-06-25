"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

interface FaqTypoProps {
  title: string;
  className?: string;
}

export function FaqTypo({ title, className }: FaqTypoProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full max-w-4xl px-5 text-center z-10",
        className,
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold font-sans text-[#2B223D] mb-4"
      >
        {title}
      </motion.h2>
    </div>
  );
}
