"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

const Contact = () => {
  const [result, setResult] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "5110d293-1996-4ca9-bc65-5b4ef08f51df");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success! Message sent.");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFDF5] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Get in <span className="text-teal-600 italic">Touch</span></h2>
            <p className="text-gray-600 text-lg mb-12 max-w-md">
              Whether you have a research opportunity, a project proposal, or just want to discuss technical ideas, my inbox is always open.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
                { icon: Phone, label: "Phone", value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}` },
                { icon: MapPin, label: "Location", value: portfolioData.contact.location || "NIT Hamirpur, India", href: "#" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-gray-200 hover:border-teal-500 transition-all group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-gray-900 font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                ></textarea>
              </div>

              {result && (
                <div className={cn(
                  "p-4 rounded-xl text-sm font-bold flex items-center gap-2",
                  result.includes("Success") ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-gray-50 text-gray-700 border border-gray-100"
                )}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {result}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-teal-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 disabled:opacity-50 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
