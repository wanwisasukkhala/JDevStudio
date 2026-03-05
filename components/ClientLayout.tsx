"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ตั้งเวลาให้หายไปเมื่อโหลดเสร็จ (หรือปรับตามต้องการ)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2.5 วินาที

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
      <ScrollToTop />
    </>
  );
}