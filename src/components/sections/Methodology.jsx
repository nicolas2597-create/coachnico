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
        <div className="text-6xl md:text-8xl font-black text-red-primary mb-4">
          {number}
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white">
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
    <Section id="metodologia" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-32 text-center">
          METODOLOGÍA
        </h2>

        <div className="space-y-24 md:space-y-40">
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
