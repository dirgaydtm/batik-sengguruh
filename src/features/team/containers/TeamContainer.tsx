"use client";

import { motion } from "motion/react";
import { teamData } from "@/assets/asset-data";
import { TeamCards } from "../components/TeamCards";

export default function TeamContainer() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl px-5 text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-[#2B223D]"
        >
          {teamData.title}
        </motion.h2>
      </div>
      <TeamCards />
    </section>
  );
}
