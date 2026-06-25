import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/shared/components/Footer";
import { Navbar } from "@/shared/components/Navbar";
import LenisProvider from "@/shared/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Griya Batik Sengguruh | Pengrajin Batik Tulis & Cap Malang",
    template: "%s | Griya Batik Sengguruh",
  },
  description:
    "Pusat kerajinan batik tulis dan cap khas Sengguruh, Kepanjen, Malang. Menyediakan berbagai motif batik unik berkualitas dengan harga terjangkau. Beli batik langsung dari pengrajin lokal.",
  keywords: [
    "batik",
    "batik malang",
    "batik sengguruh",
    "batik tulis malang",
    "batik cap",
    "griya batik sengguruh",
    "kepanjen",
    "pengrajin batik malang",
    "kain batik",
    "baju batik",
  ],
  authors: [{ name: "Griya Batik Sengguruh" }],
  creator: "Griya Batik Sengguruh",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://batiksengguruh.com",
    title: "Griya Batik Sengguruh | Pengrajin Batik Khas Malang",
    description:
      "Pusat kerajinan batik tulis dan cap khas Sengguruh, Kepanjen, Malang. Temukan koleksi batik terbaik dari pengrajin lokal.",
    siteName: "Griya Batik Sengguruh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Griya Batik Sengguruh | Batik Khas Malang",
    description: "Pusat kerajinan batik tulis dan cap khas Sengguruh, Malang.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
