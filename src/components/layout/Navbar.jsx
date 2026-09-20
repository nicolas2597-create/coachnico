import { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#sobre-mi", label: "Sobre mi" },
    { href: "#metodologia", label: "Metodologia" },
    { href: "#planes", label: "Planes" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/logo-red.png"
              alt="Nicolas"
              className="h-8 w-auto object-contain"
            />
            <span className="text-white font-semibold tracking-tight text-[15px]">
              Nicolas Alvarez
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button href="#planes" variant="solid" size="sm">
              Empezar
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button href="#planes" variant="solid" size="sm" className="w-full mt-2" onClick={() => setMenuOpen(false)}>
            Empezar
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
