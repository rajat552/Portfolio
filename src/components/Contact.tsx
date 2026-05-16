"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Contact = () => {
  const [result, setResult] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3a6f45f8-4634-4bb9-ae6a-24ecce8f7ab0"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear result message after 5 seconds
      setTimeout(() => setResult(null), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Let&apos;s build something <br /><span className="text-gradient">extraordinary.</span></h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="text-cyan-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email Me</div>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-white font-medium hover:text-cyan-400 transition-colors">{portfolioData.contact.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="text-cyan-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Call Me</div>
                  <div className="text-white font-medium">{portfolioData.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <MapPin className="text-cyan-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Location</div>
                  <div className="text-white font-medium">NIT Hamirpur, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 relative"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              
              {result && (
                <div className={`text-sm font-medium p-4 rounded-xl text-center ${result.includes("Successfully") ? "bg-green-500/10 text-green-400" : "bg-white/5 text-slate-400"}`}>
                  {result}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
