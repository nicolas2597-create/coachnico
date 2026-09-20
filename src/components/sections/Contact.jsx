import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <Section id="contacto" className="bg-black py-28 md:py-48" animation="fade-in">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
          ¿Empezamos?
        </h2>
        <p className="text-lg md:text-2xl text-gray-400 font-light mb-12 max-w-xl mx-auto">
          Contame tu objetivo y armamos juntos tu plan de entrenamiento.
        </p>

        <div className="flex justify-center mb-20">
          <Button
            href="https://wa.me/5492617110170?text=Hola%20Nicol%C3%A1s%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
            variant="solid"
            size="lg"
            external
          >
            Hablar por WhatsApp
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 pt-10 border-t border-white/10">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">WhatsApp</p>
            <a href="tel:+5492617110170" className="text-lg text-white hover:text-red-primary transition-colors">
              +54 9 261 711 0170
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Instagram</p>
            <a
              href="https://instagram.com/coachnico.fitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white hover:text-red-primary transition-colors"
            >
              @coachnico.fitt
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
