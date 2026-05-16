"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Download, Github, ShieldCheck, Briefcase, Cloud, Code, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 section-padding">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4"
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
              className="font-signature text-2xl text-cyan-500/80"
            >
              Building the future, <br />
              one line at a time
            </motion.div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 overflow-hidden">
              <img 
                src="/profile_Photo.jpeg" 
                alt={portfolioData.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for Opportunities
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">Achievement</div>
                <div className="text-sm font-bold text-white">GSSoC&apos;26 Contributor</div>
              </div>
            </div>

            <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Cloud className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">Hackathon</div>
                <div className="text-sm font-bold text-white">Amazon Nova Prize Winner</div>
              </div>
            </div>
            <a 
              href={portfolioData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:border-orange-500/50 transition-all group"
            >
              <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                <Code className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-500 uppercase tracking-tighter font-bold">DSA Proficiency</div>
                <div className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors">{portfolioData.leetcodeStats?.solved}+ Solved</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          Building Software that <br />
          <span className="text-gradient">Thinks & Scales.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          I&apos;m <span className="text-white font-semibold">Rajat</span>, a {portfolioData.academicStatus} who turns complex logic into <span className="text-white font-medium">elegant, intelligent solutions</span>. I balance academic rigor with a deep passion for the open-source ecosystem.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all"
          >
            View Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="/rajat_resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5 text-cyan-500" />
            Download Resume
          </motion.a>
          <motion.a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all flex items-center gap-2"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
            LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-wrap items-center justify-center gap-10 text-slate-500"
        >
          <div className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors cursor-default">
            <ShieldCheck className="w-5 h-5 text-cyan-500" />
            Cybersecurity Enthusiast
          </div>
          <div className="w-px h-6 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors cursor-default">
            <Github className="w-5 h-5 text-cyan-500" />
            Open Source Contributor
          </div>
          <div className="w-px h-6 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors cursor-default">
            <Briefcase className="w-5 h-5 text-cyan-500" />
            Full Stack Developer
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
