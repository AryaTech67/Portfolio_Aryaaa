"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Beranda", href: "#hero", id: "hero" },
  { label: "Tentang", href: "#tentang", id: "tentang" },
  { label: "Proyek", href: "#proyek", id: "proyek" },
  { label: "Keahlian", href: "#keahlian", id: "keahlian" },
  { label: "Kontak", href: "#kontak", id: "kontak" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sectionElements = NAV_ITEMS.map((item) =>
        document.getElementById(item.id)
      ).filter(Boolean) as HTMLElement[];

      let currentId = "hero";
      sectionElements.forEach((el) => {
        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          currentId = el.id;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        currentId = "kontak";
      }

      setActiveSection(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group py-1"
            onClick={() => setActiveSection("hero")}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform duration-200" />
            <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-emerald-400 transition-colors">
              Arya<span className="text-emerald-400">.dev</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1 text-[13px]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                    isActive
                      ? "text-emerald-400 bg-white/[0.08] font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#kontak"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Hubungi Saya
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-zinc-200" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#070709] px-4 py-3 space-y-1 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-md transition-colors ${
                  isActive
                    ? "text-emerald-400 bg-white/[0.08] font-semibold"
                    : "text-zinc-300 hover:text-emerald-400 hover:bg-white/[0.03]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
