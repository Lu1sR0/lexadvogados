import TransitionLink from "@/components/layout/TransitionLink";

export default function PACTASection() {
  return (
    <section className="reveal py-32 px-8 flex flex-col items-center text-center">
      <h2 className="font-headline text-4xl md:text-5xl mb-4 leading-tight">Construa sua Defesa.</h2>
      <p className="font-body text-on-surface-variant mb-12 max-w-md leading-relaxed">
        Cada estrutura jurídica começa com a primeira conversa.
      </p>
      <TransitionLink href="/contact">
        <button className="group relative inline-flex items-center gap-4 btn-gold-outline px-12 py-5 font-label tracking-[0.2em] text-on-surface text-xs">
          INICIAR CONSULTA
          <span className="material-symbols-outlined text-sm transition-transform duration-500 group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </TransitionLink>
    </section>
  );
}
