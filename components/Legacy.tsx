
import React from 'react';
import { motion } from 'framer-motion';
import spinksImage from '../spinks.webp';

const Legacy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] bg-neutral-200 overflow-hidden"
        >
          <img 
            src={spinksImage}
            alt="Terry and Cole Spinks" 
            className="w-full h-full object-cover filter grayscale-[40%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border-[20px] border-bone pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 bg-sand p-10 text-white hidden md:block">
            <span className="text-5xl font-serif block">30+</span>
            <span className="text-xs uppercase tracking-[0.2em]">Years Experience</span>
          </div>
        </motion.div>

        {/* Copy Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sand uppercase tracking-[0.3em] text-sm block mb-4">Family Heritage</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">The Spinks Promise</h2>
          
          <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed font-light">
            <p>
              Founded by Terry Spinks and now joined by his son Cole, TC Custom Home & Design represents two generations of uncompromising quality in Southern Utah.
            </p>
            <p>
              Our philosophy is simple but rare: <strong className="font-medium text-charcoal">Terry is on-site every single day.</strong> We don't just manage projects from an office; we guide the hammer and chisel on the ground.
            </p>
            <p>
              We blend Terry's 30 years of master craftsmanship with Cole's modern innovation and project management efficiency, ensuring that every build is as technically sound as it is architecturally stunning.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-serif text-xl mb-1">Terry Spinks</h4>
              <p className="text-xs uppercase tracking-widest text-sand">Founder / Master Builder</p>
            </div>
            <div className="h-px w-12 bg-sand/30 self-center hidden sm:block" />
            <div>
              <h4 className="font-serif text-xl mb-1">Cole Spinks</h4>
              <p className="text-xs uppercase tracking-widest text-sand">Design & Operations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Legacy;
