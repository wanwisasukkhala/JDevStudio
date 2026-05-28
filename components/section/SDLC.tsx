"use client";

import React from "react";
import { Layout, Code2, ClipboardCheck, Search } from "lucide-react";
import { motion } from "framer-motion";

// ข้อมูลบริการเรียงตามลำดับขั้นตอนกระบวนการทำระบบ (Analysis -> Design -> Dev -> Testing)
const servicesData = [
  {
    title: "Business & Requirement Analysis",
    description: "Analyzing clients' business goals and translating complex requirements into precise technical specifications, ensuring the system perfectly aligns with real business needs.",
    icon: <Search size={24} />,
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, modern, and user-centric minimalist layouts in Figma with consistent grid structures, focusing on smooth and intuitive user journeys.",
    icon: <Layout size={24} />,
  },
  {
    title: "Frontend & Web Development",
    description: "Developing pixel-perfect, high-performance, and responsive web applications using modern frameworks like React and Next.js, styled cleanly with Tailwind CSS.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Software Testing & QA",
    description: "Leveraging a strong Quality Mindset to conduct thorough system testing, create test scenarios, and perform API testing with Postman to ensure a stable, bug-free deployment.",
    icon: <ClipboardCheck size={24} />,
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-[#F8FAFC] py-20 px-6 sm:px-10 md:px-16 lg:px-24 font-sans text-[#1E293B] overflow-hidden flex items-center">
      
      {/* --- Background Grid Pattern --- */}
      <div 
        className="absolute inset-0 z-0 opacity-60 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #E2E8F0 1px, transparent 1px),
            linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- ส่วนหัวข้อบริการกลางหน้าจอ --- */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-widest uppercase block mb-2">
            MY SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            What I Excel At
          </h2>
          <div className="w-16 h-[4px] bg-[#2563EB] rounded-full mx-auto mt-4" />
        </div>

        {/* --- Layout การ์ด 4 คอลัมน์ เรียงตามขั้นตอนการทำระบบ (ซ้ายไปขวา) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 md:p-8 flex flex-col justify-start items-start text-left hover:shadow-md hover:border-[#2563EB]/20 transition-all duration-300 group"
            >
              {/* กล่องใส่ไอคอนขอบมนสีฟ้าอ่อน */}
              <div className="p-3.5 bg-[#E0E7FF] text-[#2563EB] rounded-2xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0">
                {service.icon}
              </div>

              {/* หัวข้อชื่อบริการ */}
              <h3 className="text-xl font-extrabold text-[#0F172A] mb-3 leading-snug tracking-tight">
                {service.title}
              </h3>

              {/* ข้อความอธิบายรายละเอียดเชิงลึก */}
              <p className="text-sm text-[#64748B] font-normal leading-relaxed text-justify">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}