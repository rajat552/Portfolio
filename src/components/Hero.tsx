"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Github, ShieldCheck, Briefcase, Cloud, Code, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#FFFDF5]">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="mb-12 relative inline-block"
          >
            {/* Handwritten Note Accent */}
            <div className="absolute -top-12 -right-20 hidden md:block">
              <motion.div
                initial={{ rotate: 10, opacity: 0 }}
                animate={{ rotate: -5, opacity: 1 }}
                transition={{ delay: 1 }}
                className="font-signature text-2xl text-teal-600/80"
              >
                Building the future, <br />
                one line at a time
              </motion.div>
            </div>

            <div className="relative group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                <img 
                  src="/profile_Photo.jpeg" 
                  alt={portfolioData.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              Available for Opportunities
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white px-6 py-4 rounded-2xl flex items-center gap-4 border border-gray-200 shadow-sm">
                <div className="p-2 rounded-lg bg-teal-50">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Achievement</div>
                  <div className="text-sm font-bold text-gray-900">GSSoC&apos;26 Contributor</div>
                </div>
              </div>

              <div className="bg-white px-6 py-4 rounded-2xl flex items-center gap-4 border border-gray-200 shadow-sm">
                <div className="p-2 rounded-lg bg-teal-50">
                  <Cloud className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Hackathon</div>
                  <div className="text-sm font-bold text-gray-900">Amazon Nova Prize Winner</div>
                </div>
              </div>

              <a 
                href={portfolioData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 py-4 rounded-2xl flex items-center gap-4 border border-gray-200 shadow-sm hover:border-teal-500 transition-all group"
              >
                <div className="p-2 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors">
                  <Code className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">DSA Proficiency</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{portfolioData.leetcodeStats?.solved}+ Solved</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1] text-gray-900"
          >
            Building Software that <br />
            <span className="text-teal-600 italic">Thinks & Scales.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m <span className="text-gray-900 font-bold">Rajat</span>, a {portfolioData.academicStatus} who turns complex logic into <span className="text-gray-900 font-medium italic underline decoration-teal-500/30">elegant, intelligent solutions</span>. I balance academic rigor with a deep passion for open source.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all"
            >
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="/rajat_resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white border-2 border-teal-600 text-teal-700 rounded-2xl font-bold transition-all flex items-center gap-2 hover:bg-teal-50"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white border-2 border-teal-600 text-teal-700 rounded-2xl font-bold transition-all flex items-center gap-2 hover:bg-teal-50"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-wrap items-center justify-center gap-10 text-slate-500"
          >
            <div className="flex items-center gap-3 text-sm font-medium hover:text-teal-600 transition-colors cursor-default">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              Cybersecurity Enthusiast
            </div>
            <div className="w-px h-6 bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-3 text-sm font-medium hover:text-teal-600 transition-colors cursor-default">
              <Github className="w-5 h-5 text-teal-600" />
              Open Source Contributor
            </div>
            <div className="w-px h-6 bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-3 text-sm font-medium hover:text-teal-600 transition-colors cursor-default">
              <Briefcase className="w-5 h-5 text-teal-600" />
              Full Stack Developer
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
