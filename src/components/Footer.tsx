"use client";

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Github, Linkedin as LinkedinIcon, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
            <Terminal className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            RA<span className="text-teal-600">.</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-2">
          Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> by {portfolioData.name} &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
