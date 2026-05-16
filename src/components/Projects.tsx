"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Featured Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              {/* Project Image Placeholder / Decorative background */}
              <div className="h-48 w-full bg-gradient-to-br from-cyan-950 to-blue-950 flex items-center justify-center relative overflow-hidden">
                <Folder className="w-16 h-16 text-white/10 absolute -bottom-4 -right-4 rotate-12" />
                <div className="relative z-10 p-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 pointer-events-none group-hover:pointer-events-auto z-20">
                  <motion.a 
                    href={project.githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-4 rounded-2xl bg-white text-black shadow-xl">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.liveLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="p-4 rounded-2xl bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live</span>
                  </motion.a>
                </div>
              </div>

              <div className="p-8">
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
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
