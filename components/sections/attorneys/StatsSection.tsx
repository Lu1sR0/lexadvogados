const stats = [
  { value: "98%", label: "Taxa de Sucesso" },
  { value: "320+", label: "Casos Estruturados" },
  { value: "R$12B", label: "Patrimônio Protegido" },
  { value: "12", label: "Escritórios Globais" },
];

export default function StatsSection() {
  return (
    <section className="bg-surface py-32 border-y border-outline-variant/10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center reveal-item">
        {stats.map((stat) => (
          <div key={stat.label} className="group cursor-default">
            <span className="inline-block font-headline text-5xl text-primary mb-2 group-hover:scale-110 group-hover:text-primary-fixed transition-all duration-500 origin-bottom">
              {stat.value}
            </span>
            <span className="block font-label text-[0.7rem] tracking-[0.2em] text-secondary uppercase group-hover:text-on-surface-variant transition-colors duration-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
