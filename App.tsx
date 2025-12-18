
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { BuildImage } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<BuildImage | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-charcoal bg-bone overflow-x-hidden">
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="legacy" className="py-24 md:py-32">
          <Legacy />
        </section>

        <section id="expertise" className="py-24 bg-white/30">
          <Services />
        </section>

        <section id="process" className="py-24 md:py-32">
          <Process />
        </section>

        <section id="gallery" className="py-24">
          <Gallery onSelectImage={setSelectedImage} />
        </section>

        <section id="contact" className="py-24 bg-white/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif mb-6"
              >
                Start Your Project
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-charcoal/70"
              >
                Let's discuss your vision for a legacy home in the heart of Southern Utah.
              </motion.p>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedImage && (
          <Lightbox 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
