import { Section } from "../layout/Section";
import { Image } from "../ui/Image";
import { H1, Body, Label } from "../ui/Typography";

export const About = () => {
  return (
    <Section id="sobre-mi" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-12">
            <div>
              <H1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight text-white">
                NICOLAS
                <br />
                <span className="text-red-primary">ALVAREZ</span>
              </H1>
            </div>

            <div className="space-y-6">
              <Label className="text-red-primary text-sm tracking-wide font-bold">PROFESIONAL</Label>
              <div className="space-y-3">
                <Body className="text-lg font-light text-gray-200">
                  ✓ Profesor de Educacion Fisica
                </Body>
                <Body className="text-lg font-light text-gray-200">
                  ✓ Tecnico Superior en Preparacion Fisica
                </Body>
                <Body className="text-lg font-light text-gray-200">
                  ✓ Profesor de Judo
                </Body>
              </div>
            </div>

            <div className="pt-12 border-t border-red-primary/30">
              <Body className="text-lg font-light text-gray-300 leading-relaxed">
                <strong className="font-bold text-white">+7 anos de experiencia</strong> disenando programas de entrenamiento para atletas de alto rendimiento y personas en busca de mejorar su salud y bienestar.
              </Body>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-red-primary/30 hover:border-red-primary transition-colors duration-300">
              <Image
                src="/images/nicolas-profile.webp"
                alt="Nicolas Alvarez"
                className="w-full h-full object-cover"
                blurUp
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
