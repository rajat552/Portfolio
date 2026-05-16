"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { User, Terminal, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <User className="w-4 h-4" />
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Driven by <span className="text-gradient">Curiosity</span>,<br />
              Defined by Code.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>{portfolioData.about}</p>
              <p>
                My journey in tech began with a fascination for how systems interact. Today, I combine my academic foundation in Computer Science with practical experience in <span className="text-white font-medium">Full Stack Engineering</span> and <span className="text-white font-medium">Agentic AI</span> to solve complex real-world problems.
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
              { icon: User, title: "Hackathon Winner", text: "Won AWS credits at Amazon Nova AI Hackathon. Competed in Electrothon and Hack On Hills." },
              { icon: Terminal, title: "Security", text: "Deeply interested in network security, ethical hacking, and building secure systems." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group hover:bg-white/[0.08] hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-500 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-bold text-white text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
