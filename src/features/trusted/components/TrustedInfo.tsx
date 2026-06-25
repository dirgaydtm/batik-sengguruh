"use client";

import { motion } from "motion/react";
import { trustedData } from "@/assets/asset-data";

export function TrustedInfo() {
  return (
    <div className="flex flex-col w-full md:w-1/2">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold font-sans text-[#2B223D] mb-4"
      >
        {trustedData.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-[#786C68] text-sm md:text-base leading-relaxed mb-8 md:mb-12"
      >
        {trustedData.subtitle}
      </motion.p>

      <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-3">
        {trustedData.stats.map((stat, idx) => (
          <motion.div
            key={idx.toString()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2 + idx * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-sans text-[#2B223D] mb-1">
              {stat.value}
            </h3>
            <p className="text-xs md:text-sm font-semibold text-[#283891]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
