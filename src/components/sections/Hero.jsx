import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="/images/nicolas-profile.webp"
          alt="Nicolás Álvarez"
          className="w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-28 pt-32">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-red-primary text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            Entrenamiento personalizado
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] tracking-tight mb-8 max-w-4xl">
            Tu mejor
            <br />
            versión.
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl mb-10 leading-relaxed">
            Fuerza, judo y rendimiento deportivo. Un plan diseñado exclusivamente para vos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#planes" variant="solid" size="lg">
              Ver planes
            </Button>
            <Button href="https://wa.me/5492617110170" variant="outline" size="lg" external>
              Hablar con Nicolás
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <svg className="w-5 h-5 text-white/50 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
