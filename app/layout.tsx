import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // import ตัวที่เราสร้างตะกี้
import { Analytics } from '@vercel/analytics/react';

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Wanwisa.skl",
  description: "Profile wanwisa.skl",
  icons: {
    icon: [
      { url: "/Image/icon/icons8-code-94.png" }, // ไอคอนหลักสำหรับ Browser ทั่วไป
      { url: "/Image/icon/icons8-code-94.png", sizes: "94x94", type: "image/png" } // ระบุขนาดและประเภทให้ชัดเจน
    ],
    // เผื่อไว้สำหรับเวลาคนแชร์ลิงก์หรือเซฟหน้าเว็บลงบน iPhone/iPad (Apple Touch Icon)
    apple: [
      { url: "/Image/icon/icons8-code-94.png", sizes: "94x94", type: "image/png" }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={`${prompt.className} antialiased selection:bg-[#8CFF3D] selection:text-black`}>
        {/* ใช้ ClientLayout จัดการการแสดงผล Loading และ Navbar */}
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}