import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { translations, skillsData } from '@/lib/data';

function App() {
  const [language, setLanguage] = useState('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

const handleProjectClick = (type, url) => {
  if (!url || url === "#") {
    toast({
      title: "🚧 " + (language === 'es' ? "Enlace no disponible" : "Link not available"),
      description: language === 'es' 
        ? "Este proyecto no tiene enlace público disponible" 
        : "This project has no public link available",
      variant: "destructive",
    });
    return;
  }
  
  // Abrir enlace válido
  window.open(url, '_blank', 'noopener,noreferrer');
};

const handleContactClick = () => {
  // Ejemplo: Abrir el cliente de correo
  window.location.href = 'mailto:henderljunior@gmail.com';
  
  // O si usas un formulario modal:
  // setShowContactModal(true);
};

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <Navbar
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroSection t={t.hero} scrollToSection={scrollToSection} handleContactClick={handleContactClick} />
      <AboutSection t={t.about} />
      <ExperienceSection t={t.experience} education={t.education} />
      <SkillsSection t={t.skills} skillsData={skillsData} />
      <ProjectsSection t={t.projects} language={language} handleProjectClick={handleProjectClick} />
      <ContactSection t={t.contact} heroContact={t.hero.contact} handleContactClick={handleContactClick} />
      <Footer language={language} />

      <Toaster />
    </div>
  );
}

export default App;