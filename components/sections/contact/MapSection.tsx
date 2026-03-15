export default function MapSection() {
  return (
    <section className="w-full h-[600px] relative grayscale hover:grayscale-0 transition-all duration-1000 reveal-on-scroll">
      <div className="absolute inset-0 bg-background/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYF0nCCV2C4t279RILSgiwAwV6ute_x5LERXnW35K7mvz8QE1asyTrCLYF1NYylbC1np52p2wAF9ZMja3Um0W-yRgYSPygujl9Kk-xP2UfbYmq-kjoTQdvm8qWByknW13Ytys9RC37Z_O6mJTYLbV9BPvn9j-6yJfqcpOUml5sAzyMkfVn2LYs2djhEE_DUECgJS29pVOEFZpGeYeWtzeRYy8M5bxzks93aI8IfY8hGubIYfTU9Zvjmhdb2QrP3Qv784kdop5l5w"
        alt="Mapa mundial"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-16 left-8 z-20">
        <div className="bg-surface-container-high/90 backdrop-blur-md p-8 border-l-2 border-primary">
          <p className="text-primary font-label text-[0.6rem] tracking-[0.4em] mb-2 uppercase">
            Sede — São Paulo, Brasil
          </p>
          <p className="font-headline text-3xl">Faria Lima, SP</p>
        </div>
      </div>
    </section>
  );
}
