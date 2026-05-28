"use client";

import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// ข้อมูลการศึกษา
const educationData = [
  {
    period: "2022 - 2024",
    degree: "B.Sc. in Digital Business Technology",
    institution: "Rajamangala University of Technology Suvarnabhumi",
    description: "Graduated with GPA 3.43. Focused on software development, data structures, database management systems, and received the university's Diamond Business Award.",
  },
  {
    period: "2018 - 2020",
    degree: "High Vocational Certificate in Information Technology",
    institution: "Sahawith Business Technology College",
    description: "Built strong foundational roots in computer logic, networking principles, and mathematics, establishing a solid baseline for a software development career.",
  },
];

// ข้อมูลประสบการณ์การทำงาน
const experienceData = [
  {
    period: "July 2024 - May 2026",
    role: "Programmer / Full-Stack Developer",
    company: "Government Web Application & JDev Studio",
    description: "Developing robust web applications using React, Next.js, and Node.js. Executing data engineering pipelines, data cleaning, and regional mapping using Python scripts.",
  },
  {
    period: "November 2023 - March 2024",
    role: "Web Developer",
    company: "Online Attendance System Project",
    description: "Designed and developed an Online Attendance System leveraging ASP.NET Web Forms and SQL Server database, optimizing workflow tracking structures.",
  },
  {
    period: "November 2022 - October 2023", // อัปเดตช่วงเวลา QA เป็นสากลและถูกต้องตามประวัติจริง
    role: "Software Quality Assurance (QA) / Tester",
    company: "Software Testing Services",
    description: "Conducted requirement analysis, created rigorous test scenarios, executed test cases, and specialized in API testing utilizing Postman to ensure stable software integration.",
  },
];

export default function Qualifications() {
  return (
    <section className="relative min-h-screen bg-[#08020f] py-20 px-6 sm:px-10 md:px-16 lg:px-24 font-sans text-white overflow-hidden flex items-center">
      
      {/* --- Background Grid Pattern (ธีมตารางม่วงเข้มให้เข้าเซ็ตกับหน้าอื่นๆ) --- */}
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

      {/* แสงออร่าเรืองแสง (Glow Effect) ซ่อนอยู่ด้านหลังพื้นหลังเพื่อเพิ่มความสมบูรณ์แบบของ Dark Theme */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-pink-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- ส่วนหัวข้อกลางหน้าจอ (Qualifications / Awesome Journey) --- */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-semibold text-purple-400 tracking-[0.25em] uppercase block mb-2">
            QUALIFICATIONS
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Awesome{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-4" />
        </div>

        {/* --- Layout Grid 2 คอลัมน์ใหญ่ขนานกัน --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ================= ฝั่งซ้าย: EDUCATION HISTORY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-purple-950/50">
              <div className="p-2.5 bg-[#160D24]/80 text-purple-400 rounded-xl border border-purple-900/40 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Education History
              </h3>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-6 space-y-10 border-l border-purple-900/30">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* จุดวงกลม Indicator บนเส้น Timeline */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-purple-500 bg-[#0B0314] group-hover:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all duration-300" />
                  
                  {/* เนื้อหาประวัติ */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-bold text-purple-400 tracking-wider uppercase block">
                      {edu.period}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-300">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed text-justify pt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= ฝั่งขวา: PROFESSIONAL EXPERIENCE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-purple-950/50">
              <div className="p-2.5 bg-[#160D24]/80 text-purple-400 rounded-xl border border-purple-900/40 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Professional Experience
              </h3>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative pl-6 space-y-10 border-l border-purple-900/30">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* จุดวงกลม Indicator บนเส้น Timeline */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-purple-500 bg-[#0B0314] group-hover:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all duration-300" />
                  
                  {/* เนื้อหาประวัติการทำงาน */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-xs font-bold text-purple-400 tracking-wider uppercase block">
                      {exp.period}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-sm font-medium text-slate-300">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-400 font-light leading-relaxed text-justify pt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}