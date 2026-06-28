# Website Batik Sengguruh

Selamat datang di sistem manajemen konten website Batik Sengguruh! Website ini dirancang khusus agar Bapak/Ibu dapat dengan mudah mengubah foto, teks, dan produk **tanpa harus mengerti bahasa pemrograman rumit**.

Website ini menggunakan arsitektur modern (Next.js) dengan pendekatan "Data Terpusat" (*Centralized Data*). Artinya, Bapak/Ibu hanya perlu mengubah satu file khusus untuk mengganti hampir seluruh isi website.

---

## 📂 Di Mana Saya Bisa Mengubah Isi Website?

Semua pengaturan teks, foto, dan konten website terpusat di satu file:  
👉 `src/assets/asset-data.ts`

**Jangan takut untuk membuka file tersebut!** File itu sudah didesain semudah mungkin seperti mengisi formulir biasa.

---

## 🖼️ Cara Mengganti Foto / Gambar

Bapak/Ibu memindahkan semua aset gambar ke dalam folder `public/`. Ini membuat penggantian gambar menjadi sangat praktis.

**Langkah-langkah:**
1. Siapkan foto baru Bapak/Ibu (misalnya bernama `foto-batik-baru.png`).
2. Taruh (copy-paste) foto tersebut ke dalam folder `public/`.
3. Buka file `src/assets/asset-data.ts`.
4. Cari bagian teks yang ingin diganti gambarnya.
5. Ubah teks di dalam tanda kutip menjadi nama file foto yang baru, pastikan diawali dengan garis miring `/`.
   * **Contoh Sebelum:** `image: "/batik1.png"`
   * **Contoh Sesudah:** `image: "/foto-batik-baru.png"`

> **PENTING:** Pastikan nama file persis sama dengan yang Bapak/Ibu simpan, termasuk huruf besar/kecil dan ekstensinya (`.png`, `.jpg`, atau `.svg`).

---

## 📝 Cara Mengganti Teks, Harga, dan Nomor WhatsApp

Sama seperti mengganti gambar, mengubah teks juga dilakukan di file `src/assets/asset-data.ts`.

1. Buka file `src/assets/asset-data.ts`.
2. Cari bagian teks yang ingin Bapak/Ibu ubah. File tersebut sudah dilengkapi dengan **komentar petunjuk berbahasa Indonesia** (dimulai dengan tanda `//`) untuk memandu Bapak/Ibu.
3. Ubah tulisan yang berada **di dalam tanda kutip**.
4. **Khusus Nomor WhatsApp:** Jangan gunakan angka `0` atau simbol `+` di awal. Selalu gunakan kode negara `62`.
   * **Benar:** `"6285135787508"`
   * **Salah:** `"085135787508"` atau `"+6285135787508"`

---

## 📚 Daftar Konten yang Bisa Diubah di `asset-data.ts`

Berikut adalah peta panduan isi dari file `asset-data.ts` agar Bapak/Ibu tidak bingung:

1. **DATA HERO:** Gambar banner paling atas saat website pertama kali dibuka.
2. **DATA STATISTIK:** Angka-angka pencapaian seperti jumlah motif, jumlah klien, dan rekap produksi (grafik).
3. **DATA TIM KAMI:** Nama, jabatan, dan foto dari Bapak/Ibu beserta tim pengrajin.
4. **DATA KONTAK:** Nomor WhatsApp, Email, Instagram, TikTok, dan YouTube yang muncul di Footer paling bawah.
5. **DATA PROGRAM:** Layanan seperti Workshop, Kunjungan, dan Custom Batik.
6. **DATA KATALOG BATIK:** Daftar produk unggulan (Batik Tulis, Cap, Ecoprint, dll).
7. **DATA BLOG:** Pengaturan artikel berita terbaru (Sistem sudah diatur otomatis menarik artikel terbaru dari Blogger, Bapak/Ibu hanya perlu menyesuaikan URL Blog atau jumlah artikelnya jika ingin diubah).
8. **DATA GALERI:** Kumpulan foto-foto tambahan yang berjalan otomatis (Marquee).
9. **DATA KEPERCAYAAN (TRUSTED BY):** 4 Foto bukti kegiatan/dokumentasi nyata.
10. **DATA LOGO MITRA:** Deretan logo klien atau sponsor yang berjalan memanjang di bawah.
11. **DATA FAQ (Tanya Jawab):** Daftar pertanyaan yang sering ditanyakan pembeli beserta jawabannya.

---

## ⚠️ Tips Aman Mengedit File

* **Jangan menghapus tanda kutip ganda (`"..."`).** Teks Bapak/Ibu harus selalu berada di antara dua tanda kutip tersebut.
* **Jangan menghapus tanda koma (`,`) di akhir baris.** Tanda koma digunakan untuk memisahkan antar data.
* Jika terjadi error (layar merah/putih blank) setelah mengedit, cek kembali apakah ada tanda kutip atau koma yang tidak sengaja terhapus.

---

## 💻 Panduan Developer

Bagian ini ditujukan khusus untuk Developer atau AI yang akan memelihara atau mengembangkan sistem ini lebih lanjut di masa depan.

### Tech Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Animations:** GSAP & React Motion
* **Icons:** lucide-react & react-icons
* **Package Manager:** NodeJS atau Bun
* **Architecture:** Fitur berbasis modul (*Feature-Sliced Design* yang disederhanakan). Setiap fitur (`features/`) memiliki folder `containers` dan `components` tersendiri. Data konfigurasi dan konten terpusat di `src/assets/asset-data.ts`.

### Persyaratan Sistem (Prerequisites)
Sebelum menjalankan proyek ini, pastikan komputer Anda sudah terinstal beberapa perangkat lunak berikut:
1. **[Node.js](https://nodejs.org/)** (Minimal versi 18.x) - Dibutuhkan untuk menjalankan environment JavaScript/TypeScript.
2. **[Git](https://git-scm.com/)** - Untuk mengambil kode dari repositori (GitHub).
3. **[Visual Studio Code](https://code.visualstudio.com/)** - Sebagai *Code Editor* yang sangat direkomendasikan.

### Cara Menjalankan Secara Lokal

1. **Unduh kode (Clone repositori):**
   Buka terminal/CMD lalu jalankan perintah ini untuk mengunduh kode dan masuk ke folder proyek:
   ```bash
   git clone https://github.com/dirgaydtm/batik-sengguruh.git
   cd batik-sengguruh
   ```

2. **Install dependencies (Instal dependensi):**
   Jalankan perintah berikut di terminal untuk menginstal semua *library* yang dibutuhkan website:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development server):**
   Mulai jalankan server lokal dengan perintah:
   ```bash
   npm run dev
   ```

4. **Buka di Browser:**
   Buka alamat [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya secara langsung.

> **Dear Future AI / Dev:** Tolong jangan ubah arsitektur data terpusat di `asset-data.ts`. File ini secara khusus diminta agar pemilik bisnis (non-teknis) dapat dengan mudah mengedit konten website tanpa harus menyelami komponen React. Pastikan selalu memverifikasi versi Next.js (khususnya v15/React 19 behavior) sebelum menerapkan perubahan struktural yang besar.