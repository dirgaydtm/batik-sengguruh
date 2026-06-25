// =========================================================================
// CENTRALIZED ASSET DATA CONFIGURATION
// =========================================================================
// UMKM / Pengelola Web dapat dengan mudah mengganti foto pada halaman Hero
// dengan cara:
// 1. Letakkan file foto baru di dalam folder "src/assets/"
// 2. Ubah import di bawah ini agar mengarah ke file foto yang baru.
// =========================================================================

import batik1 from "./batik1.png";
import batik2 from "./batik1.png";
import batik3 from "./batik1.png";
import batik4 from "./batik1.png";
import batik5 from "./batik1.png";
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";
import member1 from "./member1.png";
import member2 from "./member2.png";
import member3 from "./member3.png";
import member4 from "./member4.png";
import member5 from "./member5.png";
import member6 from "./member6.png";
import owner from "./owner.png";
import product1 from "./product1.png";
import product2 from "./product2.png";
import product3 from "./product3.png";
import product4 from "./product4.png";
import product5 from "./product5.png";
import product6 from "./product6.png";
import product7 from "./product7.png";
import product8 from "./product8.png";
import product9 from "./product9.png";
import product10 from "./product10.png";
import product11 from "./product11.png";
import product12 from "./product12.png";
import program1 from "./program1.png";
import program2 from "./program2.png";
import program3 from "./program3.png";

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

export const teamData = {
  title: "Meet Our Team",
  members: [
    {
      id: "owner",
      name: "Budi Santoso",
      role: "Founder & Owner",
      image: owner,
    },
    {
      id: "member-1",
      role: "Lead Creative Designer",
      image: member1,
    },
    {
      id: "member-2",
      role: "Lead Creative Designer",
      image: member2,
    },
    {
      id: "member-3",
      role: "Master Batik Artisan",
      image: member3,
    },
    {
      id: "member-4",
      role: "Pattern Specialist",
      image: member4,
    },
    {
      id: "member-5",
      role: "Production Manager",
      image: member5,
    },
    {
      id: "member-6",
      role: "Quality Control",
      image: member6,
    },
  ],
};

export const contactData = {
  whatsapp: "6281234567890", // Ganti dengan nomor WA UMKM yang asli (gunakan format 62...)
};

export const programsData = {
  title: "Program Kami",
  items: [
    {
      id: "program-1",
      title: "Workshop",
      description: "Belajar membatik langsung dari pengrajin berpengalaman. Cocok untuk sekolah, instansi pemerintah, komunitas, maupun acara team building perusahaan",
      buttonText: "Pelajari Lebih Lanjut",
      image: program1,
      waMessage: "Halo min, saya tertarik dan ingin mendapat informasi lebih lanjut tentang Batik Sengguruh.",
    },
    {
      id: "program-2",
      title: "Kunjungan",
      description: "Ajak siswa atau rombongan Anda mengunjungi galeri dan workshop batik kami di Malang. Saksikan langsung proses pembuatan batik dari awal hingga jadi.",
      buttonText: "Jadwalkan Kunjungan",
      image: program2,
      waMessage: "Halo min, saya berencana untuk menjadwalkan Kunjungan ke Batik Sengguruh.",
    },
    {
      id: "program-3",
      title: "Custom Batik",
      description: "Pesan seragam batik, souvenir, atau kain batik eksklusif dengan motif dan warna pilihan Anda sendiri. Minimum order fleksibel, cocok untuk sekolah hingga instansi besar.",
      buttonText: "Pesan Sekarang",
      image: program3,
      waMessage: "Halo min, saya ingin berdiskusi mengenai pemesanan Custom Batik.",
    },
  ]
};

export const batikData = {
  title: "Choose Our Batik",
  items: [
    {
      id: "product-1",
      title: "Batik Tulis",
      description: "Dikerjakan langsung menggunakan canting secara manual, Batik Tulis kami menawarkan detail memukau dan nilai seni yang tak lekang oleh waktu. Setiap lembarnya eksklusif dan bercerita.",
      buttonText: "Pesan Batik Tulis",
      image: batik1,
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Tulis Sengguruh.",
    },
    {
      id: "product-2",
      title: "Batik Cap",
      description: "Menggabungkan keindahan motif tradisional dengan teknik pengecapan, menghasilkan kain batik yang rapi dan elegan, sangat cocok untuk kebutuhan seragam atau pakaian harian.",
      buttonText: "Pesan Batik Cap",
      image: batik2,
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Cap Sengguruh.",
    },
    {
      id: "product-3",
      title: "Batik Caplis",
      description: "Perpaduan unik antara teknik cap untuk pola dasar dan sentuhan tulis manual untuk detail warna, menciptakan harmoni yang indah namun dengan harga yang lebih terjangkau.",
      buttonText: "Pesan Batik Caplis",
      image: batik3,
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Caplis Sengguruh.",
    },
    {
      id: "product-4",
      title: "Batik Ecoprint",
      description: "Dibuat dengan pewarna alami dan cetakan daun/bunga asli, Ecoprint menghadirkan pola organik yang ramah lingkungan dengan keunikan corak pada setiap potongan kainnya.",
      buttonText: "Pesan Batik Ecoprint",
      image: batik4,
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Ecoprint Sengguruh.",
    },
    {
      id: "product-5",
      title: "Batik Shibori",
      description: "Teknik ikat celup ala Jepang yang diaplikasikan dengan sentuhan lokal, menghasilkan motif gradasi dan abstrak yang modern, trendi, serta cocok untuk gaya kasual.",
      buttonText: "Pesan Batik Shibori",
      image: batik5,
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Shibori Sengguruh.",
    },
  ]
};

export const blogData = {
  title: "Highlight / Update Terbaru",
  subtitle: "Berita, kegiatan terbaru, dan informasi seputar Batik Sengguruh dari blog resmi kami.",
  seeMoreLink: "https://www.batiksengguruh.com/search?updated-max=2026-01-24T16:08:00%2B07:00&max-results=3&start=3&by-date=false",
  links: [
    "https://www.batiksengguruh.com/2026/04/batik-sengguruh-dan-hasta-padma-hadir.html",
    "https://www.batiksengguruh.com/2026/02/fgd-industri-batik-malang-berkelanjutan.html"
  ]
};

export const productsData = [
  product1, product2, product3, product4,
  product5, product6, product7, product8,
  product9, product10, product11, product12
];
