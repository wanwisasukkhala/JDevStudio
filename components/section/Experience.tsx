"use client";

import React from 'react';

const experiences = [
  { 
    company: 'THE EXPERTISE CO,LTD.', 
    role: 'Software Tester & Full Stack Developer', 
    period: 'ก.ค. 2567 - ปัจจุบัน',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Software Tester (1 ปี):</strong> วิเคราะห์ Requirement เพื่อออกแบบ Prototype, สร้าง Test Case/Scenario, ทดสอบ API ด้วย Postman และตรวจสอบฐานข้อมูลด้วย SQL Server</li>
        <li><strong>Full Stack Developer (หลังจาก 1 ปี - ปัจจุบัน):</strong> ศึกษาและพัฒนา Web Application ของหน่วยงานภาครัฐจัดทำเตรียมยื่นงาน และทำความสะอาดข้อมูลหน่วยงานรัฐด้วย Python และSupport ผู้ใช้งาน</li>
      </ul>
    )
  },
  { 
    company: 'THE EXPERTISE CO,LTD.', 
    role: 'Programmer (Trainee)', 
    period: 'พ.ย. 2566 - มี.ค. 2567',
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>พัฒนาระบบบันทึกเวลาเข้า-ออกงานออนไลน์ (Online Attendance System) โดยใช้ ASP.NET Web Forms ร่วมกับฐานข้อมูล SQL Server</li>
        <li>ออกแบบและพัฒนาเว็บไซต์ข้อมูลองค์กร (Company Profile)</li>
      </ul>
    )
  },
  { 
    company: 'SOFT SQUARE INTERNATIONAL CO., LTD.', 
    role: 'Developer Intern', 
    period: 'ม.ค. 2563 - ม.ค. 2563',
    description: 'เรียนรู้การเขียนโค้ดพื้นฐาน (HTML/CSS/JS) และการทำระบบจัดการฐานข้อมูลด้วย MySQL '
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - โทนฟ้าคามมินิมอล */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            ประวัติ <span className="text-cyan-600">การทำงาน</span>
          </h2>
          <div className="mt-4 w-12 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* 1. เส้นแกนกลาง (แสดงเฉพาะจอใหญ่) */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-12 sm:space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row items-center w-full ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* 2. ฝั่งเนื้อหา (Card) */}
                <div className="w-full sm:w-1/2 px-8">
                  <div 
                    className={`bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan-100 transition-all duration-500 group relative ${
                      index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
                    }`}
                  >
                    {/* วันที่ (Period) */}
                    <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-4 py-1.5 rounded-full">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-500 font-medium mb-4">{exp.company}</p>
                    
                    <div className="text-gray-500 leading-relaxed text-sm">
                      {exp.description}
                    </div>

                    {/* หางลูกศรชี้เข้าหาเส้นกลาง (แสดงเฉพาะจอใหญ่) */}
                    <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 ${
                      index % 2 === 0 ? '-right-2' : '-left-2'
                    }`}></div>
                  </div>
                </div>

                {/* 3. จุดวงกลมตรงกลางเส้น */}
                <div className="absolute left-4 sm:left-1/2 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 z-10">
                  <div className="h-5 w-5 rounded-full bg-white border-4 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
                </div>

                {/* 4. ฝั่งว่าง (Spacer) */}
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}