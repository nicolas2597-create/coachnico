import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ScrollStoryItem = ({ text, accent, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight ${accent ? "text-red-primary" : "text-white"}`}>
        {text}
      </p>
    </div>
  );
};

export const Problem = () => {
  return (
    <Section id="problema" className="bg-black py-28 md:py-48" animation="none">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="space-y-3 mb-24 md:mb-32">
          <ScrollStoryItem text="No existen dos personas iguales." delay={0} />
          <ScrollStoryItem text="Tu entrenamiento tampoco debería serlo." accent delay={100} />
        </div>

        <div className="space-y-6 md:space-y-8">
          <ScrollStoryItem text="Evaluamos." delay={0} />
          <ScrollStoryItem text="Planificamos." delay={80} />
          <ScrollStoryItem text="Entrenamos." delay={160} />
          <ScrollStoryItem text="Medimos." delay={240} />
          <ScrollStoryItem text="Evolucionamos." accent delay={320} />
        </div>
      </div>
    </Section>
  );
};

export default Problem;
