import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ScrollStoryItem = ({ text, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl md:text-5xl font-bold text-black leading-tight">
        {text}
      </p>
    </div>
  );
};

export const Problem = () => {
  return (
    <Section id="problema" className="bg-white" animation="none">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-24">
        {/* Main Problem Statement */}
        <div className="space-y-8">
          <ScrollStoryItem text="No existen dos personas iguales." delay={0} />
          <ScrollStoryItem
            text="Tu entrenamiento tampoco debería serlo."
            delay={100}
          />
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mt-32">
          <ScrollStoryItem text="Evaluamos." delay={0} />
          <ScrollStoryItem text="Planificamos." delay={100} />
          <ScrollStoryItem text="Entrenamos." delay={200} />
          <ScrollStoryItem text="Medimos." delay={300} />
          <ScrollStoryItem text="Evolucionamos." delay={400} />
        </div>
      </div>
    </Section>
  );
};

export default Problem;
