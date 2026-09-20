import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "glass-morphism mx-4 mt-4 rounded-2xl"
            : "bg-white/0"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          NICOLÁS
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#servicios"
            className="text-dark-gray-700 hover:text-black transition-colors duration-300"
          >
            Servicios
          </a>
          <a
            href="#sobre-mi"
            className="text-dark-gray-700 hover:text-black transition-colors duration-300"
          >
            Sobre mí
          </a>
          <a
            href="#metodologia"
            className="text-dark-gray-700 hover:text-black transition-colors duration-300"
          >
            Metodología
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex gap-4">
          <Button
            href="https://wa.me/5492617110170?text=Hola%20Nicolás,%20vi%20tu%20página%20de%20entrenamiento%20personalizado%20y%20me%20gustaría%20recibir%20información."
            variant="glass"
            size="md"
            external
          >
            Empezar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
