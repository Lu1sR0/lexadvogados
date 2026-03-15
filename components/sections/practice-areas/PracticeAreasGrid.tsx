const areas = [
  {
    num: "01",
    title: "Direito Societário",
    titleColor: "text-primary",
    description:
      "Projetamos as estruturas fundacionais do empreendimento. De fusões multijurisdicionais a complexos frameworks de governança, garantimos que sua arquitetura corporativa seja resiliente e escalável.",
    cta: "EXPLORAR ESTRUTURAÇÃO",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdgac6yWYFjT8bp0pZQHYFMXKIl4UwtOpQViqYPqjeXlO4OYoRAa4DI2qsSjEKsKwCWui-wTESH8Jrn3PNFoCHfFMTnvlS9lkjgWc6245mafEDia_SNueT6eqvIQmw1Acd3cVZJvbsQ1PPaDQuB2zQ0B4fiMdzkAxXHHrohcLSB9aP9Sjajvt2BYjmdOjmFx_ple4LNXlOn1Lw1MjBy8RXVBEN_FKWIgGHp-0WpPnYcZ-agbOmMhrN1o9iPX1pZaRD-WP2QG78BQ",
  },
  {
    num: "02",
    title: "Comércio Internacional",
    titleColor: "text-secondary",
    description:
      "Navegamos pelos pontos de fricção do comércio global. Oferecemos assessoria estratégica em transações transfronteiriças, conformidade regulatória e nuances jurídicas diplomáticas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDw6x3RzNteaELy9Kic9fK7aWJd_up4LZ2bwHyp3j2rz69IDJSZLw2QuQtqVCr_zMcNbVLT5RRkjf1ovHoALcF5PGnmxubpHiq4MKwb5H203nxoi-10zy4-gDTIrK3MX31zkX4-itCVC_BH9UHSgPgcn5qYbhYJPk2_DElEZqiMZpza7O8849_CfOnYsXcsDhfqWxJBbd3FRQ_Cy15mLIHZJupmKZmM_vBMeJoSwuTRcGsyk4RII2SH2BVvg4Lf1tLWgy6ogmd-8g",
  },
  {
    num: "03",
    title: "Propriedade Intelectual",
    titleColor: "text-on-surface",
    description:
      "Protegemos os blueprints da inovação. Nossa prática de PI trata seu capital criativo como um ativo estrutural, oferecendo proteção rigorosa em patentes, marcas e direitos autorais.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWfQJYcxIkGZk_skXG_4_SGu3IyTmes1j_hwYDTBhwiQew9vDKDJPVvTQgHhsZ7SDglZDH5WhDtc9MZrKeX8d-Rg8U9Twmjskwy_nXiuRUtEt7xvhoAAQmjH284cSR0VFQyxFkalc7elKGqddw6RdJ28KuYWnMBHfrs8CRJU7OvbtIqWfVMwVBOdTBRlLvOS3sWQUT-sxvcL1HIwTXm1VOOHvAImVeROc0tZadBfdZFB0LxlYqEC6_Z8Hi2yhF6mc3DuvMWeF4Lg",
  },
  {
    num: "04",
    title: "Contencioso Estratégico",
    titleColor: "text-on-surface",
    description:
      "Resolução calculada de disputas de alto risco. Abordamos o contencioso com a precisão de um arquiteto, garantindo que cada movimento reforce seu objetivo comercial final.",
    cta: "DEFINIR ESTRATÉGIA",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjTo1xd8wvuAu1xgongl7MITA3H-wvnCAUSYIJ_wX-s7yz_1Li_9kOKV7AbJj2-BGR8AHLttN-ciP-b0uiJ0VqSMauQvce8Et8F8oX9Uy5lE6F2Xbgaqps_x61Hw30r0uyM2pOzioMa2Wd4Pf9dzZnoBLkaHA1nD2fZz4D8dc4PFJfRjzAOEb87Cg5Lis5Fkde_1uF9mwISuHigJclqPZEp3cR39sSuXGkwQ",
  },
];

export default function PracticeAreasGrid() {
  return (
    <section className="px-8 md:px-24 mb-48">
      <div className="grid grid-cols-12 gap-y-32 gap-x-12">

        {/* 01 Direito Societário */}
        <div className="reveal col-span-12 lg:col-span-8 flex flex-col md:flex-row gap-12 items-end">
          <div className="w-full md:w-3/5 aspect-[4/5] relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={areas[0].image}
              alt="Direito Societário"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          <div className="w-full md:w-2/5 pb-12">
            <span className="font-headline text-4xl italic text-outline-variant/30 block mb-4">01</span>
            <h2 className="font-headline text-3xl mb-6 text-primary">Direito Societário</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">{areas[0].description}</p>
            <a href="#" className="text-reveal-border font-label text-[0.75rem] tracking-[0.2em] text-on-surface inline-block pb-2 hover:text-primary transition-colors">
              EXPLORAR ESTRUTURAÇÃO
            </a>
          </div>
        </div>

        {/* 02 Comércio Internacional */}
        <div className="reveal reveal-delay-2 col-span-12 lg:col-span-4 lg:pt-48">
          <div className="w-full aspect-[3/4] mb-12 relative group overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={areas[1].image}
              alt="Comércio Internacional"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute -bottom-8 -left-8 bg-surface-container-high p-8 hidden md:block transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
              <span className="font-label text-primary tracking-widest text-[0.6rem]">ALCANCE GLOBAL</span>
            </div>
          </div>
          <span className="font-headline text-4xl italic text-outline-variant/30 block mb-4">02</span>
          <h2 className="font-headline text-3xl mb-6 text-secondary">Comércio Internacional</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">{areas[1].description}</p>
        </div>

        {/* 03 Propriedade Intelectual */}
        <div className="reveal col-span-12 flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-12 md:col-span-5 z-10 md:-mr-12 transform transition-transform duration-700 hover:-translate-x-4">
                <span className="font-headline text-4xl italic text-outline-variant/30 block mb-4">03</span>
                <h2 className="font-headline text-4xl mb-6 text-on-surface">Propriedade Intelectual</h2>
                <div className="bg-surface-container-low p-10 shadow-2xl border border-outline-variant/5">
                  <p className="text-on-surface-variant leading-relaxed">{areas[2].description}</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 aspect-video overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={areas[2].image}
                  alt="Propriedade Intelectual"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 04 Contencioso Estratégico */}
        <div className="reveal col-span-12 lg:col-span-6 lg:col-start-4 mt-24">
          <div className="relative overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={areas[3].image}
              alt="Contencioso Estratégico"
              className="w-full h-[500px] object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-surface via-surface/40 to-transparent">
              <span className="font-headline text-4xl italic text-primary/30 block mb-4">04</span>
              <h2 className="font-headline text-4xl mb-6 text-on-surface">Contencioso Estratégico</h2>
              <p className="text-on-surface-variant leading-relaxed max-w-md mb-8 transform transition-transform duration-500 group-hover:translate-x-2">
                {areas[3].description}
              </p>
              <a href="#" className="font-label text-[0.75rem] tracking-[0.2em] text-primary flex items-center gap-4 group/btn">
                DEFINIR ESTRATÉGIA{" "}
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-3">
                  trending_flat
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
