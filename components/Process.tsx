
import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <span className="text-sand uppercase tracking-[0.3em] text-sm block mb-4">Efficiency & Precision</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">A Refined Approach</h2>
          <p className="text-lg text-charcoal/60 font-light">Our journey together is as meticulous as the homes we build.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-px bg-sand/10 overflow-hidden rounded-sm border border-sand/10">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div 
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-bone p-10 flex flex-col h-full hover:bg-white transition-colors duration-500 group"
          >
            <span className="text-5xl font-serif text-sand/20 group-hover:text-sand/40 transition-colors mb-8">
              {step.number}
            </span>
            <h3 className="text-xl font-serif mb-4 group-hover:text-sand transition-colors">{step.title}</h3>
            <p className="text-charcoal/70 text-sm leading-relaxed font-light">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
