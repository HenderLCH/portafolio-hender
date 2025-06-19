import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Languages } from 'lucide-react';

const AboutSection = ({ t }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-sky-400">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {t.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <MapPin className="w-5 h-5 mr-3 text-sky-400" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Languages className="w-5 h-5 mr-3 text-sky-400" />
                <span>{t.languages}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border-2 border-slate-700"
              alt="Developer workspace setup"
              src="/images/PC.jpg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;