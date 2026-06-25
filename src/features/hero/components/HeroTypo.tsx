"use client";

import { motion } from "motion/react";
import { cn } from "@/shared/lib/utils";

interface HeroCopyProps {
  className?: string;
  children?: React.ReactNode;
}

export function HeroTypo({ className, children }: HeroCopyProps) {
  return (
    <div className={cn("flex flex-col gap-6 max-w-140 items-center md:items-start", className)}>
      <motion.h1
        className="text-2xl md:text-5xl font-extrabold leading-[1.12] tracking-tight text-white text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
      >
        Batik Custom &amp; Workshop
        <br />
        Edukasi Profesional di Malang
      </motion.h1>

      <motion.p
        className="max-w-115 text-sm md:text-base leading-relaxed text-neutral-400 text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
      >
        Solusi seragam batik, pelatihan sekolah &amp; instansi, dan produksi
        batik handmade berkualitas.
      </motion.p>

      {children}
    </div>
  );
}
