import { Button } from "../ui/Button";
import { H1, Subtitle } from "../ui/Typography";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20">
      {/* Background Image - Placeholder */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(135deg, #f5f5f5 0%, #ececec 100%)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 text-center max-w-4xl mx-auto">
        {/* Hero Text */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-hero-xl font-bold text-black leading-tight mb-6 tracking-tight">
            ENTRENÁ
            <br />
            CON UN
            <br />
            OBJETIVO.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Subtitle className="text-lg md:text-xl text-dark-gray-700 mb-4">
            Entrenamiento personalizado.
          </Subtitle>
          <Subtitle className="text-base md:text-lg text-gray-500">
            Planificación. Rendimiento. Evolución.
          </Subtitle>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            href="https://wa.me/5492617110170?text=Hola%20Nicolás,%20vi%20tu%20página%20de%20entrenamiento%20personalizado%20y%20me%20gustaría%20recibir%20información."
            variant="glass"
            size="lg"
            external
          >
            Empezar
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-dark-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
