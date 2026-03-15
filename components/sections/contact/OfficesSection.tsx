const offices = [
  {
    tag: "Sede Principal",
    tagColor: "text-primary",
    city: "São Paulo",
    lineColor: "bg-primary",
    address: ["Torre Monolith, Conjunto 8800", "Av. Faria Lima, 4440 — Itaim Bibi"],
    phone: "+55 11 4002-8922",
    delay: "100ms",
  },
  {
    tag: "Hub Rio de Janeiro",
    tagColor: "text-secondary",
    city: "Rio de Janeiro",
    lineColor: "bg-secondary",
    address: ["Porto Maravilha Business Tower", "Praça Mauá, 1 — Centro"],
    phone: "+55 21 4003-7700",
    delay: "200ms",
  },
  {
    tag: "Hub Europeu",
    tagColor: "text-secondary",
    city: "Lisboa",
    lineColor: "bg-secondary",
    address: ["Parque das Nações, Torre Oriente", "Av. D. João II, 1900-233"],
    phone: "+351 21 880 0000",
    delay: "300ms",
  },
  {
    tag: "Hub Internacional",
    tagColor: "text-secondary",
    city: "Nova York",
    lineColor: "bg-secondary",
    address: ["The Monolith Tower, Suite 8800", "Hudson Yards, NY 10001"],
    phone: "+1 212 880 9000",
    delay: "400ms",
  },
];

export default function OfficesSection() {
  return (
    <section className="bg-surface-container-low py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Intro */}
          <div className="lg:col-span-4 reveal-on-scroll">
            <h2 className="font-headline text-4xl mb-8">Nossos Escritórios</h2>
            <p className="text-on-surface-variant leading-relaxed max-w-xs">
              Presença estratégica nos principais centros jurídicos e
              financeiros do mundo, garantindo expertise local com perspectiva
              global.
            </p>
          </div>

          {/* Grade de escritórios */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="group cursor-crosshair reveal-on-scroll"
                  style={{ transitionDelay: office.delay }}
                >
                  <p
                    className={`${office.tagColor} font-label text-[0.6rem] tracking-[0.3em] mb-4 uppercase`}
                  >
                    {office.tag}
                  </p>
                  <h3 className="font-headline text-2xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {office.city}
                  </h3>
                  <div className="h-[1px] w-full bg-outline-variant/20 mb-6 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 ${office.lineColor} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                    />
                  </div>
                  <address className="not-italic text-on-surface-variant text-sm leading-relaxed space-y-1">
                    {office.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <p className="pt-2 text-on-surface">{office.phone}</p>
                  </address>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
