"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { LayoutGrid, Database, Cloud, Shield } from 'lucide-react';

const icons = [LayoutGrid, Database, Cloud, Shield];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white/2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Tools & Technologies</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.map((skillGroup, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="text-cyan-500 w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
