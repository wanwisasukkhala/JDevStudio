"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Briefcase, Layout, Monitor, Figma, ChevronDown, ChevronUp, Info, UserCheck } from 'lucide-react';
import { projects } from '../data/projects'; // ดึงข้อมูลโปรเจกต์จากไฟล์กลาง

const categories = [
  { name: "All", icon: <Code2 size={16} /> },
  { name: "Landing Page", icon: <Layout size={16} /> },
  { name: "System", icon: <Monitor size={16} /> },
  { name: "UI/UX", icon: <Briefcase size={16} /> },
  { name: "Full-Time", icon: <Briefcase size={16} /> },
  { name: "Freelance", icon: <UserCheck size={16} /> }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter || p.type === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleFilterChange = (catName: string) => {
    setFilter(catName);
    setShowAll(false);
  };

  return (
    <section className="py-24 bg-[#08020f] font-sans overflow-hidden text-white relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #4c1d95 1px, transparent 1px), linear-gradient(to bottom, #4c1d95 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-600/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-4">
             <span className="w-12 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
             <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">
                OUR <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">PORTFOLIO</span>
             </h2>
          </motion.div>
          <p className="text-slate-400 text-lg font-light max-w-2xl">A curated showcase of software development and UI/UX design crafted with modern futuristic aesthetics.</p>
        </div>

        {/* --- Filters --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleFilterChange(cat.name)}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === cat.name 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/20 scale-105" 
                : "bg-[#120720]/80 text-slate-400 border-purple-950 hover:border-purple-500/40 hover:bg-[#1a0c2e] hover:text-white"
              }`}
            >
              <span className={filter === cat.name ? "text-white" : "text-purple-400"}>{cat.icon}</span>
              {cat.name}
            </motion.button>
          ))}
        </div>
        {/* --- Project List --- */}
        <div className="flex flex-col gap-28">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const hasLink = !!project.demo;

              return (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 w-full relative`}
                >
                  <div className="w-full lg:w-1/2 z-20">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-purple-400 text-xs font-bold uppercase tracking-[0.2em]">{project.category}</span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border ${project.type === "Full-Time" ? "text-cyan-400 border-cyan-500/30 bg-cyan-950/20" : "text-amber-400 border-amber-500/30 bg-amber-950/20"}`}>{project.type}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide leading-tight">{project.title}</h3>
                    
                    <div className="bg-[#150a21]/60 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl relative mb-6">
                      <p className="text-slate-300 text-base leading-relaxed font-light">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
                        {project.tools.map((tool, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 bg-purple-950/40 text-purple-300 text-xs font-medium rounded-md border border-purple-900/30">{tool}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-2">
                      {hasLink && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                          {project.demo.includes('figma.com') ? <Figma size={16} /> : <ExternalLink size={16} />} Live Demo
                        </a>
                      )}
                      
                      {/* เปลี่ยนปุ่ม Details เป็น Link นำทางไปยังโฟลเดอร์แบบไดนามิก */}
                      <Link href={`/project/${project.id}`} className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                        <Info size={16} className="text-purple-400" /> Details
                      </Link>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#12071f] shadow-2xl">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08020f]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- Empty State --- */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500"><p className="text-lg font-light">No projects found in this category.</p></div>
        )}

        {/* --- Toggle View Button --- */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-24">
            <button onClick={() => { setShowAll(!showAll); if(showAll) window.scrollTo({ top: window.scrollY - 800, behavior: 'smooth' }); }} className={`flex items-center gap-2 px-8 py-3.5 text-sm font-bold rounded-full border transition-all duration-300 shadow-xl group ${showAll ? 'bg-gradient-to-b from-[#2a0e44] to-[#140624] text-pink-300 border-pink-500/30' : 'bg-gradient-to-b from-[#1c0c32] to-[#110620] text-purple-300 border-purple-500/30'}`}>
              {showAll ? 'Show Less' : 'View More Works'}
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}