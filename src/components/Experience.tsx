"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, GitBranch, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white/2">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">Journey</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Open Source & Experience</h3>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {exp.role.includes('Contributor') ? <GitBranch className="w-5 h-5" /> : exp.role.includes('Participant') ? <Trophy className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-white text-lg">{exp.organization}</div>
                  <time className="text-xs font-medium text-cyan-500 uppercase tracking-wider">{exp.period}</time>
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-4">{exp.role}</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
