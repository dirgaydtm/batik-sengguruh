"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { contactData } from "@/assets/asset-data";

function FooterInfo() {
  return (
    <div className="flex flex-col w-full md:w-1/2">
      <h3 className="text-xl md:text-2xl font-bold mb-6 font-sans">
        {contactData.footerTitleInfo}
      </h3>
      <div className="flex flex-col space-y-4">
        {contactData.contacts.map((contact, idx) => {
          let Icon: IconType = FaWhatsapp;
          if (contact.type === "email") Icon = FaEnvelope;
          if (contact.type === "instagram") Icon = FaInstagram;
          if (contact.type === "tiktok") Icon = FaTiktok;
          if (contact.type === "youtube") Icon = FaYoutube;

          return (
            <a
              key={idx.toString()}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#E8E6E1] hover:text-white transition-colors text-sm md:text-base font-medium group"
            >
              <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{contact.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function FooterForm() {
  const [formData, setFormData] = useState({ nama: "", email: "", pesan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${formData.nama} (${formData.email}).\n\n${formData.pesan}`;
    const url = `https://wa.me/${contactData.whatsapp}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 mt-12 md:mt-0">
      <h3 className="text-xl md:text-2xl font-bold mb-6 font-sans text-white">
        {contactData.footerTitleForm}
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Nama"
            required
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            className="w-full px-4 py-3 bg-white text-[#2B223D] placeholder-[#A8A8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#B4805A] transition-all font-sans text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-white text-[#2B223D] placeholder-[#A8A8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#B4805A] transition-all font-sans text-sm"
          />
        </div>
        <textarea
          placeholder="Pesan"
          required
          rows={5}
          value={formData.pesan}
          onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
          className="w-full px-4 py-3 bg-white text-[#2B223D] placeholder-[#A8A8A8] rounded focus:outline-none focus:ring-2 focus:ring-[#B4805A] transition-all font-sans text-sm resize-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#AE7D5E] hover:bg-[#9B6F53] text-white font-bold rounded transition-colors"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#5D463B] rounded-t-[2rem] text-white pt-8 md:pt-20 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <FooterInfo />
        <FooterForm />
      </div>
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-white/20"></div>
    </footer>
  );
}
