import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { H3, Body } from "../ui/Typography";

const ServiceCard = ({ number, title, description, delay = 0 }) => {
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
      <div className="p-12 md:p-16 border-2 border-red-primary/30 rounded-2xl hover:border-red-primary hover:bg-red-primary/5 transition-all duration-300 bg-black group cursor-pointer">
        <div className="mb-8">
          <span className="text-6xl md:text-7xl font-black text-red-primary group-hover:scale-110 transition-transform duration-300">
            {number}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
          {title}
        </h3>
        <p className="text-base md:text-lg text-gray-300 font-light mb-6 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      number: "01",
      title: "PERSONALIZADO",
      description: "Entrenamientos adaptados completamente a tus necesidades, objetivo y nivel actual.",
    },
    {
      number: "02",
      title: "ONLINE",
      description: "Entrena donde estes. Planes, seguimiento y ajustes via digital.",
    },
    {
      number: "03",
      title: "HIBRIDO",
      description: "Combinamos sesiones presenciales con seguimiento online continuo.",
    },
    {
      number: "04",
      title: "RENDIMIENTO",
      description: "Preparacion fisica especializada para atletas de hockey, futbol y judo.",
    },
  ];

  return (
    <Section id="servicios" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-32 text-center">
          SERVICIOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
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
