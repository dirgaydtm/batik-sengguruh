// =========================================================================
// PANDUAN MENGGANTI FOTO & KONTEN (UNTUK PEMILIK UMKM)
// =========================================================================
// Selamat datang di file "Data Pusat" untuk website Batik Sengguruh!
// Di file ini, Bapak/Ibu bisa dengan sangat mudah mengganti teks, nomor WA, 
// dan foto-foto yang tampil di website TANPA harus paham bahasa pemrograman.
//
// CARA MENGGANTI FOTO:
// 1. Siapkan foto baru yang ingin ditampilkan.
// 2. Masukkan (copy-paste) foto baru tersebut ke dalam folder bernama "public" di komputer ini.
// 3. Pastikan Bapak/Ibu mengingat nama file foto tersebut (contoh: "foto-baru.png" atau "logo-baru.jpg").
// 4. Cari bagian di bawah ini yang fotonya ingin diganti.
// 5. Ubah teks di dalam tanda kutip menjadi nama file foto Bapak/Ibu (diawali garis miring "/").
//    Contoh: image: "/batik1.png" diubah menjadi image: "/foto-baru.png"
// 
// CARA MENGGANTI TEKS / NOMOR WA:
// 1. Cukup cari tulisan yang ingin diubah di bawah ini (berada di dalam tanda kutip).
// 2. Ganti tulisan tersebut sesuai keinginan.
// 3. Khusus untuk nomor WA, pastikan formatnya menggunakan "62" di depannya tanpa tanda plus (+).
//    Contoh: "6285135787508"
// 
// PERHATIAN: 
// - Hati-hati jangan sampai menghapus tanda kutip ganda ("...") atau tanda koma (,) di akhir baris.
// - Cukup ganti teks yang berada DI DALAM tanda kutip saja.
// =========================================================================

// -------------------------------------------------------------------------
// 1. DATA HERO (GAMBAR PALING ATAS SAAT WEBSITE PERTAMA DIBUKA)
// Digunakan di halaman paling atas (2 Kartu yang bertumpuk)
// -------------------------------------------------------------------------
export const heroImage = {
  card1: {
    src: "/hero1.png",
    alt: "Batik Sengguruh Hero Card 1",
  },
  card2: {
    src: "/hero2.png",
    alt: "Batik Sengguruh Hero Card 2",
  },
};

// -------------------------------------------------------------------------
// 2. DATA STATISTIK & PENCAPAIAN
// Digunakan di bagian "About Us" untuk menampilkan angka-angka kebanggaan
// seperti jumlah motif, klien, dan total produksi.
// -------------------------------------------------------------------------
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

// -------------------------------------------------------------------------
// 3. DATA TIM KAMI (MEET OUR TEAM)
// Digunakan untuk menampilkan foto dan jabatan dari pemilik beserta staf.
// -------------------------------------------------------------------------
export const teamData = {
  title: "Meet Our Team",
  members: [
    {
      id: "owner",
      role: "Founder & Owner",
      image: "/owner.jpg",
    },
    { id: "member-1", role: "Batik Artisan", image: "/member1.jpg" },
    { id: "member-2", role: "Batik Artisan", image: "/member2.jpg" },
    { id: "member-3", role: "Batik Artisan", image: "/member3.jpg" },
    { id: "member-4", role: "Batik Artisan", image: "/member4.jpg" },
    { id: "member-5", role: "Batik Artisan", image: "/member5.jpg" },
    { id: "member-6", role: "Batik Artisan", image: "/member6.jpg" },
    { id: "member-7", role: "Batik Artisan", image: "/member7.jpg" },
    { id: "member-8", role: "Batik Artisan", image: "/member8.jpg" },
    { id: "member-9", role: "Batik Artisan", image: "/member9.jpg" },
    { id: "member-10", role: "Batik Artisan", image: "/member10.jpg" },
    { id: "member-11", role: "Batik Artisan", image: "/member11.jpg" },
    { id: "member-12", role: "Batik Artisan", image: "/member12.jpg" },
    { id: "member-13", role: "Batik Artisan", image: "/member13.jpg" },
    { id: "member-14", role: "Batik Artisan", image: "/member14.jpg" },
    { id: "member-15", role: "Batik Artisan", image: "/member15.jpg" },
    { id: "member-16", role: "Batik Artisan", image: "/member16.jpg" },
    { id: "member-17", role: "Batik Artisan", image: "/member17.jpg" },
    { id: "member-18", role: "Batik Artisan", image: "/member18.jpg" },
  ],
};

