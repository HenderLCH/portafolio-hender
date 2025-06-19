import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = ({ t, scrollToSection, handleContactClick }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sky-400 text-lg mb-4">{t.greeting}</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-slate-100">
              {t.role}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
              >
                {t.cta}
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-100 px-8 py-3 text-lg font-semibold"
              >
                {t.contact}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-sky-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-2xl"
                alt="Professional developer portrait"
                src="/images/Electronica93.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;