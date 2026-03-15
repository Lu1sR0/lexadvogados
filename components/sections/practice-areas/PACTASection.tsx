import TransitionLink from "@/components/layout/TransitionLink";

export default function PACTASection() {
  return (
    <section className="reveal py-32 px-8 flex flex-col items-center">
      <h2 className="font-headline text-4xl mb-12">Construa sua Defesa.</h2>
      <TransitionLink href="/contact">
        <button className="btn-premium border border-outline-variant px-12 py-5 font-label tracking-[0.2em] hover:bg-on-background hover:text-background transition-all duration-500">
          INICIAR CONSULTA
        </button>
      </TransitionLink>
    </section>
  );
}
