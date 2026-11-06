"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ActiveModalData {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

export default function Projects() {
  const [activeModal, setActiveModal] = useState<ActiveModalData | null>(null);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal, closeModal]);

  return (
    <section id="proyek" className="scroll-mt-24 space-y-10">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Proyek Pilihan
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Aplikasi nyata yang dibangun dari baris kode murni, mengutamakan performa dan arsitektur data. Klik pada gambar untuk melihat screenshot resolusi penuh.
        </p>
      </div>

      <div className="space-y-10">
        {/* ================= PROYEK 1: LAPORKUY ================= */}
        <article className="card-craft rounded-2xl overflow-hidden">
          <div className="bg-black/50 border-b border-white/[0.08] p-3 sm:p-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  src: "/img/laporkuy.png",
                  alt: "LaporKuy — AI-Powered Civic-Tech Reporting Platform",
                  title: "LaporKuy — AI-Powered Civic-Tech Platform",
                  subtitle: "Kompetisi UNJ • Next.js 16 • Supabase Realtime • Multi-Model AI",
                })
              }
              className="group relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] hover:border-emerald-500/50 bg-[#070709] shadow-2xl transition-all duration-300 cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              title="Klik untuk memperbesar screenshot LaporKuy"
            >
              <div className="overflow-hidden">
                <Image
                  src="/img/laporkuy.png"
                  alt="LaporKuy — AI-Powered Civic-Tech Reporting Platform"
                  width={1024}
                  height={514}
                  className="w-full h-auto block object-contain group-hover:scale-[1.015] transition-transform duration-300"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xl transform group-hover:scale-100 scale-95 transition-transform duration-200">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Klik untuk perbesar resolusi penuh</span>
                </div>
              </div>

              {/* Badge indikator selalu keliatan di pojok kanan bawah */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span>Perbesar</span>
                </span>
              </div>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-amber-400 font-medium">
                  Karya Kompetisi / Hackathon Universitas Negeri Jakarta (UNJ)
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">Full-Stack &amp; UI/UX</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                LaporKuy — AI-Powered Civic-Tech Platform
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Dikembangkan sebagai inovasi solusi digital dalam ajang kompetisi di{" "}
              <strong className="text-white font-semibold">Universitas Negeri Jakarta (UNJ)</strong>.
              Proyek ini bertujuan menjawab lambatnya penanganan fasilitas publik dan minimnya transparansi tindak lanjut laporan warga dengan pendekatan AI vision dan psikologi gamifikasi partisipatif.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  AI Quick Report (30 Detik)
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Deteksi otomatis koordinat GPS, pengecekan duplikasi laporan radius 200m, dan klasifikasi visual instan.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  SLA Transparansi Publik
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Dashboard terbuka untuk mengukur rata-rata respon dinas kota secara akuntabel.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  Gamifikasi Partisipatif
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Sistem level warga, streak harian, quest mingguan, dan katalog penukaran poin reward.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Next.js 16</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">React 19</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">TypeScript</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Supabase Realtime</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Multi-Model AI Vision</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">MapLibre</span>
              </div>

              <a
                href="https://github.com/AryaTech67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Kode Sumber</span>
              </a>
            </div>
          </div>
        </article>

        {/* ================= PROYEK 2: ONHADIR ================= */}
        <article className="card-craft rounded-2xl overflow-hidden">
          <div className="bg-black/50 border-b border-white/[0.08] p-3 sm:p-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  src: "/img/onhadir.png",
                  alt: "OnHadir — Sistem Informasi Presensi Cerdas & Manajemen Kedisiplinan Siswa",
                  title: "OnHadir — Sistem Presensi & Kedisiplinan Siswa QR",
                  subtitle: "Standar UKK RPL • Laravel 11 • Real-time QR Code • Mesin ID Card CR80",
                })
              }
              className="group relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] hover:border-emerald-500/50 bg-[#070709] shadow-2xl transition-all duration-300 cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              title="Klik untuk memperbesar screenshot OnHadir"
            >
              <div className="overflow-hidden">
                <Image
                  src="/img/onhadir.png"
                  alt="OnHadir — Sistem Informasi Presensi Cerdas & Manajemen Kedisiplinan Siswa"
                  width={1024}
                  height={508}
                  className="w-full h-auto block object-contain group-hover:scale-[1.015] transition-transform duration-300"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xl transform group-hover:scale-100 scale-95 transition-transform duration-200">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Klik untuk perbesar resolusi penuh</span>
                </div>
              </div>

              {/* Badge indikator selalu keliatan di pojok kanan bawah */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span>Perbesar</span>
                </span>
              </div>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-emerald-400 font-medium">
                  Standar Uji Kompetensi Keahlian (UKK) RPL
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">Laravel 11 • Smart QR System</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                OnHadir — Sistem Presensi &amp; Manajemen Kedisiplinan Siswa QR
              </h3>
              <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                &ldquo;Modernisasi tata kelola absensi sekolah dengan validasi real-time QR Code, sistem poin kedisiplinan otomatis, portal transparansi wali murid, dan mesin cetak ID Card standar industri CR80.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Platform web enterprise-ready yang dikembangkan untuk mengatasi inefisiensi rekapitulasi kehadiran manual dan lemahnya pengawasan kedisiplinan di lingkungan institusi pendidikan (studi kasus: SMK Darus Sa&apos;adah). Mengintegrasikan pemindaian presensi berkecepatan tinggi (&lt; 300ms), formulir input absensi massal (1-click batch marking), penghitungan statistik kehadiran dinamis, hingga penerbitan Kartu Tanda Pelajar fisik ISO CR80. Proyek ini dibangun memenuhi 100% kriteria kelulusan UKK Rekayasa Perangkat Lunak.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  Scan QR Cepat &amp; Batch 1-Click
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Verifikasi data &lt; 300ms serta fitur &apos;Tandai Semua Hadir&apos; untuk input 30+ siswa dalam 15 detik.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  Mesin Cetak ID Card CR80
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Menerbitkan kartu tanda pelajar terkalibrasi presisi 8 kartu per lembar kertas A4 tanpa margin terpotong.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">
                  Portal Mandiri Wali Murid
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Orang tua cukup memasukkan NIS siswa untuk memantau rekap persentase dan riwayat izin secara transparan.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Laravel 11 (MVC)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">PHP 8.2+</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">MySQL / MariaDB</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">HTML5-QRCode</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Chart.js</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">CSS Print Engine (CR80)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">RBAC Security</span>
              </div>

              <a
                href="https://github.com/AryaTech67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Kode Sumber</span>
              </a>
            </div>
          </div>
        </article>

        {/* ================= PROYEK 3: SIPENLAT ================= */}
        <article className="card-craft rounded-2xl overflow-hidden">
          <div className="bg-black/50 border-b border-white/[0.08] p-3 sm:p-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  src: "/img/sipenlat.png",
                  alt: "SIPENLAT — Sistem Informasi Peminjaman Laptop Lab",
                  title: "SIPENLAT — Sistem Peminjaman Laptop Lab Komputer",
                  subtitle: "SMK Darus Sa'adah • PHP 8.2 (PDO) • RBAC • Manajemen Aset Digital",
                })
              }
              className="group relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] hover:border-emerald-500/50 bg-[#070709] shadow-2xl transition-all duration-300 cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              title="Klik untuk memperbesar screenshot SIPENLAT"
            >
              <div className="overflow-hidden">
                <Image
                  src="/img/sipenlat.png"
                  alt="SIPENLAT — Sistem Informasi Peminjaman Laptop Lab"
                  width={1024}
                  height={592}
                  className="w-full h-auto block object-contain group-hover:scale-[1.015] transition-transform duration-300"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xl transform group-hover:scale-100 scale-95 transition-transform duration-200">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Klik untuk perbesar resolusi penuh</span>
                </div>
              </div>

              {/* Badge indikator selalu keliatan di pojok kanan bawah */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span>Perbesar</span>
                </span>
              </div>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-emerald-400 font-medium">Laboratorium Komputer RPL &amp; DKV</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">SMK Darus&apos;saadah Bogor</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                SIPENLAT — Sistem Informasi Peminjaman Laptop
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Aplikasi web untuk mendigitalkan dan mengotomatisasi peminjaman laptop di laboratorium sekolah (SMK Darus&apos;saadah). Menggantikan buku catatan manual dengan tiket transaksi digital, pemisahan hak akses berjenjang (Administrator vs Operator Loket), pencatatan kondisi fisik unit saat kembali (rusak/hilang/tertinggal), serta rekapitulasi laporan transaksi secara otomatis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Atasi Masalah Manual</span>
                <p className="text-zinc-400 leading-relaxed">Menghilangkan risiko buku catatan basah/hilang dan data peminjam fiktif dengan verifikasi akun siswa.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Kontrol Kondisi Fisik</span>
                <p className="text-zinc-400 leading-relaxed">Petugas wajib mencatat kondisi fisik perangkat saat pengembalian (normal, sparepart tertinggal, lecet/rusak).</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Pemisahan Wewenang (RBAC)</span>
                <p className="text-zinc-400 leading-relaxed">Operator melayani sirkulasi loket harian; Administrator mengelola inventaris akun dan ekspor laporan.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">PHP 8.2 (PDO)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">MySQL / MariaDB</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Vanilla JS (ES6+)</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">GSAP Animation</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Media Capture API</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Apache (XAMPP)</span>
              </div>

              <a
                href="https://github.com/AryaTech67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Kode Sumber</span>
              </a>
            </div>
          </div>
        </article>

        {/* ================= PROYEK 4: KEDAIARYA ================= */}
        <article className="card-craft rounded-2xl overflow-hidden">
          <div className="bg-black/50 border-b border-white/[0.08] p-3 sm:p-6 flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setActiveModal({
                  src: "/img/kedaiarya.png",
                  alt: "KedaiArya — Digital Ordering Platform & POS Kafe",
                  title: "KedaiArya — Digital Ordering Platform & POS",
                  subtitle: "Solusi Kasir Kafe UMKM • PHP Native • AJAX Fetch • MySQL Schema",
                })
              }
              className="group relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] hover:border-emerald-500/50 bg-[#070709] shadow-2xl transition-all duration-300 cursor-zoom-in text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              title="Klik untuk memperbesar screenshot KedaiArya"
            >
              <div className="overflow-hidden">
                <Image
                  src="/img/kedaiarya.png"
                  alt="KedaiArya — Digital Ordering Platform & POS Kafe"
                  width={1024}
                  height={514}
                  className="w-full h-auto block object-contain group-hover:scale-[1.015] transition-transform duration-300"
                />
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-xl transform group-hover:scale-100 scale-95 transition-transform duration-200">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span>Klik untuk perbesar resolusi penuh</span>
                </div>
              </div>

              {/* Badge indikator selalu keliatan di pojok kanan bawah */}
              <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span>Perbesar</span>
                </span>
              </div>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-amber-400 font-medium">Solusi Operasional &amp; Kasir Kafe UMKM</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">PHP Native &amp; MySQL</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                KedaiArya — Digital Ordering Platform &amp; POS
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Solusi operasional kasir dan order digital UMKM kafe. Dibangun dengan PHP &amp; MySQL murni, menyajikan keranjang belanja dinamis tanpa refresh halaman via AJAX Fetch, serta dashboard monitoring antrean pesanan pelanggan secara real-time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Keranjang AJAX Tanpa Reload</span>
                <p className="text-zinc-400 leading-relaxed">Tambah, ubah porsi, dan hitung subtotal pesanan di latar belakang tanpa me-refresh browser.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Skema Relasi Transaksi</span>
                <p className="text-zinc-400 leading-relaxed">Tabel pesanan, item detail, varian menu, dan pengguna dirancang dengan relasi foreign key rapi.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Dashboard Kasir Terpadu</span>
                <p className="text-zinc-400 leading-relaxed">Panel operator loket untuk verifikasi pembayaran pesanan dan update antrean hidangan.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">PHP Native</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">MySQL Schema</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">AJAX / Fetch</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">POS System</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Order Tracking</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-zinc-300">Responsive UI</span>
              </div>

              <a
                href="https://github.com/AryaTech67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current inline-block" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Kode Sumber</span>
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* ================= LIGHTBOX MODAL PREVIEW ================= */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0b0c10] border border-white/15 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                    {activeModal.title}
                  </h4>
                  <p className="text-xs text-zinc-400 truncate hidden sm:block">
                    {activeModal.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeModal.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  title="Buka gambar asli di tab baru"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span className="hidden sm:inline">Tab Baru</span>
                </a>

                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors focus:outline-none"
                  title="Tutup (Esc)"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Preview Container */}
            <div className="relative flex-1 p-2 sm:p-5 overflow-auto flex items-center justify-center bg-black/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeModal.src}
                alt={activeModal.alt}
                className="max-w-full max-h-[74vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/5"
              />
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Tekan <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 text-[10px]">Esc</kbd> atau klik di luar untuk menutup</span>
              <span className="hidden sm:inline text-zinc-400 font-sans">{activeModal.alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
