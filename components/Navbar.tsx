"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/Image/icon/icons8-code-94.png"
                  alt="JDev Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-2xl font-bold tracking-tight flex items-center">
                <span className="text-[#3DB2FF]">JDev</span>
                <span className="text-slate-900 ml-1">Studio</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-[#3DB2FF] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#3DB2FF] rounded-full hover:bg-slate-800 transition-all"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b animate-in slide-in-from-top duration-300`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#3DB2FF] hover:bg-gray-50 rounded-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}