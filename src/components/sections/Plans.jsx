import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';

const PlansSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'online-monthly',
      category: 'ONLINE',
      name: 'Mensual',
      description: 'Acceso mensual a tu plan personalizado',
    },
    {
      id: 'online-quarterly',
      category: 'ONLINE',
      name: 'Trimestral',
      description: 'Obtén descuento comprometiendo 3 meses',
    },
    {
      id: 'online-semester',
      category: 'ONLINE',
      name: 'Semestral',
      description: 'Mejor inversión - 6 meses de entrenamiento',
    },
    {
      id: 'gym-monthly',
      category: 'PRESENCIAL',
      name: 'Mensual',
      description: 'Sesiones en el gimnasio - mes',
    },
    {
      id: 'gym-quarterly',
      category: 'PRESENCIAL',
      name: 'Trimestral',
      description: 'Sesiones en el gimnasio - 3 meses',
    },
    {
      id: 'gym-semester',
      category: 'PRESENCIAL',
      name: 'Semestral',
      description: 'Sesiones en el gimnasio - 6 meses',
    },
    {
      id: 'home',
      category: 'DOMICILIO',
      name: 'Personalizado',
      description: 'Entrenamientos en tu domicilio',
    },
  ];

  const groupedPlans = {
    ONLINE: plans.filter(p => p.category === 'ONLINE'),
    PRESENCIAL: plans.filter(p => p.category === 'PRESENCIAL'),
    DOMICILIO: plans.filter(p => p.category === 'DOMICILIO'),
  };

  const handleSelectPlan = (planId) => {
    const plan = plans.find(p => p.id === planId);
    const message = `Hola Nicolás, me gustaría información sobre el plan: ${plan.category} - ${plan.name}`;
    const whatsappUrl = `https://wa.me/5492617110170?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="planes" ref={ref} className="py-16 px-5 md:py-32 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">PLANES DE ENTRENAMIENTO</h2>
          <p className="text-lg font-light text-gray-400">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* ONLINE */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight text-white">ONLINE</h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {groupedPlans.ONLINE.map((plan) => {
                const isHighlighted = plan.name === "Trimestral";
                return (
                  <motion.div
                    key={plan.id}
                    className={`group p-10 rounded-xl cursor-pointer transition-all duration-300 ${
                      isHighlighted
                        ? "border-2 border-red-primary bg-red-primary/10 hover:bg-red-primary/20"
                        : "border-2 border-gray-700 bg-black hover:border-red-primary/50"
                    }`}
                    variants={itemVariants}
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    {isHighlighted && (
                      <div className="inline-block bg-red-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                        MÁS ELEGIDO
                      </div>
                    )}
                    <h4 className={`text-2xl font-black mb-3 tracking-tight ${isHighlighted ? "text-red-primary" : "text-white"}`}>
                      {plan.name}
                    </h4>
                    <p className="text-base font-light text-gray-300 mb-8 leading-relaxed">{plan.description}</p>
                    <Button variant="solid" size="sm" className={`w-full ${isHighlighted ? "bg-red-primary hover:bg-red-dark" : "bg-gray-700 hover:bg-gray-600"} text-white font-bold`}>
                      SELECCIONAR
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* PRESENCIAL */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight text-white">
              PRESENCIAL EN GIMNASIOS
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {groupedPlans.PRESENCIAL.map((plan) => (
                <motion.div
                  key={plan.id}
                  className="group p-10 border-2 border-gray-700 bg-black rounded-xl cursor-pointer hover:border-red-primary/50 transition-all duration-300"
                  variants={itemVariants}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {plan.name}
                  </h4>
                  <p className="text-base font-light text-gray-300 mb-8 leading-relaxed">{plan.description}</p>
                  <Button variant="solid" size="sm" className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold">
                    SELECCIONAR
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* DOMICILIO */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight text-white">DOMICILIO</h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-1 gap-6 md:w-1/2 md:mx-auto"
              variants={containerVariants}
            >
              {groupedPlans.DOMICILIO.map((plan) => (
                <motion.div
                  key={plan.id}
                  className="group p-10 border-2 border-gray-700 bg-black rounded-xl cursor-pointer hover:border-red-primary/50 transition-all duration-300"
                  variants={itemVariants}
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight">
                    {plan.name}
                  </h4>
                  <p className="text-base font-light text-gray-300 mb-8 leading-relaxed">{plan.description}</p>
                  <Button variant="solid" size="sm" className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold">
                    SELECCIONAR
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
