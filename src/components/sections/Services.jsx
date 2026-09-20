import { Section } from "../layout/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ServiceCard = ({ number, title, description, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-full p-10 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-red-primary/40 hover:bg-white/[0.05] transition-all duration-300">
        <span className="text-sm font-semibold text-red-primary tracking-widest">{number}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-base text-gray-400 font-light leading-relaxed">
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
      title: "Personalizado",
      description: "Entrenamiento adaptado por completo a tu objetivo, tu nivel y tu tiempo disponible.",
    },
    {
      number: "02",
      title: "Online",
      description: "Tu plan, donde estés. Seguimiento y ajustes semanales a distancia.",
    },
    {
      number: "03",
      title: "Híbrido",
      description: "Sesiones presenciales combinadas con seguimiento online continuo.",
    },
    {
      number: "04",
      title: "Rendimiento",
      description: "Preparación física especializada para hockey, fútbol y judo.",
    },
  ];

  return (
    <Section id="servicios" className="bg-black py-28 md:py-40" animation="none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Servicios
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Distintas formas de entrenar, un mismo nivel de exigencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} delay={idx * 80} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
