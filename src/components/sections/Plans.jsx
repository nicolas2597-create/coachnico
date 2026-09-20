import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

const plans = [
  {
    id: 'online-monthly',
    category: 'ONLINE',
    name: 'Mensual',
    benefit: 'Empezá sin ataduras',
    description: 'Probá el sistema durante un mes y empezá a entrenar con una planificación hecha para vos.',
    note: 'Ideal para quien quiere conocer cómo funciona el seguimiento antes de comprometerse por más tiempo.',
  },
  {
    id: 'online-quarterly',
    category: 'ONLINE',
    name: 'Trimestral',
    benefit: 'El más elegido',
    description: '3 meses para entrenar, progresar y ajustar el plan según tu evolución.',
    highlighted: true,
    floatingBadge: 'Recomendado ⭐',
  },
  {
    id: 'online-semester',
    category: 'ONLINE',
    name: 'Semestral',
    benefit: 'Mejor precio por mes',
    description: '6 meses de planificación y seguimiento para construir resultados sostenibles.',
    note: 'Ideal para quien ya decidió comprometerse con un proceso a largo plazo y quiere acceder al menor valor mensual.',
    secondary: true,
  },
  {
    id: 'gym-monthly',
    category: 'PRESENCIAL',
    name: 'Mensual',
    benefit: 'Entrenamiento 100% personalizado',
    description: 'Entrenamos juntos y ajustamos técnica, cargas y ejercicios en cada sesión.',
  },
  {
    id: 'gym-quarterly',
    category: 'PRESENCIAL',
    name: 'Trimestral',
    benefit: 'Progresión + seguimiento',
    description: 'Un proceso de 3 meses para entrenar con continuidad y ajustar cada etapa según tu evolución.',
    highlighted: true,
    floatingBadge: 'Recomendado ⭐',
  },
  {
    id: 'gym-semester',
    category: 'PRESENCIAL',
    name: 'Semestral',
    benefit: 'Proceso a largo plazo',
    description: 'Más tiempo para construir fuerza, mejorar tu rendimiento y consolidar hábitos de entrenamiento.',
    secondary: true,
  },
  {
    id: 'home',
    category: 'DOMICILIO',
    name: 'Personalizado',
    benefit: 'Yo voy a vos',
    description: 'Entrenamiento personalizado en tu casa, sin traslados y adaptado al espacio y equipamiento que tengas.',
  },
];

const PlanCard = ({ plan, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    onClick={() => onSelect(plan)}
    className={`
      relative p-8 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col
      ${plan.highlighted
        ? "bg-red-primary text-white"
        : plan.secondary
        ? "bg-red-primary/[0.06] border border-red-primary/30 text-white hover:border-red-primary/60"
        : "bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.07]"}
    `}
  >
    {plan.floatingBadge && (
      <span className="absolute -top-3 left-8 bg-white text-red-primary text-xs font-bold px-3 py-1 rounded-full">
        {plan.floatingBadge}
      </span>
    )}
    <h4 className="text-xl font-bold mb-3">{plan.name}</h4>
    <span
      className={`inline-block self-start text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${
        plan.highlighted ? "bg-white text-red-primary" : "bg-red-primary/15 text-red-primary"
      }`}
    >
      {plan.benefit}
    </span>
    <p className={`text-sm font-light mb-2 ${plan.highlighted ? "text-white/90" : "text-gray-300"}`}>
      {plan.description}
    </p>
    {plan.note && (
      <p className={`text-xs font-light mb-4 ${plan.highlighted ? "text-white/60" : "text-gray-500"}`}>
        {plan.note}
      </p>
    )}
    <div className="flex-1" />
    <Button
      variant={plan.highlighted ? "outline" : "solid"}
      size="sm"
      className={`w-full mt-6 ${plan.highlighted ? "border-white text-white hover:bg-white hover:text-red-primary" : ""}`}
    >
      Elegir plan
    </Button>
  </motion.div>
);

const PlanGroup = ({ title, items, onSelect, cols = "md:grid-cols-3" }) => (
  <div className="mb-16 md:mb-20">
    <h3 className="text-xl font-semibold text-gray-400 mb-6 tracking-wide">{title}</h3>
    <div className={`grid grid-cols-1 ${cols} gap-5 items-stretch`}>
      {items.map((plan, idx) => (
        <PlanCard key={plan.id} plan={plan} index={idx} onSelect={onSelect} />
      ))}
    </div>
  </div>
);

const PlansSection = () => {
  const grouped = {
    ONLINE: plans.filter((p) => p.category === 'ONLINE'),
    PRESENCIAL: plans.filter((p) => p.category === 'PRESENCIAL'),
    DOMICILIO: plans.filter((p) => p.category === 'DOMICILIO'),
  };

  const handleSelectPlan = (plan) => {
    const message = `Hola Nicolás, me gustaría información sobre el plan: ${plan.category} - ${plan.name}`;
    window.open(`https://wa.me/5492617110170?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planes" className="py-28 md:py-40 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Planes
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Elegí el formato que mejor se adapte a tu rutina.
          </p>
        </div>

        <PlanGroup title="ONLINE" items={grouped.ONLINE} onSelect={handleSelectPlan} />
        <PlanGroup title="PRESENCIAL EN GIMNASIO" items={grouped.PRESENCIAL} onSelect={handleSelectPlan} />
        <PlanGroup title="A DOMICILIO" items={grouped.DOMICILIO} onSelect={handleSelectPlan} cols="md:grid-cols-1 md:max-w-sm" />
      </div>
    </section>
  );
};

export default PlansSection;
