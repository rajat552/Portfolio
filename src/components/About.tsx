"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { User, Terminal, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6 flex items-center gap-2">
              <User className="w-4 h-4" />
              Philosophy
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-gray-900">
              Driven by <span className="text-teal-600 italic">Curiosity</span>,<br />
              Defined by Precision.
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{portfolioData.about}</p>
              <p>
                My approach combines an academic foundation in Computer Science with a passion for <span className="text-gray-900 font-bold italic underline decoration-teal-500/30">Full Stack Engineering</span> and <span className="text-gray-900 font-bold italic underline decoration-teal-500/30">Agentic AI</span> to solve complex real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Terminal, title: "Open Source", text: "Selected for GSSoC'26. Contributor to global projects like DailyForge and MalariaGEN." },
              { icon: Code2, title: "Full Stack Mastery", text: "Expertise in building high-performance applications with the MERN stack and Next.js." },
              { icon: User, title: "Hackathon Winner", text: "Prize winner at Amazon Nova AI Hackathon. Competed in Electrothon and Hack On Hills." },
              { icon: Terminal, title: "Security", text: "Deeply interested in network security, ethical hacking, and building secure systems." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#FFFDF5] border border-gray-200 hover:border-teal-500/30 transition-all group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                  <item.icon className="w-6 h-6 text-teal-600 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
