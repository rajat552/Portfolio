"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Featured <span className="text-teal-600 italic">Technical Projects</span></h2>
            <p className="text-gray-600 text-lg">
              A showcase of full-stack engineering and AI-driven automation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-teal-500/30 transition-all shadow-sm flex flex-col"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-teal-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-teal-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
