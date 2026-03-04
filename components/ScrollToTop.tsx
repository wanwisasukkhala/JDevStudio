"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ป้องกัน Hydration Error
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      // แสดงปุ่มเมื่อเลื่อนลงมามากกว่า 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ถ้ายังไม่ได้ mount บน client ไม่ต้องเรนเดอร์อะไรเลย
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[70]">
      <button
        onClick={scrollToTop}
        title="เลื่อนขึ้นด้านบน"
        className={`
          flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14 
          rounded-full bg-[#3DB2FF] text-white shadow-2xl 
          hover:bg-slate-900 transition-all duration-500 transform 
          hover:-translate-y-2 active:scale-95
          ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}