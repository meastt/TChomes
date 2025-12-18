
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { BuildImage } from '../types';

interface GalleryProps {
  onSelectImage: (image: BuildImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">Our Portfolio</h2>
        <div className="w-12 h-px bg-sand mx-auto" />
      </div>

      <div className="masonry-grid">
        {GALLERY_IMAGES.map((image, index) => (
          <motion.div 
            key={image.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="masonry-item group cursor-pointer overflow-hidden relative"
            onClick={() => onSelectImage(image)}
          >
            <motion.img 
              src={image.url} 
              alt={image.title}
              className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-sand mb-2 block font-medium">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-serif">{image.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
