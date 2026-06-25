"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { contactData, programsData } from "@/assets/asset-data";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";

export function ProgramCards() {
  return (
    <div className="flex flex-col w-full max-w-4xl gap-6 md:gap-8 relative z-10 px-5 mx-auto">
      {programsData.items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
        >
          <Card className="flex flex-col md:flex-row p-5 md:p-8 gap-5 md:gap-8 bg-white border border-[#F0EBE1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 rounded-2xl w-full">
            {/* Left Column: Text Content */}
            <div className="flex flex-col justify-between flex-1 order-1">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2B223D] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#786C68] text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Desktop Button (Hidden on Mobile) */}
              <Button
                className="hidden md:flex mt-8 w-fit bg-[#B4805A] hover:bg-[#9B6A46] group text-white transition-all overflow-hidden duration-300 ease-out shadow-sm font-medium py-5"
                size="lg"
                asChild
              >
                <a
                  href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(item.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.buttonText}
                  <ArrowUpRight className="h-4 opacity-40 size-0 group-hover:size-4 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </Button>
            </div>

            {/* Right Column: Image Placeholder */}
            <div className="w-full md:w-80 lg:w-95 aspect-4/3 md:aspect-auto bg-[#A8A8A8] rounded-xl overflow-hidden relative order-2">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
              )}
            </div>

            {/* Mobile Button (Hidden on Desktop) */}
            <Button
              className="flex md:hidden order-3 w-full mt-2 bg-[#B4805A] hover:bg-[#9B6A46] text-white shadow-sm font-medium"
              size="lg"
              asChild
            >
              <a
                href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(item.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.buttonText}
                <ArrowUpRight className="w-4 h-4 mr-2" />
              </a>
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
