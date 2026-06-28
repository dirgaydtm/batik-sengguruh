"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { teamData } from "@/assets/asset-data";
import { Card, CardContent } from "@/shared/components/ui/card";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function TeamCards() {
  const owner = teamData.members[0];
  const creatives = teamData.members.slice(1);
  const [emblaRef] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
      loop: true,
    },
    [Autoplay({ delay: 2000, stopOnInteraction: true })],
  );

  return (
    <div className="flex flex-col w-full max-w-7xl gap-10 md:gap-14 relative z-10 px-5 mx-auto">
      {/* OWNER CARD */}
      {owner && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -5, scale: 1.01 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex justify-center max-w-4xl mx-auto"
        >
          <Card className="flex p-0 flex-col md:flex-row bg-[#FFFDF9] border border-[#E6CDB8] text-[#382F2C] overflow-hidden rounded-2xl relative transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(210,158,117,0.15)] w-full">
            <div className="w- md:w-1/2 aspect-square md:aspect-auto flex items-center justify-center relative">
              {owner.image ? (
                <Image
                  src={owner.image}
                  alt={owner.role}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
              )}
            </div>
            <CardContent className="p-8 md:p-12 flex flex-col items-center md:items-start justify-center gap-4 w-full md:w-1/2 text-center md:text-left">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-[#2B223D] mb-2">
                  {owner.role}
                </h3>
              </div>
              <p className="text-[#786C68] mt-2 leading-relaxed max-w-md hidden md:block">
                Memimpin Batik Sengguruh dengan visi untuk melestarikan
                keindahan budaya lokal melalui sentuhan modern dan kualitas
                premium.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* CREATIVES CAROUSEL */}
      {creatives.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full flex max-w-4xl mx-auto flex-col items-center"
        >
          <div
            className="w-full overflow-hidden cursor-grab active:cursor-grabbing px-2"
            ref={emblaRef}
          >
            <div
              className="flex -ml-4 md:-ml-6 touch-pan-y"
              style={{ backfaceVisibility: "hidden" }}
            >
              {creatives.map((member) => (
                <div
                  key={member.id}
                  className="flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 pl-4 md:pl-6 pb-6 pt-2"
                >
                  <Card className="flex p-0 flex-col bg-white border gap-0 border-[#E6CDB8] overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-[0_10px_30px_rgba(210,158,117,0.2)] transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-full aspect-square bg-[#F9F6F0] relative flex items-center justify-center p-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.role}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                      )}
                    </div>
                    <CardContent className="p-5 flex flex-col items-center justify-center bg-white border-t border-[#F5EDE3]">
                      <span className="text-black font-serif text-lg tracking-wider text-center">
                        {member.role}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          {/* Swipe Indicator for Mobile */}
          <p className="text-sm text-[#A89F91] mt-2 flex md:hidden items-center gap-2">
            <ArrowLeft />
            Geser untuk melihat anggota tim lainnya
            <ArrowRight />
          </p>
        </motion.div>
      )}
    </div>
  );
}
