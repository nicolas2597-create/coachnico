import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-black" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-primary/5 rounded-full blur-3xl" />

      {/* Top Section - Logo */}
      <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/logo-red.png"
              alt="Nicolas Logo"
              className="w-40 md:w-56 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-black leading-tight text-white">
                  COACH
                  <br />
                  <span className="text-red-primary">NICOLÁS</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                Entrena con un enfoque integral que combina fuerza, judo y entrenamiento funcional para alcanzar tu mejor version.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  href="#planes"
                  variant="solid"
                  size="lg"
                  className="bg-red-primary hover:bg-red-dark text-white font-bold px-12 py-4 text-lg"
                >
                  VER PLANES
                </Button>
                <Button
                  href="https://wa.me/5492617110170"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-12 py-4 text-lg transition-all duration-300"
                >
                  CONTACTAR
                </Button>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-red-primary/30 to-transparent rounded-3xl blur-3xl" />
              <img
                src="/images/nicolas-profile.webp"
                alt="Nicolas Alvarez"
                className="relative w-full h-auto rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-red-primary text-white px-6 py-3 rounded-full text-base font-black">
                +7 AÑOS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Photo on Mobile */}
      <div className="relative z-10 md:hidden px-6 pb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-primary/30 to-transparent rounded-2xl blur-3xl" />
          <img
            src="/images/nicolas-profile.webp"
            alt="Nicolas Alvarez"
            className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute top-4 right-4 bg-red-primary text-white px-4 py-2 rounded-full text-sm font-bold">
            +7 AÑOS
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-12 flex justify-center">
        <svg className="w-6 h-6 text-red-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
