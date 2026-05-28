"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Home, User,  Code2, Briefcase, LayoutGrid, Mail } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // เพิ่ม property icon เพื่อเอาไว้ใช้แสดงบนแถบล่างของมือถือ
  const menuItems = [
    { name: "Home", href: "#home", id: "home", icon: <Home size={20} /> },
    { name: "About", href: "#about", id: "about", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Code2 size={20} /> },
    { name: "Experience", href: "#education", id: "education", icon: <Briefcase size={20} /> },
    { name: "Portfolio", href: "#portfolio", id: "portfolio", icon: <LayoutGrid size={20} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -80% 0px", 
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

    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =======================================================
          1. TOP NAVBAR (แสดงเฉพาะจอคอมพิวเตอร์และแท็บเล็ตขนาดใหญ่ lgขึ้นไป)
         ======================================================= */}
      <nav className="hidden lg:block bg-[#08020f]/80 backdrop-blur-md sticky top-0 z-50 border-b border-purple-950/40 w-full transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link href="#home" className="group flex items-center gap-3">
                <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110">
                  <Image src="/Image/icon/icons8-code-94.png" alt="Logo" fill className="object-contain" />
                </div>
                <div className="text-xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Wanwisa</span>
                  <span className="text-white ml-1.5 font-light">.Skl</span>
                </div>
              </Link>
            </div>

            {/* Desktop เมนูตรงกลาง */}
            <div className="flex items-center gap-x-6 xl:gap-x-8">
              {menuItems.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-300 ${
                    activeSection === item.id ? "text-purple-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* เส้นใต้เวลากด Active */}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full ${
                    activeSection === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  }`} />
                </Link>
              ))}
            </div>

            {/* ปุ่ม Contact ขวาสุดของจอคอม */}
            <div className="flex items-center">
              <Link
                href="#contact"
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg ${
                  activeSection === "contact" 
                  ? "bg-white text-purple-950 border border-white" 
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 shadow-purple-950/50"
                }`}
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* =======================================================
          2. MOBILE APP-STYLE BOTTOM NAVIGATION (สำหรับหน้าจอมือถือ lg ลงไป)
         ======================================================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
        {/* แถบเมนูลอยตัวสไตล์โมเดิร์นแอป (Floating Bottom Bar) */}
        <div className="max-w-md mx-auto bg-[#12071f]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_-10px_35px_rgba(0,0,0,0.5)] flex items-center justify-between p-2 pointer-events-auto">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 relative rounded-xl transition-all duration-300"
              >
                {/* ไอคอนพร้อม Effect เรืองแสงเมื่อ Active */}
                <div className={`transition-all duration-300 ${
                  isActive 
                    ? "text-pink-400 scale-110 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]" 
                    : "text-slate-400 hover:text-slate-200"
                }`}>
                  {item.icon}
                </div>
                
                {/* ข้อความเมนูด้านล่างขนาดมินิมอล */}
                <span className={`text-[9px] font-medium tracking-wide mt-1 transition-colors duration-300 ${
                  isActive ? "text-white font-bold" : "text-slate-500"
                }`}>
                  {item.name}
                </span>

                {/* จุดกลมๆ ด้านล่างบอกสถานะปัจจุบัน */}
                {isActive && (
                  <span className="absolute bottom-0 w-1 h-1 rounded-full bg-pink-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}