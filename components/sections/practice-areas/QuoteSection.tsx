export default function QuoteSection() {
  return (
    <section className="reveal py-48 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 flex justify-center">
        <div className="max-w-3xl text-center group">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-12 transition-transform duration-700 group-hover:rotate-45 block mx-auto"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            architecture
          </span>
          <h3 className="font-headline text-3xl md:text-5xl italic leading-tight text-on-surface">
            &ldquo;A robustez de um resultado jurídico é determinada pela
            integridade do seu projeto inicial.&rdquo;
          </h3>
          <div className="w-24 h-px bg-primary mx-auto mt-12 transition-all duration-700 group-hover:w-48" />
          <p className="mt-8 font-label tracking-[0.2em] text-outline-variant text-[0.7rem]">
            SÓCIO-GERENTE SÊNIOR
          </p>
        </div>
      </div>
    </section>
  );
}
