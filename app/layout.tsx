import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // import ตัวที่เราสร้างตะกี้

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Wanwisa",
  description: "พอร์ตโฟลิโอ Full-stack Developer โดย วันวิสา สุขคะละ",
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
        {/* ใช้ ClientLayout จัดการการแสดงผล Loading และ Navbar */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}