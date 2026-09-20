import { Section } from "../layout/Section";
import { Image } from "../ui/Image";
import { H1, Body, Label } from "../ui/Typography";

export const About = () => {
  return (
    <Section id="sobre-mi" className="bg-white" animation="none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-12">
            <div>
              <H1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight">
                NICOLÁS
                <br />
                ÁLVAREZ
              </H1>
            </div>

            <div className="space-y-6">
              <Label className="text-gray-500 text-sm tracking-wide">PROFESIONAL</Label>
              <div className="space-y-3">
                <Body className="text-lg font-light text-gray-700">
                  Profesor de Educación Física
                </Body>
                <Body className="text-lg font-light text-gray-700">
                  Técnico Superior en Preparación Física
                </Body>
                <Body className="text-lg font-light text-gray-700">
                  Profesor de Judo
                </Body>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-200">
              <Body className="text-lg font-light text-gray-700 leading-relaxed">
                <strong className="font-normal">+7 años de experiencia</strong> diseñando programas de entrenamiento para atletas de alto rendimiento y personas en busca de mejorar su salud y bienestar.
              </Body>
            </div>
          </div>

          {/* Image - Minimal */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/nicolas-profile.webp"
                alt="Nicolás Álvarez"
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
