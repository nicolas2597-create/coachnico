import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { H3, Body } from "../ui/Typography";

const ServiceCard = ({ number, title, description, sports, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="glass-morphism p-8 md:p-12 rounded-3xl">
        <div className="flex items-start gap-6 mb-6">
          <span className="text-6xl md:text-7xl font-bold text-light-gray-200">
            {number}
          </span>
        </div>

        <H3 className="mb-4">{title}</H3>
        <Body className="mb-6 text-gray-600">{description}</Body>

        {sports && (
          <div className="flex gap-3 flex-wrap">
            {sports.map((sport) => (
              <span
                key={sport}
                className="text-xs font-medium text-dark-gray-700 bg-light-gray-100 px-3 py-1 rounded-full"
              >
                {sport}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      number: "01",
      title: "PERSONALIZADO",
      description: "Entrenamiento presencial adaptado completamente a vos.",
    },
    {
      number: "02",
      title: "ONLINE",
      description: "Tu planificación. Donde estés.",
    },
    {
      number: "03",
      title: "HÍBRIDO",
      description: "Entrenamiento presencial + seguimiento online.",
    },
    {
      number: "04",
      title: "RENDIMIENTO",
      description: "Preparación física para deportistas.",
      sports: ["Hockey", "Fútbol", "Judo"],
    },
  ];

  return (
    <Section id="servicios" className="bg-light-gray-50" animation="none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-20 text-center">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              {...service}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
