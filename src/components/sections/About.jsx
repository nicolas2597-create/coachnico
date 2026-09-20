import { Section } from "../layout/Section";
import { Image } from "../ui/Image";

export const About = () => {
  return (
    <Section id="sobre-mi" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-stretch">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="relative h-full min-h-[380px] flex items-end justify-center">
              <Image
                src="/images/nicolas-profile.webp"
                alt="Nicolás Álvarez"
                className="w-full h-full object-contain object-bottom"
                blurUp
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-3 space-y-8">
            <p className="text-red-primary text-sm font-semibold tracking-widest uppercase">
              Sobre mí
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
              Nicolás
              <br />
              Álvarez
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              Profesor de Educación Física, Técnico Superior en Preparación Física y
              Profesor de Judo. Más de 7 años diseñando programas de entrenamiento
              para atletas de alto rendimiento y personas que buscan mejorar su
              salud y bienestar.
            </p>

            <div className="pt-6 border-t border-white/10 max-w-lg">
              <div className="text-3xl font-black text-white">7+</div>
              <div className="text-sm text-gray-500 mt-1">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
