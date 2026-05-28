"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  // สร้าง Variants สำหรับกลุ่มข้อความฝั่งขวาเพื่อให้ค่อยๆ สไลด์ขึ้นทีละองค์ประกอบ (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // บังคับให้ลูกๆ ค่อยๆ แสดงห่างกันทีละ 0.2 วินาที
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#08020f] py-20 px-6 sm:px-10 md:px-20 lg:px-32 font-sans text-white overflow-hidden flex items-center relative">
      
      {/* --- Background Grid Pattern --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B1556 1px, transparent 1px),
            linear-gradient(to bottom, #3B1556 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- ฝั่งซ้าย: รูปภาพพร้อมเฟดอินจากทางซ้ายและขยายขนาดเล็กน้อยเมื่อ Scroll มาถึง --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mx-auto lg:mx-0 order-1"
        >
          {/* เส้นขอบด้านหลังสีม่วงพาสเทลเรืองแสง */}
          <div className="absolute -inset-2 border-2 border-[#A855F7]/40 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 translate-y-4 -z-10 shadow-[0_0_20px_rgba(168,85,247,0.15)]"></div>
          
          <div className="relative w-[280px] h-[330px] sm:w-[400px] sm:h-[480px] overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-[#130922] border border-purple-900/30">
            <img
              src="/Image/myJdev-2.png"
              alt="About Me"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* --- ฝั่งขวา: คอนเทนเนอร์เนื้อหาข้อความ ค่อยๆ ทยอยสไลด์ขึ้นอย่างลื่นไหล --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 order-2"
        >
          {/* พาดหัวส่วนหัวข้อ */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#A855F7]"></span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* ย่อหน้าหลัก: ชื่อและตำแหน่ง */}
            <motion.p variants={itemVariants} className="text-slate-400 leading-[1.8] text-base sm:text-lg font-light">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent font-extrabold text-2xl block mb-2 font-sans tracking-wide">
                Wanwisa Sukkhala
              </span>
              A passionate{" "}
              <span className="text-white font-semibold border-b-2 border-[#A855F7]/40 pb-0.5">
                Web Developer & UX/UI Designer
              </span>{" "}
              leveraging a unique background rooted in one year of{" "}
              <span className="text-purple-300 font-medium">Software Quality Assurance (QA).</span>
            </motion.p>

            {/* ย่อหน้าขยายความ: รายละเอียดทักษะ Quality Mindset */}
            <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed text-sm sm:text-base font-light text-justify">
              With a strong foundation in software testing, I possess a unique <span className="italic text-[#C084FC] font-medium">"Quality Mindset"</span> that excels in precise requirement analysis and bridging complex business goals with intuitive user experiences. This ensures my web development projects and UX/UI designs are exceptionally stable, highly optimized, and truly user-centric. My technology stack includes crafting seamless interfaces with <span className="text-white font-semibold">React and Next.js (Tailwind CSS)</span>, building robust backend structures with <span className="text-white font-semibold">Node.js</span>, and managing data systems via <span className="text-white font-semibold">SQL Server, pgAdmin, and MySQL</span>.
            </motion.p>
          </div>

          {/* ส่วนของกลุ่มปุ่มกดดาวน์โหลดไฟล์ CV */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            {/* ปุ่ม Download CV (Thai) */}
            <a
              href="/File/wanwisa.skl.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#160D24]/60 border border-purple-900/60 text-purple-200 px-8 py-3.5 rounded-full font-semibold hover:bg-[#23153A] hover:text-white transition-all transform hover:-translate-y-0.5 inline-block text-sm tracking-wide backdrop-blur-sm shadow-sm"
            >
              Download CV (Thai)
            </a>
            
            {/* ปุ่ม Download CV (English) */}
            <a
              href="/File/wanwisa.skl-Eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:-translate-y-0.5 inline-block text-sm tracking-wide shadow-lg shadow-purple-500/10"
            >
              Download CV (English)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}