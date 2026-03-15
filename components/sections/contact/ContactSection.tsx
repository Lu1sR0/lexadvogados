"use client";

export default function ContactSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-8 mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Esquerda: dados de contato */}
        <div className="lg:col-span-5 flex flex-col justify-center reveal-on-scroll">
          <h1 className="font-headline text-6xl lg:text-8xl leading-tight mb-12 -ml-1">
            Fale <br />
            <span className="italic text-primary">Conosco.</span>
          </h1>
          <div className="space-y-16">
            <div>
              <p className="text-[0.65rem] font-label tracking-[0.3em] text-secondary mb-4 uppercase">
                Correspondência Direta
              </p>
              <p className="font-headline text-3xl hover:text-primary transition-colors duration-500 cursor-pointer underline decoration-outline-variant underline-offset-8">
                contato@lexadvocacia.com.br
              </p>
            </div>
            <div>
              <p className="text-[0.65rem] font-label tracking-[0.3em] text-secondary mb-4 uppercase">
                Central de Atendimento
              </p>
              <p className="font-headline text-3xl">+55 (11) 4002-8922</p>
            </div>
            <div className="pt-8 border-l border-primary pl-8">
              <p className="text-on-surface-variant max-w-sm leading-relaxed">
                Nossos sócios estão disponíveis para consultas confidenciais
                sobre contencioso estrutural complexo e propriedade intelectual
                arquitetônica.
              </p>
            </div>
          </div>
        </div>

        {/* Direita: formulário */}
        <div className="lg:col-span-7 bg-surface-container-low p-12 lg:p-24 relative overflow-hidden reveal-on-scroll">
          <div
            className="absolute top-0 right-0 w-64 h-64 opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 10% 20%, rgba(218,199,105,0.05) 0%, transparent 50%)",
            }}
          />
          <form className="space-y-12 relative z-10">
            <div className="relative floating-label-input">
              <input
                id="name"
                type="text"
                placeholder=" "
                className="block w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-transparent text-on-surface transition-all duration-500"
              />
              <label
                htmlFor="name"
                className="absolute top-4 left-0 text-on-surface-variant pointer-events-none font-label text-sm tracking-wider uppercase"
              >
                Nome Completo
              </label>
              <div className="focus-line" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative floating-label-input">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  className="block w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-transparent text-on-surface transition-all duration-500"
                />
                <label
                  htmlFor="email"
                  className="absolute top-4 left-0 text-on-surface-variant pointer-events-none font-label text-sm tracking-wider uppercase"
                >
                  E-mail
                </label>
                <div className="focus-line" />
              </div>
              <div className="relative floating-label-input">
                <input
                  id="subject"
                  type="text"
                  placeholder=" "
                  className="block w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-transparent text-on-surface transition-all duration-500"
                />
                <label
                  htmlFor="subject"
                  className="absolute top-4 left-0 text-on-surface-variant pointer-events-none font-label text-sm tracking-wider uppercase"
                >
                  Tipo de Consulta Jurídica
                </label>
                <div className="focus-line" />
              </div>
            </div>

            <div className="relative floating-label-input">
              <textarea
                id="message"
                placeholder=" "
                rows={4}
                className="block w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-transparent text-on-surface transition-all duration-500 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute top-4 left-0 text-on-surface-variant pointer-events-none font-label text-sm tracking-wider uppercase"
              >
                Descrição do Caso
              </label>
              <div className="focus-line" />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="group relative inline-flex items-center text-primary font-label tracking-[0.2em] text-xs font-bold uppercase overflow-hidden active:scale-95 transition-transform"
              >
                <span className="relative z-10">Iniciar Consulta</span>
                <span className="material-symbols-outlined ml-4 transition-transform duration-500 group-hover:translate-x-2 relative z-10">
                  arrow_right_alt
                </span>
                <div className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
