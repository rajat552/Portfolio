"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin as LinkedinIcon, Terminal, Code, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        (scrolled || isOpen) ? "bg-white shadow-sm border-b border-gray-100" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
            <Terminal className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            RA<span className="text-teal-600">.</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-bold text-gray-600 hover:text-teal-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors" title="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href={portfolioData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors" title="LeetCode">
              <Code className="w-5 h-5" />
            </a>
            <a href={portfolioData.socials.tryhackme} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors" title="TryHackMe">
              <Shield className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[120] md:hidden bg-white flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                  <Terminal className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  RA<span className="text-teal-600">.</span>
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif font-bold text-gray-900 hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center gap-8">
              <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600">
                <Github className="w-8 h-8" />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600">
                <LinkedinIcon className="w-8 h-8" />
              </a>
              <a href={portfolioData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600">
                <Code className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
