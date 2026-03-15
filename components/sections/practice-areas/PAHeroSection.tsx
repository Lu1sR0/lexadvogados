export default function PAHeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-8 md:px-24 mb-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-1/3 h-full bg-surface-container-low -z-10 opacity-50 transform translate-x-12 translate-y-12" />

      <label className="reveal font-label text-[0.75rem] tracking-[0.3em] text-primary mb-8 block">
        ARQUITETURA JURÍDICA DE EXCELÊNCIA
      </label>

      <h1 className="reveal reveal-delay-1 font-headline text-5xl md:text-7xl lg:text-8xl leading-tight max-w-4xl italic">
        Precisão na <span className="text-secondary">Prática</span>,<br />
        Arquitetônico no <span className="text-primary">Pensamento</span>.
      </h1>

      <p className="reveal reveal-delay-2 mt-12 text-on-surface-variant max-w-xl leading-relaxed opacity-80">
        Nossa abordagem transcende a advocacia tradicional. Estruturamos
        frameworks jurídicos que sustentam expansões globais, protegem capital
        intelectual e navegam por complexidades de alto risco com integridade
        estrutural.
      </p>
    </section>
  );
}
