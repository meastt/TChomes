
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { BuildImage } from '../types';

interface LightboxProps {
  image: BuildImage;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="max-w-6xl w-full max-h-full flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.url} 
          alt={image.title} 
          className="w-full h-auto object-contain max-h-[80vh] shadow-2xl"
        />
        <div className="text-white text-center">
          <span className="text-sand uppercase tracking-widest text-xs mb-2 block">{image.category}</span>
          <h2 className="text-3xl font-serif">{image.title}</h2>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
