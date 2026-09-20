export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">NICOLÁS</h3>
            <p className="text-gray-400">Entrenamiento Personalizado</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com/coachnico.fitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5492617110170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {currentYear} Nicolás Álvarez. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
