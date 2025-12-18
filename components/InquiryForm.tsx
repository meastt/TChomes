
import React from 'react';
import { motion } from 'framer-motion';

const InquiryForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest. We will contact you shortly.");
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto space-y-8"
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-charcoal/60 block">Full Name</label>
          <input 
            type="text" 
            required 
            className="w-full bg-transparent border-b border-sand/20 py-3 focus:outline-none focus:border-sand transition-colors font-light text-lg"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-charcoal/60 block">Email Address</label>
          <input 
            type="email" 
            required 
            className="w-full bg-transparent border-b border-sand/20 py-3 focus:outline-none focus:border-sand transition-colors font-light text-lg"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-charcoal/60 block">Proposed Location</label>
          <select 
            className="w-full bg-transparent border-b border-sand/20 py-3 focus:outline-none focus:border-sand transition-colors font-light text-lg appearance-none cursor-pointer"
          >
            <option value="hurricane">Hurricane, UT</option>
            <option value="st-george">St. George, UT</option>
            <option value="washington">Washington, UT</option>
            <option value="dixie-springs">Dixie Springs</option>
            <option value="rusted-hills">Rusted Hills</option>
            <option value="other">Other Southern Utah</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-charcoal/60 block">Budget Range</label>
          <select 
            className="w-full bg-transparent border-b border-sand/20 py-3 focus:outline-none focus:border-sand transition-colors font-light text-lg appearance-none cursor-pointer"
          >
            <option value="1m-1.5m">$1M — $1.5M</option>
            <option value="1.5m-2.5m">$1.5M — $2.5M</option>
            <option value="2.5m-5m">$2.5M — $5M</option>
            <option value="5m+">$5M+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-charcoal/60 block">Project Details</label>
        <textarea 
          rows={4} 
          className="w-full bg-transparent border-b border-sand/20 py-3 focus:outline-none focus:border-sand transition-colors font-light text-lg resize-none"
          placeholder="Tell us about your dream home..."
        ></textarea>
      </div>

      <div className="pt-4 text-center">
        <button 
          type="submit"
          className="px-16 py-5 bg-charcoal text-white uppercase tracking-widest text-sm hover:bg-sand transition-all duration-300 shadow-md w-full md:w-auto"
        >
          Send Inquiry
        </button>
      </div>
    </motion.form>
  );
};

export default InquiryForm;
