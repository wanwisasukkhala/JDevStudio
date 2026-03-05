"use client";
// เปลี่ยนมาใช้ DotLottieReact จาก package ใหม่
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="w-72 h-72">
        <DotLottieReact
          src="https://lottie.host/3c3976cb-c00c-4f00-8f6e-64b750a4a195/kkxtaNmS6e.lottie"
          loop
          autoplay
        />
      </div>
      {/* เพิ่มข้อความเท่ๆ ด้านล่างเจ้าแมวได้นะครับ */}
      <p className="mt-4 text-gray-500 animate-pulse font-medium">
        กำลังโหลดข้อมูล...
      </p>
    </div>
  );
}
