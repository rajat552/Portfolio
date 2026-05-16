"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { LayoutGrid, Database, Cloud, Shield, Code } from 'lucide-react';

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

        {/* LeetCode Special Card */}
        <motion.a
          href={portfolioData.socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-orange-500/10 via-transparent to-cyan-500/10 border border-white/5 relative overflow-hidden group block hover:border-orange-500/30 transition-all cursor-pointer"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code className="w-64 h-64 text-white rotate-12" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-6 group-hover:bg-orange-500/20 transition-colors">
                50 Days Streak 2025
              </div>
              <h4 className="text-3xl md:text-5xl font-bold mb-6 group-hover:text-orange-400 transition-colors">Algorithm Mastery</h4>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Actively solving complex algorithmic challenges on LeetCode to sharpen problem-solving intuition. My focus is on Master concepts in <span className="text-white font-semibold">dynamic programming, graph theory, and advanced data structures</span> with a high ratio of Medium difficulty problems.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-[#0a0a0a]/50 border border-white/5 text-center group-hover:border-white/10 transition-all">
                <div className="text-3xl font-bold text-white mb-1">{portfolioData.leetcodeStats?.solved}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Total Solved</div>
              </div>
              <div className="p-6 rounded-3xl bg-[#0a0a0a]/50 border border-white/5 text-center group-hover:border-white/10 transition-all">
                <div className="text-3xl font-bold text-green-400 mb-1">{portfolioData.leetcodeStats?.easy}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Easy</div>
              </div>
              <div className="p-6 rounded-3xl bg-[#0a0a0a]/50 border border-white/5 text-center group-hover:border-white/10 transition-all">
                <div className="text-3xl font-bold text-orange-400 mb-1">{portfolioData.leetcodeStats?.medium}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Medium</div>
              </div>
              <div className="p-6 rounded-3xl bg-[#0a0a0a]/50 border border-white/5 text-center group-hover:border-white/10 transition-all">
                <div className="text-3xl font-bold text-red-400 mb-1">{portfolioData.leetcodeStats?.hard}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Hard</div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Skills;
