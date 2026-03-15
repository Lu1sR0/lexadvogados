const cases = [
  {
    id: 1,
    tag: "DIREITO IMOBILIÁRIO | 2023",
    title: "Aquisição da Torre Zenith",
    description:
      "Assessoria jurídica estrutural para a aquisição multibilionária do complexo Zenith, um marco arquitetônico em Singapura.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvQ9jvMH5VRZbacDciAC2L3nVvjBpZAGqeXuYs8XsBeXSXZ432vNlecy-n6fZZKgra1gRnbhs0XvoFptdKNPFyW-kxSt2zbbT8ParnW52bD9be7PxoUfdh9c7SkenEqeKvsI0IJtsyFwUqeIseAG_j7hkE2ZzZXRBhA1psz1po06GISNW9PrdZyic0nN_SmJcYGu98PO7W46lSLWcPpxgmjkM_C1WgsUro2jVjJYl_y_qv2u3VtApz2bn2u8uGn10VHmcGMyOKiA",
    imageAlt: "Fachada de edifício comercial moderno",
    imageLeft: true,
  },
  {
    id: 2,
    tag: "PROPRIEDADE INTELECTUAL | 2024",
    title: "Proteção de Patente Arc-Tech",
    description:
      "Defesa dos algoritmos de design arquitetônico proprietários de uma empresa global de engenharia sustentável.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf7J8XdHTTg5uQpkVLS7Cvv9O3joZcMNMMAwaxu2gphqcj6iE-0SNBiahHSnYev1c2_47180wRNTsFlrMVOFI8dmFetFtV1DtHTMNgAnwFcbl6rvv7MDNkpB6DkKuGdEObf2NPxO3vNWrqvj9WF4-z-dBXrTihoY8lWgKmu4uJrwXzcYleg_vma96mmjhWehFMMAKetCRDaBI0xOAIGh5Z4etNNJphRIHUcU78K5SlwKx9-amH5NiiFkhk4DoXkWxWnZaw0POQyQ",
    imageAlt: "Linhas arquitetônicas abstratas",
    imageLeft: false,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex justify-between items-end">
          <div>
            <span className="font-label text-[10px] tracking-[0.4em] text-primary block mb-4 uppercase reveal-text">
              Trabalhos Selecionados
            </span>
            <h2 className="font-headline text-4xl reveal-text">
              Casos de Destaque
            </h2>
          </div>
          <a
            href="#"
            className="hover-underline-animation font-label text-[10px] tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors pb-2 reveal-text"
          >
            VER TODOS OS CASOS
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-40">
        {cases.map((c) =>
          c.imageLeft ? (
            <div
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center"
            >
              <div className="md:col-span-7 relative group overflow-hidden reveal-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="md:col-span-4 md:col-start-9 mt-8 md:mt-0 reveal-text">
                <span className="font-label text-[10px] tracking-[0.2em] text-primary mb-4 block">
                  {c.tag}
                </span>
                <h3 className="font-headline text-3xl mb-6 italic">{c.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {c.description}
                </p>
                <button className="group/btn flex items-center gap-3 font-label text-[10px] tracking-[0.2em] text-primary pb-1 hover:gap-5 transition-all duration-500">
                  LER DETALHES DO CASO
                  <span className="material-symbols-outlined text-sm transition-transform duration-500 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center"
            >
              <div className="md:col-span-4 md:col-start-1 order-2 md:order-1 mt-8 md:mt-0 reveal-text">
                <span className="font-label text-[10px] tracking-[0.2em] text-primary mb-4 block">
                  {c.tag}
                </span>
                <h3 className="font-headline text-3xl mb-6 italic">{c.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {c.description}
                </p>
                <button className="group/btn flex items-center gap-3 font-label text-[10px] tracking-[0.2em] text-primary pb-1 hover:gap-5 transition-all duration-500">
                  LER DETALHES DO CASO
                  <span className="material-symbols-outlined text-sm transition-transform duration-500 group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="md:col-span-7 md:col-start-6 order-1 md:order-2 relative group overflow-hidden reveal-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
