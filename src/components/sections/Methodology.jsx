import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const MethodologyStep = ({ number, title, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-center">
        <div className="text-6xl md:text-8xl font-bold text-light-gray-200 mb-4">
          {number}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-black">
          {title}
        </h3>
      </div>
    </div>
  );
};

export const Methodology = () => {
  const steps = [
    { number: "01", title: "EVALUAR" },
    { number: "02", title: "PLANIFICAR" },
    { number: "03", title: "ENTRENAR" },
    { number: "04", title: "EVOLUCIONAR" },
  ];

  return (
    <Section id="metodologia" className="bg-light-gray-50" animation="none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-24 text-center">
          Metodología
        </h2>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, idx) => (
            <MethodologyStep
              key={idx}
              number={step.number}
              title={step.title}
              delay={idx * 150}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Methodology;
