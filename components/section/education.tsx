"use client";

import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  { 
    university: 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี', 
    degree: 'ปริญญาตรี วิทยาศาสตรบัณฑิต (เทคโนโลยีธุรกิจดิจิทัล) GPA 3.43', 
    period: '2565 - 2567',
    description: 'มุ่งเน้นการศึกษาด้านการพัฒนาซอฟต์แวร์, โครงสร้างข้อมูล, และการจัดการฐานข้อมูล โดยได้รับรางวัลเพชรบริหาร ทางมหาวิทยาลัย',
    image: '/Image/IMG_1245.JPG'
  },
  { 
    university: 'วิทยาลัยเทคโนโลยีสหวิทย์บริหารธุรกิจ', 
    degree: 'ระดับประกาศนียบัตรวิชาชีพชั้นสูง (สาขาเทคโนโลยีสารสนเทศ)', 
    period: '2561 - 2563',
    description: 'เน้นปูพื้นฐานด้านตรรกศาสตร์และคณิตศาสตร์ ซึ่งเป็นรากฐานสำคัญในการก้าวเข้าสู่สายงานนักพัฒนาซอฟต์แวร์',
    image: '/Image/logo_sba.png'
  },
];

export default function Education() {
  return (
    <section className="min-h-screen bg-[#0f2136] py-24 px-6 sm:px-10 md:px-20 lg:px-32 font-sans text-white overflow-hidden flex flex-col justify-center">
      
      {/* ส่วนหัวข้อ (Header) */}
      <div className="max-w-7xl mx-auto w-full mb-16 lg:mb-24">
        <div className="flex items-center gap-4">
          <span className="w-12 h-[2px] bg-[#72b2f3]"></span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">
            ประวัติ <span className="text-[#72b2f3]">การศึกษา</span>
          </h2>
        </div>
      </div>

      {/* รายการประวัติการศึกษา */}
      <div className="max-w-7xl mx-auto w-full space-y-32">
        {educationData.map((edu, index) => {
          // เช็คว่าเป็นโลโก้ SBA หรือไม่ เพื่อปรับเป็นวงกลม
          const isCircleImage = edu.image === '/Image/logo_sba.png';
          
          return (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* ฝั่งซ้าย: เนื้อหาข้อความ */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="inline-block text-[#72b2f3] font-bold text-sm tracking-[0.2em] border-b-2 border-[#72b2f3]/30 pb-1">
                    {edu.period}
                  </span>
                  
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-[#3DB2FF] font-bold text-xl lg:text-2xl">
                    {edu.university}
                  </p>
                </div>

                <div className="relative">
                  {/* ตกแต่งเส้นแนวตั้งข้างข้อความ */}
                  <div className="absolute left-0 top-0 w-[2px] h-full bg-[#72b2f3]/20 rounded-full"></div>
                  <p className="text-gray-400 leading-relaxed text-lg lg:text-xl pl-6 font-light">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-gray-500">
                  <GraduationCap size={20} className="text-[#72b2f3]" />
                  <span className="text-sm uppercase tracking-widest">Academic Background</span>
                </div>
              </div>

              {/* ฝั่งขวา: รูปภาพพร้อมกรอบเยื้อง */}
              <div className="relative group mx-auto lg:ml-auto lg:mr-0 order-1 lg:order-2">
                {/* กรอบเยื้องด้านหลัง - ปรับเป็นวงกลมตามรูปภาพ */}
                <div className={`absolute -inset-2 border-2 border-[#72b2f3] opacity-40 group-hover:opacity-100 transition-opacity duration-500 translate-x-6 translate-y-6 -z-10 
                  ${isCircleImage ? 'rounded-full' : 'rounded-lg'}`}>
                </div>
                
                {/* คอนเทนเนอร์รูปภาพ */}
                <div className={`relative overflow-hidden shadow-2xl transition-all duration-500
                  ${isCircleImage 
                    ? 'w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-white flex items-center justify-center p-8' 
                    : 'w-[280px] h-[330px] sm:w-[400px] sm:h-[480px] rounded-lg bg-[#111]'
                  }`}>
                  <img
                    src={edu.image}
                    alt={edu.university}
                    className={`transition-transform duration-700 group-hover:scale-110
                      ${isCircleImage ? 'w-full h-full object-contain' : 'w-full h-full object-cover'}`}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  {/* Overlay จางๆ (ไม่แสดงถ้าเป็นรูปวงกลมพื้นหลังขาว) */}
                  {!isCircleImage && (
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}