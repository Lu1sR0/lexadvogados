const offices = [
  { city: "SÃO PAULO", address: "Faria Lima, Vila Olímpia" },
  { city: "RIO DE JANEIRO", address: "Porto Maravilha, Centro" },
  { city: "NOVA YORK", address: "Hudson Yards, Manhattan" },
  { city: "LISBOA", address: "Parque das Nações" },
];

export default function GlobalReachSection() {
  return (
    <section className="py-32 bg-surface-container-high relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-xl">
          <span className="font-label text-[10px] tracking-[0.4em] text-primary block mb-8 uppercase reveal-text">
            Presença Global
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mb-12 reveal-text">
            Uma presença sem fronteiras. Assessoria sem concessões.
          </h2>
          <div className="reveal-text">
            <div className="grid grid-cols-2 gap-8">
              {offices.map((office) => (
                <div key={office.city} className="group cursor-default border-b border-outline-variant/10 pb-6 hover:border-primary/30 transition-colors duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-500 ease-out" />
                    <h4 className="font-label text-[12px] tracking-widest text-on-surface group-hover:text-primary transition-colors duration-300">
                      {office.city}
                    </h4>
                  </div>
                  <p className="text-sm text-on-surface-variant group-hover:text-on-surface/70 transition-colors duration-300 pl-0 group-hover:pl-6 transition-all">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mapa de fundo abstrato */}
      <div
        id="world-map-bg"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFrsl61r1oA3prgKgUeARS5KfyDB0HIGbrmfhhHc0x1jMJAopScEJCnIVZmT7VrYuMRtUnJD3c2KmuSJXOS-QIoQakU1M6cGnPkvhWJydCSjoJyI-lDNmtdfpyg1aaii4-WGDxjilf4l0aoI--VDdc03xVP9TLoYm4LO3i2q75GNRO2nxFFoRv8E-g2WRqDEUUeRK3dJRw34f2y_FNXxE7-oP0eW1rVuXfYJXm1js7-yuCflSZNGk5X-I-FU3R3G633F9aIrilfg"
          alt="Mapa mundial"
          className="w-full h-full object-contain grayscale invert"
        />
      </div>
    </section>
  );
}
