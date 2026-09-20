import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white">
                COACH
                <br />
                <span className="text-red-primary">NICOLÁS</span>
              </h1>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
                Entrená con un enfoque integral que combina fuerza, judo y entrenamiento funcional para alcanzar tu mejor versión.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button
                href="#planes"
                variant="solid"
                size="lg"
                className="bg-red-primary hover:bg-red-dark text-white font-bold"
              >
                VER PLANES
              </Button>
              <Button
                href="https://wa.me/5492617110170"
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:border-red-primary"
              >
                CONTACTAR
              </Button>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-primary/30 to-transparent rounded-2xl blur-3xl" />
              <img
                src="/images/nicolas-profile.webp"
                alt="Nicolás Álvarez"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-red-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                +7 AÑOS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-red-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
