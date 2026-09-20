import { Section } from "../layout/Section";
import { H1, Body, Subtitle, Label } from "../ui/Typography";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <Section id="contacto" className="bg-black text-white py-28 md:py-40" animation="fade-in">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-16">
        <div>
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            ¿EMPEZAMOS?
          </h2>
          <Subtitle className="text-xl text-gray-300">
            Contactame y disenaremos tu plan de entrenamiento personalizado.
          </Subtitle>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            href="https://wa.me/5492617110170?text=Hola%20Nicolas,%20vi%20tu%20pagina%20de%20entrenamiento%20personalizado%20y%20me%20gustaria%20recibir%20informacion."
            variant="solid"
            size="lg"
            external
            className="bg-red-primary hover:bg-red-dark text-white font-bold"
          >
            HABLAR POR WHATSAPP
          </Button>
        </div>

        {/* Alternative Contact Methods */}
        <div className="pt-12 border-t border-red-primary/30 space-y-6">
          <div>
            <Label className="text-red-primary block mb-2 text-sm tracking-wide font-bold">WHATSAPP</Label>
            <a
              href="tel:+5492617110170"
              className="text-xl text-white hover:text-red-primary transition-colors duration-300"
            >
              +54 9 261 711 0170
            </a>
          </div>

          <div>
            <Label className="text-red-primary block mb-2 text-sm tracking-wide font-bold">INSTAGRAM</Label>
            <a
              href="https://instagram.com/coachnico.fitt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-red-primary transition-colors duration-300"
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
