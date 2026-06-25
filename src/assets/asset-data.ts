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
