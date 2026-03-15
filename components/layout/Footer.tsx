import TransitionLink from "@/components/layout/TransitionLink";

const navLinks = [
  { href: "/practice-areas", label: "ÁREAS DE ATUAÇÃO" },
  { href: "/our-attorneys", label: "NOSSOS ADVOGADOS" },
  { href: "/contact", label: "CONTATO" },
];

const legalLinks = [
  { href: "#", label: "POLÍTICA DE PRIVACIDADE" },
  { href: "#", label: "TERMOS DE USO" },
  { href: "#", label: "AVISO LEGAL" },
  { href: "#", label: "TRABALHE CONOSCO" },
];

export default function Footer() {
  return (
    <footer className="bg-surface py-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="font-headline text-xl tracking-widest text-on-surface block mb-6">
              LEX ADVOCACIA
            </span>
            <p className="text-on-surface-variant max-w-sm text-sm leading-relaxed">
              Definindo a próxima era da advocacia de alto impacto com precisão
              estrutural e integridade absoluta.
            </p>
          </div>

          <div>
            <h5 className="font-label text-[10px] tracking-[0.2em] text-primary mb-6 uppercase">
              Navegação
            </h5>
            <div className="flex flex-col gap-4 text-xs font-label text-on-surface-variant tracking-wider">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors hover-underline-animation w-fit"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-label text-[10px] tracking-[0.2em] text-primary mb-6 uppercase">
              Institucional
            </h5>
            <div className="flex flex-col gap-4 text-xs font-label text-on-surface-variant tracking-wider">
              {legalLinks.map((link) => (
                <TransitionLink
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary transition-colors hover-underline-animation w-fit"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-outline-variant/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant/60 uppercase">
            © 2026 LEX ADVOCACIA. PRECISÃO NA PRÁTICA.
          </p>
          <a
            href="https://outframe.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant/40 hover:text-primary transition-colors uppercase"
          >
            Feito por Outframe.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
