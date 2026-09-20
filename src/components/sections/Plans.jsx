import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import Button from '../ui/Button';

const PlansSection = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const plans = [
    { id: 'online-monthly', category: 'ONLINE', name: 'Mensual', price: '$', description: 'Acceso mensual a tu plan personalizado' },
    { id: 'online-quarterly', category: 'ONLINE', name: 'Trimestral', price: '$$', description: 'Obten descuento comprometiendo 3 meses', highlighted: true },
    { id: 'online-semester', category: 'ONLINE', name: 'Semestral', price: '$$$', description: 'Mejor inversion - 6 meses de entrenamiento' },
    { id: 'gym-monthly', category: 'PRESENCIAL', name: 'Mensual', price: '$', description: 'Sesiones en gimnasio' },
    { id: 'gym-quarterly', category: 'PRESENCIAL', name: 'Trimestral', price: '$$', description: 'Sesiones en gimnasio - 3 meses' },
    { id: 'gym-semester', category: 'PRESENCIAL', name: 'Semestral', price: '$$$', description: 'Sesiones en gimnasio - 6 meses' },
    { id: 'home', category: 'DOMICILIO', name: 'Personalizado', price: '$$$', description: 'Entrenamientos en tu domicilio' },
  ];

  const groupedPlans = {
    ONLINE: plans.filter(p => p.category === 'ONLINE'),
    PRESENCIAL: plans.filter(p => p.category === 'PRESENCIAL'),
    DOMICILIO: plans.filter(p => p.category === 'DOMICILIO'),
  };

  const handleSelectPlan = (planId) => {
    const plan = plans.find(p => p.id === planId);
    const message = `Hola Nicolas, me gustaria informacion sobre el plan: ${plan.category} - ${plan.name}`;
    const whatsappUrl = `https://wa.me/5492617110170?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="planes" ref={ref} className="py-28 md:py-40 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">
            PLANES DE ENTRENAMIENTO
          </h2>
          <p className="text-lg font-light text-gray-400">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
        </motion.div>

        {/* ONLINE */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-center text-white">ONLINE</h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groupedPlans.ONLINE.map((plan, idx) => (
              <motion.div
                key={plan.id}
                className={`p-10 rounded-2xl cursor-pointer transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-2 border-red-primary bg-red-primary/10 hover:bg-red-primary/20 scale-105'
                    : 'border-2 border-gray-700 bg-black hover:border-red-primary/50'
                }`}
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-red-primary text-white text-xs font-black px-3 py-1 rounded-full mb-4">
                    MAS ELEGIDO
                  </div>
                )}
                <h4 className={`text-2xl font-black mb-2 tracking-tight ${plan.highlighted ? 'text-red-primary' : 'text-white'}`}>
                  {plan.name}
                </h4>
                <p className="text-3xl font-black text-red-primary mb-3">{plan.price}</p>
                <p className="text-sm font-light text-gray-300 mb-6">{plan.description}</p>
                <Button variant="solid" size="sm" className={`w-full ${plan.highlighted ? 'bg-red-primary hover:bg-red-dark' : 'bg-gray-700 hover:bg-gray-600'} text-white font-black`}>
                  SELECCIONAR
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PRESENCIAL */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-center text-white">PRESENCIAL EN GIMNASIOS</h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groupedPlans.PRESENCIAL.map((plan, idx) => (
              <motion.div
                key={plan.id}
                className="p-10 border-2 border-gray-700 bg-black rounded-2xl cursor-pointer hover:border-red-primary/50 transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: (idx + 3) * 0.1 }}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{plan.name}</h4>
                <p className="text-3xl font-black text-red-primary mb-3">{plan.price}</p>
                <p className="text-sm font-light text-gray-300 mb-6">{plan.description}</p>
                <Button variant="solid" size="sm" className="w-full bg-gray-700 hover:bg-gray-600 text-white font-black">
                  SELECCIONAR
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DOMICILIO */}
        <div>
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-center text-white">DOMICILIO</h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:w-1/2 md:mx-auto">
            {groupedPlans.DOMICILIO.map((plan, idx) => (
              <motion.div
                key={plan.id}
                className="p-10 border-2 border-gray-700 bg-black rounded-2xl cursor-pointer hover:border-red-primary/50 transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: (idx + 6) * 0.1 }}
                onClick={() => handleSelectPlan(plan.id)}
              >
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{plan.name}</h4>
                <p className="text-3xl font-black text-red-primary mb-3">{plan.price}</p>
                <p className="text-sm font-light text-gray-300 mb-6">{plan.description}</p>
                <Button variant="solid" size="sm" className="w-full bg-gray-700 hover:bg-gray-600 text-white font-black">
                  SELECCIONAR
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
