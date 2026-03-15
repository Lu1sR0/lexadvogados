import TransitionLink from "@/components/layout/TransitionLink";

export default function CTASection() {
  return (
    <section className="py-40 bg-background text-center overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-headline text-5xl md:text-6xl mb-12 leading-tight reveal-text">
          Construa seu futuro sobre alicerces inabaláveis.
        </h2>
        <div className="reveal-text">
          <TransitionLink href="/contact">
            <button className="bg-primary text-on-primary px-12 py-5 font-label text-xs tracking-[0.3em] hover:bg-on-primary-container transition-all hover:px-14 active:scale-95">
              INICIAR CONSULTA
            </button>
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
