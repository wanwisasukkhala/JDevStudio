"use client";

import React, { useState } from 'react';
// 1. นำเข้าไอคอน Figma เพิ่มเติม
import { ExternalLink, Github, Code2, Briefcase, Layout, Monitor, Figma } from 'lucide-react';

const projects = [

  // --- หมวดหมู่: ผลงานตอนทำงานประจำ (Professional Work) ---
  {
    title: "Tester ระบบตรวจสารต้องห้ามทางการกีฬา",
    category: "ผลงานตอนทำงานประจำ",
    image: "/Image/STAM.png",
    description: "วิเคราะห์ออกแบบ Prototype และสร้าง Test Scenario ทำการทดสอบ และ Support ผู้ใช้งาน ของระบบภายในหน่วยงานการท่องการกีฬาแห่งประเทศไทย",
    tools: ["Miro", "SQL Server","excel"],
    github: null, 
    demo: "" 
  },
   {
    title: "Support ระบบสมัครสอบผู้นำร่อง หน่วยงานกรมเจ้าท่า",
    category: "ผลงานตอนทำงานประจำ",
    image: "/Image/SWMD.png",
    description: "Support ผู้ใช้งานระบบสมัครสอบนำร่องของหน่วยงานกรมเจ้าท่า ทำการแก้ไขปัญหาที่เกิดขึ้นจากการใช้งานจริง และปรับปรุงระบบให้มีประสิทธิภาพมากขึ้น",
    tools: [ "SQL Server","excel","postman","vpn"],
    github: null, 
    demo: "" 
  },
  {
    title: "Clean Data หน่วยงานสถิติแห่งชาติ",
    category: "ผลงานตอนทำงานประจำ",
    image: "/Image/Cleandata.png",
    description: "ทำความสะอาดข้อมูลการคลีนให้ข้อมูลแสดงออกมาดีที่สุด สวยที่สุดการนำข้อมูลไปใช้งานต่อ สำหรับหน่วยงานสถิติแห่งชาติ ",
    tools: ["Python", "Pandas", "pgAdmin","MongoDB Compass","oracle 19c"],
    github: null,
    // 2. ใส่ลิงก์ Figma ของคุณที่นี่ได้เลยครับ 👇
    demo: "" 
  },
  {
    title: "ออกแบบ Prototype เตรียมยื่นงาน แต่งานถูกยกเลิกไปซะก่อนครับ",
    category: "ผลงานตอนทำงานประจำ",
    image: "/Image/OAP.png",
    description: "ออกแบบ Prototype ระบบปรมาณู",
    tools: ["Figma"],
    github: null,
    // 2. ใส่ลิงก์ Figma ของคุณที่นี่ได้เลยครับ 👇
    demo: "https://www.figma.com/design/fqyk7IGKDhFeQ61HM8XiGj/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%B9-OAP2026?node-id=45-6&t=1tTMPTJDCyqYh1SG-1" 
  },
  {
    title: "ออกแบบ Prototype เตรียมยื่นงาน แต่งานถูกยกเลิกไปซะก่อนครับ",
    category: "ผลงานตอนทำงานประจำ",
    image: "/Image/KAIHUB.png",
    description: "แบบฟอร์มไก่ชน",
    tools: ["Figma"],
    github: null,
    // 2. ใส่ลิงก์ Figma ของคุณที่นี่ได้เลยครับ 👇
    demo: "https://www.figma.com/design/ONubYCFYomfSCYztqVEXEn/%E0%B9%81%E0%B8%9E%E0%B8%A5%E0%B8%95%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%8A%E0%B8%99?node-id=0-1&t=QPnF694zlg6KuPD2-1" 
  },

];

const categories = [
  { name: "All", icon: <Code2 size={16} /> },
  { name: "Landing Page", icon: <Layout size={16} /> },
  { name: "ระบบ (System)", icon: <Monitor size={16} /> },
  { name: "ผลงานตอนทำงานประจำ", icon: <Briefcase size={16} /> }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-[#0f2136] font-sans overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
             <span className="w-12 h-[2px] bg-[#72b2f3]"></span>
             <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">
                ผลงาน <span className="text-[#72b2f3]">ของเรา</span>
             </h2>
          </div>
          <p className="text-gray-400 text-lg">รวบรวมผลงานการพัฒนาซอฟต์แวร์และการออกแบบเว็บไซต์</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 border-2 ${
                filter === cat.name 
                ? "bg-[#72b2f3] text-[#0f2136] border-[#72b2f3] shadow-[0_0_20px_rgba(114,178,243,0.4)] scale-105" 
                : "bg-transparent text-gray-400 border-gray-700 hover:border-[#72b2f3] hover:text-[#72b2f3]"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#162a41]/50 rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-[#72b2f3]/30 transition-all duration-500 flex flex-col h-full backdrop-blur-sm"
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop'; }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-[#0f2136]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#72b2f3] hover:text-[#0f2136] transition-all transform hover:-translate-y-1"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#72b2f3] hover:text-[#0f2136] transition-all transform hover:-translate-y-1"
                      title={project.demo.includes('figma.com') ? "เปิดดู Figma Prototype" : "เยี่ยมชมเว็บไซต์"}
                    >
                      {/* 3. เช็คเงื่อนไข: ถ้าเป็นลิงก์ figma ให้แสดงไอคอน figma ถ้าไม่ใช่ให้แสดงไอคอนลิงก์ภายนอกปกติ */}
                      {project.demo.includes('figma.com') ? <Figma size={24} /> : <ExternalLink size={24} />}
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                   <span className="text-[10px] font-bold text-[#72b2f3] uppercase tracking-[0.2em] bg-[#72b2f3]/10 px-4 py-1.5 rounded-full border border-[#72b2f3]/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#72b2f3] transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tools.map((tool, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-3 py-1 bg-[#0f2136] text-[#72b2f3] text-[10px] font-black rounded-lg uppercase border border-[#72b2f3]/20 shadow-inner"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
             <p className="text-xl">ยังไม่มีรายการผลงานในหมวดหมู่นี้</p>
          </div>
        )}

      </div>
    </section>
  );
}