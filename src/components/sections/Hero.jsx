import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Minimal background - just white with subtle grain */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 text-center max-w-6xl mx-auto space-y-20">
        {/* Hero Heading - Ultra minimal */}
        <div className="space-y-3 animate-fade-in-up">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none">
            ENTRENÁ
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none">
            CON UN
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none">
            OBJETIVO
          </h1>
        </div>

        {/* Subtitle - Minimal spacing */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl text-gray-500 font-light tracking-tight">
            Planificación. Rendimiento. Evolución.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            href="#planes"
            variant="glass"
            size="lg"
          >
            Ver Planes
          </Button>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
