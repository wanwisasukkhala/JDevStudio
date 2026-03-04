import type { Metadata } from "next";
import { Prompt, Sarabun , Mitr } from "next/font/google"; // Import ฟอนต์ไทยที่นิยม
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";


// เลือกใช้ Prompt สำหรับดีไซน์ที่ดู Modern (แนะนำสำหรับ Hero/About ที่เราทำ)
const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

// (ตัวเลือกสำรอง) หากต้องการความทางการมากขึ้นสามารถใช้ Sarabun ได้
const sarabun = Sarabun({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  variable: "--font-sarabun",
});

// (ตัวเลือกสำรอง) หากต้องการฟอนต์ที่มีความเป็นทางการมากขึ้นสามารถใช้ Mitr ได้
const mitr = Mitr({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mitr",
});

export const metadata: Metadata = {
  title: "JDev Studio",
  description: "พอร์ตโฟลิโอ Full-stack Developer โดย วรรณวิสา สุขขลา",
  icons: {
    icon: "/Image/icon/icons8-code-94.png",
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
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
    <ScrollToTop />
  </body>
</html>
  );
}