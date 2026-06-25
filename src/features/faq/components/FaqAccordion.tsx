"use client";

import { motion } from "motion/react";
import { faqData } from "@/assets/asset-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";

export function FaqAccordion() {
  if (!faqData.items || faqData.items.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl relative z-10 px-5 mx-auto"
    >
      <div className="bg-white border border-[#F0EBE1] rounded-2xl shadow-sm p-6 md:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqData.items.map((item, index) => (
            <AccordionItem 
              key={index.toString()} 
              value={`item-${index}`}
              className="border-b border-[#F0EBE1] last:border-0"
            >
              <AccordionTrigger className="text-left text-[#2B223D] font-semibold text-sm md:text-base hover:text-[#B4805A] transition-colors py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#786C68] text-sm md:text-base leading-relaxed pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
