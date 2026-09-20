import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#1a0000]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Logo Section */}
        <div className="pt-8 md:pt-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <img
              src="/images/logo-red.png"
              alt="Nicolas Logo"
              className="w-20 md:w-32 h-auto object-contain"
            />
          </div>
        </div>

        {/* Main Content - Full Height */}
        <div className="flex-1 flex items-center px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Column - Text */}
              <div className="space-y-8 order-2 md:order-1">
                <div>
                  <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
                    Entrena
                    <br />
                    <span className="text-red-primary">Diferente</span>
                  </h1>
                </div>

                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Programas personalizados de entrenamiento con un enfoque integral. Fuerza, judo y rendimiento deportivo adaptado a tus objetivos.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    href="#planes"
                    variant="solid"
                    size="lg"
                    className="bg-red-primary hover:bg-red-dark text-white font-black text-base px-8 py-4"
                  >
                    VER PLANES
                  </Button>
                  <Button
                    href="https://wa.me/5492617110170"
                    variant="outline"
                    size="lg"
                    className="border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-black font-black text-base px-8 py-4 transition-all"
                  >
                    CONSULTAR
                  </Button>
                </div>

                {/* Stats */}
                <div className="pt-8 border-t border-red-primary/20 flex gap-8">
                  <div>
                    <div className="text-3xl font-black text-red-primary">7+</div>
                    <div className="text-sm text-gray-400">Anos de experiencia</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-red-primary">50+</div>
                    <div className="text-sm text-gray-400">Alumnos entrenados</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Photo */}
              <div className="order-1 md:order-2">
                <div className="relative aspect-[3/4] md:aspect-auto md:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-primary/20 to-transparent rounded-2xl" />
                  <img
                    src="/images/nicolas-profile.webp"
                    alt="Nicolas"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute top-6 right-6 bg-red-primary text-white px-4 py-2 rounded-full text-sm font-black">
                    +7 ANOS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce text-red-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
