"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Terminal, Code } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Expertise & <span className="text-teal-600 italic">Core Competencies</span></h2>
            <p className="text-gray-600 text-lg">
              A curated stack of technologies I use to build production-grade systems and research-oriented tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:border-teal-500/30 transition-all group"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-teal-600" />
                </span>
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium group-hover:bg-teal-50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Special Card */}
        <motion.a
          href={portfolioData.socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-white border border-gray-200 relative overflow-hidden group block hover:border-teal-500 transition-all cursor-pointer shadow-sm"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
            <Code className="w-64 h-64 text-teal-900 rotate-12" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold mb-6 group-hover:bg-teal-100 transition-colors">
                50 Days Streak 2025
              </div>
              <h4 className="text-3xl md:text-5xl font-serif font-bold mb-6 group-hover:text-teal-600 transition-colors">Algorithm Mastery</h4>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Actively solving complex algorithmic challenges on LeetCode to sharpen problem-solving intuition. My focus is on <span className="text-gray-900 font-semibold italic">dynamic programming, graph theory, and advanced data structures</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-center group-hover:bg-white transition-all">
                <div className="text-3xl font-bold text-gray-900 mb-1">{portfolioData.leetcodeStats?.solved}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total Solved</div>
              </div>
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-center group-hover:bg-white transition-all">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{portfolioData.leetcodeStats?.easy}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Easy</div>
              </div>
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-center group-hover:bg-white transition-all">
                <div className="text-3xl font-bold text-teal-600 mb-1">{portfolioData.leetcodeStats?.medium}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Medium</div>
              </div>
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 text-center group-hover:bg-white transition-all">
                <div className="text-3xl font-bold text-rose-600 mb-1">{portfolioData.leetcodeStats?.hard}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Hard</div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Skills;
