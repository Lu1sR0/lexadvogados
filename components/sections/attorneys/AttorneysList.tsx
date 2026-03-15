const attorneys = [
  {
    role: "Sócio-Gerente Sênior",
    name: "Arthur V. Sterling",
    quote:
      '"As estruturas mais robustas são aquelas que consideram o vento antes que ele sopre."',
    bio: [
      "Arthur lidera a divisão de Responsabilidade Estrutural do escritório. Sua filosofia centra-se na 'Fortificação Preventiva' — metodologia que ele pioneirou para identificar pontos de tensão jurídica em projetos de infraestrutura internacional anos antes que se manifestem.",
      "Com mais de R$ 20 bilhões em acordos negociados com sucesso, a conquista de Arthur reside não apenas em vencer, mas no silêncio das crises que ele evitou antes de chegarem a um tribunal.",
    ],
    practice: "Infraestrutura e Responsabilidade",
    tenure: "26 anos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfJKek7Hq2xc1Yridyfra6B1UHBAGObl0njvULzB73vAvVbBbcAPCFDoQQviAGOlyWrww0--jIogWaQ3X42j3q6JEXtbNT8B7ZxLX1vUxCbiP1xRMg6dByWeLc_es3wXp2-EmY8LTgeETtpK2T8RXp4FOks0xHFsehaTVJxgEMgK1sUkttinFoA9ahzFy4sdOrIuyJotna9YAc210g3p4tsDUpm2eNMeYPpz8Fe9O-zfMa8UH1odbRBuYQsWIrIgDd5i2MO0w-lg",
    imageLeft: true,
  },
  {
    role: "Diretora de Arquitetura de PI",
    name: "Elena Moretti",
    quote:
      '"Ideias são os blueprints da economia moderna — exigem o mesmo rigor de engenharia de qualquer ativo físico."',
    bio: [
      "Elena aborda a Propriedade Intelectual com a alma de uma matemática. Sua filosofia de 'Cercamento Intelectual' tornou-se o padrão da indústria para proteger arquiteturas de software complexas e designs proprietários no mercado global.",
      "Professora convidada frequente no Instituto de Estudos Avançados, seu foco permanece na preservação da inovação por meio de um design jurídico hermético.",
    ],
    practice: "Propriedade Intelectual",
    tenure: "14 anos",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0uK7lqznRw5Uhqt76xOzDkRZ4L8rkZHrVQo_188_ry4-_WgEFAA6IjMHJndSAUsrkaz2cA61llBUjEKqMpsdTCScZg3P-Jc-AlHAA2-KsJjZZAyf8GR8bjDsdJf3L7N4SW37EBu6Zlk7_2DRnBA1hNsWvsH5wU5WDBTluEM_HVm6jLNTT8a7Vw3JuX-0Ohjg5eWNhN6m707HlwaGdxDSYwLt_z42u3ZLqOd5VQZ5AFCW7sQHYh-TZIp3Lucq-xUn9QB8XBaeRA",
    imageLeft: false,
  },
];

export default function AttorneysList() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal-item">
          <h2 className="font-headline text-4xl md:text-5xl">Os Sócios</h2>
          <p className="font-label text-[0.75rem] tracking-[0.1em] text-secondary max-w-xs uppercase">
            Excelência curada em contencioso estrutural e empresarial.
          </p>
        </div>

        {attorneys.map((attorney) =>
          attorney.imageLeft ? (
            <div
              key={attorney.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-40 items-center attorney-card reveal-item"
            >
              <div className="lg:col-span-5 relative z-10">
                <div className="aspect-[4/5] overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={attorney.image}
                    alt={`Retrato de ${attorney.name}`}
                    className="attorney-img w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 lg:-ml-20 bg-surface-container-low p-12 lg:p-24">
                <span className="font-label text-[0.75rem] tracking-[0.2em] text-primary block mb-4 uppercase">
                  {attorney.role}
                </span>
                <h3 className="font-headline text-4xl mb-8">{attorney.name}</h3>
                <div className="space-y-6 font-body text-on-surface-variant leading-relaxed">
                  <p className="text-xl text-on-surface">{attorney.quote}</p>
                  {attorney.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-12 flex gap-8">
                  <div>
                    <span className="block font-label text-[0.65rem] text-secondary tracking-widest mb-1 uppercase">
                      Área de Atuação
                    </span>
                    <span className="font-body text-sm">{attorney.practice}</span>
                  </div>
                  <div>
                    <span className="block font-label text-[0.65rem] text-secondary tracking-widest mb-1 uppercase">
                      Tempo de Firma
                    </span>
                    <span className="font-body text-sm">{attorney.tenure}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={attorney.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-40 items-center attorney-card reveal-item"
            >
              <div className="lg:col-span-7 order-2 lg:order-1 bg-surface-container-high p-12 lg:p-24 lg:-mr-20 relative z-10">
                <span className="font-label text-[0.75rem] tracking-[0.2em] text-primary block mb-4 uppercase">
                  {attorney.role}
                </span>
                <h3 className="font-headline text-4xl mb-8">{attorney.name}</h3>
                <div className="space-y-6 font-body text-on-surface-variant leading-relaxed">
                  <p className="text-xl text-on-surface">{attorney.quote}</p>
                  {attorney.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-12 flex gap-8">
                  <div>
                    <span className="block font-label text-[0.65rem] text-secondary tracking-widest mb-1 uppercase">
                      Área de Atuação
                    </span>
                    <span className="font-body text-sm">{attorney.practice}</span>
                  </div>
                  <div>
                    <span className="block font-label text-[0.65rem] text-secondary tracking-widest mb-1 uppercase">
                      Tempo de Firma
                    </span>
                    <span className="font-body text-sm">{attorney.tenure}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/5] overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={attorney.image}
                    alt={`Retrato de ${attorney.name}`}
                    className="attorney-img w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
