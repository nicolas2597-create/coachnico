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
        ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-black/40"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="h-10 w-10">
          <img
            src="/images/logo-red.png"
            alt="Nicolas Logo"
            className="h-full w-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="#servicios" className="text-gray-300 hover:text-red-primary transition-colors duration-300 font-medium">
            Servicios
          </a>
          <a href="#sobre-mi" className="text-gray-300 hover:text-red-primary transition-colors duration-300 font-medium">
            Sobre Mi
          </a>
          <a href="#metodologia" className="text-gray-300 hover:text-red-primary transition-colors duration-300 font-medium">
            Metodologia
          </a>
          <a href="#planes" className="text-gray-300 hover:text-red-primary transition-colors duration-300 font-medium">
            Planes
          </a>
        </div>

        {/* CTA Button */}
        <Button
          href="#planes"
          variant="solid"
          size="sm"
          className="bg-red-primary hover:bg-red-dark text-white font-bold"
        >
          CONTACTAR
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
