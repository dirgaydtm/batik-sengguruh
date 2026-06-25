// =========================================================================
// CENTRALIZED ASSET DATA CONFIGURATION
// =========================================================================
// UMKM / Pengelola Web dapat dengan mudah mengganti foto pada halaman Hero
// dengan cara:
// 1. Letakkan file foto baru di dalam folder "src/assets/"
// 2. Ubah import di bawah ini agar mengarah ke file foto yang baru.
// =========================================================================

import hero1 from "./hero1.png";
import hero2 from "./hero2.png";

export const heroImage = {
  card1: {
    src: hero1,
    alt: "Batik Sengguruh Hero Card 1",
  },
  card2: {
    src: hero2,
    alt: "Batik Sengguruh Hero Card 2",
  },
};

export const statsData = {
  title: "Dipercaya ratusan klien di Indonesia",
  subtitle:
    "Solusi seragam batik, pelatihan sekolah & instansi, dan produksi batik handmade berkualitas",
  cards: [
    {
      id: "motif",
      subtitle: "Tersedia sekarang",
      value: "250",
      label: "Motif Batik",
    },
    {
      id: "klien",
      subtitle: "Terus bertambah",
      value: "500 +",
      label: "Klien dan Mitra",
    },
    {
      id: "produksi",
      subtitle: "Total Produksi",
      value: "10.000 +",
      label: "Lembar Kain",
      chartData: [
        { name: "Jan", val: 2000 },
        { name: "Feb", val: 5000 },
        { name: "Mar", val: 3000 },
        { name: "Apr", val: 5000 },
        { name: "May", val: 4500 },
        { name: "Jun", val: 7000 },
        { name: "Jul", val: 6500 },
        { name: "Aug", val: 8000 },
        { name: "Sep", val: 9500 },
        { name: "Oct", val: 10000 },
      ],
    },
  ],
};
