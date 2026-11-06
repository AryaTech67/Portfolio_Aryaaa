"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:arrxptrr@gmail.com?subject=Pesan Portofolio dari ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `Halo Arya Putra Pratama,\n\nKontak Pengirim: ${formData.contact}\n\nPesan:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, "_blank");
      setFormData({ name: "", contact: "", message: "" });
    }, 400);
  };

  return (
    <section id="kontak" className="scroll-mt-24 space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Hubungi Saya
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Terbuka untuk diskusi teknis, tawaran magang/PKL, atau kolaborasi proyek web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Channels Info */}
        <div className="md:col-span-5 card-craft p-6 rounded-2xl space-y-5 text-sm">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider block font-mono mb-1">
              Identitas
            </span>
            <span className="text-white font-semibold">Arya Putra Pratama</span>
          </div>

          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider block font-mono mb-1">
              Institusi Pendidikan
            </span>
            <span className="text-zinc-200">
              SMK Darus Sa&apos;adah Bogor (Kelas 11 RPL)
            </span>
          </div>

          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider block font-mono mb-1">
              Lokasi Domisili
            </span>
            <span className="text-zinc-300">
              Tapos, Depok ➔ Pakansari, Bogor
            </span>
          </div>

          <div className="pt-4 border-t border-white/[0.08] space-y-3 text-xs">
            {/* Email */}
            <a
              href="mailto:arrxptrr@gmail.com"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group"
            >
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-mono">arrxptrr@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6289529231361"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-400 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span class="font-mono">WhatsApp: 0895-2923-1361</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AryaTech67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-400 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span class="font-mono">github.com/AryaTech67</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aryareverie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-400 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span class="font-mono">instagram.com/aryareverie</span>
            </a>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="md:col-span-7 card-craft p-6 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-zinc-300 mb-1.5 font-mono"
              >
                Nama Lengkap / Instansi
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Nama Anda atau perusahaan"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-xs font-medium text-zinc-300 mb-1.5 font-mono"
              >
                Email / WhatsApp
              </label>
              <input
                type="text"
                id="contact"
                required
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                placeholder="Alamat email atau WhatsApp aktif"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-zinc-300 mb-1.5 font-mono"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tuliskan pesan, tawaran magang/PKL, atau hal yang ingin didiskusikan..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Memproses..." : "Kirim Pesan"}</span>
            </button>

            {isSubmitted && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Pesan siap dikirim! Klien email Anda telah dibuka.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
