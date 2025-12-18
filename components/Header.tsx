
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-tighter flex items-baseline">
            TC <span className="text-sm font-sans tracking-widest ml-2 text-sand uppercase font-light">Custom Home</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm uppercase tracking-widest hover:text-sand transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2 border border-sand/30 hover:bg-sand hover:text-white transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Start Your Project
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bone z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-16">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            <nav className="flex flex-col gap-8 items-center text-center">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif hover:text-sand transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-10 py-4 border border-sand text-sand uppercase tracking-widest text-lg"
              >
                Start Your Project
              </a>
            </nav>
            <div className="mt-auto text-center pb-8 opacity-40">
              <p className="text-sm uppercase tracking-widest">TC Custom Home & Design</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
