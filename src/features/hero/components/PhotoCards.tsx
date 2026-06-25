"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { heroImage } from "@/assets/asset-data";
import { cn } from "@/shared/lib/utils";

export function PhotoCards({ className }: { className?: string }) {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 });

    gsap.set([card1Ref.current, card2Ref.current], {
      transformOrigin: "center center",
    });

    tl.fromTo(
      card1Ref.current,
      { opacity: 0, scale: 0.85, rotate: -6 },
      {
        opacity: 1,
        scale: 1,
        rotate: -3,
        duration: 0.9,
        ease: "back.out(1.4)",
      },
    ).fromTo(
      card2Ref.current,
      { opacity: 0, scale: 0.85, rotate: 8 },
      {
        opacity: 1,
        scale: 1,
        rotate: 2,
        duration: 0.9,
        ease: "back.out(1.4)",
      },
      "-=0.5",
    );

    // Idle float
    gsap.to(card1Ref.current, {
      y: "-=10",
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.6,
    });
    gsap.to(card2Ref.current, {
      y: "+=8",
      duration: 3.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });
  }, []);

  return (
    <div
      className={cn("relative w-full max-w-70 h-85 md:max-w-120", className)}
    >
      {/* Kartu Belakang */}
      <div
        ref={card1Ref}
        style={{ opacity: 0 }}
        className="absolute bottom-0 left-0 aspect-2/3 w-52 md:w-76 rounded-3xl bg-[#d1d5db] shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden"
      >
        <Image
          src={heroImage.card1.src}
          alt={heroImage.card1.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Kartu Depan */}
      <div
        ref={card2Ref}
        style={{ opacity: 0 }}
        className="absolute top-0 right-0 w-52 aspect-2/3 md:w-76 rounded-3xl bg-[#d1d5db] shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden"
      >
        <Image
          src={heroImage.card2.src}
          alt={heroImage.card2.alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
