import React from 'react';

const Footer = ({ language }) => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} {language === 'es' ? 'Hender Labrador' : 'Hender Labrador'}. 
          {language === 'es' ? ' Todos los derechos reservados.' : ' All rights reserved.'}
        </p>
      </div>
    </footer>
  );
};

export default Footer;