// -------------------------------------------------------------------------
// 4. DATA KONTAK & SOSIAL MEDIA
// Digunakan di bagian Footer paling bawah dan tombol "Shop Now" di navigasi.
// Pastikan nomor WhatsApp selalu menggunakan angka awalan 62 (bukan 0 atau +).
// -------------------------------------------------------------------------
export const contactData = {
  whatsapp: "6285135787508", // Ganti dengan nomor WA UMKM yang asli (gunakan format 62...)
  footerTitleInfo: "Contact Info",
  footerTitleForm: "Contact Form",
  contacts: [
    { type: "whatsapp", label: "0851-3578-7508", link: "https://wa.me/6285135787508" },
    { type: "whatsapp", label: "0895-7028-5380", link: "https://wa.me/6289570285380" },
    { type: "email", label: "batik.sengguruh@gmail.com", link: "mailto:batik.sengguruh@gmail.com" },
    { type: "instagram", label: "@batiksengguruh", link: "https://instagram.com/batiksengguruh" },
    { type: "instagram", label: "@batikmalang_handmade", link: "https://instagram.com/batikmalang_handmade" },
    { type: "tiktok", label: "@batiksengguruh", link: "https://www.tiktok.com/@batiksengguruh" },
    { type: "youtube", label: "@GriyaBatikSengguruh", link: "https://www.youtube.com/@GriyaBatikSengguruh" }
  ]
};

// -------------------------------------------------------------------------
// 5. DATA PROGRAM / SERVICES
// Digunakan di bagian "Program Kami" (seperti Workshop, Kunjungan, Custom Batik).
// waMessage adalah pesan otomatis yang terkirim saat pengunjung mengklik tombol WhatsApp.
// -------------------------------------------------------------------------
export const programsData = {
  title: "Program Kami",
  items: [
    {
      id: "program-1",
      title: "Workshop",
      description: "Belajar membatik langsung dari pengrajin berpengalaman. Cocok untuk sekolah, instansi pemerintah, komunitas, maupun acara team building perusahaan",
      buttonText: "Pelajari Lebih Lanjut",
      image: "/program1.png",
      waMessage: "Halo min, saya tertarik dan ingin mendapat informasi lebih lanjut tentang Batik Sengguruh.",
    },
    {
      id: "program-2",
      title: "Kunjungan",
      description: "Ajak siswa atau rombongan Anda mengunjungi galeri dan workshop batik kami di Malang. Saksikan langsung proses pembuatan batik dari awal hingga jadi.",
      buttonText: "Jadwalkan Kunjungan",
      image: "/program2.png",
      waMessage: "Halo min, saya berencana untuk menjadwalkan Kunjungan ke Batik Sengguruh.",
    },
    {
      id: "program-3",
      title: "Custom Batik",
      description: "Pesan seragam batik, souvenir, atau kain batik eksklusif dengan motif dan warna pilihan Anda sendiri. Minimum order fleksibel, cocok untuk sekolah hingga instansi besar.",
      buttonText: "Pesan Sekarang",
      image: "/program3.png",
      waMessage: "Halo min, saya ingin berdiskusi mengenai pemesanan Custom Batik.",
    },
  ]
};

// -------------------------------------------------------------------------
// 6. DATA KATALOG PRODUK BATIK UTAMA
// Digunakan di bagian "Choose Our Batik" untuk memamerkan jenis-jenis batik
// (Tulis, Cap, Caplis, Ecoprint, Shibori).
// -------------------------------------------------------------------------
export const batikData = {
  title: "Choose Our Batik",
  items: [
    {
      id: "product-1",
      title: "Batik Tulis",
      description: "Dikerjakan langsung menggunakan canting secara manual, Batik Tulis kami menawarkan detail memukau dan nilai seni yang tak lekang oleh waktu. Setiap lembarnya eksklusif dan bercerita.",
      buttonText: "Pesan Batik Tulis",
      image: "/batik1.png",
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Tulis Sengguruh.",
    },
    {
      id: "product-2",
      title: "Batik Cap",
      description: "Menggabungkan keindahan motif tradisional dengan teknik pengecapan, menghasilkan kain batik yang rapi dan elegan, sangat cocok untuk kebutuhan seragam atau pakaian harian.",
      buttonText: "Pesan Batik Cap",
      image: "/batik2.png",
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Cap Sengguruh.",
    },
    {
      id: "product-3",
      title: "Batik Caplis",
      description: "Perpaduan unik antara teknik cap untuk pola dasar dan sentuhan tulis manual untuk detail warna, menciptakan harmoni yang indah namun dengan harga yang lebih terjangkau.",
      buttonText: "Pesan Batik Caplis",
      image: "/batik3.png",
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Caplis Sengguruh.",
    },
    {
      id: "product-4",
      title: "Batik Ecoprint",
      description: "Dibuat dengan pewarna alami dan cetakan daun/bunga asli, Ecoprint menghadirkan pola organik yang ramah lingkungan dengan keunikan corak pada setiap potongan kainnya.",
      buttonText: "Pesan Batik Ecoprint",
      image: "/batik4.png",
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Ecoprint Sengguruh.",
    },
    {
      id: "product-5",
      title: "Batik Shibori",
      description: "Teknik ikat celup ala Jepang yang diaplikasikan dengan sentuhan lokal, menghasilkan motif gradasi dan abstrak yang modern, trendi, serta cocok untuk gaya kasual.",
      buttonText: "Pesan Batik Shibori",
      image: "/batik5.png",
      waMessage: "Halo min, saya tertarik untuk melihat koleksi dan memesan Batik Shibori Sengguruh.",
    },
  ]
};

