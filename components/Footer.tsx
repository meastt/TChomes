
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bone py-20 border-t border-sand/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-3xl block mb-6">TC Custom Home & Design</a>
            <p className="text-charcoal/60 font-light max-w-sm leading-relaxed">
              Family-owned luxury builders crafting legacy homes across the red rocks of Southern Utah for over 30 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-charcoal/70 font-light">
              <li>(435) 555-0123</li>
              <li>office@tccustom.com</li>
              <li>Hurricane, Utah</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6">Social</h4>
            <ul className="space-y-3 text-sm text-charcoal/70 font-light">
              <li><a href="#" className="hover:text-sand transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Houzz</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sand/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-charcoal/40">
          <p>© 2024 TC Custom Home & Design. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sand">Privacy Policy</a>
            <a href="#" className="hover:text-sand">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
