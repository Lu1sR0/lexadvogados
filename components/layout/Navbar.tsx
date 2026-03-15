"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/layout/TransitionLink";

const navLinks = [
  { href: "/practice-areas", label: "ÁREAS DE ATUAÇÃO" },
  { href: "/our-attorneys", label: "NOSSOS ADVOGADOS" },
  { href: "/contact", label: "CONTATO" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 border-b border-outline-variant/10 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "bg-surface/95 h-16" : "bg-surface/70 h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <TransitionLink
          href="/"
          className="font-headline text-lg tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          LEX ADVOCACIA
        </TransitionLink>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className={`nav-link font-label text-[10px] tracking-[0.2em] transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-transform hover:scale-110">
            <span className="material-symbols-outlined">language</span>
          </button>
          <TransitionLink href="/contact">
            <button className="bg-primary text-on-primary px-6 py-2.5 font-label text-[10px] tracking-[0.15em] hover:bg-on-primary-container transition-all hover:shadow-[0_0_20px_rgba(218,199,105,0.3)] transform hover:-translate-y-0.5 active:translate-y-0">
              AGENDAR CONSULTA
            </button>
          </TransitionLink>
        </div>
      </div>
    </nav>
  );
}
