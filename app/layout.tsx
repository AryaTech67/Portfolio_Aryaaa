import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Arya Putra Pratama — Software Engineering & Web Developer",
  description:
    "Portofolio resmi Arya Putra Pratama. Siswa Kelas 11 Rekayasa Perangkat Lunak (RPL) di SMK Darus Sa'adah Bogor. Full-stack web developer fokus pada Next.js, React, Laravel, PHP, dan arsitektur basis data relasional.",
  authors: [{ name: "Arya Putra Pratama" }],
  keywords: [
    "Arya Putra Pratama",
    "Web Developer",
    "SMK Darus Saadah",
    "RPL",
    "Next.js",
    "Laravel",
    "Full-Stack",
    "Portfolio",
    "Bogor",
  ],
  openGraph: {
    title: "Arya Putra Pratama — Web Developer & RPL",
    description:
      "Siswa RPL SMK Darus Sa'adah Bogor. Fokus kode murni Next.js, React, Laravel, PHP, dan MySQL.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#070709] text-zinc-300 font-sans antialiased min-h-screen selection:bg-emerald-400 selection:text-black bg-grid-pattern">
        {children}
      </body>
    </html>
  );
}
