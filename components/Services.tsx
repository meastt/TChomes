
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Services: React.FC = () => {
  const locations = ["Hurricane", "St. George", "Washington"];
  const communities = ["Dixie Springs", "Rusted Hills"];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sand uppercase tracking-[0.3em] text-sm block mb-4"
        >
          Prime Southern Utah
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Built Where You Play
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-charcoal/70 max-w-2xl mx-auto italic"
        >
          "Minutes from Sand Hollow and the red rocks—your sanctuary awaits."
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Locations Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-10 bg-white border border-sand/10 shadow-sm transition-all duration-300"
        >
          <div className="w-12 h-12 bg-sand/5 rounded-full flex items-center justify-center mb-8 text-sand">
            <MapPin size={24} />
          </div>
          <h3 className="text-2xl font-serif mb-6">Service Hubs</h3>
          <ul className="space-y-4 text-charcoal/70 uppercase tracking-widest text-xs">
            {locations.map(loc => (
              <li key={loc} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sand rounded-full" />
                {loc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Communities Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-10 bg-white border border-sand/10 shadow-sm transition-all duration-300"
        >
          <div className="w-12 h-12 bg-sand/5 rounded-full flex items-center justify-center mb-8 text-sand">
            <MapPin size={24} />
          </div>
          <h3 className="text-2xl font-serif mb-6">Featured Communities</h3>
          <ul className="space-y-4 text-charcoal/70 uppercase tracking-widest text-xs">
            {communities.map(comm => (
              <li key={comm} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-sand rounded-full" />
                {comm}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Expertise Card */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-10 bg-white border border-sand/10 shadow-sm transition-all duration-300"
        >
          <div className="w-12 h-12 bg-sand/5 rounded-full flex items-center justify-center mb-8 text-sand">
            <MapPin size={24} />
          </div>
          <h3 className="text-2xl font-serif mb-6">Expertise</h3>
          <p className="text-charcoal/70 font-light leading-relaxed mb-6">
            Our portfolio focuses on modern desert aesthetics, high-thermal efficiency, and expansive indoor-outdoor living spaces.
          </p>
          <a href="#gallery" className="text-sm font-medium text-sand hover:underline tracking-widest uppercase">
            View Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
