"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { partnersData } from "@/assets/asset-data";
import { Card, CardContent } from "@/shared/components/ui/card";

export function PartnersCards() {
  if (!partnersData.items || partnersData.items.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col w-full max-w-4xl relative z-10 px-5 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {partnersData.items.map((imgSrc, idx) => (
          <motion.div
            key={idx.toString()}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
          >
            <Card className="flex items-center justify-center p-6 bg-white border border-[#F0EBE1] shadow-sm rounded-2xl aspect-square hover:shadow-md transition-shadow">
              <CardContent className="p-0 flex items-center justify-center w-full h-full relative">
                <Image
                  src={imgSrc}
                  alt={`Partner ${idx + 1}`}
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
