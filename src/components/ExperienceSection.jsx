import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, GraduationCap } from 'lucide-react';

const ExperienceSection = ({ t, education }) => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8">
          {t.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{job.role}</h3>
                  <p className="text-sky-400 text-lg font-semibold">{job.company}</p>
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <div className="flex items-center text-slate-400 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {job.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start text-slate-300">
                    <ChevronDown className="w-4 h-4 mr-2 mt-1 text-sky-400 transform rotate-[-90deg]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-sky-400">
            {education.title}
          </h3>
          
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 border border-slate-700">
            <p className="text-sky-300 mb-6">{education.university}</p>
            <div>
              <h5 className="text-lg font-semibold text-slate-100 mb-4">Certificaciones:</h5>
              <ul className="space-y-2">
                {education.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <ChevronDown className="w-4 h-4 mr-2 mt-1 text-sky-400 transform rotate-[-90deg]" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;