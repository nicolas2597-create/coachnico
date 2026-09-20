import { Section } from "../layout/Section";
import { Image } from "../ui/Image";

export const About = () => {
  return (
    <Section id="sobre-mi" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/nicolas-profile.webp"
                alt="Nicolas Alvarez"
                className="w-full h-full object-cover"
                blurUp
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-3 space-y-8">
            <p className="text-red-primary text-sm font-semibold tracking-widest uppercase">
              Sobre mi
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Nicolas
              <br />
              Alvarez
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              Profesor de Educacion Fisica, Tecnico Superior en Preparacion Fisica y
              Profesor de Judo. Mas de 7 anos diseñando programas de entrenamiento
              para atletas de alto rendimiento y personas que buscan mejorar su
              salud y bienestar.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-3xl font-black text-white">7+</div>
                <div className="text-sm text-gray-500 mt-1">Anos exp.</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-sm text-gray-500 mt-1">Alumnos</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">3</div>
                <div className="text-sm text-gray-500 mt-1">Disciplinas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
