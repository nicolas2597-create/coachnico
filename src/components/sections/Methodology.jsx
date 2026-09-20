import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const MethodologyStep = ({ number, title, description, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      className={`
        flex items-start gap-6 md:gap-10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-black text-red-primary shrink-0 w-16">
        {number}
      </div>
      <div className="pb-10 md:pb-14 border-b border-white/10 flex-1">
        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-400 font-light max-w-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Methodology = () => {
  const steps = [
    { number: "01", title: "Evaluar", description: "Analizamos tu punto de partida, objetivos y disponibilidad." },
    { number: "02", title: "Planificar", description: "Diseñamos un programa a medida, con metas claras y medibles." },
    { number: "03", title: "Entrenar", description: "Ejecutamos con seguimiento constante y ajustes en tiempo real." },
    { number: "04", title: "Evolucionar", description: "Medimos resultados y llevamos el plan al siguiente nivel." },
  ];

  return (
    <Section id="metodologia" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-16 md:mb-24">
          Metodologia
        </h2>

        <div className="space-y-0">
          {steps.map((step, idx) => (
            <MethodologyStep key={idx} {...step} delay={idx * 100} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Methodology;
