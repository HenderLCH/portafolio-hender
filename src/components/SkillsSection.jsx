import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const SkillsSection = ({ t, skillsData }) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
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
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 mr-3 text-sky-400" />
                <h3 className="text-xl font-bold text-slate-100">{t.categories[category]}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-sky-600/20 border border-sky-500/30 rounded-full text-sm text-sky-300 hover:bg-sky-600/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;