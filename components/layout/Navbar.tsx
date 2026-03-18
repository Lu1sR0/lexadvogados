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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao trocar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
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

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={`nav-link font-label text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary nav-link-active"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>

          {/* Ações desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button className="cursor-pointer text-on-surface-variant hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-12">
              <span className="material-symbols-outlined">language</span>
            </button>
            <TransitionLink href="/contact">
              <button className="cursor-pointer btn-premium bg-primary text-on-primary px-6 py-2.5 font-label text-[10px] tracking-[0.15em] hover:bg-on-primary-container">
                AGENDAR CONSULTA
              </button>
            </TransitionLink>
          </div>

          {/* Botão hamburguer mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer text-on-surface"
          >
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? "w-6 rotate-45 translate-y-[5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4 ml-auto opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? "w-6 -rotate-45 -translate-y-[5px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay escuro */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-surface border-l border-outline-variant/20 flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header do drawer */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-outline-variant/10">
          <span className="font-headline text-sm tracking-widest text-on-surface">
            LEX ADVOCACIA
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="cursor-pointer text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {navLinks.map((link, i) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 py-4 border-b border-outline-variant/10 font-label text-[11px] tracking-[0.2em] transition-colors duration-200 ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span
                className={`w-4 h-[1px] bg-current transition-all duration-300 ${
                  pathname === link.href ? "w-6" : "group-hover:w-6"
                }`}
              />
              {link.label}
            </TransitionLink>
          ))}
        </nav>

        {/* CTA no rodapé do drawer */}
        <div className="px-6 py-8 border-t border-outline-variant/10 flex flex-col gap-4">
          <TransitionLink href="/contact" className="w-full">
            <button className="w-full cursor-pointer btn-premium bg-primary text-on-primary py-3 font-label text-[10px] tracking-[0.15em] hover:bg-on-primary-container">
              AGENDAR CONSULTA
            </button>
          </TransitionLink>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-[11px] font-label tracking-widest cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">language</span>
            IDIOMA
          </button>
        </div>
      </div>
    </>
  );
}
