"use client"

import { gsap } from "gsap";
import { motion, useInView, Variants} from "motion/react";
import { useEffect, useRef } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { statsData } from "@/assets/asset-data";

import { Card, CardContent } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";

function NumberTicker({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Extract numeric part and suffix
  const match = value.match(/([\d.,]+)\s*(.*)/);
  const numericPart = match ? match[1].replace(/\./g, "") : "0";
  const suffix = match ? match[2] : "";
  const targetNumber = parseInt(numericPart, 10) || 0;

  useEffect(() => {
    if (isInView && numberRef.current) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: targetNumber,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = Math.floor(obj.val).toLocaleString(
              "id-ID",
            );
          }
        },
      });
    }
  }, [isInView, targetNumber]);

  return (
    <span ref={containerRef} className={className}>
      <span ref={numberRef}>0</span>
      {suffix && <span className="ml-1 text-[#D29E75]">{suffix}</span>}
    </span>
  );
}

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

export function StatsCards() {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-5">
      {/* Glow Effect behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#A8583B] opacity-30 blur-[100px] -z-10 rounded-full mix-blend-screen pointer-events-none" />

      {statsData.cards.map((card, idx) => (
        <motion.div
          key={card.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: idx * 0.2 }}
          className={cn(
            "flex flex-col h-full",
            // Make the middle card slightly taller on desktop
            idx === 1 && "md:-mt-4 md:mb-4",
          )}
        >
          <Card
            className={cn(
              "flex-1 flex flex-col bg-[#1C1615] border border-[#382F2C] hover:scale-105 transition-all duration-300 text-white overflow-visible rounded-2xl relative",
              "md:justify-between justify-center",
            )}
          >
            <CardContent className="p-6 md:p-8 flex flex-col items-start justify-center gap-4 h-full min-h-35">
              <p className="text-[#A8A09D] font-medium tracking-wide text-sm md:text-base uppercase block">
                {card.subtitle}
              </p>

              {card.id === "produksi" && card.chartData ? (
                <div className="w-full h-12 my-2 relative hidden md:block">
                  {/* Subtle glow behind the chart */}
                  <div className="absolute inset-0 bg-[#A66249] blur-xl opacity-20" />
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={card.chartData}>
                      <Line
                        type="monotone"
                        dataKey="val"
                        stroke="#CE8868"
                        strokeWidth={3}
                        dot={false}
                        isAnimationActive={true}
                        animationDuration={2000}
                        animationEasing="ease-in-out"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="w-full h-12 my-2 hidden md:block" /> // spacer for consistency if no chart
              )}

              <div className="mt-auto flex flex-col items-end md:items-start not-md:self-end">
                <NumberTicker
                  value={card.value}
                  className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-none"
                />
                <p className="text-[#D29E75] max-md:text-white font-medium mt-1 md:mt-2 text-base md:text-lg">
                  {card.label}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
