export default function HistoryVisionSection() {
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* História */}
        <div className="space-y-12 reveal-item">
          <div>
            <h2 className="font-headline text-3xl mb-8">Nossa Trajetória</h2>
            <div className="space-y-6 text-on-surface-variant font-body leading-relaxed max-w-lg">
              <p>
                Fundado na intersecção entre princípios de engenharia estrutural
                e litígios de alto risco, a LEX ADVOCACIA surgiu em 1998 como
                uma resposta boutique à fragmentação da assessoria jurídica
                empresarial.
              </p>
              <p>
                Partimos de uma premissa singular: que uma estratégia jurídica
                deve ser tão duradoura e calculada quanto um arranha-céu. Ao
                longo de três décadas, tornamo-nos referência global em
                responsabilidade estrutural e arquitetura de propriedade
                intelectual.
              </p>
            </div>
          </div>
        </div>

        {/* Visão */}
        <div
          className="bg-surface px-12 py-16 relative border-l border-primary/20 reveal-item"
          style={{ transitionDelay: "0.2s" }}
        >
          <h2 className="font-headline text-3xl mb-8">Visão</h2>
          <blockquote className="font-headline italic text-2xl text-primary leading-snug mb-8">
            &ldquo;Redefinir o cenário jurídico através das lentes da
            integridade estrutural e da precisão estética.&rdquo;
          </blockquote>
          <p className="font-body text-on-surface-variant leading-relaxed">
            Não apenas resolvemos problemas — prevenimos colapsos. Nossa visão
            é fornecer aos clientes um framework jurídico que sustente seu
            crescimento mais ambicioso, garantindo que cada contrato, fusão e
            patente seja um pilar de carga do seu legado futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
