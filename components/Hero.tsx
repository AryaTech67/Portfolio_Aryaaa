import Image from "next/image";
import Link from "next/link";
import { ArrowDown, GraduationCap, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Kolom Kiri: Teks & Info (7 kolom) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Siswa Kelas 11 RPL • SMK Darus Sa&apos;adah Bogor</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Arya Putra Pratama — merancang aplikasi web fungsional yang beneran dipakai.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Siswa kelas 11 jurusan Rekayasa Perangkat Lunak (RPL) di SMK Darus
            Sa&apos;adah Bogor. Asli Tapos, Depok dan berdomisili di Pakansari,
            Bogor. Menulis kode web murni menggunakan{" "}
            <strong className="text-white font-semibold">
              Next.js, React, TypeScript, Laravel, PHP,
            </strong>{" "}
            dan <strong className="text-white font-semibold">MySQL / Supabase</strong>
            —fokus pada arsitektur data bersih tanpa ketergantungan no-code atau WordPress.
          </p>

          {/* Tombol Aksi Cepat */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="#proyek"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Lihat Proyek</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/6289529231361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="#kontak"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/10 transition-colors"
            >
              <span>Hubungi Saya</span>
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/AryaTech67"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Profil GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aryareverie/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-zinc-400 hover:text-pink-400 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Profil Instagram"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Origin & Residency Details */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/[0.08] max-w-lg text-xs">
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider text-[10px] font-mono mb-0.5">
                Asal Kelahiran
              </span>
              <span className="text-zinc-200 font-medium">
                Tapos, Depok (RT 01 / RW 20)
              </span>
            </div>
            <div>
              <span className="block text-zinc-500 uppercase tracking-wider text-[10px] font-mono mb-0.5">
                Domisili Sekarang
              </span>
              <span className="text-zinc-200 font-medium">
                Pakansari, Bogor (RT 04 / RW 08)
              </span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil Arya (5 kolom) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-sm">
            <div className="card-craft rounded-2xl p-3 sm:p-4 shadow-2xl space-y-4">
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.08] relative group">
                <Image
                  src="/img/profile.jpg"
                  alt="Arya Putra Pratama"
                  width={460}
                  height={460}
                  priority
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/10 text-emerald-400 font-medium text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Aktif Koding
                  </span>
                  <span className="text-zinc-300 text-[11px] bg-black/80 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm font-mono">
                    Bogor, ID
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      Arya Putra Pratama
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Junior Full-Stack Web Developer
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                    Kelas 11 RPL
                  </span>
                </div>

                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                    SMK Darus Sa&apos;adah
                  </span>
                  <span className="text-emerald-400 font-medium text-[11px] font-mono">
                    Siap PKL Jan 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
