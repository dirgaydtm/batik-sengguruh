"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

interface ProductTypoProps {
  title: string;
  className?: string;
}

export function ProductTypo({ title, className }: ProductTypoProps) {
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
        className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-[#2B223D]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
