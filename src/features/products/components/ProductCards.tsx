"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { productsData } from "@/assets/asset-data";

export function ProductCards() {
  return (
    <div className="flex flex-col w-full max-w-6xl relative z-10 px-5 mx-auto">
      <div className="grid grid-cols-4 gap-6 w-full">
        {productsData.map((imgSrc, i) => (
          <motion.div
            key={i.toString()}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="w-full aspect-4/3 bg-white border border-[#F0EBE1] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden relative group"
          >
            <Image
              src={imgSrc}
              alt={`Product ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
