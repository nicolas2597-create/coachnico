export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo-red.png" alt="Nicolás" className="h-6 w-auto object-contain" />
            <span className="text-sm text-gray-400">Nicolás Álvarez</span>
          </div>

          <div className="flex gap-8">
            <a
              href="https://instagram.com/coachnico.fitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5492617110170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>

          <div className="text-xs text-gray-600">
            © {currentYear} Nicolás Álvarez
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
