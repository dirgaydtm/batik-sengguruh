"use client"

import { motion } from "motion/react";
import GlowOrb from "@/shared/components/GlowOrb";

export default function LocationContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-12 pb-24">
      <GlowOrb className="top-1/2 left-1/4" />
      <div className="w-full max-w-5xl px-5 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full aspect-4/5 md:aspect-21/9 bg-[#E5E5E5] rounded-2xl overflow-hidden relative shadow-sm border border-[#F0EBE1]"
        >
          <iframe
            title="Maps Griya Batik Sengguruh"
            src="https://www.google.com/maps?q=Griya+Batik+Sengguruh+Malang&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
