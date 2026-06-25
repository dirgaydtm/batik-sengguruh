"use client";

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

  return (
    <div className="flex flex-col w-full max-w-4xl gap-6 md:gap-10 relative z-10 px-5 mx-auto">
      {/* OWNER CARD */}
      {owner && (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -5, scale: 1.01 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex justify-center"
        >
          <Card className="flex p-0 flex-col md:flex-row bg-[#FFFDF9] border border-[#E6CDB8] text-[#382F2C] overflow-hidden rounded-2xl relative transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(210,158,117,0.15)] w-full">
            <div className="w-full md:w-1/2 aspect-4/3 md:aspect-auto flex items-center justify-center relative">
              {owner.image ? (
                <Image
                  src={owner.image}
                  alt={owner.role}
                  fill
                  className="object-cover"
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

      {/* CREATIVES GRID */}
      {creatives.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {creatives.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full w-full"
            >
              <Card className="flex p-0 flex-col bg-white border gap-0 border-[#E6CDB8] overflow-hidden rounded-2xl h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-full aspect-2/1 bg-linear-to-br relative flex items-center justify-center p-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.role}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                  )}
                </div>
                <CardContent className="p-2 flex items-center justify-center">
                  <span className="text-black font-serif text-lg tracking-wider text-center">
                    {member.role}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
