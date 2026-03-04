"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ปิดเมนูอัตโนมัติเมื่อขยายหน้าจอเกินขนาด Tablet (ป้องกันเมนูค้าง)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // เปลี่ยนเป็น lg (1024px)
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับเรา", href: "#about" },
    { name: "ประวัติการศึกษา", href: "#education" },
    { name: "ประวัติการทำงาน", href: "#experience" },
    { name: "ขั้นตอนการทำงาน", href: "#sdlc" },
    { name: "ผลงานของเรา", href: "#portfolio" },
    { name: "ติดต่อเรา", href: "#contact" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Image/icon/icons8-code-94.png"
                  alt="JDev Studio Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center">
                <span className="text-[#3DB2FF]">JDev</span>
                <span className="text-slate-900 ml-1">Studio</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - แสดงตั้งแต่จอขนาด lg (1024px) ขึ้นไป */}
          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            {menuItems.slice(0, -1).map((item) => ( // แสดงยกเว้น "ติดต่อเรา" เพราะมีปุ่มแยก
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-600 hover:text-[#3DB2FF] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button - แสดงเฉพาะจอ lg */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3DB2FF] rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile & Tablet Button (แสดงบน iPad ด้วย) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Overlay */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                item.name === "ติดต่อเรา" 
                ? "text-white bg-[#3DB2FF] mt-4 text-center" 
                : "text-gray-600 hover:text-[#3DB2FF] hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}