// -------------------------------------------------------------------------
// 7. DATA BLOG / ARTIKEL TERBARU
// Digunakan di bagian "Highlight / Update Terbaru".
// Website sudah diatur untuk mengambil 4 artikel terbaru secara OTOMATIS 
// langsung dari Blogger (Batik Sengguruh).
// -------------------------------------------------------------------------
export const blogData = {
  title: "Highlight / Update Terbaru",
  subtitle: "Berita, kegiatan terbaru, dan informasi seputar Batik Sengguruh dari blog resmi kami.",
  seeMoreLink: "https://www.batiksengguruh.com/search?updated-max=2026-01-24T16:08:00%2B07:00&max-results=3&start=3&by-date=false",
  feedUrl: "https://www.blogger.com/feeds/8997099788816390146/posts/default?alt=json",
  maxPosts: 4,
};

// -------------------------------------------------------------------------
// 8. DATA GALERI FOTO PRODUK TAMBAHAN
// Digunakan di bagian galeri (Grid Foto) yang berjalan otomatis (Marquee).
// Masukkan semua nama file foto tambahan ke dalam daftar ini.
// -------------------------------------------------------------------------
export const productsData = [
  "/product1.png", "/product2.png", "/product3.png", "/product4.png",
  "/product5.png", "/product6.png", "/product7.png", "/product8.png",
  "/product9.png", "/product10.png", "/product11.png", "/product12.png"
];

// -------------------------------------------------------------------------
// 9. DATA KEPERCAYAAN (TRUSTED BY)
// Digunakan di bagian sekumpulan 4 foto kotak sebagai bukti dokumentasi
// nyata kegiatan instansi yang telah bekerja sama dengan Batik Sengguruh.
// -------------------------------------------------------------------------
export const trustedData = {
  title: "Dipercaya Berbagai Mitra di Malang",
  subtitle:
    "Selama bertahun-tahun, kami telah bekerja sama dengan berbagai instansi, sekolah, dan komunitas di Malang dalam menghadirkan produk batik berkualitas dengan motif khas dan proses produksi yang konsisten.",
  stats: [
    { value: "500+", label: "Mitra Terpercaya" },
    { value: "10.000+", label: "Lembar Kain Diproduksi" },
    { value: "250", label: "Variasi Motif Batik" },
  ],
  images: [
    "/trusted1.png", "/trusted2.png", "/trusted3.png", "/trusted4.png"
  ]
};

// -------------------------------------------------------------------------
// 10. DATA LOGO MITRA (PARTNERS)
// Digunakan di bagian deretan logo mitra (sponsor/klien) yang berjalan 
// memanjang dari kiri ke kanan.
// -------------------------------------------------------------------------
export const partnersData = {
  title: "Mitra Kami",
  subtitle: "Telah bekerja sama dengan berbagai instansi, komunitas, dan organisasi di Malang.",
  items: [
    "/mitra1.svg", "/mitra2.svg", "/mitra3.svg", "/mitra4.svg",
    "/mitra5.svg", "/mitra6.svg", "/mitra7.svg", "/mitra8.svg",
    "/mitra9.svg", "/mitra10.svg", "/mitra11.svg", "/mitra12.svg"
  ]
};

// -------------------------------------------------------------------------
// 11. DATA TANYA JAWAB (FAQ)
// Digunakan di bagian paling bawah untuk daftar pertanyaan yang sering 
// diajukan pelanggan beserta jawabannya.
// -------------------------------------------------------------------------
export const faqData = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer: "Pemesanan dapat dilakukan melalui WhatsApp, Marketplace/E-commerce, Website, Kunjungan langsung ke toko (offline store)"
    },
    {
      question: "Apakah bisa memesan dengan ukuran khusus dan Apakah ada minimum order?",
      answer: "Bisa, Anda dapat menghubungi kami untuk mendiskusikan kebutuhan ukuran dan minimum pemesanan."
    },
    {
      question: "Apakah bisa memesan batik dengan desain custom?",
      answer: "Tentu, kami melayani pemesanan batik dengan desain custom sesuai keinginan Anda."
    },
    {
      question: "Berapa lama proses pengerjaan?",
      answer: "Waktu pengerjaan bervariasi tergantung jumlah dan tingkat kerumitan pesanan, umumnya memakan waktu 2-4 minggu."
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer: "Kami menerima pembayaran melalui transfer bank, e-wallet, dan pembayaran tunai di toko kami."
    },
    {
      question: "Apakah melayani pengiriman ke seluruh Indonesia?",
      answer: "Ya, kami melayani pengiriman ke seluruh wilayah di Indonesia menggunakan jasa ekspedisi terpercaya."
    },
    {
      question: "Apakah Batik Sengguruh menerima kerja sama reseller?",
      answer: "Ya, kami sangat terbuka untuk kerja sama reseller. Silakan hubungi kami untuk informasi lebih lanjut."
    },
    {
      question: "Bagaimana cara merawat produk batik?",
      answer: "Gunakan lerak atau deterjen berbahan lembut, hindari menjemur di bawah sinar matahari langsung, dan setrika dengan suhu sedang."
    }
  ]
};
