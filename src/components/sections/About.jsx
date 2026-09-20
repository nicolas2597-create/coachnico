import { Section } from "../layout/Section";
import { Image } from "../ui/Image";
import { H1, Body, Label } from "../ui/Typography";

export const About = () => {
  return (
    <Section id="sobre-mi" className="bg-white" animation="none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <H1 className="text-5xl md:text-6xl leading-tight">
                  NICOLÁS
                  <br />
                  ÁLVAREZ
                </H1>
              </div>

              <div className="space-y-4">
                <Label className="block text-gray-500">PROFESIONAL</Label>
                <Body className="text-lg text-dark-gray-700">
                  Profesor de Educación Física
                </Body>
                <Body className="text-lg text-dark-gray-700">
                  Técnico Superior en Preparación Física
                </Body>
                <Body className="text-lg text-dark-gray-700">
                  Profesor de Judo
                </Body>
              </div>

              <div className="pt-8 border-t border-light-gray-200">
                <Body className="text-xl text-dark-gray-700">
                  <strong>+7 años de experiencia</strong> diseñando programas de entrenamiento para atletas de alto rendimiento y personas en busca de mejorar su salud y bienestar.
                </Body>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-glass">
              <Image
                src="/images/profile-placeholder.jpg"
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
