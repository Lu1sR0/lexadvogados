export default function PhilosophySection() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Imagem */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPTl7yJyI7x8rJr2-pAZCo3gCSMFK2FZKXJvqaPnBAsQXH-fspmwJo74iCCEtCkTyzH2UKXKg0yxkHaSY60qo3Jkq-gqVT2KCvK5SU2K2vcnUwJE4hPdyZT7wrjoV-g8O3zzcHwi3YrXQ6LklOYo8f9jPyo-2k60fagDcAyhCyOp2ZHFnLYRC3icWvInA3aZfTRI6tQYLsdpDrDKZUzsj2agW1HjaBMt6gBVi6JUvv-2lXnzJdQgRwd02hAXToe9vRXzH8qqoKoQ"
                alt="Interior arquitetônico minimalista"
                className="w-full aspect-[4/5] object-cover grayscale brightness-75 reveal-image"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 backdrop-blur-3xl -z-10 glow-float" />
            </div>
          </div>

          {/* Texto */}
          <div className="md:col-span-7 order-1 md:order-2 md:pl-12">
            <span className="font-label text-[10px] tracking-[0.4em] text-primary block mb-8 uppercase reveal-text">
              Nossa Filosofia
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mb-8 leading-tight reveal-text">
              A solidez de uma estratégia jurídica se mede pela qualidade de
              seus fundamentos.
            </h2>
            <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg reveal-text">
              <p>
                Encaramos cada caso como uma estrutura complexa. Assim como um
                arquiteto avalia a integridade de uma fundação, analisamos os
                princípios jurídicos essenciais de cada demanda. Nossa
                abordagem é metódica, deliberada e inegavelmente precisa.
              </p>
              <p>
                Na LEX ADVOCACIA, não apenas resolvemos problemas — nós
                engenheiramos resultados. Eliminamos o ruído da prática
                convencional para focar no que realmente importa: a vitória
                estrutural dos nossos clientes.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-12 reveal-text">
              <div className="group border-b border-outline-variant/10 pb-6 hover:border-primary/40 transition-colors duration-500 cursor-default">
                <span className="font-headline text-3xl text-primary block mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                  01
                </span>
                <span className="font-label text-[10px] tracking-[0.2em] uppercase group-hover:text-on-surface transition-colors duration-300">
                  Integridade Estrutural
                </span>
              </div>
              <div className="group border-b border-outline-variant/10 pb-6 hover:border-primary/40 transition-colors duration-500 cursor-default">
                <span className="font-headline text-3xl text-primary block mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                  02
                </span>
                <span className="font-label text-[10px] tracking-[0.2em] uppercase group-hover:text-on-surface transition-colors duration-300">
                  Precisão Inabalável
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
