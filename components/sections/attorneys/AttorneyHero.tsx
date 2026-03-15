export default function AttorneyHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        {/* Título */}
        <div
          className="md:col-span-8 z-10 reveal"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="font-label text-[0.75rem] tracking-[0.2em] text-secondary block mb-6 uppercase">
            A Vanguarda da Arquitetura Jurídica
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-none -ml-1 md:-ml-2 mb-8">
            Construindo{" "}
            <span className="text-primary italic font-light">Precedentes.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed opacity-80">
            Nosso escritório é construído sobre a filosofia de que o direito
            não é apenas um conjunto de normas, mas uma fundação estrutural
            sobre a qual a grandeza é erguida. Conheça as mentes por trás do
            projeto.
          </p>
        </div>

        {/* Imagem decorativa */}
        <div
          className="md:col-span-4 relative reveal"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="aspect-[3/4] bg-surface-container-high relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvrSWBOxtXFCS8Dm09EeV7JJOM-tjg7LPGuzLMbfvpY6Sn0X2DNC_XxQapkiWK25P8oh5gkjpmmGIWlZW5w4DZiaH7oufzaxJ8-JuffFWjinfL3-u8eEWnVdVsVZDibGDbNvE29Jq3AEWdPRXsSWa595Rga8CNhCGViVsiym5AJGstjw2nOK648r0h9TMIZZ15QEnKr67eo0W32x0F-EN_5n53HdZY1xTGo-VkKtjgaj1ZpQnauUo5wX6z9yICgEsHs61rXS8d0g"
              alt="Linhas arquitetônicas abstratas"
              className="w-full h-full object-cover grayscale opacity-50 contrast-125 transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-l border-b border-primary/30 group-hover:border-primary/60 transition-colors duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
