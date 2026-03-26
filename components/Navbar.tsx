"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // ตั้งค่าเริ่มต้นที่ home

  const menuItems = [
    { name: "หน้าแรก", href: "#home", id: "home" }, // เปลี่ยนจาก / เป็น #home
    { name: "เกี่ยวกับเรา", href: "#about", id: "about" },
    { name: "ประวัติการศึกษา", href: "#education", id: "education" },
    { name: "ประวัติการทำงาน", href: "#experience", id: "experience" },
    { name: "ขั้นตอนการทำงาน", href: "#sdlc", id: "sdlc" },
    { name: "ผลงานของเรา", href: "#portfolio", id: "portfolio" },
    { name: "ติดต่อเรา", href: "#contact", id: "contact" },
  ];

  // Logic ตรวจจับ Scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px", // ตรวจจับเมื่อ Section อยู่แถวๆ กลางจอ
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="#home" className="group flex items-center gap-3">
              <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image src="/Image/icon/icons8-code-94.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-[#3DB2FF]">Wanwisa</span>
                <span className="text-slate-900 ml-1">Sukkhala</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            {menuItems.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 text-[15px] font-medium transition-colors duration-300 ${
                  activeSection === item.id ? "text-[#3DB2FF]" : "text-gray-600 hover:text-[#3DB2FF]"
                }`}
              >
                {item.name}
                {/* เส้นใต้เมนู (Animated Underline) */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#3DB2FF] transition-transform duration-300 origin-left ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0"
                }`} />
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#contact"
              className={`px-6 py-2.5 text-sm font-semibold rounded-full transition-all shadow-md ${
                activeSection === "contact" 
                ? "bg-slate-800 text-white" 
                : "bg-[#3DB2FF] text-white hover:bg-slate-800"
              }`}
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                item.id === "contact"
                ? "text-white bg-[#3DB2FF] mt-4 text-center"
                : activeSection === item.id 
                  ? "text-[#3DB2FF] bg-blue-50" 
                  : "text-gray-600"
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