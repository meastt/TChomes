
import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../hero1.webp';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-sm uppercase tracking-[0.4em] mb-6 font-light"
        >
          Luxury Custom Home Builder
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          From Imagination <br /> to Reality.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto opacity-90 mb-12"
        >
          Architecturally inspired, family-built custom homes <br className="hidden md:block" /> in the heart of Southern Utah.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#gallery" 
            className="px-12 py-5 bg-sand text-white uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all duration-300 inline-block shadow-lg"
          >
            Explore Our Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
