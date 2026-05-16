"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, GitBranch, Trophy } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#FFFDF5]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Open Source & <span className="text-teal-600 italic">Professional Journey</span></h2>
          <p className="text-gray-600 text-lg">
            A chronological timeline of technical contributions and recognition.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-teal-600 shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-teal-500 transition-colors">
                {exp.role.includes('Contributor') ? <GitBranch className="w-5 h-5" /> : exp.role.includes('Participant') ? <Trophy className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-teal-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="font-serif font-bold text-gray-900 text-xl">{exp.organization}</div>
                  <time className="text-[10px] font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">{exp.period}</time>
                </div>
                <div className="text-sm font-bold text-gray-500 mb-4 italic">{exp.role}</div>
                <div className="text-gray-600 text-sm leading-relaxed">
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
