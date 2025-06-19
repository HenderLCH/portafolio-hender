import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ t, language, toggleLanguage, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="text-xl font-bold text-slate-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Portfolio
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="text-slate-300 hover:text-slate-100 transition-colors duration-200 hover:scale-105 transform"
              >
                {value}
              </button>
            ))}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="icon"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
            >
              <Globe className="w-5 h-5" />
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/70 backdrop-blur-md rounded-lg mt-2 p-4"
          >
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="block w-full text-left py-2 text-slate-300 hover:text-slate-100 transition-colors"
              >
                {value}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;