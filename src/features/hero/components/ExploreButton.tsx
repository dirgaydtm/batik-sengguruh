"use client";

import { Compass } from "lucide-react";
import { motion } from "motion/react";

export function ExploreButton() {
  return (
    <motion.a
      href="#explore"
      className="inline-flex w-fit cursor-pointer items-center justify-center md:justify-start gap-2.5 rounded-lg bg-[#a27452] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#b78662]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.75 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Compass className="size-6" />
      Explore Now
    </motion.a>
  );
}
