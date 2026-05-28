"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation"; // สำหรับพิมพ์ดีด
import { motion } from "framer-motion"; // สำหรับอนิเมชันเลื่อนเข้า

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B0314] flex items-center justify-center py-16 px-6 sm:px-10 md:px-16 lg:px-24 font-sans overflow-hidden text-white">
      
      {/* --- Background Grid Pattern (ปรับโทนเป็นเส้นตารางสีม่วงเข้มจางๆ ให้เข้ากับหน้า Skill) --- */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B1556 1px, transparent 1px),
            linear-gradient(to bottom, #3B1556 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* แสงไฟนีออนเบลอจางๆ ที่มุมซ้ายและขวาของพื้นหลัง เพื่อสร้างมิติสไตล์ Dark Mode */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-pink-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* --- ฝั่งซ้าย: เนื้อหาข้อมูล (7 Columns) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge: Open for Work (ปรับเป็นโทนม่วงเข้มโปร่งแสงแบบล้ำๆ) */}
          <div className="inline-flex items-center gap-2 bg-[#23123A] border border-[#A855F7]/30 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-300 uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Open for work
          </div>

          <p className="text-sm sm:text-base font-bold text-purple-400 tracking-widest uppercase mb-1">
            HI, I AM
          </p>

          {/* ส่วนของชื่อใหญ่ */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            Wanwisa Sukkhala
          </h1>

          {/* ส่วนพิมพ์ดีดอนิเมชัน (ปรับไฮไลท์เป็นสีม่วง-ชมพูเรืองแสง) */}
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 mb-6 flex items-center gap-2">
            <span>Expertise in</span>
            <span className="text-[#C084FC] border-r-2 border-[#A855F7] pr-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              <TypeAnimation
                sequence={[
                  "UI/UX Design",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* คำอธิบายสไตล์มินิมอล */}
          <p className="max-w-xl text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-10">
            A full-stack engineer and UI/UX artisan dedicated to crafting lightning-fast, secure, and visually breathtaking web platforms. Combining solid system design with pixel-perfect interfaces.
          </p>

          {/* กลุ่มปุ่มกดปรับสีเข้ากับธีมใหม่ */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* ปุ่ม VIEW PORTFOLIO (เปลี่ยนเป็นสีม่วงไล่เฉดหรูหรา) */}
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-purple-500/20 transition-all group text-sm"
            >
              VIEW PORTFOLIO
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            
            {/* ปุ่ม DOWNLOAD CV (ปรับเป็นกล่องโปร่งแสง Dark Outline เข้ากับหน้าสกิล) */}
            <a 
              href="./File/wanwisa.skl-Eng.pdf" 
              download="wanwisa.skl-Eng.pdf"
              className="inline-flex items-center justify-center gap-2 bg-[#160D24]/60 hover:bg-[#23153A] text-purple-200 font-semibold px-6 py-3.5 rounded-xl border border-purple-900/50 shadow-sm transition-all text-sm backdrop-blur-sm"
            >
              DOWNLOAD CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-purple-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* --- ฝั่งขวา: Card Window Mockup (5 Columns ปรับเป็น Dark Glassmorphism) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* ซ้อนการ์ดเอฟเฟกต์มิติด้านหลังแบบโปร่งแสงโทนเข้ม */}
          <div className="absolute inset-0 bg-purple-950/10 rounded-3xl border border-purple-900/30 translate-x-4 translate-y-4 -z-10 backdrop-blur-sm" />
          
          {/* กล่องการ์ดหน้าต่าง IDE โทนม่วงเข้มคริสตัล */}
          <div className="w-full max-w-[420px] bg-[#130922]/80 rounded-3xl border border-purple-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 relative overflow-hidden flex flex-col items-center backdrop-blur-md">
            
            {/* Header ของหน้าต่างวินโดว์ */}
            <div className="w-full flex items-center justify-between border-b border-purple-950/50 pb-4 mb-8">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] opacity-80" />
              </div>
              <span className="text-xs font-mono text-purple-400/70">wanwisa.tsx</span>
            </div>

            {/* ส่วนรูปโปรไฟล์วงกลมไล่เฉดสี */}
            <div className="relative mb-6">
              {/* แสงเรืองรองโทนม่วง-ชมพู (Glow Effect) ด้านหลังรูปตามแบบหน้าสกิล */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A855F7] via-pink-500 to-purple-400 opacity-25 blur-lg transform scale-110" />
              
              {/* กรอบเส้นขอบไล่เฉดสีม่วงคริสตัล */}
              <div className="w-40 h-40 rounded-full p-[3px] bg-gradient-to-b from-purple-500 via-purple-900/40 to-transparent shadow-inner relative z-10">
                <div className="w-full h-full rounded-full bg-[#180C2B] overflow-hidden border border-purple-500/20">
                  <img 
                    src="../Image/myJdev-2.png" 
                    alt="Wanwisa Sukkhala" 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              </div>
            </div>

            {/* ชื่อและสถานที่ตั้งด้านล่างรูป */}
            <h3 className="text-xl font-bold text-white tracking-wide mb-1">
              "Wanwisa Sukkhala"
            </h3>
            <p className="text-xs sm:text-sm font-medium text-purple-300 tracking-wide mb-8">
              Bangkok, Thailand
            </p>

            {/* แถบ Footer สถานะด้านล่างสุด */}
            <div className="w-full border-t border-purple-950/50 pt-4 flex items-center justify-between font-mono text-[10px] sm:text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="text-slate-300">ONLINE</span>
              </div>
              <div>
                YEARS EXP: <span className="font-bold text-purple-300">2</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}