import Image from "next/image";

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-24 space-y-10">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Proyek Pilihan
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Aplikasi nyata yang dibangun dari baris kode murni, mengutamakan performa dan arsitektur data.
        </p>
      </div>

      <div className="space-y-10">
        {/* ================= PROYEK 1: LAPORKUY ================= */}
        <article className="card-craft rounded-2xl overflow-hidden">
          <div className="bg-black/50 border-b border-white/[0.08] p-3 sm:p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] bg-[#070709] shadow-2xl">
              <Image
                src="/img/laporkuy.png"
                alt="LaporKuy — AI-Powered Civic-Tech Reporting Platform"
                width={1024}
                height={514}
                className="w-full h-auto block object-contain"
              />
            </div>
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
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] bg-[#070709] shadow-2xl">
              <Image
                src="/img/onhadir.png"
                alt="OnHadir — Sistem Informasi Presensi Cerdas & Manajemen Kedisiplinan Siswa"
                width={1024}
                height={508}
                className="w-full h-auto block object-contain"
              />
            </div>
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
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] bg-[#070709] shadow-2xl">
              <Image
                src="/img/sipenlat.png"
                alt="SIPENLAT — Sistem Informasi Peminjaman Laptop Lab"
                width={1024}
                height={592}
                className="w-full h-auto block object-contain"
              />
            </div>
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
            <div className="w-full max-w-4xl rounded-xl overflow-hidden border border-white/[0.08] bg-[#070709] shadow-2xl">
              <Image
                src="/img/kedaiarya.png"
                alt="KedaiArya — Digital Ordering Platform & POS Kafe"
                width={1024}
                height={514}
                className="w-full h-auto block object-contain"
              />
            </div>
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
    </section>
  );
}
