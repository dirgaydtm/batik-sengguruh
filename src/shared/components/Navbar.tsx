"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "hamburgers/dist/hamburgers.css";
import { contactData } from "@/assets/asset-data";

const NAV_LINKS = [
  { label: "About Us", href: "#stats" },
  { label: "Services", href: "#program" },
  { label: "Our Blog", href: "#blog" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-9999 flex justi items-center backdrop-blur-lg"
    >
      <div className="flex w-full max-w-360 gap-6 px-5 py-4 md:py-5 md:px-10 mx-auto justify-between">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Image
            src="/batik-sengguruh.svg"
            alt="Batik Sengguruh"
            width={152}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center gap-1 rounded-full bg-[#966b4c] px-6 py-2.5 shadow-lg max-w-135">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent("Halo, saya ingin memesan batik")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block shrink-0 rounded-full bg-[#966b4c] px-6 py-3 text-sm text-white shadow-md transition-all hover:bg-[#966b4c]/80"
        >
          Shop Now
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`hamburger hamburger--collapse md:hidden! scale-60 p-0! ${menuOpen ? "is-active" : ""}`}
          aria-label="Toggle menu"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner bg-white! before:bg-white! after:bg-white!" />
          </span>
        </button>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-5 right-5 z-40 flex md:hidden flex-col gap-3 bg-[#966b4c]/95 backdrop-blur-md p-6 shadow-2xl rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 rounded-xl text-center text-sm font-semibold uppercase tracking-wider text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent("Halo, saya ingin memesan batik")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center rounded-xl bg-white text-[#966b4c] py-3 text-sm font-extrabold shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Shop Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
