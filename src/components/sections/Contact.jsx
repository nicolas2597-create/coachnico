import { Section } from "../layout/Section";
import { H1, Body, Subtitle } from "../ui/Typography";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <Section id="contacto" className="bg-black text-white" animation="fade-in">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">
        <div>
          <h2 className="text-5xl md:text-hero-xl font-bold mb-8">
            ¿EMPEZAMOS?
          </h2>
          <Subtitle className="text-xl text-gray-300">
            Contáctame y diseñaremos tu plan de entrenamiento personalizado.
          </Subtitle>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            href="https://wa.me/5492617110170?text=Hola%20Nicolás,%20vi%20tu%20página%20de%20entrenamiento%20personalizado%20y%20me%20gustaría%20recibir%20información."
            variant="glass"
            size="lg"
            external
            className="bg-white/10 hover:bg-white/20 text-white"
          >
            Hablar por WhatsApp
          </Button>
        </div>

        {/* Alternative Contact Methods */}
        <div className="pt-12 border-t border-gray-700 space-y-6">
          <div>
            <Label className="text-gray-400 block mb-2">WhatsApp</Label>
            <a
              href="tel:+5492617110170"
              className="text-xl text-white hover:text-gray-300 transition-colors duration-300"
            >
              +54 9 261 711 0170
            </a>
          </div>

          <div>
            <Label className="text-gray-400 block mb-2">Instagram</Label>
            <a
              href="https://instagram.com/coachnico.fitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-gray-300 transition-colors duration-300"
            >
              @coachnico.fitt
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Fix: import Label component
import { Label } from "../ui/Typography";

export default Contact;
