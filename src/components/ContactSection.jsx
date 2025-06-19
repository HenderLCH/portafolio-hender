import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react'; // Añade el icono Phone
import { Button } from '@/components/ui/button';

const ContactSection = ({ t, heroContact, handleContactClick }) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-sky-400">
            {t.title}
          </h2>
          <p className="text-xl text-slate-300 mb-12">{t.subtitle}</p>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-3 gap-8 mb-8"> {/* Cambiado a 3 columnas */}
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-6 h-6 mr-3 text-sky-400" />
                <span className="text-lg text-slate-100">{t.email}</span>
              </div>
              {/* Nuevo bloque para el teléfono */}
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-6 h-6 mr-3 text-sky-400" />
                <span className="text-lg text-slate-100">{t.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-6 h-6 mr-3 text-sky-400" />
                <span className="text-lg text-slate-100">{t.location}</span>
              </div>
            </div>
            
            <Button
              onClick={handleContactClick}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              {heroContact}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default ContactSection;