"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Search, 
  Layout, 
  Code2, 
  TestTube2, 
  Rocket, 
  Settings2 
} from 'lucide-react';

const sdlcSteps = [
  {
    id: 1,
    title: "Planning & Analysis",
    description: "วิเคราะห์ Requirement จากลูกค้าและวางแผนโครงสร้างระบบเพื่อให้ตอบโจทย์ธุรกิจมากที่สุด",
    icon: <Search size={24} />,
    color: "from-blue-400 to-blue-600",
    shadow: "shadow-blue-500/20",
    position: "top-0 left-1/2 -translate-x-1/2"
  },
  {
    id: 2,
    title: "Design",
    description: "ออกแบบ UI/UX และ System Architecture (Database, API Structure) ก่อนเริ่มลงมือเขียนโค้ด",
    icon: <Layout size={24} />,
    color: "from-cyan-400 to-cyan-600",
    shadow: "shadow-cyan-500/20",
    position: "top-[20%] right-0"
  },
  {
    id: 3,
    title: "Development",
    description: "ลงมือพัฒนา Full-Stack โดยใช้ Stack ที่เชี่ยวชาญ (React, Node.js, Next.js) ตามที่ออกแบบไว้",
    icon: <Code2 size={24} />,
    color: "from-[#72b2f3] to-[#3DB2FF]",
    shadow: "shadow-blue-400/20",
    position: "bottom-[20%] right-0"
  },
  {
    id: 4,
    title: "Testing (QA)",
    description: "ตรวจสอบคุณภาพด้วยประสบการณ์ QA ทั้ง Manual และ Automate เพื่อให้ระบบไร้ที่ติ (No Bug)",
    icon: <TestTube2 size={24} />,
    color: "from-indigo-400 to-indigo-600",
    shadow: "shadow-indigo-500/20",
    position: "bottom-0 left-1/2 -translate-x-1/2"
  },
  {
    id: 5,
    title: "Deployment",
    description: "นำระบบขึ้นใช้งานจริง (Go-Live) บน Cloud Infrastructure และตรวจสอบความเรียบร้อย",
    icon: <Rocket size={24} />,
    color: "from-purple-400 to-purple-600",
    shadow: "shadow-purple-500/20",
    position: "bottom-[20%] left-0"
  },
  {
    id: 6,
    title: "Maintenance",
    description: "ดูแลและพัฒนาระบบอย่างต่อเนื่อง รวมถึงการ Optimize Performance ให้ดีขึ้นเสมอ",
    icon: <Settings2 size={24} />,
    color: "from-slate-400 to-slate-600",
    shadow: "shadow-slate-500/20",
    position: "top-[20%] left-0"
  }
];

export default function SDLC() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = sdlcSteps[activeIndex];

  // ฟังก์ชันเลื่อนไป Step ถัดไป
  const nextStep = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sdlcSteps.length);
  }, []);

  // ระบบ Auto Play 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 5000); // 5000ms = 5 วินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกถอดออก
  }, [nextStep]);

  // ฟังก์ชันเมื่อผู้ใช้กดเลือกเอง
  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="min-h-screen bg-[#0f2136] py-24 px-6 flex flex-col justify-center items-center font-sans">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#72b2f3]"></span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              ขั้นตอน <span className="text-[#72b2f3]">การทำงาน</span>
            </h2>
          </div>
          <p className="mt-4 text-gray-400 text-lg">มาตรฐานการทำงานในรูปแบบ SDLC ที่เรายึดถือ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* ฝั่งซ้าย: Circle Visualization */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* เส้นวงกลมประ */}
            <div className="absolute inset-0 border-[2px] border-dashed border-[#72b2f3]/20 rounded-full animate-[spin_60s_linear_infinite]"></div>

            {/* จุดศูนย์กลาง (Active Icon Display) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${activeStep.color} flex items-center justify-center shadow-[0_0_50px_rgba(114,178,243,0.3)] transition-all duration-700 scale-110`}>
                <div className="text-white transform scale-[2] animate-pulse">
                  {activeStep.icon}
                </div>
              </div>
            </div>

            {/* ขั้นตอนต่างๆ รอบวงกลม */}
            {sdlcSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleManualSelect(index)}
                className={`absolute ${step.position} -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 z-20`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 
                  ${activeIndex === index 
                    ? `bg-white border-transparent text-black scale-125 shadow-2xl ${step.shadow}` 
                    : 'bg-[#1a2e45] border-[#72b2f3]/30 text-[#72b2f3] hover:border-[#72b2f3] hover:scale-110'
                  }`}
                >
                  {step.icon}
                </div>
                {/* Step Number Badge */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${activeIndex === index ? 'bg-blue-500 border-white text-white' : 'bg-[#0f2136] border-blue-500 text-blue-400'}`}>
                  {step.id}
                </div>
              </button>
            ))}
          </div>

          {/* ฝั่งขวา: รายละเอียดขั้นตอน */}
          <div className="relative overflow-hidden bg-[#162a41]/50 p-8 lg:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm shadow-2xl min-h-[400px] flex flex-col justify-center">
            
            {/* Progress Bar ด้านบนกล่องข้อมูล */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <div 
                key={activeIndex} // ใช้ key เพื่อ reset animation ทุกครั้งที่เปลี่ยน step
                className={`h-full bg-gradient-to-r ${activeStep.color} animate-[progress_5s_linear]`}
                style={{ width: '100%' }}
              ></div>
            </div>

            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="flex items-center gap-4">
                <div className={`text-5xl font-black  text-[#72b2f3]`}>0{activeStep.id}</div>
                <div className={`h-1 w-12 bg-gradient-to-r ${activeStep.color} rounded-full`}></div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeStep.title}
              </h3>
              
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
                {activeStep.description}
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                {sdlcSteps.map((_, dotIndex) => (
                  <div 
                    key={dotIndex}
                    className={`h-2 rounded-full transition-all duration-500 ${activeIndex === dotIndex ? 'w-8 bg-[#72b2f3]' : 'w-2 bg-gray-600'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}