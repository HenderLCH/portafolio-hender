import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = ({ t, language, handleProjectClick }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={`${project.title} preview`}
                  src={project.image || "https://images.unsplash.com/photo-1625398122646-049e15c5fb1b"} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-sky-600/20 border border-sky-500/30 rounded-md text-xs text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleProjectClick('github', project.github)}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    onClick={() => handleProjectClick('live', project.live)}
                    size="sm"
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'es' ? 'Ver Sitio' : 'Live Site'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;