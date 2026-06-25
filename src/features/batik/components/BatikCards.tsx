"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { batikData, contactData } from "@/assets/asset-data";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

export function BatikCards() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-6xl relative z-10 px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
        {batikData.items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className={cn(
              "flex flex-col h-full",
              !isExpanded && idx >= 3 ? "hidden md:flex" : "flex",
            )}
          >
            {/* Image Placeholder */}
            <div className="w-full aspect-4/3 bg-linear-to-br from-[#FDF4EA] to-[#E6CDB8] rounded-2xl overflow-hidden relative mb-5 shadow-sm group">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay transition-transform duration-500 group-hover:scale-105" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-bold text-[#2B223D] mb-3">
                {item.title}
              </h3>
              <p className="text-[#786C68] text-sm leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              <Button
                className="w-fit self-end bg-transparent hover:bg-[#B4805A] border-[#B4805A] text-black py-5 hover:text-white font-medium rounded-lg group transition-all duration-300"
                asChild
              >
                <a
                  href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(item.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.buttonText}
                  <ArrowUpRight className="size-0 group-hover:size-4 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button (Mobile Only) */}
      {!isExpanded && batikData.items.length > 3 && (
        <div className="mt-10 flex justify-center md:hidden">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-full hover:bg-[#B4805A] text-white shadow-sm font-medium"
            size="lg"
          >
            Tampilkan Selanjutnya
          </Button>
        </div>
      )}
    </div>
  );
}
