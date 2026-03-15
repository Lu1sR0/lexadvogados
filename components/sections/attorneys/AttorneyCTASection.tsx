import TransitionLink from "@/components/layout/TransitionLink";

export default function AttorneyCTASection() {
  return (
    <section className="py-40 px-6 text-center">
      <div className="max-w-3xl mx-auto reveal-item">
        <h2 className="font-headline text-4xl md:text-5xl mb-8">
          Inicie o Projeto.
        </h2>
        <p className="font-body text-lg text-on-surface-variant mb-12 leading-relaxed">
          A integridade começa com uma conversa. Deixe-nos auditar suas
          estruturas jurídicas atuais e arquitetar um futuro de estabilidade
          inabalável.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <TransitionLink href="/contact">
            <button className="w-full sm:w-auto bg-primary text-on-primary px-10 py-5 font-label text-[0.85rem] tracking-[0.2em] uppercase hover:bg-on-primary-container hover:shadow-2xl hover:shadow-primary/20 transition-all">
              Consultar os Sócios
            </button>
          </TransitionLink>
          <TransitionLink href="/practice-areas">
            <button className="w-full sm:w-auto border-b-2 border-primary text-on-surface px-10 py-5 font-label text-[0.85rem] tracking-[0.2em] uppercase hover:bg-surface-container-high transition-all">
              Ver Todas as Áreas
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
