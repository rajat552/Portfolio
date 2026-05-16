"use client";

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Github, Linkedin as LinkedinIcon, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            RA<span className="text-cyan-500">.</span>
          </span>
        </div>

        <p className="text-slate-500 text-sm flex items-center gap-2">
          Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by {portfolioData.name} &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
