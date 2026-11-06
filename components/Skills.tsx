import { Layout, Database, Wrench } from "lucide-react";

export default function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-24 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Keahlian &amp; Teknologi
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Stack teknologi yang aktif saya gunakan untuk membangun sistem perangkat lunak yang andal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Frontend */}
        <div className="card-craft p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Layout className="w-4 h-4" />
            </div>
            <span>Frontend Engineering</span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Menyusun antarmuka modern yang cepat, terstruktur komponen, dan responsif tanpa template instan.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs">
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Next.js 14/16 (App Router)</span>
              <span className="text-emerald-400 font-mono text-[11px]">SSR / CSR</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">React 18 / 19</span>
              <span className="text-zinc-400 font-mono text-[11px]">Hooks &amp; State</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">TypeScript</span>
              <span className="text-zinc-400 font-mono text-[11px]">Type-Safety</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Tailwind CSS</span>
              <span className="text-zinc-400 font-mono text-[11px]">Utility First</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-zinc-200 font-medium">HTML5 &amp; Modern JS (ES6+)</span>
              <span className="text-zinc-400 font-mono text-[11px]">DOM &amp; Fetch</span>
            </div>
          </div>
        </div>

        {/* Backend & DB */}
        <div className="card-craft p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Database className="w-4 h-4" />
            </div>
            <span>Backend &amp; Basis Data</span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Menulis logika server, proteksi SQL Injection, autentikasi sesi, dan relasi database ternormalisasi.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs">
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">PHP 8.2 (Native &amp; PDO)</span>
              <span className="text-emerald-400 font-mono text-[11px]">Prepared Stmt</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Laravel 11 (MVC)</span>
              <span className="text-zinc-400 font-mono text-[11px]">Eloquent ORM</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">MySQL / MariaDB</span>
              <span className="text-zinc-400 font-mono text-[11px]">Relasional &amp; Index</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Supabase</span>
              <span className="text-zinc-400 font-mono text-[11px]">PostgreSQL Realtime</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-zinc-200 font-medium">RESTful API Design</span>
              <span className="text-zinc-400 font-mono text-[11px]">JSON Endpoints</span>
            </div>
          </div>
        </div>

        {/* Tools & Workflow */}
        <div className="card-craft p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Wrench className="w-4 h-4" />
            </div>
            <span>Alat &amp; Lingkungan Kerja</span>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Perangkat lunak dan perkakas kerja yang mendukung efisiensi pengembangan dan pengujian lokal.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/[0.08] text-xs">
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Git &amp; GitHub</span>
              <span className="text-emerald-400 font-mono text-[11px]">Version Control</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Visual Studio Code</span>
              <span className="text-zinc-400 font-mono text-[11px]">Primary IDE</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">XAMPP Stack</span>
              <span className="text-zinc-400 font-mono text-[11px]">Apache &amp; MySQL</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
              <span className="text-zinc-200 font-medium">Figma to Code</span>
              <span className="text-zinc-400 font-mono text-[11px]">Pixel Precision</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-zinc-200 font-medium">Vercel Deployment</span>
              <span className="text-zinc-400 font-mono text-[11px]">Edge Hosting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
