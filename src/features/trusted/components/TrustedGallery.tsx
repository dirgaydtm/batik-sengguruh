"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { trustedData } from "@/assets/asset-data";

export function TrustedGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2 min-h-75 md:min-h-0"
    >
      {trustedData.images.map((imgSrc, idx) => (
        <div
          key={idx.toString()}
          className="w-full h-full bg-[#E5E5E5] rounded-xl overflow-hidden relative"
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={`Trusted ${idx}`}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
      ))}
    </motion.div>
  );
}
