"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Figma, Code, Layers, Terminal, ChevronLeft, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { projects } from '@/components/data/projects'; // เช็กพาร์ทโฟลเดอร์ให้ตรงกับโปรเจกต์ของคุณครับ

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  // ─── STATE สำหรับระบบขยายรูปภาพ (LIGHTBOX) ───
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<string | null>(null);
  
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#08020f] flex flex-col items-center justify-center text-white font-sans">
        <h2 className="text-2xl font-bold text-red-400 mb-4">Project Not Found</h2>
        <button onClick={() => router.push('/')} className="flex items-center gap-2 px-6 py-2.5 bg-purple-600 rounded-xl text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>
    );
  }

  const projectImages = project.images || [project.image];

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  // ─── ฟังก์ชันเปิด/ปิด LIGHTBOX MODAL ───
  const openLightbox = (imgUrl: string) => {
    setSelectedLightboxImage(imgUrl);
    setIsLightboxOpen(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'; // ล็อกการสกロールพื้นหลัง
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset'; // คืนค่าการสกロールปกติ
    }
  };

  return (
    <div className="min-h-screen bg-[#08020f] font-sans text-white relative py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #4c1d95 1px, transparent 1px), linear-gradient(to bottom, #4c1d95 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-pink-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 px-5 py-2 mb-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-slate-300 hover:text-white text-sm font-medium transition-all group"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </button>

        {/* Project Context Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-md bg-purple-950/50 text-purple-300 text-xs font-semibold uppercase tracking-wider border border-purple-900/40">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase border ${
            project.type === "Full-Time" ? "bg-cyan-950/30 text-cyan-400 border-cyan-500/20" : "bg-amber-950/30 text-amber-400 border-amber-500/20"
          }`}>
            {project.type}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 bg-gradient-to-r from-white via-slate-200 to-purple-400 bg-clip-text text-transparent leading-tight">
          {project.title}
        </h1>

        {/* Gallery Image Slider */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // ใส่ cursor-pointer และระบุเหตุการณ์เปิด Lightbox ด้วยภาพปัจจุบัน
            className="w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#12071f] cursor-pointer"
            onClick={() => openLightbox(projectImages[currentImgIndex])}
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImgIndex}
                src={projectImages[currentImgIndex]} 
                alt={`${project.title} - ${currentImgIndex + 1}`} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200'; }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#08020f]/60 via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Hint Overlay เมื่อ Hover บน Desktop */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="bg-black/70 text-white text-xs px-4 py-2 rounded-full backdrop-blur-md border border-white/10 shadow-lg tracking-wider">
                Click to Expand
              </span>
            </div>

            {projectImages.length > 1 && (
              <>
                {/* ใช้ e.stopPropagation() เพื่อไม่ให้เกิด bug กดเลื่อนสไลด์แล้วกลายเป็นการเปิด Lightbox */}
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-purple-600/80 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-purple-600/80 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm z-20"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 right-4 bg-black/60 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-purple-300 backdrop-blur-sm z-10">
                  {currentImgIndex + 1} / {projectImages.length}
                </div>
              </>
            )}
          </motion.div>

          {/* Thumbnails */}
          {projectImages.length > 1 && (
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {projectImages.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className={`relative aspect-[16/10] w-16 sm:w-24 rounded-xl overflow-hidden border transition-all duration-300 ${
                    currentImgIndex === idx ? 'border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'border-white/10 opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ─── LIGHTBOX MODAL (ส่วนที่เพิ่มเข้ามาใหม่สำหรับขยายภาพใหญ่) ─── */}
        <AnimatePresence>
          {isLightboxOpen && selectedLightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
              onClick={closeLightbox} // คลิกพื้นที่รอบๆ รูปเพื่อปิด
            >
              {/* ปุ่มปิดสีเนียนตา */}
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-all duration-200 z-[110]"
                onClick={closeLightbox}
              >
                <X size={22} />
              </button>

              {/* คอนเทนเนอร์รูปภาพขนาดใหญ่ */}
              <motion.div 
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative max-w-full max-h-full flex items-center justify-center cursor-default"
                onClick={(e) => e.stopPropagation()} // กดที่ตัวรูปจะไม่ทำให้ปิดหน้าต่างขยาย
              >
                <img 
                  src={selectedLightboxImage} 
                  alt="Enlarged project view" 
                  className="w-auto h-auto max-w-full max-h-[85vh] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 object-contain select-none"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Split Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 🛠️ เปลี่ยนเป็นส่วนของ หน้าที่รับผิดชอบ (Responsibilities) */}
            <div className="bg-[#120720]/60 border border-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Layers size={18} className="text-purple-400" />
                Responsibilities
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-light whitespace-pre-line">
                {project.responsibilities}
              </p>
            </div>

            {/* 🎯 แสดงผล Key Deliverables & Objectives ของแต่ละโปรเจกต์แบบ Dynamic */}
            <div className="bg-[#120720]/40 border border-white/5 p-8 rounded-2xl">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Terminal size={16} className="text-pink-400" />
                Key Deliverables & Objectives
              </h4>
              <ul className="space-y-4">
                {project.deliverables.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-slate-300 text-sm font-light leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-6">
            <div className="bg-[#150c26] border border-purple-950 p-6 rounded-2xl shadow-xl">
              <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code size={16} /> Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#200f38] text-purple-200 text-xs font-semibold rounded-lg border border-purple-800/40">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {project.demo && (
              <div className="bg-gradient-to-b from-[#1c0d30] to-[#110520] border border-pink-500/20 p-6 rounded-2xl shadow-xl space-y-4">
                <h4 className="text-sm font-bold text-slate-300">Deployment and Assets</h4>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {project.demo.includes('figma.com') ? <Figma size={16} /> : <ExternalLink size={16} />}
                  Open Production Link
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}