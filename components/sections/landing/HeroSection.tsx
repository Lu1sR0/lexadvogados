"use client";

import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ delay: 2.0 });
      tl.to("#hero-img", { scale: 1, duration: 2, ease: "power2.out" })
        .to(
          ".fade-up-element",
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" },
          "-=1.5"
        )
        .from("#hero-line", { scaleX: 0, duration: 1, ease: "power2.out" }, "-=1.2");

      gsap.utils.toArray<Element>(".reveal-text").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<Element>(".reveal-image").forEach((img) => {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: { trigger: img, start: "top 80%" },
        });
      });

      gsap.to("#world-map-bg", {
        x: -20,
        y: -10,
        scrollTrigger: { trigger: "#world-map-bg", scrub: 1 },
      });
    };

    init();
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="hero-img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZPa0S9rB9XLEnPxbseMAHMnRelHScXzKoX8ZHsAtPM8kB3RXa9bEnaMdnk3U9K787_Pyf5cscd1l18rwLozBn_7ejg_K4jWuOaFm1SKgZ3CXKEzjDqv5UZ2ORyIWvnKrWVrAtNrLpn-Mnc5MMice0Y9toR0Av9l3Go4dV9qbJj1UWAjiB9BHndbkz5siDbpxA8V0TavxLyACn_K4qNmZhBMb6sZB52kfOSUbUz4NB5p5k2DX8iNDSWl-tGMaHdx4AjhP7Jphefw"
          alt="Detalhe arquitetônico de arranha-céu moderno"
          className="w-full h-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="font-label text-[11px] tracking-[0.4em] text-primary block mb-6 fade-up-element">
            REFERÊNCIA CONSAGRADA
          </span>

          <h1 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8 italic fade-up-element">
            Precisão na Prática.
            <br />
            <span className="not-italic text-on-surface-variant">
              Excelência na Execução.
            </span>
          </h1>

          <div
            id="hero-line"
            className="w-24 h-[1px] bg-primary mb-8 fade-up-element origin-left"
          />

          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed mb-10 fade-up-element">
            Um escritório moderno construído sobre os alicerces da integridade
            estrutural e do domínio jurídico. Navegamos pela complexidade com
            clareza e estratégia.
          </p>

          <div className="flex items-center gap-12 fade-up-element">
            <button className="group flex items-center gap-4 text-on-surface font-label text-xs tracking-widest transition-all">
              <span className="w-12 h-12 flex items-center justify-center border border-outline-variant/30 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
              CONHEÇA O ESCRITÓRIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
