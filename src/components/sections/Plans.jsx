import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Button } from '../ui/Button';

const plans = [
  { id: 'online-monthly', category: 'ONLINE', name: 'Mensual', description: 'Acceso mensual a tu plan personalizado' },
  { id: 'online-quarterly', category: 'ONLINE', name: 'Trimestral', description: 'Descuento por comprometer 3 meses', highlighted: true },
  { id: 'online-semester', category: 'ONLINE', name: 'Semestral', description: 'La mejor inversión a largo plazo' },
  { id: 'gym-monthly', category: 'PRESENCIAL', name: 'Mensual', description: 'Sesiones en gimnasio' },
  { id: 'gym-quarterly', category: 'PRESENCIAL', name: 'Trimestral', description: 'Sesiones en gimnasio - 3 meses' },
  { id: 'gym-semester', category: 'PRESENCIAL', name: 'Semestral', description: 'Sesiones en gimnasio - 6 meses' },
  { id: 'home', category: 'DOMICILIO', name: 'Personalizado', description: 'Entrenamientos en tu domicilio' },
];

const PlanCard = ({ plan, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    onClick={() => onSelect(plan)}
    className={`
      relative p-8 rounded-3xl cursor-pointer transition-all duration-300
      ${plan.highlighted
        ? "bg-red-primary text-white"
        : "bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.07]"}
    `}
  >
    {plan.highlighted && (
      <span className="absolute -top-3 left-8 bg-white text-red-primary text-xs font-bold px-3 py-1 rounded-full">
        Mas elegido
      </span>
    )}
    <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
    <p className={`text-sm font-light mb-6 ${plan.highlighted ? "text-white/80" : "text-gray-400"}`}>
      {plan.description}
    </p>
    <Button
      variant={plan.highlighted ? "outline" : "solid"}
      size="sm"
      className={`w-full ${plan.highlighted ? "border-white text-white hover:bg-white hover:text-red-primary" : ""}`}
    >
      Elegir plan
    </Button>
  </motion.div>
);

const PlanGroup = ({ title, items, onSelect, cols = "md:grid-cols-3" }) => (
  <div className="mb-16 md:mb-20">
    <h3 className="text-xl font-semibold text-gray-400 mb-6 tracking-wide">{title}</h3>
    <div className={`grid grid-cols-1 ${cols} gap-5`}>
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
            Elegi el formato que mejor se adapte a tu rutina.
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
